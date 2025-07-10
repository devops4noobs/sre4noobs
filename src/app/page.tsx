export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-indigo-400 mb-8 text-center">
        Welcome to Devops4Noobs: Your Gateway to Mastering Site Reliability Engineering
      </h1>

        {/* Home Page Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto text-justify">
          <p className="mb-4 text-justify">
            In a world where downtime costs millions and user expectations are sky-high, Site Reliability Engineering (SRE) is the secret weapon for tech leaders. Whether you&apos;re a beginner or leveling up, Devops4Noobs equips you with practical knowledge, tools, and hands-on labs to engineer unbreakable systems. As cloud-native architectures dominate and AI-driven operations emerge, SRE isn&apos;t just about keeping the lights on—it&apos;s about proactive resilience, automation, and aligning reliability with business goals. Originally pioneered by Google, SRE blends software engineering with operations to achieve 99.99% uptime (or better) while minimizing toil. In today&apos;s fast-paced digital landscape, companies like Netflix and AWS rely on SRE principles to handle massive scale without breaking a sweat.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-300 mb-4 ">Why SRE Matters in 2025:</h3>
          <p >Key stats: Downtime costs enterprises an average of $100,000 per hour, but SRE practices can reduce incidents by up to 50% through error budgets and blameless postmortems. Drawing from the latest industry insights, here&apos;s what SRE professionals are focusing on this year. These trends highlight the evolution from reactive ops to AI-augmented, user-centric reliability.</p>
          <br></br>

          <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Emerging SRE Trends Shaping 2025</h3>
          <ul className="list-disc list-inside space-y-1">
            <h3 className="text-l font-semibold text-indigo-400">AI and Automation in SRE</h3>
            <li><strong>Purpose:</strong> AI tools for anomaly detection, predictive scaling, and auto-remediation.</li>
            <li><strong>Scope:</strong> Reduces manual toil by 30-50% in complex hybrid clouds.</li>
            <li><strong>Approach:</strong> Proactive; enables faster incident response.</li>
            <li><strong>Example:</strong> Platforms like Catchpoint using AI for security-first principles.</li>
            <li><strong>Strengths:</strong> Frees engineers for innovation.</li>
            <h3 className="text-l font-semibold text-indigo-400">User Experience as a Core Metric</h3>
            <li><strong>Purpose:</strong> Treats degraded performance as an outage.</li>
            <li><strong>Scope:</strong> Prioritizes UX metrics like Apdex scores over traditional uptime.</li>
            <li><strong>Approach:</strong> Monitors end-user journeys with observability stacks.</li>
            <li><strong>Example:</strong> Using Prometheus + Grafana for real-time views.</li>
            <li><strong>Strengths:</strong> Reliability equals customer satisfaction in 2025.</li>
          </ul>
          <br></br>
          <ul className="list-none space-y-2 mb-4">
            <li><strong>Closer Dev-SRE Integration:</strong> SRE teams embedding with developers for chaos engineering, load testing, and platform engineering in multi-cloud environments. Reduces silos, accelerates releases, and supports proactive optimization—essential for scaling teams.</li>
            <li><strong>Rise of Operational Toil Reduction:</strong> Automation of repetitive tasks via scripts and AI, with a focus on simplicity and release engineering. Frees up 20-40% of engineering time, per Gartner insights on SRE skills demand.</li>
            <li><strong>What You&apos;ll Learn on Devops4Noobs:</strong> Our platform is designed for noobs and pros alike, with bite-sized modules, interactive tools, and community support. Dive into fundamentals like SRE basics, SLOs, and observability.</li>
            <li><strong>Pillars:</strong> Explore embracing risk, automation, and simplicity.</li>
            <li><strong>Practical Tools:</strong> Use SLO calculators, incident simulators, and postmortems.</li>
            <li><strong>Advanced Topics:</strong> Tackle chaos engineering and scaling SRE in teams. Join thousands of learners building reliable futures.</li>
          </ul>
          <br></br>
          <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Why SRE Matters</h3>
          <p>
            These trends are substantiated by reports from Catchpoint, Gartner, and industry analyses, ensuring your learning here is cutting-edge and practical. Ready to reduce downtime and boost your career? Start with our assessments to test your skills with quizzes and labs.
          </p>
        </section>
      </div>
  );
}