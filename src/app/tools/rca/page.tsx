"use client"; // Required for useState and motion
import { FaSyncAlt } from "react-icons/fa"; // Added FaSyncAlt for flip icon
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function RCAPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null); // Tracks flipped card
  const controls = useAnimation();

  // Animation variants for cards
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 }, // Static state for non-flip cards
  };

  // Flip card variants
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Data for flip cards (Example Scenarios)
  const exampleScenariosData = [
    {
      title: "Service Downtime",
      scenario: "A web application crashed due to high traffic.",
      details: "RCA reveals insufficient autoscaling rules, leading to enhanced monitoring with AWS CloudWatch and updated scaling policies."
    },
    {
      title: "Data Processing Failure",
      scenario: "A batch job failed silently.",
      details: "RCA, using Splunk Observability Cloud logs, uncovers a missing error alert, prompting new Prometheus alerts for job failures."
    },
    {
      title: "Latency Spike",
      scenario: "Users experienced slow responses.",
      details: "RCA with Splunk Observability Cloud traces identifies a third-party API bottleneck, resulting in vendor negotiations and caching improvements."
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
        {/* Hero Section with Centered Multi-Line Title */}
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
              Root Cause Analysis (RCA)
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Uncovering the Source of Incidents
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform failures into opportunities for system improvement
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">Core Concept: Uncovering the Why</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Root Cause Analysis (RCA) is a systematic process for identifying the underlying causes of incidents or failures in a system. By digging beyond surface-level symptoms, RCA helps teams understand why issues occur and implement lasting solutions to prevent recurrence, improving system reliability and performance.
          </p>
          {hoveredSection === "core" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: RCA turns failures into learning opportunities!
            </motion.div>
          )}
        </motion.div>

        {/* Why RCA Matters Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("why")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">🎯 Why RCA Matters</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Incidents disrupt user experiences and erode trust. RCA transforms failures into opportunities for improvement by uncovering the true origins of problems, enabling teams to fix systems proactively and prevent future issues, all while leveraging insights from observability tools.
          </p>
          {hoveredSection === "why" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: RCA builds trust through resilience!
            </motion.div>
          )}
        </motion.div>

        {/* RCA Mission Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("mission")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">🏁 Mission: Understand, Resolve, Prevent</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Clarity:</strong> Pinpoint the exact causes of failures to avoid guesswork.</li>
            <li><strong>Prevention:</strong> Address root causes to reduce the likelihood of repeated incidents.</li>
            <li><strong>Resilience:</strong> Strengthen systems and processes through actionable insights.</li>
          </ul>
          {hoveredSection === "mission" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: RCA drives proactive improvements!
            </motion.div>
          )}
        </motion.div>

        {/* What Is RCA Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("what")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">❓ What Is Root Cause Analysis?</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            RCA is a structured method to investigate incidents by tracing events back to their fundamental causes. It goes beyond fixing symptoms (e.g., restarting a server) to address deeper issues (e.g., misconfigured load balancers). RCA leverages observability data—metrics, logs, and traces—to build a comprehensive understanding of system behavior, fostering long-term reliability.
          </p>
          {hoveredSection === "what" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: RCA goes beyond quick fixes!
            </motion.div>
          )}
        </motion.div>

        {/* Guiding Principles Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("principles")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">🧭 Guiding Principles</h2>
          <ol className="list-decimal list-inside text-indigo-100 space-y-3 text-sm sm:text-base">
            <li>
              <strong>Focus on Systems, Not Blame</strong><br />
              <em>Why?</em> Blaming individuals stifles collaboration and obscures systemic issues.<br />
              <em>What?</em> Analyze processes, tools, and configurations to identify failure points.
            </li>
            <li>
              <strong>Leverage Observability Data</strong><br />
              <em>Why?</em> Metrics, logs, and traces provide a factual basis for analysis.<br />
              <em>What?</em> Use tools like AWS CloudWatch, Splunk Observability Cloud, or OpenTelemetry to gather detailed system insights.
            </li>
            <li>
              <strong>Ask Iterative Questions</strong><br />
              <em>Why?</em> Surface-level answers rarely reveal the full story.<br />
              <em>What?</em> Apply techniques like “The 5 Whys” to dig deeper into causes (e.g., “Why did the API fail?” → “Because the database was overloaded.” → “Why was it overloaded?”).
            </li>
            <li>
              <strong>Map the Incident Timeline</strong><br />
              <em>Why?</em> A clear timeline reveals how events unfolded and where failures occurred.<br />
              <em>What?</em> Correlate logs, metrics, and traces to reconstruct the incident&apos;s progression.
            </li>
            <li>
              <strong>Prioritize Actionable Fixes</strong><br />
              <em>Why?</em> Identifying causes is only valuable if it leads to change.<br />
              <em>What?</em> Propose specific improvements, such as updating monitoring thresholds or automating recovery processes.
            </li>
            <li>
              <strong>Document and Share Insights</strong><br />
              <em>Why?</em> Knowledge sharing prevents similar issues across teams.<br />
              <em>What?</em> Publish RCA findings in a shared knowledge base, including recommended actions and lessons learned.
            </li>
            <li>
              <strong>Iterate and Improve</strong><br />
              <em>Why?</em> Systems evolve, and so must RCA processes.<br />
              <em>What?</em> Regularly review past RCAs to assess the effectiveness of fixes and refine analysis techniques.
            </li>
          </ol>
          {hoveredSection === "principles" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Follow these principles for effective RCA!
            </motion.div>
          )}
        </motion.div>

        {/* Example Scenarios - Flip Cards with Flip Button */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("examples")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">📚 Example Scenarios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {exampleScenariosData.map((data, index) => (
              <motion.div
                key={index}
                className="relative w-full h-48 cursor-pointer perspective-1000"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                whileHover={{ scale: 1.02 }} // Hover effect only for flip cards
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
                  <h3 className="font-bold mb-2">{data.title}: Details</h3>
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
          <motion.div
            className="text-center mt-4 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            💡 Click the cards to flip and see RCA examples
          </motion.div>
          {hoveredSection === "examples" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Flip to see RCA solutions in action!
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
            Root Cause Analysis is more than a troubleshooting tool—it&apos;s a commitment to building reliable systems, fostering collaboration, and turning failures into stepping stones for resilience.
          </p>
          {hoveredSection === "closing" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Start conducting RCAs for better systems!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 27, 2025, 10:40 PM EEST
        </p>
      </main>
    </div>
  );
}