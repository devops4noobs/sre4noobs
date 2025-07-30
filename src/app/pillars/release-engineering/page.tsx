"use client"; // Required for useState and motion
import { FaSyncAlt } from "react-icons/fa"; // Added FaSyncAlt for flip icon
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function ReleaseEngineering() {
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

  // Data for flip cards (Examples of Release Engineering)
  const releaseExamplesData = [
    {
      title: "Social Media Feed Algorithm",
      scenario: "A social media platform rolls out a new feed algorithm to 1% of users.",
      details: "Confirms no performance drop before full deployment, ensuring a seamless user experience."
    },
    {
      title: "Mobile App Feature Flag",
      scenario: "A mobile app uses feature flags to enable a new login feature for 5% of users.",
      details: "Rolls back after detecting a 2% crash rate, preventing widespread issues."
    },
    {
      title: "Database Schema Update",
      scenario: "A database service automates schema updates with a rollback plan.",
      details: "Prevents data corruption during a major release, maintaining data integrity."
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
              Release Engineering
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Delivering Software Safely and Efficiently
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Streamline deployments while ensuring reliability
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">Core Concept: Safe and Reliable Releases</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Release engineering in SRE involves designing processes to deploy code changes with minimal risk. This includes automated testing, staged rollouts, and post-release monitoring, transforming releases from potential disruption points into opportunities for improvement and innovation.
          </p>
          {hoveredSection === "core" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Safe releases boost confidence in deployments!
            </motion.div>
          )}
        </motion.div>

        {/* Key Practices Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("practices")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">🚀 Key Practices</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Canary Releases:</strong> Deploy to a small subset of users to test stability.</li>
            <li><strong>Progressive Rollouts:</strong> Gradually increase deployment scope with feature flags.</li>
            <li><strong>Automated Testing:</strong> Validate changes with unit, integration, and performance tests.</li>
            <li><strong>Rollback Mechanisms:</strong> Enable quick reversions if issues arise.</li>
            <li><strong>Post-Release Monitoring:</strong> Track SLOs to assess release health.</li>
          </ul>
          {hoveredSection === "practices" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: These practices ensure reliable releases!
            </motion.div>
          )}
        </motion.div>

        {/* Examples of Release Engineering - Flip Cards with Flip Button */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("examples")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">📋 Examples of Release Engineering</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {releaseExamplesData.map((data, index) => (
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
          {hoveredSection === "examples" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Flip to see release engineering in action!
            </motion.div>
          )}
        </motion.div>

        {/* Benefits of Release Engineering Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("benefits")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">🤖 Benefits of Release Engineering</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Reduced Risk:</strong> Minimizes outages with staged deployments.</li>
            <li><strong>Faster Delivery:</strong> Accelerates feature rollouts with confidence.</li>
            <li><strong>Improved Quality:</strong> Catches issues early through automation.</li>
            <li><strong>Team Alignment:</strong> Aligns dev and ops with shared release goals.</li>
            <li><strong>Resilience:</strong> Ensures quick recovery with rollback options.</li>
          </ul>
          {hoveredSection === "benefits" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: These benefits streamline deployments!
            </motion.div>
          )}
        </motion.div>

        {/* Best Practices Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("best-practices")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">💡 Best Practices</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>Automate the entire release pipeline, from build to deploy.</li>
            <li>Test in production-like environments before rollouts.</li>
            <li>Use canary analysis to validate each deployment phase.</li>
            <li>Maintain a rollback strategy for every release.</li>
            <li>Monitor post-release metrics against SLOs in real-time.</li>
          </ul>
          {hoveredSection === "best-practices" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Follow these for smooth releases!
            </motion.div>
          )}
        </motion.div>

        {/* Sample Release Workflow Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("workflow")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">📝 Sample Release Workflow</h2>
          <p className="text-indigo-100 italic mb-4 text-sm sm:text-base">
            <strong>Canary Deployment Steps:</strong><br />
            1. Deploy to 1% of traffic.<br />
            2. Monitor latency and error rate for 10 minutes.<br />
            3. If stable, increase to 25%, then 100% over 1 hour.<br />
            4. Rollback if errors exceed 0.5%.
          </p>
          {hoveredSection === "workflow" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Try this workflow for your next release!
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
            Release engineering in SRE bridges the gap between speed and stability, enabling teams to deliver value while maintaining robust service reliability.
          </p>
          {hoveredSection === "closing" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Start optimizing your release process today!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 27, 2025, 10:19 PM EEST
        </p>
      </main>
    </div>
  );
}