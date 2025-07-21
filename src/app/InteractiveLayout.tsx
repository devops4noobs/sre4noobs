'use client';
import * as React from 'react';
import Sidebar from "@/components/Sidebar"; // Adjust path if needed
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function InteractiveLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // Add ESC key to close sidebar
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSidebarOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* Mobile Header with Toggle */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 p-4 z-30 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-xl font-bold">SRE4Noobs</h1>
        <button onClick={() => { console.log('Toggle clicked'); setIsSidebarOpen(!isSidebarOpen); }} aria-label="Toggle Sidebar">
          {isSidebarOpen ? <XMarkIcon className="w-6 h-6 text-white" /> : <Bars3Icon className="w-6 h-6 text-white" />}
        </button>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => { console.log('Close clicked'); setIsSidebarOpen(false); }} />

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-20"
          onClick={() => { console.log('Overlay clicked'); setIsSidebarOpen(false); }}
          onTouchEnd={() => { console.log('Touch ended on overlay'); setIsSidebarOpen(false); }} // Fallback for touch devices
        />
      )}

      {/* Main Content */}
      <main className={`p-6 mt-16 md:mt-0 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
        {children}
      </main>
    </>
  );
}