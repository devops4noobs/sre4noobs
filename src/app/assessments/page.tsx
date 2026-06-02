export default function AssessmentsIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex items-center justify-center py-12">
      <main className="w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto p-6">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-6 mb-6 shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Assessments</h1>
          <p className="text-indigo-100">Practical exercises to build your SRE skills.</p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <a href="/assessments/labs" className="block bg-gray-800/80 rounded-2xl p-6 text-left hover:bg-indigo-900/80 transition">
            <h2 className="text-xl font-semibold text-yellow-300">Labs</h2>
            <p className="text-indigo-100 mt-2">Hands-on exercises: SLO design, incident checklists, postmortems.</p>
          </a>

          <a href="/observability" className="block bg-gray-800/80 rounded-2xl p-6 text-left hover:bg-indigo-900/80 transition">
            <h2 className="text-xl font-semibold text-yellow-300">Observability</h2>
            <p className="text-indigo-100 mt-2">Instrument services with metrics, traces and logs.</p>
          </a>
        </section>

      </main>
    </div>
  );
}
