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
      <div className="max-w-[8.5in] mx-auto bg-white p-8 md:p-12 print:p-6 text-black">
        {/* Header */}
        <header className="mb-4 border-b-2 border-gray-300 pb-3 print:mb-3 print:pb-2">
          <h1 className="text-3xl font-bold mb-1 text-gray-900 print:text-2xl">Priyaranjan Dash</h1>
          <h2 className="text-lg text-gray-700 mb-2 print:text-base print:mb-1">Full Stack Developer & Tech Innovator</h2>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 print:text-[10px]">
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
        <section className="mb-3 print:mb-2">
          <h3 className="text-lg font-bold mb-1 text-gray-900 border-b border-gray-300 pb-1 print:text-base print:mb-1">Professional Summary</h3>
          <p className="text-gray-700 text-sm leading-snug print:text-[10px] print:leading-tight">
            Full Stack Developer with 3+ years of experience building scalable web applications and enterprise solutions. Proven expertise in modernizing legacy systems, optimizing database performance, and creating innovative platforms from scratch. Successfully led the development of Godfix, a hyperlocal mobile repair platform serving thousands of users. Skilled in React, TypeScript, .NET Core, SQL, and cloud technologies. Strong focus on clean code, system design, SEO optimization, and delivering high-impact solutions.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-3 print:mb-2">
          <h3 className="text-lg font-bold mb-1 text-gray-900 border-b border-gray-300 pb-1 print:text-base print:mb-1">Core Competencies</h3>
          <div className="grid grid-cols-3 gap-2 print:gap-1">
            <div>
              <h4 className="font-semibold text-gray-900 text-xs print:text-[9px] mb-0.5">Frontend</h4>
              <p className="text-[11px] text-gray-700 print:text-[9px] leading-tight">React, Angular, TypeScript, HTML5, CSS3, SEO</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-xs print:text-[9px] mb-0.5">Backend</h4>
              <p className="text-[11px] text-gray-700 print:text-[9px] leading-tight">.NET Core, .NET 8, C#, REST APIs</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-xs print:text-[9px] mb-0.5">Database</h4>
              <p className="text-[11px] text-gray-700 print:text-[9px] leading-tight">SQL Server, PostgreSQL, EF</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-xs print:text-[9px] mb-0.5">Cloud & DevOps</h4>
              <p className="text-[11px] text-gray-700 print:text-[9px] leading-tight">Azure, AWS, Docker, CI/CD, Git</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-xs print:text-[9px] mb-0.5">Testing & QA</h4>
              <p className="text-[11px] text-gray-700 print:text-[9px] leading-tight">Selenium, TestNG, Automation</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-xs print:text-[9px] mb-0.5">Architecture</h4>
              <p className="text-[11px] text-gray-700 print:text-[9px] leading-tight">System Design, Clean Code, Agile</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-3 print:mb-2">
          <h3 className="text-lg font-bold mb-2 text-gray-900 border-b border-gray-300 pb-1 print:text-base print:mb-1">Professional Experience</h3>
          
          {/* Infosys */}
          <div className="mb-2 print:mb-1.5">
            <div className="flex justify-between items-start mb-0.5">
              <div>
                <h4 className="text-sm font-bold text-gray-900 print:text-xs">Senior Associate Consultant - Infosys Limited</h4>
              </div>
              <span className="text-gray-600 text-xs print:text-[9px]">Dec 2024 - Present</span>
            </div>
            <ul className="list-disc list-inside space-y-0 text-gray-700 text-[11px] ml-2 print:text-[9px] print:leading-tight">
              <li>Led full-stack development and modernization projects; migrated .NET 4.6 to .NET 8 with Entity Framework</li>
              <li>Implemented service & repository patterns; optimized C# EF queries, improving performance by 30%+</li>
              <li>Migrated SQL Server to PostgreSQL; developed React automation solution reducing manual effort by 90%</li>
            </ul>
          </div>

          {/* Accenture - Combined */}
          <div className="mb-2 print:mb-1.5">
            <div className="flex justify-between items-start mb-0.5">
              <div>
                <h4 className="text-sm font-bold text-gray-900 print:text-xs">Software Engineering Analyst - Accenture Solutions</h4>
              </div>
              <span className="text-gray-600 text-xs print:text-[9px]">Jun 2021 - Dec 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-0 text-gray-700 text-[11px] ml-2 print:text-[9px] print:leading-tight">
              <li>Developed full-stack applications using .NET Core, Angular, C#, SQL; designed and implemented RESTful APIs</li>
              <li>Optimized SQL stored procedures, improving reliability by 35%; enhanced UI/UX and accessibility</li>
              <li>Created automated test scripts using Java/Selenium, reducing manual testing effort by 50%</li>
              <li>Integrated automation into CI/CD pipeline; conducted manual testing following Agile methodology</li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-3 print:mb-2">
          <h3 className="text-lg font-bold mb-1 text-gray-900 border-b border-gray-300 pb-1 print:text-base print:mb-1">Key Projects</h3>
          
          <div className="mb-1.5 print:mb-1">
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="text-sm font-bold text-gray-900 print:text-xs">Godfix - Doorstep Mobile Repair Platform (Lead Developer)</h4>
            </div>
            <p className="text-gray-700 text-[11px] mb-0.5 print:text-[9px] print:leading-tight">
              Built hyperlocal platform for doorstep mobile repair with 20+ services. Designed end-to-end system architecture with AI-driven content, SEO optimization, automated workflows. | <span className="font-semibold">Tech:</span> React, Supabase, Deno, AWS, PostgreSQL | <span className="font-semibold">Live:</span> godfix.in
            </p>
          </div>

          <div className="mb-1 print:mb-0.5">
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="text-sm font-bold text-gray-900 print:text-xs">Helix Ticket Automation Solution (Developer)</h4>
            </div>
            <p className="text-gray-700 text-[11px] print:text-[9px] print:leading-tight">
              Developed React-based automation for Helix ticket verification, reducing manual effort by 90%. | <span className="font-semibold">Tech:</span> React, TypeScript, REST APIs
            </p>
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <h3 className="text-lg font-bold mb-1 text-gray-900 border-b border-gray-300 pb-1 print:text-base print:mb-0.5">Additional Information</h3>
          <div className="space-y-0 text-gray-700 text-[11px] print:text-[9px] print:leading-tight">
            <p><span className="font-semibold">Certifications:</span> Microsoft Certified: Azure Fundamentals</p>
            <p><span className="font-semibold">Specializations:</span> System Design, SEO Optimization, Clean Code Architecture, Attention to Detail</p>
            <p><span className="font-semibold">Soft Skills:</span> Team Collaboration, Problem Solving, Agile/Scrum, Technical Documentation</p>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          * {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          @page {
            margin: 0.4in;
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
          
          /* Prevent page breaks */
          section {
            page-break-inside: avoid;
          }
          
          h3 {
            page-break-after: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
