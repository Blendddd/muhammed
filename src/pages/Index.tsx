import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SubjectsSection from "@/components/SubjectsSection";
import ContactSection from "@/components/ContactSection";
const Index = () => {
  return <div className="min-h-screen relative">
      <FloatingParticles />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SubjectsSection />
        
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2024 Muhammed b. Sabri. All rights reserved. | Inspiring minds, building futures.</p>
        </div>
      </footer>
    </div>;
};
export default Index;