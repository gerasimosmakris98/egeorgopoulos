
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-primary-deep to-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Efstathios Georgopoulos
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed text-lg">
                Financial Compliance Expert & Blockchain Specialist dedicated to enhancing 
                global financial security through innovative AML/CFT solutions and blockchain technology.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80">Madrid, Spain</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {["About", "Experience", "Education", "Publications", "Contact"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Connect</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a href="mailto:stgeorgo141@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                      stgeorgo141@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/efstathios-georgopoulos/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                      @efstathios-georgopoulos
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="hero" size="sm" onClick={() => scrollToSection('contact')} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <span>© {currentYear} Efstathios Georgopoulos</span>
              <span>•</span>
              <span>Financial Compliance Expert</span>
            </div>
            
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent" />
              <span>in Madrid</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
