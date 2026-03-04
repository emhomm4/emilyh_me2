export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-stone-100 to-emerald-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="text-emerald-700 dark:text-emerald-400">Emily Hommerding</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Senior Data Scientist
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Greater Seattle Area
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Accomplished data scientist focused on data and analytics, with strong critical-thinking
            skills and a determination to get to the bottom of tough problems. Passionate about facilitating
            collaboration across teams and stakeholders, while bringing a unique background to the table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition font-medium"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="px-8 py-3 bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 border-2 border-emerald-700 dark:border-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-700 transition font-medium"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
