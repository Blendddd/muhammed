import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SubjectsSection = () => {
  const subjects = [
    {
      title: "Advanced Mathematics",
      description: "Algebra, Calculus, Statistics, and Problem-solving techniques for high school students.",
      icon: "🔢",
      topics: ["Algebra", "Calculus", "Statistics", "Geometry"],
      level: "Grades 9-12"
    },
    {
      title: "Physical Sciences",
      description: "Physics and Chemistry with hands-on experiments and real-world applications.",
      icon: "⚗️",
      topics: ["Physics", "Chemistry", "Lab Work", "Research"],
      level: "Grades 10-12"
    },
    {
      title: "English Literature",
      description: "Classic and contemporary literature analysis, creative writing, and communication skills.",
      icon: "📖",
      topics: ["Literature", "Writing", "Grammar", "Communication"],
      level: "Grades 9-11"
    },
    {
      title: "Study Skills & Mentoring",
      description: "Academic coaching, time management, and personal development for student success.",
      icon: "🎯",
      topics: ["Study Methods", "Time Management", "Goal Setting", "Motivation"],
      level: "All Grades"
    }
  ];

  return (
    <section id="subjects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Subjects I Teach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive education across multiple disciplines with personalized learning approaches 
            tailored to each student's unique needs and learning style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <Card 
              key={subject.title} 
              className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105 floating-element"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {subject.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {subject.title}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium mt-1">
                      {subject.level}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {subject.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map((topic) => (
                      <span 
                        key={topic}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in animation-delay-400">
          <div className="text-center glass-card p-6 rounded-xl">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Scheduling</h3>
            <p className="text-muted-foreground">Available for both in-person and online tutoring sessions</p>
          </div>
          <div className="text-center glass-card p-6 rounded-xl">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Progress Tracking</h3>
            <p className="text-muted-foreground">Regular assessments and detailed progress reports</p>
          </div>
          <div className="text-center glass-card p-6 rounded-xl">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Innovative Methods</h3>
            <p className="text-muted-foreground">Modern teaching tools and interactive learning techniques</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;