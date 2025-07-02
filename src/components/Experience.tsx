import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, TrendingUp, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Financial Crime Compliance Quality Assurance Analyst",
      company: "Ebury",
      location: "Madrid, Spain",
      period: "May 2025 - Present",
      type: "Full-time",
      description: "Leading comprehensive quality assurance reviews across the complete client lifecycle at a leading fintech company. Conducting independent Level 3 QA assessments including client onboarding, periodic reassessments, payment and thematic monitoring, KYC regime adherence, and high-risk client management.",
      skills: ["Quality Assurance", "Financial Crime Prevention", "KYC", "Risk Assessment", "Fintech Compliance"],
      achievements: [
        "Leading Level 3 QA reviews across complete client lifecycle",
        "Ensuring regulatory compliance in fintech environment",
        "Managing complex high-risk client compliance cases"
      ]
    },
    {
      title: "Compliance Assistant",
      company: "American Express",
      location: "Madrid, Spain", 
      period: "September 2024 - May 2025",
      type: "Full-time",
      description: "Conducted comprehensive investigations into potential money laundering and suspicious financial activities. Created detailed reports and communications for regulatory compliance. Developed expertise in AML investigation methodologies and compliance reporting frameworks.",
      skills: ["AML Investigation", "Suspicious Activity Reports", "Financial Analysis", "Compliance Reporting"],
      achievements: [
        "Conducted meticulous AML investigations",
        "Generated comprehensive compliance reports",
        "Identified and reported suspicious activities"
      ]
    },
    {
      title: "Compliance Org Process Analyst",
      company: "American Express",
      location: "Madrid, Spain",
      period: "June 2024 - September 2024", 
      type: "Internship",
      description: "Implemented robust compliance systems aligned with regulatory requirements, utilizing blockchain analysis to strengthen compliance and security procedures. Created clear compliance workflows and training materials to ensure efficient and effective execution of compliance processes.",
      skills: ["Process Analysis", "Blockchain Analysis", "Compliance Systems", "Workflow Optimization"],
      achievements: [
        "Implemented blockchain-enhanced compliance systems",
        "Created comprehensive workflow documentation",
        "Developed training materials for compliance teams"
      ]
    },
    {
      title: "Compliance Ops Process Analyst",
      company: "Decubate",
      location: "Madrid, Spain",
      period: "June 2024 - September 2024",
      type: "Internship",
      description: "Analyzed and optimized compliance operational processes in the blockchain and DeFi sector. Developed comprehensive compliance frameworks for digital asset operations and cryptocurrency transactions, ensuring adherence to evolving regulatory requirements.",
      skills: ["DeFi Compliance", "Digital Asset Regulation", "Process Optimization", "Blockchain Analysis"],
      achievements: [
        "Developed compliance frameworks for DeFi operations",
        "Streamlined digital asset compliance processes",
        "Enhanced regulatory reporting procedures"
      ]
    },
    {
      title: "Transaction Monitoring Office - Financial Crime Unit",
      company: "Eurobank Greece",
      location: "Athens, Greece",
      period: "August 2023 - June 2024",
      type: "Full-time",
      description: "Specialized in transaction monitoring and suspicious activity detection within the Financial Crime Unit. Conducted detailed analysis of complex financial transactions, identified potential money laundering schemes, and prepared comprehensive investigation reports for regulatory authorities.",
      skills: ["Transaction Monitoring", "Financial Crime Detection", "AML Analysis", "Regulatory Reporting"],
      achievements: [
        "Monitored high-volume transaction flows for suspicious patterns",
        "Identified and investigated complex money laundering schemes",
        "Prepared detailed regulatory compliance reports"
      ]
    },
    {
      title: "Fraud and AML/CFT Investigator",
      company: "National Bank of Greece",
      location: "Athens, Greece",
      period: "January 2023 - August 2023",
      type: "Full-time",
      description: "Conducted thorough fraud investigations and Anti-Money Laundering/Combating the Financing of Terrorism (AML/CFT) assessments. Analyzed suspicious transactions, performed customer due diligence, and collaborated with law enforcement agencies on financial crime cases.",
      skills: ["Fraud Investigation", "AML/CFT", "Customer Due Diligence", "Risk Assessment"],
      achievements: [
        "Investigated complex fraud cases involving multiple jurisdictions",
        "Enhanced AML/CFT detection procedures",
        "Collaborated with law enforcement on financial crime cases"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 fade-in-up">
          <Badge variant="outline" className="mb-4 md:mb-6 text-sm px-4 py-2">Professional Experience</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 md:mb-8 text-primary">
            Career Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Progressive career growth in financial compliance and fraud prevention across leading financial institutions, 
            from traditional banking to cutting-edge fintech and blockchain sectors.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 md:space-y-12 stagger-children">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-effect border-border/50 shadow-premium hover:shadow-glow transition-spring group overflow-hidden"
              style={{ '--i': index } as any}
            >
              
              <CardHeader className="pb-4 md:pb-6 bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-playfair font-bold mb-3 md:mb-4 text-primary group-hover:text-accent transition-colors leading-tight">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center text-primary mb-2 md:mb-3">
                      <Building2 className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                      <span className="font-semibold text-base md:text-lg">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
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
                  
                  <div className="hidden lg:block">
                    {index === 0 && <Award className="w-10 md:w-12 h-10 md:h-12 text-accent" />}
                    {index === 1 && <TrendingUp className="w-10 md:w-12 h-10 md:h-12 text-primary" />}
                    {index >= 2 && <Building2 className="w-10 md:w-12 h-10 md:h-12 text-accent" />}
                  </div>
                </div>
              </CardHeader>
              
              
              <CardContent className="p-6 md:p-8">
                <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  {exp.description}
                </p>
                
                {exp.achievements && (
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-semibold text-primary mb-2 md:mb-3 text-sm md:text-base">Key Achievements:</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm md:text-base text-muted-foreground">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold text-primary mb-2 md:mb-3 text-sm md:text-base">Core Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-xs glass-effect hover:shadow-card transition-spring hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 md:mt-16 fade-in-up">
          <Card className="glass-effect border-border/50 shadow-premium p-6 md:p-8 lg:p-12 text-center">
            <h3 className="text-xl md:text-2xl font-playfair font-bold mb-3 md:mb-4 text-primary">
              Comprehensive Financial Compliance Expertise
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-6 px-2">
              Over 2+ years of progressive experience across traditional banking, fintech, and blockchain sectors, 
              demonstrating expertise in AML/CFT, fraud investigation, and regulatory compliance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">2+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">6</div>
                <div className="text-xs md:text-sm text-muted-foreground">Professional Roles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">5</div>
                <div className="text-xs md:text-sm text-muted-foreground">Leading Institutions</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
