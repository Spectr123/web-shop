import { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';

export const useCartHandlers = (setOrders) => {
  const lastToastTimestamp = useRef(0);

  const removeItemFromCart = useCallback((id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  }, [setOrders]);

  const updateItemQuantity = useCallback((id, operation) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id
          ? {
              ...order,
              quantity:
                operation === "increase"
                  ? order.quantity + 1
                  : Math.max(1, order.quantity - 1),
            }
          : order
      )
    );
  }, [setOrders]);

  const addItemToCart = useCallback((item, quantity = 1) => {
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === item.id);
      const now = Date.now();
      if (now - lastToastTimestamp.current > 100) {
        toast.success(
          existingOrder
            ? `Количество ${item.title} увеличено`
            : ` ${item.title} добавлен(а) в корзину`,
          {
            position: "bottom-right",
            autoClose: 1500,
          }
        );
        lastToastTimestamp.current = now;
      }

      return existingOrder
        ? prevOrders.map((order) =>
            order.id === item.id
              ? { ...order, quantity: order.quantity + quantity }
              : order
          )
        : [...prevOrders, { ...item, quantity: quantity }];
    });
  }, [setOrders]);

  return { removeItemFromCart, updateItemQuantity, addItemToCart };
};