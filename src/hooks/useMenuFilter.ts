import { useMemo } from 'react';
import { MenuItem } from '../data/menuItems';
import { ClockIcon } from '@heroicons/react/24/outline';

interface MenuItemWithScore extends MenuItem {
  searchScore?: number;
}

export const useMenuFilter = (
  menuItems: MenuItem[], 
  searchQuery: string, 
  favorites: string[],
  recentPages: Array<{ href: string; label: string; timestamp: number; visitCount: number; icon?: React.FC<React.SVGProps<SVGSVGElement>> }>
) => {
  return useMemo(() => {
    const getFavoriteItems = (): MenuItem[] => {
      const favoriteItems: MenuItem[] = [];
      
      const collectFavorites = (items: MenuItem[]) => {
        items.forEach((item) => {
          if (item.href && favorites.includes(item.href)) {
            favoriteItems.push({ ...item, isFavorite: true });
          }
          if (item.subItems) {
            collectFavorites(item.subItems);
          }
        });
      };
      
      collectFavorites(menuItems);
      // Sort by visit count if available
      return favoriteItems.sort((a, b) => {
        const aVisits = recentPages.find(p => p.href === a.href)?.visitCount || 0;
        const bVisits = recentPages.find(p => p.href === b.href)?.visitCount || 0;
        return bVisits - aVisits;
      });
    };

    const getRecentItems = (): MenuItem[] => {
      return recentPages
        .slice(0, 5) // Top 5 recent
        .map(page => {
          // Find the full menu item
          const findMenuItem = (items: MenuItem[]): MenuItem | null => {
            for (const item of items) {
              if (item.href === page.href) {
                return { ...item, lastVisited: page.timestamp, visitCount: page.visitCount };
              }
              if (item.subItems) {
                const found = findMenuItem(item.subItems);
                if (found) return found;
              }
            }
            return null;
          };
          
          return findMenuItem(menuItems) || {
            label: page.label,
            href: page.href,
            icon: page.icon,
            lastVisited: page.timestamp,
            visitCount: page.visitCount,
          };
        });
    };

    const filterBySearch = (items: MenuItem[]): MenuItemWithScore[] => {
      if (!searchQuery) return items;

      const matchesQuery = (text: string) => 
        text.toLowerCase().includes(searchQuery.toLowerCase());

      const scoreMatch = (item: MenuItem): number => {
        let score = 0;
        if (matchesQuery(item.label)) score += item.label.toLowerCase().startsWith(searchQuery.toLowerCase()) ? 10 : 5;
        if (item.href && matchesQuery(item.href)) score += 3;
        if (item.description && matchesQuery(item.description)) score += 2;
        if (item.tags?.some(tag => matchesQuery(tag))) score += 1;
        return score;
      };

      return items
        .map((item) => {
          if (item.label === 'Favorites' || item.label === 'Recently Visited') {
            return item; // Keep special sections as-is during search
          }

          const filteredSubItems = item.subItems
            ? filterBySearch(item.subItems)
            : [];

          const itemScore = scoreMatch(item);
          const hasMatchingChildren = filteredSubItems.length > 0;

          if (itemScore > 0 || hasMatchingChildren) {
            return {
              ...item,
              subItems: filteredSubItems,
              searchScore: itemScore,
            } as MenuItemWithScore;
          }

          return null;
        })
        .filter((item): item is MenuItemWithScore => item !== null)
        .sort((a, b) => {
          const scoreA = a.searchScore || 0;
          const scoreB = b.searchScore || 0;
          return scoreB - scoreA;
        });
    };

    const processedItems = menuItems.map((item) => {
      if (item.label === 'Favorites') {
        const favoriteItems = getFavoriteItems();
        return {
          ...item,
          subItems: favoriteItems,
        };
      }
      return item;
    });

    // Add Recently Visited section if we have recent pages and no search
    if (!searchQuery && recentPages.length > 0) {
      const recentItems = getRecentItems();
      const recentSection: MenuItem = {
        label: 'Recently Visited',
        subItems: recentItems,
        icon: ClockIcon,
      };
      
      // Insert after Favorites
      const result = [...processedItems];
      const favoritesIndex = result.findIndex(item => item.label === 'Favorites');
      if (favoritesIndex >= 0) {
        result.splice(favoritesIndex + 1, 0, recentSection);
      } else {
        result.unshift(recentSection);
      }
      return filterBySearch(result);
    }

    return filterBySearch(processedItems);
  }, [menuItems, searchQuery, favorites, recentPages]);
};