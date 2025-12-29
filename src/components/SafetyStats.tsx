import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, TrendingUp, Shield, Clock, MapPin, Users } from "lucide-react";

const SafetyStats = () => {
  const stats = [
    {
      label: "Crime Reduction",
      value: "34%",
      change: "↓ 12% this month",
      icon: TrendingDown,
      positive: true
    },
    {
      label: "Response Time",
      value: "2.4 min",
      change: "↓ 30 sec faster",
      icon: Clock,
      positive: true
    },
    {
      label: "Active Reports",
      value: "1,247",
      change: "↑ 156 this week",
      icon: MapPin,
      positive: true
    },
    {
      label: "Community Members",
      value: "52,843",
      change: "↑ 2,341 new users",
      icon: Users,
      positive: true
    }
  ];

  const recentIncidents = [
    { type: "Theft", location: "Downtown Plaza", time: "23 min ago", status: "resolved" },
    { type: "Accident", location: "Main St & 5th Ave", time: "1 hour ago", status: "active" },
    { type: "Harassment", location: "City Park", time: "2 hours ago", status: "investigating" },
    { type: "Vandalism", location: "Shopping District", time: "4 hours ago", status: "resolved" }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Community Safety Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real-time Safety Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track community safety metrics, incident reports, and emergency response times in your area.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Grid */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 bg-card shadow-card safe-hover">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {stat.label}
                      </div>
                      <div className={`text-xs ${stat.positive ? 'text-secondary' : 'text-destructive'}`}>
                        {stat.change}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mock Heatmap */}
            <Card className="p-6 bg-card shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Safety Heatmap</h3>
              <div className="bg-gradient-to-br from-secondary/20 via-primary/10 to-destructive/20 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive safety map will appear here</p>
                  <p className="text-sm text-muted-foreground mt-1">Connect to see real-time incident data</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Incidents */}
          <div className="space-y-6">
            <Card className="p-6 bg-card shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Recent Incidents</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              
              <div className="space-y-3">
                {recentIncidents.map((incident, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <div className="font-medium text-foreground text-sm">{incident.type}</div>
                      <div className="text-xs text-muted-foreground">{incident.location}</div>
                      <div className="text-xs text-muted-foreground">{incident.time}</div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      incident.status === 'resolved' ? 'bg-secondary/20 text-secondary' :
                      incident.status === 'active' ? 'bg-destructive/20 text-destructive' :
                      'bg-primary/20 text-primary'
                    }`}>
                      {incident.status}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-card shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="trust" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Report Incident
                </Button>
                <Button variant="emergency" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Emergency SOS
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Community Forum
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyStats;