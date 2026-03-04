export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get in Touch
        </h2>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row justify-center gap-6 text-center">
          <a
            href="mailto:emhomm4@gmail.com"
            className="px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition font-medium"
          >
            emhomm4@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/emily-hommerding-36390620"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-emerald-700 dark:text-emerald-400 border-2 border-emerald-700 dark:border-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-700 transition font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
