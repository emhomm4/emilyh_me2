interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Current",
    skills: ["Power BI", "Analytics", "Claude Code", "Kusto (KQL)", "SQL", "DAX", "PowerQuery", "Azure", "PySpark", "Azure Data Factory", "Synapse"]
  },
  {
    category: "Past",
    skills: ["C#", "Python", "Java", "Android Development", "Unity", "C++", "C", "OpenCV", "TypeScript"]
  },
  {
    category: "Leadership & Collaboration",
    skills: ["Mentoring", "Cross-Team Collaboration", "Intern Coaching", "Women in Tech Advocacy", "Volunteer Instruction", "Program Design"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
