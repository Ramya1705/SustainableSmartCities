import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, FileText, Search, Users, Shield, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-civic-engagement.jpg';

const Index = () => {
  const features = [
    {
      icon: FileText,
      title: "Easy Reporting",
      description: "Report issues with photos, location pins, and detailed descriptions in just a few clicks."
    },
    {
      icon: Search,
      title: "Track Progress",
      description: "Follow your reports from submission to resolution with real-time status updates."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Vote on issues that matter to you and engage with your neighbors to prioritize solutions."
    },
    {
      icon: Shield,
      title: "Direct to City",
      description: "Reports go directly to the appropriate city departments for faster response times."
    },
    {
      icon: TrendingUp,
      title: "Data Insights",
      description: "Help city officials make data-driven decisions with comprehensive issue analytics."
    },
    {
      icon: MapPin,
      title: "Location Based",
      description: "Interactive maps show issues in your area and help you stay informed about your community."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Make Your City Smarter.
              <br />
              <span className="text-white/90">Report Issues. Track Progress.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Join thousands of citizens working together to create better, more responsive communities through civic engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/report">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3">
                  Report an Issue
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                  Explore Issues
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How CityReport Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, effective platform that connects citizens with their local government
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 interactive-card">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">1,234</h3>
              <p className="text-muted-foreground">Issues Reported</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-secondary">892</h3>
              <p className="text-muted-foreground">Issues Resolved</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-accent">3,567</h3>
              <p className="text-muted-foreground">Active Citizens</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-success">15</h3>
              <p className="text-muted-foreground">City Departments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join your community in creating positive change. Every report makes your city better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/report">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Reporting
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6" />
                <span className="text-xl font-bold">CityReport</span>
              </div>
              <p className="text-primary-foreground/80">
                Empowering communities to build better cities together.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Platform</h4>
              <div className="space-y-2">
                <Link to="/report" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Report Issue
                </Link>
                <Link to="/explore" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Explore Issues
                </Link>
                <Link to="/my-reports" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  My Reports
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About & Help
                </Link>
                <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
                <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 CityReport. All rights reserved. Built with love for better communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
