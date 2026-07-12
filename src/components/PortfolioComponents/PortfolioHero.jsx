import { useMemo, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const INTERACTION_RADIUS = 260;
const MOBILE_CIRCLES_COUNT = 24;
const MOBILE_TINY_DOTS_COUNT = 35;

function InteractiveCircle({
  circle,
  mouseX,
  mouseY,
  hideOnMobile,
}) {
  const circleRef = useRef(null);

  const repelX = useTransform(
    [mouseX, mouseY],
    ([currentMouseX, currentMouseY]) => {
      const element = circleRef.current;

      if (!element) return 0;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = centerX - currentMouseX;
      const distanceY = centerY - currentMouseY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance > INTERACTION_RADIUS || distance === 0) {
        return 0;
      }

      const force =
        (INTERACTION_RADIUS - distance) / INTERACTION_RADIUS;

      return (
        (distanceX / distance) *
        force *
        circle.repelStrength
      );
    }
  );

  const repelY = useTransform(
    [mouseX, mouseY],
    ([currentMouseX, currentMouseY]) => {
      const element = circleRef.current;

      if (!element) return 0;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = centerX - currentMouseX;
      const distanceY = centerY - currentMouseY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance > INTERACTION_RADIUS || distance === 0) {
        return 0;
      }

      const force =
        (INTERACTION_RADIUS - distance) / INTERACTION_RADIUS;

      return (
        (distanceY / distance) *
        force *
        circle.repelStrength
      );
    }
  );

  const smoothX = useSpring(repelX, {
    stiffness: 150,
    damping: 18,
    mass: 0.45,
  });

  const smoothY = useSpring(repelY, {
    stiffness: 150,
    damping: 18,
    mass: 0.45,
  });

  return (
    <motion.span
      ref={circleRef}
      className={`absolute rounded-full bg-white/90 will-change-transform ${
        hideOnMobile ? "hidden sm:block" : "block"
      }`}
      style={{
        width: circle.size,
        height: circle.size,
        left: circle.left,
        top: circle.top,
        x: smoothX,
        y: smoothY,
        zIndex: circle.depth,
        boxShadow:
          "0 0 8px rgba(124,120,120,0.8), 0 0 18px rgba(119,166,208,0.45)",
      }}
      animate={{
        translateX: [0, circle.moveX, 0],
        translateY: [0, circle.moveY, 0],
        opacity: [
          circle.minOpacity,
          circle.maxOpacity,
          circle.minOpacity,
        ],
        scale: [1, circle.scale, 1],
      }}
      transition={{
        duration: circle.duration,
        delay: circle.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function TinyDot({ dot, hideOnMobile }) {
  return (
    <motion.span
      className={`absolute rounded-full bg-white ${
        hideOnMobile ? "hidden sm:block" : "block"
      }`}
      style={{
        width: dot.size,
        height: dot.size,
        left: dot.left,
        top: dot.top,
        boxShadow:
          "0 0 6px rgba(255,255,255,0.85), 0 0 12px rgba(119,166,208,0.38)",
      }}
      animate={{
        y: [0, dot.moveY, 0],
        opacity: [0.12, dot.maxOpacity, 0.12],
        scale: [1, 1.8, 1],
      }}
      transition={{
        duration: dot.duration,
        delay: dot.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function PortfolioHero() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const circles = useMemo(
    () =>
      Array.from({ length: 180 }, (_, index) => ({
        id: index,
        size: 1 + ((index * 7) % 4),
        left: `${(index * 47 + index * index * 3 + 9) % 100}%`,
        top: `${(index * 61 + index * index * 5 + 13) % 100}%`,
        duration: 4 + ((index * 7) % 9),
        delay: (index % 20) * 0.18,

        moveX:
          index % 2 === 0
            ? 10 + ((index * 3) % 24)
            : -10 - ((index * 3) % 24),

        moveY:
          index % 3 === 0
            ? -16 - ((index * 4) % 25)
            : 10 + ((index * 2) % 14),

        scale: 1.15 + (index % 5) * 0.12,
        minOpacity: 0.22 + (index % 4) * 0.05,
        maxOpacity: 0.65 + (index % 4) * 0.08,
        repelStrength: 55 + (index % 6) * 15,
        depth: index % 4,
      })),
    []
  );

  const tinyDots = useMemo(
    () =>
      Array.from({ length: 230 }, (_, index) => ({
        id: index,
        size: 0.5 + ((index * 5) % 2),
        left: `${(index * 53 + index * index * 2 + 5) % 100}%`,
        top: `${(index * 71 + index * index * 4 + 17) % 100}%`,
        duration: 2.5 + ((index * 5) % 6),
        delay: (index % 25) * 0.16,
        moveY: -5 - (index % 12),
        maxOpacity: 0.55 + (index % 5) * 0.08,
      })),
    []
  );

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-[500px] overflow-hidden bg-[#111521] px-6 pb-[80px] pt-[125px] sm:min-h-[600px] sm:pb-[110px] sm:pt-[165px]"
    >
      {/* Desktop background grid */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.07] sm:block"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Desktop noise */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.025] sm:block"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 0.6px, transparent 0.6px)",
          backgroundSize: "6px 6px",
        }}
      />

      {/* Left glow — visible on all screens */}
      <motion.div
        animate={{
          x: [0, 45, 0],
          y: [0, -35, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-220px] top-[-100px] h-[430px] w-[430px] rounded-full bg-[#77A6D0]/10 blur-[115px] sm:left-[-180px] sm:top-[-80px] sm:h-[540px] sm:w-[540px] sm:bg-[#77A6D0]/20 sm:blur-[125px]"
      />

      {/* Right glow — desktop only */}
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 35, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-160px] top-[40px] hidden h-[430px] w-[430px] rounded-full bg-[#FEAC25]/14 blur-[115px] sm:block"
      />

      {/* Center glow — desktop only */}
      <motion.div
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#77A6D0]/10 blur-[130px] sm:block"
      />

      {/* Tiny dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {tinyDots.map((dot, index) => (
          <TinyDot
            key={dot.id}
            dot={dot}
            hideOnMobile={index >= MOBILE_TINY_DOTS_COUNT}
          />
        ))}
      </div>

      {/* Interactive dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {circles.map((circle, index) => (
          <InteractiveCircle
            key={circle.id}
            circle={circle}
            mouseX={mouseX}
            mouseY={mouseY}
            hideOnMobile={index >= MOBILE_CIRCLES_COUNT}
          />
        ))}
      </div>

      {/* Desktop orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-[-125px] top-[80px] hidden h-[380px] w-[380px] rounded-full border border-white/[0.07] md:block"
      >
        <span className="absolute left-1/2 top-[-6px] h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-[#77A6D0] shadow-[0_0_20px_rgba(119,166,208,0.75)]" />

        <span className="absolute bottom-[32px] left-[24px] h-[10px] w-[10px] rounded-full bg-[#FEAC25] shadow-[0_0_20px_rgba(254,172,37,0.65)]" />
      </motion.div>

      {/* Second desktop orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 44,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute bottom-[-220px] left-[-150px] hidden h-[480px] w-[480px] rounded-full border border-[#77A6D0]/10 lg:block"
      >
        <span className="absolute right-[50px] top-[55px] h-[9px] w-[9px] rounded-full bg-white/80 shadow-[0_0_16px_rgba(255,255,255,0.65)]" />
      </motion.div>

      {/* Mobile readability layer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#111521]/10 to-[#111521] sm:hidden" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-[#111521]" />

      {/* Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-10 mx-auto max-w-[1320px]"
      >
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <h1 className="max-w-[950px] text-[43px] font-bold leading-[1.04] tracking-[-0.055em] text-white sm:text-[64px] md:text-[72px] lg:text-[82px]">
            Ideas transformed into

            <motion.span
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="block bg-gradient-to-r from-[#77A6D0] via-[#d7e9fa] to-[#77A6D0] bg-clip-text pb-2 text-transparent"
            >
              digital experiences.
            </motion.span>
          </h1>
        </div>
      </motion.div>
    </section>
  );
}