import { motion } from "framer-motion";
import { Lightbulb, Quote } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const review = {
  text:
    "Propel let us spin up a new product in hours instead of weeks. It’s exactly what we needed as a company that deeply values developer velocity and joy. Propel let us spin",
  name: "DANIEL BRIGGS",
  role: "Co-Founder",
  avatar: "/images/avatar.svg",
};

export default function ClientReviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#111521] px-5 py-[70px] text-white sm:px-8 sm:py-[90px] lg:px-10">
      <div className="mx-auto w-full max-w-[1280px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-[42px] text-[30px] font-bold leading-none tracking-[-0.045em] sm:text-[38px]"
        >
          Client&apos;s <span className="text-primary">Review</span>
        </motion.h2>

        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-[70px]">
          {/* Left bordered review area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative pb-[28px]"
          >
            {/* Main border */}
            <div className="relative min-h-[260px] rounded-[18px] border border-white/[0.13] px-5 py-10 sm:px-8 sm:py-[38px] lg:min-h-[270px] lg:px-[50px]">
              {/* Top-right colored stepped shape */}
              <div className="pointer-events-none absolute right-[-1px] top-[-1px] hidden h-[57px] w-[65px] lg:block">
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 72% 100%, 72% 48%, 0 48%)",
                    background:
                      "linear-gradient(135deg, rgba(255,224,190,0.72) 0%, rgba(155,148,210,0.65) 32%, rgba(57,62,113,0.95) 72%, #111521 100%)",
                    boxShadow: "0 0 24px rgba(134,129,215,0.4)",
                  }}
                />

                <div className="absolute bottom-0 right-0 h-[31px] w-[19px] rounded-bl-[9px] border-b border-l border-[#747CC6]/60" />
              </div>

              {/* Bottom-left colored stepped shape */}
              <div className="pointer-events-none absolute bottom-[-1px] left-[-1px] hidden h-[57px] w-[65px] overflow-hidden lg:block">
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 72% 100%, 72% 48%, 0 48%)",
                    transform: "rotate(180deg)",
                    transformOrigin: "center",
                    background:
                      "linear-gradient(135deg, #bea174 0%, #262A972E 18%, #f3b660 72%, #3c3e46 100%)",
                    boxShadow: "0 0 24px rgba(255,181,67,0.35)",
                    borderRadius: "0 0 0 12px",
                  }}
                />

                <div
                  className="absolute left-0 top-0 h-[31px] w-[19px] rounded-tr-[9px]"
                  style={{
                    borderTop: "1px solid rgba(255,181,67,0.45)",
                    borderRight: "1px solid rgba(255,181,67,0.45)",
                  }}
                />
              </div>

              {/* Review card */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="relative z-10 w-full rounded-[8px] border border-[#586077]/70 bg-[#151B29] px-4 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.025)] sm:px-5 sm:py-6"
              >
                <div className="mb-4 flex items-start justify-between gap-5">
                  <Quote
                    size={42}
                    strokeWidth={2.8}
                    className="rotate-180 fill-white text-white"
                  />
                </div>

                <p className="max-w-[610px] text-[13px] leading-[1.65] text-white/95 sm:text-[14px]">
                  {review.text}
                </p>

                <div className="my-[15px] h-px bg-white/[0.07]" />

                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-[37px] w-[37px] rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-[13px] font-semibold leading-none tracking-[0.015em] text-primary">
                      {review.name}
                    </h3>

                    <p className="mt-[6px] text-[8px] leading-none text-white/60">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Gap in border behind lightbulb */}
              <div className="pointer-events-none absolute bottom-[-3px] right-[18px] z-20 h-[9px] w-[78px] bg-[#111521]" />

              {/* Lightbulb clipped into bottom-right border */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [-8, 8, -8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[-23px] right-[31px] z-30 flex items-center justify-center text-[#FEAC25]"
              >
                <Lightbulb size={43} strokeWidth={2.3} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center text-center lg:items-center lg:text-center"
          >
            <h3 className="max-w-[420px] text-[28px] font-bold leading-[1.35] tracking-[-0.045em] sm:text-[34px] lg:text-[31px]">
              <span className="bg-gradient-to-r from-[#FEAC25] via-[#E7B67E] to-[#B4B8D4] bg-clip-text text-transparent">
                Do your business
              </span>

              <span className="mt-1 block bg-gradient-to-r from-[#BBC5DD] via-[#9FB0D1] to-[#6F9BD5] bg-clip-text text-transparent">
                goals look the same?
              </span>
            </h3>

            <HashLink
              smooth
              to="/#contact"
              className="mt-[27px] inline-flex h-[40px] w-fit items-center justify-center rounded-[6px] bg-[#F4F6FC] px-8 text-[14px] font-medium text-[#111521] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_30px_rgba(255,255,255,0.16)]"
            >
               Let&apos;s discuss them
            </HashLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}