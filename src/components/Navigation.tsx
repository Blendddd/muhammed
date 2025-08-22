import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-card py-4" : "py-6"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-gradient">
          EduPortfolio
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Subjects", "Testimonials", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <Button 
          onClick={() => scrollToSection("contact")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect hover:animate-pulse-glow transition-all duration-300"
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;