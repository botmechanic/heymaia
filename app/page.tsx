import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Features } from "@/components/sections/Features";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Install } from "@/components/sections/Install";
import { Languages } from "@/components/sections/Languages";
import { Privacy } from "@/components/sections/Privacy";
import { Support } from "@/components/sections/Support";
import { UnderTheHood } from "@/components/sections/UnderTheHood";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Privacy />
        <HowItWorks />
        <Languages />
        <Features />
        <UnderTheHood />
        <Install />
        <Support />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
