import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/chairlift.png"
          alt="Chairlift"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-slate-900/75 to-emerald-900/75" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Hi, I&apos;m <span className="text-emerald-400">Emily Hommerding</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow">
            Senior Data Scientist
          </p>
          <p className="text-sm text-gray-300 mb-4 drop-shadow">
            Greater Seattle Area
          </p>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto drop-shadow bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
            I&apos;m an accomplished data scientist specializing in analytics and business intelligence, with strong critical-thinking skills and a determination to get to the bottom of tough problems. Passionate about facilitating collaboration across teams and stakeholders, while bringing a unique background to the table.
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
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/60 rounded-lg hover:bg-white/20 transition font-medium"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
