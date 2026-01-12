interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Position Title",
    company: "Company Name",
    period: "2022 - Present",
    description: [
      "Led cross-functional teams to deliver high-impact projects",
      "Improved system performance by 40% through optimization initiatives",
      "Mentored junior team members and established best practices",
      "Collaborated with stakeholders to define product roadmap"
    ]
  },
  {
    title: "Mid-Level Position Title",
    company: "Previous Company",
    period: "2019 - 2022",
    description: [
      "Developed and maintained key features for core products",
      "Reduced technical debt by refactoring legacy codebase",
      "Participated in agile ceremonies and sprint planning",
      "Contributed to architecture decisions and design reviews"
    ]
  },
  {
    title: "Junior Position Title",
    company: "First Company",
    period: "2017 - 2019",
    description: [
      "Implemented new features according to specifications",
      "Fixed bugs and improved code quality",
      "Learned best practices and development methodologies",
      "Collaborated with team members on various projects"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
