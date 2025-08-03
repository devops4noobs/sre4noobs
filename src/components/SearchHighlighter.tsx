import React from 'react';

interface SearchHighlighterProps {
  text: string;
  searchQuery: string;
  className?: string;
  highlightClassName?: string;
}

export const SearchHighlighter: React.FC<SearchHighlighterProps> = ({
  text,
  searchQuery,
  className = '',
  highlightClassName = 'bg-yellow-200 text-gray-900 font-medium',
}) => {
  if (!searchQuery.trim()) {
    return <span className={className}>{text}</span>;
  }

  const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => 
        regex.test(part) ? (
          <mark key={index} className={highlightClassName}>
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};
