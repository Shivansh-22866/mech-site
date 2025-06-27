"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Headphones, Truck, Shield, Zap, Users } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Custom Engineering",
    description: "Tailored pump solutions designed to meet your specific requirements and operating conditions.",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    description: "Round-the-clock technical assistance from our team of experienced engineers and specialists.",
  },
  {
    icon: Truck,
    title: "Installation & Commissioning",
    description: "Professional installation services ensuring optimal performance from day one.",
  },
  {
    icon: Shield,
    title: "Maintenance Services",
    description: "Comprehensive maintenance programs to maximize uptime and extend equipment life.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "System analysis and optimization services to improve efficiency and reduce operating costs.",
  },
  {
    icon: Users,
    title: "Training Programs",
    description: "Comprehensive training for your operators and maintenance personnel.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Else We <span className="text-blue-600">Provide</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beyond manufacturing exceptional pumps, we offer comprehensive services to ensure your operations run
            smoothly and efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts today to discuss your pump requirements and discover how we can help optimize your
              operations.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors duration-300 shadow-lg">
              Get a Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
