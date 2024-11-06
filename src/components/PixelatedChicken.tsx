'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PixelatedChicken() {
  const [direction, setDirection] = useState(1)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const moveChicken = () => {
      setPosition((prev) => {
        const windowWidth = window.innerWidth
        const newPosition = prev + (2 * direction)
        
        if (newPosition > windowWidth - 40) {
          setDirection(-1)
          return windowWidth - 40
        } else if (newPosition < 0) {
          setDirection(1)
          return 0
        }
        return newPosition
      })
    }

    const interval = setInterval(moveChicken, 30)
    return () => clearInterval(interval)
  }, [direction])

  return (
    <motion.div
      className="fixed bottom-8 z-50 pointer-events-none"
      style={{ 
        x: position,
        scaleX: direction,
      }}
    >
      <div className="pixel-chicken" />
    </motion.div>
  )
} 