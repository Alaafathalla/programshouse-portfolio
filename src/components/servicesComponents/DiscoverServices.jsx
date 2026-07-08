'use client'

import { motion } from 'framer-motion'
import { BarChart3, Users, ChevronsLeftRight } from 'lucide-react'
import MessageTag from '@/components/ui/MessageTag'

export default function DiscoverService() {
  return (
    <section className="relative overflow-hidden bg-[#111521] py-[48px] md:py-[70px]">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6">
        <div className="mb-[34px]">
          <div className="mb-[34px] inline-flex h-[38px] items-center gap-2 rounded-[12px] border border-white/10 bg-white/[0.05] px-5 text-[15px] text-white/80">
            <ChevronsLeftRight size={16} className="text-secondary" />
            Our Discover Service
          </div>

          <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.035em] text-white md:text-[42px]">
            Discover Your Next Digital Product
          </h2>
        </div>

        <div className="grid gap-[24px] md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="h-[300px] overflow-hidden rounded-[16px] bg-[#202532] md:h-[420px]"
          >
<div className="relative h-full w-full">
  <img
    src="/images/services/discover2.png"
    alt="Discovery workshop"
    className="h-full w-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#111521]/85 via-[#111521]/25 to-transparent" />
</div>
          </motion.div>

          <div className="grid gap-[24px]">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[16px] bg-[#202532] px-[34px] py-[34px]"
            >
              <Users size={24} className="mb-4 text-secondary" />

              <h3 className="mb-2 text-[20px] font-medium tracking-[-0.03em] text-white md:text-[27px]">
                User Research
              </h3>

              <p className="max-w-[390px] text-[13px] leading-[1.75] text-white/55 md:text-[14px]">
                Discover who your users are, what problems they face, and how
                your product can create real value through qualitative insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-[190px] overflow-visible rounded-[16px] bg-[#202532] md:h-[198px]"
            >
<div className="relative h-full overflow-hidden rounded-[16px]">
  <img
    src="/images/services/discover1.png"
    alt="Research planning"
    className="h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-tr from-[#111521]/85 via-[#111521]/25 to-transparent" />
</div>
              <MessageTag
                text="Every great product starts with research."
                className="absolute left-[20px] top-[-26px] z-20"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[16px] bg-[#202532] px-[34px] py-[34px] md:col-span-2"
          >
            <BarChart3 size={30} className="mb-4 text-secondary" />

            <h3 className="mb-4 text-[28px] font-medium leading-[1.1] tracking-[-0.035em] text-white md:text-[42px]">
              Competitor Analysis
            </h3>

            <p className="max-w-[1060px] text-[13px] leading-[1.75] text-white/55 md:text-[14px]">
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