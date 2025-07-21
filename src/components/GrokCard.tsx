'use client';
import * as React from 'react';

interface GrokCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function GrokCard({ title, children, className = '' }: GrokCardProps) {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${className}`}>
      <h3 className="text-xl font-semibold text-indigo-400 mb-4">{title}</h3>
      {children}
    </div>
  );
}