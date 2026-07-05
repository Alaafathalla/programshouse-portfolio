'use client'

import { motion } from 'framer-motion'

export default function BorderBeam() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="beamGradient" x1="0%" x2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="15%" stopColor="rgba(255,255,255,.15)" />
          <stop offset="45%" stopColor="white" />
          <stop offset="85%" stopColor="rgba(255,255,255,.15)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        <filter id="beamGlow">
          <feGaussianBlur stdDeviation="0.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <path
          id="cardPath"
          d="
          M10 0
          H90
          Q100 0 100 10
          V90
          Q100 100 90 100
          H10
          Q0 100 0 90
          V10
          Q0 0 10 0
          "
        />
      </defs>

      <motion.rect
        width="100%"
        height="100%"
        rx="18"
        ry="18"
        fill="none"
        stroke="rgba(255,255,255,.10)"
        strokeWidth="0.4"
      />

      <motion.rect
        width="100%"
        height="100%"
        rx="18"
        ry="18"
        fill="none"
        stroke="transparent"
        strokeWidth="0"
      />

      <motion.rect
        width="0"
        height="0"
        fill="none"
      />

      <motion.circle r="0">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          rotate="auto"
          path="
          M10 0
          H90
          Q100 0 100 10
          V90
          Q100 100 90 100
          H10
          Q0 100 0 90
          V10
          Q0 0 10 0
          "
        />

        <rect
          x="-40"
          y="-1"
          width="80"
          height="2"
          rx="1"
          fill="url(#beamGradient)"
          filter="url(#beamGlow)"
        />
      </motion.circle>
    </svg>
  )
}