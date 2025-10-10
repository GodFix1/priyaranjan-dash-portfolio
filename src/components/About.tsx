import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Leveraging latest technologies",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team player with strong communication",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering quality",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              From <span className="text-black dark:text-white font-semibold">automation testing to building full-stack innovations</span>, my journey has been driven by one thing: <span className="text-black dark:text-white font-semibold">solving real problems with elegant technology</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've had the privilege of working with enterprise leaders like <span className="text-black dark:text-white font-semibold">Infosys and Accenture</span>, where I modernized legacy systems, migrated databases, and built scalable web solutions. My proudest achievement, however, is <span className="text-black dark:text-white font-semibold">creating Godfix</span> — a platform that brings <span className="text-black dark:text-white font-semibold">doorstep mobile repair services</span> to thousands of users, combining <span className="text-black dark:text-white font-semibold">full-stack engineering, automation, and AI-driven content</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm thinking about the <span className="text-black dark:text-white font-semibold">next big problem to solve</span> and ways to create meaningful impact through technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
