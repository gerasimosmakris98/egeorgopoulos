import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const menuItems = [{
    label: "Home",
    path: "/"
  }, {
    label: "Resume & Experience",
    path: "/resume"
  }, {
    label: "Blog",
    path: "/blog"
  }, {
    label: "Contact",
    path: "/contact"
  }];
  return <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link to="/" className="text-lg md:text-xl font-playfair font-bold text-foreground">
              E. Georgopoulos
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {menuItems.map(item => <Link key={item.path} to={item.path} className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                  {item.label}
                </Link>)}
            </div>

            <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
              <a href="https://www.linkedin.com/in/efstathios-georgopoulos/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden h-9 w-9">
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
              <div className="px-4 py-4 space-y-2">
                {menuItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`block w-full text-left py-2 text-base transition-colors ${location.pathname === item.path ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}>
                    {item.label}
                  </Link>)}
                <Button variant="outline" size="sm" asChild className="w-full mt-4">
                  <a href="https://www.linkedin.com/in/efstathios-georgopoulos/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>}
        </div>
      </nav>
      
      <main className="flex-1">{children}</main>
      
      <footer className="border-t border-border py-6 md:py-8 mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm md:text-base text-muted-foreground">© 2025 Efstathios Georgopoulos. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Layout;