'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Search, FileText, Code2, CheckSquare, Rocket } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaLaravel, FaPhp } from 'react-icons/fa'
import { SiFlutter, SiJavascript, SiReact } from 'react-icons/si'

const tools = [
  { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
  { name: 'Flutter', icon: SiFlutter, color: '#42A5F5' },
  { name: 'Java script', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4' },
]

const steps = [
  { number: '01', title: 'Receive', text: 'We receive your request through our support channels.', icon: Search },
  { number: '02', title: 'Analyze', text: 'Our team analyzes the issue and identifies the root cause.', icon: FileText },
  { number: '03', title: 'Resolve', text: 'We fix the issue and implement the best solution.', icon: Code2 },
  { number: '04', title: 'Test & Verify', text: 'We test thoroughly to ensure everything works perfectly.', icon: CheckSquare },
  { number: '05', title: 'Follow Up', text: 'We follow up to ensure your issue is fully resolved.', icon: Rocket },
]

const projects = [
  {
    title: 'Digital Plus Marketing & Programming Website',
    description:
      'Helping businesses grow through innovative software development, creative branding, and results-driven digital marketing.',
    image: '/images/portfolio/portfolio12.png',
    mobileImage: '/images/portfolio/port (12).png',
    badges: ['React', 'Laravel'],
  },
  {
    title: 'Rosetta Medical Mobile App & Dashboard',
    description:
      'Smart prescription delivery platform connecting users with nearby pharmacies.',
    image: '/images/portfolio/portfolio1.png',
    mobileImage: '/images/portfolio/port (1).png',
    badges: ['React', 'Flutter'],
  },
  {
    title: 'Nizam HR Management System',
    description:
      'Complete HR platform with web dashboard and employee mobile application.',
    image: '/images/portfolio/portfolio5.png',
    mobileImage: '/images/portfolio/port (5).png',
    badges: ['Laravel', 'Flutter'],
  },
]

export default function DevelopmentSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
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

    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="relative overflow-hidden bg-[#111521] py-[70px] md:py-[92px]">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6">
        <div className="mb-8">
          <div className="mb-9 inline-flex h-[38px] items-center gap-2 rounded-[12px] border border-white/10 bg-white/[0.05] px-5 text-[15px] text-white/80">
            <span className="text-[#FEAC25]">⌘</span>
            Our Development Service
          </div>

          <h2 className="mb-8 text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] text-white md:text-[42px]">
            We built many projects with variant technologies.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-7 md:gap-14">
            {tools.map((tool) => {
              const Icon = tool.icon

              return (
                <div key={tool.name} className="flex items-center gap-3 text-white/75">
                  <Icon size={26} style={{ color: tool.color }} />
                  <span className="text-[15px]">{tool.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative h-[430px] flex-[0_0_100%] pr-[18px] md:h-[316px] md:flex-[0_0_100%]"
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
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />

                  <div className="absolute inset-0 z-[8] hidden bg-gradient-to-r from-[#151A27] via-[#151A27]/15 to-transparent md:block" />

                  <div className="relative z-20 h-full">
                    <div className="absolute left-6 right-6 top-[50px] md:left-[38px] md:right-auto md:top-1/2 md:w-[470px] md:-translate-y-1/2">
                      <h3 className="mb-4 max-w-[380px] text-[30px] font-semibold leading-[1.22] tracking-[-0.03em] text-white md:text-[40px]">
                        {project.title}
                      </h3>

                      <p className="mb-6 max-w-[380px] text-[14px] leading-[1.65] text-white/65 md:text-[16px]">
                        {project.description}
                      </p>

                      <div className="flex gap-3">
                        {project.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-[#202532] px-3 py-2 text-[13px] text-white/75"
                          >
                            {badge === 'React' && <SiReact className="text-[#61DAFB]" size={18} />}
                            {badge === 'Laravel' && <FaLaravel className="text-[#FF2D20]" size={18} />}
                            {badge === 'Flutter' && <SiFlutter className="text-[#42A5F5]" size={18} />}
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={scrollNext}
                  className="absolute right-[18px] top-0 z-30 flex h-[46px] items-center gap-2 rounded-bl-[22px] rounded-tr-[18px] border-b border-l border-white/20 bg-[#111521] px-5 text-[14px] font-semibold text-white transition hover:text-[#77A6D0] md:text-[18px]"
                >
                  <ArrowUpRight size={18} />
                  Explore More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[20px] flex justify-center gap-2">
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

        <div className="mt-[70px] grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="mb-5 text-[15px] font-medium text-white">
                  {step.number}
                </span>

                <div className="relative mb-5 flex h-[64px] w-[64px] items-center justify-center rounded-[14px] bg-[#202532]">
                  <Icon size={28} className="text-[#77A6D0]" />

                  {index !== steps.length - 1 && (
                    <span className="absolute left-full top-1/2 hidden h-px w-[130px] -translate-y-1/2 border-t border-dashed border-white/25 md:block" />
                  )}
                </div>

                <h3 className="mb-2 text-[17px] font-semibold text-[#77A6D0]">
                  {step.title}
                </h3>

                <p className="max-w-[150px] text-[12px] font-medium leading-[1.45] text-white">
                  {step.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}