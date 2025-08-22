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
  return;
};
export default TestimonialsSection;