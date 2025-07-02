import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award, BookOpen, Star } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master's degree, MBA – Máster en Administración y Dirección de Empresas + Máster en Fintech & Blockchain",
      school: "ENEB - Escuela de Negocios Europea de Barcelona",
      period: "Sep 2024 - Feb 2025",
      grade: "Grade: 7.6",
      activities: "Accounting Management, Agile Methodologies, Business Plan, Data Analysis and Interpretation",
      description: "Comprehensive academic program providing advanced training in business management and emerging financial technologies. This dual master's program combines traditional business administration skills with specialized expertise in Fintech and Blockchain technologies.",
      type: "Masters",
      featured: true
    },
    {
      degree: "Bachelor of Arts - BA Spanish Language and Literature",
      school: "National & Kapodistrian University of Athens",
      period: "Jan 2017 - Sep 2024",
      activities: "Teaching, Critical Thinking, Greek, Problem Solving, Spanish",
      description: "Comprehensive study of Spanish language, literature, and culture with focus on critical thinking, analytical skills, and cross-cultural communication competencies.",
      type: "Bachelor"
    },
    {
      degree: "Post-Secondary Education Certificate - Accounting",
      school: "iekAKMIedu",
      period: "Oct 2021 - Jul 2023",
      activities: "Administration, Critical Thinking, Analytical Skills, Accounting, Greek, Problem Solving, Finance",
      description: "Professional certification program in accounting principles, financial analysis, and business administration with emphasis on practical application.",
      type: "Certificate"
    }
  ];

  const certifications = [
    {
      name: "Certificate in Anti-Money Laundering Foundations",
      issuer: "Financial Crime Academy",
      category: "AML/CFT"
    },
    {
      name: "Certificate in Countering Illegal Wildlife Trade",
      issuer: "Financial Crime Academy",
      category: "Financial Crime"
    },
    {
      name: "Certified Blockchain Professional",
      issuer: "Institute of Management, Technology and Finance",
      category: "Blockchain"
    },
    {
      name: "Diploma in Cryptocurrency",
      issuer: "Alison",
      category: "Cryptocurrency"
    },
    {
      name: "Foundation in AML and KYC",
      issuer: "KYC Lookup",
      category: "AML/CFT"
    },
    {
      name: "Operational Analysis of Suspicious Transaction Reports",
      issuer: "Basel Institute on Governance",
      category: "Financial Crime"
    },
    {
      name: "Anti-Money Laundering Concepts: AML KYC and Compliance",
      issuer: "Udemy",
      category: "AML/CFT"
    },
    {
      name: "The Data Analyst course: Complete Data Analyst Bootcamp 2022",
      issuer: "Udemy",
      category: "Data Analytics"
    },
    {
      name: "Learning GDPR",
      issuer: "LinkedIn",
      category: "Compliance"
    },
    {
      name: "Risk, Payments and Fraud [2023]",
      issuer: "Udemy",
      category: "Risk Management"
    }
  ];

  const certificationCategories = [
    { name: "AML/CFT", count: 4, color: "text-accent" },
    { name: "Blockchain", count: 2, color: "text-primary" },
    { name: "Financial Crime", count: 2, color: "text-accent" },
    { name: "Others", count: 2, color: "text-primary" }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <Badge variant="outline" className="mb-6 text-sm px-4 py-2">Education & Certifications</Badge>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-8 text-primary">
            Academic Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Continuous learning and professional development in financial compliance, 
            blockchain technology, and business management through accredited institutions and industry leaders.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="w-8 h-8 mr-4 text-primary" />
            <h3 className="text-3xl font-playfair font-semibold text-primary">Education</h3>
          </div>
          
          <div className="space-y-8 stagger-children">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className={`glass-effect border-border/50 shadow-premium hover:shadow-glow transition-spring group overflow-hidden ${
                  edu.featured ? 'ring-2 ring-accent/20' : ''
                }`}
                style={{ '--i': index } as any}
              >
                {edu.featured && (
                  <div className="bg-gradient-accent p-1">
                    <div className="bg-background/95 p-2 text-center">
                      <span className="text-accent font-semibold text-sm flex items-center justify-center gap-2">
                        <Star className="w-4 h-4" />
                        Latest Achievement
                      </span>
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <Badge variant="secondary" className="text-xs">
                          {edu.type}
                        </Badge>
                        {edu.grade && (
                          <Badge variant="outline" className="text-xs">
                            {edu.grade}
                          </Badge>
                        )}
                      </div>
                      
                      <h4 className="text-xl font-playfair font-bold mb-3 text-primary group-hover:text-accent transition-colors leading-tight">
                        {edu.degree}
                      </h4>
                      
                      <p className="text-accent font-semibold text-lg mb-3">{edu.school}</p>
                      
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {edu.description}
                  </p>
                  
                  {edu.activities && (
                    <div>
                      <p className="text-sm font-semibold mb-3 text-primary">Key Skills & Activities:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.activities.split(', ').map((activity) => (
                          <Badge 
                            key={activity} 
                            variant="outline" 
                            className="text-xs glass-effect hover:shadow-card transition-spring hover:scale-105"
                          >
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Overview */}
        <div className="mb-12 fade-in-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationCategories.map((category, index) => (
              <div 
                key={category.name}
                className="text-center p-6 rounded-xl glass-effect hover:shadow-premium transition-spring hover:scale-105"
              >
                <Award className={`w-8 h-8 ${category.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-primary mb-1">{category.count}</div>
                <div className="text-sm text-muted-foreground">{category.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Award className="w-8 h-8 mr-4 text-accent" />
            <h3 className="text-3xl font-playfair font-semibold text-primary">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="glass-effect border-border/50 shadow-card hover:shadow-premium transition-spring group hover:scale-[1.02]"
                style={{ '--i': index } as any}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <Badge variant="outline" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 fade-in-up">
          <Card className="glass-effect border-border/50 shadow-premium p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-primary">
              Commitment to Continuous Learning
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My educational journey reflects a commitment to excellence and continuous professional development. 
              From academic achievements to specialized certifications, I maintain a dedication to staying 
              current with industry trends and regulatory requirements in financial compliance and blockchain technology.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;