'use client';
import { useState, useCallback, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LockClosedIcon,
  XMarkIcon,
  StarIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { menuItems, MenuItem } from '../data/menuItems';
import { useFavorites } from '../hooks/useFavorites';
import { useMenuFilter } from '../hooks/useMenuFilter';
import { useSearchHistory } from '../hooks/useSearchHistory';
import { useRecentlyVisited } from '../hooks/useRecentlyVisited';
// SearchHighlighter intentionally removed (unused) to satisfy lint rules
import { LoadingState } from './LoadingState';
import { Breadcrumbs } from './Breadcrumbs';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [isLoading] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { recentPages, addToRecentlyVisited } = useRecentlyVisited();
  const { addToSearchHistory, getSearchSuggestions } = useSearchHistory();
  const filteredItems = useMenuFilter(menuItems, searchQuery, favorites, recentPages);

  useEffect(() => {
    if (searchQuery && filteredItems.length > 0) {
      const sectionsToExpand: string[] = [];
      filteredItems.forEach((item) => {
        if (item.subItems && item.subItems.length > 0) {
          sectionsToExpand.push(item.label);
        }
      });
      setExpandedSections((prev) => [...new Set([...prev, ...sectionsToExpand])]);
    }
  }, [searchQuery, filteredItems]);

  const toggleSection = useCallback((label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  }, []);

  const handleToggleFavorite = useCallback(
    (label: string, href: string) => {
      toggleFavorite(href);
    },
    [toggleFavorite]
  );

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      if (query.trim().length >= 2) {
        addToSearchHistory(query);
      }
    },
    [addToSearchHistory]
  );

  const handleLinkClick = useCallback(
    (item: MenuItem) => {
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
    },
    [addToRecentlyVisited, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchQuery('');
        setShowSearchSuggestions(false);
      } else if (e.key === 'Enter' && searchQuery.trim()) {
        addToSearchHistory(searchQuery);
        setShowSearchSuggestions(false);
      }
    },
    [searchQuery, addToSearchHistory]
  );

  const getBreadcrumbs = useCallback(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: Array<{ label: string; href?: string }> = [];

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

  const isItemActive = (item: MenuItem): boolean => {
    if (item.href && pathname === item.href) return true;
    return item.subItems ? item.subItems.some(isItemActive) : false;
  };

  const suggestions = getSearchSuggestions(searchQuery);

  const renderMenuItem = (item: MenuItem, depth: number = 0): React.ReactNode => {
    const Icon = item.icon || null;
    const isActive = pathname === item.href;
    const hasChildren = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedSections.includes(item.label);
    const isItemFavorite = item.href ? isFavorite(item.href) : false;
    const activeSection = isItemActive(item);

    if (depth === 0) {
      return (
        <li key={`${item.label}-${depth}`} className="mb-1">
          {item.href ? (
            <Link
              href={item.href}
              className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm transition-all duration-150 ${
                isActive
                  ? 'bg-slate-800 text-white font-medium shadow-inner'
                  : 'text-slate-200 hover:bg-slate-900/80'
              }`}
              onClick={() => handleLinkClick(item)}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {Icon && (
                  <span className={`flex-shrink-0 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                )}
                <span className="truncate font-medium">{item.label}</span>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                {item.isPremium && <LockClosedIcon className="w-3 h-3 text-yellow-400" />}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleToggleFavorite(item.label, item.href!);
                  }}
                  className="rounded p-1 hover:bg-slate-800 transition-colors"
                >
                  <StarIcon className={`w-3.5 h-3.5 ${isItemFavorite ? 'text-yellow-400 fill-yellow-400' : 'text-slate-500'}`} />
                </button>
              </div>
            </Link>
          ) : (
            <button
              onClick={() => toggleSection(item.label)}
              className={`flex items-center justify-between gap-2 w-full rounded-lg px-3 py-2.5 text-sm transition-all duration-150 ${
                activeSection ? 'bg-slate-800 text-white font-medium' : 'text-slate-200 hover:bg-slate-900/80'
              }`}
              aria-expanded={isExpanded}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {Icon && (
                  <span className={`flex-shrink-0 ${activeSection ? 'text-slate-100' : 'text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                )}
                <div className="min-w-0 text-left">
                  <span className="block truncate font-medium">{item.label}</span>
                </div>
              </div>
              <ChevronRightIcon
                className={`w-4 h-4 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
                  isExpanded ? 'rotate-90' : ''
                }`}
              />
            </button>
          )}

          {isExpanded && hasChildren && (
            <ul className="mt-1 ml-2 space-y-0.5 border-l border-slate-800 pl-2">
              {item.subItems!.map((subItem) => renderMenuItem(subItem, depth + 1))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={`${item.label}-${depth}`}>
        {item.href ? (
          <Link
            href={item.href}
            className={`flex items-center justify-between gap-2 rounded px-2 py-1.5 text-xs transition-all duration-150 ${
              isActive
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-300 hover:bg-slate-900/80'
            }`}
            onClick={() => handleLinkClick(item)}
          >
            <span className="truncate">{item.label}</span>
            {item.isPremium && <LockClosedIcon className="w-3 h-3 text-yellow-400 flex-shrink-0" />}
          </Link>
        ) : (
          <button
            onClick={() => toggleSection(item.label)}
            className={`flex items-center justify-between gap-2 w-full rounded px-2 py-1.5 text-xs transition-all duration-150 ${
              isItemActive(item) ? 'text-slate-100 font-medium' : 'text-slate-400 hover:bg-slate-900/80'
            }`}
          >
            <span className="truncate">{item.label}</span>
            <ChevronRightIcon
              className={`w-3 h-3 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
                isExpanded ? 'rotate-90' : ''
              }`}
            />
          </button>
        )}

        {isExpanded && item.subItems && item.subItems.length > 0 && (
          <ul className="mt-0.5 space-y-0.5">
            {item.subItems.map((subItem) => renderMenuItem(subItem, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside
      className={`bg-slate-950 text-slate-100 border-r border-slate-800 fixed top-0 bottom-0 z-30 shadow-xl transform transition-all duration-300 w-64 flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="px-4 py-4 border-b border-slate-800 flex-shrink-0">
        <div className="relative">
          <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSearchSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
            placeholder="Search..."
            className="w-full rounded-lg border border-slate-700 bg-slate-900/90 pl-9 pr-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-900/30"
            autoComplete="off"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setShowSearchSuggestions(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              aria-label="Clear search"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          )}

          {showSearchSuggestions && suggestions.length > 0 && (
            <div className="absolute inset-x-0 top-full z-50 mt-2 rounded-lg border border-slate-700 bg-slate-900 shadow-xl">
              <div className="space-y-1 p-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleSearch(suggestion);
                      setShowSearchSuggestions(false);
                    }}
                    className="flex w-full items-start gap-2 rounded px-2 py-1.5 text-left text-sm text-slate-100 hover:bg-slate-800 transition-colors"
                  >
                    <MagnifyingGlassIcon className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span className="truncate">{suggestion}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {pathname !== '/' && (
        <div className="px-4 py-2 border-b border-slate-800 flex-shrink-0">
          <Breadcrumbs items={getBreadcrumbs()} />
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        <nav className="px-2 py-3">
          {isLoading ? (
            <LoadingState message="Loading..." />
          ) : (
            <ul className="space-y-0.5">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => renderMenuItem(item))
              ) : searchQuery ? (
                <li className="rounded-lg border border-slate-700 bg-slate-900 p-4 text-center text-sm text-slate-400">
                  <p>No results for {`"${searchQuery}"`}</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Clear search
                  </button>
                </li>
              ) : null}
            </ul>
          )}
        </nav>
      </div>

      <div className="px-4 py-3 border-t border-slate-800 text-xs text-slate-400 flex-shrink-0">
        <div className="flex justify-between">
          <span>⭐ {favorites.length}</span>
          <span>📝 {recentPages.length}</span>
        </div>
      </div>
    </aside>
  );
}
