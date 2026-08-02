import { createProjectDetails } from "../createProjectDetails.js";

export const zewailAcademyDetails = createProjectDetails({
  slug: "zewail-academy",
  shortTitle: "Zewail Academy Website",
  categoryLabel: "Educational Platform",
  description: "An educational platform for presenting courses, managing registrations, and supporting students throughout their learning journey.",
  services: "Educational Platform Development, UI/UX Design, Admin Dashboard",
  about: {
    idea: "Build an organized learning platform that connects students with courses, schedules, registration, and academy information.",
    client: "An education provider delivering courses and programs to students through online and offline learning experiences.",
    value: "The platform improves enrollment, simplifies academic administration, and gives students clearer access to learning opportunities.",
  },
  goals: [
    { title: "Simplify Course Discovery", description: "Help students browse programs, levels, schedules, and course details." },
    { title: "Improve Registration", description: "Create a clear enrollment flow with fewer manual steps." },
    { title: "Support Student Management", description: "Organize student records, payments, and course participation." },
    { title: "Strengthen Academy Presence", description: "Present the academy’s expertise, instructors, and achievements professionally." },
  ],
  solution: [
    { title: "Course Catalog", description: "Programs and course details are structured for easy comparison and enrollment." },
    { title: "Registration & Payment Flow", description: "Students can submit information and complete required enrollment steps." },
    { title: "Academy Admin Dashboard", description: "Staff can manage courses, students, schedules, and academic records." },
  ],
});
