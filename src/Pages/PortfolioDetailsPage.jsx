import { Navigate, useParams } from "react-router-dom";

import Hero from "../components/PortfolioDetailsComponents/Hero/Hero";
import Goals from "../components/PortfolioDetailsComponents/Goals";
import AboutProjectSection from "../components/PortfolioDetailsComponents/AboutProjectSection";
import Solution from "../components/PortfolioDetailsComponents/Solution";
import Connect from "../components/PortfolioDetailsComponents/Connect";
import Portfolio from "../components/HomeComponents/Portfolio";

import {
  ClientVideoReview,
} from "../components/PortfolioComponents/ClientReview";

import {
  getPortfolioDetailsBySlug,
} from "../data/portfolioDetailsData";

export default function PortfolioDetailsPage() {
  const { slug } = useParams();

  const project =
    getPortfolioDetailsBySlug(slug);

  if (!project) {
    return (
      <Navigate
        to="/portfolio"
        replace
      />
    );
  }

  return (
    <main className="min-h-screen bg-[#111521]">
      <Hero project={project} />

      <AboutProjectSection
        project={project}
      />

      <Goals project={project} />

      <Solution project={project} />

      <Connect />

      <Portfolio
        title="Explore"
        highlightedTitle=" more"
        textAlign="start"
        showDescription={false}
        id="related-projects"
      />

      <ClientVideoReview
        review={project.review}
      />
    </main>
  );
}