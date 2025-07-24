'use client';
import * as React from 'react';
import Sidebar from "@/components/Sidebar";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function InteractiveLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSidebarOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 p-4 z-30 flex justify-between items-center border-b border-gray-700">
        <a className="text-xl font-bold text-white" href="https://www.devops4noobs.com/">Home</a>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="Toggle Sidebar">
          {isSidebarOpen ? <XMarkIcon className="w-8 h-8 text-white" /> : <Bars3Icon className="w-8 h-8 text-white" />}
        </button>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-20"
          onClick={() => setIsSidebarOpen(false)}
          onTouchEnd={() => setIsSidebarOpen(false)}
        />
      )}

      <main className={`p-4 md:p-6 mt-16 md:mt-0 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
        {children}
      </main>
    </>
  );
}