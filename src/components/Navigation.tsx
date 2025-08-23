import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-card py-4" : "py-6"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-end md:justify-between">
        
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Subjects", "Contact"].map((item) => (
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

        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
              >
                <Menu className={`h-6 w-6 transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'} group-hover:text-primary`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 animate-slide-in-right">
              <div className="flex flex-col space-y-6 mt-8">
                {["Home", "About", "Subjects", "Contact"].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-lg text-foreground/80 hover:text-primary transition-all duration-300 py-2 hover:scale-105 hover:translate-x-2 relative group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6 hover:scale-105 transition-all duration-300 animate-fade-in glow-effect"
                  style={{ animationDelay: "0.4s" }}
                >
                  Get In Touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;