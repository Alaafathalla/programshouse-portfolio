'use client'

import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'
import { ArrowUpRight } from 'lucide-react'

export default function Innovation() {
  return (
    <section className="relative overflow-hidden py-[95px] md:py-[120px]">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6">
        {/* Background Shape */}
        <motion.img
          src="/images/services/1.svg"
          alt=""
          className="
            absolute
            left-[-40px]
            top-[-8px]
            w-[220px]
            sm:w-[250px]
            md:left-0
            md:w-[300px]
            lg:w-[250px]
          "
        />

        {/* Content */}
        <div className="relative z-10 max-w-[520px] md:ml-[120px]">
          <h2 className="mb-5 text-[34px] font-bold leading-[1.35] tracking-[-0.03em] text-white md:text-[48px]">
            Choose Innovation,
            <br />
            Build the <span className="text-primary">Future.</span>
          </h2>

          <p className="max-w-[440px] text-[15px] leading-[1.75] text-white/75 md:text-[16px]">
            Our rich design and technology expertise helps ambitious brands
            build exceptional digital products, scalable solutions, and
            unforgettable user experiences.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-start">
<HashLink
  smooth
  to="/#contact"
  scroll={(el) =>
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  className="
    group
    inline-flex
    h-[56px]
    items-center
    justify-center
    gap-3
    rounded-xl
    bg-primary
    px-8
    text-[15px]
    font-semibold
    text-[#111521]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-[0_20px_45px_rgba(119,166,208,.35)]
    active:scale-[0.98]
  "
>
  Let&apos;s build something amazing together.

  <ArrowUpRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</HashLink>

          </div>
        </div>

        {/* Desktop Image */}
        <motion.img
          src="/images/services/22.png"
          alt="Innovation"
          className="relative z-10 hidden w-[500px] md:block lg:w-[500px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </div>

      {/* Mobile Image */}
      <motion.img
        src="/images/services/22.png"
        alt="Innovation"
        className="relative z-10 mx-auto mt-14 block w-[260px] md:hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />
    </section>
  )
}