"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SLOCalculator() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [slo, setSlo] = useState(99.9);
  const [period, setPeriod] = useState('month'); // 'day', 'week', 'month', 'year'

  const calculateDowntime = () => {
    const errorBudget = (100 - slo) / 100;
    let totalMinutes = 0;
    if (period === 'day') totalMinutes = 24 * 60;
    else if (period === 'week') totalMinutes = 7 * 24 * 60;
    else if (period === 'month') totalMinutes = 30 * 24 * 60;
    else if (period === 'year') totalMinutes = 365 * 24 * 60;

    const downtimeMinutes = errorBudget * totalMinutes;
    const days = Math.floor(downtimeMinutes / (24 * 60));
    const hours = Math.floor((downtimeMinutes % (24 * 60)) / 60);
    const minutes = Math.floor(downtimeMinutes % 60);
    const seconds = Math.floor((downtimeMinutes - Math.floor(downtimeMinutes)) * 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = calculateDowntime();

  const commonSLOs = [
    { slo: 99, year: '3 days 15 hours', month: '7 hours 18 minutes', week: '1 hour 41 minutes', day: '14 minutes 24 seconds' },
    { slo: 99.5, year: '1 day 19 hours', month: '3 hours 39 minutes', week: '50 minutes 24 seconds', day: '7 minutes 12 seconds' },
    { slo: 99.9, year: '8 hours 46 minutes', month: '43 minutes 12 seconds', week: '10 minutes 5 seconds', day: '1 minute 26 seconds' },
    { slo: 99.95, year: '4 hours 23 minutes', month: '21 minutes 36 seconds', week: '5 minutes 2 seconds', day: '43 seconds' },
    { slo: 99.99, year: '52 minutes 36 seconds', month: '4 minutes 19 seconds', week: '1 minute', day: '8 seconds' },
    { slo: 99.999, year: '5 minutes 16 seconds', month: '25 seconds', week: '6 seconds', day: '0.86 seconds' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: "15%", left: "25%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "40%", left: "75%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "70%", left: "35%" }}></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-12 shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500 text-center"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl">
              SLO Calculator
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Compute Downtime and Error Budgets
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Estimate reliability targets for your services
          </motion.p>
        </motion.section>

        {/* SLO Explanation Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("explanation")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">What is an SLO?</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            A Service Level Objective (SLO) is a measurable target for service reliability, such as 99.9% uptime. It defines acceptable performance levels based on user expectations. The error budget is the complement (1 - SLO), representing allowed downtime.
          </p>
          {hoveredSection === "explanation" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: SLOs balance reliability and innovation!
            </motion.div>
          )}
        </motion.div>

        {/* Interactive Calculator Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("calculator")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">SLO Downtime Calculator</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-indigo-100 mb-2">SLO Percentage:</label>
              <input
                type="number"
                value={slo}
                onChange={(e) => setSlo(parseFloat(e.target.value))}
                min={0}
                max={100}
                step={0.001}
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div>
              <label className="block text-indigo-100 mb-2">Time Period:</label>
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month (30 days)</option>
                <option value="year">Year (365 days)</option>
              </select>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-indigo-100">Allowed Downtime: {days} days, {hours} hours, {minutes} minutes, {seconds} seconds</p>
            </div>
          </div>
          {hoveredSection === "calculator" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Adjust SLO to see downtime changes!
            </motion.div>
          )}
        </motion.div>

        {/* Common SLO Table Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("table")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">Common SLO Downtime Table</h2>
          <table className="w-full text-indigo-100 text-sm sm:text-base">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="p-2 text-left">SLO</th>
                <th className="p-2 text-left">Year</th>
                <th className="p-2 text-left">Month</th>
                <th className="p-2 text-left">Week</th>
                <th className="p-2 text-left">Day</th>
              </tr>
            </thead>
            <tbody>
              {commonSLOs.map((row, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-2">{row.slo}%</td>
                  <td className="p-2">{row.year}</td>
                  <td className="p-2">{row.month}</td>
                  <td className="p-2">{row.week}</td>
                  <td className="p-2">{row.day}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {hoveredSection === "table" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Reference for standard reliability targets!
            </motion.div>
          )}
        </motion.div>

        {/* Error Budget Explanation Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("budget")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">Error Budgets in SRE</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            An error budget is the allowable unreliability (1 - SLO). It represents the &apos;room for error&apos; in your system, balancing reliability with innovation. For example, a 99.9% SLO gives a 0.1% error budget.
          </p>
          {hoveredSection === "budget" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Use error budgets to guide development!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 27, 2025
        </p>
      </main>
    </div>
  );
}