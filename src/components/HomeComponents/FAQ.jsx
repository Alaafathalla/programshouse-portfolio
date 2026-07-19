"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web development, mobile app development, UI/UX design, custom software solutions, e-commerce platforms, and ongoing technical support.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the project scope, but most projects are completed within 2–12 weeks.",
  },
  {
    question: "Do you develop both websites and mobile applications?",
    answer:
      "Yes. We build responsive websites, web applications, and native & cross-platform mobile applications.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can modernize your existing website while preserving your content and improving performance.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Every project we build is fully responsive and optimized for all devices.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, we provide maintenance, monitoring, updates, backups, and technical support.",
  },
  {
    question: "How much does a custom software project cost?",
    answer:
      "Pricing depends on project complexity. Contact us for a free quotation.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use React, Next.js, Laravel, Flutter, Node.js, .NET, MySQL, PostgreSQL, Firebase, AWS and more.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState([0]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const toggleAll = () => {
    setOpenItems((prev) =>
      prev.length === faqs.length ? [] : faqs.map((_, index) => index)
    );
  };

  const allOpened = openItems.length === faqs.length;

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#111521] py-[90px] md:py-[110px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 0.45, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/faq/faqbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[980px] px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center"
        >
          <SectionHeading
            label="FAQ"
            className="mb-3 text-[42px] font-semibold text-primary"
          />

          <p className="text-[18px] text-white/70">
            Frequently Asked Questions
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-5 flex justify-end"
        >
          <button
            type="button"
            onClick={toggleAll}
            className="text-[14px] text-primary transition hover:text-white"
          >
            {allOpened ? "Collapse all" : "Expand all"}
          </button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const opened = openItems.includes(index);

            return (
              <motion.div
                layout
                variants={itemVariants}
                key={faq.question}
                className="overflow-hidden rounded-[14px] border border-white/10 bg-[#202532]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  aria-expanded={opened}
                >
                  <h3 className="text-[15px] font-medium text-white">
                    {faq.question}
                  </h3>

                  <motion.span
                    animate={{
                      rotate: opened ? 90 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="shrink-0"
                  >
                    {opened ? (
                      <X size={20} className="text-primary" />
                    ) : (
                      <Plus size={20} className="text-primary" />
                    )}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {opened && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                    >
                      <motion.p
                        initial={{
                          y: -8,
                          opacity: 0,
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.08,
                        }}
                        className="px-6 pb-6 pr-12 text-[13px] leading-7 text-white/70"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}