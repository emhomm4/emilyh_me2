interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
  },
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "Django", "REST APIs", "GraphQL"]
  },
  {
    category: "Database & Tools",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "CI/CD", "Kubernetes", "Terraform"]
  },
  {
    category: "Soft Skills",
    skills: ["Team Leadership", "Problem Solving", "Communication", "Agile/Scrum", "Mentoring"]
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
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
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
