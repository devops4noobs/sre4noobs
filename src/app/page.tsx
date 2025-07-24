'use client';
import { FaRobot, FaUserCheck, FaCogs, FaChartLine, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const getStartedRef = useRef<HTMLDivElement>(null); // Ref to scroll to the target section

  const cardVariants = {
    hidden: { scale: 1, zIndex: 0 },
    hover: { scale: 1.05, zIndex: 10, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" },
  };

  const handleLaunchClick = () => {
    if (getStartedRef.current) {
      getStartedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: "10%", left: "20%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "30%", left: "70%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "60%", left: "40%" }}></div>
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-xs sm:max-w-sm md:max-w-3xl mx-auto text-center px-4 py-8 sm:py-12 mb-6 sm:mb-12 bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight animate-fade-in"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-yellow-300 neon-text">Devops4Noobs</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-indigo-100 mb-4 sm:mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Portal to Mastering <span className="font-bold text-yellow-200">Site Reliability Engineering</span>
        </motion.p>
        <motion.a
          href="#get-started"
          onClick={(e) => {
            e.preventDefault();
            handleLaunchClick();
          }}
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg transition duration-300 text-base sm:text-lg hover:shadow-[0_0_15px_#facc15,0_0_30px_#facc15,0_0_45px_#facc15]"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }} // Added for mobile tap feedback
        >
          🚀 Launch into Learning
        </motion.a>
      </section>

      {/* Quick Stats/Highlights with Hover Effects */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6 sm:mb-12">
        {[
          { icon: FaChartLine, value: "$100,000/hr", label: "Avg. Downtime Cost", color: "yellow-300" },
          { icon: FaCogs, value: "50% Fewer Incidents", label: "With SRE", color: "yellow-300" },
          { icon: FaRocket, value: "99.99% Uptime", label: "Industry Goal", color: "yellow-300" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 flex flex-col items-center w-full sm:w-56 h-28 sm:h-32 shadow-lg cursor-pointer relative overflow-hidden"
            initial="hidden"
            whileHover="hover"
            variants={cardVariants}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <stat.icon className={`text-${stat.color} text-3xl sm:text-4xl mb-2 transform ${hoveredCard === index ? "rotate-12" : ""}`} />
            <span className="text-lg sm:text-xl font-bold text-white">{stat.value}</span>
            <span className="text-indigo-100 text-xs sm:text-sm">{stat.label}</span>
            {hoveredCard === index && (
              <div className="absolute inset-0 bg-${stat.color}/20 rounded-xl animate-pulse" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Trends Section with Glassmorphism */}
      <section ref={getStartedRef} className="bg-gray-800/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl max-w-xs sm:max-w-3xl md:max-w-6xl mx-auto text-left mb-6 sm:mb-12" id="get-started">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-4 sm:mb-6 glow-text">SRE Trends Shaping 2025</h2>
        <div className="grid gap-4 sm:gap-6">
          <motion.div
            className="bg-gray-900/80 rounded-xl p-4 sm:p-6 shadow-lg flex flex-col gap-2 hover:bg-indigo-900/80 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 text-left">
              <FaRobot className="text-indigo-300 text-2xl sm:text-3xl" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-200">AI-Driven Automation</h3>
            </div>
            <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base text-left">
              <li><strong>Purpose:</strong> AI predicts outages, auto-scales resources.</li>
              <li><strong>Scope:</strong> Cuts toil by 40% in hybrid clouds.</li>
              <li><strong>Approach:</strong> Real-time anomaly detection.</li>
              <li><strong>Example:</strong> Dynatrace AI for SRE ops.</li>
              <li><strong>Strengths:</strong> Boosts innovation time.</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-gray-900/80 rounded-xl p-4 sm:p-6 shadow-lg flex flex-col gap-2 hover:bg-indigo-900/80 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 text-left">
              <FaUserCheck className="text-indigo-300 text-2xl sm:text-3xl" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-200">UX-Centric Reliability</h3>
            </div>
            <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base text-left">
              <li><strong>Purpose:</strong> Treats latency as outages.</li>
              <li><strong>Scope:</strong> Focuses on Apdex scores.</li>
              <li><strong>Approach:</strong> End-to-end monitoring.</li>
              <li><strong>Example:</strong> New Relic for user journeys.</li>
              <li><strong>Strengths:</strong> Elevates customer trust.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn with Interactive Elements */}
      <section className="bg-indigo-800/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl max-w-xs sm:max-w-3xl md:max-w-6xl mx-auto text-center mb-6 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-200 mb-4 sm:mb-6 pulse-text">Master SRE Skills Here</h2>
        <ul className="list-none space-y-4 text-indigo-100 text-base sm:text-lg">
          {[
            "Closer Dev-SRE Synergy: Embed with devs for chaos engineering, leveraging multi-cloud platforms.",
            "Toil Elimination: Automate with AI scripts, reclaiming 30% of your time per Gartner 2025.",
            "Bite-Sized Learning: Interactive modules with quizzes and a vibrant community.",
            "Hands-On Tools: SLO calculators, simulators, and postmortems.",
            "Advanced Insights: Chaos engineering and team scaling strategies.",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="bg-gray-900/70 rounded-xl p-3 sm:p-4 shadow-md hover:bg-indigo-900/80 transition-colors duration-300"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="font-bold text-yellow-300">{item.split(":")[0]}:</span> {item.split(":")[1]}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Call to Action with Testimonials */}
      <section className="w-full max-w-xs sm:max-w-md md:max-w-4xl mx-auto text-center py-8 px-4 mb-6 sm:mb-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg text-left">
              <blockquote className="italic text-indigo-200 text-lg sm:text-xl mb-2">
                &quot;Devops4Noobs simplified SRE for me, landing my first job!&quot;
              </blockquote>
              <div className="flex items-center justify-between">
                <span className="block text-indigo-400 font-semibold">— Raj Patel, India</span>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg text-left">
              <blockquote className="italic text-indigo-200 text-lg sm:text-xl mb-2">
                &quot;The immersive tools boosted my confidence in handling production incidents effectively.&quot;
              </blockquote>
              <div className="flex items-center justify-between">
                <span className="block text-indigo-400 font-semibold">— Emily Johnson, USA</span>
                <div className="flex text-yellow-400">★★★★☆</div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg text-left">
              <blockquote className="italic text-indigo-200 text-lg sm:text-xl mb-2">
                &quot;Devops4Noobs&apos; real-world examples transformed how I approach system reliability.&quot;
              </blockquote>
              <div className="flex items-center justify-between">
                <span className="block text-indigo-400 font-semibold">— Lukas Müller, Germany</span>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
          </div>
          <motion.a
            href="https://www.facebook.com/groups/755805476911003/?mibextid=wwXIfr"
            target="_blank"
            className="mt-6 sm:mt-8 inline-block bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-6 py-2 sm:px-10 sm:py-4 rounded-full shadow-lg transition duration-300 text-base sm:text-xl hover:shadow-[0_0_15px_#facc15,0_0_30px_#facc15,0_0_45px_#facc15]"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Join our Facebook Community
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-indigo-200 text-sm opacity-70">
        © {new Date().getFullYear()} Devops4Noobs. Crafted with passion for SRE learners. Last updated: July 24, 2025, 10:33 PM EEST
      </footer>
    </div>
  );
}