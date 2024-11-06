'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function LoadingBar() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Show loading bar on route change
    setIsLoading(true)
    
    // Hide loading bar after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="h-1 bg-gradient-to-r from-orange-500 to-orange-600"
        initial={{ width: "0%", opacity: 1 }}
        animate={{ 
          width: "100%",
          transition: { 
            duration: 2,
            ease: [0.4, 0.08, 0.23, 0.96]
          }
        }}
        exit={{ opacity: 0 }}
        onAnimationComplete={() => setIsLoading(false)}
      />
      {/* Shimmer effect */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
} 