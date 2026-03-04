interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  roles?: { title: string; period: string }[];
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Data Scientist / Senior Software Engineer",
    company: "Microsoft — Redmond, WA",
    period: "December 2023 – Present",
    roles: [
      { title: "Senior Data Scientist", period: "December 2025 – Present" },
      { title: "Senior Software Engineer", period: "December 2023 – December 2025" }
    ],
    description: [
      "Drove product insights via high impact dashboards and on-demand analytics, increasing monthly active usage by 3.5M+, boosting paid compliance by 15pp, and influencing 100k+ paid license activations.",
      "Leveraged AI tools including Claude Code and the Power BI MCP server to quickly and accurately build reports and accelerate data workflows.",
      "Built & maintained 20+ data pipelines (Scope, Synapse, PySpark, ADF), cutting COGS by removing 4B+ unnecessary telemetry rows/day.",
      "Authored production-ready BI solutions using Kusto, SQL, DAX, PowerQuery.",
      "Served as Data Champion for the Power Apps org — drove analytics strategy, hosted office hours, and advised teams on data best practices.",
      "Co-led allyship program (35 grads, 60%+ knowledge increase) & 200+ member women\u2019s group supporting career growth and mentorship. Mentored six first-generation college student interns over the course of four years."
    ]
  },
  {
    title: "Software Engineer II / Software Engineer I",
    company: "Microsoft — Redmond, WA",
    period: "July 2017 – December 2023",
    description: [
      "Contributed to data analytics and engineering initiatives supporting large-scale data pipeline infrastructure.",
      "Implemented new functions in the Power Apps formula language (C#, TypeScript) and served on a 24/7 on-call rotation to support production web services.",
      "Partnered with Red Cross developers to rapidly build Power Apps solutions during the COVID-19 pandemic.",
      "Built a visual, interactive server health monitoring tool for Dynamics 365 telemetry using Unity; improved Azure services and CI/CD pipelines."
    ]
  },
  {
    title: "Laboratory Physicist",
    company: "Research International — Monroe, WA",
    period: "July 2016 – July 2017",
    description: [
      "Sole developer of a patented Android application (Java, Android Studio) for a chemical/biological detection device — shipped to international production in 2017 and still in use today.",
      "Applied computer vision (OpenCV) to automate image analysis of chemical test strips, replacing manual interpretation with reliable, repeatable software.",
      "Designed and wrote firmware for a custom CPU microcontroller powering a battery monitoring circuit, implementing analog-to-digital conversion and USB/RS-232 communication protocols."
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
                  {exp.roles ? (
                    exp.roles.map((role, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-center md:gap-4 mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {role.title}
                        </h3>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{role.period}</span>
                      </div>
                    ))
                  ) : (
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                  )}
                  <p className="text-lg text-emerald-700 dark:text-emerald-400">
                    {exp.company}
                  </p>
                </div>
                {!exp.roles && (
                  <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-emerald-700 dark:text-emerald-400 mr-2">•</span>
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
