'use client'

import { useState, useEffect } from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import HeroSection from './HeroSection'
import SkillSection from './SkillSection'
import ExperienceSection from './ExperienceSection'
import ProjectSection from './ProjectSection'
import EducationSection from './EducationSection'
import SectionWrapper from './SectionWrapper'
import PixelatedChicken from './PixelatedChicken'

const sections = ['hero', 'skills', 'experience', 'projects', 'education']

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-4xl font-bold text-blue-500">
          Loading
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
        {sections.map((section) => (
          <Element
            key={section}
            name={section}
          >
            <SectionWrapper>
              {section === 'hero' && <HeroSection />}
              {section === 'skills' && <SkillSection />}
              {section === 'experience' && <ExperienceSection />}
              {section === 'projects' && <ProjectSection />}
              {section === 'education' && <EducationSection />}
            </SectionWrapper>
          </Element>
        ))}
      </main>

      <PixelatedChicken />
    </div>
  )
}