import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PrecisionSection } from "@/components/PrecisionSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TrainingSection } from "@/components/TrainingSection";
import { FutureVisionSection } from "@/components/FutureVisionSection";
import { CareersSection } from "@/components/CareersSection";
import { MediaSection } from "@/components/MediaSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SectionTransition } from "@/components/SectionTransition";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PrecisionSection />
      <SectionTransition variant="line" />
      <AboutSection />
      <SectionTransition variant="dots" />
      <ProductsSection />
      <SectionTransition variant="line" />
      <TrainingSection />
      <SectionTransition variant="dots" />
      <FutureVisionSection />
      <SectionTransition variant="line" />
      <CareersSection />
      <SectionTransition variant="dots" />
      <MediaSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
