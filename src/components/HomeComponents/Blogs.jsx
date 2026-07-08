'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const fallbackImages = ['images/blogs/blog1.png', 'images/blogs/blog2.png', 'images/blogs/blog3.png']

const blogs = Array.from({ length: 9 }, (_, index) => ({
  title: 'How to build a new website from scratch (step by step guide)',
  image: fallbackImages[index % fallbackImages.length],
}))

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-[#111521] py-[70px] md:py-[90px]"
    >
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="mb-[38px] text-center md:mb-[52px]">
          <motion.h2
            className="mb-4 text-[32px] font-extrabold leading-none text-white md:mb-5 md:text-[42px]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our <span className="text-primary">Blogs</span>
          </motion.h2>

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
            <motion.div
              className="flex gap-[18px] md:gap-[32px]"
              animate={{
                x: `calc(-${currentIndex * 100}% - ${
                  currentIndex * 18
                }px)`,
              }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
            >
              {blogs.map((blog, index) => (
                <motion.article
                  key={index}
                  className="min-w-full overflow-hidden rounded-[18px] border border-white/15 bg-[#20242F] sm:min-w-[calc((100%-18px)/2)] md:min-w-[calc((100%-64px)/3)]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 3) * 0.12,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="h-[190px] overflow-hidden rounded-t-[18px] p-[10px] md:h-[170px]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      onError={(e) => {
                        e.currentTarget.src =
                          fallbackImages[index % fallbackImages.length]
                      }}
                      className="h-full w-full rounded-[12px] object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="px-[20px] pb-[24px] pt-[8px] md:px-[24px]">
                    <h3 className="mb-[24px] text-[17px] font-bold leading-[1.45] text-white md:text-[18px]">
                      {blog.title}
                    </h3>

                    <a
                      href="#"
                      className="text-[12px] font-medium text-white/65 underline underline-offset-4 transition hover:text-primary"
                    >
                      Explore more
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
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
                onClick={handleNext}
                className={`h-[7px] rounded-full transition-all ${
                  dot === currentIndex % 3
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