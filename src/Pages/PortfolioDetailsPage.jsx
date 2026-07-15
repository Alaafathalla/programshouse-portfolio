import Hero from "../components/PortfolioDetailsComponents/Hero/Hero";
import Goals from "../components/PortfolioDetailsComponents/Goals";
import AboutProjectSection from "../components/PortfolioDetailsComponents/AboutProjectSection";
import Solution from "../components/PortfolioDetailsComponents/Solution";
import Connect from "../components/PortfolioDetailsComponents/Connect";
import Portfolio from "../components/HomeComponents/Portfolio";
import { ClientVideoReview } from "../components/PortfolioComponents/ClientReview";
export default function PortfolioDetailsPage() {
  const review = {
    text:
      "Propel let us spin up a new product in hours instead of weeks. It’s exactly what we needed as a company that deeply values developer velocity and joy.",
    name: "DANIEL BRIGGS",
    role: "Co-Founder",
    avatar: "/videoAvatar.png",
    videoSrc: "/videos/client-review.mp4",
    videoPoster:
      "/videoAvatar.png",
  };
  return (
    <main className="min-h-screen bg-[#111521]">
      <Hero />
      <Goals />
      <AboutProjectSection />
      <Solution />
      <Connect />

<Portfolio
  title="Explore"
  highlightedTitle=" more"
  textAlign="start"
  showDescription={false}
  id="related-projects"
/>


  <ClientVideoReview review={review} />
    </main>
  );
}