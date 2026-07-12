export const projects = [
  {
    id: 1,
    slug: "nizam-hr-system",
    title: "Nizam HR System",
    category: "web",
    type: "HR Management Platform",
    description:
      "A complete HR management platform for employees, attendance, payroll, reports, and company administration.",
    image: "/images/portfolio/img.png",
    tags: ["React", "Laravel", "Dashboard"],
  },
  {
    id: 2,
    slug: "swsw-delivery",
    title: "SWSW Delivery",
    category: "mobile",
    type: "Food Delivery Application",
    description:
      "A complete food delivery ecosystem connecting clients, kitchens, delivery drivers, and administrators.",
    image: "/images/portfolio/img.png",
    tags: ["Flutter", "Laravel", "Mobile App"],
  },
  {
    id: 3,
    slug: "aventix",
    title: "Aventix",
    category: "web",
    type: "Medical E-Commerce",
    description:
      "A modern Arabic medical e-commerce experience designed for medicines, cosmetics, and healthcare products.",
    image: "/images/portfolio/portfolio2.png",
    tags: ["React", "E-Commerce", "UI/UX"],
  },
  {
    id: 4,
    slug: "zewail-academy",
    title: "Zewail Academy",
    category: "web",
    type: "Educational Management System",
    description:
      "An integrated academic system for managing students, courses, certificates, payments, and branches.",
    image: "/images/portfolio/portfolio3.png",
    tags: ["Laravel", "Admin Panel", "Education"],
  },
  {
    id: 5,
    slug: "finance-mobile-app",
    title: "Finance Mobile App",
    category: "mobile",
    type: "Financial Application",
    description:
      "A responsive mobile application for managing payments, transactions, reports, and account activity.",
    image: "/images/portfolio/mobile port (2).png",
    tags: ["Flutter", "API", "Finance"],
  },
  {
    id: 6,
    slug: "medical-brand-identity",
    title: "Medical Brand Identity",
    category: "branding",
    type: "Branding & Visual Identity",
    description:
      "A clean and modern visual identity created for a digital healthcare and medical commerce brand.",
    image: "/images/portfolio/portfolio4.png",
    tags: ["Logo Design", "Branding", "Identity"],
  },
  {
    id: 7,
    slug: "restaurant-platform",
    title: "Restaurant Platform",
    category: "web",
    type: "Restaurant Website",
    description:
      "A professional restaurant platform featuring online ordering, menu management, and reservation services.",
    image: "/images/portfolio/portfolio5.png",
    tags: ["React", "Responsive", "Ordering"],
  },
  {
    id: 8,
    slug: "learning-application",
    title: "Learning Application",
    category: "mobile",
    type: "Educational Mobile App",
    description:
      "An interactive learning application that helps students access courses, lessons, tests, and progress reports.",
    image: "/images/portfolio/mobile port (3).png",
    tags: ["Flutter", "Education", "UI Design"],
  },
  {
    id: 9,
    slug: "corporate-identity",
    title: "Corporate Identity",
    category: "branding",
    type: "Corporate Branding",
    description:
      "A consistent corporate identity system including logo design, typography, colors, and digital guidelines.",
    image: "/images/portfolio/portfolio6.png",
    tags: ["Brand Strategy", "Logo", "Guidelines"],
  },
];

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
  if (!category || category === "all") {
    return projects;
  }

  return projects.filter((project) => project.category === category);
};