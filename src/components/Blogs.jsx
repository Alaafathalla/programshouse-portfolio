'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const fallbackImages = ['/blog1.png', '/blog2.png', '/blog3.png']

const blogs = Array.from({ length: 9 }, (_, index) => ({
  title: 'How to build a new website from scratch (step by step guide)',
  image: fallbackImages[index % fallbackImages.length],
}))

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? blogs.length - 3 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= blogs.length - 3 ? 0 : prev + 1
    )
  }

  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-[#111521] py-[90px]"
    >
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-[52px] text-center">
          <motion.h2
            className="mb-5 text-[42px] font-extrabold leading-none text-white"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our <span className="text-[#77A6D0]">Blogs</span>
          </motion.h2>

          <motion.p
            className="text-[18px] font-medium text-white/70"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get inspired, gain new skills and see what’s trending
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-[46px]">
            <motion.div
              className="flex gap-[32px]"
              animate={{
                x: `calc(-${currentIndex * 33.333}% - ${
                  currentIndex * 10.6
                }px)`,
              }}
              transition={{
                duration: 0.55,
                ease: 'easeInOut',
              }}
            >
              {blogs.map((blog, index) => (
                <motion.article
                  key={index}
                  className="min-w-[calc((100%-64px)/3)] overflow-hidden rounded-[18px] border border-white/15 bg-[#20242F]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 3) * 0.12,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="h-[170px] overflow-hidden rounded-t-[18px] p-[10px]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      onError={(e) => {
                        e.currentTarget.src =
                          fallbackImages[
                            index % fallbackImages.length
                          ]
                      }}
                      className="h-full w-full rounded-[12px] object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="px-[24px] pb-[24px] pt-[8px]">
                    <h3 className="mb-[26px] text-[18px] font-bold leading-[1.45] text-white">
                      {blog.title}
                    </h3>

                    <a
                      href="#"
                      className="text-[12px] font-medium text-white/65 underline underline-offset-4 transition hover:text-[#77A6D0]"
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
            className="absolute left-0 top-[43%] z-20 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 top-[43%] z-20 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-[#77A6D0] text-white transition hover:bg-[#5f93c4]"
          >
            <ChevronRight size={22} />
          </button>

          <div className="mt-[38px] flex justify-center gap-[6px]">
            {Array.from({
              length: blogs.length - 2,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-[7px] rounded-full transition-all ${
                  currentIndex === index
                    ? 'w-[18px] bg-[#77A6D0]'
                    : 'w-[18px] bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}