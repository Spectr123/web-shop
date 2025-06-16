// Хук для управления корзиной
const useCart = (orders, onDelete) => {
  const getTotalPrice = () =>
    orders.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () =>
    orders.reduce((total, item) => total + item.quantity, 0);

  const clearAllItems = () => orders.forEach((order) => onDelete(order.id));

  const handlePurchase = () => {
    if (orders.length === 0) {
      alert("Корзина пуста!");
      return;
    }

    const totalPrice = getTotalPrice();
    const totalItems = getTotalItems();

    alert(
      `Спасибо за покупку!\nТоваров: ${totalItems} шт.\nСумма: ${totalPrice} ₸`
    );
    clearAllItems();
  };

  return {
    totalPrice: getTotalPrice(),
    totalItems: getTotalItems(),
    handlePurchase,
    clearAllItems,
  };
};

export default useCart;