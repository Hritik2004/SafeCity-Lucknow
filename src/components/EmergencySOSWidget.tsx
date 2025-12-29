import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { PhoneCall, MessageSquare, MapPin, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EmergencySOSWidget = () => {
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [stage, setStage] = useState("idle"); // idle, countdown, active, complete

  const handleSOSPress = () => {
    if (stage === "idle") {
      setStage("countdown");
      setSosActive(true);
      
      // Start countdown
      let count = 5;
      const interval = setInterval(() => {
        count--;
        setCountdown(count);
        
        if (count <= 0) {
          clearInterval(interval);
          setStage("active");
          // Simulate emergency response
          setTimeout(() => {
            setStage("complete");
            setTimeout(() => {
              setStage("idle");
              setSosActive(false);
              setCountdown(5);
            }, 3000);
          }, 5000);
        }
      }, 1000);
    }
  };

  const handleCancel = () => {
    setStage("idle");
    setSosActive(false);
    setCountdown(5);
  };

  const emergencyContacts = [
    { name: "Emergency Services", number: "911", type: "emergency" },
    { name: "Local Police", number: "555-0123", type: "police" },
    { name: "Nearest Hospital", number: "555-0124", type: "medical" },
    { name: "Trusted Contact", number: "555-0125", type: "personal" }
  ];

  return (
    <div className="space-y-6">
      {/* Main SOS Button */}
      <Card className="p-8 text-center bg-gradient-to-br from-card to-destructive/5 border-0 shadow-card">
        <AnimatePresence mode="wait">
          {stage === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Emergency SOS</h3>
              <p className="text-muted-foreground mb-6">
                Press and hold to activate emergency response
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseDown={handleSOSPress}
                className="w-32 h-32 rounded-full bg-gradient-alert text-white font-bold text-xl shadow-alert hover:shadow-emergency transition-all duration-300"
              >
                SOS
              </motion.button>
            </motion.div>
          )}

          {stage === "countdown" && (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-destructive mb-4">Emergency Activating</h3>
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-32 h-32 rounded-full bg-gradient-alert text-white font-bold text-4xl mx-auto mb-4 flex items-center justify-center animate-emergency-pulse"
                >
                  {countdown}
                </motion.div>
                <p className="text-muted-foreground">Emergency services will be contacted</p>
              </div>
              <Button onClick={handleCancel} variant="outline" size="lg">
                Cancel
              </Button>
            </motion.div>
          )}

          {stage === "active" && (
            <motion.div
              key="active"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-4"
              >
                <AlertTriangle className="w-16 h-16 text-destructive" />
              </motion.div>
              <h3 className="text-2xl font-bold text-destructive mb-2">SOS ACTIVE</h3>
              <p className="text-muted-foreground mb-4">
                Emergency services have been notified
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Location shared with emergency services</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span>Trusted contacts notified</span>
                </div>
              </div>
            </motion.div>
          )}

          {stage === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Help is Coming</h3>
              <p className="text-muted-foreground">
                Emergency response team dispatched
              </p>
              <Badge variant="secondary" className="mt-4">
                ETA: 3-5 minutes
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Emergency Contacts */}
      <Card className="p-6 bg-card shadow-card">
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <PhoneCall className="h-5 w-5 mr-2 text-primary" />
          Emergency Contacts
        </h4>
        <div className="grid gap-3">
          {emergencyContacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted safe-hover"
            >
              <div>
                <div className="font-medium text-foreground">{contact.name}</div>
                <div className="text-sm text-muted-foreground">{contact.number}</div>
              </div>
              <Button size="sm" variant="ghost">
                <PhoneCall className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default EmergencySOSWidget;