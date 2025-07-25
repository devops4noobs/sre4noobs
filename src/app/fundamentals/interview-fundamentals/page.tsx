'use client'; // Required for useState and motion
import { FaQuestionCircle, FaBrain, FaRocket, FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Type definition for Question
interface Question {
  category: string;
  question: string;
  answer: string[];
}

export default function InterviewQuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Animation variants for cards
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
    hover: { scale: 1.03, boxShadow: "0 0 15px rgba(0, 255, 255, 0.6)" }, // Cyan glow
  };

  // Fetch and parse questions from GitHub
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/devops4noobs/sre4noobs/refs/heads/main/questions.txt'); // Replace with your actual GitHub raw URL
        if (!response.ok) {
          throw new Error('Failed to fetch questions.txt');
        }
        const fileContent = await response.text();
        const lines = fileContent.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        const parsedQuestions = [];
        let currentCategory = '';
        let currentQuestion = '';
        let currentAnswer = [];

        for (const line of lines) {
          if (line.startsWith('=== ')) {
            if (currentQuestion) {
              parsedQuestions.push({ category: currentCategory, question: currentQuestion, answer: currentAnswer });
              currentAnswer = [];
            }
            currentCategory = line.replace('=== ', '').replace(' ===', '');
          } else if (line.endsWith('---')) {
            if (currentQuestion) {
              currentAnswer.push(line.replace('---', '').trim());
            } else {
              currentQuestion = line.replace('---', '').trim();
            }
          }
        }

        if (currentQuestion) {
          parsedQuestions.push({ category: currentCategory, question: currentQuestion, answer: currentAnswer });
        }

        setQuestions(parsedQuestions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <p className="text-cyan-100">Loading questions from GitHub...</p>;
  }

  // Group questions by category with proper typing
  const groupedQuestions = questions.reduce((acc, q: Question) => {
    if (!acc[q.category]) acc[q.category] = [];
    acc[q.category].push(q);
    return acc;
  }, {} as { [key: string]: Question[] });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-800 to-blue-800 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ top: "15%", left: "25%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "40%", left: "75%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "70%", left: "35%" }}></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-3xl mx-auto text-center">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-900 to-blue-700 rounded-xl p-4 md:p-6 mb-6 md:mb-12 shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl tracking-tight font-inter"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-blue-400 pr-2">
              SRE Interview Questions
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-xl text-cyan-100 mb-4 md:mb-6 font-inter"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Prepare for your SRE journey with categorized questions
          </motion.p>
        </motion.section>

        {/* Categories Accordion */}
        {Object.entries(groupedQuestions).map(([category, items], catIndex) => (
          <motion.div
            key={category}
            className="bg-gray-800/80 backdrop-blur-md rounded-xl p-4 md:p-6 mb-6 shadow-lg relative"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredSection(category.toLowerCase())}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-200 mb-4 flex items-center gap-2 glow-text">
              {category === "Beginner" && <FaQuestionCircle className="text-cyan-300" />}
              {category === "Advanced" && <FaBrain className="text-cyan-300" />}
              {category === "Expert" && <FaRocket className="text-cyan-300" />}
              {category} Questions
            </h2>
            <div className="space-y-4">
              {items.map((item) => {
                const globalIndex = items.findIndex(q => q.question === item.question) + catIndex * 10;
                return (
                  <motion.div
                    key={item.question}
                    className="bg-indigo-900/60 rounded-lg p-4 cursor-pointer border border-indigo-500/40 hover:bg-indigo-800/80 transition-all duration-300"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    whileHover={{ boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)" }} // Cyan glow
                    onClick={() => {
                      setExpandedIndex(expandedIndex === globalIndex ? null : globalIndex);
                      setProgress((prev) => Math.min(prev + 100 / questions.length, 100));
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-cyan-100 font-medium">{item.question}</h3>
                      {expandedIndex === globalIndex ? (
                        <FaMinus className="w-5 h-5 text-cyan-300" />
                      ) : (
                        <FaPlus className="w-5 h-5 text-indigo-300" />
                      )}
                    </div>
                    {expandedIndex === globalIndex && (
                      <motion.div
                        className="mt-4 text-cyan-100 text-sm md:text-base"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.answer.map((line, idx) => (
                          <p key={idx} className="mb-2">{line}</p>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            {hoveredSection === category.toLowerCase() && (
              <motion.div
                className="bg-indigo-900/50 rounded p-2 mt-2 text-white text-xs md:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Click to see the answer!
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Progress Tracker */}
        <motion.div
          className="w-16 h-16 mb-6 flex items-center justify-center"
          animate={{ scale: progress >= 100 ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-full h-full transform -rotate-90">
            <motion.circle
              cx="32"
              cy="32"
              r="30"
              stroke="#00FFFF" // Cyan progress ring
              strokeWidth="4"
              fill="transparent"
              pathLength="1"
              style={{ pathLength: progress / 100 }}
            />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-cyan-300 text-sm">
              {Math.round(progress)}%
            </text>
          </svg>
          {progress >= 100 && (
            <motion.div
              className="absolute text-cyan-300 text-xs font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Mastery Unlocked!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-500 text-xs mt-4 text-center">
          Last updated: July 25, 2025, 09:16 PM EEST
        </p>
      </main>
    </div>
  );
}