import { createProjectDetails } from "../createProjectDetails.js";

export const digitalPlusDetails = createProjectDetails({
  slug: "digital-plus",
  shortTitle: "Digital Plus Marketing Website",
  categoryLabel: "Digital Marketing Agency Website",
  description: " A modern corporate website designed to represent a digital marketing agency, showcase its services and portfolio, and convert visitors into potential clients through an engaging and professional user experience.",
 
 aboutImageStyles: {
    first: {
      wrapperClassName: `
      
      `,

      className: `
lg:w-[90%]
lg:h-[95%]
        lg:translate-y-[14px]
        lg:translate-x-[55px]
      `,
    },

    second: {
      wrapperClassName: `
       
      `,

      className: `
    
        lg:translate-x-[0px]
        lg:translate-y-[0px]
      `,
    },
  },

 
  // Project story
  about: {
    idea: "Design a modern corporate website for a digital marketing agency that highlights the company's expertise, services, and successful projects. The website creates a strong first impression while encouraging businesses to connect and grow their brands.",
    client: "A creative digital marketing agency that helps businesses strengthen their online presence through strategic marketing, branding, social media management, paid advertising, and creative content.",
    value: "The platform simplifies access to medicines by helping patients quickly locate available products, compare nearby pharmacies, and complete their purchases with ease, saving both time and effort.",
  },

    goalsImageStyles: {
    wrapperClassName: `
      relative
      flex
      items-center
      justify-center
      overflow-hidden
      rounded-[18px]
      lg:justify-self-end
    `,

    className: `
      relative
      object-contain
      object-center

    `,
  },
  // Project goals
  goals: [
    { title: "Build a Strong Brand Presence", description: "Create a professional digital identity that reflects the agency's creativity, expertise, and credibility." },
    { title: "Showcase Services Clearly", description: "Present the company's marketing services in a simple, organized, and visually appealing way to help visitors quickly understand what the agency offers." },
    { title: "Highlight Portfolio & Success Stories", description: "Display previous projects, client success stories, and testimonials to build trust and demonstrate real business impact." },
    { title: "Increase Client Engagement", description: "Encourage visitors to contact the agency, request a consultation, or start a project through clear calls-to-action and an intuitive user journey." },
  ],
  // Project solution — each card has a project-specific icon
  solution: [
    { icon: "Presentation", title: "Professional Company Showcase", description: "A visually engaging website that communicates the agency's mission, expertise, and competitive advantages." },
    { icon: "Megaphone", title: "Service-Focused Experience", description: "Organized service pages that clearly explain each marketing solution, helping businesses understand how the agency can support their growth.." },
    { icon: "Trophy", title: "Portfolio & Client Success", description: "A dedicated portfolio section featuring completed projects, client testimonials, and measurable results to strengthen credibility." },
  ],
});
