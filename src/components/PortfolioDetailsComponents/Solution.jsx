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
                mb-[7px]
                text-[16px] font-semibold
                leading-[1.35]
                text-white
                transition-colors duration-300
                group-hover:text-primary
                sm:text-[17px]
                lg:text-[16px]
                xl:text-[17px]
              "
            >
              {solution.title}
            </h3>

            <p
              className="
                max-w-[390px]
                text-[13px]
                leading-[1.55]
                text-[#B3B3B3]
                sm:text-[14px]
                lg:text-[13px]
                xl:text-[14px]
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
        px-4 py-[62px]
        text-white
        sm:px-8 sm:py-[76px]
        lg:px-10 lg:py-[82px]
      "
    >
      <div
        className="
          pointer-events-none
          absolute right-[12%] top-1/2
          h-[260px] w-[260px]
          -translate-y-1/2
          rounded-full
          bg-primary/[0.035]
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
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
            text-[32px] font-bold
            leading-none
            tracking-[-0.045em]
            sm:text-[38px]
            lg:mb-11
            lg:text-[40px]
          "
        >
          The <span className="text-primary">Solution</span>
        </motion.h2>

        <div
          className="
            grid w-full
            items-stretch
            gap-10
            sm:gap-12
            lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)]
            lg:gap-[72px]
            xl:grid-cols-[minmax(0,620px)_minmax(340px,500px)]
            xl:justify-between
            xl:gap-[90px]
          "
        >
          {/* Image */}
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
            className="
              relative
              w-full
              lg:max-w-[610px]
              xl:max-w-[620px]
            "
          >
            <div
              className="
                pointer-events-none
                absolute inset-x-[15%] bottom-[-14px]
                h-[42px]
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
                lg:h-[440px]
                xl:h-[450px]
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

          {/* Cards */}
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
              lg:h-[440px]
              lg:max-w-[500px]
              lg:grid-rows-3
              lg:gap-4
              xl:h-[450px]
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