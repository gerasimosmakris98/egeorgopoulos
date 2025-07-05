import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { useData } from "@/contexts/DataContext";

const BlogListing = () => {
  const { articles, personalInfo } = useData();
  
  // Filter visible and sort by featured/date
  const visibleArticles = articles
    .filter(article => article.visible)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

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
          {visibleArticles.map((article, index) => (
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
                    {article.readTime || "5 min read"}
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
                  href={personalInfo.linkedInLink} 
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