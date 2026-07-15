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

const revealAnimation = {
  initial: {
    opacity: 0,
    y: 22,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

function InfoCard({
  card,
  delay = 0,
  className = "",
  contentClassName = "",
}) {
  const Icon = card.icon;
  const isTopIcon = card.iconPosition === "top";

  return (
    <motion.article
      {...revealAnimation}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative
        overflow-visible
        rounded-[12px]
        border
        border-[#77A6D0]/70
        bg-[#111521]
        ${className}
      `}
    >
      {/* Hide border behind icon */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          z-[2]
          bg-[#111521]
          ${
            isTopIcon
              ? "right-[27px] top-[-2px] h-[5px] w-[52px]"
              : "right-[-2px] top-1/2 h-[58px] w-[5px] -translate-y-1/2"
          }
        `}
      />

      {/* Animated icon */}
      <motion.div
        animate={
          isTopIcon
            ? {
                y: [0, -3, 0],
              }
            : {
                rotate: [0, -5, 5, 0],
              }
        }
        transition={{
          duration: isTopIcon ? 3.2 : 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          z-10
          flex
          items-center
          justify-center
          bg-[#111521]
          ${
            isTopIcon
              ? "right-[31px] top-[-17px] h-[38px] w-[44px]"
              : "right-[-20px] top-1/2 h-[46px] w-[40px] -translate-y-1/2"
          }
        `}
      >
        <Icon
          size={isTopIcon ? 25 : 29}
          strokeWidth={1.8}
          className="text-[#FEAC25]"
        />
      </motion.div>

      {/* Content */}
      <div
        className={`
          flex
          h-full
          flex-col
          px-[26px]
          py-[22px]
          pr-[45px]
          xl:px-[30px]
          xl:pr-[48px]
          ${contentClassName}
        `}
      >
        <h3 className="mb-[10px] text-[16px] font-medium leading-none tracking-[-0.025em] text-white xl:text-[17px]">
          {card.title}
        </h3>

        <p className="max-w-[430px] text-[18px] leading-[1.55] text-[#B7B9C1] xl:text-[15px]">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

function ProjectImage({
  src,
  alt,
  delay = 0,
  className = "",
  imageClassName = "",
}) {
  return (
    <motion.div
      {...revealAnimation}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
      }}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-[12px]
        ${className}
      `}
    >
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        whileHover={{
          scale: 1.008,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className={`
          block
          h-auto
          w-full
          select-none
          ${imageClassName}
        `}
      />
    </motion.div>
  );
}

export default function AboutProjectSection() {
  return (
    <section className="relative overflow-hidden bg-[#111521] px-5 py-[58px] text-white sm:px-8 sm:py-[72px] lg:px-10 lg:py-[76px]">
      <div className="relative mx-auto w-full max-w-[1120px]">
        <motion.h2
          {...revealAnimation}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-[34px]
            text-[30px]
            font-bold
            leading-none
            tracking-[-0.04em]
            sm:text-[34px]
            lg:text-[36px]
          "
        >
          About The <span className="text-[#77A6D0]">Project</span>
        </motion.h2>

        {/* Mobile and tablet */}
        <div className="grid gap-[18px] lg:hidden">
          <InfoCard
            card={cards.idea}
            delay={0.05}
            className="min-h-[220px]"
            contentClassName="justify-center"
          />

          <InfoCard
            card={cards.client}
            delay={0.1}
            className="min-h-[165px]"
            contentClassName="justify-center"
          />

          <InfoCard
            card={cards.value}
            delay={0.15}
            className="min-h-[185px]"
            contentClassName="justify-center"
          />

          <ProjectImage
            src="/images/portfolioDetailsPage/about-project1.png"
            alt="Medicine search application screens"
            delay={0.2}
          />

          <ProjectImage
            src="/images/portfolioDetailsPage/about-project2.png"
            alt="Main healthcare mobile application screen"
            delay={0.25}
          />
        </div>

        {/* Desktop */}
        <div className="hidden grid-cols-2 items-start gap-x-[48px] lg:grid xl:gap-x-[54px]  ">
          {/* Left column */}
          <div className="flex min-w-0 flex-col gap-[22px] xl:gap-[20px] space-y-[30px]">
            <InfoCard
              card={cards.idea}
              delay={0.05}
              className="h-[182px] xl:h-[215px]"
              contentClassName="justify-start pt-[24px]"
            />

            <InfoCard
              card={cards.value}
              delay={0.15}
              className="h-[148px] xl:h-[190px]"
              contentClassName="justify-start pt-[24px]"
            />

            <ProjectImage
              src="/images/portfolioDetailsPage/about-project1.png"
              alt="Medicine search application screens"
              delay={0.2}
              className="w-full"
            />
          </div>

          {/* Right column */}
          <div className="flex min-w-0 flex-col gap-[18px] xl:gap-[20px]">
            <InfoCard
              card={cards.client}
              delay={0.1}
              className="h-[128px] xl:h-[118px]"
              contentClassName="justify-start pt-[14px]"
            />

            <ProjectImage
              src="/images/portfolioDetailsPage/about-project2.png"
              alt="Main healthcare mobile application screen"
              delay={0.18}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}