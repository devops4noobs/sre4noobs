import { FaRobot, FaUserCheck, FaCogs, FaChartLine, FaRocket, FaUsers, FaLightbulb, FaTools, FaBolt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-indigo-700 to-blue-900 flex flex-col items-center justify-start py-0 relative overflow-x-hidden">
      {/* Animated Gradient Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute bg-gradient-to-br from-yellow-400/30 to-pink-500/20 rounded-full blur-3xl w-[600px] h-[600px] left-[-200px] top-[-200px] animate-pulse" />
        <div className="absolute bg-gradient-to-tr from-blue-400/20 to-indigo-500/10 rounded-full blur-3xl w-[500px] h-[500px] right-[-150px] top-[200px] animate-pulse" />
        <div className="absolute bg-gradient-to-tl from-indigo-400/20 to-yellow-200/10 rounded-full blur-3xl w-[400px] h-[400px] left-[40vw] bottom-[-200px] animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto text-center py-20 px-4 mb-12 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-indigo-400">Devops4Noobs</span>
        </h1>
        <p className="text-2xl md:text-3xl text-indigo-100 mb-8 animate-fade-in delay-100">
          Master <span className="font-bold text-yellow-200">Site Reliability Engineering</span> with hands-on labs, real-world tools, and a vibrant community.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-400 hover:from-yellow-300 hover:to-indigo-500 text-indigo-900 font-extrabold px-12 py-5 rounded-full shadow-2xl transition duration-200 text-2xl animate-bounce"
        >
          🚀 Start Your SRE Journey
        </a>
      </section>

      {/* Glassmorphism Stats */}
      <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in delay-200">
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center w-72 shadow-2xl border border-white/10 hover:scale-105 transition">
          <FaChartLine className="text-yellow-300 text-5xl mb-3" />
          <span className="text-2xl font-extrabold text-white">$100,000/hr</span>
          <span className="text-indigo-100 text-base mt-1">Avg. Downtime Cost</span>
        </div>
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center w-72 shadow-2xl border border-white/10 hover:scale-105 transition">
          <FaCogs className="text-yellow-300 text-5xl mb-3" />
          <span className="text-2xl font-extrabold text-white">50% Fewer Incidents</span>
          <span className="text-indigo-100 text-base mt-1">With SRE Practices</span>
        </div>
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center w-72 shadow-2xl border border-white/10 hover:scale-105 transition">
          <FaRocket className="text-yellow-300 text-5xl mb-3" />
          <span className="text-2xl font-extrabold text-white">99.99% Uptime</span>
          <span className="text-indigo-100 text-base mt-1">Industry Standard</span>
        </div>
      </div>

      {/* Trends Section */}
      <section className="bg-white/10 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto text-justify mb-16 border border-white/10 animate-fade-in delay-300" id="get-started">
        <h2 className="text-4xl font-extrabold text-yellow-300 mb-10 text-center tracking-tight">Emerging SRE Trends for 2025</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-indigo-900/80 to-blue-800/80 rounded-2xl p-8 shadow-xl flex flex-col gap-3 border border-white/10 hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-2">
              <FaRobot className="text-pink-300 text-3xl" />
              <h3 className="text-2xl font-bold text-indigo-100">AI & Automation in SRE</h3>
            </div>
            <ul className="list-disc list-inside text-indigo-100 space-y-2 text-lg">
              <li><strong>Purpose:</strong> AI tools for anomaly detection, predictive scaling, and auto-remediation.</li>
              <li><strong>Scope:</strong> Reduces manual toil by 30-50% in complex hybrid clouds.</li>
              <li><strong>Approach:</strong> Proactive; enables faster incident response.</li>
              <li><strong>Example:</strong> Platforms like Catchpoint using AI for security-first principles.</li>
              <li><strong>Strengths:</strong> Frees engineers for innovation.</li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-br from-indigo-900/80 to-blue-800/80 rounded-2xl p-8 shadow-xl flex flex-col gap-3 border border-white/10 hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-2">
              <FaUserCheck className="text-yellow-200 text-3xl" />
              <h3 className="text-2xl font-bold text-indigo-100">User Experience as a Core Metric</h3>
            </div>
            <ul className="list-disc list-inside text-indigo-100 space-y-2 text-lg">
              <li><strong>Purpose:</strong> Treats degraded performance as an outage.</li>
              <li><strong>Scope:</strong> Prioritizes UX metrics like Apdex scores over traditional uptime.</li>
              <li><strong>Approach:</strong> Monitors end-user journeys with observability stacks.</li>
              <li><strong>Example:</strong> Using Prometheus + Grafana for real-time views.</li>
              <li><strong>Strengths:</strong> Reliability equals customer satisfaction in 2025.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="bg-gradient-to-br from-indigo-800/90 to-blue-900/80 p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto text-justify mb-16 border border-white/10 animate-fade-in delay-400">
        <h2 className="text-4xl font-extrabold text-yellow-200 mb-10 text-center tracking-tight">What You&apos;ll Learn on Devops4Noobs</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3"><FaUsers className="text-indigo-200 text-2xl" /><span className="font-bold text-yellow-300 text-lg">Closer Dev-SRE Integration:</span></div>
            <div className="flex items-center gap-3"><FaBolt className="text-pink-300 text-2xl" /><span className="font-bold text-yellow-300 text-lg">Rise of Operational Toil Reduction:</span></div>
            <div className="flex items-center gap-3"><FaLightbulb className="text-yellow-200 text-2xl" /><span className="font-bold text-yellow-300 text-lg">Bite-Sized Modules & Tools:</span></div>
            <div className="flex items-center gap-3"><FaTools className="text-indigo-200 text-2xl" /><span className="font-bold text-yellow-300 text-lg">Practical Tools:</span></div>
            <div className="flex items-center gap-3"><FaRocket className="text-pink-300 text-2xl" /><span className="font-bold text-yellow-300 text-lg">Advanced Topics:</span></div>
          </div>
          <ul className="list-disc list-inside text-indigo-100 space-y-4 text-lg">
            <li>SRE teams embedding with developers for chaos engineering, load testing, and platform engineering in multi-cloud environments. Reduces silos, accelerates releases, and supports proactive optimization—essential for scaling teams.</li>
            <li>Automation of repetitive tasks via scripts and AI, with a focus on simplicity and release engineering. Frees up 20-40% of engineering time, per Gartner insights on SRE skills demand.</li>
            <li>Our platform is designed for noobs and pros alike, with interactive tools, quizzes, and community support. Dive into SRE basics, SLOs, observability, and more.</li>
            <li>Use SLO calculators, incident simulators, and postmortems.</li>
            <li>Tackle chaos engineering and scaling SRE in teams. Join thousands of learners building reliable futures.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action / Testimonial */}
      <section className="w-full max-w-3xl mx-auto text-center py-12 px-6 mb-12 bg-gradient-to-r from-yellow-400/20 via-pink-400/10 to-indigo-400/20 rounded-3xl shadow-2xl border border-white/10 animate-fade-in delay-500">
        <blockquote className="italic text-indigo-200 text-2xl mb-6 font-light">“Devops4Noobs made SRE approachable and fun. The hands-on labs and community support are top-notch!”</blockquote>
        <span className="block text-indigo-400 font-semibold mb-6">— SRE Learner, 2025</span>
        <a
          href="#get-started"
          className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-400 hover:from-yellow-300 hover:to-indigo-500 text-indigo-900 font-extrabold px-12 py-5 rounded-full shadow-2xl transition duration-200 text-2xl animate-bounce"
        >
          Join the Community
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-indigo-200 text-sm opacity-70">
        &copy; {new Date().getFullYear()} Devops4Noobs. Crafted with passion for SRE learners.
      </footer>
    </div>
  );
}