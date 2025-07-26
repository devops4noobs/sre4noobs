'use client'; // Required for useState and motion
import PostmortemForm from '@/components/PostmortemForm';
import ErrorBoundary from '@/components/ErrorBoundary';
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { scale: 1, opacity: 0, y: 20 },
  visible: { scale: 1, opacity: 1, y: 0 },
  hover: { scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" },
};

export default function PostmortemPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: "15%", left: "25%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "40%", left: "75%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "70%", left: "35%" }}></div>
      </div>

      <div className="container p-8 w-full max-w-3xl mx-auto text-center">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-4 md:p-6 mb-6 md:mb-12 shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl tracking-tight font-inter"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-blue-400 pr-2">
              Blameless Postmortem Tool
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-xl text-cyan-100 mb-4 md:mb-6 font-inter"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simulate writing a blameless postmortem to learn from incidents without pointing fingers. Fill out the form below and download your report.
          </motion.p>
        </motion.section>

        <ErrorBoundary>
          <PostmortemForm />
        </ErrorBoundary>

        {/* Footer Timestamp */}
        <p className="text-gray-500 text-xs mt-4 text-center">
          Last updated: July 25, 2025, 08:13 PM EEST
        </p>
      </div>
    </main>
  );
}