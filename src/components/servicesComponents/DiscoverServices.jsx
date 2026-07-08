'use client'

import { motion } from 'framer-motion'
import { BarChart3, Users } from 'lucide-react'

export default function DiscoverService() {
  return (
    <section className="relative overflow-hidden bg-[#111521] py-[70px] md:py-[88px]">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6">
        <div className="mb-[34px]">
          <div className="mb-[34px] inline-flex h-[38px] items-center gap-2 rounded-[12px] border border-white/10 bg-white/[0.05] px-5 text-[15px] text-white/80">
            <span className="text-[#FEAC25]">⌘</span>
            Our Discover Service
          </div>

          <h2 className="text-[38px] font-semibold leading-[1.15] tracking-[-0.035em] text-white md:text-[48px]">
            Discover Your Next Digital Product
          </h2>
        </div>

        <div className="grid gap-[24px] md:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -70, y: 18 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-[360px] overflow-hidden rounded-[18px] bg-[#202532]"
          >
            <img
              src="/images/services/discover2.png"
              alt="Discovery workshop"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="grid gap-[24px]">
            <motion.div
              initial={{ opacity: 0, x: 70, y: 18 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[18px] bg-[#202532] px-[34px] py-[34px]"
            >
              <Users size={28} className="mb-7 text-[#FEAC25]" />

              <h3 className="mb-5 text-[27px] font-semibold tracking-[-0.03em] text-white">
                User Research
              </h3>

              <p className="max-w-[390px] text-[14px] leading-[1.75] text-white/55">
                Discover who your users are, what problems they face, and how
                your product can create real value through qualitative insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 70, y: 18 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative min-h-[210px] overflow-hidden rounded-[18px] bg-[#202532]"
            >
              <img
                src="/images/services/discover1.png"
                alt="Research planning"
                className="h-full w-full object-cover"
              />

              <div className="absolute left-[22px] top-[-28px] z-20 hidden md:block">
                <div className="relative flex h-[52px] items-center rounded-[10px] bg-[#FEAC25] px-5 text-[13px] font-medium text-[#111521]">
                  Every great product starts with research.

                  <span className="absolute -bottom-[11px] left-[16px] h-0 w-0 border-l-[11px] border-r-[11px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#FEAC25]" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[18px] bg-[#202532] px-[34px] py-[38px] md:col-span-2"
          >
            <BarChart3 size={34} className="mb-8 text-[#FEAC25]" />

            <h3 className="mb-5 text-[38px] font-semibold leading-[1.1] tracking-[-0.035em] text-white md:text-[46px]">
              Competitor Analysis
            </h3>

            <p className="max-w-[1060px] text-[14px] leading-[1.75] text-white/55">
              Analyze competitors, identify market gaps, and uncover
              opportunities to build a stronger, more differentiated digital
              product. Understand your business model, challenges, vision, and
              long-term goals before writing a single line of code.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}