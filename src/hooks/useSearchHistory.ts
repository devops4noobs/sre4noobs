import { useState, useEffect, useCallback } from 'react';

const MAX_SEARCH_HISTORY = 10;

export const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [setRecentSearches] = useState<string[]>([]);

  // Load search history from localStorage
  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem('searchHistory');
      if (storedHistory) {
        setSearchHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  }, []);

  // Save search history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    } catch (error) {
      console.error('Failed to save search history:', error);
    }
  }, [searchHistory]);

  const addToSearchHistory = useCallback((query: string) => {
    if (!query.trim() || query.length < 2) return;
    
    setSearchHistory((prev) => {
      const filtered = prev.filter(item => item !== query);
      const newHistory = [query, ...filtered].slice(0, MAX_SEARCH_HISTORY);
      return newHistory;
    });
  }, []);

  const clearSearchHistory = useCallback(() => {
    setSearchHistory([]);
    setRecentSearches([]);
  }, []);

  const removeFromHistory = useCallback((query: string) => {
    setSearchHistory(prev => prev.filter(item => item !== query));
  }, []);

  const getSearchSuggestions = useCallback((currentQuery: string) => {
    if (!currentQuery.trim()) return searchHistory.slice(0, 5);
    
    return searchHistory
      .filter(item => 
        item.toLowerCase().includes(currentQuery.toLowerCase()) && 
        item !== currentQuery
      )
      .slice(0, 5);
  }, [searchHistory]);

  return {
    searchHistory,
    addToSearchHistory,
    clearSearchHistory,
    removeFromHistory,
    getSearchSuggestions,
  };
};
