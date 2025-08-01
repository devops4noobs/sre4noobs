"use client";

/*
 * Chaos Engineering page
 *
 * This page introduces chaos engineering, a discipline that intentionally
 * injects faults into systems to test resilience.  It follows the
 * interactive design used throughout the site: a hero section,
 * guiding principles and a set of flip cards.  Content is based on
 * publicly available material that explains how chaos engineering
 * works, the steps involved in planning experiments and the types of
 * tests and benefits【781624681951284†L120-L143】【781624681951284†L149-L193】.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaCubes,
  FaNetworkWired,
  FaShieldAlt,
  FaFlask,
  FaRobot,
  FaToolbox
} from "react-icons/fa";

export default function ChaosEngineeringPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Chaos experiment cards.  Each back side contains concise bullets
  // outlining the types of failures to simulate rather than long paragraphs.
  const cards = [
    {
      icon: FaBolt,
      title: "Infrastructure Failures",
      summary: "Test how your system behaves when servers disappear.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Randomly terminate compute nodes to test auto‑healing.</li>
          <li>Simulate AZ or region outages for multi‑AZ validation.</li>
          <li>Stress storage and network I/O to uncover bottlenecks.</li>
        </ul>
      ),
    },
    {
      icon: FaCubes,
      title: "Application & Dependency",
      summary: "Force critical services or dependencies to fail.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Crash microservices or databases to test retries.</li>
          <li>Break API calls to third‑party services and observe fallback.</li>
          <li>Inject latency into dependency calls to simulate slowness.</li>
        </ul>
      ),
    },
    {
      icon: FaNetworkWired,
      title: "Network & Security",
      summary: "Disrupt connectivity and test security resilience.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Inject latency or drop packets between services.</li>
          <li>Simulate unauthorised access attempts to test detection.</li>
          <li>Throttle bandwidth or simulate network partitions.</li>
        </ul>
      ),
    },
    {
      icon: FaShieldAlt,
      title: "Operational Resilience",
      summary: "Prepare teams and processes for failure recovery.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Simulate deployment failures and rehearse rollbacks.</li>
          <li>Test disaster recovery runbooks and communication plans.</li>
          <li>Measure MTTR and tune processes to improve.</li>
        </ul>
      ),
    },
  ];

  // Highlight common chaos engineering tools and frameworks.  Each entry
  // includes an icon and a succinct description.  Presenting tools in
  // separate cards makes it easy for beginners to explore options without
  // scrolling through paragraphs.
  const tools = [
    {
      icon: FaFlask,
      name: "Gremlin",
      description: "SaaS platform to inject CPU, memory and network faults via UI or API.",
    },
    {
      icon: FaRobot,
      name: "Chaos Mesh",
      description: "Cloud‑native operator for Kubernetes that schedules chaos experiments.",
    },
    {
      icon: FaToolbox,
      name: "Litmus",
      description: "Open source toolkit with predefined experiments for pods, nodes and networks.",
    },
  ];

  // A simplified chaos experiment written in pseudocode.  This snippet
  // terminates a percentage of EC2 instances for five minutes.  Exposing
  // pseudo‑code helps users understand how to express experiments.
  const experimentCode = `experiment:\n  name: Terminate Random EC2 Instances\n  provider: aws\n  target: ec2\n  actions:\n    - type: stop_instances\n      filters:\n        tags: { environment: 'production' }\n      percentage: 10\n      duration: 5m`;

  // Outline the chaos experiment lifecycle.  Each step helps newcomers
  // understand the order of planning, executing and learning from experiments.
  const experimentSteps = [
    {
      title: "Define Steady State",
      description: "Establish baseline metrics and KPIs before injecting chaos.",
    },
    {
      title: "Hypothesise",
      description: "Predict how the system should respond to failures.",
    },
    {
      title: "Plan",
      description: "Design controlled experiments targeting critical components.",
    },
    {
      title: "Execute & Observe",
      description: "Run the experiment, monitor impacts and capture data.",
    },
    {
      title: "Analyse & Improve",
      description: "Compare results to steady state, fix weaknesses and iterate.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
          style={{ top: "20%", left: "25%" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse"
          style={{ top: "35%", left: "70%" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse"
          style={{ top: "65%", left: "40%" }}
        ></div>
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
            Chaos Engineering
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build resilience through controlled failure
          </motion.p>
        </motion.section>

        {/* Introduction */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            What is Chaos Engineering?
          </h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Chaos engineering intentionally introduces failures into a system to
            test its resilience and observe behaviour under stress. By simulating
            real‑world disruptions and analysing the outcomes, teams uncover
            weaknesses and strengthen reliability.
          </p>
        </motion.div>

        {/* Guiding Principles */}
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
            <li><strong>Define the steady state:</strong> establish baseline metrics and KPIs before experimenting.</li>
            <li><strong>Formulate hypotheses:</strong> predict how the system should respond to failures.</li>
            <li><strong>Plan experiments:</strong> design controlled failures targeting critical components.</li>
            <li><strong>Execute and observe:</strong> run the experiment, monitor impacts and capture data.</li>
            <li><strong>Analyse and improve:</strong> compare results to the steady state, fix weaknesses and iterate.</li>
          </ul>
        </motion.div>

        {/* Tool Kit */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Chaos Engineering Tool Kit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-indigo-800/80 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <tool.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {tool.name}
                </h3>
                <p className="text-indigo-100 text-sm sm:text-base">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experiment Lifecycle */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Experiment Lifecycle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {experimentSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-indigo-800/80 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition duration-300"
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="relative cursor-pointer h-60 sm:h-64 perspective-1000"
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
            </motion.div>
          ))}
        </div>

        {/* Benefits of Chaos Engineering */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Why Chaos Engineering?
          </h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-2 text-sm sm:text-base">
            <li>Reveal hidden weaknesses before they cause outages.</li>
            <li>Validate auto‑scaling, failover and self‑healing strategies.</li>
            <li>Build organisational muscle memory for incident response.</li>
            <li>Increase confidence in your system’s resilience.</li>
          </ul>
        </motion.div>

        {/* Sample Experiment */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Sample Chaos Experiment
          </h2>
          <p className="text-indigo-100 mb-2 text-sm sm:text-base">
            Here is a simplified experiment definition written in YAML‑like
            pseudocode.  This test stops 10% of production EC2 instances for
            five minutes, allowing you to validate auto‑healing and failover.
          </p>
          <pre className="bg-gray-900/90 rounded-md p-3 text-xs sm:text-sm overflow-x-auto text-indigo-100">
{experimentCode}
          </pre>
          <p className="mt-2 text-xs sm:text-sm text-gray-400">
            You can implement similar experiments using tools like Gremlin,
            Chaos Mesh or Litmus.  Adjust the provider, target and action to
            suit your environment.
          </p>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Additional Resources
          </h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-2 text-sm sm:text-base">
            <li>
              <strong>Chaos Engineering Principles:</strong> read the foundational principles from Netflix.
            </li>
            <li>
              <strong>Tools & Frameworks:</strong> explore tools like Gremlin, Chaos Mesh and Litmus.
            </li>
            <li>
              <strong>Case Studies:</strong> learn how companies use chaos engineering to improve reliability.
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}