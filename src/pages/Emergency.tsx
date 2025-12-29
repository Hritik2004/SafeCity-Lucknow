import SafetyNavbar from "@/components/SafetyNavbar";
import SafetyFooter from "@/components/SafetyFooter";
import EmergencySOSWidget from "@/components/EmergencySOSWidget";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Shield, AlertTriangle, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Emergency = () => {
  const emergencyGuides = [
    {
      title: "Medical Emergency",
      icon: Heart,
      steps: [
        "Call 911 immediately",
        "Check for breathing and pulse",
        "Apply first aid if trained",
        "Stay with the person until help arrives"
      ],
      color: "bg-red-500"
    },
    {
      title: "Fire Emergency",
      icon: AlertTriangle,
      steps: [
        "Get everyone out safely",
        "Call 911 from a safe location",
        "Do not re-enter the building",
        "Meet at designated assembly point"
      ],
      color: "bg-orange-500"
    },
    {
      title: "Personal Safety",
      icon: Shield,
      steps: [
        "Move to a safe, public area",
        "Contact trusted person immediately",
        "Use SafeCity SOS if needed",
        "Report incident to authorities"
      ],
      color: "bg-blue-500"
    }
  ];

  const emergencyNumbers = [
    { service: "Emergency Services", number: "911", description: "Police, Fire, Medical" },
    { service: "Poison Control", number: "1-800-222-1222", description: "24/7 Poison Emergency" },
    { service: "Crisis Hotline", number: "988", description: "Mental Health Crisis" },
    { service: "Local Police", number: "555-0123", description: "Non-Emergency Police" },
    { service: "Hospital", number: "555-0124", description: "General Hospital" },
    { service: "SafeCity Support", number: "555-SAFE", description: "App Technical Support" }
  ];

  const safetyTips = [
    {
      title: "Stay Alert",
      description: "Be aware of your surroundings and trust your instincts",
      icon: "👁️"
    },
    {
      title: "Share Location", 
      description: "Let trusted contacts know your whereabouts",
      icon: "📍"
    },
    {
      title: "Emergency Contacts",
      description: "Keep important numbers easily accessible",
      icon: "📞"
    },
    {
      title: "Avoid Isolated Areas",
      description: "Stick to well-lit, populated areas when possible",
      icon: "🏃"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SafetyNavbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Emergency Center</h1>
          <p className="text-muted-foreground">Quick access to emergency services and safety resources</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Emergency SOS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <EmergencySOSWidget />
          </motion.div>

          {/* Emergency Guides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h2 className="text-xl font-semibold text-foreground mb-6">Emergency Response Guides</h2>
              <div className="grid gap-6">
                {emergencyGuides.map((guide, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-4 rounded-lg bg-muted/50 safe-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${guide.color} text-white`}>
                        <guide.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3">{guide.title}</h3>
                        <ol className="space-y-2">
                          {guide.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                                {stepIndex + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Emergency Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-primary" />
              Emergency Contact Numbers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyNumbers.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-lg bg-muted/50 safe-hover"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground">{contact.service}</h4>
                    <Badge variant="outline" className="text-xs">
                      {contact.number === "911" ? "Emergency" : "Support"}
                    </Badge>
                  </div>
                  <div className="text-lg font-bold text-primary mb-1">{contact.number}</div>
                  <div className="text-sm text-muted-foreground mb-3">{contact.description}</div>
                  <Button size="sm" variant="ghost" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Safety Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-6">Safety Tips</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {safetyTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-muted/50 safe-hover"
                >
                  <div className="text-3xl mb-3">{tip.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Emergency Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-4">Emergency Status</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                <div className="font-semibold text-foreground">All Clear</div>
                <div className="text-sm text-muted-foreground">No active emergencies</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-primary font-semibold">&lt; 3 min</span>
                </div>
                <div className="font-semibold text-foreground">Response Time</div>
                <div className="text-sm text-muted-foreground">Average emergency response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">24/7</div>
                <div className="font-semibold text-foreground">Always Available</div>
                <div className="text-sm text-muted-foreground">Emergency services active</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>

      <SafetyFooter />
    </div>
  );
};

export default Emergency;