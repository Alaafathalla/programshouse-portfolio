import { createProjectDetails } from "../createProjectDetails.js";

export const swswAppDetails = createProjectDetails({
  slug: "swsw-app",

  shortTitle: "Food App",

  categoryLabel: "Food Delivery Application",

  description:
    "A modern food delivery application that connects customers with nearby restaurants, offering a fast, secure, and convenient ordering experience with real-time delivery tracking.",

  services:
    "UX Research, UI/UX Design, Mobile App Design",

  team: "6 specialists",

  heroImageStyles: {
    wrapperClassName: `
      relative
      flex
      min-h-[250px]
      w-full
      items-center
      justify-center
      overflow-visible

      sm:min-h-[320px]

      lg:min-h-[500px]
      lg:justify-end
    `,

    className: `
      relative
      h-auto
      w-[78%]
      object-contain

      sm:w-[74%]

      lg:w-[68%]
      lg:max-h-[500px]

      xl:w-[93%]
      xl:max-h-[580px]
    `,
  },

  // aboutImageStyles: {
  //   first: {
  //     wrapperClassName: `
  //       relative
  //       mx-auto
  //       flex
  //       min-h-[210px]
  //       w-full
  //       items-end
  //       justify-center
  //       overflow-hidden
  //       rounded-[18px]

  //       sm:min-h-[250px]

  //       lg:min-h-[280px]
  //     `,

  //     className: `
  //       relative
  //       h-auto
  //       w-[76%]
  //       object-contain

  //       sm:w-[72%]

  //       lg:w-[68%]
  //       lg:max-h-[220px]
  //       lg:translate-y-[20px]
  //     `,
  //   },

  //   second: {
  //     wrapperClassName: `
  //       relative
  //       mx-auto
  //       flex
  //       min-h-[210px]
  //       w-full
  //       items-center
  //       justify-center
  //       overflow-hidden
  //       rounded-[18px]

  //       sm:min-h-[250px]

  //       lg:min-h-[280px]
  //     `,

  //     className: `
  //       relative
  //       h-auto
  //       w-[90%]
  //       object-contain

  //       sm:w-[88%]

  //       lg:w-[84%]
  //       lg:max-h-[260px]
  //     `,
  //   },
  // },

  // Project story
  about: {
    idea:
      "Build a smart food delivery platform that connects customers with nearby restaurants through one seamless experience. Users can browse menus, place orders, track deliveries in real time, and enjoy fast, reliable service from their favorite restaurants.",

    client:
      "A growing food delivery startup aiming to simplify online ordering while helping restaurants reach more customers. The platform is designed to provide a smooth experience for customers, restaurant owners, and delivery partners.",

    value:
      "The platform makes food ordering faster and more convenient by offering real-time order tracking, secure payments, personalized recommendations, and an easy-to-use interface. Restaurants benefit from efficient order management, while customers enjoy a seamless dining experience.",
  },

  // Project goals
  goals: [
    {
      title: "Streamline Food Ordering",
      description:
        "Enable users to discover restaurants, browse menus, customize meals, and place orders with just a few taps.",
    },
    {
      title: "Improve Delivery Experience",
      description:
        "Provide real-time order tracking, accurate delivery estimates, and smooth communication between customers and delivery drivers.",
    },
    {
      title: "Enhance Customer Satisfaction",
      description:
        "Create a fast, intuitive, and enjoyable mobile experience with secure payments, favorite orders, and personalized recommendations.",
    },
    {
      title: "Support Restaurant Growth",
      description:
        "Help restaurants manage incoming orders efficiently, monitor sales performance, and reach more customers through one platform.",
    },
  ],

  // Project solution — each card has a project-specific icon
  solution: [
    {
      icon: "UtensilsCrossed",
      title: "Discover Restaurants Easily",
      description:
        "Browse nearby restaurants, explore categories, and find meals based on cuisine, ratings, or delivery time.",
    },
    {
      icon: "WalletCards",
      title: "Fast & Secure Ordering",
      description:
        "Customize meals, add items to the cart, and complete checkout quickly using multiple secure payment methods.",
    },
    {
      icon: "MapPinCheck",
      title: "Real-Time Order Tracking",
      description:
        "Track every stage of the order, from restaurant preparation to delivery, with live status updates and estimated arrival times.",
    },
  ],
});