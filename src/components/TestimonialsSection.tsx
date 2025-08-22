import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emily Chen",
      grade: "Grade 12",
      subject: "Mathematics",
      message: "Ms. Johnson made calculus feel approachable and fun! Her teaching style helped me go from struggling with basic algebra to excelling in advanced mathematics. I couldn't have made it to MIT without her guidance.",
      rating: 5,
      achievement: "Accepted to MIT"
    },
    {
      name: "Marcus Thompson", 
      grade: "Grade 11",
      subject: "Physics",
      message: "The way she explains complex physics concepts is amazing. She uses real-world examples that make everything click. My grades improved from C+ to A- in just one semester!",
      rating: 5,
      achievement: "Honor Roll Student"
    },
    {
      name: "Sarah Williams",
      grade: "Grade 10",
      subject: "English Literature",
      message: "I used to hate reading and writing, but Ms. Johnson showed me the beauty in literature. Her passion is contagious, and now I'm considering a career in journalism!",
      rating: 5,
      achievement: "School Newspaper Editor"
    },
    {
      name: "David Rodriguez",
      grade: "Grade 9",
      subject: "Study Skills",
      message: "The study techniques and time management skills I learned have helped me in all my subjects. She doesn't just teach subjects - she teaches you how to learn and succeed.",
      rating: 5,
      achievement: "Student Council President"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from students whose academic journeys have been transformed through 
            personalized teaching and dedicated mentorship.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12 animate-scale-in">
          <Card className="glass-card border-primary/20 p-8">
            <CardContent className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-primary">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-xl text-muted-foreground leading-relaxed italic">
                "{testimonials[currentIndex].message}"
              </blockquote>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-primary font-medium">
                  {testimonials[currentIndex].grade} • {testimonials[currentIndex].subject}
                </p>
                <p className="text-accent text-sm font-medium">
                  🎉 {testimonials[currentIndex].achievement}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="glass-card p-3 rounded-full hover:bg-primary/10 transition-all duration-300 text-primary hover:scale-110"
            >
              ←
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="glass-card p-3 rounded-full hover:bg-primary/10 transition-all duration-300 text-primary hover:scale-110"
            >
              →
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 animate-fade-in animation-delay-400">
          <div className="text-center glass-card p-6 rounded-xl floating-element">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Grade Improvement</p>
          </div>
          <div className="text-center glass-card p-6 rounded-xl floating-element" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">University Acceptances</p>
          </div>
          <div className="text-center glass-card p-6 rounded-xl floating-element" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">25</div>
            <p className="text-muted-foreground">Honor Roll Students</p>
          </div>
          <div className="text-center glass-card p-6 rounded-xl floating-element" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;