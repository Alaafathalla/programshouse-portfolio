'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'Tasheel HR Company', logo: '/partners/tasheel.png' },
  { name: 'Dolphin Print', logo: '/partners/dolphin.png' },
  { name: 'My Dose', logo: '/partners/mydose.png' },
  { name: 'Medical Islands', logo: '/partners/medical-islands.png' },
  { name: 'Al Qaswa Group Travel', logo: '/partners/qaswa.png' },
  { name: 'MS', logo: '/partners/ms.png' },
]

const firstRow = [...partners, ...partners]
const secondRow = [...partners].reverse().concat([...partners].reverse())

function PartnerCard({ partner }) {
  return (
    <div className="flex h-[108px] min-w-[260px] items-center justify-center rounded-[12px] border border-white/15 bg-[#20242F] px-8">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-[66px] max-w-[145px] object-contain brightness-0 invert"
      />
    </div>
  )
}

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-[#111521] py-[72px]">
      <div className="mb-[48px] text-center">
        <motion.h2
          className="text-[40px] font-extrabold leading-none text-white"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Partners in <span className="text-[#77A6D0]">Success</span>
        </motion.h2>
      </div>

      <div className="relative space-y-[28px]">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[160px] bg-gradient-to-r from-[#111521] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[160px] bg-gradient-to-l from-[#111521] to-transparent" />

        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-[24px]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 28,
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
            className="flex w-max gap-[24px]"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              duration: 28,
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