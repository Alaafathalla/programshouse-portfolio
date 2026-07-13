import { motion } from "framer-motion";

import {
  motionEase,
  primaryColor,
} from "./../../../data/medicalProjectData";

/*
segments example:
[
  { type: "horizontal", left: 45, top: 12, size: 51 },
  { type: "vertical", left: 45, top: 12, size: 66 },
]

points example:
[
  { x: 96, y: 12 },
  { x: 45, y: 12 },
  { x: 45, y: 78 },
  { x: 4, y: 78 },
]
*/

export default function ConnectorLine({
  className = "",
  segments = [],
  points = [],
  delay = 0.7,
  dotDuration = 3,
  reverse = false,
}) {
  const animationPoints = reverse ? [...points].reverse() : points;

  const leftValues = animationPoints.map((point) => `${point.x}%`);
  const topValues = animationPoints.map((point) => `${point.y}%`);

  return (
    <motion.div
      className={`
        pointer-events-none absolute z-[8]
        hidden overflow-visible lg:block
        ${className}
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: motionEase,
      }}
    >
      {/* Solid CSS lines */}
      {segments.map((segment, index) => {
        const isHorizontal = segment.type === "horizontal";

        return (
          <motion.span
            key={`${segment.type}-${index}`}
            className="absolute block origin-left rounded-full"
            style={{
              left: `${segment.left}%`,
              top: `${segment.top}%`,

              width: isHorizontal ? `${segment.size}%` : "1px",
              height: isHorizontal ? "1px" : `${segment.size}%`,

              backgroundColor: primaryColor,
              transform: isHorizontal
                ? "translateY(-50%)"
                : "translateX(-50%)",
            }}
            initial={{
              opacity: 0,
              scaleX: isHorizontal ? 0 : 1,
              scaleY: isHorizontal ? 1 : 0,
            }}
            animate={{
              opacity: 0.65,
              scaleX: 1,
              scaleY: 1,
            }}
            transition={{
              duration: 0.7,
              delay: delay + index * 0.12,
              ease: motionEase,
            }}
          />
        );
      })}

      {/* Moving glow */}
      {animationPoints.length > 1 && (
        <motion.span
          className="
            absolute z-20
            h-[12px] w-[12px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full bg-primary
            blur-[3px]
          "
          initial={{
            left: leftValues[0],
            top: topValues[0],
            opacity: 0,
          }}
          animate={{
            left: leftValues,
            top: topValues,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            left: {
              duration: dotDuration,
              delay,
              repeat: Infinity,
              ease: "linear",
            },
            top: {
              duration: dotDuration,
              delay,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: dotDuration,
              delay,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      )}

      {/* Moving dot */}
      {animationPoints.length > 1 && (
        <motion.span
          className="
            absolute z-30
            h-[5px] w-[5px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            shadow-[0_0_8px_rgba(119,166,208,0.95)]
          "
          style={{
            backgroundColor: primaryColor,
          }}
          initial={{
            left: leftValues[0],
            top: topValues[0],
            opacity: 0,
          }}
          animate={{
            left: leftValues,
            top: topValues,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            left: {
              duration: dotDuration,
              delay,
              repeat: Infinity,
              ease: "linear",
            },
            top: {
              duration: dotDuration,
              delay,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: dotDuration,
              delay,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      )}
    </motion.div>
  );
}