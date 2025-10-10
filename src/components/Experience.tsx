import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      role: "Senior Full Stack Developer",
      duration: "Jan 2022 - Present",
      description:
        "Leading development of enterprise-scale applications. Architected microservices infrastructure serving 100K+ users. Mentored junior developers and established coding standards.",
      achievements: [
        "Reduced API response time by 45% through optimization",
        "Led migration to cloud infrastructure, cutting costs by 30%",
        "Implemented CI/CD pipeline, improving deployment speed by 60%",
      ],
    },
    {
      company: "Digital Solutions Ltd.",
      role: "Full Stack Developer",
      duration: "Jun 2020 - Dec 2021",
      description:
        "Developed and maintained multiple client projects using modern tech stack. Collaborated with cross-functional teams to deliver high-quality solutions on time.",
      achievements: [
        "Built 15+ responsive web applications",
        "Improved application performance by 35%",
        "Reduced bug reports by 40% through comprehensive testing",
      ],
    },
    {
      company: "Creative Web Co.",
      role: "Junior Developer",
      duration: "Jan 2019 - May 2020",
      description:
        "Started career building dynamic websites and web applications. Worked closely with designers and senior developers to create engaging user experiences.",
      achievements: [
        "Successfully delivered 20+ client projects",
        "Learned and implemented modern JavaScript frameworks",
        "Contributed to improving team development workflow",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="container mx-auto max-w-6xl">
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
          {/* Center timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10 hidden md:block"></div>

                {/* Alternating layout */}
                <div
                  className={`grid md:grid-cols-2 gap-8 items-start ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  {/* Card */}
                  <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"}>
                    <Card
                      className="hover:shadow-lg transition-all duration-300 bg-card"
                      style={{ boxShadow: "var(--shadow-card)" }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4 gap-4">
                          <div className="flex items-center gap-2 text-primary">
                            <Briefcase className="w-5 h-5 flex-shrink-0" />
                            <h3 className="text-lg font-bold">{exp.company}</h3>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm flex-shrink-0">
                            <Calendar className="w-4 h-4" />
                            <span className="whitespace-nowrap">{exp.duration}</span>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold mb-3">{exp.role}</h4>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        <div>
                          <h5 className="font-semibold mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-primary mt-1 font-bold">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for alternating */}
                  <div className={`hidden md:block ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
