import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Github, Users, TrendingUp, Activity, MapPin, Expand } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import aiContentIllustration from "@/assets/ai-content-illustration.jpg";
import taskManagementIllustration from "@/assets/task-management-illustration.jpg";
import dataEngineeringFilter from "@/assets/data-engineering-filter.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";

const SmartFootfallDetails = () => {
  const journeySteps = [
    {
      phase: "Data Accessibility Enhancement",
      icon: <Activity className="w-8 h-8" />,
      image: "/lovable-uploads/e4d116c0-901e-45fc-adee-4e2f0267786c.png",
      description: "Enhanced data accessibility for operations and decision-making by integrating data from IoT sensors and intelligent monitoring systems. Combined external data sources including environmental and scheduling data.",
      technologies: ["IoT Sensors", "Data Integration", "Real-time Systems"],
      challenges: "Consolidating data from multiple sources with varying refresh rates",
      solution: "Enabled automated data refresh at defined intervals with unified data pipeline"
    },
    {
      phase: "Real-time Event Monitoring",
      icon: <TrendingUp className="w-8 h-8" />,
      image: "/lovable-uploads/4d1d0362-7845-4d5d-9d70-593c26f0e6fa.png",
      description: "Provided near-real-time event monitoring to key stakeholders with visualized visitor trends over time and traffic flow analysis across key entry points.",
      technologies: ["Real-time Analytics", "Dashboard Systems", "Monitoring Tools"],
      challenges: "Maintaining system responsiveness while delivering timely insights",
      solution: "Implemented optimized data processing for near-real-time updates"
    },
    {
      phase: "Performance Analytics & Comparison",
      icon: <MapPin className="w-8 h-8" />,
      image: "/lovable-uploads/654c3dad-1697-4004-bb4b-370c3d7a272f.png",
      description: "Monitored real-time occupancy and usage patterns while comparing performance metrics with historical events. Analyzed demographic insights from integrated data sources.",
      technologies: ["Historical Analysis", "Performance Metrics", "Demographic Analytics"],
      challenges: "Creating meaningful comparisons across different event types and timeframes",
      solution: "Developed normalized benchmarking system for historical comparison"
    },
    {
      phase: "Operational Efficiency Optimization",
      icon: <Users className="w-8 h-8" />,
      image: "/lovable-uploads/4085a502-3f47-4271-b235-a72f9e7ca472.png",
      description: "Improved operational efficiency across visitor management, parking, and staffing through comprehensive dashboard insights and performance benchmarking against previous events.",
      technologies: ["Operations Analytics", "Resource Planning", "Efficiency Metrics"],
      challenges: "Designing visual narratives to support both real-time operations and strategic reviews",
      solution: "Created dual-purpose dashboard supporting both operational and strategic decision-making"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Smart Footfall Dashboard for Event Insight & Optimization</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Development of a real-time footfall dashboard tailored for a large-scale exhibition venue. Providing comprehensive view of visitor traffic during multi-day international trade events using data from various integrated sources.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Segmentation", "Customer Behavior", "Analytics"].map((tech) => (
                <Badge key={tech} variant="secondary" className="skill-badge px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Objectives</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              This project showcased the development of a real-time footfall dashboard tailored for a large-scale exhibition venue. 
              The objectives were to enhance data accessibility for operations and decision-making, provide near-real-time event monitoring 
              to key stakeholders, compare performance metrics with historical events, and improve operational efficiency across visitor 
              management, parking, and staffing.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Analytics Journey</h2>
            <p className="text-lg text-muted-foreground">
              Four key phases to deliver real-time footfall intelligence
            </p>
          </div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <Card key={index} className="project-card">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground font-medium">
                            Phase {index + 1}
                          </span>
                          <h3 className="text-2xl font-bold">{step.phase}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-destructive">Challenge:</h4>
                          <p className="text-sm text-muted-foreground">{step.challenges}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-accent">Solution:</h4>
                          <p className="text-sm text-muted-foreground">{step.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`order-${index % 2 === 0 ? '2' : '1'}`}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative group cursor-pointer">
                            <img 
                              src={step.image} 
                              alt={`${step.phase} illustration`}
                              className="aspect-video w-full object-cover rounded-lg shadow-lg group-hover:opacity-90 transition-opacity"
                            />
                            <div className="absolute top-3 right-3 bg-black/60 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Expand className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full">
                          <img 
                            src={step.image} 
                            alt={`${step.phase} illustration`}
                            className="w-full h-auto rounded-lg"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Results & Impact</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-primary/10 text-primary">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">&lt;2s</h3>
                <p className="text-muted-foreground">Real-time Data Processing</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-accent/10 text-accent">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50K+</h3>
                <p className="text-muted-foreground">Visitors Tracked Simultaneously</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-secondary/50">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">95%</h3>
                <p className="text-muted-foreground">Accuracy in Crowd Prediction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Event Analytics?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can implement smart footfall analytics for your venues
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/#contact">
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">
                View More Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartFootfallDetails;