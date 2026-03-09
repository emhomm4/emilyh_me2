import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/portrait.png"
              alt="Emily Hommerding"
              width={200}
              height={200}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My career has taken a few interesting turns, moving from experimental physics researcher to software engineer to data scientist, and I wouldn&apos;t have it any other way. Each chapter has sharpened how I think, and today I bring that breadth to my work as a Senior Data Scientist at Microsoft, where I turn complex data into decisions that actually move the needle.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m genuinely passionate about data, not just the tools and pipelines, but the stories data tells and the problems it can solve. I love digging into a tough question until I find an answer that holds up, and I care deeply about making sure insights reach the people who need them in a way they can use.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Collaboration is at the core of how I work. I thrive in cross-functional environments and believe the best solutions come from bringing diverse perspectives to the table. I&apos;m also committed to advancing marginalized groups in the workplace: I co-lead a women&apos;s group, have run allyship programs, and mentor through first-generation and low-income employee initiatives, because I believe a more equitable industry is a better one for everyone.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Outside of work, you&apos;ll find me at the gym lifting heavy things, cheering on my hockey team, or stress-testing a new baking recipe. I share my life with a wonderful boyfriend and one very opinionated cat who supervises everything I do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

