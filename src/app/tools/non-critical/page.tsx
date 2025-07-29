"use client";
import { FaSyncAlt, FaShieldAlt, FaLightbulb, FaBug, FaChartLine } from "react-icons/fa"; // Added FaChartLine for new principle
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function NonCriticalIssueTrackingProcess() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null); // Tracks flipped card
  const controls = useAnimation();

  // Animation variants for cards
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };

  // Flip card variants
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Data for flip cards (Process Workflow Steps)
  const processStepsData = [
    {
      title: "Detect & Triage",
      scenario: "Identify an anomaly and perform a quick investigation.",
      details: "Use monitoring tools like Prometheus or logs to spot issues and assess their severity."
    },
    {
      title: "Decide",
      scenario: "Confirm it’s not a Critical Incident using a triage flowchart.",
      details: "Follow a decision tree to determine if the issue requires escalation or non-critical tracking."
    },
    {
      title: "Log",
      scenario: "Create a JIRA ticket using the standard template.",
      details: "Document the issue with details like impact, logs, and initial analysis for tracking."
    },
    {
      title: "Analyze & Resolve",
      scenario: "Assign for deep analysis or document the resolution.",
      details: "Investigate root causes and implement fixes or note self-resolution steps."
    },
    {
      title: "Tag & Share",
      scenario: "Tag the ticket and share key findings.",
      details: "Add relevant tags and publish insights to a knowledge base to prevent recurrence."
    },
  ];

  // Trigger animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const insightsSection = document.getElementById("insights");
      if (insightsSection && window.scrollY + window.innerHeight > insightsSection.offsetTop) {
        controls.start({ opacity: 1, y: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

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
              Non-Critical Issue Tracking
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Learn from Small Failures
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A systematic SRE approach to prevent big issues
          </motion.p>
        </motion.section>

        {/* At a Glance Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("glance")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">At a Glance</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-700/50 p-4 rounded-md">
              <h3 className="font-bold text-lg text-white">WHAT</h3>
              <p className="text-indigo-100 text-sm sm:text-base">A process to formally track issues that are not critical incidents but offer learning opportunities.</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-md">
              <h3 className="font-bold text-lg text-white">WHY</h3>
              <p className="text-indigo-100 text-sm sm:text-base">To prevent issue recurrence, share knowledge, and proactively improve system reliability.</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-md">
              <h3 className="font-bold text-lg text-white">WHEN</h3>
              <p className="text-indigo-100 text-sm sm:text-base">For self-recovering errors, minor performance dips, or anomalies not requiring urgent escalation.</p>
            </div>
          </div>
          {hoveredSection === "glance" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-4 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Understand the scope of non-critical tracking!
            </motion.div>
          )}
        </motion.div>

        {/* Main Content Grid */}
        <div id="insights" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Flowchart and Process Workflow */}
          <div className="lg:col-span-2 space-y-8">
            

            {/* Process Workflow Card */}
            <motion.div
              className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSection("workflow")}
              onHoverEnd={() => setHoveredSection(null)}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">🎯 Process Workflow</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {processStepsData.map((data, index) => (
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
                      <h3 className="font-bold mb-2">{data.title}</h3>
                      <p className="text-center">{data.scenario}</p>
                    </motion.div>
                    <motion.div
                      className="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-blue-800/80 flex flex-col items-center justify-center p-4 text-white text-sm sm:text-base"
                      animate={flippedCard === index ? "front" : "back"}
                      variants={flipVariants}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="font-bold mb-2">{data.title}: Details</h3>
                      <p className="text-center">{data.details}</p>
                    </motion.div>
                    <motion.button
                      className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 rounded-full flex items-center justify-center shadow-md transition duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                    >
                      <FaSyncAlt className="text-sm" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
              {hoveredSection === "workflow" && (
                <motion.div
                  className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Hover tip: Flip to explore each step!
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Principles */}
          <div className="space-y-8">
            {/* Key Principles Card */}
            <motion.div
              className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-indigo-500" // Added border-b-2 border-indigo-500 to match workflow card bottom border
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onHoverStart={() => setHoveredSection("principles")}
              onHoverEnd={() => setHoveredSection(null)}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">🧠 Key Principles</h2>
              <ul className="space-y-3 text-indigo-100 text-sm sm:text-base">
                <li className="flex items-start">
                  <FaShieldAlt className="w-5 h-5 mr-3 mt-1 text-indigo-400 shrink-0" />
                  <span><strong>Proactive Reliability:</strong> Learn from small signals to prevent large-scale failures.</span>
                </li>
                <li className="flex items-start">
                  <FaLightbulb className="w-5 h-5 mr-3 mt-1 text-indigo-400 shrink-0" />
                  <span><strong>Continuous Learning:</strong> Every anomaly is a chance to improve systems and processes.</span>
                </li>
                <li className="flex items-start">
                  <FaBug className="w-5 h-5 mr-3 mt-1 text-indigo-400 shrink-0" />
                  <span><strong>Blameless Analysis:</strong> Focus on systemic causes, not individual errors.</span>
                </li>
                <li className="flex items-start">
                  <FaChartLine className="w-5 h-5 mr-3 mt-1 text-indigo-400 shrink-0" />
                  <span><strong>Data-Driven Insights:</strong> Use metrics and logs for evidence-based analysis to drive improvements.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* JIRA Template Card - Moved below the grid */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-8 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("template")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">💡 JIRA Ticket Template</h2>
          <div className="bg-gray-900 p-4 rounded-md font-mono text-sm text-indigo-100 overflow-x-auto">
            <pre>
              <code>
                <span className="text-white">Title:</span> [App Name] - [Brief, Clear Issue Title]<br /><br />
                <span className="text-white">## Summary</span><br/>
                (What was observed? What triggered this ticket?)<br/><br/>
                <span className="text-white">## Impact</span><br/>
                (Services, endpoints, or customers affected. State &quot;None&quot; if applicable.)<br/><br/>
                <span className="text-white">## Initial Analysis</span><br/>
                (How was it found? Links to logs/metrics. Confirmation steps.)<br/><br/>
                <span className="text-white">## Actions Taken</span><br/>
                (e.g., Service restarted, container rotated, etc. State &quot;None&quot; if self-resolved.)<br/><br/>
                <span className="text-white">## Next Steps / Acceptance Criteria</span><br/>
                (e.g., Monitor for 24 hours, assign to team-X for analysis, close ticket.)<br/><br/>
                <span className="text-white">Tags:</span> [non-critical] [service-name] [error-type]
              </code>
            </pre>
          </div>
          {hoveredSection === "template" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Use this template for consistent documentation!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-8 text-center">
          Last updated: July 28, 2025
        </p>
      </main>
    </div>
  );
}