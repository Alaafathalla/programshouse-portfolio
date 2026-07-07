'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const projects = [
  {
    title: 'Rosetta Medical Mobile App & Dashboard',
    description:
      'Smart prescription delivery platform connecting users with nearby pharmacies.',
    image: 'images/portfolio/portfolio1.png',
    mobileImage: 'images/portfolio/port (1).png',
  },
  {
    title: 'PROF Medical Research Platform',
    description:
      'Research platform for healthcare professionals and medical content.',
    image: 'images/portfolio/portfolio2.png',
    mobileImage: 'images/portfolio/port (2).png',
  },
  {
    title: 'M&S Marketing Website',
    description:
      'Corporate marketing website with service showcase and lead generation.',
    image: 'images/portfolio/portfolio3.png',
    mobileImage: 'images/portfolio/port (3).png',
  },
  {
    title: 'Reem Ahmed Life Coaching Website',
    description:
      'Personal coaching platform with booking and consultation features.',
    image: 'images/portfolio/portfolio4.png',
    mobileImage: 'images/portfolio/port (4).png',
  },
  {
    title: 'Nizam HR Management System',
    description:
      'Complete HR platform with web dashboard and employee mobile application.',
    image: 'images/portfolio/portfolio5.png',
    mobileImage: 'images/portfolio/port (5).png',
  },
  {
    title: 'Biostart House Website',
    description:
      'Professional business website designed for startup and corporate services.',
    image: 'images/portfolio/portfolio6.png',
    mobileImage: 'images/portfolio/port (6).png',
  },
  {
    title: 'Medical Islands Website',
    description:
      'Modern medical e-commerce website with customer and admin dashboard.',
    image: 'images/portfolio/portfolio7.png',
    mobileImage: 'images/portfolio/port (7).png',
  },
  {
    title: 'RAQ Application Dashboard',
    description:
      'Business management dashboard with analytics and reporting features.',
    image: 'images/portfolio/portfolio8.png',
    mobileImage: 'images/portfolio/port (8).png',
  },
  {
    title: 'Dolphin Website',
    description:
      'Corporate website with modern UI and responsive experience.',
    image: 'images/portfolio/portfolio9.png',
    mobileImage: 'images/portfolio/port (9).png',
  },
  {
    title: 'SWSW Application',
    description:
      'Food delivery mobile application with customer and driver experiences.',
    image: 'images/portfolio/portfolio10.png',
    mobileImage: 'images/portfolio/port (10).png',
  },
  {
    title: 'Zewail Academy Website',
    description:
      'Educational platform for courses, registrations and student management.',
    image: 'images/portfolio/portfolio11.png',
    mobileImage: 'images/portfolio/port (11).png',
  },
  {
    title: 'Digital Plus Marketing Website',
    description:
      'Marketing agency website focused on branding and digital services.',
    image: 'images/portfolio/portfolio12.png',
    mobileImage: 'images/portfolio/port (12).png',
  },
  {
    title: 'Kaspton Home Services Website',
    description:
      'Home services platform with booking and service management.',
    image: 'images/portfolio/portfolio13.png',
    mobileImage: 'images/portfolio/port (13).png',
  },
  {
    title: 'CP Dashboard',
    description:
      'Business dashboard for monitoring operations and performance.',
    image: 'images/portfolio/portfolio14.png',
    mobileImage: 'images/portfolio/port (14).png',
  },
]

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  )

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#111521] py-[70px] md:py-[92px]"
    >
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="mb-[42px] text-center md:mb-[58px]">
          <motion.h2 className="mb-4 text-[32px] font-extrabold leading-none text-white md:mb-5 md:text-[42px]">
            Our <span className="text-[#77A6D0]">Portfolio</span>
          </motion.h2>

          <motion.p className="mx-auto max-w-[720px] text-[14px] font-medium leading-[1.6] text-white/70 md:text-[18px]">
            Smart software solutions designed to help your business grow,
            automate workflows, and deliver better digital experiences.
          </motion.p>
        </div>

        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative h-[520px] flex-[0_0_100%] pr-[18px] md:h-[316px] md:flex-[0_0_78%] md:pr-[28px] lg:flex-[0_0_82%]"
              >
                <div className="relative h-full overflow-hidden rounded-[18px] border border-white/15 bg-[#151A27] md:[clip-path:polygon(0_0,calc(100%_-_176px)_0,calc(100%_-_146px)_46px,100%_46px,100%_100%,0_100%)]">
                  <div className="absolute inset-0 z-[1] opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />

                  <div
                    className="absolute inset-0 z-[2] block bg-no-repeat md:hidden"
                    style={{
                      backgroundImage: `url("${project.mobileImage}")`,
                      backgroundSize: '100% auto',
                      backgroundPosition: 'center bottom',
                    }}
                  />

                  <div
                    className="absolute inset-0 z-[2] hidden bg-cover bg-right bg-no-repeat md:block"
                    style={{
                      backgroundImage: `url("${project.image}")`,
                    }}
                  />

                  <div className="absolute inset-0 z-[8] hidden bg-gradient-to-r from-[#151A27] via-[#151A27]/10 to-transparent md:block" />

                  <div className="relative z-20 h-full">
                    <div className="absolute left-6 right-6 top-[52px] md:left-[42px] md:right-auto md:top-1/2 md:w-[470px] md:-translate-y-1/2">
                      <h3 className="mb-3 max-w-[300px] text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-white md:mb-4 md:max-w-[620px] md:text-[35px]">
                        {project.title}
                      </h3>

                      <p className="max-w-[310px] text-[14px] leading-[1.6] text-white/75 md:max-w-[440px] md:text-[18px]">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={scrollNext}
                  className="absolute right-[18px] top-0 z-30 flex h-[46px] items-center gap-2 rounded-bl-[22px] rounded-tr-[18px] border-b border-l border-white/20 bg-[#111521] px-5 text-[14px] font-semibold text-white transition hover:text-[#77A6D0] md:right-[28px] md:text-[18px]"
                >
                  <ArrowUpRight size={18} />
                  Explore More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[22px] flex justify-center gap-2 md:mt-[34px]">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              type="button"
              onClick={scrollNext}
              className={`h-[6px] rounded-full transition-all md:h-[7px] ${
                dot === selectedIndex % 3
                  ? 'w-[22px] bg-[#77A6D0]'
                  : 'w-[14px] bg-white/35'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}