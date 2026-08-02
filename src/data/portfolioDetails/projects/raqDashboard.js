import { createProjectDetails } from "../createProjectDetails.js";

export const raqDashboardDetails = createProjectDetails({
  slug: "raq-dashboard",
  shortTitle: "RAQ Application Dashboard",
  categoryLabel: "Business Analytics Dashboard",
  description: "A business dashboard that centralizes operational data, analytics, reporting, and performance monitoring.",
  services: "Dashboard Development, UI/UX Design, Backend Integration",
  about: {
    idea: "Turn complex operational data into a clear dashboard that helps teams understand performance and act faster.",
    client: "A business requiring centralized monitoring, analytics, and reporting across multiple operational areas.",
    value: "The dashboard reduces reporting effort, improves visibility, and supports better day-to-day decisions.",
  },
  goals: [
    { title: "Centralize Business Data", description: "Bring key operational information into one dashboard." },
    { title: "Improve Performance Visibility", description: "Use clear metrics, charts, and status indicators." },
    { title: "Simplify Reporting", description: "Reduce manual reporting with organized and exportable views." },
    { title: "Support Faster Decisions", description: "Help managers identify trends, issues, and priorities quickly." },
  ],
  solution: [
    { title: "Unified Operations Dashboard", description: "A single interface connects core business data and workflows." },
    { title: "Interactive Analytics", description: "Filters and visual reports make performance easier to understand." },
    { title: "Role-Based Management", description: "Users access the information and actions relevant to their responsibilities." },
  ],
});
