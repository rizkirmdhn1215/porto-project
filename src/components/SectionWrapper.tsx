import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <motion.div
      ref={ref}
      style={{
        scale
      }}
      className="min-h-screen py-16 transform-gpu"
    >
      {children}
    </motion.div>
  )
} 