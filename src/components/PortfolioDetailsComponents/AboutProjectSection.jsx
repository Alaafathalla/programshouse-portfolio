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
        ease: motionEase,
      }}
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
              ? "right-[27px] top-[-2px] h-[5px] w-[58px]"
              : "right-[-2px] top-1/2 h-[64px] w-[5px] -translate-y-1/2"
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
              ? "right-[32px] top-[-18px] h-[40px] w-[46px]"
              : "right-[-21px] top-1/2 h-[52px] w-[42px] -translate-y-1/2"
          }
        `}
      >
        <Icon
          size={isTopIcon ? 35 : 42}
          strokeWidth={1.8}
          className="text-secondary"
        />
      </motion.div>

      {/* Content */}
      <div
        className={`
          flex
          h-full
          flex-col
          px-[26px]
          py-[26px]
          pr-[50px]
          sm:px-[30px]
          sm:py-[28px]
          sm:pr-[54px]
          xl:px-[32px]
          xl:py-[30px]
          xl:pr-[58px]
          ${contentClassName}
        `}
      >
        <h3
          className="
            mb-[12px]
            text-[16px]
            font-semibold
            leading-none
            tracking-[-0.025em]
            text-white
            sm:text-[17px]
          "
        >
          {card.title}
        </h3>

        <p
          className="
            max-w-[560px]
            text-[14px]
            leading-[1.65]
            text-white/75
            sm:text-[15px]
            xl:text-[17px]
          "
        >
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
  imagePosition = "center",
}) {
  return (
    <motion.div
      {...revealAnimation}
      transition={{
        duration: 0.7,
        delay,
        ease: motionEase,
      }}
      whileHover={{
        y: -4,
      }}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-[16px]
        bg-[#1B202C]
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
          object-cover
          ${imageClassName}
        `}
        style={{
          objectPosition: imagePosition,
        }}
      />
    </motion.div>
  );
}

export default function AboutProjectSection() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#111521]
        px-4
        py-[62px]
        text-white
        sm:px-8
        sm:py-[76px]
        lg:px-10
        lg:py-[82px]
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-1/2
          h-[280px]
          w-[280px]
          -translate-y-1/2
          rounded-full
          bg-[#77A6D0]/[0.025]
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        {/* Heading */}
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
            mb-[40px]
            text-[32px]
            font-bold
            leading-none
            tracking-[-0.045em]
            sm:text-[38px]
            lg:mb-[46px]
            lg:text-[40px]
          "
        >
          About The <span className="text-[#77A6D0]">Project</span>
        </motion.h2>

        {/* Mobile and tablet */}
        <div className="grid gap-[22px] lg:hidden">
          <InfoCard
            card={cards.idea}
            delay={0.05}
            className="min-h-[260px]"
            contentClassName="justify-center"
          />

          <InfoCard
            card={cards.client}
            delay={0.1}
            className="min-h-[190px]"
            contentClassName="justify-center"
          />

          <InfoCard
            card={cards.value}
            delay={0.15}
            className="min-h-[220px]"
            contentClassName="justify-center"
          />

          <ProjectImage
            src="/images/portfolioDetailsPage/about-project1.png"
            alt="Medicine search application screens"
            delay={0.2}
            className="h-[340px] sm:h-[440px]"
            imagePosition="center"
          />

          <ProjectImage
            src="/images/portfolioDetailsPage/about-project2.png"
            alt="Main healthcare mobile application screen"
            delay={0.25}
            className="h-[500px] sm:h-[620px]"
            imagePosition="center"
          />
        </div>

        {/* Desktop */}
        <div
          className="
            hidden
            w-full
            items-start
            gap-x-[48px]
            lg:grid
            lg:grid-cols-2
            xl:gap-x-[66px]
          "
        >
          {/* Left column */}
          <div
            className="
              grid
              min-w-0
              grid-rows-[270px_215px_355px]
              gap-y-[28px]
              xl:grid-rows-[290px_230px_390px]
              xl:gap-y-[30px]
               mx-[30px]
            "
          >
            <InfoCard
              card={cards.idea}
              delay={0.05}
              className="h-full"
              contentClassName="justify-start pt-[30px]"
            />

            <InfoCard
              card={cards.value}
              delay={0.15}
              className="h-full"
              contentClassName="justify-start pt-[30px]"
            />

            <ProjectImage
              src="/images/portfolioDetailsPage/about-project1.png"
              alt="Medicine search application screens"
              delay={0.2}
              className="h-full"
              imagePosition="center center"
            />
          </div>

          {/* Right column */}
          <div
            className="
              grid
              min-w-0
              grid-rows-[185px_679px]
              gap-y-[24px]
              xl:grid-rows-[200px_736px]
              xl:gap-y-[26px]
              mx-[30px]
            "
          >
            <InfoCard
              card={cards.client}
              delay={0.1}
              className="h-[200px] sm:h-[220px] lg:h-[185px] xl:h-[200px]"
              contentClassName="justify-start pt-[30px]"
            />

            <ProjectImage
              src="/images/portfolioDetailsPage/about-project2.png"
              alt="Main healthcare mobile application screen"
              delay={0.18}
              className="h-full"
              imagePosition="center center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}