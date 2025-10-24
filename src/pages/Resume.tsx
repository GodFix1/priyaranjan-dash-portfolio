import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, Github, MapPin, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print controls - hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <Button onClick={() => navigate("/")} variant="outline">
          Back to Portfolio
        </Button>
        <Button onClick={handlePrint} className="bg-primary">
          <Download className="w-4 h-4 mr-2" />
          Print / Save as PDF
        </Button>
      </div>

      {/* Resume Content */}
      <div className="max-w-[8.5in] mx-auto bg-white p-8 md:p-12 print:p-8 text-black">
        {/* Header */}
        <header className="mb-8 border-b-2 border-gray-300 pb-6">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Priyaranjan Dash</h1>
          <h2 className="text-xl text-gray-700 mb-4">Full Stack Developer & Tech Innovator</h2>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:papul1612@gmail.com" className="hover:text-primary">papul1612@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 8342869898</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a href="https://www.linkedin.com/in/priyaranjan-dash-0b0417174/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn Profile</a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a href="https://github.com/priyaranjandash" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub Profile</a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <a href="https://godfix.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary">godfix.in</a>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 border-b border-gray-300 pb-2">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed">
            Full Stack Developer with 3+ years of experience building scalable web applications and enterprise solutions. Proven expertise in modernizing legacy systems, optimizing database performance, and creating innovative platforms from scratch. Successfully led the development of Godfix, a hyperlocal mobile repair platform serving thousands of users. Skilled in React, TypeScript, .NET Core, SQL, and cloud technologies. Strong focus on clean code, system design, SEO optimization, and delivering high-impact solutions.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 border-b border-gray-300 pb-2">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Frontend</h4>
              <p className="text-sm text-gray-700">React, Angular, TypeScript, HTML5, CSS3, Responsive Design, SEO</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Backend</h4>
              <p className="text-sm text-gray-700">.NET Core, .NET 8, ASP.NET Core, C#, REST APIs, Microservices</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Database</h4>
              <p className="text-sm text-gray-700">SQL Server, PostgreSQL, Entity Framework, Database Design</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Cloud & DevOps</h4>
              <p className="text-sm text-gray-700">Azure, AWS, Docker, CI/CD, Git, GitHub, Netlify</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Testing & QA</h4>
              <p className="text-sm text-gray-700">Selenium, TestNG, Automation Frameworks, Unit Testing, Manual Testing</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Architecture</h4>
              <p className="text-sm text-gray-700">System Design, Clean Code, Design Patterns, Agile/Scrum, API Design</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-300 pb-2">Professional Experience</h3>
          
          {/* Infosys */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Senior Associate Consultant</h4>
                <p className="text-gray-700 font-semibold">Infosys Limited</p>
              </div>
              <span className="text-gray-600 text-sm">Dec 2024 - Present</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
              <li>Led full-stack development and modernization projects for enterprise platforms, focusing on performance, scalability, and automation</li>
              <li>Migrated legacy applications from .NET 4.6 to .NET 8 with Entity Framework, modernizing ReportAPI to WebAPI</li>
              <li>Implemented service & repository patterns, improving code maintainability and reducing bugs</li>
              <li>Optimized C# EF queries, improving database performance and scalability by 30%+</li>
              <li>Migrated systems from SQL Server to PostgreSQL with seamless data transition</li>
              <li>Developed a React-based automation solution for Helix ticket verification, reducing manual effort by 90%</li>
            </ul>
          </div>

          {/* Accenture - Role 1 */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Custom Software Engineering Analyst</h4>
                <p className="text-gray-700 font-semibold">Accenture Solutions Private Limited</p>
              </div>
              <span className="text-gray-600 text-sm">Jun 2021 - Dec 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
              <li>Developed and maintained full-stack web applications using .NET Core, Angular, C#, and SQL</li>
              <li>Designed and implemented RESTful APIs, ensuring secure and efficient data exchange</li>
              <li>Optimized stored procedures in SQL, improving data operation reliability by 35%</li>
              <li>Enhanced UI/UX, fixing bugs and improving accessibility</li>
              <li>Took ownership of end-to-end web pages from backend to frontend, ensuring timely delivery</li>
            </ul>
          </div>

          {/* Accenture - Role 2 */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-bold text-gray-900">App Automation Engineer Analyst</h4>
                <p className="text-gray-700 font-semibold">Accenture Solutions Private Limited</p>
              </div>
              <span className="text-gray-600 text-sm">Jun 2021 - Dec 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
              <li>Developed automated test scripts using Java and Selenium (MVC pattern), reducing manual testing effort by 50%</li>
              <li>Integrated automation scripts into CI/CD pipeline, improving deployment efficiency</li>
              <li>Provided training and documentation to team, fostering continuous improvement</li>
            </ul>
          </div>

          {/* Accenture - Role 3 */}
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Quality Engineering Associate</h4>
                <p className="text-gray-700 font-semibold">Accenture Solutions Private Limited</p>
              </div>
              <span className="text-gray-600 text-sm">Jun 2021 - Dec 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
              <li>Conducted manual testing and regression tests following Agile methodology</li>
              <li>Collaborated with developers to resolve issues promptly while ensuring compliance with quality standards</li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 border-b border-gray-300 pb-2">Key Projects</h3>
          
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-gray-900">Godfix - Doorstep Mobile Repair Platform</h4>
              <span className="text-gray-600 text-sm">Lead Developer</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Built a hyperlocal platform for doorstep mobile repair services offering 20+ types of phone repairs, with transparent pricing and secure customer data handling. Designed the end-to-end system architecture, integrating AI-driven content, SEO optimization, and automated workflows for bookings and customer communication.
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Technologies:</span> React, Supabase, Deno, AWS, PostgreSQL, Netlify
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Live:</span> <a href="https://godfix.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">godfix.in</a>
            </p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-gray-900">Helix Ticket Automation Solution</h4>
              <span className="text-gray-600 text-sm">Developer</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Developed a React-based automation solution for Helix ticket verification, streamlining workflow processes and reducing manual effort by 90%. Implemented automated validation and reporting features.
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Technologies:</span> React, TypeScript, REST APIs
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Live:</span> <a href="https://helix-ticket-hackathon.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">helix-ticket-hackathon.netlify.app</a>
            </p>
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 border-b border-gray-300 pb-2">Additional Information</h3>
          <div className="space-y-2 text-gray-700 text-sm">
            <p><span className="font-semibold">Certifications:</span> Microsoft Certified: Azure Fundamentals</p>
            <p><span className="font-semibold">Specializations:</span> System Design, SEO Optimization, Attention to Detail, Clean Code Architecture</p>
            <p><span className="font-semibold">Soft Skills:</span> Team Collaboration, Problem Solving, Agile Methodologies, Technical Documentation, Mentoring</p>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          @page {
            margin: 0.5in;
            size: letter;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          a {
            color: #000 !important;
            text-decoration: none !important;
          }
          
          .hover\\:text-primary:hover,
          .hover\\:underline:hover {
            color: inherit !important;
            text-decoration: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
