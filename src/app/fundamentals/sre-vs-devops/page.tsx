'use client'; // Required for useState and motion
import { FaSyncAlt } from "react-icons/fa"; // Added FaSyncAlt for flip icon
import { motion } from "framer-motion";
import { useState } from "react";

export default function SreVsDevOps() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null); // Tracks flipped card
  const [showFlipTooltip, setShowFlipTooltip] = useState(true); // One-time tooltip for mobile

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

  // Data for flip cards (Key Differences)
  const differencesData = [
    { aspect: "Origin", devops: "Emerged from agile practices; popularized by the DevOps movement (e.g., The Phoenix Project book).", sre: "Created by Google; detailed in the SRE book by Ben Treynor Sloss." },
    { aspect: "Focus", devops: "Cultural shift, processes, and tools for faster development and deployment.", sre: "Engineering discipline for reliability, using SLOs, error budgets, and blameless postmortems." },
    { aspect: "Key Metrics", devops: "Deployment frequency, lead time, change failure rate, MTTR (Mean Time to Recovery).", sre: "SLOs (Service Level Objectives), error budgets." },
    { aspect: "Team Structure", devops: "Cross-functional teams; `You build it, you run it.`", sre: "Dedicated SRE teams (often 50% ops, 50% dev); caps on operational work." },
    { aspect: "Risk Management", devops: "Emphasizes experimentation and fast feedback.", sre: "Uses error budgets to balance reliability and innovation." },
    { aspect: "Examples", devops: "Implementing CI/CD with Jenkins, using Docker/Kubernetes for orchestration.", sre: "Setting 99.9% uptime SLOs, conducting chaos engineering tests." },
  ];

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
              SRE vs. DevOps
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Key Differences and Similarities
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Uncover how these methodologies shape reliable systems
          </motion.p>
        </motion.section>

        {/* Introduction Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("intro")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Core Concept</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            SRE and DevOps both aim to improve software delivery and reliability, but SRE focuses on engineering precision while DevOps emphasizes cultural change.
          </p>
          {hoveredSection === "intro" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: SRE adds metrics to DevOps culture!
            </motion.div>
          )}
        </motion.div>

        {/* Core Similarities Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("similarities")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Core Similarities</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>Both emphasize automation, collaboration, and continuous improvement.</li>
            <li>They aim to reduce silos between teams and accelerate delivery.</li>
            <li>Shared tools like CI/CD pipelines, monitoring, and infrastructure as code.</li>
          </ul>
          {hoveredSection === "similarities" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover fact: Combined, they boost efficiency by 40%!
            </motion.div>
          )}
        </motion.div>

        {/* Key Differences - Flip Cards with Flip Button */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("differences")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Key Differences</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {differencesData.map((data, index) => (
              <motion.div
                key={index}
                className="relative w-full h-48 cursor-pointer perspective-1000"
                onClick={() => {
                  setFlippedCard(flippedCard === index ? null : index);
                  setShowFlipTooltip(false); // Hide tooltip after first interaction
                }}
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
                  <h3 className="font-bold mb-2">{data.aspect}: SRE</h3>
                  <p className="text-center">{data.sre}</p>
                </motion.div>
                <motion.div
                  className="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-blue-800/80 flex flex-col items-center justify-center p-4 text-white text-sm sm:text-base"
                  animate={flippedCard === index ? "front" : "back"}
                  variants={flipVariants}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-bold mb-2">{data.aspect}: DevOps</h3>
                  <p className="text-center">{data.devops}</p>
                </motion.div>
                <motion.button
                  className="absolute bottom-2 left-2 w-8 h-8 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 rounded-full flex items-center justify-center shadow-md transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setFlippedCard(flippedCard === index ? null : index);
                    setShowFlipTooltip(false); // Hide tooltip after first flip
                  }}
                >
                  <FaSyncAlt className="text-lg" />
                </motion.button>
                
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* When to Use Each Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("usage")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">When to Use Each</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            DevOps is ideal for organizations starting their transformation journey, focusing on culture and automation. SRE is better suited for mature teams needing precise reliability engineering, often building on DevOps foundations.
          </p>
          {hoveredSection === "usage" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Choose based on your team&apos;s maturity level!
            </motion.div>
          )}
        </motion.div>

        {/* Real-World Example Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("example")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Real-World Example</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            At Google, SRE teams manage Gmail with error budgets—high reliability allows feature pushes, while low reliability shifts focus to stability.
          </p>
          {hoveredSection === "example" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover fact: Google&apos;s model inspires 70% of SRE adopters!
            </motion.div>
          )}
        </motion.div>

        {/* Further Reading Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("reading")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Further Reading</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Check out the SRE Pillars section for deeper dives into SRE-specific practices.
          </p>
          {hoveredSection === "reading" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Dive into pillars for pro tips!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 24, 2025, 10:00 PM EEST
        </p>
      </main>
    </div>
  );
}