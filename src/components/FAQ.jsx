'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide web development, mobile app development, UI/UX design, custom software solutions, e-commerce platforms, and ongoing technical support.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'The timeline depends on the project scope, but most projects are completed within 2–12 weeks.',
  },
  {
    question: 'Do you develop both websites and mobile applications?',
    answer:
      'Yes. We build responsive websites, web applications, and native & cross-platform mobile applications.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. We can modernize your existing website while preserving your content and improving performance.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      'Yes. Every project we build is fully responsive and optimized for all devices.',
  },
  {
    question: 'Do you provide website maintenance and support?',
    answer:
      'Yes, we provide maintenance, monitoring, updates, backups, and technical support.',
  },
  {
    question: 'How much does a custom software project cost?',
    answer:
      'Pricing depends on project complexity. Contact us for a free quotation.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We use React, Next.js, Laravel, Flutter, Node.js, .NET, MySQL, PostgreSQL, Firebase, AWS and more.',
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState([0])

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    )
  }

  const toggleAll = () => {
    setOpenItems((prev) =>
      prev.length === faqs.length ? [] : faqs.map((_, index) => index)
    )
  }

  const allOpened = openItems.length === faqs.length

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#111521] py-[90px] md:py-[110px]"
    >
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage: "url('/faq/faqbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[980px] px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-[42px] font-semibold text-[#77A6D0]">
            FAQ
          </h2>

          <p className="text-[18px] text-white/70">
            Frequently Asked Questions
          </p>
        </div>

        <div className="mb-5 flex justify-end">
          <button
            type="button"
            onClick={toggleAll}
            className="text-[14px] text-[#77A6D0] transition hover:text-white"
          >
            {allOpened ? 'Collapse all' : 'Expand all'}
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const opened = openItems.includes(index)

            return (
              <motion.div
                layout
                key={index}
                className="overflow-hidden rounded-[14px] border border-white/10 bg-[#202532]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-[15px] font-medium text-white">
                    {faq.question}
                  </h3>

                  {opened ? (
                    <X size={20} className="text-[#77A6D0]" />
                  ) : (
                    <Plus size={20} className="text-[#77A6D0]" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {opened && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 pr-12 text-[13px] leading-7 text-white/70">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}