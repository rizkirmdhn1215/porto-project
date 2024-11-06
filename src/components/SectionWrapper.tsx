import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity
      }}
      className="min-h-screen py-16"
    >
      {children}
    </motion.div>
  )
} 