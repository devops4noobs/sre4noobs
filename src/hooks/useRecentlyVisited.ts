import { useState, useEffect, useCallback } from 'react';

interface VisitedPage {
  href: string;
  label: string;
  timestamp: number;
  visitCount: number;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const MAX_RECENT_PAGES = 10;

export const useRecentlyVisited = () => {
  const [recentPages, setRecentPages] = useState<VisitedPage[]>([]);

  // Load recently visited from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('recentlyVisited');
      if (stored) {
        setRecentPages(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load recently visited:', error);
    }
  }, []);

  // Save recently visited to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('recentlyVisited', JSON.stringify(recentPages));
    } catch (error) {
      console.error('Failed to save recently visited:', error);
    }
  }, [recentPages]);

  const addToRecentlyVisited = useCallback((page: Omit<VisitedPage, 'timestamp' | 'visitCount'>) => {
    setRecentPages((prev) => {
      const existingIndex = prev.findIndex(p => p.href === page.href);
      const now = Date.now();
      
      if (existingIndex >= 0) {
        // Update existing page
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          timestamp: now,
          visitCount: updated[existingIndex].visitCount + 1,
        };
        // Move to front
        const [updatedPage] = updated.splice(existingIndex, 1);
        return [updatedPage, ...updated];
      } else {
        // Add new page
        const newPage: VisitedPage = {
          ...page,
          timestamp: now,
          visitCount: 1,
        };
        return [newPage, ...prev].slice(0, MAX_RECENT_PAGES);
      }
    });
  }, []);

  const clearRecentlyVisited = useCallback(() => {
    setRecentPages([]);
  }, []);

  const removeFromRecentlyVisited = useCallback((href: string) => {
    setRecentPages(prev => prev.filter(page => page.href !== href));
  }, []);

  return {
    recentPages,
    addToRecentlyVisited,
    clearRecentlyVisited,
    removeFromRecentlyVisited,
  };
};
