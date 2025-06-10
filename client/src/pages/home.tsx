import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OverviewSection from "@/components/overview-section";
import PillarsSection from "@/components/pillars-section";
import FeaturesSection from "@/components/features-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <PillarsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
