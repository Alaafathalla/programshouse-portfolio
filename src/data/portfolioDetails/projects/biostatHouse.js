import { createProjectDetails } from "../createProjectDetails.js";

export const biostatHouseDetails = createProjectDetails({
  slug: "biostat-house",
  shortTitle: "Biostat House Website",
  categoryLabel: "Biostatistics Business Website",

  description:
    "A professional website presenting biostatistics, research support, data analysis, and scientific consulting services.",

  services:
    "Research Platform Development, UI/UX Design, Business Website",

  /*
  |--------------------------------------------------------------------------
  | Hero Section
  |--------------------------------------------------------------------------
  */

  heroImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[270px]
      w-full
      items-center
      justify-center
      overflow-visible

      sm:min-h-[350px]

      lg:min-h-[460px]
      lg:justify-end
    `,

    className: `
      relative
      h-auto
      w-[94%]
      object-contain

      sm:w-[90%]

      lg:w-[88%]
      lg:translate-x-[55px]

      xl:w-[92%]
      xl:translate-x-[90px]

      2xl:translate-x-[120px]
    `,
  },

  /*
  |--------------------------------------------------------------------------
  | About Section Images
  |--------------------------------------------------------------------------
  |
  | first  = lower left image
  | second = lower right image
  |
  */

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
        rounded-[16px]

        sm:min-h-[250px]

        lg:min-h-[285px]
      `,

      className: `
        relative
        h-auto
        w-[92%]
        max-h-[195px]
        translate-y-[10px]
        object-contain

        sm:w-[88%]
        sm:max-h-[230px]
        sm:translate-y-[14px]

        lg:w-[98%]
        lg:max-h-[295px]
        lg:translate-y-[30px]
        lg:translate-x-[50px]
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
        rounded-[16px]

        sm:min-h-[250px]

        lg:min-h-[285px]
      `,

      className: `
        relative
        h-auto
        w-full
        max-h-[230px]
        object-cover
        object-center

        sm:max-h-[270px]

        lg:h-[74%]
        lg:max-h-none
        lg:translate-y-[39px]
      `,
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Goals Section
  |--------------------------------------------------------------------------
  */

  goalsImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[250px]
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-[16px]

      sm:min-h-[320px]

      lg:min-h-[360px]
      lg:w-[92%]
      lg:justify-self-end
    `,

    className: `
      h-full
      w-full
      object-cover
      object-center
    `,
  },

  /*
  |--------------------------------------------------------------------------
  | Solution Section
  |--------------------------------------------------------------------------
  */
solutionImageStyles: {
  wrapperClassName: `
    relative
    flex
    min-h-[350px]
    w-full
    items-center
    justify-center
    overflow-hidden
    rounded-[18px]

    sm:min-h-[420px]

    lg:h-[446px]
    lg:min-h-0
    lg:w-full
  `,

  className: `
    relative
    z-10
    h-auto
    max-h-[94%]
    w-[96%]
    object-contain
    object-center

    sm:w-[94%]

    lg:max-h-[94%]
    lg:w-[96%]
  `,
},

  about: {
    idea:
      "Build a credible digital platform that explains specialized research and biostatistics services in a clear business-focused way.",

    client:
      "A research and analytics company supporting academics, healthcare professionals, and organizations with data-driven services.",

    value:
      "The website strengthens credibility, simplifies complex services, and helps potential clients request the right research support.",
  },

  goals: [
    {
      title: "Present Specialized Expertise",
      description:
        "Communicate research, statistics, and analytical capabilities clearly.",
    },
    {
      title: "Simplify Service Discovery",
      description:
        "Help visitors understand available consulting and analysis services.",
    },
    {
      title: "Build Professional Credibility",
      description:
        "Show methodology, expertise, and successful research support.",
    },
    {
      title: "Increase Qualified Inquiries",
      description:
        "Guide researchers and organizations toward the right contact path.",
    },
  ],

  solution: [
    {
      title: "Research Services Hub",
      description:
        "A central website for data analysis, study design, and scientific consulting.",
    },
    {
      title: "Clear Service Architecture",
      description:
        "Services are grouped by user need and research stage.",
    },
    {
      title: "Professional Inquiry Flow",
      description:
        "Visitors can submit project details and request tailored support.",
    },
  ],
});