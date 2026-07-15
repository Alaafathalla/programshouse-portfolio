import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Quote } from "lucide-react";

const defaultReview = {
  text:
"Propel let us spin up a new product in hours instead of weeks. It’s exactly what we needed as a company that deeply values developer velocity and joy. Propel let us spin " ,
  name: "DANIEL BRIGGS",
  role: "Co Founder",
  videoSrc: "",
videoPoster: "/videoAvatar.png",
};

export default function ClientVideoReview({
  review = defaultReview,
  className = "",
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const reviewData = {
    ...defaultReview,
    ...review,
  };

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video || !reviewData.videoSrc) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Unable to play video:", error);
    }
  };

  return (
    <section
      className={`relative overflow-hidden bg-[#111521] px-4 py-[70px] text-white sm:px-6 sm:py-[90px] lg:px-10 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75 }}
        className="
          relative
          mx-auto
          min-h-[405px]
          w-full
          max-w-[1280px]
          overflow-hidden
        "
      >
        {/* Background image */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat

          "
          style={{
            backgroundImage:
              "url('/Testimonials.png')",
          }}
        />

        {/* Subtle dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[#101521]/25" />

        <div
          className="
            relative
            z-10
            grid
            min-h-[405px]
            items-center
            gap-12
            px-6
            py-12
            sm:px-10
            lg:grid-cols-[1fr_350px]
            lg:gap-[75px]
            lg:px-[48px]
            lg:py-[38px]
          "
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Heading */}
            <div className="flex items-start gap-7">
              <Quote
                size={38}
                strokeWidth={1}
                className="
                  mt-[6px]
                  shrink-0
                  rotate-180
                  fill-white
                  text-white
                  sm:size-[46px]
                "
              />

              <h2
                className="
                  max-w-[280px]
                  text-[29px]
                  font-bold
                  leading-[1.35]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[32px]
                  lg:text-[34px]
                "
              >
                Clients{" "}
                <span className="text-primary">
                  Are
                  <span className="block pl-[28px]">Saying</span>
                </span>
              </h2>
            </div>

            {/* Review */}
            <p
              className="
                mt-[31px]
                max-w-[570px]
                text-[16px]
                font-normal
                leading-[1.65]
                text-white/95
                sm:text-[18px]
              "
            >
              {reviewData.text}
            </p>

            {/* Client info */}
            <div
              className="
                mt-[26px]
                flex
                w-full
                max-w-[350px]
                flex-col
                items-center
                text-center
              "
            >
              <div className="mb-[14px] h-px w-[104px] bg-white/30" />

              <h3
                className="
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.01em]
                  text-primary
                "
              >
                {reviewData.name}
              </h3>

              {reviewData.role && (
                <p className="mt-[5px] text-[12px] text-white/70">
                  {reviewData.role}
                </p>
              )}
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              mx-auto
              w-full
              max-w-[370px]
              lg:mx-0
              lg:justify-self-end
            "
          >
            <div
              className="
                relative
                aspect-[0.67]
                max-h-[325px]
                overflow-hidden
                rounded-[8px]
                sm:max-h-[390px]
              "
            >
              {reviewData.videoSrc ? (
                <video
                  ref={videoRef}
                  src={reviewData.videoSrc}
                  poster={reviewData.videoPoster}
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={reviewData.videoPoster}
                  alt={`${reviewData.name} video review`}
                  className="h-full w-full object-cover"
                />
              )}

              {/* Video overlay */}
              <div
                className={`pointer-events-none absolute inset-0 bg-black/5 transition-opacity duration-300 ${
                  isPlaying ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Pause by clicking video */}
              {isPlaying && (
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label="Pause video"
                  className="absolute inset-0 z-[5] cursor-pointer"
                />
              )}

              {/* Play button */}
              <button
                type="button"
                onClick={toggleVideo}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className={`
                  absolute
                  left-1/2
                  top-1/2
                  z-20
                  flex
                  h-[58px]
                  w-[58px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/35
                  bg-[radial-gradient(circle_at_35%_25%,rgba(255,218,188,0.95),rgba(209, 199, 197, 0.9)_50%,rgba(187, 177, 179, 0.92)_100%)]
                  text-white
                  shadow-[0_8px_28px_rgba(0,0,0,0.28)]
                  backdrop-blur-[3px]
                  transition-all
                  duration-300
                  hover:scale-110
                  ${
                    isPlaying
                      ? "pointer-events-none opacity-0"
                      : "opacity-100"
                  }
                `}
              >
                {isPlaying ? (
                  <Pause size={22} fill="currentColor" />
                ) : (
                  <Play
                    size={24}
                    fill="currentColor"
                    strokeWidth={1.8}
                    className="translate-x-[2px]"
                  />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}