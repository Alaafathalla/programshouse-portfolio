import { createProjectDetails } from "../createProjectDetails.js";

export const cpDashboardDetails = createProjectDetails({
  slug: "cp-dashboard",
  shortTitle: "CP Dashboard",
  categoryLabel: "Business Management Dashboard",
  description: "A business dashboard for monitoring operations, performance, users, and key management workflows.",
  services: "Dashboard Development, UI/UX Design, System Integration",
  about: {
    idea: "Create a centralized management interface that turns daily operations into clear, actionable workflows.",
    client: "An organization seeking better visibility and control across users, processes, and performance data.",
    value: "The dashboard improves operational clarity, reduces manual work, and helps teams respond faster.",
  },
  goals: [
    { title: "Centralize Management", description: "Bring core operational tools and information into one interface." },
    { title: "Improve Data Visibility", description: "Present KPIs, statuses, and trends in clear visual formats." },
    { title: "Reduce Manual Work", description: "Streamline repetitive administrative and reporting tasks." },
    { title: "Support Scalable Operations", description: "Use reusable modules that can grow with new requirements." },
  ],
  solution: [
    { title: "Unified Admin Workspace", description: "Users, records, and operational tools are connected in one dashboard." },
    { title: "Performance Monitoring", description: "Charts and summary cards provide quick business visibility." },
    { title: "Flexible Management Modules", description: "Reusable sections support future features and workflows." },
  ],
});
