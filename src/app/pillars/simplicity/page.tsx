"use client"; // Required for useState and motion
import { FaSyncAlt } from "react-icons/fa"; // Added FaSyncAlt for flip icon
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function Simplicity() {
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

  // Data for flip cards (Examples of Simplicity)
  const simplicityExamplesData = [
    {
      title: "Web Service Caching",
      scenario: "A web service simplifies its caching layer from three tiers to one.",
      details: "Reducing latency by 30% and maintenance overhead with a streamlined design."
    },
    {
      title: "Database Backup Scripts",
      scenario: "A database team consolidates redundant backup scripts into a single process.",
      details: "Cutting execution time by half, improving efficiency and reliability."
    },
    {
      title: "Monitoring System Metrics",
      scenario: "A monitoring system removes unused metrics.",
      details: "Simplifying dashboards and improving alert accuracy for faster response."
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
              Simplicity in SRE
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Building Robust and Manageable Systems
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Streamline complexity for reliable operations
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">Core Concept: Complexity as a Liability</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Complex systems are prone to failures, harder to debug, and more resource-intensive to maintain. Simplicity in SRE means stripping away unnecessary layers, optimizing designs, and prioritizing clarity, ensuring systems remain robust and manageable as they grow.
          </p>
          {hoveredSection === "core" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Simple systems are easier to maintain!
            </motion.div>
          )}
        </motion.div>

        {/* Key Principles Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("principles")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">🧩 Key Principles</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Minimal Design:</strong> Use the fewest components necessary to achieve functionality.</li>
            <li><strong>Clarity:</strong> Ensure code and configurations are readable and well-documented.</li>
            <li><strong>Modularity:</strong> Break systems into manageable, independent parts.</li>
            <li><strong>Redundancy Reduction:</strong> Avoid duplicate processes or tools unless critical.</li>
            <li><strong>Ease of Maintenance:</strong> Design for quick updates and troubleshooting.</li>
          </ul>
          {hoveredSection === "principles" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: These principles keep systems lean!
            </motion.div>
          )}
        </motion.div>

        {/* Examples of Simplicity - Flip Cards with Flip Button */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("examples")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">📋 Examples of Simplicity in Practice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {simplicityExamplesData.map((data, index) => (
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
                  <h3 className="font-bold mb-2">{data.title}: Impact</h3>
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
          {hoveredSection === "examples" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Flip to see simplicity in action!
            </motion.div>
          )}
        </motion.div>

        {/* Benefits of Simplicity Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("benefits")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">🤖 Benefits of Simplicity</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Improved Reliability:</strong> Fewer components mean fewer failure points.</li>
            <li><strong>Faster Debugging:</strong> Easier to identify and fix issues in simple systems.</li>
            <li><strong>Scalability:</strong> Simple designs scale more predictably.</li>
            <li><strong>Team Efficiency:</strong> Reduces training and operational effort.</li>
            <li><strong>Cost Savings:</strong> Lowers maintenance and infrastructure costs.</li>
          </ul>
          {hoveredSection === "benefits" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Simplicity boosts system resilience!
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">💡 Best Practices</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>Evaluate complexity before adding new features or tools.</li>
            <li>Refactor legacy systems to remove redundant code or processes.</li>
            <li>Use standard, well-understood technologies where possible.</li>
            <li>Document design decisions to maintain simplicity over time.</li>
            <li>Conduct regular reviews to identify and simplify bottlenecks.</li>
          </ul>
          {hoveredSection === "practices" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Keep simplicity first in your designs!
            </motion.div>
          )}
        </motion.div>

        {/* Simplicity Checklist Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("checklist")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">📝 Simplicity Checklist</h2>
          <p className="text-indigo-100 italic mb-4 text-sm sm:text-base">
            <strong>Before Deployment:</strong><br />
            - Does this add unnecessary complexity?<br />
            - Can existing components handle the task?<br />
            - Is the design documented and clear?<br />
            - Have we tested for simplicity in maintenance?
          </p>
          {hoveredSection === "checklist" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Use this checklist for lean systems!
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
            Simplicity in SRE is the foundation for resilient, efficient, and sustainable systems, embodying the idea that less can indeed be more.
          </p>
          {hoveredSection === "closing" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Start simplifying your systems today!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 27, 2025, 10:23 PM EEST
        </p>
      </main>
    </div>
  );
}