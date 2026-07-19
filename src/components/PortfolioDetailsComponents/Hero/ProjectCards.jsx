import { motion } from "framer-motion";
import { BriefcaseMedical } from "lucide-react";
import { GiMedicinePills } from "react-icons/gi";

import {
  medicalProject,
  motionEase,
} from "./../../../data/medicalProjectData";

const floatingTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

export function PersonCard({ mobile = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: mobile ? 0 : 35,
        y: mobile ? 25 : 0,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: mobile ? 0 : [0, -6, 0],
        scale: 1,
      }}
      transition={
        mobile
          ? {
              duration: 0.65,
              delay: 0.25,
              ease: motionEase,
            }
          : {
              opacity: {
                duration: 0.6,
                delay: 0.5,
                ease: motionEase,
              },
              x: {
                duration: 0.6,
                delay: 0.5,
                ease: motionEase,
              },
              scale: {
                duration: 0.6,
                delay: 0.5,
                ease: motionEase,
              },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      className={
        mobile
          ? `
              relative z-30 w-[145px] overflow-hidden
              rounded-[15px] border border-white/[0.05]
              bg-[#1A2130] p-2
              shadow-[0_18px_38px_rgba(0,0,0,0.28)]
              sm:w-[170px]
            `
          : `
              absolute right-[5%] top-[4%] z-20
              w-[125px] overflow-hidden rounded-[12px]
              border border-white/[0.04]
              bg-[#1A2130] p-[5px]
              shadow-[0_15px_30px_rgba(0,0,0,0.26)]

              xl:right-[4%]
              xl:top-[1%]
              xl:w-[182px]
              xl:rounded-[16px]
              xl:p-2
              xl:shadow-[0_18px_38px_rgba(0,0,0,0.28)]
            `
      }
    >
      <img
        src={medicalProject.images.person}
        alt="Medical application user"
        className="
          aspect-[1.65/1]
          w-full
          rounded-[8px]
          object-cover
          xl:rounded-[11px]
        "
        draggable={false}
      />
    </motion.div>
  );
}

export function RecommendationCard({ mobile = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: mobile ? 0 : 45,
        y: mobile ? -20 : 0,
        scale: 0.94,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay: mobile ? 0.55 : 0.65,
        ease: motionEase,
      }}
      className={
        mobile
          ? `
              relative z-30 w-full max-w-[235px]
              rounded-[16px] border border-white/[0.05]
              bg-[#1B2130] p-3.5
              shadow-[0_22px_48px_rgba(0,0,0,0.34)]
            `
          : `
              absolute right-[2%] top-[37%] z-30
              w-[170px] rounded-[13px]
              border border-white/[0.04]
              bg-[#1B2130] p-2.5
              shadow-[0_18px_38px_rgba(0,0,0,0.3)]

              xl:right-0
              xl:top-[35%]
              xl:w-[250px]
              xl:rounded-[17px]
              xl:p-4
              xl:shadow-[0_22px_48px_rgba(0,0,0,0.34)]
            `
      }
    >
      <p
        className={`
          mb-2.5 leading-[1.5] text-white
          ${
            mobile
              ? "text-[11px] sm:text-[13px]"
              : "text-[9px] xl:mb-3 xl:text-[13px]"
          }
        `}
      >
        Sure! I found the best option for you.
      </p>

      <div
        className={`
          flex items-center bg-[#151A27]
          ${
            mobile
              ? "gap-3 rounded-[10px] p-3"
              : `
                  gap-2
                  rounded-[8px]
                  p-2

                  xl:gap-3
                  xl:rounded-[10px]
                  xl:p-3
                `
          }
        `}
      >
        <img
          src={medicalProject.images.product}
          alt="Recommended medical product"
          className={
            mobile
              ? `
                  h-[46px] w-[38px] shrink-0
                  rounded-[4px] object-cover
                  sm:h-[50px] sm:w-[42px]
                `
              : `
                  h-[32px] w-[26px] shrink-0
                  rounded-[4px] object-cover

                  xl:h-[50px]
                  xl:w-[42px]
                `
          }
          draggable={false}
        />

        <div className="min-w-0">
          <p
            className={`
              truncate text-[#879AC9]
              ${
                mobile
                  ? "text-[10px] sm:text-[11px]"
                  : "text-[8px] xl:text-[11px]"
              }
            `}
          >
            Pandol Extra
          </p>

          <p
            className={`
              mt-1 text-white/45
              ${
                mobile
                  ? "text-[8px] sm:text-[9px]"
                  : "text-[7px] xl:text-[9px]"
              }
            `}
          >
            24 tablets
          </p>

          <p
            className={`
              mt-1 font-medium text-primary
              ${
                mobile
                  ? "text-[10px] sm:text-[11px]"
                  : "text-[8px] xl:text-[11px]"
              }
            `}
          >
            Egp 45
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function MedicalIconCard({ mobile = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: {
          duration: 0.45,
          delay: 0.65,
        },
        scale: {
          duration: 0.45,
          delay: 0.65,
        },
        y: floatingTransition,
      }}
      className={`
        absolute z-20 flex items-center justify-center
        border border-white/[0.04] bg-[#1B2232]
        shadow-[0_16px_35px_rgba(0,0,0,0.3)]

        ${
          mobile
            ? `
                left-[2%] top-[42%]
                h-[52px] w-[52px] rounded-[13px]
              `
            : `
                left-[2%] top-[48%]
                h-[46px] w-[46px] rounded-[11px]

                xl:left-[1%]
                xl:top-[46%]
                xl:h-[76px]
                xl:w-[76px]
                xl:rounded-[17px]
              `
        }
      `}
    >
      <GiMedicinePills
        className={`
          text-primary
          ${
            mobile
              ? "h-[23px] w-[23px]"
              : "h-[18px] w-[18px] xl:h-[30px] xl:w-[30px]"
          }
        `}
      />
    </motion.div>
  );
}

export function BriefcaseCard({ mobile = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay: 0.8,
        },
        scale: {
          duration: 0.5,
          delay: 0.8,
        },
        y: {
          duration: 4,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`
        absolute z-20 flex items-center justify-center
        border border-white/[0.04] bg-[#1A2231]
        shadow-[0_16px_36px_rgba(0,0,0,0.28)]

        ${
          mobile
            ? `
                bottom-[7%] right-[5%]
                h-[45px] w-[45px] rounded-[12px]
              `
            : `
                bottom-[7%] right-[11%]
                h-[36px] w-[36px] rounded-[10px]

                xl:bottom-[5%]
                xl:right-[10%]
                xl:h-[52px]
                xl:w-[52px]
                xl:rounded-[13px]
              `
        }
      `}
    >
      <BriefcaseMedical
        strokeWidth={1.6}
        className={`
          text-primary
          ${
            mobile
              ? "h-[20px] w-[20px]"
              : "h-[16px] w-[16px] xl:h-[24px] xl:w-[24px]"
          }
        `}
      />
    </motion.div>
  );
}