import PortfolioHero from "../components/PortfolioComponents/PortfolioHero";
import PortfolioProjects from "../components/PortfolioComponents/PortfolioProjects";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111521] text-white">
      <PortfolioHero />

      <PortfolioProjects />

            {/* <section className="px-6 pb-24 sm:pb-32">
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[32px] bg-[#77A6D0] px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[370px] w-[370px] rounded-full border border-white/20" />

          <div className="pointer-events-none absolute right-[-20px] top-[-80px] h-[260px] w-[260px] rounded-full border border-white/15" />

          <div className="pointer-events-none absolute bottom-[-180px] left-[25%] h-[350px] w-[350px] rounded-full bg-white/10 blur-[90px]" />

          <div className="pointer-events-none absolute left-10 top-10 h-2 w-2 rounded-full bg-white/40" />

          <div className="pointer-events-none absolute bottom-12 right-[38%] h-1.5 w-1.5 rounded-full bg-white/30" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <span className="mb-5 block text-xs font-bold uppercase tracking-[0.2em] text-[#111521]/65">
                Start your project
              </span>

              <h2 className="max-w-[770px] text-[38px] font-bold leading-[1.1] tracking-[-0.05em] text-white sm:text-[52px] lg:text-[64px]">
                Have an idea? Let&apos;s turn it into something remarkable.
              </h2>

              <p className="mt-6 max-w-[620px] text-sm leading-7 text-white/75 sm:text-base">
                Share your vision with us and let&apos;s build a digital
                experience that supports your goals and helps your business
                grow.
              </p>
            </div>

            <a
              href="/#contact"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#111521] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111521] hover:shadow-[0_18px_45px_rgba(17,21,33,0.25)]"
            >
              Start a project

              <ExternalLink
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </section> */}
    </main>
  );
}