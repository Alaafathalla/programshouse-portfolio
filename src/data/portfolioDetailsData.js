import { projects } from "./portfolioData";

const defaultAboutImageStyles = {
  first: {
    className: `
      pointer-events-none absolute z-20 object-contain

      bottom-[-5%]
      left-[5%]
      h-[105%]
      w-[90%]

      sm:bottom-[-7%]
      sm:left-[4%]
      sm:h-[110%]
      sm:w-[92%]

      lg:bottom-[-9%]
      lg:left-[3%]
      lg:h-[115%]
      lg:w-[94%]
    `,
  },

  second: {
    className: `
      pointer-events-none absolute z-20 object-contain

      bottom-[-5%]
      right-[5%]
      h-[105%]
      w-[90%]

      sm:bottom-[-7%]
      sm:right-[4%]
      sm:h-[110%]
      sm:w-[92%]

      lg:bottom-[-9%]
      lg:right-[3%]
      lg:h-[115%]
      lg:w-[94%]
    `,
  },
};

const shared = {
  services: "Web & Mobile Development, UI/UX Design",

  team: "6 specialists",

  about: {
    idea:
      "Build a connected digital product that replaces fragmented manual processes with one clear, reliable and easy-to-use experience.",

    client:
      "A growing organization looking for a modern solution that supports customers, teams and daily operations across different locations.",

    value:
      "The product reduces repetitive work, improves service quality and gives users faster access to the features they need.",
  },

  goals: [
    {
      title: "Simplify Core Operations",
      description:
        "Bring the most important daily workflows together in one organized digital experience.",
    },
    {
      title: "Improve User Experience",
      description:
        "Create a clear, responsive and intuitive journey across desktop and mobile devices.",
    },
    {
      title: "Increase Efficiency",
      description:
        "Reduce manual steps and help teams complete tasks faster with fewer errors.",
    },
    {
      title: "Support Future Growth",
      description:
        "Use a flexible structure that can grow with new users, services and business requirements.",
    },
  ],

  solution: [
    {
      title: "Unified Digital Platform",
      description:
        "A single destination that connects the project’s main services, content and workflows.",
    },
    {
      title: "Seamless User Flow",
      description:
        "Every step is designed to feel fast, clear and consistent from entry to completion.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Reusable modules make the product easier to maintain, extend and adapt over time.",
    },
  ],

  review: {
    text:
      "Programs House transformed our idea into a polished digital product with a clear process, thoughtful design and dependable delivery.",

    name: "CLIENT REVIEW",

    role: "Project Owner",

    avatar: "/videoAvatar.png",

    videoSrc: "/videos/client-review.mp4",

    videoPoster: "/videoAvatar.png",
  },
};

