"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaDropbox, FaBuilding } from "react-icons/fa";

export default function CaseStudiesPage() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const cardVariants = { hidden: { scale: 1, opacity: 0, y: 20 }, visible: { scale: 1, opacity: 1, y: 0 } };
  const flipVariants = { front: { rotateY: 0 }, back: { rotateY: 180 } };

  const studies = [
    {
      icon: FaGoogle,
      title: "Google (Gmail)",
      summary: "Error budgets & automation for world‑class reliability.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Defined error budgets to balance reliability with innovation.</li>
          <li>Built automation systems to detect and fix issues quickly】.</li>
          <li>Practised blameless post‑mortems to learn from incidents and improve.</li>
        </ul>
      ),
    },
    {
      icon: FaDropbox,
      title: "Dropbox",
      summary: "Reduced outages by 90% with SRE tooling.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Formed an SRE team in 2016 and set goals to reduce outages and improve MTTR.</li>
          <li>Created “Dropbox Pager”, combining multiple monitoring and alerting systems into a single dashboard.</li>
          <li>Achieved a 90% reduction in outages and 95% improvement in mean time to resolution.</li>
        </ul>
      ),
    },
    {
      icon: FaBuilding,
      title: "Squarespace",
      summary: "Centralised monitoring for 99.99% uptime.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Dedicated SRE department responsible for reliability and availability.</li>
          <li>Implemented a centralised monitoring system to track diverse metrics.</li>
          <li>Maintains an impressive 99.99% uptime thanks to SRE investment.</li>
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
        {/* Hero Section */}
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
            SRE Case Studies & Examples
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn from organisations that built reliability into their DNA
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
            Case studies reveal how SRE principles apply in the real world.  The stories of Google,
            Dropbox and Squarespace show the power of error budgets, automation and dedicated
            reliability teams.  By studying these examples, you can adopt practices that reduce
            downtime and improve user experiences.
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
            <li><strong>Define reliability targets:</strong> use SLOs and error budgets to balance stability and innovation.</li>
            <li><strong>Automate response:</strong> build detection and remediation tools to reduce mean time to repair.</li>
            <li><strong>Invest in culture:</strong> adopt blameless post‑mortems and cross‑functional collaboration.</li>
            <li><strong>Centralise observability:</strong> unify monitoring and alerting to gain holistic insights.</li>
            <li><strong>Iterate continuously:</strong> regularly review metrics and refine processes based on learnings.</li>
          </ul>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {studies.map((study, idx) => (
            <motion.div
              key={study.title}
              className="relative cursor-pointer h-56 sm:h-60 perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onClick={() => setFlipped(flipped === idx ? null : idx)}
            >
              {/* Front */}
              <motion.div
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center text-center"
                variants={flipVariants}
                animate={flipped === idx ? 'back' : 'front'}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <study.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-indigo-200 mb-1">{study.title}</h3>
                <p className="text-indigo-100 text-sm">{study.summary}</p>
              </motion.div>
              {/* Back */}
              <motion.div
                className="absolute inset-0 bg-gray-800/90 backdrop-blur-md rounded-lg p-4 overflow-y-auto text-left"
                variants={flipVariants}
                animate={flipped === idx ? 'front' : 'back'}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                {study.details}
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
            <li><strong>Google SRE Book:</strong> explore Google&apos;s best practices and case studies in depth.</li>
            <li><strong>SRE Implementations:</strong> read more case studies across industries at sitereliabilityengineer.dev.</li>
            <li><strong>PagerDuty Blog:</strong> learn about scaling SRE teams and operational best practices.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}