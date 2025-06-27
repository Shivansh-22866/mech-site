"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "PPS Series",
    model: "PPS-2000",
    description: "High-performance centrifugal pumps designed for heavy-duty industrial applications.",
    features: [
      "Flow rate: 500-2000 GPM",
      "Head: 100-300 ft",
      "Temperature: -20°C to 200°C",
      "Stainless steel construction",
    ],
    applications: "Oil & Gas, Chemical Processing, Water Treatment",
    image: "/placeholder.svg?height=400&width=500",
  },
  {
    id: 2,
    name: "PPD Series",
    model: "PPD-1500",
    description: "Precision-engineered positive displacement pumps for accurate flow control.",
    features: [
      "Flow rate: 50-1500 GPM",
      "Pressure: up to 500 PSI",
      "Self-priming capability",
      "Low maintenance design",
    ],
    applications: "Food & Beverage, Pharmaceutical, Chemical Transfer",
    image: "/placeholder.svg?height=400&width=500",
  },
  {
    id: 3,
    name: "PPMF Series",
    model: "PPMF-3000",
    description: "Multi-stage pumps offering exceptional efficiency and reliability.",
    features: ["Flow rate: 100-3000 GPM", "Multi-stage design", "Energy efficient", "Corrosion resistant"],
    applications: "Mining, Power Generation, Industrial Processes",
    image: "/placeholder.svg?height=400&width=500",
  },
  {
    id: 4,
    name: "PPC Series",
    model: "PPC-800",
    description: "Compact pumps designed for space-constrained installations.",
    features: ["Compact footprint", "Flow rate: 50-800 GPM", "Easy installation", "Low noise operation"],
    applications: "HVAC Systems, Building Services, Light Industrial",
    image: "/placeholder.svg?height=400&width=500",
  },
  {
    id: 5,
    name: "PPV Series",
    model: "PPV-1200",
    description: "Variable speed pumps with advanced control systems for optimal efficiency.",
    features: ["Variable frequency drive", "Flow rate: 100-1200 GPM", "Smart controls", "Energy savings up to 40%"],
    applications: "Water Distribution, Irrigation, Process Control",
    image: "/placeholder.svg?height=400&width=500",
  },
]

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-blue-600">Product Range</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our comprehensive range of industrial pumps, each engineered for specific applications and built to
            exceed expectations.
          </p>
        </motion.div>

        <div className="space-y-20">
          {products.map((product, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                {/* Image */}
                <div className="flex-1">
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={500}
                        height={400}
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-xl text-blue-600 font-semibold mb-4">{product.model}</p>
                    <p className="text-lg text-slate-700 leading-relaxed">{product.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Applications:</h4>
                    <p className="text-slate-700">{product.applications}</p>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Learn More
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
