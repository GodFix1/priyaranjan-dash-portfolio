import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Wrench, Smartphone, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Redux"],
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
    },
    {
      icon: Cloud,
      title: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Firebase", "Supabase"],
    },
    {
      icon: Wrench,
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "CI/CD", "Jest"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      skills: ["React Native", "Responsive Design"],
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["Figma", "UI/UX", "Wireframing"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
