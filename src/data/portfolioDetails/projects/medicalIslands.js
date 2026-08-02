import { createProjectDetails } from "../createProjectDetails.js";

export const medicalIslandsDetails = createProjectDetails({
  slug: "medical-islands",
  shortTitle: "Medical Islands Website",
  categoryLabel: "Medical E-Commerce Platform",
  description: "A modern medical e-commerce website for discovering products, comparing options, and managing purchases online.",
  services: "E-Commerce Development, UI/UX Design, Admin Dashboard",
  about: {
    idea: "Create a trustworthy medical shopping experience that combines product discovery, detailed information, and simple checkout.",
    client: "A healthcare retailer seeking a scalable online store for medical products and customer management.",
    value: "The platform expands digital sales, improves product access, and gives customers a safer and clearer shopping experience.",
  },
  goals: [
    { title: "Simplify Product Discovery", description: "Help customers browse and search medical products by category and need." },
    { title: "Build Customer Trust", description: "Present accurate product information and a professional healthcare identity." },
    { title: "Improve Purchase Flow", description: "Make cart, checkout, and order tracking clear across devices." },
    { title: "Support Store Management", description: "Give administrators control over products, orders, customers, and content." },
  ],
  solution: [
    { title: "Medical Product Catalog", description: "Structured categories, filters, and product pages improve discovery." },
    { title: "Secure E-Commerce Flow", description: "A responsive cart and checkout experience reduces purchase friction." },
    { title: "Admin Management Dashboard", description: "Store teams can manage inventory, orders, promotions, and users." },
  ],
});
