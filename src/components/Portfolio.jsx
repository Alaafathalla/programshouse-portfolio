'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { colors } from '../theme'

const projects = [
  {
    title: 'Rosetta medical mobile app and dashboard',
    description: 'A smart prescription delivery app that connects users with nearby pharmacies',
    image: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
  },
  {
    title: 'Ros app',
    description: 'A smart productivity tool with real-time collaboration features',
    image: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our <span style={{ color: colors.secondary }}>Portfolio</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Smart software solutions designed to help your business grow, automate workflows, and deliver better digital experiences.
          </motion.p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-[#77A6D0] border-opacity-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div
                  className="w-full lg:w-1/2 h-64 lg:h-80 relative overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    style={{ background: project.image }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-[#1a2332] flex flex-col justify-center">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#FEAC25] hover:text-opacity-80 transition w-fit"
                    whileHover={{ gap: '12px' }}
                  >
                    Explore More <ArrowRight size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
