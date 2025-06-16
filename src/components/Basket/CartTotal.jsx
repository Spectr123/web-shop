// Компонент итогов корзины
const CartTotal = ({ totalPrice, totalItems, onPurchase, onClearCart }) => (
  <div className="cart-total">
    <div className="total-info">
      <div className="total-items">Товаров: {totalItems} шт.</div>
      <div className="total-price">
        <strong>Общая сумма: {totalPrice} ₸</strong>
      </div>
    </div>
    <div className="cart-buttons">
      <button className="clear-cart-btn" onClick={onClearCart}>
        Очистить корзину
      </button>
      <button className="purchase-btn" onClick={onPurchase}>
        Купить
      </button>
    </div>
  </div>
);

export default CartTotal;