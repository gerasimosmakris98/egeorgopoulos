
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Award, Download, User, Languages, Wrench, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const experiences = [
    {
      title: "Financial Crime Compliance Quality Assurance Analyst",
      company: "Ebury",
      location: "Spain",
      period: "May 2025 – Present",
      type: "Full-time",
      description: "At Ebury, a leading global fintech company, I am responsible for ensuring the highest standards of financial crime compliance through rigorous quality assurance. My work directly contributes to mitigating financial crime risks and maintaining regulatory adherence across a diverse client base.",
      responsibilities: [
        "Independent Level 3 QA Reviews: Conducted comprehensive Level 3 Quality Assurance reviews across the entire client lifecycle, encompassing onboarding, reassessments, and screening for payment and transaction monitoring.",
        "Thematic Reviews and Systemic Issue Identification: Led and performed in-depth thematic reviews and deep dives to proactively identify systemic compliance issues and vulnerabilities.",
        "Feedback Management and Remedial Actions: Managed staff feedback loops arising from QA findings, ensuring clear communication and understanding of areas for improvement.",
        "Monthly QA Target Achievement: Consistently ensured the achievement of monthly QA targets, demonstrating a strong commitment to quality and efficiency in compliance operations.",
        "Cross-functional Collaboration: Collaborated extensively with Onboarding, Screening, and Reassessment teams to develop and deliver targeted training sessions.",
        "Global Compliance Initiatives: Supported global compliance deliverables by participating in calibration forums and leading KYC refresh initiatives."
      ],
      skills: ["AML/CFT Compliance", "Quality Assurance", "Risk Management", "Regulatory Compliance (SEPBLAC, FinCEN)", "Policy Implementation", "Data Analysis", "Root Cause Analysis", "Stakeholder Management", "Training & Development", "KYC/CDD", "Transaction Monitoring", "Payment Screening"]
    },
    {
      title: "Compliance Assistant",
      company: "American Express",
      location: "Spain",
      period: "September 2024 – May 2025",
      type: "Full-time",
      description: "At American Express, a global financial services leader, I played a crucial role in conducting meticulous investigations into potential money laundering and suspicious financial activities, contributing to the integrity of their financial operations.",
      responsibilities: [
        "Financial Crime Investigations: Performed thorough investigations into potential money laundering and suspicious financial activities, leveraging various research and analytical tools.",
        "Suspicious Activity Report (SAR) Writing: Produced detailed and comprehensive reports on suspicious activities, ensuring full regulatory compliance and maintaining transactional integrity.",
        "Strategic Partnership & Knowledge Development: Built and maintained strong relationships with strategic partners across the Financial Intelligence Unit (FIU) network.",
        "EMEA Financial Crime Environment Expertise: Continuously maintained and updated knowledge of the evolving EMEA financial crime environment.",
        "KYC Procedure Management: Managed and optimized Know Your Customer (KYC) procedures using in-house tools."
      ],
      skills: ["Financial Crime Investigation", "Money Laundering", "Report Writing", "Data Analysis (Excel)", "Regulatory Reporting", "FIU Liaison", "KYC", "Due Diligence", "Compliance Frameworks", "Fraud Detection", "Analytical Thinking"]
    },
    {
      title: "Compliance Ops Process Owner",
      company: "Decubate",
      location: "Spain",
      period: "June 2024 – September 2024",
      type: "Internship",
      description: "During my internship at Decubate, a dynamic blockchain fundraising platform, I was instrumental in implementing robust compliance systems and leveraging blockchain analysis to enhance security and legal safeguards.",
      responsibilities: [
        "Compliance System Implementation: Implemented robust compliance systems that were meticulously aligned with regulatory requirements, utilizing blockchain analysis techniques.",
        "Workflow Mapping & Training Development: Created clear, efficient compliance workflows and developed comprehensive training materials for analysts.",
        "Threat Detection & Automation: Utilized advanced tools like Chainalysis for AML/CFT and fraud prevention, automating key processes.",
        "Blockchain Analysis: Applied blockchain analysis techniques to monitor transactions, identify suspicious patterns, and enhance the overall security of the platform."
      ],
      skills: ["Blockchain Compliance", "AML/CFT", "Fraud Prevention", "Workflow Optimization", "Training Development", "Chainalysis", "Regulatory Adherence", "Process Improvement", "Cybersecurity Fundamentals", "Decentralized Finance (DeFi) Compliance"]
    },
    {
      title: "Transaction Monitoring Officer - Financial Crime Unit",
      company: "Eurobank",
      location: "Greece",
      period: "August 2023 – June 2024",
      type: "Full-time",
      description: "As a Transaction Monitoring Officer at Eurobank, one of Greece's leading banks, I managed surveillance activities across various sectors, ensuring the detection and reporting of suspicious transactions.",
      responsibilities: [
        "Transaction Surveillance Management: Managed surveillance activities across multiple sectors, utilizing Excel and PowerBI to generate clear, actionable reports.",
        "KYC Management: Handled Know Your Customer (KYC) processes with a focus on efficiency and accuracy, utilizing Jira for workflow management and Chainalysis for enhanced due diligence.",
        "Alert Handling & Escalation: Promptly flagged and escalated suspicious activity detected through transaction monitoring."
      ],
      skills: ["Transaction Monitoring", "AML/CFT", "KYC", "Data Reporting (Excel, PowerBI)", "Jira", "Chainalysis", "Financial Crime Risk Assessment", "Alert Management", "Regulatory Compliance (BoG)", "Financial Analysis"]
    },
    {
      title: "Fraud and AML/CFT Investigator",
      company: "National Bank of Greece",
      location: "Greece",
      period: "January 2023 – August 2023",
      type: "Full-time",
      description: "At the National Bank of Greece, a major financial institution, I conducted detailed investigations into potential money laundering and contributed to maintaining a robust financial crime framework.",
      responsibilities: [
        "Money Laundering Investigations: Led detailed probes into potential money laundering schemes, leveraging Excel for data manipulation and analysis, alongside internal banking tools.",
        "Comprehensive Reporting: Delivered thorough and well-structured reports on investigative findings, which were crucial for supporting compliance efforts.",
        "FIU Collaboration: Worked closely with Financial Intelligence Unit (FIU) partners, fostering strong collaborative relationships.",
        "Financial Crime Trend Awareness: Stayed current on emerging EMEA financial crime trends and typologies.",
        "Internal KYC Management: Managed internal KYC systems and processes, ensuring accurate and up-to-date client information."
      ],
      skills: ["Fraud Investigation", "AML/CFT", "Data Analysis (Excel)", "Regulatory Compliance (BoG)", "Financial Crime Risk Mitigation", "Inter-agency Collaboration", "Case Management", "Due Diligence", "Reporting & Documentation"]
    }
  ];

  const education = [
    {
      degree: "Master's in Compliance (Ongoing)",
      institution: "IMF & Universidad Católica de Ávila",
      status: "In Progress"
    },
    {
      degree: "MSc in Fintech & Blockchain",
      institution: "ENEB & Universidad Isabel I",
      status: "Completed"
    },
    {
      degree: "BA in Spanish Language & Literature",
      institution: "National and Kapodistrian University of Athens",
      status: "Completed"
    }
  ];

  const certifications = [
    { name: "Fintech & Digital Transformation", issuer: "University of Athens" },
    { name: "Blockchain Certification", issuer: "University of Athens" },
    { name: "AML Certifications", issuer: "Financial Crime Academy and ACAMS" },
    { name: "Business & Economics", issuer: "University of Thessaloniki" },
    { name: "GDPR Compliance", issuer: "Various Providers" },
    { name: "Crypto Compliance", issuer: "Various Providers" },
    { name: "KYC/CDD", issuer: "Various Providers" },
    { name: "Secure Payments", issuer: "Various Providers" },
    { name: "HR Certification", issuer: "Various Providers" },
    { name: "Data Analytics", issuer: "Various Providers" }
  ];

  const languages = [
    { language: "Greek", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "Spanish", level: "Fluent" }
  ];

  const tools = {
    "Data Analysis & Reporting": ["Excel", "PowerBI"],
    "Compliance & Investigation Platforms": ["Jira", "Oracle", "Siron", "Riskshield", "Chainalysis", "Microsoft Dynamics", "Veriff"],
    "AI & Productivity Tools": ["ChatGPT", "Gemini", "Napier", "Copilot"]
  };

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-foreground">
            Resume & Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Multilingual Compliance & Blockchain Specialist with deep expertise in AML/CFT, fraud detection, and forensic financial analysis
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://drive.google.com/file/d/1Y0U3PSoK0kOcysbQK76HB3pFxUUOhnYy/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 w-5 h-5" />
              Download PDF Resume
            </a>
          </Button>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <Card className="minimal-card">
            <CardHeader>
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-3xl font-playfair font-semibold text-foreground">Professional Summary</h2>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Multilingual Compliance & Blockchain Specialist with deep expertise in AML/CFT, fraud detection, and forensic financial analysis. 
                Demonstrated success across banking and fintech sectors in Europe, blending regulatory insight with hands-on skills in data analysis and blockchain compliance.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Proven ability to lead KYC/CDD operations and conduct complex investigations. Fluent in Greek, English, Spanish.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Experience with regulators such as <strong>BoG (Greece)</strong>, <strong>FinCEN (USA)</strong>, <strong>SEPBLAC (Spain)</strong>, 
                <strong>CSSF (Luxembourg)</strong>, <strong>BaFin (Germany)</strong>, <strong>FIU-IND (India)</strong>, <strong>SHCP (Mexico)</strong>.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-playfair font-semibold mb-8 text-foreground">Relevant Employment History</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="minimal-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center text-foreground mb-3">
                        <Building2 className="w-5 h-5 mr-3" />
                        <span className="font-semibold text-lg">{exp.company}</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs w-fit px-3 py-1">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground text-sm">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Skills Applied/Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-3xl font-playfair font-semibold text-foreground">Education</h2>
          </div>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="minimal-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    {edu.status === "In Progress" && (
                      <Badge variant="outline" className="text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        {edu.status}
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground">{edu.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-3xl font-playfair font-semibold text-foreground">Certifications</h2>
          </div>
          <Card className="minimal-card">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="w-4 h-4 mr-3 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{cert.name}</span>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Languages */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Languages className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-3xl font-playfair font-semibold text-foreground">Languages</h2>
          </div>
          <Card className="minimal-card">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{lang.language}</h3>
                    <Badge variant="secondary" className="text-sm">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tools and Technology */}
        <section>
          <div className="flex items-center mb-8">
            <Wrench className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-3xl font-playfair font-semibold text-foreground">Tools and Technology</h2>
          </div>
          <div className="space-y-6">
            {Object.entries(tools).map(([category, toolList], index) => (
              <Card key={index} className="minimal-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolList.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-sm">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
