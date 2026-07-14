import { Goal } from "lucide-react";
import Hero from "../components/PortfolioDetailsComponents/Hero/Hero";
import Goals from "../components/PortfolioDetailsComponents/Goals";
import AboutProjectSection from "../components/PortfolioDetailsComponents/AboutProjectSection ";
import Solution from "../components/PortfolioDetailsComponents/Solution";
export default function PortfolioDetailsPage() {
  return (
    <main className="min-h-screen bg-[#111521]">
      <Hero />
      <Goals />
      {/* <AboutProjectSection /> */}
      <Solution/>
    </main>
  );
}