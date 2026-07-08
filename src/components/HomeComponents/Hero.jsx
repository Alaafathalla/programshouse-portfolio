'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './../ui/button'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#111521] pt-[48px]">
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mainWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#77A6D0" stopOpacity="0.15" />
              <stop offset="35%" stopColor="#6EE7FF" stopOpacity="1" />
              <stop offset="68%" stopColor="#77A6D0" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#8A5CFF" stopOpacity="0.9" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M-60 430 C160 490 260 160 510 165 C760 170 780 500 1010 465 C1210 435 1235 285 1500 330"
            stroke="url(#mainWave)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
            animate={{
              d: [
                'M-60 430 C160 490 260 160 510 165 C760 170 780 500 1010 465 C1210 435 1235 285 1500 330',
                'M-60 420 C170 505 280 145 525 175 C775 205 795 480 1025 445 C1225 415 1245 300 1500 315',
                'M-60 430 C160 490 260 160 510 165 C760 170 780 500 1010 465 C1210 435 1235 285 1500 330',
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.path
            d="M-80 470 C170 530 300 230 535 245 C760 260 820 540 1050 515 C1240 495 1290 390 1510 405"
            stroke="#77A6D0"
            strokeWidth="2.5"
            fill="none"
            opacity="0.65"
            filter="url(#glow)"
            animate={{
              d: [
                'M-80 470 C170 530 300 230 535 245 C760 260 820 540 1050 515 C1240 495 1290 390 1510 405',
                'M-80 455 C170 510 315 215 545 235 C775 260 835 520 1060 495 C1250 475 1300 370 1510 390',
                'M-80 470 C170 530 300 230 535 245 C760 260 820 540 1050 515 C1240 495 1290 390 1510 405',
              ],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <path
            d="M-80 515 C180 545 330 345 555 370 C790 395 850 590 1080 560 C1270 535 1330 470 1510 480"
            stroke="#55CFFF"
            strokeWidth="2"
            fill="none"
            opacity="0.35"
          />

          <path
            d="M-80 390 C170 445 275 245 500 255 C720 265 820 405 1020 390 C1215 375 1280 245 1510 270"
            stroke="#355CFF"
            strokeWidth="1.6"
            fill="none"
            opacity="0.35"
          />

          <path
            d="M-60 560 C170 610 340 540 570 555 C790 570 890 650 1100 630 C1280 615 1350 555 1500 570"
            stroke="#8A5CFF"
            strokeWidth="2"
            fill="none"
            opacity="0.25"
          />

          {[
            [210, 420],
            [300, 365],
            [410, 245],
            [525, 170],
            [630, 210],
            [745, 335],
            [865, 455],
            [1015, 465],
            [1180, 400],
            [1290, 340],
            [1360, 355],
            [270, 500],
            [455, 305],
            [785, 505],
            [1080, 520],
            [1240, 495],
            [1325, 440],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r={i % 3 === 0 ? 4 : 2.4}
              fill={i > 11 ? '#182340' : '#80C4C7'}
              filter="url(#glow)"
              animate={{
                opacity: [0.25, 1, 0.25],
                scale: [0.8, 1.35, 0.8],
              }}
              transition={{
                duration: 2.5 + i * 0.12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.15,
              }}
            />
          ))}

          {Array.from({ length: 45 }).map((_, i) => (
            <motion.circle
              key={`star-${i}`}
              cx={(i * 97) % 1440}
              cy={170 + ((i * 53) % 390)}
              r={i % 4 === 0 ? 2 : 1.2}
              fill={i % 5 === 0 ? '#3D3E7A' : '#77A6D0'}
              opacity="0.55"
              animate={{ opacity: [0.15, 0.85, 0.15] }}
              transition={{
                duration: 2 + (i % 6),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </svg>

        <div className="absolute left-[28%] top-[18%] h-[420px] w-[420px] rounded-full bg-primary/20 blur-[110px]" />
        <div className="absolute right-[-120px] bottom-[18%] h-[460px] w-[460px] rounded-full bg-[#7B5CFF]/25 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(17,21,33,0.2)_45%,#111521_92%)]" />
      </div>

      <div className="relative z-10 mx-auto -mt-10 max-w-[900px] px-5 text-center">
        <motion.div
          className="mb-5 inline-flex h-[26px] items-center gap-2 rounded-full bg-[#F3F6FF] px-5 text-[11px] font-medium text-[#111521]"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="h-2 w-2 rounded-full bg-[#0E355D]" />
          Software Development Company
        </motion.div>

        <motion.h1
          className="mb-5 text-[clamp(48px,6vw,78px)] font-bold leading-[1.15] tracking-[-2px] text-white"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bring Your Idea
          <br />
          To <span className="text-primary">Life..</span>
        </motion.h1>

        <motion.p
          className="mb-7 text-[15px] font-medium leading-[1.65] text-white/70"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Build from scratch, reengineer, or support your software
          <br className="max-md:hidden" />
          solution with Program House.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button className="h-[50px] min-w-[185px] rounded-[12px] text-[14px]">
            Contact Us
          </Button>

          <Button
            variant="outline"
            className="h-[50px] min-w-[190px] rounded-[12px] border-white/70 bg-transparent text-[14px] text-white hover:bg-white hover:text-[#111521]"
          >
            Explore Portfolio
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}