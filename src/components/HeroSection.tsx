import { Button } from "@/components/ui/button";
import heroImage from "@/assets/teacher-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium"></p>
            <h1 className="hero-title text-gradient">
              Muhammed B. Sabri
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground/90">
              Passionate <span className="text-accent">Educator</span> &amp; Mentor
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Dedicated to inspiring young minds and fostering a love for learning through 
            innovative teaching methods and personalized education approaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect hover:animate-pulse-glow transition-all duration-300"
            >
              Learn About Me
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-scale-in animation-delay-300">
          <div className="relative z-10 floating-element">
            <div className="glass-card p-8 rounded-2xl">
              <img 
                src="/lovable-uploads/fa6889f7-85f7-4d7e-96e4-c32af9256455.png" 
                alt="Sarah Johnson - Professional Teacher"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;