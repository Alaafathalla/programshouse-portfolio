import { motion } from "framer-motion";
import { Lightbulb, Smile, Star } from "lucide-react";

const infoCards = [
  {
    id: 1,
    title: "The Idea",
    description:
      "A healthcare platform designed to simplify the process of finding and purchasing medicines. Users can search for medications, instantly check availability in nearby pharmacies, and order them online, eliminating the need to visit multiple pharmacies or make numerous phone calls.",
    icon: Lightbulb,
    iconClassName: "right-[-18px] top-1/2 -translate-y-1/2",
  },
  {
    id: 2,
    title: "The Client",
    description:
      "An Egyptian doctor dedicated to improving access to medicines after witnessing the difficulties patients faced in finding the treatments they needed.",
    icon: Smile,
    iconClassName: "right-[28px] top-[-15px]",
  },
  {
    id: 3,
    title: "The Value",
    description:
      "The platform simplifies access to medicines by helping patients quickly locate available products, compare nearby pharmacies, and complete their purchases with ease, saving both time and effort.",
    icon: Star,
    iconClassName: "right-[-18px] top-1/2 -translate-y-1/2",
  },
];

function InfoCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative rounded-[18px] border border-[#77A6D0]/55  px-6 py-2 sm:px-7 sm:py-2"
    >
      <div
        className={`absolute z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#111521] ${item.iconClassName}`}
      >
        <Icon size={28} strokeWidth={2} className="text-[#FEAC25]" />
      </div>

      <h3 className="mb-4 text-[21px] font-semibold text-white">
        {item.title}
      </h3>

      <p className="text-[14px] leading-7 text-white/62 sm:text-[15px]">
        {item.description}
      </p>
    </motion.article>
  );
}

export default function AboutProjectSection() {
  return (
    <section className="relative overflow-hidden bg-[#111521] px-6 py-10 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="mb-12 text-[34px] font-bold tracking-[-0.04em] sm:text-[44px]">
            About The <span className="text-primary">Project</span>
          </h2>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
            <div className="grid gap-6">
              <InfoCard item={infoCards[0]} index={0} />
              <InfoCard item={infoCards[2]} index={1} />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.65,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative min-h-[280px] overflow-hidden rounded-[18px] "
              >
                <img
                  src="/images/portfolioDetailsPage/about-project1.png"
                  alt="Project mobile application screens"
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </div>

            <div className="grid gap-6">
              <InfoCard item={infoCards[1]} index={2} />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.65,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative min-h-[520px] overflow-hidden rounded-[18px] "
              >
                <img
                  src="/images/portfolioDetailsPage/about-project2.png"
                  alt="Main mobile application screen"
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}