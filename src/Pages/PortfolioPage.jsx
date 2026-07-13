import PortfolioHero from "../components/PortfolioComponents/PortfolioHero";
import PortfolioProjects from "../components/PortfolioComponents/PortfolioProjects";
import ClientReviewSection from "../components/PortfolioComponents/Client’sReview";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111521] text-white">
      <PortfolioHero />

      <PortfolioProjects />
      <ClientReviewSection />
          
    </main>
  );
}