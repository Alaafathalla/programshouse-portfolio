import { createProjectDetails } from "../createProjectDetails.js";

export const kasptonDetails = createProjectDetails({
  slug: "kaspton-home-services",
  shortTitle: "Kaspton Home Services Website",
  categoryLabel: "Home Services Platform",
  description: "A home services platform that helps customers discover, request, and manage trusted household services.",
  services: "Service Platform Development, UI/UX Design, Booking Experience",
  about: {
    idea: "Build a convenient digital platform that connects customers with home service professionals through a simple booking journey.",
    client: "A home services company providing maintenance, cleaning, repair, and household support services.",
    value: "The platform improves service discovery, reduces booking friction, and helps the company manage customer requests efficiently.",
  },
  goals: [
    { title: "Simplify Service Discovery", description: "Help users find the right home service by category and need." },
    { title: "Improve Booking Convenience", description: "Make scheduling and request submission fast and clear." },
    { title: "Build Customer Confidence", description: "Present service details and company information professionally." },
    { title: "Support Service Operations", description: "Organize requests, schedules, customers, and service statuses." },
  ],
  solution: [
    { title: "Home Services Catalog", description: "Users can explore service categories and detailed offerings." },
    { title: "Simple Booking Flow", description: "A guided form captures service type, location, and preferred schedule." },
    { title: "Request Management", description: "The business can review, assign, and track customer requests." },
  ],
});
