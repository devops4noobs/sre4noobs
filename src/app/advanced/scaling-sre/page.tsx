"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBullseye, FaChartLine, FaHandsHelping, FaCalendarAlt } from "react-icons/fa";

export default function ScalingSREPage() {
  const [flip, setFlip] = useState<number | null>(null);
  const cardVariants = { hidden: { scale: 1, opacity: 0, y: 20 }, visible: { scale: 1, opacity: 1, y: 0 } };
  const flipVariants = { front: { rotateY: 0 }, back: { rotateY: 180 } };

  const cards = [
    {
      icon: FaCalendarAlt,
      title: "Plan for Onboarding",
      summary: "Hiring and training take time—plan for it.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>New SREs may need 3–12 months to learn systems and culture.</li>
          <li>Provide mentorship and documentation to accelerate onboarding.</li>
          <li>Adjust project timelines to account for the learning curve.</li>
        </ul>
      ),
    },
    {
      icon: FaBullseye,
      title: "Set Long‑Term Goals",
      summary: "Look beyond immediate fires to the horizon.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Define a vision for the SRE team 2–3 years out.</li>
          <li>Balance building new capabilities with supporting existing systems.</li>
          <li>Plan capacity for future workloads and organisational growth.</li>
        </ul>
      ),
    },
    {
      icon: FaChartLine,
      title: "Communicate Progress",
      summary: "Show the team how far you’ve come.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Regularly remind teams of small improvements and milestones.</li>
          <li>Use data to illustrate adoption rates and infrastructure migrations.</li>
          <li>Celebrate wins to keep morale high during long transformations.</li>
        </ul>
      ),
    },
    {
      icon: FaHandsHelping,
      title: "Share Knowledge",
      summary: "Transparency and collaboration are key.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Publish goals and guidelines in an internal wiki.</li>
          <li>Partner with engineering teams to define supportable architectures.</li>
          <li>Encourage cross‑team learning through brown‑bags and post‑mortems.</li>
        </ul>
      ),
    },
    {
      icon: FaUsers,
      title: "Balance Responsibilities",
      summary: "Support current systems while building the future.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Recognise that SRE teams must maintain existing environments while scaling.</li>
          <li>Allocate time for both incident response and platform engineering.</li>
          <li>Adjust priorities based on business needs and technical debt.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: '20%', left: '25%' }} />
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: '35%', left: '70%' }} />
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: '65%', left: '40%' }} />
      </div>
      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        {/* Hero */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-12 shadow-lg text-center"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Scaling SRE in Teams
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Strategies to grow reliability practices across your organisation
          </motion.p>
        </motion.section>

        {/* Introduction */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">Introduction</h2>
          <p className="text-indigo-100 text-sm sm:text-base">
            Building and scaling an SRE team is more than hiring engineers—it's about cultivating
            a culture of reliability across your organisation.  It requires thoughtful
            onboarding, long‑term planning, transparent communication and balancing the needs of
            current systems with future initiatives.  This page summarises strategies to grow
            SRE in your teams.
          </p>
        </motion.div>

        {/* Guiding Principles */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">Guiding Principles</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Define mission:</strong> connect SRE work to organisational goals.</li>
            <li><strong>Partner broadly:</strong> collaborate with engineering to design supportable architectures.</li>
            <li><strong>Improve customer experience:</strong> focus on availability, latency and performance.</li>
            <li><strong>Use managed solutions:</strong> favour commercially supported tools over building everything in‑house.</li>
            <li><strong>Share knowledge:</strong> make goals and progress visible to increase transparency.</li>
          </ul>
        </motion.div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              className="relative cursor-pointer h-56 sm:h-60 perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onClick={() => setFlip(flip === idx ? null : idx)}
            >
              {/* Front */}
              <motion.div
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center text-center"
                variants={flipVariants}
                animate={flip === idx ? 'back' : 'front'}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <c.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-indigo-200 mb-1">{c.title}</h3>
                <p className="text-indigo-100 text-sm">{c.summary}</p>
              </motion.div>
              {/* Back */}
              <motion.div
                className="absolute inset-0 bg-gray-800/90 backdrop-blur-md rounded-lg p-4 overflow-y-auto text-left"
                variants={flipVariants}
                animate={flip === idx ? 'front' : 'back'}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                {c.details}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">Additional Resources</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-2 text-sm sm:text-base">
            <li><strong>PagerDuty Blog:</strong> read the full article on building and scaling SRE teams for more insights.</li>
            <li><strong>Google SRE Book:</strong> explore chapters on organisational structure and staffing.</li>
            <li><strong>SRE Community:</strong> join forums and podcasts (Page it to the Limit) to hear practitioners’ stories.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}