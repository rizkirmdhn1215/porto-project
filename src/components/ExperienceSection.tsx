import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Scrum Master (Absence App Project)",
    company: "Padepokan Tujuh Sembilan",
    location: "Bandung, West Java",
    date: "Oct 2024 - Present",
    responsibilities: [
      "Led a cross-functional team of 6 developers in building an absence management app using Spring Boot (back-end) and Next.js (front-end).",
      "Facilitated all Agile ceremonies (daily stand-ups, sprint planning, reviews, retrospectives) and ensured smooth sprint cycles.",
      "Acted as a key liaison between stakeholders and the development team, prioritizing tasks and removing blockers to ensure project delivery on time and within scope."
    ]
  },
  {
    title: "Full-stack Developer (Internship)",
    company: "Padepokan Tujuh Sembilan",
    location: "Bandung, West Java",
    date: "Aug 2024 - Oct 2024",
    responsibilities: [
      "Developed comprehensive web applications using Spring Boot, React, Laravel, and Next.js.",
      "Proficient in building RESTful APIs, creating user-friendly interfaces, and utilizing Laravel's MVC architecture.",
      "Continuously exploring new tools and techniques to optimize performance and user experience."
    ]
  },
  {
    title: "Full-stack Developer (Apprenticeship)",
    company: "Arutala Lab",
    location: "Bandung, West Java",
    date: "Jul 2024",
    responsibilities: [
      "Developed web applications using Laravel framework with a focus on MVC architecture and RESTful API development.",
      "Utilized CSS and Bootstrap to create responsive user interfaces for enhanced user experience.",
      "Managed databases efficiently to ensure seamless integration and functionality."
    ]
  },
  {
    title: "Programmer (Apprenticeship)",
    company: "Arutala Lab",
    location: "Payakumbuh, West Sumatra",
    date: "Mar 2024",
    responsibilities: [
      "Developed a solid foundation in programming principles, focusing on logical problem-solving and pseudocode.",
      "Applied programming concepts in Java to write, debug, and optimize simple programs.",
      "Designed algorithms, translated them into pseudocode, and implemented them in Java to create efficient applications."
    ]
  },
  {
    title: "Intermediate Computer Operator (Apprenticeship)",
    company: "Digitalent",
    location: "Lima Puluh Kota Regency, West Sumatra",
    date: "Jun 2023 - Jul 2023",
    responsibilities: [
      "Managed data input, processing, and system monitoring to ensure smooth operations at Digitalent.",
      "Troubleshot computer systems and networks to identify and resolve issues promptly.",
      "Operated and maintained various software applications and hardware within the organization."
    ]
  }
]

export default function ExperienceSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} - {exp.location}</p>
            <p className="text-gray-500 mb-2">{exp.date}</p>
            <ul className="list-disc list-inside">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-700">{resp}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}