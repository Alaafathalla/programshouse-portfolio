export const medicalProject = {
  title: "Medical App",
  category: "Business",

  description:
    "Launched native apps for iOS, Android, and web, ensuring consistent UX.",

  services:
    "Launched native apps for iOS, Android, and web, ensuring consistent UX.",

  team: "6 specialists",

  images: {
    phone: "/images/portfolioDetailsPage/phone.png",
    person: "/images/portfolioDetailsPage/person.png",
    product: "/images/portfolioDetailsPage/product.png",
  },
};

export const projectDetails = [
  {
    label: "Category:",
    value: medicalProject.category,
  },
  {
    label: "Description:",
    value: medicalProject.description,
  },
  {
    label: "Services:",
    value: medicalProject.services,
  },
  {
    label: "Team:",
    value: medicalProject.team,
  },
];

export const primaryColor = "#77A6D0";

export const motionEase = [0.22, 1, 0.36, 1];

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};