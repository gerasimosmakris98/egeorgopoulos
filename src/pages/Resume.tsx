import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Award, Download, User, Languages, Wrench, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/contexts/DataContext";

const Resume = () => {
  const { personalInfo, experiences, education, certifications } = useData();

  // Filter visible items
  const visibleExperiences = experiences.filter(exp => exp.visible);
  const visibleEducation = education.filter(edu => edu.visible);
  const visibleCertifications = certifications.filter(cert => cert.visible);

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
            <a href={personalInfo.cvLink} target="_blank" rel="noopener noreferrer">
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
                {personalInfo.description}
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
            {visibleExperiences.map((exp, index) => (
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
            {visibleEducation.map((edu, index) => (
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
                {visibleCertifications.map((cert, index) => (
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