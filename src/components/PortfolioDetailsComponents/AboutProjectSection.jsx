import { motion } from "framer-motion";
import { Lightbulb, Smile, Star } from "lucide-react";

const cards = {
  idea: {
    title: "The Idea",
    description:
      "A healthcare platform designed to simplify the process of finding and purchasing medicines. Users can search for medications, instantly check availability in nearby pharmacies, and order them online, eliminating the need to visit multiple pharmacies or make numerous phone calls.",
    icon: Lightbulb,
    iconPosition: "right",
  },

  client: {
    title: "The Client",
    description:
      "An Egyptian doctor dedicated to improving access to medicines after witnessing the difficulties patients faced in finding the treatments they needed.",
    icon: Smile,
    iconPosition: "top",
  },

  value: {
    title: "The Value",
    description:
      "The platform simplifies access to medicines by helping patients quickly locate available products, compare nearby pharmacies, and complete their purchases with ease, saving both time and effort.",
    icon: Star,
    iconPosition: "right",
  },
};

const motionEase = [0.22, 1, 0.36, 1];

function InfoCard({ card, className = "", contentClassName = "" }) {
  const Icon = card.icon;
  const isTopIcon = card.iconPosition === "top";

  return (
    <article
      className={`
        relative
        w-full
        overflow-visible
        rounded-[14px]
        border
        border-[#77A6D0]/70
        bg-[#111521]
        ${className}
      `}
    >
      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          z-[2]
          bg-[#111521]
          ${
            isTopIcon
              ? "right-[27px] top-[-2px] h-[5px] w-[58px]"
              : "right-[-2px] top-1/2 h-[62px] w-[5px] -translate-y-1/2"
          }
        `}
      />

      <div
        className={`
          absolute
          z-10
          flex
          items-center
          justify-center
          bg-[#111521]
          ${
            isTopIcon
              ? "right-[32px] top-[-18px] h-[40px] w-[46px]"
              : "right-[-20px] top-1/2 h-[50px] w-[40px] -translate-y-1/2"
          }
        `}
      >
        <Icon
          size={isTopIcon ? 38 : 43}
          strokeWidth={1.8}
          className="text-[#FEAC25]"
        />
      </div>

      <div
        className={`
          flex
          h-full
          flex-col
          px-[22px]
          py-[22px]
          pr-[46px]
          sm:px-[26px]
          sm:py-[24px]
          sm:pr-[50px]
          xl:px-[28px]
          xl:py-[25px]
          xl:pr-[54px]
          ${contentClassName}
        `}
      >
        <h3 className="mb-[10px] text-[16px] font-semibold leading-none tracking-[-0.025em] text-white sm:text-[17px]">
          {card.title}
        </h3>

        <p className="max-w-[560px] text-[13px] leading-[1.58] text-white/70 sm:text-[14px] xl:text-[15px]">
          {card.description}
        </p>
      </div>
    </article>
  );
}

function LeftProjectImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.85,
        ease: motionEase,
      }}
      className="
        relative
        h-[300px]
        w-full
        overflow-hidden
        rounded-[15px]
        bg-[#1B202C]
        sm:h-[350px]
        lg:h-full
      "
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[290px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#77A6D0]/[0.035] blur-[75px]" />

      <img
        src="/images/portfolioDetailsPage/image 301.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="
          pointer-events-none
          absolute
          left-[53%]
          top-[52%]
          z-0
          h-auto
          w-[106%]
          max-w-none
          -translate-x-1/2
          -translate-y-1/2
          select-none
          object-contain

          sm:left-[53%]
          sm:top-[52%]
          sm:w-[105%]

          lg:left-[59%]
          lg:top-[80%]
          lg:w-[178%]
  

          xl:left-[55%]
          xl:top-[71%]
          xl:w-[125%]
        "
      />

      <img
        src="/images/portfolioDetailsPage/iPhone 16 Pro.png"
        alt="Medicine search application screens"
        draggable={false}
        className="
          absolute
          bottom-[-8px]
          left-[46%]
          z-10
          h-[89%]
          w-auto
          max-w-none
          -translate-x-1/2
          select-none
          object-contain

          sm:left-[46%]
          sm:h-[91%]

          lg:bottom-[10px]
          lg:left-[46%]
          lg:h-[99%]

          xl:h-[99%]
        "
      />
    </motion.div>
  );
}

function RightProjectImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.85,
        ease: motionEase,
      }}
      className="
        relative
        h-[470px]
        w-full
        overflow-hidden
        rounded-[15px]
        bg-[#1B202C]
        sm:h-[590px]
        lg:h-full
      "
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#77A6D0]/[0.045] blur-[90px]" />

      <img
        src="/images/portfolioDetailsPage/image 173.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="
          pointer-events-none
          absolute
          left-[52%]
          top-[30%]
          z-0
          h-auto
          w-[105%]
          max-w-none
          -translate-x-1/2
          -translate-y-1/2
          select-none
          object-contain

          sm:left-[52%]
          sm:top-[47%]
          sm:w-[108%]

          lg:left-[47%]
          lg:top-[46%]
          lg:w-[118%]

          xl:left-[55%]
          xl:top-[22%]
          xl:w-[114%]
        "
      />

      <img
        src="/images/portfolioDetailsPage/iPhone 13 Pro.png"
        alt="Healthcare application home screen"
        draggable={false}
        className="
          absolute
          bottom-[-3px]
          left-1/2
          z-10
          h-[84%]
          w-auto
          max-w-none
          -translate-x-1/2
          select-none
          object-contain

          sm:h-[86%]

          lg:bottom-[30px]
          lg:h-[104%]

          xl:bottom-[9px]
          xl:h-[101%]
        "
      />
    </motion.div>
  );
}

export default function AboutProjectSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#111521] px-4 py-[55px] text-white sm:px-8 sm:py-[65px] lg:px-10 lg:py-[68px]">
      <div className="pointer-events-none absolute left-[18%] top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-[#77A6D0]/[0.025] blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <h2
          className="
            mb-[32px]
            text-[30px]
            font-bold
            leading-none
            tracking-[-0.045em]
            sm:text-[36px]
            lg:mb-[34px]
            lg:text-[38px]
          "
        >
          About The <span className="text-[#77A6D0]">Project</span>
        </h2>

        {/* Mobile and tablet */}
        <div className="grid gap-[18px] lg:hidden">
          <InfoCard
            card={cards.idea}
            className="min-h-[225px]"
            contentClassName="justify-center"
          />

          <InfoCard
            card={cards.client}
            className="min-h-[165px]"
            contentClassName="justify-center"
          />

          <InfoCard
            card={cards.value}
            className="min-h-[190px]"
            contentClassName="justify-center"
          />

          <LeftProjectImage />

          <RightProjectImage />
        </div>

        {/* Desktop */}
        <div
          className="
            hidden
            w-full
            items-stretch
            gap-x-[44px]
            lg:grid
            lg:grid-cols-2
            xl:gap-x-[54px]
          "
        >
          {/* Left column */}
          <div
            className="
              grid
              h-full
              min-w-0
              grid-rows-[190px_150px_300px]
              gap-y-[18px]
              xl:grid-rows-[190px_150px_320px]
            "
          >
            <InfoCard
              card={cards.idea}
              className="h-full"
              contentClassName="justify-center"
            />

            <InfoCard
              card={cards.value}
              className="h-full"
              contentClassName="justify-center"
            />

            <LeftProjectImage />
          </div>

          {/* Right column */}
          <div
            className="
              grid
              h-full
              min-w-0
              grid-rows-[140px_518px]
              gap-y-[18px]
              xl:grid-rows-[140px_538px]
            "
          >
            <InfoCard
              card={cards.client}
              className="h-full"
              contentClassName="justify-center"
            />

            <RightProjectImage />
          </div>
        </div>
      </div>
    </section>
  );
}