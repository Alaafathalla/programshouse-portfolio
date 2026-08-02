import { createProjectDetails } from "../createProjectDetails.js";

export const swswAppDetails = createProjectDetails({
  slug: "swsw-app",
  shortTitle: "Food App",
  categoryLabel: "Food Delivery Application",
  description: "A modern food delivery application connecting customers with nearby restaurants through a fast and convenient ordering experience.",
  services: "UX Research, UI/UX Design, Mobile App Development",
  about: {
    idea: "Build a smart food delivery platform that connects customers with nearby restaurants through one seamless experience.",
    client: "A growing food delivery startup aiming to simplify online ordering while helping restaurants reach more customers.",
    value: "The platform makes food ordering faster and more convenient with real-time tracking, secure payments, and personalized recommendations.",
  },
  goals: [
    { title: "Streamline Food Ordering", description: "Enable users to discover restaurants, browse menus, customize meals, and place orders quickly." },
    { title: "Improve Delivery Experience", description: "Provide real-time tracking, accurate estimates, and smooth communication." },
    { title: "Enhance Customer Satisfaction", description: "Create a fast and enjoyable experience with secure payments and favorite orders." },
    { title: "Support Restaurant Growth", description: "Help restaurants manage orders, monitor performance, and reach more customers." },
  ],
  solution: [
    { title: "Restaurant Discovery", description: "Browse nearby restaurants, cuisines, menus, and offers from one application." },
    { title: "Fast & Secure Ordering", description: "Customize meals, add items to the cart, and complete checkout securely." },
    { title: "Real-Time Order Tracking", description: "Follow every stage from restaurant preparation to delivery." },
  ],
});
