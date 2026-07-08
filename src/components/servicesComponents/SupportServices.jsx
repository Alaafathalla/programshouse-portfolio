'use client'

import { motion } from 'framer-motion'
import {
  Headphones,
  Bug,
  MonitorCheck,
  TrendingUp ,
  ShieldCheck,
} from 'lucide-react'


const supportItems = [
  {
    title: 'Technical Support',
    text: 'Quick assistance for any technical issues you face',
    icon: Headphones,
  },
  {
    title: 'Bug Fixing',
    text: 'Quick assistance for any technical issues you face',
    icon: Bug,
  },
  {
    title: 'Monitoring',
    text: 'Quick assistance for any technical issues you face',
    icon: MonitorCheck,
  },
  {
    title: 'Updates',
    text: 'Quick assistance for any technical issues you face',
    icon: TrendingUp ,
  },
  {
    title: 'Security',
    text: 'Quick assistance for any technical issues you face',
    icon: ShieldCheck,
  },
]

export default function SupportService() {
  return (
    <section className="relative overflow-hidden bg-[#111521] py-[70px] md:py-[90px]">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6">
        <div className="mb-[34px]">
          <div className="mb-[30px] inline-flex h-[38px] items-center gap-2 rounded-[12px] border border-white/10 bg-white/[0.05] px-5 text-[15px] text-white/80">
            <Headphones size={16} className="text-secondary" />
            Our Support Service
          </div>

          <h2 className="mb-5 text-[34px] font-semibold leading-[1.15] tracking-[-0.035em] text-white md:text-[44px]">
            What we handle for you ?
          </h2>

          <p className="max-w-[1040px] text-[14px] leading-[1.7] text-white/65">
            At Program House, we help businesses turn ideas into powerful
            digital solutions. From discovery and strategy to design and
            development,
          </p>
        </div>

        <div className="mb-[110px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-5">
          {supportItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{
                  scale: 1.04,
                  borderColor: 'rgba(119,166,208,.55)',
                }}
                className="group rounded-[10px] border border-white/0 bg-[#202532] px-5 py-5 text-center  duration-300 hover:bg-[#242B3A] hover:shadow-[0_18px_45px_rgba(119,166,208,.12)]"
              >
                <div className="mx-auto mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[10px]  transition-all duration-300 ">
                  <Icon
                    size={23}
                    className="text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-secondary"
                  />
                </div>

                <h3 className="mb-2 text-[13px] font-semibold text-white transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="mx-auto max-w-[135px] text-[10px] leading-[1.45] text-white/70 transition-colors duration-300 group-hover:text-white/85">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.015 }}
          className="relative mx-auto max-w-[920px] px-6 py-[44px] text-center transition-all duration-300"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[14px] border-2 border-primary transition-all duration-300" />

          <div className="absolute right-[12px] top-[-6px] z-10 h-[10px] w-[105px] bg-[#111521]" />

          <motion.img
            src="/images/services/search.svg"
            alt="Search"
            className="absolute right-[24px] top-[-48px] z-20 w-[72px] select-none"
            draggable={false}
            animate={{ rotate: [-8, 8, -8] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <h3 className="relative z-20 mx-auto max-w-[720px] text-[28px] font-semibold leading-[1.45] tracking-[-0.03em] text-white md:text-[40px]">
            <span className="text-secondary">Transform</span> your project with
            our
            <br className="hidden md:block" />
            driven expertise
          </h3>
        </motion.div>
      </div>
    </section>
  )
}