
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Globe, MessageCircle, Send, Phone, ExternalLink } from "lucide-react";
import { contactInfo, languages, collaborationAreas, quickActions } from "@/data/contactData";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4 md:mb-6 text-foreground">
            Contact Information
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Ready to discuss financial compliance, blockchain technology, or potential collaboration opportunities? 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 md:mb-8 text-foreground">Contact Details</h2>
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="minimal-card hover:shadow-lg transition-all group">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex items-start">
                      <div className="p-2 md:p-3 rounded-lg bg-secondary mr-4 md:mr-6 flex-shrink-0">
                        <contact.icon className="w-5 md:w-6 h-5 md:h-6 text-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg flex items-center gap-2">
                          {contact.label}
                          {contact.methods && contact.methods[0]?.flag && (
                            <span className="text-lg">{contact.methods[0].flag}</span>
                          )}
                        </h3>
                        
                        {/* Contact Methods */}
                        {contact.methods ? (
                          <div className="space-y-3 mb-3">
                            {contact.methods.map((method, methodIndex) => (
                              <div key={methodIndex} className="flex items-center gap-2">
                                <a 
                                  href={method.href}
                                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm md:text-base font-medium"
                                  target={method.href.startsWith('http') ? '_blank' : undefined}
                                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                  <method.icon className="w-4 h-4" />
                                  <span>{method.label}</span>
                                  <span className="text-xs text-muted-foreground/70">({method.description})</span>
                                  {method.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                                </a>
                              </div>
                            ))}
                            <p className="text-sm md:text-base text-muted-foreground font-medium">{contact.value}</p>
                          </div>
                        ) : contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-lg font-medium mb-2 block break-all"
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.value}
                            {contact.href.startsWith('http') && <ExternalLink className="w-4 h-4 inline ml-1" />}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm md:text-lg font-medium mb-2 break-all">{contact.value}</p>
                        )}
                        
                        <p className="text-xs md:text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages & Collaboration */}
          <div className="space-y-6 md:space-y-8">
            {/* Languages */}
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 md:mb-8 flex items-center text-foreground">
                <Globe className="w-6 md:w-8 h-6 md:h-8 mr-3 md:mr-4" />
                Languages
              </h2>
              <Card className="minimal-card">
                <CardContent className="p-4 md:p-8">
                  <div className="space-y-4 md:space-y-6">
                    {languages.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-foreground text-sm md:text-base">{lang.language}</span>
                          <Badge variant="secondary" className="text-xs">
                            {lang.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${lang.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Collaboration Areas */}
            <div>
              <h2 className="text-xl md:text-2xl font-playfair font-semibold mb-4 md:mb-6 flex items-center text-foreground">
                <MessageCircle className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3" />
                Collaboration Areas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {collaborationAreas.map((area) => (
                  <Badge 
                    key={area} 
                    variant="outline" 
                    className="p-2 md:p-3 text-xs hover:shadow-sm transition-all text-center justify-center"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20">
          <Card className="minimal-card overflow-hidden">
            <div className="bg-secondary p-6 md:p-8 lg:p-16 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Send className="w-6 md:w-8 h-6 md:h-8 text-foreground" />
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground">Let's Collaborate</h3>
                </div>
                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground leading-relaxed px-2">
                  Interested in financial compliance consulting, blockchain analysis, or discussing industry insights? 
                  I'm always open to new opportunities and meaningful professional connections.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-lg mx-auto">
                  {quickActions.map((action, index) => (
                    <Button 
                      key={index}
                      variant={action.variant} 
                      size="lg"
                      asChild
                      className="flex-1 min-w-[180px] md:min-w-[200px]"
                    >
                      <a 
                        href={action.href}
                        target={action.href.startsWith('http') ? '_blank' : undefined}
                        rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <action.icon className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                        {action.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
