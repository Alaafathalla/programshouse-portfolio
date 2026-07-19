import { motion } from "framer-motion";

const solutions = [
  {
    id: 1,
    title: "Unified Pharmacy Platform",
    description:
      "A single destination for discovering medicines, healthcare products, and nearby pharmacies without unnecessary steps.",
  },
  {
    id: 2,
    title: "Seamless Purchase Flow",
    description:
      "From product selection to payment confirmation, the experience is designed to be fast, simple, and user-friendly.",
  },
  {
    id: 3,
    title: "Smart Search & Selection",
    description:
      "Users can search for products, compare nearby pharmacies, and choose the most convenient option.",
  },
];

const motionEase = [0.22, 1, 0.36, 1];

function SolutionCard({ solution, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: 28,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.58,
        delay: 0.12 + index * 0.1,
        ease: motionEase,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group relative flex
        min-h-[118px]
        overflow-hidden
        rounded-[16px]
        border border-[#77A6D0]/55
        bg-[#111521]
        transition-colors duration-300
        hover:border-[#77A6D0]
        hover:bg-white/[0.02]
        sm:min-h-[126px]
        lg:min-h-0
      "
    >
      <div
        className="
          flex h-full w-full
          items-center
          px-5 py-5
          sm:px-6 sm:py-5
          lg:px-6 lg:py-4
          xl:px-7
        "
      >
        <div className="flex w-full items-start gap-3">
          <span
            className="
              mt-[7px]
              h-[6px] w-[6px]
              shrink-0
              rounded-full
              bg-white
              shadow-[0_0_7px_rgba(255,255,255,0.5)]
            "
          />

          <div className="min-w-0">
            <h3
              className="
                mb-[8px]
                text-[18px] font-semibold
                leading-[1.35]
                text-white
                transition-colors duration-300
                group-hover:text-primary
                sm:text-[19px]
                lg:text-[18px]
                xl:text-[19px]
              "
            >
              {solution.title}
            </h3>

            <p
              className="
                max-w-[420px]
                text-[14px]
                leading-[1.6]
                text-[#B3B3B3]
                sm:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              {solution.description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectSolutionSection() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[#111521]
        px-4 py-[70px]
        text-white
        sm:px-8 sm:py-[80px]
        lg:px-10 lg:py-[90px]
      "
    >
      <div
        className="
          pointer-events-none
          absolute right-[12%] top-1/2
          h-[220px] w-[330px]
          -translate-y-1/2
          rounded-full
          bg-primary/[0.035]
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <motion.h2
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.7,
            ease: motionEase,
          }}
          className="
            mb-10
            text-[34px] font-bold
            leading-none
            tracking-[-0.045em]
            sm:text-[40px]
            lg:mb-11
            lg:text-[42px]
          "
        >
          The <span className="text-primary">Solution</span>
        </motion.h2>

        <div
          className="
            grid w-full
            items-stretch
            gap-4
            sm:gap-5
            lg:grid-cols-[1.2fr_1fr]
            lg:gap-20
            xl:grid-cols-[1.3fr_1fr]
            xl:gap-35
          "
        >
          {/* Image Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: motionEase,
            }}
            className="relative w-full"
          >
            <div
              className="
                pointer-events-none
                absolute inset-x-[15%] bottom-[-14px]
                h-[32px]
                rounded-full
                bg-primary/10
                blur-[38px]
              "
            />

            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.35,
                ease: motionEase,
              }}
              className="
                relative
                aspect-[1.07/1]
                w-full
                overflow-hidden
                rounded-[16px]
                shadow-[0_24px_55px_rgba(0,0,0,0.3)]
                sm:aspect-[1.2/1]
                lg:aspect-auto
                lg:h-[500px]
                xl:h-[520px]
              "
            >
              <img
                src="/images/portfolioDetailsPage/solution.png"
                alt="Healthcare application solution screens"
                draggable={false}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover object-center
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111521]/18 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Cards Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: motionEase,
            }}
            className="
              grid w-full
              grid-cols-1
              gap-4
              sm:gap-5
              lg:h-[510px]
              lg:grid-rows-3
              lg:gap-4
              xl:h-[520px]
            "
          >
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}