'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function GlitchEffect() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -300])
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 150) // Duration of glitch effect
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-white opacity-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0],
          x: [-20, 20, -10, 10, 0],
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="absolute inset-0 bg-red-500 opacity-10"
        style={{ y: y1 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0],
          x: [20, -20, 10, -10, 0],
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="absolute inset-0 bg-blue-500 opacity-10"
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0],
          x: [-20, 20, -10, 10, 0],
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  )
} 