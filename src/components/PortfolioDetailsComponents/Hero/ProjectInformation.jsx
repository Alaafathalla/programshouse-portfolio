import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  fadeLeft,
  medicalProject,
  motionEase,
  projectDetails,
} from "./../../../data/medicalProjectData";

function Breadcrumb() {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6,
        delay: 0.05,
        ease: motionEase,
      }}
      className="
        mb-5 flex flex-wrap items-center gap-1
        text-[11px] text-white/35 sm:text-xs
      "
    >
      <Link
        to="/"
        className="transition-colors duration-300 hover:text-[#77A6D0]"
      >
        Home
      </Link>

      <ChevronRight size={12} strokeWidth={1.8} />

      <Link
        to="/portfolio"
        className="transition-colors duration-300 hover:text-[#77A6D0]"
      >
        Portfolio
      </Link>

      <ChevronRight size={12} strokeWidth={1.8} />

      <span className="text-white/60">Medical app</span>
    </motion.div>
  );
}

export default function ProjectInformation() {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.85,
        ease: motionEase,
      }}
      className="relative z-20"
    >
      <Breadcrumb />

      <motion.h1
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.7,
          delay: 0.12,
          ease: motionEase,
        }}
        className="
          mb-8 text-[36px] font-bold leading-none
          tracking-[-0.04em] text-[#77A6D0]
          sm:text-[44px] lg:text-[48px]
        "
      >
        {medicalProject.title}
      </motion.h1>

      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.7,
          delay: 0.24,
          ease: motionEase,
        }}
        className="max-w-[520px] space-y-6"
      >
        {projectDetails.map((item) => (
          <div key={item.label}>
            <p className="mb-2 text-[15px] text-white/45 sm:text-base">
              {item.label}
            </p>

            <p
              className="
                text-[14px] font-medium leading-[1.65]
                text-white/95 sm:text-base
              "
            >
              {item.value}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}