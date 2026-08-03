import { createProjectDetails } from "../createProjectDetails.js";

export const dolphinDetails = createProjectDetails({
  slug: "dolphin",

  shortTitle: "Dolphin Website",

  categoryLabel: "Academic & Creative Services Website",

  description:
    "A modern corporate website designed to showcase academic support, professional printing, and creative design services while helping clients easily explore solutions and connect with the company.",

  services:
    "UX Research, UI/UX Design, Website Design",

  team: "6 specialists",


  //   wrapperClassName: `
  //     relative
  //     flex
  //     min-h-[250px]
  //     w-full
  //     items-center
  //     justify-center
  //     overflow-visible

  //     sm:min-h-[330px]

  //     lg:min-h-[410px]
  //     lg:justify-end
  //   `,

  //   className: `
  //     relative
  //     h-auto
  //     w-[86%]
  //     object-contain

  //     sm:w-[82%]

  //     lg:w-[76%]
  //     lg:max-h-[400px]
  //     lg:translate-x-[25px]

  //     xl:w-[78%]
  //     xl:translate-x-[45px]
  //   `,
  // },

aboutImageStyles: {
  first: {
    wrapperClassName: `
      relative
      mx-auto
      flex
      w-full
      items-end
      justify-center
      overflow-hidden
      rounded-[18px]

      sm:min-h-[260px]

      lg:min-h-[300px]
    `,

    className: `
      relative
      h-auto
      w-[94%]
      object-contain

      translate-y-[28px]
      translate-x-[38px]
      sm:w-[78%]
      sm:translate-y-[0px]
      sm:translate-x-[190px]

      lg:w-[100%]
      lg:max-h-[275px]
      lg:translate-y-[50px]
      lg:translate-x-[80px]
    `,
  },

  second: {
    wrapperClassName: `
      relative
      mx-auto
      flex
      min-h-[220px]
      w-full
      items-end
      justify-center
      overflow-hidden
      rounded-[18px]

      sm:min-h-[260px]

      lg:min-h-[300px]
    `,

    className: `
      relative
      h-auto
      w-[98%]
      object-contain

      translate-y-[78px]

      sm:w-[96%]
      sm:translate-y-[38px]

      lg:w-[100%]
      lg:max-h-[330px]
      lg:translate-x-[22px]
      lg:translate-y-[100px]
    `,
  },
},

  goalsImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[270px]
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-[18px]

  
    `,

    className: `
      relative
      object-contain
      object-center

    `,
  },

  solutionImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[340px]
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-[18px]

      sm:min-h-[420px]

      lg:h-full
      lg:min-h-0
      lg:w-full
    `,

    className: `
      relative
      z-10
      h-auto
      w-[94%]
      max-h-[94%]
      object-contain
      object-center

    `,
  },

  about: {
    idea:
      "Design a modern corporate website for a company that offers academic, printing, and creative design services. The website is built to showcase the company's expertise, simplify service discovery, and provide clients with an easy way to request professional support.",

    client:
      "A creative service company specializing in academic support, professional printing, document formatting, graphic design, and branding solutions. The company serves students, researchers, businesses, and organizations with high-quality and reliable services.",

    value:
      "The website creates a professional online presence that highlights the company's services and expertise. It helps visitors easily explore available solutions, builds trust through a clean presentation, and encourages them to request services with confidence.",
  },

  goals: [
    {
      title: "Showcase Professional Services",
      description:
        "Present academic, printing, and creative design services in a structured and engaging way, making it easy for visitors to understand what the company offers.",
    },
    {
      title: "Strengthen Brand Identity",
      description:
        "Create a modern and visually appealing website that reflects the company's professionalism, creativity, and commitment to quality.",
    },
    {
      title: "Increase Customer Engagement",
      description:
        "Encourage visitors to contact the company, request quotations, and inquire about services through clear calls-to-action and a seamless browsing experience.",
    },
    {
      title: "Deliver an Outstanding User Experience",
      description:
        "Provide a responsive, intuitive, and accessible website that allows users to quickly find information and navigate effortlessly across all devices.",
    },
  ],

  solution: [
    {
      title: "Clear Service Presentation",
      description:
        "Well-organized sections that introduce academic support, printing, formatting, and creative design services with concise and engaging content.",
    },
    {
      title: "Professional Brand Experience",
      description:
        "A clean and modern interface that reflects the company's expertise while creating a trustworthy first impression for potential clients.",
    },
    {
      title: "Simplified Customer Journey",
      description:
        "An intuitive navigation system that enables users to browse services, request quotes, and contact the company with minimal effort.",
    },
  ],
});