const overrides = {
"prof-medical-research": {
  shortTitle: "PROF Medical Research Platform",

  categoryLabel: "Medical Research Website",

  description:
    "A professional medical platform that presents trusted research, medical expertise, educational content, and consultation services through a modern digital experience.",

  heroImage:
    "/images/portfolio/prof-medical-research/hero.png",

  heroImageStyles: {
    className: `
      relative
      z-10
      h-auto
      w-full
      max-w-[720px]
      object-contain

      sm:max-w-[780px]

      lg:max-h-[520px]
      lg:max-w-[760px]
    `,
  },

  aboutImages: {
    first:
      "/images/portfolio/prof-medical-research/about-1.png",

    second:
      "/images/portfolio/prof-medical-research/about-2.png",
  },

  aboutImageStyles: {
    first: {
      className: `
        pointer-events-none absolute bottom-0 left-1/2 z-20
        h-[84%] w-auto max-w-[92%] -translate-x-1/2
        select-none object-contain
        sm:h-[88%]
        lg:bottom-[6px] lg:h-[90%]
        xl:h-[92%]
      `,
    },

    second: {
      className: `
        pointer-events-none absolute bottom-0 left-1/2 z-20
        h-[88%] w-auto max-w-[96%] -translate-x-1/2
        select-none object-contain
        sm:h-[92%]
        lg:bottom-[8px] lg:h-[96%]
        xl:h-[98%]
      `,
    },
  },

  about: {
    idea:
      "Build a connected HR ecosystem that combines an employee mobile application with a centralized management dashboard. Employees can manage attendance, leave requests, tasks, payslips, and personal records, while HR teams control daily operations from one platform.",

    client:
      "A growing organization looking to replace manual HR processes with a modern digital solution that connects employees, managers, and HR administrators across different departments, branches, and work locations.",

    value:
      "The system reduces repetitive administrative work, improves data accuracy, and gives management real-time visibility into attendance, payroll, performance, requests, and workforce trends. Employees also receive faster access to their HR services through the mobile application.",
  },

  goals: [
    {
      title: "Streamline HR Operations",
      description:
        "Simplify employee management, attendance, payroll and administrative tasks through one platform.",
    },
    {
      title: "Improve Workforce Management",
      description:
        "Help HR teams manage employees, departments, shifts, leave requests and structure efficiently.",
    },
    {
      title: "Enhance Employee Experience",
      description:
        "Give employees easy mobile access to attendance, payslips, leave requests and announcements.",
    },
    {
      title: "Support Data-Driven Decisions",
      description:
        "Deliver analytics and reports that help management make faster and more informed decisions.",
    },
  ],

  goalsImage:
    "/images/portfolio/prof-medical-research/goals.png",

  goalsImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[300px]
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-[15px]
      bg-[#1B202C]

      sm:min-h-[360px]

      lg:min-h-[420px]
    `,

    className: `
      relative
      z-10
      h-auto
      w-[92%]
      max-w-none
      object-contain

      sm:w-[90%]

      lg:w-[95%]
    `,
  },

  solution: [
    {
      title: "Unified Medical Research Platform",
      description:
        "A single destination for presenting medical research, professional services, educational content, and consultation options.",
    },
    {
      title: "Seamless Consultation Flow",
      description:
        "Visitors can discover available services, explore research content, and contact the specialist through a clear and simple experience.",
    },
    {
      title: "Structured Research & Services",
      description:
        "The platform organizes medical services, research activities, achievements, and professional information in one place.",
    },
  ],

  solutionImage:
    "/images/portfolio/prof-medical-research/solution.png",

  solutionImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[380px]
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-[15px]

      sm:min-h-[440px]

      lg:min-h-[400px]
    `,

    className: `
      relative
      z-10
      h-auto
      w-[86%]
      max-w-none
      object-contain

      sm:w-[94%]

      lg:w-full
      lg:scale-[1.03]
    `,
  },
},

  "nizam-hr": {
    shortTitle: "Nizam HR System",

    categoryLabel: "HR Management System",

    description:
      "A comprehensive HR system that streamlines employee data, payroll, attendance, performance and leave management.",

    services:
      "Web App Development, UI/UX Design",

    heroImage:
      "/images/portfolio/nizam-hr/hero.png",

    aboutImages: {
      first:
        "/images/portfolio/nizam-hr/about-1.png",

      second:
        "/images/portfolio/nizam-hr/about-2.png",
    },

    aboutImageStyles: {
      first: {
        className: `
          pointer-events-none absolute z-20 object-contain

          bottom-[0%]
          left-[12%]
          h-[88%]
          w-[76%]

          sm:bottom-[-2%]
          sm:left-[10%]
          sm:h-[94%]
          sm:w-[80%]

          lg:bottom-[-4%]
          lg:left-[8%]
          lg:h-[100%]
          lg:w-[84%]
        `,
      },

      second: {
        className: `
          pointer-events-none absolute z-20 object-contain

          bottom-[-4%]
          right-[7%]
          h-[96%]
          w-[86%]

          sm:bottom-[-6%]
          sm:right-[5%]
          sm:h-[102%]
          sm:w-[90%]

          lg:bottom-[-8%]
          lg:right-[3%]
          lg:h-[108%]
          lg:w-[94%]
        `,
      },
    },

    about: {
      idea:
        "Build a connected HR ecosystem that combines an employee mobile application with a centralized management dashboard.",

      client:
        "A growing organization looking to replace manual HR processes with a modern solution connecting employees, managers and HR teams.",

      value:
        "The system reduces repetitive administrative work, improves data accuracy and gives management real-time visibility into workforce operations.",
    },

    goals: [
      {
        title: "Streamline HR Operations",
        description:
          "Simplify employee management, attendance, payroll and administrative tasks through one platform.",
      },
      {
        title: "Improve Workforce Management",
        description:
          "Help HR teams manage employees, departments, shifts, leave requests and structure efficiently.",
      },
      {
        title: "Enhance Employee Experience",
        description:
          "Give employees easy mobile access to attendance, payslips, leave requests and announcements.",
      },
      {
        title: "Support Data-Driven Decisions",
        description:
          "Deliver analytics and reports that help management make faster and more informed decisions.",
      },
    ],
  },

  "swsw-app": {
    shortTitle: "Food App",

    categoryLabel: "Food Delivery Application",

    description:
      "A modern food delivery application connecting customers with nearby restaurants through a fast and convenient ordering experience.",

    services:
      "UX Research, UI/UX Design, Mobile App Development",

    heroImage:
      "/images/portfolio/swsw-app/hero.png",

    aboutImages: {
      first:
        "/images/portfolio/swsw-app/about-1.png",

      second:
        "/images/portfolio/swsw-app/about-2.png",
    },

    aboutImageStyles: {
      first: {
        className: `
          pointer-events-none absolute z-20 object-contain

          bottom-[-7%]
          left-[3%]
          h-[110%]
          w-[94%]

          sm:bottom-[-9%]
          sm:left-[2%]
          sm:h-[116%]
          sm:w-[96%]

          lg:bottom-[-11%]
          lg:left-[0%]
          lg:h-[122%]
          lg:w-full
        `,
      },

      second: {
        className: `
          pointer-events-none absolute z-20 object-contain

          bottom-[-1%]
          right-[10%]
          h-[90%]
          w-[80%]

          sm:bottom-[-3%]
          sm:right-[8%]
          sm:h-[96%]
          sm:w-[84%]

          lg:bottom-[-5%]
          lg:right-[6%]
          lg:h-[102%]
          lg:w-[88%]
        `,
      },
    },

    about: {
      idea:
        "Build a smart food delivery platform that connects customers with nearby restaurants through one seamless experience.",

      client:
        "A growing food delivery startup aiming to simplify online ordering while helping restaurants reach more customers.",

      value:
        "The platform makes food ordering faster and more convenient with real-time tracking, secure payments and personalized recommendations.",
    },

    goals: [
      {
        title: "Streamline Food Ordering",
        description:
          "Enable users to discover restaurants, browse menus, customize meals and place orders quickly.",
      },
      {
        title: "Improve Delivery Experience",
        description:
          "Provide real-time tracking, accurate estimates and smooth communication between all parties.",
      },
      {
        title: "Enhance Customer Satisfaction",
        description:
          "Create a fast and enjoyable mobile experience with secure payments and favorite orders.",
      },
      {
        title: "Support Restaurant Growth",
        description:
          "Help restaurants manage orders, monitor performance and reach more customers.",
      },
    ],
  },

"ms-marketing": {
  shortTitle: "M&S Marketing Website",

  categoryLabel: "Digital Marketing Agency Website",

  description:
    " A modern corporate website designed to showcase a digital marketing agency's services, portfolio, and expertise while converting visitors into potential clients through a clean and engaging user experience.",

  services:
   "UX Research, UI/UX Design, Website Design, Branding",

  team: "5 specialists",

  heroImage:
    "/images/portfolio/ms-marketing-website/hero.png",

  heroImageStyles: {
    className: `
      relative
      z-10
      h-auto
      w-full
      max-w-[720px]
      object-contain

      sm:max-w-[760px]

      lg:max-h-[510px]
      lg:max-w-[760px]
    `,
  },

  aboutImages: {
    first:
      "/images/portfolio/ms-marketing-website/about-1.png",

    second:
      "/images/portfolio/ms-marketing-website/about-2.png",
  },

  aboutImageStyles: {
    first: {
      className: `
        pointer-events-none
        absolute
        z-20
        select-none
        object-contain

        bottom-[-3%]
        left-[7%]
        h-[96%]
        w-[86%]

        sm:bottom-[-5%]
        sm:left-[5%]
        sm:h-[101%]
        sm:w-[90%]

        lg:bottom-[-5%]
        lg:left-[5%]
        lg:h-[106%]
        lg:w-[92%]
      `,
    },

    second: {
      className: `
        pointer-events-none
        absolute
        z-20
        select-none
        object-contain

        bottom-[-4%]
        right-[5%]
        h-[100%]
        w-[90%]

        sm:bottom-[-6%]
        sm:right-[3%]
        sm:h-[105%]
        sm:w-[94%]

        lg:bottom-[-7%]
        lg:right-[1%]
        lg:h-[110%]
        lg:w-[98%]
      `,
    },
  },

  about: {
    idea:
      "Design a modern corporate website for a digital marketing agency that showcases the company's services, expertise, and successful projects. The website is designed to strengthen the agency's online presence while encouraging businesses to connect and grow their brands.",
    client:
"A full-service digital marketing agency specializing in branding, social media management, SEO, paid advertising, content creation, and web design. The agency helps businesses increase visibility, attract customers, and achieve measurable growth.",
    value:
"The website establishes a strong digital presence for the agency by presenting its services, portfolio, and achievements in a professional and engaging way. It also builds credibility and encourages potential clients to start their digital marketing journey with confidence"
 },

  goals: [
    {
      title: "Strengthen Brand Presence",
      description:
        "Create a visually appealing and professional website that reflects the agency’s expertise, values, and unique approach to digital marketing.",
    },
    {
      title: "Showcase Marketing Services",
      description:
        "Present the agency's services in a clear and engaging structure, making it easy for visitors to understand how the company can support their business growth.",
    },
    {
      title: "Build Trust & Credibility",
      description:
        "Highlight successful projects, client testimonials, and measurable results to demonstrate the agency's experience and effectiveness.",
    },
    {
      title: "Increase Client Inquiries",
      description:
        "Encourage visitors to request consultations, contact the agency, or start a project through strategic calls-to-action and a seamless user journey.",
    },
  ],

  goalsImage:
    "/images/portfolio/ms-marketing-website/goals.png",

  goalsImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[300px]
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-[15px]
      bg-[#1B202C]

      sm:min-h-[360px]
      lg:min-h-[410px]
    `,

    className: `
      relative
      z-10
      h-auto
      w-[90%]
      max-w-none
      object-contain

      sm:w-[92%]
      lg:w-[95%]
    `,
  },

  solution: [
    {
      title: "Professional Company Presentation",
      description:
        "A visually engaging website that clearly communicates the agency's mission, expertise, and competitive advantages.",
    },
    {
      title: "Service-Oriented Experience",
      description:
        "Well-structured service pages that explain each marketing solution, helping businesses quickly understand how the agency can support their goals.",
    },
    {
      title: "Portfolio & Success Stories",
      description:
        "A dedicated portfolio section showcasing completed projects, client testimonials, and campaign results to strengthen trust and credibility.",
    },
  ],
solutionImage: "/images/portfolio/ms-marketing-website/solution.png",
solutionImageStyles: {
  wrapperClassName: `
    relative
    flex
    min-h-[260px]
    w-[82%]
    items-center
    justify-center
    overflow-hidden
    rounded-[15px]

    sm:min-h-[320px]
    sm:w-[84%]

    lg:min-h-[290px]
    lg:w-[86%]
  `,

  className: `
    relative
    z-10
    h-auto

    w-[96%]
    mx-auto

    sm:w-[94%]

    lg:w-[86%]

    object-contain
  `,
},
},
"rosetta-medical": {
  shortTitle: "Medical App",

  categoryLabel: "Business",

  description:
    "Launched native apps for iOS, Android, and web, ensuring consistent UX.",

  services:
    "Launched native apps for iOS, Android, and web, ensuring consistent UX.",

  aboutImages: {
    first:
      "/images/portfolioDetailsPage/iPhone 16 Pro.png",

    second:
      "/images/portfolioDetailsPage/iPhone 13 Pro.png",
  },

  about: {
    idea:
      "A healthcare platform designed to simplify the process of finding and purchasing medicines. Users can search for medications, instantly check availability in nearby pharmacies, and order them online, eliminating the need to visit multiple pharmacies or make numerous phone calls.",

    client:
      "An Egyptian doctor dedicated to improving access to medicines after witnessing the difficulties patients faced in finding the treatments they needed.",

    value:
      "The platform simplifies access to medicines by helping patients quickly locate available products, compare nearby pharmacies, and complete their purchases with ease, saving both time and effort.",
  },

  goals: [
    {
      title: "Simplify Medicine Search",
      description:
        "Help users quickly find medicines and healthcare products without visiting multiple pharmacies.",
    },
    {
      title: "Find Nearby Pharmacies",
      description:
        "Show the closest pharmacies that have the selected product available.",
    },
    {
      title: "Create Flexible Shopping Flow",
      description:
        "Allow users to start either by searching for a product or by choosing a preferred pharmacy first.",
    },
    {
      title: "Improve User Convenience",
      description:
        "Save users time and effort by making pharmacy shopping easier, faster, and more reliable.",
    },
  ],

  solution: [
    {
      title: "Unified Pharmacy Platform",
      description:
        "A single destination for discovering medicines, healthcare products, and nearby pharmacies without unnecessary steps.",
    },
    {
      title: "Seamless Purchase Flow",
      description:
        "From product selection to payment confirmation, the experience is designed to be fast, simple, and user-friendly.",
    },
    {
      title: "Smart Search & Selection",
      description:
        "Users can search for products, compare nearby pharmacies, and choose the most convenient option.",
    },
  ],

  goalsImage:
    "/images/portfolioDetailsPage/goal.png",

  solutionImage:
    "/images/portfolioDetailsPage/solution.png",

  review: {
    text:
      "Propel let us spin up a new product in hours instead of weeks. It’s exactly what we needed as a company that deeply values developer velocity and joy.",

    name: "DANIEL BRIGGS",

    role: "Co-Founder",

    avatar: "/videoAvatar.png",

    videoSrc: "/videos/client-review.mp4",

    videoPoster: "/videoAvatar.png",
  },
},
};

export const portfolioDetails = projects.reduce(
  (result, project) => {
    const custom =
      overrides[project.slug] || {};

    result[project.slug] = {
      ...shared,
      ...project,
      ...custom,

      shortTitle:
        custom.shortTitle ||
        project.title,

      categoryLabel:
        custom.categoryLabel ||
        project.type,

      heroImage:
        custom.heroImage ||
        project.image,

      aboutImages:
        custom.aboutImages || {
          first: project.image,
          second: project.image,
        },

      heroImageStyles:
        custom.heroImageStyles || null,

      aboutImageStyles:
        custom.aboutImageStyles || null,

      goalsImage:
        custom.goalsImage ||
        project.image,

      goalsImageStyles:
        custom.goalsImageStyles || null,

      solutionImage:
        custom.solutionImage ||
        project.image,

      solutionImageStyles:
        custom.solutionImageStyles || null,

      about: {
        ...shared.about,
        ...(custom.about || {}),
      },

      goals:
        custom.goals ||
        shared.goals,

      solution:
        custom.solution ||
        shared.solution,

      review: {
        ...shared.review,
        ...(custom.review || {}),
      },
    };

    return result;
  },
  {}
);

export const getPortfolioDetailsBySlug = (
  slug
) => portfolioDetails[slug];