'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Palette  } from 'lucide-react'

const cards = [
  {
    step: '01 / Solutions',
    title: 'Mobile & Web App UI/UX Design',
    text: 'We architect fluid experiences that bridge the gap between human intuition and digital complexity. Our designs are high-performance tools built for conversion and clarity.',
    image: '/images/services/3.svg',
    tag: 'Let’s make your app design a reality!',
    imageFirst: false,
  },
  {
    step: '02 / Strategy',
    title: 'User Research',
    text: 'We architect fluid experiences that bridge the gap between human intuition and digital complexity. Our designs are high-performance tools built for conversion and clarity.',
    image: '/images/services/4.svg',
    tag: 'Let’s match your audience’s need!',
    imageFirst: true,
  },
  {
    step: '03 / Execution',
    title: 'Prototyping & Wireframing',
    text: 'Visualizing the skeleton of your product before the skin. Low-fidelity to high-fidelity interactive flows that define the product logic.',
    image: '/images/services/5.svg',
    tag: 'Let’s visualize your future app!',
    imageFirst: false,
  },
]

const cardAnimation = (direction = 'left') => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -90 : 90,
    y: 24,
    scale: 0.96,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
})

export default function DesignServices() {
  return (
    <section className="relative overflow-hidden bg-[#111521] py-[72px] md:py-[86px]">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6">
        <div className="mb-[56px]">
          <div className="mb-[34px] inline-flex h-[38px] items-center gap-2 rounded-[12px] border border-white/10 bg-white/[0.05] px-5 text-[15px] text-white/80">
             <Palette  className='text-secondary'/>
            Our Design Service
          </div>

          <h2 className="text-[36px] font-semibold tracking-[-0.03em] text-white md:text-[44px]">
            What we handle?
          </h2>
        </div>

        <div className="space-y-[48px]">
          {cards.map((card, index) => (
            <div key={index} className="relative">
              <div className="grid gap-[24px] md:grid-cols-2">
                <motion.div
                  variants={cardAnimation(card.imageFirst ? 'right' : 'left')}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  className={`relative min-h-[315px] rounded-[18px] bg-[#202532] px-8 py-9 md:px-[34px] ${
                    card.imageFirst ? 'md:order-2' : ''
                  }`}
                >
                  <div className="mb-5 text-[13px] text-white/50">
                    {card.step}
                  </div>

                  <h3 className="mb-6 max-w-[390px] text-[34px] font-semibold leading-[1.25] tracking-[-0.03em] text-white md:text-[42px]">
                    {card.title}
                  </h3>

                  <p className="max-w-[440px] text-[14px] leading-[1.7] text-white/55">
                    {card.text}
                  </p>
                </motion.div>

                <motion.div
                  variants={cardAnimation(card.imageFirst ? 'left' : 'right')}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: 0.08 }}
                  className={`min-h-[260px] overflow-hidden rounded-[18px] bg-[#202532] md:min-h-[315px] ${
                    card.imageFirst ? 'md:order-1' : ''
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>

              <div
                className={`absolute -top-[28px] z-20 ${
                  card.imageFirst
                    ? 'left-4 md:left-[calc(50%+36px)]'
                    : 'left-4'
                }`}
              >
                <div className="relative flex h-[46px] items-center gap-2 rounded-[10px] bg-secondary px-5 text-[13px] font-medium text-[#111521]">
                  {card.tag}
                  <ArrowUpRight size={15} />

                  <span className="absolute -bottom-[11px] left-[14px] h-0 w-0 border-l-[11px] border-r-[11px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#FEAC25]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}