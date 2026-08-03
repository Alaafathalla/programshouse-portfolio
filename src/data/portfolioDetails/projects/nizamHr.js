import { createProjectDetails } from "../createProjectDetails.js";

export const nizamHrDetails = createProjectDetails({
  slug: "nizam-hr",
  shortTitle: "Nizam HR System",
  categoryLabel: "Human Resource Management System",
  description: "A connected HR ecosystem combining an employee mobile application with a centralized management dashboard.",
  services: "UX Research, UI/UX Design, Web & Mobile Development",
  imageFolder: "nizam-hr",
  // Project story
  about: {
    idea: "Build a connected HR ecosystem that combines an employee mobile application with a centralized management dashboard. Employees can manage attendance, leave requests, tasks, payslips, and personal records, while HR teams control daily operations from one platform.",
    client: "A growing organization looking to replace manual HR processes with a modern digital solution that connects employees, managers, and HR administrators across different departments, branches, and work locations.",
    value: "The system reduces repetitive work, improves data accuracy, and gives management real-time visibility into workforce operations.",
  },
aboutImageStyles: {
  first: {
    wrapperClassName: `
      relative
      mx-auto
      flex
      min-h-[320px]
      w-full
      items-end
      justify-start
      overflow-hidden
      rounded-[18px]

      sm:min-h-[340px]

      lg:min-h-[300px]
    `,

    className: `
      relative
      h-auto
      w-[185%]
      max-w-none
      object-contain

      -translate-x-[15px]
      translate-y-[75px]

      sm:w-[165%]
      sm:-translate-x-[40px]
      sm:translate-y-[45px]

      lg:w-[180%]
      lg:max-h-none
      lg:translate-x-[40px]
      lg:translate-y-[60px]
    `,
  },
},
  // Project goals
  goals: [
    { title: "Streamline HR Operations", description: "Simplify employee management, attendance, payroll, and administrative tasks through one platform." },
    { title: "Improve Workforce Management", description: "Manage employees, departments, shifts, leave requests, and organizational structure efficiently." },
    { title: "Enhance Employee Experience", description: "Give employees mobile access to attendance, payslips, leave requests, and announcements." },
    { title: "Support Data-Driven Decisions", description: "Deliver analytics and reports that help management make faster decisions." },
  ],
  // Project solution — each card has a project-specific icon
  solution: [
    { icon: "LayoutDashboard", title: "Centralized HR Dashboard", description: "Manage employee records, departments, attendance, payroll, and requests from one dashboard." },
    { icon: "Smartphone", title: "Employee Mobile Experience", description: "Employees can review records, request leave, receive announcements, and access payslips." },
    { icon: "ChartColumnIncreasing", title: "Analytics & Reporting", description: "Real-time reports provide clearer visibility into workforce performance and operations." },
  ],
});
