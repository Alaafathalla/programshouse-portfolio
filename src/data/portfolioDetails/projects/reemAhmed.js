import { createProjectDetails } from "../createProjectDetails.js";

export const reemAhmedDetails = createProjectDetails({
  slug: "reem-ahmed",

  shortTitle: "Reem Ahmed Life Coaching Website",

  categoryLabel:
    "Life Coaching Website & Personal Development Platform",

  description:
    "A modern personal brand website created for an Emirati life coach who offers private sessions and practical guidance in life organization, relationships, self-awareness, and personal growth.",

  services:
    "Responsive Web Design, Personal Brand Strategy",

  team: "6 specialists",
aboutImageStyles: {
  first: {
    wrapperClassName: `
      relative
      mx-auto
      flex
      min-h-[210px]
      w-full
      items-end
      justify-center
      overflow-hidden
      rounded-[18px]

      sm:min-h-[250px]

      lg:min-h-[280px]
    `,

    className: `
      relative
      h-auto
      w-[89%]
      object-contain
translate-y-[95px]
translate-x-[90px]
      sm:w-[78%]
 sm:translate-y-[88px]
     sm:translate-x-[120px]
      lg:w-[93%]
      lg:max-h-[260px]
      lg:translate-y-[58px]
        lg:translate-x-[88px]
    `,
  },

  second: {
    wrapperClassName: `
      relative
      mx-auto
      flex
      min-h-[210px]
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-[18px]

      sm:min-h-[250px]

      lg:min-h-[280px]
    `,

    className: `
      relative
      h-auto
      w-[92%]
      object-contain
translate-y-[95px]
translate-x-[30px]
      sm:w-[80%]
      sm:translate-y-[88px]
      sm:translate-x-[90px]
      lg:w-[100%]
      lg:max-h-[295px]
    lg:translate-y-[78px]
      lg:translate-x-[0px]
    `,
  },
},
  // Project story
  about: {
    idea:
      "Design a warm and inspiring digital experience that introduces the coach's philosophy, showcases her coaching programs, and helps visitors easily begin their personal growth journey through online session booking.",

    client:
      "An Emirati life coach dedicated to empowering individuals through personalized coaching, helping them improve relationships, build self-confidence, organize their lives, and achieve emotional well-being.",

    value:
      "The platform strengthens the client's personal brand while providing a seamless experience for discovering coaching services, reading valuable insights, and booking sessions with confidence.",
  },

  // Project goals
  goals: [
    {
      title: "Build a Strong Personal Brand",
      description:
        "Create a professional online presence that reflects the coach's personality, values, and expertise.",
    },
    {
      title: "Increase Trust & Credibility",
      description:
        "Use authentic content, elegant visuals, and clear messaging to build confidence with potential clients.",
    },
    {
      title: "Simplify Session Booking",
      description:
        "Provide an intuitive user journey that makes exploring services and scheduling coaching sessions quick and effortless.",
    },
    {
      title: "Inspire Personal Growth",
      description:
        "Encourage visitors to take positive action through motivational content and practical coaching solutions.",
    },
  ],

  // Project solution — each card has a project-specific icon
  solution: [
    {
      icon: "HeartHandshake",
      title: "Elegant & Human-Centered Design",
      description:
        "A clean and calming interface that creates an emotional connection while reflecting professionalism and trust.",
    },
    {
      icon: "Sparkles",
      title: "Clear Coaching Experience",
      description:
        "Well-structured pages that explain coaching services, programs, and the transformation clients can expect.",
    },
    {
      icon: "Waypoints",
      title: "Optimized User Journey",
      description:
        "Responsive layouts, simple navigation, and clear calls-to-action that guide visitors from exploration to booking.",
    },
  ],
});