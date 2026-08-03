import { createProjectDetails } from "../createProjectDetails.js";

export const kasptonDetails = createProjectDetails({
  slug: "kaspton-home-services",
  shortTitle: "Kaspton Home Services Website",
  categoryLabel: "Home services website",

  description:
    "A professional website designed to help homeowners easily discover, book, and manage trusted home maintenance and repair services through a simple and user-friendly experience.",

  services:
    "Service Platform Development, UI/UX Design, Booking Experience",
  team: "10 specialists",

  pageStyles: {
    sectionClassName: `
      bg-gradient-to-b
      from-white
      via-[#F8FBFF]
      to-white
    `,
  },

heroImageStyles: {
  wrapperClassName: `
    relative
    flex
    min-h-[280px]
    w-full
    items-center
    justify-center
    overflow-visible

    sm:min-h-[360px]

    lg:min-h-[470px]
    lg:justify-end
  `,

  className: `
    relative
    h-auto
    w-[95%]
    translate-x-[40px]
    object-contain

    sm:w-[88%]
    sm:translate-x-[175px]

    lg:w-[86%]
    lg:translate-x-[150px]

    xl:w-[90%]
    xl:translate-x-[200px]

    2xl:translate-x-[277px]
  `,
},

aboutImageStyles: {
  wrapperClassName: `
    relative
    mx-auto
    flex
    min-h-[210px]
    w-[82%]
    items-center
    justify-center
    overflow-hidden
    rounded-[20px]

    sm:min-h-[260px]
    sm:w-[76%]

    lg:min-h-[285px]
    lg:w-[68%]
  `,

  className: `
    h-auto
    max-h-[190px]
    w-[80%]
    object-contain

    sm:max-h-[235px]
    sm:w-[78%]

    lg:max-h-[190px]
    lg:w-[70%]

    relative
    lg:translate-y-[35px]
  `,
},
  // Project story
  about: {
    idea:
      "Design a modern home services website that connects homeowners with trusted professionals for repair, maintenance, cleaning, and installation services. The website offers a simple and convenient way to book reliable services anytime.",

    client:
      "A home services company that provides professional maintenance and repair solutions, including plumbing, electrical work, HVAC services, cleaning, painting, and appliance repairs.",

    value:
      "The website simplifies the process of finding and booking trusted home service professionals. It improves customer convenience, increases service accessibility, and helps users schedule appointments quickly and confidently.",
  },

  // Project goals
  goals: [
    {
      title: "Simplify Service Booking",
      description:
        "Enable customers to browse services, choose the right professional, and schedule appointments through a seamless booking experience.",
    },
    {
      title: "Showcase Professional Services",
      description:
        "Present all available home services with clear descriptions, pricing information, and service categories to help users find what they need.",
    },
    {
      title: "Build Customer Trust",
      description:
        "Increase credibility by displaying verified technicians, customer reviews, service guarantees, and completed projects.",
    },
    {
      title: "Improve User Experience",
      description:
        "Create an intuitive, responsive, and visually engaging website that makes booking home services fast and hassle-free.",
    },
  ],

  // Project solution — each card has a project-specific icon
  solution: [
    {
      icon: "Wrench",
      title: "Easy Service Discovery",
      description:
        "Users can quickly browse categories such as plumbing, electrical, cleaning, painting, appliance repair, and HVAC services to find the right solution.",
    },
    {
      icon: "CalendarCheck2",
      title: "Quick Online Booking",
      description:
        "A streamlined booking process allows customers to select a service, choose their preferred date and time, and confirm appointments in just a few steps.",
    },
    {
      icon: "BadgeCheck",
      title: "Trusted Professionals",
      description:
        "The website highlights certified technicians, customer ratings, and service guarantees to build confidence and ensure a reliable experience.",
    },
  ],
});