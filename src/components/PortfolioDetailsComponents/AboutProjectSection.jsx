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
    y: 24,
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

function InfoCard({ card, delay = 0, className = "" }) {
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
        flex
        h-full
        min-h-0
        items-center
        rounded-[14px]
        border
        border-[#77A6D0]/75
        bg-[#111521]
        ${className}
      `}
    >
      {/* Cover the border behind the icon */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          z-[2]
          bg-[#111521]
          ${
            isTopIcon
              ? "right-[22px] top-[-2px] h-[5px] w-[60px]"
              : "right-[-2px] top-1/2 h-[70px] w-[5px] -translate-y-1/2"
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
              ? "right-[27px] top-[-18px] h-[42px] w-[42px]"
              : "right-[-22px] top-1/2 h-[48px] w-[48px] -translate-y-1/2"
          }
        `}
      >
        <Icon
          size={isTopIcon ? 28 : 32}
          strokeWidth={1.8}
          className="text-[#FEAC25]"
        />
      </motion.div>

      <div className="w-full px-7 py-6 sm:px-8 lg:px-[31px] lg:py-[24px] xl:px-[55px]">
        <h3 className="mb-[12px] text-[17px] font-medium leading-none tracking-[-0.025em] text-white xl:text-[19px]">
          {card.title}
        </h3>

        <p className="max-w-[420px] text-[13px] leading-[1.6] text-[#B7B9C1] xl:text-[14px] xl:leading-[1.6]">
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
        h-full
        min-h-0
        overflow-hidden
        rounded-[14px]
        bg-[#1A1E29]
        ${className}
      `}
    >
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        whileHover={{
          scale: 1.012,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className={`
          block
          h-full
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
    <section className="relative overflow-hidden bg-[#111521] px-5 py-[58px] text-white sm:px-8 sm:py-[70px] lg:px-10 lg:py-[62px]">
      <div className="relative mx-auto max-w-[1280px]">
        <motion.h2
          {...revealAnimation}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-[42px]
            text-[32px]
            font-bold
            leading-none
            tracking-[-0.045em]
            sm:text-[38px]
            lg:mb-[41px]
            lg:text-[41px]
          "
        >
          About The <span className="text-[#77A6D0]">Project</span>
        </motion.h2>

        {/* Mobile and tablet */}
        <div className="grid gap-6 lg:hidden">
          <InfoCard
            card={cards.idea}
            delay={0.06}
            className="min-h-[265px]"
          />

          <InfoCard
            card={cards.client}
            delay={0.1}
            className="min-h-[190px]"
          />

          <InfoCard
            card={cards.value}
            delay={0.14}
            className="min-h-[225px]"
          />

          <ProjectImage
            src="/images/portfolioDetailsPage/about-project1.png"
            alt="Medicine search application screens"
            delay={0.18}
            className="h-[290px] sm:h-[390px]"
            imageClassName="object-cover object-center"
          />

          <ProjectImage
            src="/images/portfolioDetailsPage/about-project2.png"
            alt="Main healthcare mobile application screen"
            delay={0.22}
            className="h-[470px] sm:h-[620px]"
            imageClassName="object-cover object-center"
          />
        </div>

        {/* Desktop layout */}
        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
            lg:grid-rows-[220px_178px_358px]
            lg:gap-x-[72px]
            lg:gap-y-[24px]
            xl:grid-rows-[252px_202px_365px]
            xl:gap-x-[84px]
            xl:gap-y-[28px]
          "
        >
          {/* The Idea */}
          <div className="col-start-1 row-start-1">
            <InfoCard card={cards.idea} delay={0.06} />
          </div>

          {/* The Client */}
          <div className="col-start-2 row-start-1 self-start">
            <InfoCard
              card={cards.client}
              delay={0.1}
              className="
                h-[155px]
                xl:h-[176px]
              "
            />
          </div>

          {/* The Value */}
          <div className="col-start-1 row-start-2">
            <InfoCard card={cards.value} delay={0.14} />
          </div>

          {/* Small left image */}
          <div className="col-start-1 row-start-3">
            <ProjectImage
              src="/images/portfolioDetailsPage/about-project1.png"
              alt="Medicine search application screens"
              delay={0.18}
              className="h-full"
              imageClassName="
                object-cover
                object-center
              "
            />
          </div>

          {/* Large right image */}
          <div className="col-start-2 row-start-1 row-span-3 pt-[179px] xl:pt-[204px]">
            <ProjectImage
              src="/images/portfolioDetailsPage/about-project2.png"
              alt="Main healthcare mobile application screen"
              delay={0.16}
              className="h-full"
              imageClassName="
                object-cover
                object-center
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}