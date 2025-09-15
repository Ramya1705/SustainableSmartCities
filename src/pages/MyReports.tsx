import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Calendar, Bell, User, Settings, LogOut } from 'lucide-react';

const MyReports = () => {
  const [activeTab, setActiveTab] = useState('reports');
  
  // 🔹 Hardcoded issues instead of mockIssues
  const userIssues = [
    {
      id: 1,
      title: "Pothole on Main Street",
      description: "A large pothole on Main Street near the traffic signal is causing inconvenience and risk of accidents.",
      severity: "High",
      status: "Under Review",
      location: { address: "Main Street, Downtown" },
      reportedAt: "2025-09-01",
      votes: 12,
      image:"https://tse1.mm.bing.net/th/id/OIP.Tr2XcJXryM9i8AxYJHOgHQHaFc?pid=Api&P=0&h=180"
    },
    {
      id: 2,
      title: "Overflowing Garbage Bin",
      description: "Garbage has been piling up and overflowing near the community park for over 3 days, creating a foul smell and attracting stray animals.",
      severity: "Critical",
      status: "Reported",
      location: { address: "Community Park, Westside" },
      reportedAt: "2025-09-05",
      votes: 20,
      image: "https://tse2.mm.bing.net/th/id/OIP.JqDqYGIZ7H2hExWAzP_dkAHaE7?pid=Api&P=0&h=180"
    },
    {
      id: 3,
      title: "Streetlight Not Working",
      description: "The streetlight near the bus stop is not working, making the area unsafe at night.",
      severity: "Medium",
      status: "In Progress",
      location: { address: "Bus Stop, Lakeview Road" },
      reportedAt: "2025-09-08",
      votes: 8,
      image: "https://tse2.mm.bing.net/th/id/OIP.Fdi29RtNBID0RPYDRjvF4gHaE8?pid=Api&P=0&h=180"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-destructive text-destructive-foreground';
      case 'High': return 'bg-warning text-warning-foreground';
      case 'Medium': return 'bg-accent text-accent-foreground';
      case 'Low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Reported': return 'status-reported';
      case 'Under Review': return 'status-review';
      case 'In Progress': return 'status-progress';
      case 'Resolved': return 'status-resolved';
      default: return 'status-reported';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">My Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your reported issues and account settings
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            My Reports
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        {/* My Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Your Reported Issues</h2>
              <p className="text-muted-foreground">You have reported {userIssues.length} issues</p>
            </div>
            <Link to="/report">
              <Button>Report New Issue</Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {userIssues.map((issue) => (
              <Card key={issue.id} className="shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-4">
                    
                    {/* 🔹 Problem Image */}
                    <div className="w-full lg:w-24 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={issue.image}
                        alt={issue.title}
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <Link to={`/issue/${issue.id}`}>
                          <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                            {issue.title}
                          </h3>
                        </Link>
                        <div className="flex gap-2 shrink-0">
                          <Badge className={getSeverityColor(issue.severity)}>
                            {issue.severity}
                          </Badge>
                          <Badge variant="outline" className={getStatusColor(issue.status)}>
                            {issue.status}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground line-clamp-2">
                        {issue.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{issue.location.address}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Reported {formatDate(issue.reportedAt)}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <span>{issue.votes} votes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyReports;
