import { useMemo } from 'react';

export const useFilterItemsByCategory = (items, selectedCategory, searchQuery) => {
  return useMemo(() => {
    let filteredItems = items;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      return items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== "Все товары") {
      filteredItems = filteredItems.filter(
        (item) => item.category === selectedCategory
      );
    }

    return filteredItems;
  }, [items, selectedCategory, searchQuery]);
};