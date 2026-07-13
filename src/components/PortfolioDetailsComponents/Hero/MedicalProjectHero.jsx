import { motion } from "framer-motion";

import ProjectInformation from "./components/ProjectInformation";
import ProjectVisual from "./components/ProjectVisual";
import GridBackground from "./components/GridBackground";

import { fadeRight, motionEase } from "./data/medicalProjectData";

export default function MedicalProjectHero() {
  return (
    <section
      className="
        relative isolate min-h-screen overflow-hidden
        bg-[#111521] px-4 pb-[60px] pt-[105px] text-white
        sm:px-8 sm:pb-[70px] sm:pt-[120px]
        lg:min-h-[700px] lg:px-10 lg:pb-[80px] lg:pt-[110px]
      "
    >
      <GridBackground />

      <div
        className="
          relative z-10 mx-auto grid w-full max-w-[1440px]
          items-center gap-12
          lg:grid-cols-[0.86fr_1.14fr] lg:gap-[70px]
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
        >
          <ProjectVisual />
        </motion.div>
      </div>
    </section>
  );
}