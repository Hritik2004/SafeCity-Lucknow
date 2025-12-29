import { Button } from "@/components/ui/button";
import { Shield, MapPin, Phone, Users, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

const SafetyFooter = () => {
  const quickLinks = [
    { label: "Report Incident", href: "#report" },
    { label: "Emergency SOS", href: "#sos" },
    { label: "Safety Map", href: "#map" },
    { label: "Community", href: "#community" }
  ];

  const support = [
    { label: "Help Center", href: "#help" },
    { label: "Safety Tips", href: "#tips" },
    { label: "Contact Us", href: "#contact" },
    { label: "Emergency Contacts", href: "#emergency" }
  ];

  const legal = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Community Guidelines", href: "#guidelines" },
    { label: "Data Protection", href: "#data" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Banner */}
        <div className="py-8 border-b border-border">
          <div className="bg-gradient-alert rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">In Case of Emergency</h3>
            <p className="text-white/90 mb-4">Call emergency services immediately for life-threatening situations</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Phone className="h-4 w-4 mr-2" />
                Call 911
              </Button>
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <MapPin className="h-4 w-4 mr-2" />
                Find Hospital
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-trust">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">SafeCity</div>
                <div className="text-sm text-muted-foreground">Community Safety</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Empowering communities with real-time safety information and emergency response tools. 
              Together, we build safer neighborhoods.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between">
          <div className="text-muted-foreground text-sm">
            © 2024 SafeCity. All rights reserved. Making communities safer together.
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2 text-secondary text-sm">
              <Shield className="h-3 w-3" />
              <span>Verified Safe Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SafetyFooter;