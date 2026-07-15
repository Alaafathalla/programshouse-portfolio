import PortfolioHero from "../components/PortfolioComponents/PortfolioHero";
import PortfolioProjects from "../components/PortfolioComponents/PortfolioProjects";
import {
  ClientReviewCard,
  ClientVideoReview,
} from "../components/PortfolioComponents/ClientReview";
export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111521] text-white">
      <PortfolioHero />

      <PortfolioProjects />
<ClientReviewCard
        review={{
          text:
            "The team transformed our idea into a professional and easy-to-use digital product.",
          name: "DANIEL BRIGGS",
          role: "Co-Founder",
          avatar: "/images/avatar.svg",
        }}
      />          
    </main>
  );
}