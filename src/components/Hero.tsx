"use client"

import { motion, useMotionValue, useAnimation } from "framer-motion"
import { useRef } from "react"
import { Eye, Brain, Users, Building, MessageCircle } from "lucide-react"

const gearSections = [
  { icon: Eye, title: "Vision", description: "Leading innovation in pump technology" },
  { icon: Brain, title: "Knowledge", description: "Decades of engineering expertise" },
  { icon: Users, title: "Co-operation", description: "Collaborative partnerships worldwide" },
  { icon: Building, title: "Infrastructure", description: "State-of-the-art manufacturing facilities" },
  { icon: MessageCircle, title: "Communication", description: "Clear, responsive customer service" },
]

export default function Hero() {
  const rotation = useMotionValue(0)
  const controls = useAnimation()
  const dragSensitivity = 0.5

  // When drag ends, animate rotation back to 0 smoothly over 3 seconds
  function handleDragEnd() {
    controls.start({ rotate: 0, transition: { duration: 3, ease: "easeOut" } })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            PATIL <span className="text-blue-400">PUMPS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
          >
            Engineering Excellence in Industrial Pump Solutions
          </motion.p>
        </div>

        {/* Gear + Sections */}
        <div className="flex justify-center items-center">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDrag={(e, info) => {
              rotation.set(rotation.get() + info.delta.x * dragSensitivity)
            }}
            onDragEnd={handleDragEnd}
            className="relative w-96 h-96 md:w-[500px] md:h-[500px] cursor-grab active:cursor-grabbing"
          >
            {/* Rotating Gear Teeth + Center */}
            <motion.div
              style={{ rotate: rotation }}
              animate={controls}
              className="absolute inset-0"
            >
              {/* Central Gear */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 shadow-2xl border-4 border-slate-500">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 shadow-inner">
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-slate-600 shadow-lg"></div>
                  </div>
                </div>
              </div>

              {/* Gear Teeth */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-12 bg-slate-600 origin-bottom"
                  style={{
                    left: "50%",
                    bottom: "50%",
                    transform: `translateX(-50%) rotate(${i * 18}deg) translateY(-200px)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Fixed 5 Sections (NOT rotated) */}
            {gearSections.map((section, index) => {
              const angle = index * 72 - 90 // distribute evenly starting top
              const radius = 280
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="absolute w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-xl flex flex-col items-center justify-center text-white border-4 border-blue-400 hover:scale-110 transition-transform duration-300 cursor-pointer group"
                  style={{
                    left: "50%",
                    top: "50%",
                    translateX: `calc(-50% + ${0.45 * x}px)`,
                    translateY: `calc(-50% + ${0.45 * y}px)`,
                  }}
                >
                  <section.icon className="w-8 h-8 md:w-10 md:h-10 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-center">{section.title}</span>

                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore Our Solutions
          </button>
        </motion.div>
      </div>
    </section>
  )
}
