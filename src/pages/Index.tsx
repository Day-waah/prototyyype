import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PrecisionSection } from "@/components/PrecisionSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TrainingSection } from "@/components/TrainingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PrecisionSection />
      <AboutSection />
      <ProductsSection />
      <TrainingSection />
      <Footer />
    </main>
  );
};

export default Index;
