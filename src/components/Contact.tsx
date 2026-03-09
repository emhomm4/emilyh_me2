import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/meonphone.png"
              alt="Emily on the phone"
              width={380}
              height={380}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Feel free to reach out. I&apos;d love to connect!
            </p>
            <div className="flex flex-row gap-4">
              <a
                href="mailto:emhomm4@gmail.com"
                className="px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition font-medium text-sm"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/emily-hommerding"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white dark:bg-gray-800 text-emerald-700 dark:text-emerald-400 border-2 border-emerald-700 dark:border-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-700 transition font-medium text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
