import { createProjectDetails } from "../createProjectDetails.js";

export const dolphinDetails = createProjectDetails({
  slug: "dolphin",
  shortTitle: "Dolphin Website",
  categoryLabel: "Corporate Website",
  description: "A responsive corporate website designed to present the company, services, capabilities, and contact channels professionally.",
  about: {
    idea: "Create a clean corporate presence that communicates the company’s identity and services with confidence.",
    client: "A growing company seeking a modern website that supports brand awareness and business inquiries.",
    value: "The website improves credibility, makes company information easier to access, and supports lead generation.",
  },
  goals: [
    { title: "Modernize Brand Presence", description: "Present the company through a polished and responsive experience." },
    { title: "Explain Services Clearly", description: "Organize capabilities and solutions in an easy-to-scan structure." },
    { title: "Build Business Trust", description: "Highlight company experience, values, and achievements." },
    { title: "Generate New Inquiries", description: "Make contact and service requests simple on every device." },
  ],
  solution: [
    { title: "Corporate Information Hub", description: "Company profile, services, and contact details are presented in one place." },
    { title: "Responsive User Experience", description: "The interface adapts smoothly across desktop, tablet, and mobile." },
    { title: "Lead-Focused Structure", description: "Clear calls to action guide visitors toward business conversations." },
  ],
});
