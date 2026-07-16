import { motion } from 'framer-motion'

export default function BlogCard({ blog, fallbackImage, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      className="min-w-full overflow-hidden rounded-[18px] border border-white/15 bg-[#20242F] sm:min-w-[calc((100%-18px)/2)] md:min-w-[calc((100%-64px)/3)]"
    >
      <div className="h-[260px] overflow-hidden rounded-t-[18px] p-[10px] md:h-[240px]">
        <img
          src={blog.image}
          alt={blog.title}
          onError={(event) => {
            event.currentTarget.src = fallbackImage
          }}
          className="h-full w-full rounded-[12px] object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="px-[20px] pb-[24px] pt-[8px] md:px-[24px]">
        <h3 className="mb-[24px] text-[17px] font-bold leading-[1.45] text-white md:text-[18px]">
          {blog.title}
        </h3>

        <a
          href="#"
          className="text-[12px] font-medium text-white/65 underline underline-offset-4 transition hover:text-primary"
        >
          Explore more
        </a>
      </div>
    </motion.article>
  )
}
