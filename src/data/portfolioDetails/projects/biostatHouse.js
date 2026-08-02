import { createProjectDetails } from "../createProjectDetails.js";

export const biostatHouseDetails = createProjectDetails({
  slug: "biostat-house",
  shortTitle: "Biostat House Website",
  categoryLabel: "Biostatistics Business Website",
  description: "A professional website presenting biostatistics, research support, data analysis, and scientific consulting services.",
  about: {
    idea: "Build a credible digital platform that explains specialized research and biostatistics services in a clear business-focused way.",
    client: "A research and analytics company supporting academics, healthcare professionals, and organizations with data-driven services.",
    value: "The website strengthens credibility, simplifies complex services, and helps potential clients request the right research support.",
  },
  goals: [
    { title: "Present Specialized Expertise", description: "Communicate research, statistics, and analytical capabilities clearly." },
    { title: "Simplify Service Discovery", description: "Help visitors understand available consulting and analysis services." },
    { title: "Build Professional Credibility", description: "Show methodology, expertise, and successful research support." },
    { title: "Increase Qualified Inquiries", description: "Guide researchers and organizations toward the right contact path." },
  ],
  solution: [
    { title: "Research Services Hub", description: "A central website for data analysis, study design, and scientific consulting." },
    { title: "Clear Service Architecture", description: "Services are grouped by user need and research stage." },
    { title: "Professional Inquiry Flow", description: "Visitors can submit project details and request tailored support." },
  ],
});
