import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutGrid,
  Monitor,
  Palette,
  Smartphone,
} from "lucide-react";

import ProjectCard from "./ProjectCard";
import { projects } from "../../data/portfolioData";

const categories = [
  {
    id: "all",
    label: "All Projects",
    icon: LayoutGrid,
  },
  {
    id: "web",
    label: "Websites",
    icon: Monitor,
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
  },
  {
    id: "branding",
    label: "Branding",
    icon: Palette,
  },
];

export default function PortfolioProjects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="relative px-6 pb-28 pt-12 sm:pb-32 sm:pt-16">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#77A6D0]" />

              <p className="text-sm font-medium text-[#77A6D0]">
                Selected projects
              </p>
            </div>

            <h2 className="max-w-[650px] text-[36px] font-bold tracking-[-0.04em] text-white sm:text-[48px]">
              Work we are proud of
            </h2>
          </div>

          <div className="flex max-w-full gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={isActive}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-[#77A6D0] bg-[#77A6D0] text-white shadow-[0_10px_30px_rgba(119,166,208,0.22)]"
                      : "border-white/10 bg-white/[0.03] text-white/55 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
            <p className="text-lg font-semibold text-white">
              No projects found
            </p>

            <p className="mt-2 text-sm text-white/50">
              There are currently no projects in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}