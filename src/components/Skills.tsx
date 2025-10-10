import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Wrench, Smartphone, Palette, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Design", "SEO Optimization"],
    },
    {
      icon: Database,
      title: "Backend",
      skills: [".NET Core", "REST APIs", "PostgreSQL", "SQL", "Microservices", "Deno"],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["AWS", "Supabase", "Docker", "Git", "GitHub", "CI/CD", "Netlify", "Azure"],
    },
    {
      icon: Wrench,
      title: "Testing & Quality",
      skills: [
        "Selenium WebDriver",
        "TestNG",
        "Automation Frameworks",
        "Unit Testing",
        "Integration Testing",
        "Manual Testing",
      ],
    },
    {
      icon: Layers,
      title: "Software Architecture",
      skills: ["System Design", "Database Design", "API Design", "Clean Code", "Design Patterns", "Agile/Scrum"],
    },
    {
      icon: Palette,
      title: "Creative Design",
      skills: ["Figma", "UI/UX", "User Flow Design", "Attention to Detail"],
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
