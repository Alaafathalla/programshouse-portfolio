import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: {
      duration: 0.22,
    },
  },
};

export default function ProjectCard({ project, index }) {
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setShowMobileOverlay((prev) => !prev)}
      onMouseLeave={() => setShowMobileOverlay(false)}
      className="group relative min-h-[390px] cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-[#171c29] shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
    >
      {/* Main card content */}
      <div className="relative z-10">
        <div className="relative h-[245px] overflow-hidden bg-[#0c101a] sm:h-[270px]">
          <img
            src={project.image}
            alt={project.title}
            loading={index < 3 ? "eager" : "lazy"}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out lg:group-hover:scale-[1.07]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111521]/45 via-transparent to-transparent" />
        </div>

        <div className="min-h-[130px] p-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#77A6D0]">
            {project.type}
          </p>

          <h3 className="mb-5 min-h-[52px] text-[19px] font-semibold leading-[1.4] text-white">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-[9px] bg-white/[0.055] px-3 py-2 text-xs font-medium text-[#77A6D0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full-card overlay (Unified interaction for both tap and desktop hover states) */}
      <div
        className={`
          absolute inset-0 z-20 flex flex-col justify-end bg-black/50 p-6 backdrop-blur-[3px] transition-all duration-500 ease-out
          
          /* Visible if either mobile state is toggled OR desktop hover is triggered */
          ${showMobileOverlay 
            ? "translate-y-0 opacity-100" 
            : "translate-y-full opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          }
        `}
      >
        <div
          className={`
            transition-transform duration-500 
            ${showMobileOverlay 
              ? "translate-y-0" 
              : "translate-y-6 lg:group-hover:translate-y-0"
            }
          `}
        >
          <span className="mb-4 inline-flex rounded-full border border-[#77A6D0]/30 bg-[#77A6D0]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9bc8ee]">
            {project.type}
          </span>

          <h3 className="mb-4 text-[26px] font-bold leading-tight text-white">
            {project.title}
          </h3>

          <p className="mb-6 line-clamp-4 max-w-[360px] text-sm leading-7 text-white/65">
            {project.description}
          </p>

          <div className="mb-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-[#3c3e47] px-3 py-1.5 text-[11px] text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            to={`/portfolio/${project.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111521] transition-all duration-300 hover:bg-[#77A6D0] hover:text-white"
          >
            Explore Project

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 lg:group-hover:translate-x-0.5 lg:group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}