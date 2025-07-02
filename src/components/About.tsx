
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, TrendingUp, Users, Award, Target, Brain, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Financial Crime Fighter",
      description: "3+ years specializing in AML/CFT, KYC/CDD, and fraud investigations",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Blockchain Expert",
      description: "Advanced knowledge in financial compliance and blockchain technology",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Multilingual Professional",
      description: "Fluent in Greek, English, Spanish, studying French and Portuguese",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Quality Assurance Leader",
      description: "Leading QA operations and compliance initiatives at Ebury",
      color: "text-primary"
    }
  ];

  const features = [
    { icon: Award, title: "15+ Certifications", description: "Industry-recognized credentials" },
    { icon: Target, title: "30+ Projects", description: "Successful compliance implementations" },
    { icon: Brain, title: "10+ Publications", description: "Thought leadership articles" },
    { icon: Zap, title: "Madrid Based", description: "Open to remote opportunities" }
  ];

  const skills = [
    'Anti-Money Laundering (AML)',
    'Know Your Customer (KYC)',
    'Customer Due Diligence (CDD)',
    'Fraud Detection & Prevention',
    'Financial Crime Investigation',
    'Blockchain Technology',
    'Cryptocurrency Compliance',
    'Risk Management',
    'Data Analytics',
    'Regulatory Compliance',
    'Quality Assurance',
    'Process Optimization'
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 fade-in-up">
          <Badge variant="outline" className="mb-4 md:mb-6 text-sm px-4 py-2">About Me</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 md:mb-8 text-primary">
            Professional Background
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            MBA & Master's in Fintech and Blockchain graduate, currently pursuing Master's in Compliance. 
            Dedicated to enhancing global financial security through advanced compliance and blockchain expertise at Ebury.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-20">
          {/* About Text */}
          <div className="fade-in-up">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 md:mb-8 text-primary">About Efstathios</h3>
            <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">
                As an MBA & Master's in Fintech and Blockchain graduate, I bring a unique combination of 
                business acumen and technical expertise to the financial compliance sector. Currently 
                pursuing a Master's in Compliance, I'm committed to staying at the forefront of 
                regulatory developments.
              </p>
              <p className="text-base md:text-lg">
                Currently working at Ebury as a Financial Crime Compliance Quality Assurance Analyst 
                with 3+ years of experience in AML/CFT, KYC/CDD, fraud detection, and financial analysis, 
                I ensure regulatory compliance and operational integrity across complex financial systems.
              </p>
              <p className="text-base md:text-lg">
                My passion extends beyond traditional finance into the blockchain and cryptocurrency 
                space, where I focus on developing robust compliance frameworks for emerging financial 
                technologies.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 stagger-children">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="glass-effect border-border/50 hover:shadow-premium transition-spring hover:scale-105 group"
                style={{ '--i': index } as any}
              >
                <CardContent className="p-4 md:p-8 text-center">
                  <highlight.icon className={`w-8 md:w-12 h-8 md:h-12 ${highlight.color} mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-spring`} />
                  <h4 className="font-playfair font-semibold text-base md:text-lg mb-2 md:mb-3 text-primary">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20 stagger-children">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 rounded-xl glass-effect hover:shadow-premium transition-spring hover:scale-105"
              style={{ '--i': index } as any}
            >
              <feature.icon className="w-8 md:w-10 h-8 md:h-10 text-accent mx-auto mb-3 md:mb-4" />
              <div className="text-lg md:text-xl font-bold text-primary mb-1 md:mb-2">{feature.title}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{feature.description}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center fade-in-up">
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-8 md:mb-12 text-primary">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 stagger-children">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm glass-effect hover:shadow-card transition-spring hover:scale-105 cursor-default"
                style={{ '--i': index } as any}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
