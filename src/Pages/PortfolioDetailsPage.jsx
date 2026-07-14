import { Goal } from "lucide-react";
import Hero from "../components/PortfolioDetailsComponents/Hero/Hero";
import Goals from "../components/PortfolioDetailsComponents/Goals";
import AboutProjectSection from "../components/PortfolioDetailsComponents/AboutProjectSection ";
import Solution from "../components/PortfolioDetailsComponents/Solution";
import Connect from "../components/PortfolioDetailsComponents/Connect";
export default function PortfolioDetailsPage() {
  return (
    <main className="min-h-screen bg-[#111521]">
      <Hero />
      <Goals />
      {/* <AboutProjectSection /> */}
      <Solution/>
      <Connect />
    </main>
  );
}