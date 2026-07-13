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
              absolute right-[4%] top-[1%] z-20
              w-[182px] overflow-hidden rounded-[16px]
              border border-white/[0.04]
              bg-[#1A2130] p-2
              shadow-[0_18px_38px_rgba(0,0,0,0.28)]
            `
      }
    >
      <img
        src={medicalProject.images.person}
        alt="Medical application user"
        className="aspect-[1.65/1] w-full rounded-[11px] object-cover"
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
              absolute right-0   top-[35%] z-30
              w-[250px] rounded-[17px]
              border border-white/[0.04]
              bg-[#1B2130] p-4
              shadow-[0_22px_48px_rgba(0,0,0,0.34)]
            `
      }
    >
      <p
        className="
          mb-3 text-[11px] leading-[1.5] text-white
          sm:text-[13px]
        "
      >
        Sure! I found the best option for you.
      </p>

      <div
        className="
          flex items-center gap-3 rounded-[10px]
          bg-[#151A27] p-3
        "
      >
        <img
          src={medicalProject.images.product}
          alt="Recommended medical product"
          className="
            h-[46px] w-[38px] shrink-0
            rounded-[4px] object-cover
            sm:h-[50px] sm:w-[42px]
          "
          draggable={false}
        />

        <div className="min-w-0">
          <p className="truncate text-[10px] text-[#879AC9] sm:text-[11px]">
            Pandol Extra
          </p>

          <p className="mt-1 text-[8px] text-white/45 sm:text-[9px]">
            24 tablets
          </p>

          <p className="mt-1 text-[10px] font-medium text-[#77A6D0] sm:text-[11px]">
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
                left-[1%] top-[46%]
                h-[76px] w-[76px] rounded-[17px]
              `
        }
      `}
    >
      <GiMedicinePills
        className="text-[#77A6D0]"
        size={mobile ? 23 : 30}
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
                bottom-[5%] right-[10%]
                h-[52px] w-[52px] rounded-[13px]
              `
        }
      `}
    >
      <BriefcaseMedical
        size={mobile ? 20 : 24}
        strokeWidth={1.6}
        className="text-[#77A6D0]"
      />
    </motion.div>
  );
}