interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const education: EducationItem[] = [
  {
    degree: "Master of Science, Physics",
    institution: "University of Oregon — Eugene, OR",
    period: "June 2016",
    description: "NSF Graduate Research Fellow. Research in quantum properties of nitrogen vacancy centers in diamond."
  },
  {
    degree: "Bachelor of Science, Physics — Magna Cum Laude",
    institution: "Illinois Institute of Technology — Chicago, IL",
    period: "May 2013",
    description: "Research in Raman spectroscopy for superconducting RF cavities. Published in Physical Review Special Topics - Accelerators and Beams."
  },
];

const certifications = [
  "Claude Code in Action"
];

const patents = [
  "US Patent US20170300779A1"
];

const publications = [
  "Cao, C., Ford, D., Bishnoi, S., Proslier, T., Albee, B., Hommerding, E., Zasadzinski, J. F. (2013). Detection of surface carbon and hydrocarbons in hot spot regions of niobium superconducting RF cavities by Raman spectroscopy. Physical Review Special Topics - Accelerators and Beams, 16(6)."
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
                  <p className="text-lg text-emerald-700 dark:text-emerald-400">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              {edu.description && (
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              )}
            </div>
          ))}

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h3>
            <ul className="space-y-1">
              {certifications.map((cert, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-400 mr-2">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Patents</h3>
            <ul className="space-y-1">
              {patents.map((patent, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-400 mr-2">•</span>
                  <span>{patent}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Publications</h3>
            <ul className="space-y-3">
              {publications.map((pub, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {pub}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
