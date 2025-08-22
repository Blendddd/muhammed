import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Emily Chen",
    grade: "Grade 12",
    subject: "Mathematics",
    message: "Ms. Johnson made calculus feel approachable and fun! Her teaching style helped me go from struggling with basic algebra to excelling in advanced mathematics. I couldn't have made it to MIT without her guidance.",
    rating: 5,
    achievement: "Accepted to MIT"
  }, {
    name: "Marcus Thompson",
    grade: "Grade 11",
    subject: "Physics",
    message: "The way she explains complex physics concepts is amazing. She uses real-world examples that make everything click. My grades improved from C+ to A- in just one semester!",
    rating: 5,
    achievement: "Honor Roll Student"
  }, {
    name: "Sarah Williams",
    grade: "Grade 10",
    subject: "English Literature",
    message: "I used to hate reading and writing, but Ms. Johnson showed me the beauty in literature. Her passion is contagious, and now I'm considering a career in journalism!",
    rating: 5,
    achievement: "School Newspaper Editor"
  }, {
    name: "David Rodriguez",
    grade: "Grade 9",
    subject: "Study Skills",
    message: "The study techniques and time management skills I learned have helped me in all my subjects. She doesn't just teach subjects - she teaches you how to learn and succeed.",
    rating: 5,
    achievement: "Student Council President"
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section id="testimonials" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Student Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from my students about their journey to academic excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-primary/20 p-8">
            <CardContent className="p-0">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-primary text-2xl">★</span>
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic">
                  "{testimonials[currentIndex].message}"
                </blockquote>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].grade} • {testimonials[currentIndex].subject}
                  </p>
                  <p className="text-accent font-medium mt-2">
                    🏆 {testimonials[currentIndex].achievement}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
            >
              ←
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;