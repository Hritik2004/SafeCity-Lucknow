import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Shield, Phone, BarChart3, Users, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import reportIcon from "@/assets/report-icon.png";
import sosIcon from "@/assets/sos-icon.png";
import mapIcon from "@/assets/map-icon.png";
import IncidentReportModal from "./IncidentReportModal";

const FeatureCards = () => {
  const features = [
    {
      icon: reportIcon,
      title: "Incident Reporting",
      description: "Report crimes, accidents, or safety concerns instantly with location tagging and photo evidence.",
      buttonText: "Report Now",
      buttonVariant: "trust" as const,
      stats: "5K+ reports monthly"
    },
    {
      icon: sosIcon,
      title: "Emergency SOS",
      description: "One-tap emergency alert sends your location to trusted contacts and emergency services.",
      buttonText: "Setup SOS",
      buttonVariant: "emergency" as const,
      stats: "< 30 sec response"
    },
    {
      icon: mapIcon,
      title: "Safety Heatmap",
      description: "View real-time safety data and crime hotspots to make informed decisions about your route.",
      buttonText: "View Map",
      buttonVariant: "default" as const,
      stats: "Real-time updates"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Community Powered",
      description: "Harness the power of community reporting to keep everyone informed and safe."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Anonymous reporting options ensure your privacy while contributing to community safety."
    },
    {
      icon: BarChart3,
      title: "Data Insights",
      description: "Advanced analytics help authorities identify patterns and prevent future incidents."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock emergency response and community support when you need it most."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Safety Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to stay safe and keep your community informed about potential risks and emergencies.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card key={index} className="p-8 bg-gradient-card border-0 shadow-card safe-hover group">
                <div className="text-center space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300"
                  >
                    <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                  
                  <div className="pt-4">
                    <div className="text-sm text-primary font-semibold mb-4">{feature.stats}</div>
                    {index === 0 ? (
                      <IncidentReportModal />
                    ) : (
                      <Button variant={feature.buttonVariant} className="w-full">
                        {feature.buttonText}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 safe-hover">
                <div className="text-center space-y-4">
                  <motion.div 
                    whileHover={{ rotate: 5 }}
                    className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                  >
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCards;