"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuestionCircle } from "react-icons/fa";

// Define the interface for question objects
interface InterviewQuestion {
  question: string;
  answer: string;
}

export default function InterviewQuestionsPage() {
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [revealedAnswers, setRevealedAnswers] = useState<boolean[]>([]); // Track which answers are revealed

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Replace with your actual GitHub repo path
        const response = await fetch(
          "https://raw.githubusercontent.com/devops4noobs/sre4noobs/main/interviewquestions.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data: InterviewQuestion[] = await response.json();
        setQuestions(data);
        setRevealedAnswers(new Array(data.length).fill(false)); // Initialize revealed state
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  // Toggle answer visibility
  const toggleAnswer = (index: number) => {
    setRevealedAnswers((prev) =>
      prev.map((revealed, i) => (i === index ? !revealed : revealed))
    );
  };

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
              SRE Interview Questions
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Prepare for Your Next Role
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real questions dynamically loaded from GitHub for up-to-date preparation
          </motion.p>
        </motion.section>

        {/* Loading/Error State */}
        {loading && <p className="text-indigo-200 text-center">Loading interview questions...</p>}
        {error && <p className="text-red-400 text-center">Error: {error}</p>}

        {/* Questions List */}
        {!loading && !error && questions.length === 0 && (
          <p className="text-indigo-200 text-center">No questions available. Please check the GitHub file.</p>
        )}
        {!loading && !error && questions.length > 0 && (
          <div className="space-y-6">
            {questions.map((q, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/80 backdrop-blur-md rounded-xl p-4 shadow-lg"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-xl font-semibold text-indigo-300 flex items-center mb-4">
                  <FaQuestionCircle className="mr-2" /> {q.question}
                </h2>
                <p
                  className="text-indigo-400 cursor-pointer hover:underline mb-2"
                  onClick={() => toggleAnswer(index)}
                >
                  {revealedAnswers[index] ? "Hide Answer" : "Reveal Answer"}
                </p>
                {revealedAnswers[index] && (
                  <motion.p
                    className="text-indigo-100"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {q.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-8 text-center">
          Last updated: July 27, 2025, 6:08 PM EEST
        </p>
      </main>
    </div>
  );
}