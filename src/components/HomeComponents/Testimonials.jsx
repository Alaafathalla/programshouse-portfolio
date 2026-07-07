'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Johnson',
    role: 'Sales Head',
    rate: '(4.8)',
    date: '13 April 2022',
    text: 'A game-changer for our sales team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.',
  },
  {
    name: 'Michael Johnson',
    role: 'Sales Head',
    rate: '(4.8)',
    date: '13 April 2022',
    text: 'A game-changer for our sales team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.',
  },
  {
    name: 'Michael Johnson',
    role: 'Sales Head',
    rate: '(4.8)',
    date: '13 April 2022',
    text: 'A game-changer for our sales team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.',
  },
  {
    name: 'Michael Johnson',
    role: 'Sales Head',
    rate: '(4.8)',
    date: '13 April 2022',
    text: 'A game-changer for our sales team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.',
  },
  {
    name: 'Michael Johnson',
    role: 'Sales Head',
    rate: '(4.8)',
    date: '13 April 2022',
    text: 'A game-changer for our sales team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.',
  },
  {
    name: 'Michael Johnson',
    role: 'Sales Head',
    rate: '(4.8)',
    date: '13 April 2022',
    text: 'A game-changer for our sales team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#111521] py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Testimonials.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#111521]/80" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="mb-5 text-[34px] font-semibold text-[#77A6D0] md:text-[42px]"
          >
            Testimonials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .1, duration: .5 }}
            className="mx-auto max-w-[700px] text-[15px] leading-[1.7] text-white/70 md:text-[18px]"
          >
            Our clients&apos; success is our greatest achievement. Read their
            stories and discover the impact of working with our team.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              whileHover={{ y: -6 }}
              className="
                rounded-[12px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-md
                p-5
                transition-all
                duration-300
                hover:border-[#77A6D0]/40
                hover:bg-white/[0.06]
              "
            >
              {/* Header */}
              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* Letter Avatar */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#77A6D0]/25 bg-[#77A6D0]/10 text-lg font-semibold text-[#77A6D0]">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-[13px] font-medium text-[#77A6D0]">
                      {item.name}
                    </h3>

                    <p className="text-[10px] text-white/70">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={11}
                      className="fill-[#FEAC25] text-[#FEAC25]"
                    />
                  ))}

                  <span className="ml-1 text-[10px] text-white/70">
                    {item.rate}
                  </span>
                </div>
              </div>

              {/* Review */}
              <p className="mb-6 text-[11px] leading-[1.8] text-white/75">
                {item.text}
              </p>

              {/* Date */}
              <span className="text-[10px] text-white/45">
                {item.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}