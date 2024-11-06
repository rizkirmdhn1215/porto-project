'use client'

import { useState, useEffect } from 'react'
import { Element, Link as ScrollLink } from 'react-scroll'
import HeroSection from './HeroSection'
import SkillSection from './SkillSection'
import ExperienceSection from './ExperienceSection'
import ProjectSection from './ProjectSection'
import EducationSection from './EducationSection'

const sections = ['hero', 'skills', 'experience', 'projects', 'education']

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-4xl font-bold text-blue-500 animate-pulse">
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
        <ul className="flex justify-center space-x-4">
          {sections.map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                className={`px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
                  activeSection === section
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                activeClass="active"
                onSetActive={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="container mx-auto px-4 pb-16">
        <Element name="hero" className="min-h-screen py-16">
          <HeroSection />
        </Element>
        <Element name="skills" className="min-h-screen py-16">
          <SkillSection />
        </Element>
        <Element name="experience" className="min-h-screen py-16">
          <ExperienceSection />
        </Element>
        <Element name="projects" className="min-h-screen py-16">
          <ProjectSection />
        </Element>
        <Element name="education" className="min-h-screen py-16">
          <EducationSection />
        </Element>
      </main>
    </div>
  )
}