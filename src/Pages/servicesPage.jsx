import ServicesHero from "../components/servicesComponents/ServicesHero";
import DesignServices from "../components/servicesComponents/DesignServices";
import DevelopmentServices from "../components/servicesComponents/DevelopmentServices";
import DiscoverServices from "../components/servicesComponents/DiscoverServices";
import SupportServices from "../components/servicesComponents/SupportServices";

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