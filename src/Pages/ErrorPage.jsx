'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Home, Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111521] px-5 py-16 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#77A6D0]/10 blur-[120px]" />

      {/* Decorative circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="pointer-events-none absolute left-[-160px] top-[-160px] h-[430px] w-[430px] rounded-full border border-[#77A6D0]/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="pointer-events-none absolute bottom-[-200px] right-[-170px] h-[500px] w-[500px] rounded-full border border-[#FEAC25]/10"
      />

      <section className="relative z-10 mx-auto w-full max-w-[900px] text-center">
        {/* Error number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mb-5"
        >
          <h1 className="select-none text-[110px] font-bold leading-none tracking-[-0.08em] text-white sm:text-[150px] md:text-[190px]">
            4<span className="text-[#77A6D0]">0</span>4
          </h1>

          <div className="absolute left-1/2 top-1/2 h-[22px] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111521]/65 blur-sm" />
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="mb-5 text-[30px] font-semibold tracking-[-0.03em] text-white sm:text-[38px] md:text-[46px]"
        >
          This page not Found 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="mx-auto mb-10 max-w-[620px] text-[14px] leading-[1.8] text-white/60 sm:text-[16px]"
        >
          The page you are looking for may have been moved, renamed, or is
          temporarily unavailable. Let&apos;s help you get back on track.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/"
            className="group inline-flex h-[52px] min-w-[190px] items-center justify-center gap-3 rounded-[12px] bg-[#77A6D0] px-7 text-[14px] font-semibold text-[#111521] transition duration-300 hover:-translate-y-1 hover:bg-[#8AB5DB] hover:shadow-[0_16px_40px_rgba(119,166,208,.25)]"
          >
            <Home size={18} />
            Back to Home
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex h-[52px] min-w-[190px] items-center justify-center gap-3 rounded-[12px] border border-white/15 bg-white/[0.04] px-7 text-[14px] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#77A6D0]/45 hover:bg-white/[0.07]"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Previous Page
          </button>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="mx-auto mt-14 flex max-w-[530px] items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
            Programs House
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </motion.div>
      </section>
    </main>
  )
}