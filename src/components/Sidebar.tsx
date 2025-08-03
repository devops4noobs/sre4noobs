'use client';
import { useState, useCallback, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  ChevronDownIcon, LockClosedIcon, XMarkIcon, StarIcon, MagnifyingGlassIcon,
  ClockIcon, TrashIcon, Cog6ToothIcon, ChevronUpIcon
} from '@heroicons/react/24/outline';
import { menuItems, MenuItem } from '../data/menuItems';
import { useFavorites } from '../hooks/useFavorites';
import { useMenuFilter } from '../hooks/useMenuFilter';
import { useSearchHistory } from '../hooks/useSearchHistory';
import { useRecentlyVisited } from '../hooks/useRecentlyVisited';
import { SearchHighlighter } from './SearchHighlighter';
import { LoadingState } from './LoadingState';
import { Breadcrumbs } from './Breadcrumbs';
import { ThemeSelector } from './ThemeSelector';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { recentPages, addToRecentlyVisited, clearRecentlyVisited } = useRecentlyVisited();
  const { searchHistory, addToSearchHistory, clearSearchHistory, getSearchSuggestions } = useSearchHistory();
  const filteredItems = useMenuFilter(menuItems, searchQuery, favorites, recentPages);

  // Auto-expand sections with search results
  useEffect(() => {
    if (searchQuery && filteredItems.length > 0) {
      const sectionsToExpand: string[] = [];
      filteredItems.forEach(item => {
        if (item.subItems && item.subItems.length > 0) {
          sectionsToExpand.push(item.label);
        }
      });
      setExpandedSections(prev => [...new Set([...prev, ...sectionsToExpand])]);
    }
  }, [searchQuery, filteredItems]);

  const toggleSection = useCallback((label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  }, []);

  const handleToggleFavorite = useCallback((label: string, href: string) => {
    toggleFavorite(href);
  }, [toggleFavorite]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim().length >= 2) {
      addToSearchHistory(query);
    }
  }, [addToSearchHistory]);

  const handleLinkClick = useCallback((item: MenuItem) => {
    if (item.href) {
      addToRecentlyVisited({
        href: item.href,
        label: item.label,
        icon: item.icon,
      });
    }
    if (!item.isPremium) {
      onClose();
    }
  }, [addToRecentlyVisited, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSearchQuery('');
      setShowSearchSuggestions(false);
    } else if (e.key === 'Enter' && searchQuery.trim()) {
      addToSearchHistory(searchQuery);
      setShowSearchSuggestions(false);
    }
  }, [searchQuery, addToSearchHistory]);

  const getBreadcrumbs = useCallback(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: Array<{ label: string; href?: string; icon?: React.FC<React.SVGProps<SVGSVGElement>> }> = [];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({
        label,
        href: index < pathSegments.length - 1 ? currentPath : undefined,
      });
    });
    
    return breadcrumbs;
  }, [pathname]);

  const suggestions = getSearchSuggestions(searchQuery);

  const renderMenuItem = (item: MenuItem, depth: number = 0): React.ReactNode => {
    const Icon = item.icon || null;
    const isActive = pathname === item.href;
    const hasChildren = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedSections.includes(item.label);
    const isItemFavorite = item.href ? isFavorite(item.href) : false;

    return (
      <li key={`${item.label}-${depth}`} className={`relative ${depth > 0 ? 'ml-4' : ''}`}>
        <div className="flex items-center justify-between group">
          {item.href ? (
            <Link
              href={item.href}
              className={`flex items-center w-full p-2 rounded-md transition-all duration-200 ${
                isActive 
                  ? 'bg-purple-500 text-white shadow-lg transform scale-105' 
                  : 'hover:bg-gray-700 text-gray-200 hover:transform hover:scale-102'
              }`}
              onClick={() => handleLinkClick(item)}
              aria-current={isActive ? 'page' : undefined}
            >
              {Icon && (
                <Icon
                  className={`w-${depth === 0 ? 5 : 4} h-${depth === 0 ? 5 : 4} mr-2 transition-colors ${
                    isActive ? 'text-white' : depth === 0 ? 'text-purple-400' : 'text-gray-400'
                  }`}
                />
              )}
              <SearchHighlighter
                text={item.label}
                searchQuery={searchQuery}
                className={`${depth > 0 ? 'text-sm' : ''} flex-1 text-left`}
                highlightClassName="bg-yellow-300 text-gray-900 px-1 rounded"
              />
              {item.isPremium && <LockClosedIcon className="w-4 h-4 ml-2 text-yellow-400" />}
            </Link>
          ) : (
            <button
              onClick={() => toggleSection(item.label)}
              className="flex items-center w-full p-2 rounded-md hover:bg-gray-700 text-gray-200 transition-all duration-200 hover:transform hover:scale-102"
              aria-expanded={isExpanded}
              aria-controls={`submenu-${item.label.replace(/\s+/g, '-')}`}
            >
              {Icon && (
                <Icon
                  className={`w-5 h-5 mr-2 transition-colors ${isActive ? 'text-white' : 'text-purple-400'}`}
                />
              )}
              <SearchHighlighter
                text={item.label}
                searchQuery={searchQuery}
                className={`${depth > 0 ? 'text-sm' : ''} flex-1 text-left`}
                highlightClassName="bg-yellow-300 text-gray-900 px-1 rounded"
              />
            </button>
          )}
          {hasChildren && (
            <ChevronDownIcon
              onClick={() => toggleSection(item.label)}
              className={`w-4 h-4 text-gray-400 transition-all duration-200 cursor-pointer hover:text-purple-400 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          )}
          {item.href && (
            <button
              onClick={() => item.href && handleToggleFavorite(item.label, item.href)}
              className="ml-2 p-1 rounded hover:bg-gray-600 transition-all duration-200 hover:scale-110"
              aria-label={isItemFavorite ? `Remove ${item.label} from favorites` : `Add ${item.label} to favorites`}
            >
              <StarIcon className={`w-4 h-4 transition-all duration-200 ${
                isItemFavorite ? 'text-yellow-400 fill-current' : 'text-gray-400 hover:text-yellow-400'
              }`} />
            </button>
          )}
        </div>
        {isExpanded && hasChildren && (
          <ul 
            id={`submenu-${item.label.replace(/\s+/g, '-')}`} 
            className="space-y-1 mt-1 animate-fadeIn"
            style={{
              animation: 'slideDown 0.2s ease-out'
            }}
          >
            {item.subItems!.map((subItem) => renderMenuItem(subItem, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside
      className={`bg-gray-800 text-white border-r border-gray-700 fixed top-0 bottom-0 z-30 shadow-lg transform transition-all duration-300 w-64 flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
        <h2 className="text-lg font-semibold">SRE Dashboard</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-1 rounded hover:bg-gray-700 transition-colors"
            aria-label="Settings"
          >
            <Cog6ToothIcon className="w-5 h-5 text-gray-400" />
          </button>
          <button onClick={onClose} className="md:hidden" aria-label="Close Sidebar">
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="p-4 bg-gray-750 border-b border-gray-600 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-300">Settings</h3>
            <button
              onClick={() => setShowSettings(false)}
              className="text-gray-400 hover:text-white"
            >
              <ChevronUpIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            <ThemeSelector />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Clear Recent</span>
              <button
                onClick={clearRecentlyVisited}
                className="px-3 py-1 text-xs bg-gray-600 hover:bg-gray-500 rounded transition-colors"
                disabled={recentPages.length === 0}
              >
                Clear
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Clear History</span>
              <button
                onClick={clearSearchHistory}
                className="px-3 py-1 text-xs bg-gray-600 hover:bg-gray-500 rounded transition-colors"
                disabled={searchHistory.length === 0}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumbs */}
      {pathname !== '/' && (
        <div className="px-4 py-2 border-b border-gray-700 flex-shrink-0">
          <Breadcrumbs items={getBreadcrumbs()} />
        </div>
      )}

      {/* Search */}
      <div className="px-4 py-3 border-b border-gray-700 flex-shrink-0">
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSearchSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
            placeholder="Search menu... (Press Esc to clear)"
            className="w-full pl-10 pr-10 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
            autoComplete="off"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setShowSearchSuggestions(false);
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          )}

          {/* Search Suggestions */}
          {showSearchSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
              <div className="px-3 py-2 text-xs text-gray-400 border-b border-gray-600">
                Recent searches
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleSearch(suggestion);
                    setShowSearchSuggestions(false);
                  }}
                  className="w-full px-3 py-2 text-left text-sm text-gray-200 hover:bg-gray-700 transition-colors flex items-center"
                >
                  <ClockIcon className="w-4 h-4 mr-2 text-gray-400" />
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation - This is the scrollable area */}
      <div className="flex-1 overflow-y-auto">
        <nav className="px-4 py-2">
          {isLoading ? (
            <LoadingState message="Loading menu..." />
          ) : (
            <ul className="space-y-1">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => renderMenuItem(item))
              ) : searchQuery ? (
                <li className="text-center py-8 text-gray-400">
                  <div className="flex flex-col items-center animate-fadeIn">
                    <MagnifyingGlassIcon className="w-12 h-12 mb-2 text-gray-500" />
                    <p>No results found for "{searchQuery}"</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-2 text-purple-400 hover:text-purple-300 text-sm transition-colors"
                    >
                      Clear search
                    </button>
                  </div>
                </li>
              ) : null}
            </ul>
          )}
        </nav>
      </div>

      {/* Footer Stats */}
      <div className="px-4 py-2 border-t border-gray-700 text-xs text-gray-400 flex-shrink-0">
        <div className="flex justify-between items-center">
          <span>{favorites.length} favorites</span>
          <span>{recentPages.length} recent</span>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }
      `}</style>
    </aside>
  );
}