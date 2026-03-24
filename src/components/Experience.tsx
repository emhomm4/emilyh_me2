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
    company: "Microsoft, Redmond, WA",
    period: "December 2023 – Present",
    roles: [
      { title: "Senior Data Scientist", period: "December 2025 – Present" },
      { title: "Senior Software Engineer", period: "December 2023 – December 2025" }
    ],
    description: [
      "Delivered product insights using time series forecasting (including seasonality decomposition and anomaly detection), cohort/retention and funnel analysis, k-means clustering for user segmentation, and churn modeling, driving +4M monthly active users and +15pp growth in paid conversion.",
      "Partnered with customer advisory teams to identify and prioritize growth opportunities, resulting in 100K new paid license activations.",
      "Applied AI-assisted development tools (Claude Code, Power BI MCP Server) to streamline analytics workflows and reduce time-to-insight.",
      "Led development of AI-first analytics solutions, including an internal data assistant (Power Apps, Microsoft Copilot Studio), AI-driven dashboarding, and automated planning workflows to scale self-service insights.",
      "Authored and maintained 5+ high-impact Power BI dashboards, enabling executive decision-making and improving visibility into key product and business metrics.",
      "Designed, built, and maintained 20+ production data pipelines using Scope, Azure Synapse, PySpark, and Azure Data Factory (ADF).",
      "Eliminated 4B+ unnecessary telemetry records per day, reducing data processing costs and improving pipeline efficiency.",
      "Served as Data Champion for an 800+ person organization, defining analytics strategy, leading office hours, and promoting data governance and best practices.",
      "Led initiatives to advance inclusion and mentorship: launched a 35-person allyship program achieving 60%+ knowledge gains, built and led a 200+ member women\u2019s professional development group, and mentored 6 first-generation college student interns over 4 years."
    ]
  },
  {
    title: "Software Engineer II / Software Engineer I",
    company: "Microsoft, Redmond, WA",
    period: "July 2017 – December 2023",
    description: [
      "Contributed to data analytics and engineering initiatives supporting large-scale data pipeline infrastructure, including implementing GDPR-compliant data handling and privacy safeguards for 100+ pipelines.",
      "Developed new functions in the Power Apps formula language (C#, TypeScript) and enhanced web functionality for Power Apps; served on a 24/7 on-call rotation to support production web services.",
      "Partnered with Red Cross developers to rapidly build Power Apps solutions during the COVID-19 pandemic, accelerating service delivery.",
      "Built a visual, interactive server health monitoring tool for Dynamics 365 telemetry using Unity, improving Azure services performance and CI/CD pipeline efficiency."
    ]
  },
  {
    title: "Laboratory Physicist",
    company: "Research International, Monroe, WA",
    period: "July 2016 – July 2017",
    description: [
      "Sole developer of a patented Android application (Java, Android Studio) for a chemical/biological detection device, which shipped to international production in 2017 and is still in use today.",
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
