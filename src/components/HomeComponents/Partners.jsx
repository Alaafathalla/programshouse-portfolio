'use client'

import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const partners = [
  { name: 'Tasheel HR Company', logo: '/images/partners/Tasheel.svg' },
  { name: 'Dolphin Print', logo: '/images/partners/Dolphine.svg' },
  { name: 'MSE', logo: '/images/partners/MSE.svg' },
  { name: 'Medical Islands', logo: '/images/partners/Medical Islands.svg' },
  { name: 'Qaswa', logo: '/images/partners/Qaswaa.svg' },
  { name: 'MS', logo: '/images/partners/M&S.svg' },
]

const firstRow = [...partners, ...partners, ...partners]
const secondRow = [...partners].reverse().concat([...partners].reverse(), [...partners].reverse())

function PartnerCard({ partner }) {
  return (
    <div className="flex h-[120px] min-w-[230px] items-center justify-center rounded-[8px] border border-white/10 bg-[#20242F]  px-8 md:h-[150px] md:min-w-[340px]">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-[58px] max-w-[150px] object-contain md:max-h-[68px] md:max-w-[170px]"
      />
    </div>
  )
}

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-[#111521] py-[70px] md:py-[92px]">
      <div className="mb-[36px] text-center md:mb-[48px]">
        <SectionHeading
          label="Partners in "
          highlight="Success"
          className="text-[30px] font-extrabold leading-none text-white md:text-[40px]"
        />
      </div>

      <div className="relative space-y-[18px] md:space-y-[28px]">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[70px] bg-gradient-to-r from-[#111521] to-transparent md:w-[180px]" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[70px] bg-gradient-to-l from-[#111521] to-transparent md:w-[180px]" />

        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-[18px] md:gap-[24px]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {firstRow.map((partner, index) => (
              <PartnerCard key={`top-${index}`} partner={partner} />
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-[18px] md:gap-[24px]"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {secondRow.map((partner, index) => (
              <PartnerCard key={`bottom-${index}`} partner={partner} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}