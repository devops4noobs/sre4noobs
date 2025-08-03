import React, { useState, useEffect } from 'react';
import { PaintBrushIcon, CheckIcon } from '@heroicons/react/24/outline';

interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
  };
}

const themes: Theme[] = [
  {
    id: 'default',
    name: 'Purple',
    colors: {
      primary: 'purple',
      secondary: 'gray',
      accent: 'yellow',
      background: 'gray-800',
      surface: 'gray-700',
    },
  },
  {
    id: 'blue',
    name: 'Blue',
    colors: {
      primary: 'blue',
      secondary: 'slate',
      accent: 'amber',
      background: 'slate-800',
      surface: 'slate-700',
    },
  },
  {
    id: 'green',
    name: 'Green',
    colors: {
      primary: 'emerald',
      secondary: 'gray',
      accent: 'orange',
      background: 'gray-800',
      surface: 'gray-700',
    },
  },
  {
    id: 'dark',
    name: 'Dark',
    colors: {
      primary: 'white',
      secondary: 'gray',
      accent: 'blue',
      background: 'black',
      surface: 'gray-900',
    },
  },
];

interface ThemeSelectorProps {
  className?: string;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ className = '' }) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('sidebarTheme');
    if (stored && themes.find(t => t.id === stored)) {
      setCurrentTheme(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebarTheme', currentTheme);
    // Apply theme to document root for CSS variables
    const theme = themes.find(t => t.id === currentTheme);
    if (theme) {
      document.documentElement.setAttribute('data-sidebar-theme', currentTheme);
    }
  }, [currentTheme]);

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 rounded-md hover:bg-gray-700 text-gray-200 transition-colors"
        aria-label="Change theme"
      >
        <PaintBrushIcon className="w-5 h-5 mr-2" />
        <span className="text-sm">Theme</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-gray-800 border border-gray-600 rounded-md shadow-lg py-2 min-w-32 z-50">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors"
            >
              <span>{theme.name}</span>
              {currentTheme === theme.id && (
                <CheckIcon className="w-4 h-4 text-purple-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
