import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/ui/Loader";


const Home = lazy(() => import("./Pages/HomePage"));
const Services = lazy(() => import("./Pages/servicesPage"));
const Portfolio = lazy(() => import("./Pages/portfolioPage"));
const PortfolioDetailsPage = lazy(() => import("./Pages/PortfolioDetailsPage"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

export default function App() {
  return (
    <main
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <Header />

<Suspense fallback={<Loader />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/portfolio/:slug" element={<PortfolioDetailsPage />} />
     <Route path="*" element={<ErrorPage />} />
     
  </Routes>
</Suspense>

      <Footer />
    </main>
  );
}