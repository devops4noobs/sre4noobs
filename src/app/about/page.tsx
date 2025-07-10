
export default function ContactPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Have questions about SRE, feedback on the platform, or want to contribute? Reach out!
      </p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Email</h2>
        <p>
          Send us an email at:{" "}
          <a href="mailto:contact@devops4noobs.com" className="text-blue-600 hover:underline">
            contact@devops4noobs.com
          </a>
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">Support the Project</h2>
        <p className="mb-4">
          If you find this platform helpful, consider buying us a coffee to support ongoing development!
        </p>
        <a
          href="https://coff.ee/devops4noobs" // Replace with your actual link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Buy Me a Coffee
        </a>
      </section>
    </main>
  );
}