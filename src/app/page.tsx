import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SmileGallery from "@/components/sections/SmileGallery";
import Technology from "@/components/sections/Technology";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStats />
      <Services />
      <About />
      <WhyChooseUs />
      <SmileGallery />
      <Technology />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Contact />
    </main>
  );
}
