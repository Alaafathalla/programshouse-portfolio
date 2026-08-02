import { createProjectDetails } from "../createProjectDetails.js";

export const kasptonDetails = createProjectDetails({
  slug: "kaspton-home-services",
  shortTitle: "Kaspton Home Services Website",
  categoryLabel: "Home services website",
  description: " A professional website designed to help homeowners easily discover, book, and manage trusted home maintenance and repair services through a simple and user-friendly experience.",
  services: "Service Platform Development, UI/UX Design, Booking Experience",
  about: {
    idea: "Design a modern home services website that connects homeowners with trusted professionals for repair, maintenance, cleaning, and installation services. The website offers a simple and convenient way to book reliable services anytime.",
    client: "A home services company that provides professional maintenance and repair solutions, including plumbing, electrical work, HVAC services, cleaning, painting, and appliance repairs.",
    value: "The website simplifies the process of finding and booking trusted home service professionals. It improves customer convenience, increases service accessibility, and helps users schedule appointments quickly and confidently.",
  },
  goals: [
    { title: "Simplify Service Booking", description: "Enable customers to browse services, choose the right professional, and schedule appointments through a seamless booking experience." },
    { title: "Showcase Professional Services", description: "Present all available home services with clear descriptions, pricing information, and service categories to help users find what they need." },
    { title: "Build Customer Trust", description: "Increase credibility by displaying verified technicians, customer reviews, service guarantees, and completed projects." },
    { title: "Improve User Experience", description: "Create an intuitive, responsive, and visually engaging website that makes booking home services fast and hassle-free." },
  ],
  solution: [
    { title: "Easy Service Discovery", description: "Users can quickly browse categories such as plumbing, electrical, cleaning, painting, appliance repair, and HVAC services to find the right solution." },
    { title: "Quick Online Booking", description: "A streamlined booking process allows customers to select a service, choose their preferred date and time, and confirm appointments in just a few steps." },
    { title: "Trusted Professionals", description: "The website highlights certified technicians, customer ratings, and service guarantees to build confidence and ensure a reliable experience." },
  ],
});
