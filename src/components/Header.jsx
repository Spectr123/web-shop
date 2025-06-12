import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import { ShoppingBasket } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Order from "./Order";

const OrdersList = ({ orders, onDelete, onIncrease, onDecrease }) => {
  return (
    <div>
      {orders.map((el) => (
        <Order 
          key={el.id} 
          item={el} 
          onDelete={onDelete}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="empty">
      <h2>Корзина пуста</h2>
      <p>Добавьте товары в корзину, чтобы увидеть их здесь.</p>
    </div>
  );
};

const CartTotal = ({ totalPrice, totalItems, onPurchase }) => {
  return (
    <div className="cart-total">
      <div className="total-info">
        <div className="total-items">
          Товаров: {totalItems} шт.
        </div>
        <div className="total-price">
          <strong>Общая сумма: {totalPrice} ₸</strong>
        </div>
      </div>
      <button className="purchase-btn" onClick={onPurchase}>
        Купить
      </button>
    </div>
  );
};

const Header = ({ orders, onDelete, onIncrease, onDecrease }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const getTotalPrice = () => {
    return orders.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return orders.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleCart = () => {
    setCartOpen(prev => !prev);
  };

  const handlePurchase = () => {
    if (orders.length === 0) {
      alert("Корзина пуста!");
      return;
    }
    
    const totalPrice = getTotalPrice();
    const totalItems = getTotalItems();
    
    alert(`Спасибо за покупку!\nТоваров: ${totalItems} шт.\nСумма: ${totalPrice} ₸`);
    orders.forEach(order => onDelete(order.id));
    setCartOpen(false);
  };

  const totalItemsCount = getTotalItems();

  return (
    <header>
      <div>
        <span className="logo">goMART 2.0</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Работа</li>
        </ul>
        <div className="basket-icon-container">
          <ShoppingBasket
            onClick={toggleCart}
            className={`basket-icon ${cartOpen && "active"}`}
            size={20}
          />
          {totalItemsCount > 0 && (
            <span className="cart-badge">{totalItemsCount}</span>
          )}
        </div>
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? (
              <>
                <div className="cart-header">
                  <h3>Корзина ({totalItemsCount})</h3>
                </div>
                <OrdersList 
                  orders={orders} 
                  onDelete={onDelete}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                />
                <CartTotal
                  totalPrice={getTotalPrice()}
                  totalItems={totalItemsCount}
                  onPurchase={handlePurchase}
                />
              </>
            ) : (
              <EmptyCart />
            )}
          </div>
        )}
      </div>
      <div className="presentation">
        <Swiper
          modules={[Navigation, Keyboard, Autoplay]}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          keyboard={{
            enabled: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          className="presentation-slider"
        >
          <SwiperSlide>
            <img src="./img/bg.png" alt="Shop Item 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/bg2.jpg" alt="Shop Item 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/bg3.jpg" alt="Shop Item 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
};

export default Header;