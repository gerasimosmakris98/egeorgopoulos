
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Star, Clock, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredArticle = {
    title: "Unveiling the Shadows: Transnistria's Financial Crime and the EU's Security Imperative",
    excerpt: "Exploring the complex challenges Transnistria presents in the fight against Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT), and its implications for EU financial security.",
    url: "https://www.linkedin.com/pulse/unveiling-shadows-transnistrias-financial-crime-eus-georgopoulos-gfzkf/",
    date: "2024",
    tags: ["AML", "CFT", "EU Security", "Financial Crime"],
    featured: true
  };

  const articles = [
    {
      title: "Understanding Anti-Money Laundering in the Cryptocurrency Sphere",
      excerpt: "A comprehensive overview of AML measures in the cryptocurrency industry, covering KYC, CDD processes, and the importance of financial security in digital finance.",
      url: "https://www.linkedin.com/pulse/understanding-anti-money-laundering-cryptocurrency-georgopoulos-fechf/",
      date: "2024",
      tags: ["AML", "Cryptocurrency", "KYC", "Digital Finance"],
      readTime: "8 min"
    },
    {
      title: "Understanding the Distinctions Between AML and Anti-Fraud in Financial Crime",
      excerpt: "Analyzing the key differences between Anti-Money Laundering and Anti-Fraud measures, their unique approaches, and their combined role in financial crime prevention.",
      url: "https://www.linkedin.com/pulse/understanding-distinctions-aml-anti-fraud-crime-georgopoulos-qnuwf/",
      date: "2024",
      tags: ["AML", "Anti-Fraud", "Financial Crime", "Compliance"],
      readTime: "6 min"
    },
    {
      title: "Navigating the Maze of False Positives in AML",
      excerpt: "Examining the challenges of false positives in AML systems and strategies for improving detection accuracy while maintaining compliance effectiveness.",
      url: "https://www.linkedin.com/pulse/navigating-maze-false-positives-aml-efstathios-georgopoulos-ew17f/?trackingId=I08jJaoSSXuEPOEoVgwwRw%3D%3D",
      date: "2024", 
      tags: ["AML", "False Positives", "Detection Systems", "Compliance"],
      readTime: "7 min"
    },
    {
      title: "KYT: The Future of Financial Security",
      excerpt: "Exploring Know Your Transaction (KYT) protocols and their role in the future of financial security and compliance monitoring.",
      url: "https://www.linkedin.com/pulse/kyt-future-financial-security-efstathios-georgopoulos-aqjnf/",
      date: "2024",
      tags: ["KYT", "Financial Security", "Transaction Monitoring", "Compliance"],
      readTime: "5 min"
    },
    {
      title: "Anti-Money Laundering (AML) and Politically Exposed Persons (PEPs)",
      excerpt: "Understanding the specific AML considerations and enhanced due diligence requirements for Politically Exposed Persons in financial compliance.",
      url: "https://www.linkedin.com/pulse/anti-money-laundering-aml-politically-exposed-persons-georgopoulos-ajnwf/",
      date: "2024",
      tags: ["AML", "PEPs", "Due Diligence", "Political Risk"],
      readTime: "9 min"
    },
    {
      title: "Compliance in Digital Assets and Liquidity Management: New Paradigms",
      excerpt: "Examining emerging compliance frameworks for digital assets and the evolving landscape of liquidity management in the digital economy.",
      url: "https://www.linkedin.com/pulse/compliance-digital-assets-liquidity-management-new-georgopoulos-ra5rf/",
      date: "2024",
      tags: ["Digital Assets", "Compliance", "Liquidity Management", "Fintech"],
      readTime: "10 min"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <Badge variant="outline" className="mb-6 text-sm px-4 py-2">Publications</Badge>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-8 text-primary">
            Thought Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Sharing insights on financial compliance, blockchain technology, and emerging trends 
            in the fight against financial crime through comprehensive research and analysis.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 fade-in-up">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Featured Article</span>
          </div>
          <Card className="glass-effect border-border/50 shadow-premium hover:shadow-glow transition-spring group overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <BookOpen className="w-6 h-6 text-accent" />
                    <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                      Featured
                    </Badge>
                    <Badge variant="outline">
                      {featuredArticle.date}
                    </Badge>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-playfair font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Button 
                    variant="hero" 
                    size="lg"
                    asChild
                    className="min-w-[180px]"
                  >
                    <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer">
                      Read Article
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className="glass-effect border-border/50 shadow-card hover:shadow-premium transition-spring group hover:scale-[1.02]"
              style={{ '--i': index } as any}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">
                      {article.date}
                    </Badge>
                    {article.readTime && (
                      <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </Badge>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-playfair font-semibold leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="w-full group-hover:border-primary group-hover:text-primary group-hover:shadow-card"
                >
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read on LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <Card className="glass-effect border-border/50 shadow-premium p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-playfair font-bold text-primary">Stay Updated</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Follow my LinkedIn profile for the latest insights in financial compliance, 
              blockchain technology, and regulatory developments.
            </p>
            <Button variant="professional" size="lg" asChild>
              <a href="https://www.linkedin.com/in/efstathios-georgopoulos/" target="_blank" rel="noopener noreferrer">
                Follow on LinkedIn
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;
