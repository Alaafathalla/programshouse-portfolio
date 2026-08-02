export const defaultAboutImageStyles = {
  first: {
    className: `
      pointer-events-none absolute z-20 object-contain
      bottom-[-5%] left-[5%] h-[105%] w-[90%]
      sm:bottom-[-7%] sm:left-[4%] sm:h-[110%] sm:w-[92%]
      lg:bottom-[-9%] lg:left-[3%] lg:h-[115%] lg:w-[94%]
    `,
  },
  second: {
    className: `
      pointer-events-none absolute z-20 object-contain
      bottom-[-5%] right-[5%] h-[105%] w-[90%]
      sm:bottom-[-7%] sm:right-[4%] sm:h-[110%] sm:w-[92%]
      lg:bottom-[-9%] lg:right-[3%] lg:h-[115%] lg:w-[94%]
    `,
  },
};

export const sharedDetails = {
  services: "Web & Mobile Development, UI/UX Design",
  team: "6 specialists",
  about: {
    idea: "Build a connected digital product that replaces fragmented manual processes with one clear, reliable and easy-to-use experience.",
    client: "A growing organization looking for a modern solution that supports customers, teams and daily operations across different locations.",
    value: "The product reduces repetitive work, improves service quality and gives users faster access to the features they need.",
  },
  goals: [
    { title: "Simplify Core Operations", description: "Bring the most important daily workflows together in one organized digital experience." },
    { title: "Improve User Experience", description: "Create a clear, responsive and intuitive journey across desktop and mobile devices." },
    { title: "Increase Efficiency", description: "Reduce manual steps and help teams complete tasks faster with fewer errors." },
    { title: "Support Future Growth", description: "Use a flexible structure that can grow with new users, services and business requirements." },
  ],
  solution: [
    { title: "Unified Digital Platform", description: "A single destination that connects the project’s main services, content and workflows." },
    { title: "Seamless User Flow", description: "Every step is designed to feel fast, clear and consistent from entry to completion." },
    { title: "Scalable Architecture", description: "Reusable modules make the product easier to maintain, extend and adapt over time." },
  ],
  review: {
    text: "Programs House transformed our idea into a polished digital product with a clear process, thoughtful design and dependable delivery.",
    name: "CLIENT REVIEW",
    role: "Project Owner",
    avatar: "/videoAvatar.png",
    videoSrc: "/videos/client-review.mp4",
    videoPoster: "/videoAvatar.png",
  },
};

export const defaultHeroImageStyles = {
  className: "relative z-10 h-auto w-full max-w-[720px] object-contain",
};

export const defaultGoalsImageStyles = {
  wrapperClassName: "relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-[15px] bg-[#1B202C] sm:min-h-[360px] lg:min-h-[410px]",
  className: "relative z-10 h-auto w-[92%] max-w-none object-contain sm:w-[94%] lg:w-[96%]",
};

export const defaultSolutionImageStyles = {
  wrapperClassName: "relative flex min-h-[320px] w-full items-center justify-center overflow-hidden rounded-[15px] sm:min-h-[380px] lg:min-h-[430px]",
  className: "relative z-10 mx-auto h-auto w-[94%] max-w-none object-contain sm:w-[92%] lg:w-[96%]",
};
