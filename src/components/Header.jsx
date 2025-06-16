import { useState } from "react";
import { ShoppingBasket } from "lucide-react";
import ClearBasket from "./Basket/ClearBasket";
import OrdersList from "./Basket/OrdersList";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import EmptyCart from "./Basket/EmptyCart";
import CartTotal from "./Basket/CartTotal";
import useCart from "./Hooks/useCart";
import useMobile from "./Hooks/useMobile";
import useClickOutside from "./Hooks/useClickOutSide";
import PresentationSlider from "./PresentationSlider";

const Header = ({ orders, onDelete, onIncrease, onDecrease }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const isMobile = useMobile();
  const { cartRef, cartIconRef } = useClickOutside(cartOpen, setCartOpen);
  const { totalPrice, totalItems, handlePurchase, clearAllItems } = useCart(
    orders,
    onDelete
  );

  const toggleCart = () => setCartOpen((prev) => !prev);

  const handleClearCart = () => {
    if (orders.length === 0) {
      alert("Корзина уже пуста!");
      return;
    }
    setIsConfirmModalOpen(true);
  };

  const confirmClearCart = () => {
    clearAllItems();
    setIsConfirmModalOpen(false);
  };

  const handlePurchaseClick = () => {
    handlePurchase();
    setCartOpen(false);
  };

  return (
    <header>
      <div>
        <span className="logo">goMART 2.0</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Работа</li>
        </ul>

        <div
          className="basket-icon-container"
          onClick={toggleCart}
          ref={cartIconRef}
        >
          <ShoppingBasket
            className={`basket-icon ${cartOpen ? "active" : ""}`}
            size={20}
          />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </div>

        {cartOpen && <div className="shop-cart-overlay" onClick={toggleCart} />}

        {cartOpen && (
          <div className="shop-cart" ref={cartRef}>
            <div className="shop-cart-items">
              {orders.length > 0 ? (
                <OrdersList
                  orders={orders}
                  onDelete={onDelete}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                />
              ) : (
                <EmptyCart />
              )}
            </div>
            <CartTotal
              totalPrice={totalPrice}
              totalItems={totalItems}
              onPurchase={handlePurchaseClick}
              onClearCart={handleClearCart}
            />
          </div>
        )}
      </div>

      <ClearBasket
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmClearCart}
        message="Все товары будут удалены из корзины. Вы уверены, что хотите продолжить?"
      />

      {!isMobile && <PresentationSlider />}
    </header>
  );
};

export default Header;
