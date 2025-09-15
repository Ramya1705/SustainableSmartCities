import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, MapPin, Calendar, User, Heart, Share2, Bell, MessageCircle } from 'lucide-react';
import { getIssueById } from '@/lib/mockData';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const IssueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newComment, setNewComment] = useState('');
  const [isVoted, setIsVoted] = useState(false);

  const issue = getIssueById(id || '');

  if (!issue) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Issue Not Found</h1>
        <Button onClick={() => navigate('/explore')}>
          Back to Issues
        </Button>
      </div>
    );
  }

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
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleVote = () => {
    setIsVoted(!isVoted);
    toast({
      title: isVoted ? "Vote removed" : "Vote added",
      description: isVoted ? "Your support has been removed" : "Thank you for supporting this issue!",
    });
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: issue.title,
        text: issue.description,
        url: window.location.href,
      });
    } catch (err) {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Issue link has been copied to clipboard",
      });
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      toast({
        title: "Comment posted!",
        description: "Your comment has been added to the issue",
      });
      setNewComment('');
    }
  };

  const statusSteps = [
    { key: 'Reported', label: 'Reported', completed: true },
    { key: 'Under Review', label: 'Under Review', completed: issue.status !== 'Reported' },
    { key: 'In Progress', label: 'In Progress', completed: issue.status === 'In Progress' || issue.status === 'Resolved' },
    { key: 'Resolved', label: 'Resolved', completed: issue.status === 'Resolved' }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Issue Header */}
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Badge className={getSeverityColor(issue.severity)}>
                      {issue.severity}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(issue.status)}>
                      {issue.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{issue.title}</CardTitle>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant="outline" size="sm" onClick={handleVote}>
                    <Heart className={`h-4 w-4 mr-2 ${isVoted ? 'fill-current text-destructive' : ''}`} />
                    {issue.votes + (isVoted ? 1 : 0)}
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bell className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-6">
                {issue.description}
              </p>

              {/* Issue Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{issue.location.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>Reported by {issue.reportedBy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{formatDate(issue.reportedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Category:</span>
                  <span>{issue.category}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          {issue.images.length > 0 && (
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {issue.images.map((image, index) => (
                    <div key={index} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Comments Section */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Comments ({issue.comments.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add Comment */}
              <form onSubmit={handleCommentSubmit} className="space-y-3">
                <Textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button type="submit" disabled={!newComment.trim()}>
                  Post Comment
                </Button>
              </form>

              <Separator />

              {/* Comments List */}
              <div className="space-y-4">
                {issue.comments.map((comment) => (
                  <div key={comment.id} className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">{comment.author}</span>
                      <span className="text-muted-foreground">
                        {formatDate(comment.timestamp)}
                      </span>
                    </div>
                    <p className="text-foreground">{comment.content}</p>
                  </div>
                ))}
                
                {issue.comments.length === 0 && (
                  <p className="text-muted-foreground text-center py-4">
                    No comments yet. Be the first to comment!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Timeline */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Status Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {statusSteps.map((step, index) => (
                  <div key={step.key} className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full mt-1 ${
                      step.completed ? 'bg-primary' : 'bg-muted'
                    }`} />
                    <div className="space-y-1">
                      <p className={`text-sm font-medium ${
                        step.completed ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step.label}
                      </p>
                      {step.completed && index === 0 && (
                        <p className="text-xs text-muted-foreground">
                          {formatDate(issue.reportedAt)}
                        </p>
                      )}
                      {step.completed && step.key === issue.status && index > 0 && (
                        <p className="text-xs text-muted-foreground">
                          {formatDate(issue.updatedAt)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Location Map */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-3">
                <MapPin className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-foreground">{issue.location.address}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IssueDetail;