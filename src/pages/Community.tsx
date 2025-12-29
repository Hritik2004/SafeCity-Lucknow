import SafetyNavbar from "@/components/SafetyNavbar";
import SafetyFooter from "@/components/SafetyFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, Star, Search, Plus, Heart, Share2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Community = () => {
  const communityPosts = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
      time: "2 hours ago",
      content: "Just wanted to thank everyone for the quick response during yesterday's incident on Main Street. This community really looks out for each other! 🙏",
      likes: 24,
      comments: 8,
      category: "appreciation"
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "/api/placeholder/40/40",
      time: "4 hours ago",
      content: "Heads up - increased police presence near the shopping district today due to recent incidents. Stay aware and report anything suspicious.",
      likes: 31,
      comments: 12,
      category: "alert"
    },
    {
      id: 3,
      author: "Community Safety Team",
      avatar: "/api/placeholder/40/40",
      time: "6 hours ago",
      content: "🚨 SAFETY TIP: When walking alone at night, stay in well-lit areas and keep your phone charged. Consider using the SafeCity app's location sharing feature with trusted contacts.",
      likes: 45,
      comments: 6,
      category: "tip"
    }
  ];

  const safetyGuards = [
    {
      id: 1,
      name: "Officer Martinez",
      badge: "Police",
      zone: "Downtown",
      rating: 4.9,
      avatar: "/api/placeholder/50/50",
      status: "active"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      badge: "Community Watch",
      zone: "Residential",
      rating: 4.8,
      avatar: "/api/placeholder/50/50",
      status: "active"
    },
    {
      id: 3,
      name: "David Park",
      badge: "Emergency Responder",
      zone: "Central",
      rating: 4.9,
      avatar: "/api/placeholder/50/50",
      status: "off-duty"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Safety Workshop",
      date: "Jan 20, 2024",
      time: "7:00 PM",
      location: "Community Center",
      attendees: 42
    },
    {
      id: 2,
      title: "Neighborhood Watch Meeting",
      date: "Jan 25, 2024",
      time: "6:30 PM",
      location: "Library Main Hall",
      attendees: 28
    },
    {
      id: 3,
      title: "Self-Defense Class",
      date: "Jan 28, 2024",
      time: "10:00 AM",
      location: "Recreation Center",
      attendees: 35
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "appreciation": return "bg-green-500";
      case "alert": return "bg-red-500";
      case "tip": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SafetyNavbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Community Hub</h1>
          <p className="text-muted-foreground">Connect with neighbors and stay informed about local safety</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/api/placeholder/40/40" />
                    <AvatarFallback>YU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-3">
                    <Textarea placeholder="Share safety updates, tips, or community appreciation..." className="min-h-[80px]" />
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Badge variant="outline" className="text-xs">💡 Safety Tip</Badge>
                        <Badge variant="outline" className="text-xs">🚨 Alert</Badge>
                        <Badge variant="outline" className="text-xs">🙏 Thanks</Badge>
                      </div>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Community Posts */}
            <div className="space-y-4">
              {communityPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="p-6 bg-gradient-card border-0 shadow-card safe-hover">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-foreground">{post.author}</h4>
                          <div className={`w-2 h-2 rounded-full ${getCategoryColor(post.category)}`}></div>
                          <span className="text-sm text-muted-foreground">{post.time}</span>
                        </div>
                        <p className="text-foreground mb-4">{post.content}</p>
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary safe-hover">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary safe-hover">
                            <MessageSquare className="h-4 w-4" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary safe-hover">
                            <Share2 className="h-4 w-4" />
                            <span className="text-sm">Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Safety Guards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Safety Team
                </h2>
                <div className="space-y-4">
                  {safetyGuards.map((guard, index) => (
                    <motion.div
                      key={guard.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 safe-hover"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={guard.avatar} />
                        <AvatarFallback>{guard.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-foreground text-sm">{guard.name}</div>
                        <div className="text-xs text-muted-foreground">{guard.badge} • {guard.zone}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-muted-foreground">{guard.rating}</span>
                        </div>
                      </div>
                      <Badge variant={guard.status === "active" ? "secondary" : "outline"} className="text-xs">
                        {guard.status}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="p-3 rounded-lg bg-muted/50 safe-hover"
                    >
                      <h4 className="font-medium text-foreground text-sm mb-1">{event.title}</h4>
                      <div className="text-xs text-muted-foreground mb-1">
                        {event.date} at {event.time}
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">📍 {event.location}</div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{event.attendees} attending</span>
                        <Button size="sm" variant="ghost" className="text-xs h-6">
                          Join
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h2 className="text-xl font-semibold text-foreground mb-4">Community Stats</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Members</span>
                    <span className="font-semibold text-foreground">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts Today</span>
                    <span className="font-semibold text-foreground">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Safety Score</span>
                    <span className="font-semibold text-secondary">85%</span>
                  </div>
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

export default Community;