import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  LayoutGrid,
  Monitor,
  Palette,
  Smartphone,
} from "lucide-react";

import PortfolioHero from "../components/PortfolioComponents.jsx/PortfolioHero.jsx";

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

const projects = [
  {
    id: 1,
    title: "Nizam HR System",
    category: "web",
    type: "HR Management Platform",
    description:
      "A complete HR management platform for employees, attendance, payroll, reports, and company administration.",
    image: "/images/portfolio/img.png",
    tags: ["React", "Laravel", "Dashboard"],
    link: "#",
  },
  {
    id: 2,
    title: "SWSW Delivery",
    category: "mobile",
    type: "Food Delivery Application",
    description:
      "A complete food delivery ecosystem connecting clients, kitchens, delivery drivers, and administrators.",
    image: "/images/portfolio/img.png",
    tags: ["Flutter", "Laravel", "Mobile App"],
    link: "#",
  },
  {
    id: 3,
    title: "Aventix",
    category: "web",
    type: "Medical E-Commerce",
    description:
      "A modern Arabic medical e-commerce experience designed for medicines, cosmetics, and healthcare products.",
    image: "/images/portfolio/portfolio2.png",
    tags: ["React", "E-Commerce", "UI/UX"],
    link: "#",
  },
  {
    id: 4,
    title: "Zewail Academy",
    category: "web",
    type: "Educational Management System",
    description:
      "An integrated academic system for managing students, courses, certificates, payments, and branches.",
    image: "/images/portfolio/portfolio3.png",
    tags: ["Laravel", "Admin Panel", "Education"],
    link: "#",
  },
  {
    id: 5,
    title: "Finance Mobile App",
    category: "mobile",
    type: "Financial Application",
    description:
      "A responsive mobile application for managing payments, transactions, reports, and account activity.",
    image: "/images/portfolio/mobile port (2).png",
    tags: ["Flutter", "API", "Finance"],
    link: "#",
  },
  {
    id: 6,
    title: "Medical Brand Identity",
    category: "branding",
    type: "Branding & Visual Identity",
    description:
      "A clean and modern visual identity created for a digital healthcare and medical commerce brand.",
    image: "/images/portfolio/portfolio4.png",
    tags: ["Logo Design", "Branding", "Identity"],
    link: "#",
  },
  {
    id: 7,
    title: "Restaurant Platform",
    category: "web",
    type: "Restaurant Website",
    description:
      "A professional restaurant platform featuring online ordering, menu management, and reservation services.",
    image: "/images/portfolio/portfolio5.png",
    tags: ["React", "Responsive", "Ordering"],
    link: "#",
  },
  {
    id: 8,
    title: "Learning Application",
    category: "mobile",
    type: "Educational Mobile App",
    description:
      "An interactive learning application that helps students access courses, lessons, tests, and progress reports.",
    image: "/images/portfolio/mobile port (3).png",
    tags: ["Flutter", "Education", "UI Design"],
    link: "#",
  },
  {
    id: 9,
    title: "Corporate Identity",
    category: "branding",
    type: "Corporate Branding",
    description:
      "A consistent corporate identity system including logo design, typography, colors, and digital guidelines.",
    image: "/images/portfolio/portfolio6.png",
    tags: ["Brand Strategy", "Logo", "Guidelines"],
    link: "#",
  },
];

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

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-[#171c29] shadow-[0_18px_55px_rgba(0,0,0,0.2)]"
    >
      <div className="relative h-[245px] overflow-hidden bg-[#0c101a] sm:h-[270px]">
        <img
          src={project.image}
          alt={project.title}
          loading={index < 3 ? "eager" : "lazy"}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />

        <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-black/85 p-6 opacity-0 backdrop-blur-[2px] transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#77A6D0]">
            {project.type}
          </p>

          <h3 className="mb-3 text-[23px] font-bold leading-tight text-white">
            {project.title}
          </h3>

          <p className="mb-5 line-clamp-3 text-sm leading-6 text-white/65">
            {project.description}
          </p>

          <a
            href={project.link}
            target={project.link !== "#" ? "_blank" : undefined}
            rel={project.link !== "#" ? "noreferrer" : undefined}
            className="flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111521] transition-all duration-300 hover:bg-[#77A6D0] hover:text-white"
          >
            Explore Project
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="min-h-[120px] p-5">
        <h3 className="mb-5 min-h-[52px] text-[18px] font-semibold leading-[1.45] text-white">
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
    </motion.article>
  );
}

export default function PortfolioPage() {
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
    <main className="min-h-screen overflow-hidden bg-[#111521] text-white">
      {/* Hero */}
      <section>
        <PortfolioHero />
      </section>

      {/* Portfolio Projects */}
      <section className="relative px-6 pb-28 pt-4 sm:pb-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-medium text-[#77A6D0]">
                Selected projects
              </p>

              <h2 className="text-[36px] font-bold tracking-[-0.04em] sm:text-[48px]">
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

      {/* CTA */}
      <section className="px-6 pb-24 sm:pb-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[32px] bg-[#77A6D0] px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[370px] w-[370px] rounded-full border border-white/20" />

          <div className="pointer-events-none absolute right-[-20px] top-[-80px] h-[260px] w-[260px] rounded-full border border-white/15" />

          <div className="pointer-events-none absolute bottom-[-180px] left-[25%] h-[350px] w-[350px] rounded-full bg-white/10 blur-[90px]" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <span className="mb-5 block text-xs font-bold uppercase tracking-[0.2em] text-[#111521]/65">
                Start your project
              </span>

              <h2 className="max-w-[770px] text-[38px] font-bold leading-[1.1] tracking-[-0.05em] text-white sm:text-[52px] lg:text-[64px]">
                Have an idea? Let&apos;s turn it into something remarkable.
              </h2>
            </div>

            <a
              href="/#contact"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#111521] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#111521]"
            >
              Start a project

              <ExternalLink
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}