import { Button } from "@/components/ui/button";
import { Shield, Menu, MapPin, Phone, Users, BarChart3, FileText } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthModal from "./AuthModal";
import EmergencySOSWidget from "./EmergencySOSWidget";

const SafetyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: BarChart3, href: "/dashboard" },
    { label: "Reports", icon: FileText, href: "/reports" },
    { label: "Map", icon: MapPin, href: "/map" },
    { label: "Community", icon: Users, href: "/community" },
    { label: "Emergency", icon: Phone, href: "/emergency" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 safe-hover">
            <div className="p-2 rounded-lg bg-gradient-trust">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">SafeCity</div>
              <div className="text-xs text-muted-foreground hidden sm:block">Community Safety</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center space-x-2 transition-colors safe-hover ${
                  location.pathname === item.href 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <AuthModal defaultTab="signin">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </AuthModal>
            <AuthModal defaultTab="signup">
              <Button variant="trust" size="sm">
                Get Started
              </Button>
            </AuthModal>
            <Link to="/emergency">
              <Button variant="emergency" size="sm" className="ml-2">
                <Phone className="h-4 w-4 mr-1" />
                SOS
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link to="/emergency">
              <Button variant="emergency" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors safe-hover ${
                    location.pathname === item.href 
                      ? "text-primary font-medium bg-muted" 
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <AuthModal defaultTab="signin">
                  <Button variant="ghost" className="w-full justify-start">
                    Sign In
                  </Button>
                </AuthModal>
                <AuthModal defaultTab="signup">
                  <Button variant="trust" className="w-full justify-start">
                    Get Started
                  </Button>
                </AuthModal>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SafetyNavbar;