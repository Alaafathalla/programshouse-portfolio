import { createProjectDetails } from "../createProjectDetails.js";

export const reemAhmedDetails = createProjectDetails({
  slug: "reem-ahmed",
  shortTitle: "Reem Ahmed Life Coaching Website",
  categoryLabel: "Life Coaching Website",
  description: "A personal coaching website that introduces the coach, programs, sessions, and a clear path to booking consultations.",
  services: "UX Research, UI/UX Design, Website Development",
  about: {
    idea: "Create a warm and inspiring digital presence that helps visitors understand the coach’s approach and begin a personal development journey.",
    client: "A life coach offering guidance in personal growth, relationships, mindset, balance, and lifestyle organization.",
    value: "The website builds trust, presents coaching services clearly, and makes consultation booking simple and approachable.",
  },
  goals: [
    { title: "Build Personal Trust", description: "Present the coach’s story, values, and expertise through an authentic digital identity." },
    { title: "Explain Coaching Programs", description: "Organize sessions and programs so visitors can quickly find the right support." },
    { title: "Encourage Session Booking", description: "Use clear calls to action and a simple inquiry path to increase bookings." },
    { title: "Support Long-Term Growth", description: "Create a flexible platform for future courses, resources, and community content." },
  ],
  solution: [
    { title: "Personal Brand Experience", description: "A calm visual identity communicates trust, confidence, and positive transformation." },
    { title: "Program & Session Pages", description: "Each service is presented with clear outcomes, details, and booking guidance." },
    { title: "Simple Contact Journey", description: "Visitors can move from discovery to consultation request with minimal steps." },
  ],
});
