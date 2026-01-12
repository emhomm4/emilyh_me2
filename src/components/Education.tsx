interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const education: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University Name",
    period: "2015 - 2017",
    description: "Specialized in software engineering and machine learning. Graduated with honors."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "College Name",
    period: "2011 - 2015",
    description: "Strong foundation in computer science fundamentals, algorithms, and data structures."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
