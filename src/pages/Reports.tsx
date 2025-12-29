import SafetyNavbar from "@/components/SafetyNavbar";
import SafetyFooter from "@/components/SafetyFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Search, Plus, Eye, Edit, Clock, MapPin, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import IncidentReportModal from "@/components/IncidentReportModal";

const Reports = () => {
  const myReports = [
    {
      id: "SR001",
      type: "Theft",
      location: "Main Street Plaza",
      severity: "medium",
      status: "Under Investigation",
      date: "2024-01-15",
      description: "Theft reported at electronics store"
    },
    {
      id: "SR002",
      type: "Traffic Accident",
      location: "5th Avenue",
      severity: "high",
      status: "Resolved",
      date: "2024-01-14",
      description: "Minor vehicle collision"
    },
    {
      id: "SR003",
      type: "Suspicious Activity",
      location: "Central Park",
      severity: "low",
      status: "Monitoring",
      date: "2024-01-13",
      description: "Unusual activity in park area"
    }
  ];

  const communityReports = [
    {
      id: "CR001",
      type: "Vandalism",
      location: "Downtown Library",
      severity: "medium",
      status: "In Progress",
      date: "2024-01-15",
      reporter: "Anonymous",
      description: "Graffiti on building walls"
    },
    {
      id: "CR002",
      type: "Emergency",
      location: "Hospital District",
      severity: "high",
      status: "Emergency Response",
      date: "2024-01-15",
      reporter: "J. Smith",
      description: "Medical emergency assistance needed"
    },
    {
      id: "CR003",
      type: "Harassment",
      location: "Shopping Center",
      severity: "medium",
      status: "Under Review",
      date: "2024-01-14",
      reporter: "Anonymous",
      description: "Harassment incident reported"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return "secondary";
      case "under investigation":
      case "in progress":
        return "outline";
      case "emergency response":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "outline";
      case "low":
        return "secondary";
      default:
        return "outline";
    }
  };

  const ReportCard = ({ report, showReporter = false }: { report: any, showReporter?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className="safe-hover"
    >
      <Card className="p-6 bg-gradient-card border-0 shadow-card">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{report.type}</h3>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="h-3 w-3 mr-1" />
              {report.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {report.date}
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <Badge variant={getSeverityColor(report.severity)}>
              {report.severity}
            </Badge>
            <Badge variant={getStatusColor(report.status)}>
              {report.status}
            </Badge>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">{report.description}</p>
        
        {showReporter && (
          <div className="text-sm text-muted-foreground mb-4">
            Reported by: {report.reporter}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-primary">ID: {report.id}</span>
          <div className="space-x-2">
            <Button size="sm" variant="ghost">
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
            {!showReporter && (
              <Button size="sm" variant="ghost">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <SafetyNavbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Safety Reports</h1>
              <p className="text-muted-foreground">Manage and track safety incidents</p>
            </div>
            <IncidentReportModal />
          </div>
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
                <Input placeholder="Search reports..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="theft">Theft/Robbery</SelectItem>
                  <SelectItem value="accident">Traffic Accident</SelectItem>
                  <SelectItem value="suspicious">Suspicious Activity</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="investigating">Under Investigation</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>
        </motion.div>

        {/* Reports Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="my-reports" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="my-reports" className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                My Reports ({myReports.length})
              </TabsTrigger>
              <TabsTrigger value="community" className="flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Community Reports ({communityReports.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="my-reports" className="mt-6">
              <div className="grid gap-6">
                {myReports.map((report, index) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ReportCard report={report} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="community" className="mt-6">
              <div className="grid gap-6">
                {communityReports.map((report, index) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ReportCard report={report} showReporter={true} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-4">Reporting Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24</div>
                <div className="text-sm text-muted-foreground">Total Reports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">18</div>
                <div className="text-sm text-muted-foreground">Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-1">4</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">2</div>
                <div className="text-sm text-muted-foreground">High Priority</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>

      <SafetyFooter />
    </div>
  );
};

export default Reports;