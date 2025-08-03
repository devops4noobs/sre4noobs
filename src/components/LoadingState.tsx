import React from 'react';

interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 text-gray-400">
      <div className={`${sizeClasses[size]} border-2 border-purple-400 border-t-transparent rounded-full animate-spin mb-2`}></div>
      <p className="text-sm">{message}</p>
    </div>
  );
};
