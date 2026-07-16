import { motion } from 'framer-motion'

export default function SectionHeading({
  label,
  highlight,
  className = '',
  highlightClassName = 'text-primary',
  ...props
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`text-[32px] font-extrabold leading-none tracking-[-0.03em] text-white ${className}`}
      {...props}
    >
      {label}
      {highlight ? <span className={highlightClassName}>{highlight}</span> : null}
    </motion.h2>
  )
}
