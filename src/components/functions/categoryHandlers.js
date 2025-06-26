import { useCallback } from 'react';

export const useCategoryHandlers = (setSelectedCategory) => {
  const handleCategorySelection = useCallback((category) => {
    setSelectedCategory(category);
  }, [setSelectedCategory]);

  return { handleCategorySelection };
};