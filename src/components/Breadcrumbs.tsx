import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  if (items.length === 0) return null;

  return (
    <nav className={`flex items-center space-x-1 text-sm text-gray-400 ${className}`} aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center hover:text-purple-400 transition-colors"
        aria-label="Home"
      >
        <HomeIcon className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRightIcon className="w-4 h-4 text-gray-500" />
          
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="flex items-center hover:text-purple-400 transition-colors"
            >
              {item.icon && <item.icon className="w-4 h-4 mr-1" />}
              <span className="truncate max-w-32">{item.label}</span>
            </Link>
          ) : (
            <span className="flex items-center text-white font-medium">
              {item.icon && <item.icon className="w-4 h-4 mr-1" />}
              <span className="truncate max-w-32">{item.label}</span>
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
