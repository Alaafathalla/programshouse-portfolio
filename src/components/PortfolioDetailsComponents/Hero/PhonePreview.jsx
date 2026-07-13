import { motion } from "framer-motion";

import {
  medicalProject,
  motionEase,
}  from "./../../../data/medicalProjectData";

export default function PhonePreview({ mobile = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.94,
      }}
      animate={{
        opacity: 1,
        y: [0, -7, 0],
        scale: 1,
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay: 0.2,
          ease: motionEase,
        },
        scale: {
          duration: 0.8,
          delay: 0.2,
          ease: motionEase,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={
        mobile
          ? "relative z-20 mx-auto w-[220px] sm:w-[255px]"
          : `
              absolute left-[47%] top-1/2 z-20
              w-[310px]
              -translate-x-1/2 -translate-y-1/2
            `
      }
    >
      <div
        className="
          absolute inset-x-[17%] bottom-[3%]
          h-[35px] rounded-full bg-black/50 blur-[24px]
        "
      />

      <img
        src={medicalProject.images.phone}
        alt="Medical mobile application"
        className="
          relative h-auto w-full select-none object-contain
          drop-shadow-[0_28px_34px_rgba(0,0,0,0.42)]
        "
        draggable={false}
      />
    </motion.div>
  );
}