import { useCallback } from 'react';

export const useCalculations = (orders) => {
  const calculateTotalPrice = useCallback(() => {
    return orders.reduce(
      (total, order) => total + order.price * order.quantity,
      0
    );
  }, [orders]);

  const calculateTotalItems = useCallback(() => {
    return orders.reduce((total, order) => total + order.quantity, 0);
  }, [orders]);

  return { calculateTotalPrice, calculateTotalItems };
};