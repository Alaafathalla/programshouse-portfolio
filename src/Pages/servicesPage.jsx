import ServicesHero from "../components/ServicesComponents/ServicesHero";
import DesignServices from "../components/ServicesComponents/DesignServices";
import DevelopmentServices from "../components/ServicesComponents/DevelopmentServices";
import DiscoverServices from "../components/ServicesComponents/DiscoverServices";
import SupportServices from "../components/ServicesComponents/SupportServices";

export default function Services() {
  return (
    <>
      <section id="services-hero" className="scroll-mt-[90px]">
        <ServicesHero />
      </section>

      <section id="design" className="scroll-mt-[90px]">
        <DesignServices />
      </section>

      <section id="development" className="scroll-mt-[90px]">
        <DevelopmentServices />
      </section>

      <section id="discover" className="scroll-mt-[90px]">
        <DiscoverServices />
      </section>

      <section id="support" className="scroll-mt-[90px]">
        <SupportServices />
      </section>
    </>
  );
}