import SafetyNavbar from "@/components/SafetyNavbar";
import SafetyFooter from "@/components/SafetyFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, AlertTriangle, Clock, Users, Phone, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IncidentReportModal from "@/components/IncidentReportModal";

const Dashboard = () => {
  const recentIncidents = [
    {
      id: "SR001",
      type: "Traffic Accident",
      location: "5th Ave & Main St",
      severity: "high",
      time: "15 min ago",
      status: "In Progress"
    },
    {
      id: "SR002", 
      type: "Suspicious Activity",
      location: "Central Park",
      severity: "medium",
      time: "32 min ago",
      status: "Investigating"
    },
    {
      id: "SR003",
      type: "Theft",
      location: "Shopping District",
      severity: "low",
      time: "1 hour ago",
      status: "Resolved"
    }
  ];

  const safetyMetrics = [
    { label: "Community Safety Score", value: 85, color: "bg-secondary" },
    { label: "Response Time", value: 72, color: "bg-primary" },
    { label: "Report Resolution", value: 94, color: "bg-emerald-500" }
  ];

  const quickActions = [
    { icon: AlertTriangle, label: "Report Incident", variant: "trust" as const, href: "/reports", isModal: true },
    { icon: Phone, label: "Emergency SOS", variant: "emergency" as const, href: "/emergency", isModal: false },
    { icon: MapPin, label: "Safety Map", variant: "default" as const, href: "/map", isModal: false },
    { icon: Users, label: "Community", variant: "secondary" as const, href: "/community", isModal: false }
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Safety Dashboard</h1>
          <p className="text-muted-foreground">Monitor community safety and manage your reports</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {action.isModal ? (
                      <IncidentReportModal>
                        <Button variant={action.variant} className="w-full h-16 flex flex-col">
                          <action.icon className="h-5 w-5 mb-1" />
                          <span className="text-xs">{action.label}</span>
                        </Button>
                      </IncidentReportModal>
                    ) : (
                      <Link to={action.href}>
                        <Button variant={action.variant} className="w-full h-16 flex flex-col">
                          <action.icon className="h-5 w-5 mb-1" />
                          <span className="text-xs">{action.label}</span>
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Safety Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h2 className="text-xl font-semibold text-foreground mb-4">Safety Metrics</h2>
              <div className="space-y-4">
                {safetyMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{metric.label}</span>
                      <span className="text-muted-foreground">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Recent Activity
              </h2>
              <div className="space-y-3">
                {recentIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-3 rounded-lg bg-muted/50 safe-hover"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">{incident.type}</h4>
                      <Badge 
                        variant={
                          incident.severity === "high" ? "destructive" :
                          incident.severity === "medium" ? "outline" : "secondary"
                        }
                        className="text-xs"
                      >
                        {incident.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {incident.location}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{incident.time}</span>
                      <Badge variant="outline" className="text-xs">
                        {incident.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Full Width Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-6">Community Overview</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1,247</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">89</div>
                <div className="text-muted-foreground">Reports Today</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">94%</div>
                <div className="text-muted-foreground">Resolution Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">2.3m</div>
                <div className="text-muted-foreground">Response Time (avg)</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>

      <SafetyFooter />
    </div>
  );
};

export default Dashboard;