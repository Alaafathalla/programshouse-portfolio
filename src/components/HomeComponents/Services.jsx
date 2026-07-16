'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Code, Headphones, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const services = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'Every successful product starts with a deep understanding. We explore your business goals, user needs, and market opportunities to uncover insights that shape a clear digital strategy.',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'We craft beautiful, intuitive, and user-focused experiences that turn ideas into engaging digital products. Every screen is designed to delight users and strengthen your brand.',
  },
  {
    icon: Code,
    title: 'Development',
    description:
      'From concept to launch, we build powerful web and mobile solutions that are fast, scalable, and reliable. Our development process transforms ideas into high-performing products.',
  },
  {
    icon: Headphones,
    title: 'Support',
    description:
      'Our partnership does not end at launch. We provide continuous support, maintenance, and optimization to keep your product secure, updated, and ready to grow.',
  },
]

function BorderBeam() {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[18px]">
      <div className="absolute inset-0 rounded-[18px] ring-1 ring-white/12" />

      <motion.div
        className="absolute left-0 top-0 h-[2px] w-[140px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.95),transparent)]"
        animate={{
          x: ['-140px', '315px', '315px', '-140px', '-140px'],
          y: ['0px', '0px', '373px', '373px', '0px'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute right-0 top-0 h-[140px] w-[2px] rounded-full bg-[linear-gradient(180deg,transparent,rgba(255,255,255,.95),transparent)]"
        animate={{
          y: ['-140px', '375px'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
          delay: 1.25,
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-[2px] w-[140px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.95),transparent)]"
        animate={{
          x: ['140px', '-315px'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
          delay: 2.5,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 h-[140px] w-[2px] rounded-full bg-[linear-gradient(180deg,transparent,rgba(255,255,255,.95),transparent)]"
        animate={{
          y: ['140px', '-375px'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
          delay: 3.75,
        }}
      />
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#111521] py-[92px]"
    >
      <div className="relative z-10 mx-auto max-w-[1320px] px-6">
        <div className="mb-[58px] text-center">
          <SectionHeading
            label="Our "
            highlight="Services"
            className="mb-5 text-[42px] font-extrabold leading-none text-white"
          />

          <motion.p
            className="mx-auto max-w-[720px] text-[18px] font-medium leading-[1.6] text-white/70"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Smart software solutions designed to help your business grow,
            automate workflows, and deliver better digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const IconComponent = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative h-[375px] overflow-hidden rounded-[18px] bg-[#20242F]"
              >
                <BorderBeam />

                <div className="absolute inset-[1px] flex flex-col items-center rounded-[17px] bg-[#20242F] px-6 py-9 text-center">
                  <div className="mb-[22px] flex h-[50px] w-[50px] items-center justify-center rounded-full">
                    <IconComponent
                      className="h-[32px] w-[32px] text-secondary transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.9}
                    />
                  </div>

                  <h3 className="mb-[18px] text-[22px] font-bold leading-none text-white">
                    {service.title}
                  </h3>

                  <p className="flex-1 text-[13px] font-medium leading-[1.65] text-white/65">
                    {service.description}
                  </p>

                  <a
                    href="#"
                    className="mt-[26px] flex items-center gap-2 text-[12px] font-medium text-white underline underline-offset-4 transition-all duration-300 group-hover:gap-3 group-hover:text-secondary"
                  >
                    Read More
                    <ArrowRight size={14} className="text-secondary" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}