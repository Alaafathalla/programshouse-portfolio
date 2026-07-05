'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Card, CardContent } from './ui/card'

const stats = [
  { number: 12, prefix: '', label: 'Years Experience' },
  { number: 64, prefix: '+', label: 'Done Project' },
  { number: 18, prefix: '+', label: 'Active Projects' },
]

function CountUp({ value, prefix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (!isInView) return

    const controls = animate(count, value, {
      duration: 1.5,
      ease: 'easeOut',
    })

    return controls.stop
  }, [isInView, count, value])

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#111521] py-[95px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
        style={{ backgroundImage: "url('/aboutbg.png')" }}
      />
      <div className="absolute inset-0 bg-[#111521]/65" />

      <div className="relative z-10 mx-auto max-w-[1120px] px-6 text-center">
        <motion.h2
          className="mb-[48px] text-[32px] font-extrabold leading-none text-white md:text-[34px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About <span className="text-[#77A6D0]">us</span>
        </motion.h2>

        <motion.h3
          className="mx-auto mb-[22px] max-w-[900px] text-[24px] font-bold leading-[1.35] text-white md:text-[26px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We help businesses transform ideas into{' '}
          <span className="text-[#77A6D0]">impactful digital products</span>
        </motion.h3>

        <motion.p
          className="mx-auto mb-[28px] max-w-[900px] text-[13px] font-medium leading-[1.65] text-white/70"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Program House, we help businesses turn ideas into powerful digital
          solutions. From discovery and strategy to design and development, we
          create innovative software products that solve real challenges and
          drive growth. Our team combines creativity, technology, and
          user-centered thinking to deliver scalable web and mobile experiences
          tailored to each client&apos;s goals.
        </motion.p>

        <div className="mx-auto flex max-w-[640px] flex-wrap justify-center gap-[28px]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 + index * 0.12 }}
              viewport={{ once: true }}
            >
              <Card className="h-[150px] w-[156px] rounded-[22px] border border-white/15 bg-[#20242F]/90 shadow-[0_24px_38px_rgba(0,0,0,0.35)] md:h-[165px] md:w-[170px] md:rounded-[26px]">
                <CardContent className="flex h-full flex-col items-center justify-center p-0 text-center">
                  <div className="mb-[22px] text-[34px] font-extrabold leading-none text-[#FFB21A] md:text-[38px]">
                    <CountUp value={stat.number} prefix={stat.prefix} />
                  </div>

                  <div className="text-[17px] font-semibold leading-none text-white md:text-[19px]">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}