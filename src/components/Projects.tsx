import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import godfixImage from "@/assets/project-godfix.png";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskappImage from "@/assets/project-taskapp.jpg";
import risetowinImage from "@/assets/project-risetowin.png";
import engineerosImage from "@/assets/project-engineeros.png";
import sovereignstudiesImage from "@/assets/project-sovereignstudies.png";

const Projects = () => {
  const projects = [
    {
      title: "Doorstep Mobile Repair Platform",
      role: "Product Engineer",
      description:
        "Architected and deployed a highly performant, hyperlocal doorstep mobile repair platform supporting 20+ repair types with automated booking pipelines and secure transaction layers. Integrated AI-driven diagnostic content and structured SEO strategies that significantly boosted organic search visibility, user conversion rates, and streamlined communication flows.",
      image: godfixImage,
      technologies: ["React", "Supabase", "Deno", "AWS", "PostgreSQL", "Netlify"],
      liveUrl: "https://godfix.in/",
      githubUrl: "https://github.com/priyaranjandash/godfix",
    },
    {
      title: "RiseToWin - Goal & Habit Tracker",
      role: "Full Stack Developer",
      description:
        "Engineered a privacy-first productivity workstation and habit tracker utilizing high-performance local storage for offline capability. Built interactive calendar visualizations, focus metrics, and daily reflection modules to help hundreds of active users optimize daily workflows and systematically achieve personal and professional milestones.",
      image: risetowinImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "LocalStorage", "Netlify"],
      liveUrl: "https://risetowin.netlify.app/",
      githubUrl: "https://github.com/priyaranjandash/risetowin",
    },
    {
      title: "EngineerOS – Developer Productivity & Incident Command Center",
      role: "Platform Engineer",
      description:
        "Developed a comprehensive developer workstation dashboard that acts as an incident command center. Features interactive incident tracking by severity, streamlined Root-Cause Analysis (RCA) logs, and focus-time analytics. Built integrated hubs for persistent architectural docs, code snippet storage, and a vector-based digital whiteboard for live system sketching, accelerating daily production support throughput.",
      image: engineerosImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "LocalStorage", "Vercel"],
      liveUrl: "https://engineeros.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Sovereign Studies – AI-Powered Content Platform",
      role: "AI/LLM Integrator",
      description:
        "Designed and implemented an AI-powered content ingest platform integrating Large Language Models (LLMs) to automatically summarize daily complex inputs into structured digests. Features a context-aware AI chat mentor ('Ask the Mentor') allowing users to dynamically query source documents, test concepts, and get real-time explanations for highly technical subjects.",
      image: sovereignstudiesImage,
      technologies: ["React", "Next.js", "LLM Integration", "Supabase", "Vercel"],
      liveUrl: "https://risetolead.vercel.app/",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg">A showcase of my recent work and contributions</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </AspectRatio>

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
                    <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
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
