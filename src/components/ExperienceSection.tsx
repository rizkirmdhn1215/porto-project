'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ExperienceSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Scrum Master (Absence App Project)",
      company: "Padepokan Tujuh Sembilan",
      location: "Bandung, West Java",
      date: "Oct 2024 - Present",
      icon: "👨‍💻",
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
      icon: "💻",
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
      icon: "🚀",
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
      icon: "⌨️",
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
      icon: "🖥️",
      responsibilities: [
        "Managed data input, processing, and system monitoring to ensure smooth operations at Digitalent.",
        "Troubleshot computer systems and networks to identify and resolve issues promptly.",
        "Operated and maintained various software applications and hardware within the organization."
      ]
    }
  ]

  return (
    <div className="py-16 px-4 no-blur" ref={sectionRef}>
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>

      {/* Container with fixed height and scrolling */}
      <div className="max-w-4xl mx-auto h-[70vh] relative bg-gradient-to-b from-white to-transparent">
        <div className="absolute inset-0 overflow-y-auto custom-scrollbar pr-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="relative mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline line */}
              <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-orange-200" />
              
              {/* Timeline dot */}
              <div className="absolute left-[20px] top-[30px] w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm z-10" />

              <div className="ml-16 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform-gpu">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{exp.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  </div>
                  <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    {exp.date}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className="text-gray-600 font-medium">{exp.company}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-500">{exp.location}</span>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-orange-500 mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}