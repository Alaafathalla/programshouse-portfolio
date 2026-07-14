import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const MotionHashLink = motion.create(HashLink);

export default function Connect() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/portfolioDetailsPage/bg.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#111521]/45" />

      <div className="relative mx-auto max-w-[1320px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
          }}
          whileHover={{
            scale: 1.01,
          }}
          className="relative mx-auto max-w-[920px] px-6 py-[46px] text-center"
        >
          {/* Border */}
          <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-primary" />

          {/* Top border cut */}
          <div className="absolute right-[18px] top-[-5px] z-10 h-[10px] w-[105px] bg-[#111521]" />

          {/* Floating search icon */}
          <motion.img
            src="/images/services/search.svg"
            alt="Search"
            draggable={false}
            className="absolute right-[24px] top-[-45px] z-20 w-[70px]"
            animate={{
              rotate: [-8, 8, -8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Heading */}
          <h2 className="relative z-20 mx-auto max-w-[700px] text-[30px] font-bold leading-[1.4] tracking-[-0.04em] text-white md:text-[44px]">
            <span className="text-secondary">
              Transform
            </span>{" "}
            your project with our
            <br />
            driven{" "}
            <span className="text-primary">
              expertise
            </span>
          </h2>

          {/* Contact button */}
          <MotionHashLink
            smooth
            to="/#contact"
            scroll={(element) => {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="absolute bottom-0 left-1/2 z-30 flex h-[45px] min-w-[270px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-[12px] bg-primary px-8 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8AB9E2]"
          >
            Contact Us
          </MotionHashLink>
        </motion.div>
      </div>
    </section>
  );
}