'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function ProjectSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const projects = [
    {
      name: "Android Application",
      description: "Developed an Android application using Kotlin that integrates Firebase Firestore for data storage and retrieval. The app features a clean and intuitive user interface.",
      technologies: ["Kotlin", "Firebase", "Android SDK"],
      image: "/images/project1.jpg", // Add your project images
      link: "#",
      github: "#"
    },
    // Add more projects...
  ]

  return (
    <div className="py-16 px-4 no-blur" ref={sectionRef}>
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onHoverStart={() => setHoveredProject(project.name)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white transform-gpu transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-sm bg-orange-50 text-orange-600 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                  <a 
                    href={project.github}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}