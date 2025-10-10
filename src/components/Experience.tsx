import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      company: "Infosys Limited",
      duration: "Dec 2024 - Present",
      roles: [
        {
          title: "Senior Associate Consultant",
          description:
            "Led full-stack development and modernization projects for enterprise platforms, focusing on performance, scalability, and automation.",
          achievements: [
            { text: "Migrated legacy applications from .NET 4.6 to .NET 8 with Entity Framework, modernizing ReportAPI to WebAPI." },
            { text: "Implemented service & repository patterns, improving code maintainability and reducing bugs." },
            { text: "Optimized C# EF queries, improving database performance and scalability by 30%+." },
            { text: "Migrated systems from SQL Server to PostgreSQL with seamless data transition." },
            { 
              text: "Developed a React-based automation solution for Helix ticket verification, reducing manual effort by 90%.",
              link: "https://helix-ticket-hackathon.netlify.app/"
            },
          ],
        },
      ],
    },
    {
      company: "Accenture Solutions Private Limited",
      duration: "Jun 2021 - Dec 2024",
      roles: [
        {
          title: "Custom Software Engineering Analyst",
          description:
            "Worked on full-stack applications and API development, enhancing functionality, UI/UX, and data management.",
          achievements: [
            { text: "Developed and maintained full-stack web applications using .NET Core, Angular, C#, and SQL." },
            { text: "Designed and implemented RESTful APIs, ensuring secure and efficient data exchange." },
            { text: "Optimized stored procedures in SQL, improving data operation reliability by 35%." },
            { text: "Enhanced UI/UX, fixing bugs and improving accessibility." },
            { text: "Took ownership of end-to-end web pages from backend to frontend, ensuring timely delivery." },
          ],
        },
        {
          title: "App Automation Engineer Analyst",
          description: "Specialized in automation testing and continuous integration for enterprise applications.",
          achievements: [
            { text: "Developed automated test scripts using Java and Selenium (MVC pattern), reducing manual testing effort by 50%." },
            { text: "Integrated automation scripts into CI/CD pipeline, improving deployment efficiency." },
            { text: "Provided training and documentation to team, fostering continuous improvement." },
          ],
        },
        {
          title: "Quality Engineering Associate",
          description: "Focused on quality assurance and manual testing following Agile methodology.",
          achievements: [
            { text: "Conducted manual testing and regression tests following Agile methodology." },
            { text: "Collaborated with developers to resolve issues promptly while ensuring compliance with quality standards." },
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg">My professional journey and key achievements</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <Card
                  className="md:ml-20 hover:shadow-lg transition-all duration-300 bg-card"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between mb-6 gap-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="w-5 h-5" />
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className={roleIndex > 0 ? "mt-6 pt-6 border-t border-border" : ""}>
                        <h4 className="text-lg font-semibold mb-2">{role.title}</h4>
                        {role.description && <p className="text-muted-foreground mb-4">{role.description}</p>}

                        {role.achievements && role.achievements.length > 0 && (
                          <div>
                            <h5 className="font-semibold mb-2">Key Achievements:</h5>
                            <ul className="space-y-2">
                              {role.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="flex-1">
                                    {typeof achievement === 'string' ? achievement : achievement.text}
                                    {typeof achievement === 'object' && achievement.link && (
                                      <a 
                                        href={achievement.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 ml-2 text-primary hover:text-primary/80 transition-colors"
                                      >
                                        <span className="text-sm font-medium">View</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                      </a>
                                    )}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
