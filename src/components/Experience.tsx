import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Infosys Limited",
      role: "Senior Associate Consultant",
      duration: "Dec 2024 - Present",
      description:
        "Led full-stack development and modernization projects for enterprise platforms, focusing on performance, scalability, and automation.",
      achievements: [
        "Migrated legacy applications from .NET 4.6 to .NET 8 with Entity Framework, modernizing ReportAPI to WebAPI.",
        "Implemented service & repository patterns, improving code maintainability and reducing bugs.",
        "Optimized C# EF queries, improving database performance and scalability by 30%+.",
        "Migrated systems from SQL Server to PostgreSQL with seamless data transition.",
        "Developed a React-based automation solution for Helix ticket verification, reducing manual effort by 90%."
      ],
    },
    {
      company: "Accenture Solutions Private Limited",
      role: "Custom Software Engineering Analyst",
      duration: "Jun 2021 - Dec 2024",
      description:
        "Progressed through multiple roles, working on full-stack development, automation testing, and quality assurance.",
      achievements: [
        "Custom Software Engineering Analyst (Jun 2023 - Dec 2024): Developed and maintained full-stack web applications using .NET Core, Angular, C#, and SQL.",
        "Designed and implemented RESTful APIs, ensuring secure and efficient data exchange.",
        "Optimized stored procedures in SQL, improving data operation reliability by 35%.",
        "Enhanced UI/UX, fixing bugs and improving accessibility.",
        "Took ownership of end-to-end web pages from backend to frontend, ensuring timely delivery.",
        "App Automation Engineer Analyst (Jun 2022 - May 2023): Developed automated test scripts using Java and Selenium (MVC pattern), reducing manual testing effort by 50%.",
        "Integrated automation scripts into CI/CD pipeline, improving deployment efficiency.",
        "Provided training and documentation to team, fostering continuous improvement.",
        "Quality Engineering Associate (Jun 2021 - May 2022): Conducted manual testing and regression tests following Agile methodology.",
        "Collaborated with developers to resolve issues promptly while ensuring compliance with quality standards."
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg">
            My professional journey and key achievements
          </p>
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
                    <div className="flex flex-wrap items-start justify-between mb-4 gap-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="w-5 h-5" />
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold mb-3">{exp.role}</h4>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div>
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
