import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Shield, Phone, BarChart3, Users, AlertTriangle, Clock, TrendingDown, Activity } from "lucide-react";
import { motion } from "framer-motion";
import EmergencySOSWidget from "./EmergencySOSWidget";

const InteractiveDashboard = () => {
  const liveIncidents = [
    { 
      id: 1, 
      type: "Traffic Accident", 
      location: "5th Ave & Main St", 
      time: "2 min ago", 
      severity: "high",
      status: "active",
      responders: 3
    },
    { 
      id: 2, 
      type: "Theft Report", 
      location: "Downtown Plaza", 
      time: "8 min ago", 
      severity: "medium",
      status: "investigating",
      responders: 1
    },
    { 
      id: 3, 
      type: "Suspicious Activity", 
      location: "City Park North", 
      time: "15 min ago", 
      severity: "low",
      status: "resolved",
      responders: 2
    },
    { 
      id: 4, 
      type: "Vandalism", 
      location: "Shopping District", 
      time: "23 min ago", 
      severity: "medium",
      status: "resolved",
      responders: 1
    }
  ];

  const safetyMetrics = [
    {
      label: "Response Time",
      value: "2.4 min",
      change: "-18%",
      trend: "down",
      icon: Clock,
      color: "text-secondary"
    },
    {
      label: "Crime Rate",
      value: "34% ↓",
      change: "vs last month",
      trend: "down",
      icon: TrendingDown,
      color: "text-secondary"
    },
    {
      label: "Active Reports",
      value: "1,247",
      change: "+156 today",
      trend: "up",
      icon: Activity,
      color: "text-primary"
    },
    {
      label: "Community Score",
      value: "9.2/10",
      change: "Excellent",
      trend: "up",
      icon: Shield,
      color: "text-secondary"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-destructive/20 text-destructive border-destructive/30";
      case "medium": return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30";
      case "low": return "bg-secondary/20 text-secondary border-secondary/30";
      default: return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-destructive/20 text-destructive";
      case "investigating": return "bg-primary/20 text-primary";
      case "resolved": return "bg-secondary/20 text-secondary";
      default: return "bg-muted";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Activity className="h-4 w-4 mr-2" />
            Live Safety Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real-time Community Safety
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor live incidents, track safety metrics, and access emergency services all in one place.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {safetyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 bg-gradient-card border-0 shadow-card safe-hover">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`text-2xl font-bold mb-1 ${metric.color}`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {metric.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.change}
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <metric.icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Live Incidents Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 bg-card shadow-card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
                    Live Incidents
                    <Badge variant="secondary" className="ml-2 animate-pulse">
                      {liveIncidents.filter(i => i.status === 'active').length} Active
                    </Badge>
                  </h3>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                
                <div className="space-y-3">
                  {liveIncidents.map((incident, index) => (
                    <motion.div
                      key={incident.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 safe-hover border border-border/50"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-foreground">{incident.type}</h4>
                          <Badge className={getSeverityColor(incident.severity)}>
                            {incident.severity}
                          </Badge>
                          <Badge className={getStatusColor(incident.status)}>
                            {incident.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{incident.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{incident.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{incident.responders} responders</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Interactive Safety Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-6 bg-card shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Live Safety Heatmap
                </h3>
                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-destructive/5 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent"></div>
                  <div className="text-center z-10">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                    <p className="text-lg font-semibold text-foreground">Interactive Safety Map</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Real-time incident visualization and heat mapping
                    </p>
                    <Button variant="trust" className="mt-4">
                      View Full Map
                    </Button>
                  </div>
                  {/* Floating elements to simulate activity */}
                  <div className="absolute top-16 left-20 w-3 h-3 bg-destructive/60 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-16 w-2 h-2 bg-secondary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-32 right-32 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Emergency Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <EmergencySOSWidget />

            {/* Quick Actions */}
            <Card className="p-6 bg-card shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button variant="trust" className="w-full justify-start safe-hover">
                  <MapPin className="h-4 w-4 mr-3" />
                  Report New Incident
                </Button>
                <Button variant="outline" className="w-full justify-start safe-hover">
                  <BarChart3 className="h-4 w-4 mr-3" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start safe-hover">
                  <Users className="h-4 w-4 mr-3" />
                  Community Forum
                </Button>
                <Button variant="outline" className="w-full justify-start safe-hover">
                  <Shield className="h-4 w-4 mr-3" />
                  Safety Tips
                </Button>
              </div>
            </Card>

            {/* Safety Score */}
            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/5 border-secondary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">9.2/10</div>
                <div className="text-sm text-foreground font-medium mb-1">Community Safety Score</div>
                <div className="text-xs text-muted-foreground mb-4">Based on recent activity</div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-secondary h-2 rounded-full"
                  ></motion.div>
                </div>
                <div className="text-xs text-secondary font-medium mt-2">Excellent Safety Rating</div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDashboard;