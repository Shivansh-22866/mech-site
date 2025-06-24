"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            About <span className="text-blue-600">XYZ Pumps</span>
          </h2>

          <div className="space-y-8 text-lg text-slate-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl"
            >
              For over three decades, XYZ Pumps has been at the forefront of industrial pump manufacturing, delivering
              cutting-edge solutions that power industries worldwide. Our commitment to innovation, quality, and
              reliability has established us as a trusted partner for businesses across diverse sectors including oil &
              gas, water treatment, chemical processing, and manufacturing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl"
            >
              Our state-of-the-art manufacturing facilities combine traditional craftsmanship with modern technology to
              produce pumps that exceed industry standards. From our flagship PPS series to our innovative PPMF models,
              every product undergoes rigorous testing to ensure optimal performance, durability, and efficiency. We
              don't just manufacture pumps; we engineer solutions that drive your success.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
