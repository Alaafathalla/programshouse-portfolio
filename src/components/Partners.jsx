'use client'

import { motion } from 'framer-motion'
import { colors } from '../theme'

const partners = [
  { name: 'Partner 1', initials: 'P1' },
  { name: 'Partner 2', initials: 'P2' },
  { name: 'Partner 3', initials: 'P3' },
  { name: 'Partner 4', initials: 'P4' },
  { name: 'Partner 5', initials: 'P5' },
  { name: 'Partner 6', initials: 'P6' },
  { name: 'Partner 7', initials: 'P7' },
  { name: 'Partner 8', initials: 'P8' },
]

export default function Partners() {
  return (
    <section className="py-20" style={{ backgroundColor: colors.background }}>
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
            Partners in <span style={{ color: colors.primary }}>Success</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg bg-[#1a2332] border border-[#77A6D0] border-opacity-20 flex items-center justify-center hover:border-[#FEAC25] transition min-h-32 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#77A6D0] to-[#FEAC25] flex items-center justify-center font-bold text-black group-hover:shadow-lg group-hover:shadow-[#77A6D0] transition">
                  {partner.initials}
                </div>
                <p className="text-sm text-gray-400">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
