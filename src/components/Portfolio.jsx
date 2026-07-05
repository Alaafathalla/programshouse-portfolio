'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Rosetta medical mobile app and dashboard',
    description:
      'A smart prescription delivery app that connects users with nearby pharmacies',
    image: '/port.png',
  },
  {
    title: 'Rosetta medical mobile app and dashboard',
    description:
      'A smart prescription delivery app that connects users with nearby pharmacies',
    image: '/port.png',
  },
  {
    title: 'Rosetta medical mobile app and dashboard',
    description:
      'A smart prescription delivery app that connects users with nearby pharmacies',
    image: '/port.png',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState(0)

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#111521] py-[92px]">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-[58px] text-center">
          <motion.h2 className="mb-5 text-[42px] font-extrabold leading-none text-white">
            Our <span className="text-[#77A6D0]">Portfolio</span>
          </motion.h2>

          <motion.p className="mx-auto max-w-[720px] text-[18px] font-medium leading-[1.6] text-white/70">
            Smart software solutions designed to help your business grow,
            automate workflows, and deliver better digital experiences.
          </motion.p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-[28px]"
            animate={{ x: `calc(-${active * 78}% - ${active * 28}px)` }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} className="relative h-[375px] min-w-[78%]">
                <div
                  className="relative h-full overflow-hidden rounded-[18px] border border-white/15 bg-[#161B28]"
                  style={{
                    clipPath:
                      'polygon(0 0, calc(100% - 185px) 0, calc(100% - 155px) 34px, 100% 34px, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />

                  <div className="absolute left-[48px] top-1/2 z-10 max-w-[430px] -translate-y-1/2">
                    <h3 className="mb-5 text-[42px] font-extrabold leading-[1.22] text-white">
                      {project.title}
                    </h3>

                    <p className="text-[15px] font-medium leading-[1.7] text-white/65">
                      {project.description}
                    </p>
                  </div>

                  <div
                    className="absolute bottom-0 right-0 h-full w-[64%] overflow-hidden"
                    style={{
                      clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute bottom-0 right-0 h-full w-full object-cover object-right-bottom"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActive((prev) => (prev + 1) % projects.length)}
                  className="absolute right-[42px] top-[14px] z-30 flex items-center gap-2 text-[18px] font-semibold text-white transition hover:text-[#FEAC25]"
                >
                  <ArrowUpRight size={19} />
                  Explore More
                </button>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-[34px] flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`h-[7px] rounded-full transition-all ${
                  active === index ? 'w-[22px] bg-[#77A6D0]' : 'w-[14px] bg-white/35'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}