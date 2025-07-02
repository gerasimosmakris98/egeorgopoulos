
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Globe, MessageCircle, Calendar, Send, ExternalLink } from "lucide-react";
import { contactInfo, languages, collaborationAreas, quickActions } from "@/data/contactData";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 fade-in-up">
          <Badge variant="outline" className="mb-4 md:mb-6 text-sm px-4 py-2">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 md:mb-8 text-primary">
            Contact Information
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Ready to discuss financial compliance, blockchain technology, or potential collaboration opportunities? 
            Let's connect and explore how we can work together to enhance financial security and compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Details */}
          <div className="fade-in-up">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 md:mb-8 text-primary">Contact Details</h3>
            <div className="space-y-4 md:space-y-6 stagger-children">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="glass-effect border-border/50 shadow-card hover:shadow-premium transition-spring group hover:scale-[1.02]"
                  style={{ '--i': index } as any}
                >
                  <CardContent className="p-4 md:p-8">
                    <div className="flex items-start">
                      <div className="p-2 md:p-3 rounded-lg bg-primary/10 mr-4 md:mr-6 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        <contact.icon className="w-5 md:w-6 h-5 md:h-6 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-primary mb-2 text-base md:text-lg flex items-center gap-2">
                          {contact.label}
                          {contact.methods && contact.methods[0]?.flag && (
                            <span className="text-lg">{contact.methods[0].flag}</span>
                          )}
                        </h4>
                        
                        {/* Contact Methods */}
                        {contact.methods ? (
                          <div className="space-y-2 mb-3">
                            {contact.methods.map((method, methodIndex) => (
                              <div key={methodIndex} className="flex items-center gap-2">
                                <a 
                                  href={method.href}
                                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm md:text-base font-medium"
                                  target={method.href.startsWith('http') ? '_blank' : undefined}
                                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                  <method.icon className="w-4 h-4" />
                                  <span>{method.label}</span>
                                  {method.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                                </a>
                              </div>
                            ))}
                            <p className="text-sm md:text-base text-muted-foreground font-medium">{contact.value}</p>
                          </div>
                        ) : contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-lg font-medium mb-2 block break-all"
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.value}
                            {contact.href.startsWith('http') && <ExternalLink className="w-4 h-4 inline ml-1" />}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm md:text-lg font-medium mb-2 break-all">{contact.value}</p>
                        )}
                        
                        <p className="text-xs md:text-sm text-muted-foreground/80">{contact.description}</p>
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
            <div className="fade-in-up">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 md:mb-8 flex items-center text-primary">
                <Globe className="w-6 md:w-8 h-6 md:h-8 mr-3 md:mr-4" />
                Languages
              </h3>
              <Card className="glass-effect border-border/50 shadow-card">
                <CardContent className="p-4 md:p-8">
                  <div className="space-y-4 md:space-y-6">
                    {languages.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-primary text-sm md:text-base">{lang.language}</span>
                          <Badge variant="secondary" className="text-xs">
                            {lang.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
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
            <div className="fade-in-up">
              <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-4 md:mb-6 flex items-center text-primary">
                <MessageCircle className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3" />
                Collaboration Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
                {collaborationAreas.map((area, index) => (
                  <Badge 
                    key={area} 
                    variant="outline" 
                    className="p-2 md:p-3 text-xs glass-effect hover:shadow-card transition-spring hover:scale-105 text-center justify-center"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-20 fade-in-up">
          <Card className="glass-effect border-border/50 shadow-glow overflow-hidden">
            <div className="bg-gradient-hero p-6 md:p-8 lg:p-16 text-center text-primary-foreground">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Send className="w-6 md:w-8 h-6 md:h-8" />
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold">Let's Collaborate</h3>
                </div>
                <p className="text-lg md:text-xl mb-6 md:mb-8 text-primary-foreground/90 leading-relaxed px-4">
                  Interested in financial compliance consulting, blockchain analysis, or discussing industry insights? 
                  I'm always open to new opportunities and meaningful professional connections.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-lg mx-auto">
                  <Button 
                    variant="hero" 
                    size="lg"
                    asChild
                    className="flex-1 min-w-[180px] md:min-w-[200px] text-accent-foreground bg-accent hover:bg-accent/90"
                  >
                    <a href="mailto:stgeorgo141@gmail.com">
                      <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    variant="premium" 
                    size="lg"
                    asChild
                    className="flex-1 min-w-[180px] md:min-w-[200px]"
                  >
                    <a href="https://www.linkedin.com/in/efstathios-georgopoulos/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
                <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-primary-foreground/70">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Available for consultations and meetings</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
