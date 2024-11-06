'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'

function CatLoaf() {
  const { scene } = useGLTF('/cat_loaf.glb')
  const modelRef = useRef<THREE.Group>(null)
  const [time, setTime] = useState(0)
  const initialRotation = { x: 0, y: 0, z: 0 }

  useFrame((state) => {
    if (!modelRef.current) return

    // Increment time counter
    setTime((prev) => (prev + 1) % 360) // 360 frames = 6 seconds (assuming 60fps)

    // First 3 seconds: SUPER chaotic rotation
    if (time < 180) {
      modelRef.current.rotation.x += Math.sin(time * 0.2) * 0.15
      modelRef.current.rotation.y += Math.cos(time * 0.25) * 0.2
      modelRef.current.rotation.z += Math.sin(time * 0.15) * 0.12
      
      // Add some extra chaos with nested trigonometric functions
      modelRef.current.rotation.x += Math.cos(Math.sin(time * 0.1)) * 0.05
      modelRef.current.rotation.y += Math.sin(Math.cos(time * 0.15)) * 0.08
      modelRef.current.rotation.z += Math.cos(time * 0.2) * Math.sin(time * 0.1) * 0.1
    } 
    // Next 3 seconds: Reset position and calm rotation
    else {
      // Stronger lerp factor (0.1 -> 0.15) for faster reset
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        initialRotation.x,
        0.15
      )
      // Calmer Y rotation
      modelRef.current.rotation.y += 0.02
      modelRef.current.rotation.z = THREE.MathUtils.lerp(
        modelRef.current.rotation.z,
        initialRotation.z,
        0.15
      )
    }
  })

  return <primitive ref={modelRef} object={scene} scale={0.5} />
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          {/* Left column with text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl font-bold mb-4">Rizki Ramadhan</h1>
            <p className="text-xl mb-4">Undergraduate Informatics Student</p>
            <div className="mb-6">
              <p className="mb-2">
                <span className="font-semibold">Phone:</span> +6287872483110
              </p>
              <p className="mb-2">
                <span className="font-semibold">Location:</span> Bandung, West Java
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:rizkirmdhn1215@gmail.com" className="text-blue-600 hover:underline">
                  rizkirmdhn1215@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{' '}
                <a 
                  href="https://linkedin.com/in/rizki-ramadhan-dev/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  Rizki Ramadhan
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Objective</h2>
              <p className="max-w-md">
                As an Undergraduate Informatics Student, I am passionate about Project Development and Data Analysis. 
                I aim to leverage my skills and knowledge to contribute to innovative projects and gain valuable 
                experience in the field of computer science.
              </p>
            </div>
          </motion.div>
          
          {/* Right column */}
          <motion.div
            className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center md:items-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-16">
              <Image
                src="/images/images.jpeg"
                alt="Rizki Ramadhan"
                width={320}
                height={320}
                className="rounded-full shadow-lg object-cover"
              />
            </div>

            {/* 3D Model Canvas */}
            <div className="w-full h-[300px] -mt-4 flex justify-end">
              <div className="w-[280px] h-full translate-x-12 translate-y-12">
                <Canvas
                  camera={{
                    position: [15, 15, 15],
                    fov: 45,
                    near: 0.1,
                    far: 1000
                  }}
                  style={{ 
                    background: 'transparent'
                  }}
                  gl={{ alpha: true }}
                >
                  {/* Increased light intensities */}
                  <ambientLight intensity={2} />
                  <directionalLight
                    position={[5, 5, 5]}
                    intensity={3}
                    castShadow
                  />
                  <directionalLight
                    position={[-5, -5, -5]}
                    intensity={1.5}
                  />
                  {/* Add a spotlight for extra brightness */}
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.5}
                    intensity={1}
                    castShadow
                  />
                  <Suspense fallback={null}>
                    <CatLoaf />
                  </Suspense>
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                  />
                </Canvas>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

useGLTF.preload('/cat_loaf.glb')