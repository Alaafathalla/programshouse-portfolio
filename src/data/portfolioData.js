export const projects = [
  {
    id: 1,
    slug: "rosetta-medical",
    title: "Rosetta Medical Mobile App & Dashboard",
    category: "mobile",
    type: "Healthcare Platform",
    description:
      "Smart prescription delivery platform connecting users with nearby pharmacies.",
    image: "/images/portfolioPage/card(2).png",
    mobileImage: "/images/portfolioPage/card(2).png",
    tags: ["React", "Flutter"],
  },
  {
    id: 2,
    slug: "prof-medical",
    title: "PROF Medical Research Platform",
    category: "web",
    type: "Medical Research Platform",
    description:
      "Research platform for healthcare professionals and medical content.",
    image: "/images/portfolioPage/card(3).png",
    mobileImage: "/images/portfolioPage/card(3).png",
    tags: ["React", "Laravel"],
  },
  {
    id: 3,
    slug: "ms-marketing",
    title: "M&S Marketing Website",
    category: "web",
    type: "Corporate Website",
    description:
      "Corporate marketing website with service showcase and lead generation.",
    image: "/images/portfolioPage/card(4).png",
    mobileImage: "/images/portfolioPage/card(4).png",
    tags: ["React", "Laravel"],
  },
  {
    id: 4,
    slug: "reem-ahmed",
    title: "Reem Ahmed Life Coaching Website",
    category: "web",
    type: "Coaching Platform",
    description:
      "Personal coaching platform with booking and consultation features.",
    image: "/images/portfolioPage/card(14).png",
    mobileImage: "/images/portfolioPage/card(14).png",
    tags: ["React", "Laravel"],
  },
  {
    id: 5,
    slug: "nizam-hr",
    title: "Nizam HR Management System",
    category: "web",
    type: "HR Management System",
    description:
      "Complete HR platform with web dashboard and employee mobile application.",
    image: "/images/portfolioPage/card(5).png",
    mobileImage: "/images/portfolioPage/card(5).png",
    tags: ["Laravel", "Flutter"],
  },
  {
    id: 6,
    slug: "biostat-house",
    title: "Biostat House Website",
    category: "web",
    type: "Business Website",
    description:
      "Professional business website designed for startup and corporate services.",
    image: "/images/portfolioPage/card(6).png",
    mobileImage: "/images/portfolioPage/card(6).png",
    tags: ["React", "Laravel"],
  },
  {
    id: 7,
    slug: "medical-islands",
    title: "Medical Islands Website",
    category: "web",
    type: "Medical E-Commerce",
    description:
      "Modern medical e-commerce website with customer and admin dashboard.",
    image: "/images/portfolioPage/card(7).png",
    mobileImage: "/images/portfolioPage/card(7).png",
    tags: ["React", "PHP"],
  },
  {
    id: 8,
    slug: "raq-dashboard",
    title: "RAQ Application Dashboard",
    category: "mobile",
    type: "Business Dashboard",
    description:
      "Business management dashboard with analytics and reporting features.",
    image: "/images/portfolioPage/card(8).png",
    mobileImage: "/images/portfolioPage/card(8).png",
    tags: ["React", "Laravel"],
  },
  {
    id: 9,
    slug: "dolphin",
    title: "Dolphin Website",
    category: "web",
    type: "Corporate Website",
    description:
      "Corporate website with modern UI and responsive experience.",
    image: "/images/portfolioPage/card(9).png",
    mobileImage: "/images/portfolioPage/card(9).png",
    tags: ["React", "JavaScript"],
  },
  {
    id: 10,
    slug: "swsw-app",
    title: "SWSW Application",
    category: "mobile",
    type: "Food Delivery Application",
    description:
      "Food delivery mobile application with customer and driver experiences.",
    image: "/images/portfolioPage/card(10).png",
    mobileImage: "/images/portfolioPage/card(10).png",
    tags: ["Laravel", "Flutter"],
  },
  {
    id: 11,
    slug: "zewail-academy",
    title: "Zewail Academy Website",
    category: "web",
    type: "Educational Platform",
    description:
      "Educational platform for courses, registrations and student management.",
    image: "/images/portfolioPage/card(11).png",
    mobileImage: "/images/portfolioPage/card(11).png",
    tags: ["React", "Laravel"],
  },
  {
    id: 12,
    slug: "digital-plus",
    title: "Digital Plus Marketing Website",
    category: "web",
    type: "Marketing Website",
    description:
      "Marketing agency website focused on branding and digital services.",
    image: "/images/portfolioPage/card(12).png",
    mobileImage: "/images/portfolioPage/card(12).png",
    tags: ["React", "Laravel"],
  },
  {
    id: 13,
    slug: "kaspton-home-services",
    title: "Kaspton Home Services Website",
    category: "web",
    type: "Home Services Platform",
    description:
      "Home services platform with booking and service management.",
    image: "/images/portfolioPage/card(13).png",
    mobileImage: "/images/portfolioPage/card(13).png",
    tags: ["React", "PHP"],
  },
  {
    id: 14,
    slug: "cp-dashboard",
    title: "CP Dashboard",
    category: "web",
    type: "Business Dashboard",
    description:
      "Business dashboard for monitoring operations and performance.",
    image: "/images/portfolioPage/card(1).png",
    mobileImage: "/images/portfolioPage/card(1).png",
    tags: ["React", "Laravel"],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const getProjectsByCategory = (category) => {
  if (!category || category === "all") return projects;
  return projects.filter((project) => project.category === category);
};