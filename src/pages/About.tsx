import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Users, Target, Heart, Mail, Phone, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
  };

  const steps = [
    {
      number: 1,
      title: "Report an Issue",
      description: "Use the report form to describe the problem, add photos, and pin the exact location.",
      icon: MapPin
    },
    {
      number: 2,
      title: "Community Review",
      description: "Other community members can view, vote on, and comment on your reported issue.",
      icon: Users
    },
    {
      number: 3,
      title: "City Response",
      description: "City officials review the issue and update its status as work progresses.",
      icon: Target
    },
    {
      number: 4,
      title: "Resolution",
      description: "Track progress until the issue is resolved and the community is updated.",
      icon: CheckCircle
    }
  ];

  const faqs = [
    {
      question: "How do I report an issue?",
      answer: "Click on 'Report an Issue' in the navigation menu, fill out the form with details about the problem, add photos if possible, and pin the location on the map. Submit the form and you'll receive a tracking number."
    },
    {
      question: "What types of issues can I report?",
      answer: "You can report various civic issues including road problems, broken streetlights, waste management issues, water leaks, public safety concerns, and problems in parks and recreational areas."
    },
    {
      question: "How long does it take for issues to be resolved?",
      answer: "Resolution times vary depending on the type and severity of the issue. Critical issues like water main breaks are typically addressed within 24 hours, while less urgent matters may take several days to weeks."
    },
    {
      question: "Can I track the progress of my reported issue?",
      answer: "Yes! Each issue has a unique tracking number. You can view its current status (Reported, Under Review, In Progress, or Resolved) and receive updates via email if you're subscribed to notifications."
    },
    {
      question: "Is my personal information kept private?",
      answer: "We take privacy seriously. Your contact information is only used for communication about your reports and is not shared publicly. Only your first name is displayed with reported issues."
    },
    {
      question: "Can I report issues anonymously?",
      answer: "While we encourage users to create accounts for better tracking and communication, you can report issues without providing personal details. However, this limits our ability to follow up with you directly."
    },
    {
      question: "What if my issue isn't getting attention?",
      answer: "If you feel your issue needs more attention, you can encourage community members to vote for it, which helps prioritize it. You can also contact us directly through the contact form below."
    },
    {
      question: "How can I help with issues in my community?",
      answer: "You can vote on issues you care about, provide additional information in comments, and share important issues with your neighbors. Community engagement helps prioritize problems that need attention."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero">
            <MapPin className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">About CityReport</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Empowering communities to build better cities through collaborative issue reporting and resolution
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              To create smarter, more responsive cities by connecting citizens with local government through technology and transparency.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Community First</h3>
            <p className="text-muted-foreground">
              Every voice matters. Our platform ensures that community needs are heard, prioritized, and addressed efficiently.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Better Together</h3>
            <p className="text-muted-foreground">
              By working together, we can identify problems faster, prioritize solutions better, and build stronger communities.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <Card className="shadow-card mb-12">
        <CardHeader>
          <CardTitle className="text-2xl text-center">How It Works</CardTitle>
          <p className="text-center text-muted-foreground">
            Follow these simple steps to report and track issues in your community
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center space-y-4">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-6 w-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="shadow-card mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          <p className="text-muted-foreground">
            Find answers to common questions about using CityReport
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <p className="text-muted-foreground">
              Have questions or need support? We're here to help!
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your question or issue in detail..." 
                  className="min-h-[120px]"
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Email Support</h4>
                  <p className="text-muted-foreground">support@cityreport.com</p>
                  <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone Support</h4>
                  <p className="text-muted-foreground">+1 (555) 123-CITY</p>
                  <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 5 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Emergency Issues</h4>
                  <p className="text-muted-foreground">For urgent public safety issues</p>
                  <p className="text-sm text-muted-foreground">Call 911 or your local emergency services</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;