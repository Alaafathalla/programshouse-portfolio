'use client'

import { motion } from 'framer-motion'

export default function Innovation() {
  return (
    <section className="relative overflow-hidden  py-[95px] md:py-[120px]">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6">
 <motion.img
  src="/images/services/1.svg"
  alt=""
  className="
    absolute
    left-[-40px]
    top-0
    w-[220px]
    sm:w-[250px]
    md:left-0
    md:w-[300px]
    lg:w-[250px]
  "
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
/>

        <div className="relative z-10 max-w-[520px] md:ml-[120px]">
          <h2 className="mb-4 text-[34px] font-bold leading-[1.35] tracking-[-0.03em] text-white md:text-[48px]">
            Choose Innovation,
            <br />
            Build the <span className="text-primary">Future.</span>
          </h2>

          <p className="max-w-[430px] text-[15px] font-normal leading-[1.65] text-white/80 md:text-[16px]">
            Our rich design and technology expertise delivers top brands and
            digital experiences.
          </p>
        </div>

        <motion.img
          src="images/services/2.svg"
          alt=""
          className="relative z-10 hidden w-[450px] md:block lg:w-[450px]"
   animate={{ rotate: 360 }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: 'linear',
  }}
        />
      </div>

    
   <motion.img
  src="/images/services/2.svg"
  alt=""
  className="relative z-10 mx-auto mt-12 block w-[260px] md:hidden"
  animate={{ rotate: 360 }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: 'linear',
  }}
/>
   
    </section>
  )
}