'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { colors } from '../theme'

const blogs = [
  {
    title: 'How to build a new website from scratch (step by step guide)',
    image: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
  },
  {
    title: 'How to build a new website from scratch (step by step guide)',
    image: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
  },
  {
    title: 'How to build a new website from scratch (step by step guide)',
    image: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
  },
]

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="blogs" className="py-20" style={{ backgroundColor: colors.background }}>
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
            Our <span className="text-[#FEAC25]">Blogs</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get inspired, gain new skills and see what's trending
          </motion.p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-1/3 lg:min-w-1/3 flex-shrink-0"
                >
                  <motion.div
                    className="rounded-lg overflow-hidden border border-[#77A6D0] border-opacity-20 hover:border-[#FEAC25] transition group h-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Image Section with clip-path */}
                    <div
                      className="w-full h-48 relative overflow-hidden group-hover:scale-105 transition duration-300"
                      style={{
                        background: blog.image,
                        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                      }}
                    />

                    {/* Content Section */}
                    <div className="p-6 bg-[#1a2332]">
                      <h3 className="text-lg font-bold mb-4 line-clamp-2">{blog.title}</h3>
                      <a href="#" className="text-[#77A6D0] text-sm font-semibold hover:text-opacity-80 transition">
                        Explore more
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1a2332] border border-[#77A6D0] border-opacity-30 flex items-center justify-center hover:bg-[#77A6D0] hover:text-white transition z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1a2332] border border-[#77A6D0] border-opacity-30 flex items-center justify-center hover:bg-[#77A6D0] hover:text-white transition z-10"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {blogs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex ? 'bg-[#FEAC25] w-8' : 'bg-[#77A6D0] bg-opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
