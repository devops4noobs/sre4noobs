"use client";

/*
 * Redesigned PagerDuty Integration page
 *
 * This page introduces PagerDuty as a modern incident response platform
 * and demonstrates best practices for on‑call scheduling, escalation
 * policies, service definitions and automation.  It adopts the same
 * interactive card layout used in other redesigned pages: a hero
 * section, guiding principles and flip cards.  Content is
 * summarised from public articles about PagerDuty alerting and
 * incident management.
 *
 * Each card exposes key concepts such as escalation policies, on‑call
 * schedules, services & incidents, and integrations & event rules.
 * Clicking a card flips it to reveal additional details.  This
 * structure helps users grasp the essentials of PagerDuty without
 * being overwhelmed by long paragraphs.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRedoAlt } from "react-icons/fa";
import {
  FaBell,
  FaUsers,
  FaCubesStacked,
  FaPlug,
  FaStopwatch,
  FaClock,
  FaPercent
} from "react-icons/fa6";

export default function PagerDutyIntegrationPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Cards summarising core PagerDuty concepts.  Details have been reduced
  // to a few bullet points for easier reading.
  const cards = [
    {
      icon: FaBell,
      title: "Escalation Policies",
      summary: "Automatically alert the right people when issues persist.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Define multi‑tier escalation workflows.</li>
          <li>Route based on severity and service.</li>
          <li>Escalate to rotations, managers or teams.</li>
        </ul>
      ),
    },
    {
      icon: FaUsers,
      title: "On‑Call Scheduling",
      summary: "Guarantee 24/7 coverage with rotating schedules.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Define primary and secondary rotations.</li>
          <li>Balance coverage to prevent burnout.</li>
          <li>Sync schedules with calendars and notifications.</li>
        </ul>
      ),
    },
    {
      icon: FaCubesStacked,
      title: "Services & Incidents",
      summary: "Model your infrastructure and track incidents end‑to‑end.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Define services to route alerts to the right teams.</li>
          <li>Track incident lifecycle: triggered → acknowledged → resolved.</li>
          <li>Review incident timelines to improve processes.</li>
        </ul>
      ),
    },
    {
      icon: FaPlug,
      title: "Integrations & Event Rules",
      summary: "Connect your monitoring tools and reduce alert noise.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Filter and route alerts based on content and severity.</li>
          <li>Trigger automated actions (e.g., create tickets) on incident creation.</li>
          <li>Leverage webhooks for custom workflows.</li>
        </ul>
      ),
    },
  ];

  // Key incident metrics to track in PagerDuty.  Each entry includes an icon
  // and a short description explaining why the metric matters.  These cards
  // give newcomers a quick overview without the need to scroll.
  const metrics = [
    {
      icon: FaStopwatch,
      name: "MTTA",
      description: "Mean Time To Acknowledge – how quickly responders act after an alert is triggered.",
    },
    {
      icon: FaClock,
      name: "MTTR",
      description: "Mean Time To Resolve – the average time from alert to full resolution.",
    },
    {
      icon: FaPercent,
      name: "Error Rate",
      description: "The percentage of incidents caused by recurring or unresolved issues.",
    },
  ];

  // Define a simple workflow overview for PagerDuty.  Each step helps
  // beginners understand the order of setup and usage.
  const workflowSteps = [
    {
      title: "Define Services",
      description: "Map infrastructure components to PagerDuty services.",
    },
    {
      title: "Set Escalations",
      description: "Create escalation policies to ensure alerts reach responders.",
    },
    {
      title: "Schedule On‑Call",
      description: "Configure rotations to guarantee 24/7 coverage.",
    },
    {
      title: "Integrate Tools",
      description: "Connect monitoring, ticketing and chat tools.",
    },
    {
      title: "Continuous Improvement",
      description: "Review metrics (MTTA/MTTR) and refine processes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Subtle animated particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
          style={{ top: "15%", left: "25%" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse"
          style={{ top: "35%", left: "70%" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse"
          style={{ top: "70%", left: "40%" }}
        ></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        {/* Hero section */}
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
            PagerDuty Integration
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Streamline on‑call and incident response
          </motion.p>
        </motion.section>

        {/* Introduction card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            What is PagerDuty?
          </h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            PagerDuty is a leading incident response and alerting platform that
            detects issues early and routes notifications to the right responders
            before problems become outages. It centralises incident management,
            automates workflows and integrates with your entire toolchain.
          </p>
        </motion.div>

        {/* Guiding principles */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Guiding Principles
          </h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Define services:</strong> map infrastructure components to PagerDuty services so alerts route correctly.</li>
            <li><strong>Use escalation policies:</strong> ensure unresolved incidents are escalated quickly to maintain SLAs.</li>
            <li><strong>Balance on‑call rotations:</strong> provide 24/7 coverage while preventing burnout.</li>
            <li><strong>Integrate monitoring tools:</strong> connect CloudWatch, SignalFx, Jira and Slack via event rules.</li>
            <li><strong>Continuously improve:</strong> analyse incident metrics (MTTA, MTTR) and conduct postmortems to refine workflows.</li>
          </ul>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-indigo-800/80 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <metric.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {metric.name}
                </h3>
                <p className="text-indigo-100 text-sm sm:text-base">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PagerDuty Workflow */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            PagerDuty Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-indigo-800/80 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {step.title}
                </h3>
                <p className="text-indigo-100 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Incident Timeline Example */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Incident Timeline
          </h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Visualise the life cycle of an incident as it moves from being
            triggered to acknowledged and finally resolved.  Each stage should
            have clear ownership and SLAs.
          </p>
          <div className="flex items-center justify-between">
            {/* Triggered */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
              <span className="mt-2 text-xs sm:text-sm text-indigo-100">
                Triggered
              </span>
            </div>
            <div className="flex-auto border-t border-indigo-500 mx-2"></div>
            {/* Acknowledged */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
              <span className="mt-2 text-xs sm:text-sm text-indigo-100">
                Acknowledged
              </span>
            </div>
            <div className="flex-auto border-t border-indigo-500 mx-2"></div>
            {/* Resolved */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span className="mt-2 text-xs sm:text-sm text-indigo-100">
                Resolved
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="relative cursor-pointer h-56 sm:h-64 perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onClick={() =>
                setFlippedCard(flippedCard === index ? null : index)
              }
            >
              {/* Front */}
              <motion.div
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center text-center"
                variants={flipVariants}
                animate={flippedCard === index ? "back" : "front"}
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                <card.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-indigo-200 mb-1">
                  {card.title}
                </h3>
                <p className="text-indigo-100 text-sm">
                  {card.summary}
                </p>
              </motion.div>
              {/* Back */}
              <motion.div
                className="absolute inset-0 bg-gray-800/90 backdrop-blur-md rounded-lg p-4 overflow-y-auto text-left"
                variants={flipVariants}
                animate={flippedCard === index ? "front" : "back"}
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                {card.details}
              </motion.div>
              {/* Flip Icon */}
              <motion.button
                className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 rounded-full flex items-center justify-center shadow-md transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <FaRedoAlt className="text-sm" />
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
          💡 Click the cards to flip and see detailed information
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Additional Resources
          </h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-2 text-sm sm:text-base">
            <li>
              <strong>PagerDuty Documentation:</strong> explore official guides on services, policies and schedules.
            </li>
            <li>
              <strong>Incident Response Playbook:</strong> learn how to run effective incident calls and postmortems.
            </li>
            <li>
              <strong>Integrations Catalog:</strong> discover integrations with monitoring, chat and ticketing tools.
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}