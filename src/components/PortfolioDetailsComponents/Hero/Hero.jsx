import { motion } from "framer-motion";

import GridBackground from "./GridBackground";
import ProjectInformation from "./ProjectInformation";
import ProjectVisual from "./ProjectVisual";

import {
  fadeRight,
  motionEase,
} from "./../../../data/medicalProjectData";

export default function Hero() {
  return (
    <section
      className="
        relative isolate min-h-[620px]
        bg-[#111521] px-4 pb-[60px] pt-[105px]
        text-white

        sm:px-8 sm:pb-[70px] sm:pt-[120px]

        lg:min-h-[700px]
        lg:px-10 lg:pb-[80px] lg:pt-[110px]
      "
    >
      <GridBackground />

      <div
        className="
          relative z-10 mx-auto grid
          w-full max-w-[1440px]
          items-center gap-12
          overflow-visible

          lg:grid-cols-[0.86fr_1.14fr]
          lg:gap-[70px]
        "
      >
        <ProjectInformation />

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.95,
            delay: 0.12,
            ease: motionEase,
          }}
          className="w-full overflow-visible"
        >
          <ProjectVisual />
        </motion.div>
      </div>
    </section>
  );
}