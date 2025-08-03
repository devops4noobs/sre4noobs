"use client";

/*
 * Redesigned Kubernetes Fundamentals page.
 *
 * This page introduces the core building blocks of Kubernetes—pods, nodes,
 * deployments, services and configuration objects—within an interactive
 * layout.  Each concept is presented as a card with a brief summary on
 * the front and detailed notes on the back.  Guiding principles help
 * newcomers understand best practices for designing reliable clusters.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCube, FaServer, FaProjectDiagram, FaNetworkWired, FaLock, FaRedoAlt } from "react-icons/fa";

export default function KubernetesFundamentalsPage() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const cardVariants = { hidden: { scale: 1, opacity: 0, y: 20 }, visible: { scale: 1, opacity: 1, y: 0 } };
  const flipVariants = { front: { rotateY: 0 }, back: { rotateY: 180 } };

  const concepts = [
    {
      icon: FaCube,
      title: "Pods",
      summary: "The smallest deployable units in Kubernetes.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li><strong>Definition:</strong> groups one or more containers sharing network and storage.</li>
          <li><strong>Issue Impact:</strong> pod crashes disrupt services; use liveness and readiness probes.</li>
          <li><strong>Process Improvement:</strong> leverage pod anti‑affinity to spread workloads across nodes.</li>
        </ul>
      ),
    },
    {
      icon: FaServer,
      title: "Nodes",
      summary: "Worker machines that run your pods.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li><strong>Definition:</strong> physical or virtual hosts managed by the control plane.</li>
          <li><strong>Issue Impact:</strong> node failures take down all resident pods; plan for high availability.</li>
          <li><strong>Process Improvement:</strong> monitor node health and enable autoscaling of node pools.</li>
        </ul>
      ),
    },
    {
      icon: FaProjectDiagram,
      title: "Deployments",
      summary: "Declaratively manage stateless application replicas.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li><strong>Definition:</strong> ensures a specified number of pod replicas are running.</li>
          <li><strong>Issue Impact:</strong> configuration errors cause failed rollouts; prefer rolling updates.</li>
          <li><strong>Process Improvement:</strong> use canary or blue/green strategies for zero‑downtime deploys.</li>
        </ul>
      ),
    },
    {
      icon: FaNetworkWired,
      title: "Services",
      summary: "Expose and load balance access to pods.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li><strong>Definition:</strong> provides stable IPs and DNS names for pods; supports ClusterIP, NodePort and LoadBalancer types.</li>
          <li><strong>Issue Impact:</strong> incorrect selectors or ports block traffic; validate via <code>kubectl describe service</code>.</li>
          <li><strong>Process Improvement:</strong> use Ingress controllers for advanced routing and TLS.</li>
        </ul>
      ),
    },
    {
      icon: FaLock,
      title: "ConfigMaps & Secrets",
      summary: "Externalise configuration and sensitive data.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li><strong>Definition:</strong> ConfigMaps store plain‑text configuration; Secrets store credentials.</li>
          <li><strong>Issue Impact:</strong> exposed secrets lead to security incidents; encrypt and rotate them.</li>
          <li><strong>Process Improvement:</strong> integrate with external vaults for robust secret management.</li>
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
            Fundamental Kubernetes Concepts
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master the core building blocks of a resilient cluster
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
            Knowing Kubernetes primitives empowers SREs to design and troubleshoot clusters.  Each
            component—from pods to services—plays a role in ensuring applications run reliably
            and scale seamlessly.  This page summarises what each concept does, common failure
            modes and how to improve them.
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
            <li><strong>Specify resources:</strong> define CPU and memory requests/limits for predictable scheduling.</li>
            <li><strong>Use probes:</strong> configure readiness and liveness probes to detect unhealthy pods.</li>
            <li><strong>Distribute workloads:</strong> apply pod anti‑affinity and topology spread constraints.</li>
            <li><strong>Version safely:</strong> roll out changes gradually with deployments and rollout history.</li>
            <li><strong>Secure by design:</strong> run containers as non‑root and restrict privileges via PodSecurity policies.</li>
          </ul>
        </motion.div>

        {/* Concept Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {concepts.map((concept, idx) => (
            <motion.div
              key={concept.title}
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
                {/* Flip indicator */}
                 <div className="absolute top-2 right-2">
                   <FaRedoAlt className="text-yellow-300/60 text-sm animate-pulse" />
                 </div>
                <concept.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-indigo-200 mb-1">{concept.title}</h3>
                <p className="text-indigo-100 text-sm">{concept.summary}</p>
              </motion.div>
              {/* Back */}
              <motion.div
                className="absolute inset-0 bg-gray-800/90 backdrop-blur-md rounded-lg p-4 overflow-y-auto text-left"
                variants={flipVariants}
                animate={flipped === idx ? 'front' : 'back'}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                {concept.details}
              </motion.div>
              {/* Flip indicator */}
              <div className="absolute top-2 right-2">
                <FaRedoAlt className="text-yellow-300/60 text-sm animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-4 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          💡 Click the cards to flip and see detailed features
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">Additional Resources</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-2 text-sm sm:text-base">
            <li><strong>Official Concepts:</strong> explore the Kubernetes docs for deep dives on all primitives.</li>
            <li><strong>Patterns & Anti‑patterns:</strong> learn when to use Deployments vs. StatefulSets and other design choices.</li>
            <li><strong>Hands‑on Labs:</strong> practice building clusters with Minikube, kind or managed services.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}