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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
              I'm a passionate Full Stack Developer with expertise in building modern web
              applications. With a strong foundation in both frontend and backend technologies, I
              create seamless user experiences backed by robust, scalable architectures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical excellence with creative problem-solving. I believe in
              writing clean, maintainable code and staying updated with the latest industry trends
              to deliver cutting-edge solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects, learning new
              technologies, and sharing knowledge with the developer community.
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
