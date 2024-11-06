'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ZoomTransition() {
  const { scrollYProgress } = useScroll()
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionIndex = Array.from(sections).indexOf(entry.target as HTMLElement)
          setCurrentSection(sectionIndex)
        }
      })
    }, { threshold: 0.5 })

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return null
} 