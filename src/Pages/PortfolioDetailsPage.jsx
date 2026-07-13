import { Goal } from "lucide-react";
import Hero from "../components/PortfolioDetailsComponents/Hero/Hero";
import Goals from "../components/PortfolioDetailsComponents/Goals";
export default function PortfolioDetailsPage() {
  return (
    <main className="min-h-screen bg-[#111521]">
      <Hero />
      <Goals />
    </main>
  );
}