import { useCallback } from 'react';

export const useSearchHandlers = (setSearchQuery) => {
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, [setSearchQuery]);

  return { handleSearch };
};