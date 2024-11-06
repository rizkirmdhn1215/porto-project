'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function SkillSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView])

  const technicalSkills = [
    { name: 'Laravel', level: 85, icon: '🔧', description: 'PHP Framework for web artisans' },
    { name: 'JavaScript', level: 90, icon: '⚡', description: 'Modern ES6+ and frameworks' },
    { name: 'Database', level: 80, icon: '💾', description: 'SQL and NoSQL databases' },
    { name: 'Spring Framework', level: 75, icon: '🍃', description: 'Java-based enterprise framework' },
    { name: 'React.js', level: 85, icon: '⚛️', description: 'Frontend library for modern UIs' },
    { name: 'Next.js', level: 80, icon: '▲', description: 'React framework for production' }
  ]

  const softSkills = [
    { name: 'Analytics', level: 90, icon: '📊', description: 'Data-driven decision making' },
    { name: 'Problem Solving', level: 85, icon: '🧩', description: 'Creative solution finding' },
    { name: 'Critical Thinking', level: 88, icon: '🤔', description: 'Analytical approach to challenges' },
    { name: 'Decision Making', level: 85, icon: '⚖️', description: 'Balanced and informed choices' }
  ]

  const SkillCard = ({ skill, type }: { skill: any, type: 'technical' | 'soft' }) => (
    <div className="relative no-blur">
      <div 
        className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 transform-gpu"
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800">{skill.name}</h4>
            <div className="mt-2 bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out
                  ${type === 'technical' ? 'bg-orange-500' : 'bg-blue-500'}
                  ${hasAnimated ? 'animate-progress' : 'w-0'}`}
                style={{
                  width: hasAnimated ? `${skill.level}%` : '0%'
                }}
              />
            </div>
          </div>
        </div>

        <div 
          className={`
            absolute left-0 right-0 -top-14 mx-auto w-max max-w-[200px] 
            bg-gray-800 text-white p-2 rounded-md text-sm
            transition-opacity duration-200
            ${hoveredSkill === skill.name ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div className="relative">
            {skill.description}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-800" />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="py-12 px-4 no-blur" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 transform-gpu">
        Skills & Expertise
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto transform-gpu">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0 }}
          className="relative no-blur"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
            <span className="text-2xl mr-2">💻</span> Technical Skills
          </h3>
          <div className="grid gap-6">
            {technicalSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} type="technical" />
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0 }}
          className="relative no-blur"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
            <span className="text-2xl mr-2">🎯</span> Soft Skills
          </h3>
          <div className="grid gap-6">
            {softSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} type="soft" />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}