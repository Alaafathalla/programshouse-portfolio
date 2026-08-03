import { createProjectDetails } from "../createProjectDetails.js";

export const zewailAcademyDetails = createProjectDetails({
  slug: "zewail-academy",

  shortTitle: "Zewail Academy Website",

  categoryLabel: "Educational Platform",

  description:
    "An educational platform for presenting courses, managing registrations, and supporting students throughout their learning journey.",

  services:
    "Educational Platform Development, UI/UX Design, Admin Dashboard",

  team: "6 specialists",

  heroImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[260px]
      w-full
      items-center
      justify-center
      overflow-visible

      sm:min-h-[340px]

      lg:min-h-[420px]
      lg:justify-end
    `,

    className: `
      relative
      h-auto
      w-[88%]
      object-contain

      sm:w-[86%]

      lg:w-[82%]
      lg:translate-x-[18px]

      xl:w-[84%]
      xl:translate-x-[35px]
    `,
  },

  // aboutImageStyles: {
  //   first: {
  //     wrapperClassName: `
  //       relative
  //       mx-auto
  //       flex
  //       min-h-[220px]
  //       w-full
  //       items-end
  //       justify-center
  //       overflow-hidden
  //       rounded-[18px]

  //       sm:min-h-[260px]

  //       lg:min-h-[300px]
  //     `,

  //     className: `
  //       relative
  //       h-auto
  //       w-[92%]
  //       object-contain

  //       sm:w-[90%]

  //       lg:w-[90%]
  //       lg:max-h-[260px]
  //       lg:translate-y-[18px]
  //     `,
  //   },

  //   second: {
  //   wrapperClassName: `
  //     relative
  //     mx-auto
  //     flex
  //     min-h-[220px]
  //     w-full
  //     items-end
  //     justify-center
  //     overflow-hidden
  //     rounded-[18px]

  //     sm:min-h-[260px]

  //     lg:min-h-[400px]
  //   `,

  //   className: `
  //     relative
  //     h-auto
  //     w-[92%]
  //     object-contain

  //     sm:w-[90%]

  //     lg:w-[100%]
  //     lg:max-h-[390px]
  //     lg:translate-x-[50px]
  //   `,
  // },
  // },

  goalsImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[260px]
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-[18px]

      sm:min-h-[320px]

      lg:min-h-[360px]
      lg:w-[90%]
    `,

    className: `
      relative
      h-auto
      w-[96%]
      object-contain

      sm:w-[94%]

      lg:w-[92%]
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

      lg:h-[500px]
      lg:w-full
    `,

    className: `
      relative
      h-auto
      w-[92%]
      max-h-[94%]
      object-contain
      object-center

      sm:w-[90%]

      lg:w-[98%]
    `,
  },

  // Project story
  about: {
    idea:
      "Build an organized learning platform that connects students with courses, schedules, registration, and academy information.",

    client:
      "An education provider delivering courses and programs to students through online and offline learning experiences.",

    value:
      "The platform improves enrollment, simplifies academic administration, and gives students clearer access to learning opportunities.",
  },

  // Project goals
  goals: [
    {
      title: "Simplify Course Discovery",
      description:
        "Help students browse programs, levels, schedules, and course details.",
    },
    {
      title: "Improve Registration",
      description:
        "Create a clear enrollment flow with fewer manual steps.",
    },
    {
      title: "Support Student Management",
      description:
        "Organize student records, payments, and course participation.",
    },
    {
      title: "Strengthen Academy Presence",
      description:
        "Present the academy’s expertise, instructors, and achievements professionally.",
    },
  ],

  // Project solution — each card has a project-specific icon
  solution: [
    {
      icon: "BookOpen",
      title: "Course Catalog",
      description:
        "Programs and course details are structured for easy comparison and enrollment.",
    },
    {
      icon: "ClipboardCheck",
      title: "Registration & Payment Flow",
      description:
        "Students can submit information and complete required enrollment steps.",
    },
    {
      icon: "GraduationCap",
      title: "Academy Admin Dashboard",
      description:
        "Staff can manage courses, students, schedules, and academic records.",
    },
  ],
});