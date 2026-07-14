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
        x: 32,
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
      className="
        group relative flex h-full
        rounded-[18px]
        border border-[#77A6D0]/55
        bg-[#111521]
        px-5 py-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#77A6D0]
        hover:bg-white/[0.02]
        sm:px-6 sm:py-7
      "
    >
      <div className="flex items-start gap-3">
        <span
          className="
            mt-[8px] h-[7px] w-[7px]
            shrink-0 rounded-full
            bg-white
            shadow-[0_0_8px_rgba(255,255,255,0.45)]
          "
        />

        <div>
          <h3
            className="
              mb-2 text-[18px] font-semibold
              leading-[1.4] text-white
              transition-colors duration-300
              group-hover:text-primary
              sm:text-[21px]
            "
          >
            {solution.title}
          </h3>

          <p
            className="
              max-w-[430px]
              text-[17px] leading-[1.7]
              text-[#B3B3B3]
              sm:text-[17px]
            "
          >
            {solution.description}
          </p>
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
        bg-[#111521] px-4 py-[70px]
        text-white
        sm:px-8 sm:py-[90px]
        lg:px-10 lg:py-[105px]
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute
          right-[12%] top-1/2
          h-[300px] w-[300px]
          -translate-y-1/2
          rounded-full
          bg-primary/[0.035]
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            x: -45,
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
            mb-12 text-[34px] font-bold
            leading-none tracking-[-0.045em]
            sm:text-[42px]
            lg:mb-14
          "
        >
          The <span className="text-primary">Solution</span>
        </motion.h2>

        <div
          className="
            grid w-full items-stretch
            gap-16
         lg:grid-cols-[58%_42%]
lg:gap-14
xl:gap-20
          "
        >
          {/* Left image */}
   <motion.div
  initial={{
    opacity: 0,
    x: -55,
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
  className="flex"
>
  <div
    className="
      relative
      w-[88%]
      lg:w-[86%]
      xl:w-[82%]
      overflow-hidden
      rounded-[18px]
      bg-[#1A2030]
      shadow-[0_28px_65px_rgba(0,0,0,0.34)]
      min-h-[360px]
      sm:min-h-[420px]
      lg:h-full
    "
  >
    <img
      src="/images/portfolioDetailsPage/solution.png"
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  </div>
</motion.div>

          {/* Right cards */}
          <motion.div
            initial={{
              opacity: 0,
              x: 55,
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
            className="grid h-full grid-rows-3 gap-6"
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