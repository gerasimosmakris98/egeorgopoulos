
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const BlogListing = () => {
  const articles = [
    {
      title: "Unveiling the Shadows: Transnistria's Financial Crime and the EU's Financial Security",
      excerpt: "Examining the complex challenge of Transnistria's unrecognized status and its impact on AML/CFT efforts in the European Union.",
      url: "https://www.linkedin.com/pulse/unveiling-shadows-transnistrias-financial-crime-eus-georgopoulos-gfzkf/",
      date: "2024-04-15",
      readTime: "8 min read",
      tags: ["AML/CFT", "EU Regulation", "Financial Crime", "Risk Assessment"]
    },
    {
      title: "Understanding Anti-Money Laundering in the Cryptocurrency Sphere",
      excerpt: "Exploring the challenges and solutions for implementing effective AML measures in the rapidly evolving cryptocurrency industry.",
      url: "https://www.linkedin.com/pulse/understanding-anti-money-laundering-cryptocurrency-georgopoulos-fechf/",
      date: "2024-04-10",
      readTime: "10 min read",
      tags: ["Cryptocurrency", "AML", "Blockchain", "Digital Assets"]
    },
    {
      title: "Understanding the Distinctions: AML, Anti-Fraud, and Anti-Financial Crime",
      excerpt: "A comprehensive breakdown of the key differences between AML, anti-fraud, and anti-financial crime measures.",
      url: "https://www.linkedin.com/pulse/understanding-distinctions-aml-anti-fraud-crime-georgopoulos-qnuwf/",
      date: "2024-04-05",
      readTime: "7 min read",
      tags: ["AML", "Anti-Fraud", "Financial Crime", "Compliance"]
    },
    {
      title: "Navigating the Maze of False Positives in AML",
      excerpt: "Understanding the challenges of false positives in AML systems and strategies to improve detection accuracy.",
      url: "https://www.linkedin.com/pulse/navigating-maze-false-positives-aml-efstathios-georgopoulos-ew17f/?trackingId=I08jJaoSSXuEPOEoVgwwRw%3D%3D",
      date: "2024-03-28",
      readTime: "9 min read",
      tags: ["AML", "False Positives", "Risk Management", "Technology"]
    },
    {
      title: "KYT: The Future of Financial Security",
      excerpt: "Exploring Know Your Transaction (KYT) as the next frontier in financial compliance and security measures.",
      url: "https://www.linkedin.com/pulse/kyt-future-financial-security-efstathios-georgopoulos-aqjnf/",
      date: "2024-03-20",
      readTime: "6 min read",
      tags: ["KYT", "Financial Security", "Transaction Monitoring", "Innovation"]
    },
    {
      title: "Anti-Money Laundering (AML) and Politically Exposed Persons (PEPs): A Comprehensive Overview",
      excerpt: "Detailed analysis of PEP regulations within the EU's AML framework and enhanced due diligence requirements.",
      url: "https://www.linkedin.com/pulse/anti-money-laundering-aml-politically-exposed-persons-georgopoulos-ajnwf/",
      date: "2024-03-15",
      readTime: "11 min read",
      tags: ["AML", "PEPs", "EU Regulation", "Due Diligence"]
    },
    {
      title: "Compliance in Digital Assets and Liquidity Management: Navigating the New Financial Landscape",
      excerpt: "Understanding regulatory requirements for digital assets and the importance of effective liquidity management.",
      url: "https://www.linkedin.com/pulse/compliance-digital-assets-liquidity-management-new-georgopoulos-ra5rf/",
      date: "2024-03-10",
      readTime: "12 min read",
      tags: ["Digital Assets", "Liquidity Management", "Compliance", "Regulation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-foreground">
            Publications & Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights and analysis on financial compliance, blockchain technology, and regulatory developments published on LinkedIn
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 lg:gap-12">
          {articles.map((article, index) => (
            <Card key={index} className="minimal-card hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-playfair font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {article.excerpt}
                </p>
                
                <Button variant="outline" asChild className="group-hover:border-primary group-hover:text-primary">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read on LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="minimal-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                Stay Connected
              </h3>
              <p className="text-muted-foreground mb-6">
                Follow me on LinkedIn for the latest insights on financial compliance, blockchain technology, and regulatory developments.
              </p>
              <Button variant="default" asChild>
                <a 
                  href="https://www.linkedin.com/in/efstathios-georgopoulos/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Follow on LinkedIn
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
