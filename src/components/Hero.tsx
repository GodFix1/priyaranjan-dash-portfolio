import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Priyaranjan Dash
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Full Stack Developer & Tech Innovator
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Crafting elegant solutions to complex problems. Passionate about building scalable
              applications that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/priyaranjandash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/priyaranjandash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:priyaranjan@example.com"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-sm"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-2xl opacity-20"></div>
              <img
                src={profilePhoto}
                alt="Priyaranjan Dash"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-card shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
