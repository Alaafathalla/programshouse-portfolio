import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseMedical,
  Search,
  UserRoundCheck,
} from "lucide-react";

const goals = [
  {
    id: 1,
    title: "Simplify Medicine Search",
    description:
      "Help users quickly find medicines and healthcare products without visiting multiple pharmacies.",
    icon: Search,
  },
  {
    id: 2,
    title: "Find Nearby Pharmacies",
    description:
      "Show the closest pharmacies that have the selected product available.",
    icon: BriefcaseMedical,
  },
  {
    id: 3,
    title: "Create Flexible Shopping Flow",
    description:
      "Allow users to start either by searching for a product or by choosing a preferred pharmacy first.",
    icon: BadgeCheck,
  },
  {
    id: 4,
    title: "Improve User Convenience",
    description:
      "Save users time and effort by making pharmacy shopping easier, faster, and more reliable.",
    icon: UserRoundCheck,
  },
];

const motionEase = [0.22, 1, 0.36, 1];

export default function ProjectGoalsSection() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[#111521] px-4 py-[70px]
        text-white
        sm:px-8 sm:py-[90px]
        lg:px-10 lg:py-[105px]
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[12%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/[0.035] blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] overflow-visible">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.7,
            ease: motionEase,
          }}
          className="
            mb-12 text-[34px] font-bold
            leading-none tracking-[-0.045em]
            sm:text-[42px]
            lg:mb-14
          "
        >
          The <span className="text-primary">Goals</span>
        </motion.h2>

        <div
          className="
            grid w-full items-center
            gap-16 overflow-visible
            lg:grid-cols-[0.86fr_1.14fr]
            lg:gap-[70px]
          "
        >
          {/* Goals stepper */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: motionEase,
            }}
            className="relative w-full"
          >
            <ol className="relative">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                const isLast = index === goals.length - 1;

                return (
                  <motion.li
                    key={goal.id}
                    initial={{
                      opacity: 0,
                      x: -28,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.55,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 + index * 0.1,
                      ease: motionEase,
                    }}
                    className={`
                      group relative
                      grid grid-cols-[42px_minmax(0,1fr)]
                      items-start gap-4
                      sm:grid-cols-[44px_minmax(0,1fr)]
                      sm:gap-5
                      ${isLast ? "" : "pb-8 sm:pb-9"}
                    `}
                  >
                    {/* Step rail */}
                    <div className="relative flex h-full min-h-[44px] justify-center">
                      {/* Separate connector with space above and below */}
                      {!isLast && (
                        <motion.div
                          initial={{
                            scaleY: 0,
                            opacity: 0,
                          }}
                          whileInView={{
                            scaleY: 1,
                            opacity: 1,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.7,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: 0.28 + index * 0.1,
                            ease: motionEase,
                          }}
                          className="
                            pointer-events-none
                            absolute left-1/2
                            top-[48px]
                            bottom-[-24px]
                            w-[2px]
                            -translate-x-1/2
                            origin-top
                            rounded-full
                            sm:top-[50px]
                            sm:bottom-[-27px]
                          "
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(221, 216, 216, 0.8), rgba(177, 180, 184, 0.55), rgba(255, 255, 255, 0.32))",
                          }}
                        />
                      )}

                      {/* Step icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 4,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="
                          relative z-10
                          flex h-[40px] w-[40px]
                          shrink-0 items-center justify-center
                          rounded-full
                          border border-[#A6C9E9]/55
                          bg-[#77A6D0]
                          shadow-[0_8px_22px_rgba(119,166,208,0.2)]
                          transition-shadow duration-300
                          group-hover:shadow-[0_10px_28px_rgba(119,166,208,0.32)]
                          sm:h-[42px] sm:w-[42px]
                        "
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          className="text-white"
                        />
                      </motion.div>
                    </div>

                    {/* Step content */}
                    <div className="min-w-0 pt-[1px]">
                      <h3
                        className="
                          text-[16px] font-semibold
                          leading-[1.4] text-white
                          transition-colors duration-300
                          group-hover:text-primary
                          sm:text-[18px]
                        "
                      >
                        {goal.title}
                      </h3>

                      <p
                        className="
                          mt-2 max-w-[620px]
                          text-[12px] leading-[1.65]
                          text-white/45
                          sm:text-[13px]
                        "
                      >
                        {goal.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 65 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: motionEase,
            }}
            className="
              relative mx-auto
              w-full max-w-[590px]
              overflow-visible
              lg:mx-0 lg:ml-auto
            "
          >
            {/* Image glow */}
            <div className="pointer-events-none absolute inset-x-[12%] bottom-[-18px] h-[70px] rounded-full bg-primary/10 blur-[40px]" />

            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.35,
                ease: motionEase,
              }}
              className="relative overflow-visible"
            >
              {/* Image wrapper */}
              <div className="relative overflow-hidden rounded-[18px] bg-[#1A2030] shadow-[0_28px_65px_rgba(0,0,0,0.34)]">
                <img
                  src="/images/portfolioDetailsPage/goal.png"
                  alt="User finding medicine through a mobile application"
                  className="aspect-[1.03/1] w-full object-cover"
                  draggable={false}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111521]/28 via-transparent to-transparent" />
              </div>

              {/* Floating search label */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.65,
                }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: 0.55,
                    ease: motionEase,
                  },
                  x: {
                    duration: 0.6,
                    delay: 0.55,
                    ease: motionEase,
                  },
                  y: {
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  absolute left-[-12px] top-[54%] z-20
                  flex min-h-[48px]
                  w-[88%] max-w-[380px]
                  items-center gap-3
                  rounded-full
                  border border-white/10
                  bg-[#8B8F98]/80
                  px-5 py-3
                  shadow-[0_18px_40px_rgba(0,0,0,0.25)]
                  backdrop-blur-[10px]
                  sm:left-[-22px]
                  lg:left-[-32px]
                "
              >
                <Search
                  size={17}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#111521]"
                />

                <p className="text-[12px] font-medium text-[#111521]/85 sm:text-[13px]">
                  App to help patients find medications
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}