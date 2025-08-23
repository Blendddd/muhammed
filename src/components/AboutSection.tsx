import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {

  const achievements = [
    { title: "Teacher of the Year", year: "2023", icon: "🏆" },
    { title: "Excellence in Education Award", year: "2023", icon: "🌟" },
    { title: "Innovation in Teaching", year: "2023", icon: "💡" },
    { title: "Student Choice Award", year: "2023", icon: "❤️" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 2 years of teaching experience, I've dedicated my career to creating 
            engaging learning environments that inspire students to reach their full potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground">My Teaching Philosophy</h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I believe that every student has unique potential waiting to be unlocked. 
                My approach combines traditional teaching methods with modern technology 
                to create an inclusive and interactive learning environment.
              </p>
              <p>
                Through personalized attention and adaptive learning strategies, I help 
                students not just understand concepts, but develop critical thinking 
                skills that will serve them throughout their lives.
              </p>
              <p>
                My classroom is a safe space where mistakes are learning opportunities, 
                questions are celebrated, and every student feels valued and heard.
              </p>
            </div>
          </div>

        </div>

        {/* Achievements */}
        <div className="animate-fade-in animation-delay-400">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="glass-card border-primary/20 floating-element" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-primary font-medium">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;