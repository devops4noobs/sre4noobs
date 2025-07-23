'use client'; // Required for useState and motion
import { motion } from "framer-motion";
import { useState } from "react";

export default function WhatIsSre() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Animation variants
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
    hover: { scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: "15%", left: "25%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "40%", left: "75%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "70%", left: "35%" }}></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto text-left">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-12 shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="text-yellow-300 neon-text">Devops4Noobs</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-100 mb-4 sm:mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the World of <span className="font-bold text-yellow-200">Site Reliability Engineering</span>
          </motion.p>
        </motion.section>

        {/* What is SRE Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg hover:bg-indigo-900/80 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("what-is-sre")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">What is SRE?</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Site Reliability Engineering (SRE) merges software and systems expertise to craft scalable, dependable systems. SRE professionals focus on automating operations, boosting reliability, and minimizing manual effort, ensuring seamless service delivery.
          </p>
          {hoveredSection === "what-is-sre" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover for a surprise: SRE reduces downtime by automating 60% of tasks!
            </motion.div>
          )}
        </motion.div>

        {/* Day-to-Day Responsibilities Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg hover:bg-indigo-900/80 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("day-to-day")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-400 mb-4">What does an SRE do day-to-day?</h3>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>Monitor system health and swiftly address incidents</li>
            <li>Automate repetitive tasks to cut down manual work</li>
            <li>Establish and track SLIs, SLOs, and error budgets</li>
            <li>Conduct postmortems and root cause analyses (RCA)</li>
            <li>Enhance CI/CD and deployment pipelines</li>
            <li>Partner with development teams for synergy</li>
          </ul>
          {hoveredSection === "day-to-day" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Automation saves 2 hours daily per SRE!
            </motion.div>
          )}
        </motion.div>

        {/* Core Principles Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg hover:bg-indigo-900/80 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("principles")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-400 mb-4">Core SRE Principles</h3>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>Balance risk and reliability using error budgets</li>
            <li>Automate processes to eliminate operational toil</li>
            <li>Measure reliability with SLIs and SLOs</li>
            <li>Drive decisions based on error budget insights</li>
            <li>Perform blameless postmortems for learning</li>
          </ul>
          {hoveredSection === "principles" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover fact: Blameless postmortems boost team trust by 35%!
            </motion.div>
          )}
        </motion.div>

        {/* SRE Pillars Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg hover:bg-indigo-900/80 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("pillars")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-400 mb-4">SRE Pillars</h3>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Monitoring & Alerting:</strong> Detect issues early with real-time data</li>
            <li><strong>Incident Management:</strong> Resolve disruptions efficiently</li>
            <li><strong>Automation & Tooling:</strong> Streamline operations</li>
            <li><strong>Capacity Planning:</strong> Scale for future demand</li>
            <li><strong>Change Management:</strong> Deploy with zero downtime</li>
            <li><strong>Postmortem & RCA:</strong> Learn from every outage</li>
          </ul>
          {hoveredSection === "pillars" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover insight: Automation cuts incident response time by 50%!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 23, 2025, 11:44 PM EEST
        </p>
      </main>
    </div>
  );
}