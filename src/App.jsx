import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./Pages/HomePage"));
const Services = lazy(() => import("./Pages/servicesPage"));

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

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-white">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>

      <Footer />
    </main>
  );
}