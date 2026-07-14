import Hero from "../components/PortfolioDetailsComponents/Hero/Hero";
import Goals from "../components/PortfolioDetailsComponents/Goals";
import AboutProjectSection from "../components/PortfolioDetailsComponents/AboutProjectSection";
import Solution from "../components/PortfolioDetailsComponents/Solution";
import Connect from "../components/PortfolioDetailsComponents/Connect";
import Portfolio from "../components/HomeComponents/Portfolio";

export default function PortfolioDetailsPage() {
  return (
    <main className="min-h-screen bg-[#111521]">
      <Hero />
      <Goals />
      {/* <AboutProjectSection /> */}
      <Solution />
      <Connect />

      <Portfolio
        title="explore  "
        highlightedTitle="more"
        className="text-start"
        showDescription={false}
        id="related-projects"
      />
    </main>
  );
}