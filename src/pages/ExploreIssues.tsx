import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Search, Filter, Heart, MessageCircle, Calendar, Map } from 'lucide-react';
import { cn } from '@/lib/utils';

// Hardcoded 3 random problems
const issues = [
  {
    id: 1,
    title: "Pothole on Main Street",
    description: "A large pothole has formed on Main Street causing difficulties for vehicles and pedestrians.",
    location: { address: "Main Street, Downtown" },
    category: "Roads",
    status: "Reported",
    severity: "High",
    votes: 14,
    comments: ["Needs urgent repair", "Causing traffic jam"],
    reportedAt: "2025-09-05",
      image:"https://tse1.mm.bing.net/th/id/OIP.Tr2XcJXryM9i8AxYJHOgHQHaFc?pid=Api&P=0&h=180"
  },
  {
    id: 2,
    title: "Overflowing Garbage Bin",
    description: "Garbage bins near the park are overflowing, creating unhygienic conditions and foul smell.",
    location: { address: "City Park Entrance" },
    category: "Sanitation",
    status: "Under Review",
    severity: "Medium",
    votes: 22,
    comments: ["Attracting stray dogs", "Needs immediate attention"],
    reportedAt: "2025-09-07",
      image: "https://tse2.mm.bing.net/th/id/OIP.JqDqYGIZ7H2hExWAzP_dkAHaE7?pid=Api&P=0&h=180"
  },
  {
    id: 3,
    title: "Broken Streetlight",
    description: "Streetlight not working in residential area, making it unsafe at night.",
    location: { address: "Sunrise Colony, Block B" },
    category: "Electricity",
    status: "In Progress",
    severity: "Low",
    votes: 9,
    comments: ["Unsafe for pedestrians", "Kids avoid walking here"],
    reportedAt: "2025-09-08",
      image: "https://tse2.mm.bing.net/th/id/OIP.Fdi29RtNBID0RPYDRjvF4gHaE8?pid=Api&P=0&h=180"
  }
];

const categories = ["Roads", "Sanitation", "Electricity"];

const ExploreIssues = () => {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredIssues = issues.filter(issue => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.location.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'all' || issue.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || issue.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

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
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Explore Issues</h1>
        <p className="text-muted-foreground">
          View and track reported issues in your community
        </p>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6 shadow-card">
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            {/* Search */}
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium">Search Issues</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, description, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2 min-w-[180px]">
              <label className="text-sm font-medium">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="space-y-2 min-w-[150px]">
              <label className="text-sm font-medium">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Reported">Reported</SelectItem>
                  <SelectItem value="Under Review">Under Review</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={view === 'list' ? 'default' : 'outline'}
                onClick={() => setView('list')}
                size="sm"
              >
                <Filter className="h-4 w-4 mr-2" />
                List
              </Button>
              <Button
                variant={view === 'map' ? 'default' : 'outline'}
                onClick={() => setView('map')}
                size="sm"
              >
                <Map className="h-4 w-4 mr-2" />
                Map
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {filteredIssues.length} of {issues.length} issues
        </p>
      </div>

      {/* Issues List */}
      {view === 'list' && (
        <div className="grid gap-4">
          {filteredIssues.map((issue) => (
            <Card key={issue.id} className="shadow-card hover:shadow-hover transition-shadow interactive-card">
              <Link to={`/issue/${issue.id}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Issue Image */}
                    <div className="w-full lg:w-32 h-24 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={issue.image}
                        alt={issue.title}
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Issue Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                          {issue.title}
                        </h3>
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
                          <span>{formatDate(issue.reportedAt)}</span>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{issue.votes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{issue.comments.length}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      )}

      {/* Map View */}
      {view === 'map' && (
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Map className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Interactive Map Coming Soon</h3>
                <p className="text-muted-foreground">
                  Map view will show all issues with interactive pins and clustering
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {filteredIssues.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="p-12 text-center">
            <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No Issues Found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
                setStatusFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ExploreIssues;
