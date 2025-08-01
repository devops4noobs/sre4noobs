"use client"; // Required for useState and motion
import { FaSyncAlt } from "react-icons/fa"; // Added FaSyncAlt for flip icon
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function GitPage() {
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

  // Data for flip cards (Common Git Commands)
  const gitCommandsData = [
    { command: "git init", description: "Initializes a new Git repository in the current directory.", example: "git init my-project" },
    { command: "git clone", description: "Clones an existing repository from a remote URL to your local machine.", example: "git clone https://github.com/user/repo.git" },
    { command: "git add", description: "Stages changes in the working directory for the next commit.", example: "git add file.txt" },
    { command: "git commit", description: "Records staged changes to the repository with a message.", example: "git commit -m 'Initial commit'" },
    { command: "git push", description: "Uploads local commits to a remote repository.", example: "git push origin main" },
    { command: "git pull", description: "Fetches and merges changes from a remote repository to the local one.", example: "git pull origin main" },
    { command: "git branch", description: "Lists, creates, or deletes branches in the repository.", example: "git branch feature-new" },
    { command: "git merge", description: "Integrates changes from one branch into another.", example: "git merge feature-new" },
    { command: "git status", description: "Shows the status of changes in the working directory and staging area.", example: "git status" },
    { command: "git log", description: "Displays the commit history for the current branch.", example: "git log --oneline" },
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
              Git: Version Control for SRE
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Mastering Distributed Version Control
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn how Git powers collaboration and reliability in DevOps
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-300 mb-4 pulse-text">What is Git?</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Created by Linus Torvalds in 2005, it&apos;s the backbone of modern software development, enabling collaboration, tracking changes, and maintaining code history.
          </p>
          {hoveredSection === "intro" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Git revolutionized code collaboration!
            </motion.div>
          )}
        </motion.div>

        {/* Fundamental Concepts Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("concepts")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-300 mb-4 pulse-text">Fundamental Concepts</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Repository:</strong> A project folder containing all files and their history.</li>
            <li><strong>Commit:</strong> A snapshot of changes with a message describing them.</li>
            <li><strong>Branch:</strong> A parallel version of the repository for feature development.</li>
            <li><strong>Merge:</strong> Combining changes from different branches.</li>
            <li><strong>Remote:</strong> A version of the repository hosted on a server (e.g., GitHub).</li>
          </ul>
          {hoveredSection === "concepts" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Master these for effective version control!
            </motion.div>
          )}
        </motion.div>

        {/* Git Workflow Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("workflow")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-300 mb-4 pulse-text">Git Workflow in SRE</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            In SRE, Git enables versioned infrastructure as code, collaborative incident response, and automated pipelines. Use branches for features, pull requests for reviews, and tags for releases.
          </p>
          {hoveredSection === "workflow" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Git streamlines SRE operations!
            </motion.div>
          )}
        </motion.div>

        {/* Common Git Commands - Flip Cards */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("commands")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-300 mb-4 pulse-text">Common Git Commands</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gitCommandsData.map((data, index) => (
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
                  <h3 className="font-bold mb-2">{data.command}: Description</h3>
                  <p className="text-center">{data.description}</p>
                </motion.div>
                <motion.div
                  className="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-blue-800/80 flex flex-col items-center justify-center p-4 text-white text-sm sm:text-base"
                  animate={flippedCard === index ? "front" : "back"}
                  variants={flipVariants}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-bold mb-2">{data.command}: Example</h3>
                  <p className="text-center">{data.example}</p>
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
          {hoveredSection === "commands" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Flip to see command examples!
            </motion.div>
          )}
        </motion.div>

        {/* Benefits Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("benefits")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-300 mb-4 pulse-text">Benefits of Git in SRE</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Version History:</strong> Track changes and revert if needed.</li>
            <li><strong>Collaboration:</strong> Multiple developers work simultaneously without conflicts.</li>
            <li><strong>Branching Model:</strong> Experiment with features safely.</li>
            <li><strong>Auditability:</strong> Maintain records for compliance and debugging.</li>
            <li><strong>Integration:</strong> Powers CI/CD pipelines for automated deployments.</li>
          </ul>
          {hoveredSection === "benefits" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Git enhances SRE reliability!
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-300 mb-4 pulse-text">Best Practices for Git in SRE</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>Use meaningful commit messages.</li>
            <li>Implement Git Flow or GitHub Flow for branching.</li>
            <li>Require pull requests with reviews.</li>
            <li>Integrate with CI tools for automated testing.</li>
            <li>Regularly clean up old branches.</li>
          </ul>
          {hoveredSection === "practices" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Follow these for efficient version control!
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