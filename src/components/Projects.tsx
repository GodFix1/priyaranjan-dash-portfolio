import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import godfixImage from "@/assets/project-godfix.png";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskappImage from "@/assets/project-taskapp.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Doorstep Mobile Repair Platform",
      role: "Lead Developer",
      description:
        "Built a hyperlocal platform for doorstep mobile repair services with transparent pricing, technician tracking, and secure customer data handling. Designed the end-to-end system architecture, integrating AI-driven content, SEO optimization, and automated workflows for bookings and customer communication.",
      image: godfixImage,
      technologies: ["React", "Supabase", "Deno", "AWS", "PostgreSQL", "Netlify"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com/priyaranjandash/godfix",
    },
    {
      title: "E-Commerce Platform",
      role: "Full Stack Developer",
      description:
        "Developed a scalable e-commerce solution with integrated payment processing, inventory management, and admin dashboard. Handles 10K+ daily transactions.",
      image: ecommerceImage,
      technologies: ["Next.js", "Redux", "Express", "MongoDB", "Stripe"],
      liveUrl: "https://shop.example.com",
      githubUrl: "https://github.com/priyaranjandash/ecommerce",
    },
    {
      title: "Task Management App",
      role: "Frontend Lead",
      description:
        "Created an intuitive task management application with real-time collaboration features, drag-and-drop interface, and team analytics. Used by 5K+ users.",
      image: taskappImage,
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://tasks.example.com",
      githubUrl: "https://github.com/priyaranjandash/taskapp",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {project.role}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
