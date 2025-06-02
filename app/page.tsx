import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import PersonalSection from "@/components/personal-section";
import BusinessSection from "@/components/business-section";
import WhySection from "@/components/why-section";
import ComingSoonSection from "@/components/coming-soon-section";
import Footer from "@/components/footer";
import Image from "next/image";
import IntroHeader from "@/components/IntroHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <IntroHeader />
      <HeroSection />
      <AboutSection />
      <PersonalSection />
      <BusinessSection />
      <WhySection />
      <ComingSoonSection />
      <Footer />
    </main>
  );
}
