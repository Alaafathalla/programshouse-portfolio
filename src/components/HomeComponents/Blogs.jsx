'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BlogCard from '../ui/BlogCard'
import SectionHeading from '../ui/SectionHeading'

const fallbackImages = ['/images/blogs/blog1.png', '/images/blogs/blog2.png', '/images/blogs/blog3.png']

const blogs = Array.from({ length: 9 }, (_, index) => ({
  title: 'How to build a new website from scratch (step by step guide)',
  image: fallbackImages[index % fallbackImages.length],
}))

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(blogs.length - 3)

  const getResponsiveMaxIndex = () => {
    if (typeof window === 'undefined') return blogs.length - 3
    if (window.innerWidth >= 768) return blogs.length - 3
    if (window.innerWidth >= 640) return blogs.length - 2
    return blogs.length - 1
  }

  useEffect(() => {
    const updateMaxIndex = () => {
      const nextMaxIndex = getResponsiveMaxIndex()
      setMaxIndex(nextMaxIndex)
      setCurrentIndex((prev) => Math.min(prev, nextMaxIndex))
    }

    updateMaxIndex()
    window.addEventListener('resize', updateMaxIndex)
    return () => window.removeEventListener('resize', updateMaxIndex)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-[#111521] py-[70px] md:py-[90px]"
    >
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="mb-[38px] text-center md:mb-[52px]">
          <SectionHeading
            label="Our "
            highlight="Blogs"
            className="mb-4 md:mb-5 text-[32px] md:text-[42px]"
          />

          <motion.p
            className="mx-auto max-w-[520px] text-[14px] font-medium leading-[1.6] text-white/70 md:text-[18px]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get inspired, gain new skills and see what’s trending
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden md:px-[46px]">
            <div
              className="flex gap-[18px] md:gap-[32px] [--slide-step:var(--step-mobile)] sm:[--slide-step:var(--step-tablet)] md:[--slide-step:var(--step-desktop)]"
              style={{
                transform: `translateX(calc(-${currentIndex} * var(--slide-step)))`,
                transition: 'transform 0.55s ease-in-out',
                '--step-mobile': 'calc(100% + 18px)',
                '--step-tablet': 'calc((100% - 18px)/2 + 18px)',
                '--step-desktop': 'calc((100% - 64px)/3 + 32px)',
              }}
            >
              {blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  blog={blog}
                  fallbackImage={fallbackImages[index % fallbackImages.length]}
                  index={index}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-[43%] z-20 hidden h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white md:flex lg:left-0 lg:h-[48px] lg:w-[48px]"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-[43%] z-20 hidden h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white transition hover:bg-[#5f93c4] md:flex lg:right-0 lg:h-[48px] lg:w-[48px]"
          >
            <ChevronRight size={22} />
          </button>

          <div className="mt-[30px] flex justify-center gap-[6px] md:mt-[38px]">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => setCurrentIndex(dot * 3)}
                className={`h-[7px] rounded-full transition-all ${
                  Math.floor(currentIndex / 3) === dot
                    ? 'w-[22px] bg-primary'
                    : 'w-[14px] bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}