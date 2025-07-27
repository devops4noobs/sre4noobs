"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";

export default function ErrorBudgetTracker() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [slo, setSlo] = useState(99.9);
  const [period, setPeriod] = useState('month'); // 'month', 'quarter', 'year'
  const [currentDowntime, setCurrentDowntime] = useState(0); // in minutes

  const calculateErrorBudget = () => {
    const errorBudgetPercent = (100 - slo) / 100;
    let totalMinutes = 0;
    if (period === 'month') totalMinutes = 30 * 24 * 60;
    else if (period === 'quarter') totalMinutes = 90 * 24 * 60;
    else if (period === 'year') totalMinutes = 365 * 24 * 60;

    const totalDowntimeAllowed = errorBudgetPercent * totalMinutes;
    const remainingDowntime = totalDowntimeAllowed - currentDowntime;

    const formatTime = (minutes: number) => {
      const days = Math.floor(minutes / (24 * 60));
      const hours = Math.floor((minutes % (24 * 60)) / 60);
      const mins = Math.floor(minutes % 60);
      return `${days}d ${hours}h ${mins}m`;
    };

    return {
      allowed: formatTime(totalDowntimeAllowed),
      remaining: formatTime(remainingDowntime > 0 ? remainingDowntime : 0),
      consumed: (currentDowntime / totalDowntimeAllowed) * 100,
    };
  };

  const { allowed, remaining, consumed } = calculateErrorBudget();

  const approachesData = [
    { title: "Threshold-Based Budgets", scenario: "Set specific thresholds for metrics like error rates.", details: "Allocate budget to handle errors or improve performance based on predefined limits." },
    { title: "Time-Based Budgets", scenario: "Allocate error budget over fixed periods like monthly.", details: "Freeze releases if budget is depleted, focusing on reliability until restored." },
    { title: "Rolling Budgets", scenario: "Reassess error budget on a rolling basis (e.g., past month).", details: "Adjust dynamically based on recent performance for responsive management." },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
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
              Error Budget Tracker
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Monitor and Manage Reliability
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Balance innovation and stability with real-time tracking
          </motion.p>
        </motion.section>

        {/* Core Concept Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("core")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Core Concept: Managing Acceptable Failure</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            An error budget is the allowable unreliability in a system, calculated as 100% minus the SLO. It serves as a control mechanism to balance service reliability with the pace of innovation, allowing teams to take risks when the budget is healthy and focus on stability when depleted.
          </p>
          {hoveredSection === "core" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Error budgets drive data-driven decisions!
            </motion.div>
          )}
        </motion.div>

        {/* Interactive Tracker Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("tracker")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Error Budget Tracker</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-indigo-100 mb-2">SLO Percentage:</label>
              <input
                type="number"
                value={slo}
                onChange={(e) => setSlo(parseFloat(e.target.value))}
                min={0}
                max={100}
                step={0.01}
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
                <option value="month">Month</option>
                <option value="quarter">Quarter</option>
                <option value="year">Year</option>
              </select>
            </div>
            <div>
              <label className="block text-indigo-100 mb-2">Current Downtime (minutes):</label>
              <input
                type="number"
                value={currentDowntime}
                onChange={(e) => setCurrentDowntime(parseFloat(e.target.value))}
                min={0}
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div className="bg-gray-900 p-4 rounded-lg space-y-2">
              <p className="text-indigo-100">Allowed Downtime: {allowed}</p>
              <p className="text-indigo-100">Remaining Budget: {remaining}</p>
              <p className="text-indigo-100">Consumed: {consumed.toFixed(2)}%</p>
            </div>
          </div>
          {hoveredSection === "tracker" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Input values to track your budget!
            </motion.div>
          )}
        </motion.div>

        {/* Approaches to Error Budgets - Flip Cards */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("approaches")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Approaches to Managing Error Budgets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {approachesData.map((data, index) => (
              <motion.div
                key={index}
                className="relative w-full h-48 cursor-pointer perspective-1000"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-indigo-800/80 flex flex-col items-center justify-center p-4 text-white text-sm sm:text-base"
                  animate={flippedCard === index ? "back" : "front"}
                  variants={flipVariants}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-bold mb-2">{data.title}: Scenario</h3>
                  <p className="text-center">{data.scenario}</p>
                </motion.div>
                <motion.div
                  className="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-blue-800/80 flex flex-col items-center justify-center p-4 text-white text-sm sm:text-base"
                  animate={flippedCard === index ? "front" : "back"}
                  variants={flipVariants}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-bold mb-2">{data.title}: Benefits</h3>
                  <p className="text-center">{data.details}</p>
                </motion.div>
                <motion.button
                  className="absolute bottom-2 left-2 w-8 h-8 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 rounded-full flex items-center justify-center shadow-md transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                >
                  <FaSyncAlt className="text-lg" />
                </motion.button>
              </motion.div>
            ))}
          </div>
          {hoveredSection === "approaches" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Flip to explore different tracking methods!
            </motion.div>
          )}
        </motion.div>

        {/* Best Practices Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("practices")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">💡 Best Practices for Error Budgets</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>Align error budgets with business goals and SLOs.</li>
            <li>Monitor consumption in real-time with dashboards.</li>
            <li>Define policies for when budgets are depleted (e.g., release freezes).</li>
            <li>Conduct regular reviews and postmortems for budget overruns.</li>
            <li>Communicate budgets across teams for collaborative management.</li>
          </ul>
          {hoveredSection === "practices" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Implement these for effective tracking!
            </motion.div>
          )}
        </motion.div>

        {/* Closing Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("closing")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <p className="text-indigo-100 text-sm sm:text-base">
            Error budget tracking is essential for SRE, enabling teams to maintain reliability while fostering innovation through data-driven decisions.
          </p>
          {hoveredSection === "closing" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Start tracking your error budgets today!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 27, 2025, 10:50 PM EEST
        </p>
      </main>
    </div>
  );
}