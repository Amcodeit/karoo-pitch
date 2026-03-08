import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoCanApplySection from "@/components/WhoCanApplySection";
import InvestorsSection from "@/components/InvestorsSection";
import FeaturedStartupsSection from "@/components/FeaturedStartupsSection";
import AboutKaroStartupSection from "@/components/AboutKaroStartupSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <WhoCanApplySection />
      <InvestorsSection />
      <FeaturedStartupsSection />
      <AboutKaroStartupSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
