"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              XYZ <span className="text-blue-400">Pumps</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Engineering excellence in industrial pump solutions for over 30 years. Your trusted partner for reliable,
              efficient pumping systems.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-blue-400">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">123 Industrial Boulevard</p>
                  <p className="text-slate-300">Manufacturing District</p>
                  <p className="text-slate-300">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-slate-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-slate-300">info@xyzpumps.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-blue-400">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Monday - Friday</p>
                  <p className="text-slate-400 text-sm">8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="text-slate-300">Saturday</p>
                <p className="text-slate-400 text-sm">9:00 AM - 2:00 PM</p>
              </div>
              <div className="ml-8">
                <p className="text-slate-300">Sunday</p>
                <p className="text-slate-400 text-sm">Emergency Service Only</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-blue-400">Quick Links</h4>
            <div className="space-y-3">
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                About Us
              </a>
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Products
              </a>
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Services
              </a>
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Technical Support
              </a>
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Careers
              </a>
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-slate-700 mt-12 pt-8 text-center"
        >
          <p className="text-slate-400">
            © {new Date().getFullYear()} XYZ Pumps. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
