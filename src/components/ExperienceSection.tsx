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
      icon: "🚀",
      responsibilities: [
        "Developed comprehensive web applications using Spring Boot, React, Laravel, and Next.js.",
        "Proficient in building RESTful APIs, creating user-friendly interfaces, and utilizing Laravel's MVC architecture.",
        "Continuously exploring new tools and techniques to optimize performance and user experience."
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

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="relative mb-12 last:mb-0"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-[27px] top-[60px] bottom-[-30px] w-[2px] bg-gradient-to-b from-orange-500 to-transparent" />
            )}

            <div className="flex items-start gap-6 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform-gpu">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                {exp.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}