import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const contactInfo = [{
    icon: "📧",
    title: "Email",
    value: "Muhammedbehnam@gmail.com",
    description: "Send me a message anytime"
  }, {
    icon: "📱",
    title: "Phone",
    value: "+964 (750) 376 43 29",
    description: "Available Everyday"
  }, {
    icon: "📍",
    title: "Location",
    value: "Kurdistan, Kurdistan",
    description: "In-person and online sessions"
  }, {
    icon: "⏰",
    title: "Response Time",
    value: "Within 24 hours",
    description: "Usually much faster!"
  }];
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your educational journey? I'm here to help you achieve your academic goals. 
            Reach out for tutoring sessions, consultations, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => <Card key={info.title} className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 floating-element" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Call to Action */}
            <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 mt-12">
              
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;