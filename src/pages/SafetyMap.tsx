import SafetyNavbar from "@/components/SafetyNavbar";
import SafetyFooter from "@/components/SafetyFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, Filter, AlertTriangle, Eye, Clock } from "lucide-react";
import { motion } from "framer-motion";

const SafetyMap = () => {
  const mapIncidents = [
    {
      id: 1,
      type: "Theft",
      location: "Downtown Plaza",
      severity: "medium",
      time: "2 hours ago",
      lat: 40.7128,
      lng: -74.0060,
      description: "Reported theft at local store"
    },
    {
      id: 2,
      type: "Traffic Accident",
      location: "Highway 101",
      severity: "high",
      time: "30 min ago",
      lat: 40.7589,
      lng: -73.9851,
      description: "Minor vehicle collision"
    },
    {
      id: 3,
      type: "Suspicious Activity",
      location: "Central Park",
      severity: "low",
      time: "1 hour ago",
      lat: 40.7829,
      lng: -73.9654,
      description: "Unusual activity reported by residents"
    }
  ];

  const filterOptions = [
    { value: "all", label: "All Incidents" },
    { value: "theft", label: "Theft/Robbery" },
    { value: "accident", label: "Traffic Accidents" },
    { value: "suspicious", label: "Suspicious Activity" },
    { value: "emergency", label: "Emergency" }
  ];

  const safetyZones = [
    { name: "Downtown", score: 78, color: "bg-yellow-500" },
    { name: "Residential District", score: 92, color: "bg-green-500" },
    { name: "Shopping Center", score: 85, color: "bg-green-400" },
    { name: "Industrial Area", score: 65, color: "bg-orange-500" }
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Safety Map</h1>
          <p className="text-muted-foreground">Real-time safety data and incident locations</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Card className="p-4 bg-gradient-card border-0 shadow-card">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search location..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter incidents" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 bg-gradient-card border-0 shadow-card h-[600px]">
              <div className="h-full bg-muted/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Safety Map</h3>
                  <p className="text-muted-foreground">Real-time incident tracking and safety zones</p>
                </div>
                
                {/* Mock incident markers */}
                {mapIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className={`absolute w-4 h-4 rounded-full ${
                      incident.severity === "high" ? "bg-red-500" :
                      incident.severity === "medium" ? "bg-yellow-500" : "bg-blue-500"
                    } animate-ping`}
                    style={{
                      top: `${20 + index * 25}%`,
                      left: `${30 + index * 20}%`
                    }}
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Incident List & Safety Zones */}
          <div className="space-y-6">
            {/* Recent Incidents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
                  Recent Incidents
                </h2>
                <div className="space-y-3">
                  {mapIncidents.map((incident, index) => (
                    <motion.div
                      key={incident.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-3 rounded-lg bg-muted/50 safe-hover"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-foreground text-sm">{incident.type}</h4>
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
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {incident.location}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <Clock className="h-3 w-3 mr-1" />
                        {incident.time}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{incident.description}</p>
                      <Button size="sm" variant="ghost" className="text-xs h-6">
                        <Eye className="h-3 w-3 mr-1" />
                        View Details
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Safety Zones */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h2 className="text-xl font-semibold text-foreground mb-4">Safety Zones</h2>
                <div className="space-y-3">
                  {safetyZones.map((zone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${zone.color}`}></div>
                        <span className="text-foreground font-medium">{zone.name}</span>
                      </div>
                      <Badge variant="secondary">
                        {zone.score}% Safe
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <SafetyFooter />
    </div>
  );
};

export default SafetyMap;