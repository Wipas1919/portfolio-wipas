import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Github, Shield, Users, Database, Settings, Expand, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import dataGovernanceCover from "@/assets/data-governance-cover.jpg";
import dataGovernanceTeam from "@/assets/data-governance-team.jpg";
import dataGovernanceIllustration from "@/assets/data-governance-illustration.jpg";
import taskManagementIllustration from "@/assets/task-management-illustration.jpg";

const DataGovernanceDetails = () => {
  const journeySteps = [
    {
      phase: "Data Governance Mindset & Model Selection",
      icon: <Shield className="w-8 h-8" />,
      image: "/lovable-uploads/b7f27b21-d89e-4c3d-8801-cad7ec810126.png",
      description: "At the early stage of building a data platform within the MICE business context, we explored three organizational data models and chose a Hybrid approach that combines central governance standards with decentralized execution at the business unit level.",
      technologies: ["Data Governance Framework", "Organizational Design", "Policy Planning"],
      challenges: "Balancing security, flexibility, and business alignment in governance structure",
      solution: "Implemented Hybrid model combining strengths of centralized governance with decentralized execution"
    },
    {
      phase: "Cultural Transformation & Mindset Shift",
      icon: <Users className="w-8 h-8" />,
      image: "/lovable-uploads/9ee4efde-867a-4a9d-9ac3-678662d070eb.png",
      description: "Implementing hybrid data governance required a cultural shift where IT moves from support function to strategic partner, data literacy becomes organization-wide, and business units own their data while being supported by tech governance.",
      technologies: ["Change Management", "Training Programs", "Cultural Framework"],
      challenges: "Changing organizational mindset from traditional IT support to strategic partnership",
      solution: "Developed comprehensive training and cultural transformation programs"
    },
    {
      phase: "OpenMetadata Implementation",
      icon: <Database className="w-8 h-8" />,
      image: "/lovable-uploads/8a59d69c-a3a9-4c05-8957-d3f5205ba09f.png",
      description: "To operationalize our hybrid governance strategy, we adopted OpenMetadata as the core tool for managing metadata, ownership, lineage, and policy enforcement with full data mapping capabilities.",
      technologies: ["OpenMetadata", "Data Lineage", "Metadata Management"],
      challenges: "Implementing comprehensive metadata management across diverse systems",
      solution: "Built automated metadata ingestion with full lineage mapping and governance controls"
    },
    {
      phase: "Governance Operationalization",
      icon: <Settings className="w-8 h-8" />,
      image: "/lovable-uploads/52ada544-5080-4ed8-bffe-7106ef448114.png",
      description: "Established operational governance processes with clear ownership models, policy enforcement mechanisms, and compliance monitoring to ensure sustainable data governance practices.",
      technologies: ["Policy Enforcement", "Compliance Monitoring", "Governance Metrics"],
      challenges: "Making governance policies actionable and measurable in day-to-day operations",
      solution: "Created automated governance workflows with real-time monitoring and compliance reporting"
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
              <span className="gradient-text">Data Governance (From scratch)</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Data Governance Mindset & Structural Evolution - Building sustainable and scalable Data Governance model that balances security, flexibility, and business alignment in the MICE business context
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Data Governance", "Metadata Management", "System Architecture Planning", "Policy & Compliance"].map((tech) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              At the early stage of building a data platform within the MICE business context, the foundational 
              challenge centered around designing a sustainable and scalable Data Governance model that balanced 
              security, flexibility, and business alignment. We explored three organizational data models: 
              Decentralized, Centralized, and Hybrid - ultimately choosing the Hybrid approach.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Governance Journey</h2>
            <p className="text-lg text-muted-foreground">
              Four key phases to establish enterprise-wide data governance
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
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">95%</h3>
                <p className="text-muted-foreground">Data Quality Improvement</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-accent/10 text-accent">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">80%</h3>
                <p className="text-muted-foreground">Faster Stakeholder Collaboration</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-secondary/50">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Metadata Coverage</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 bg-gradient-to-br from-primary/10 to-accent/10 py-[48px]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-left">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">Wipas.ananta@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">098-958-6430</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-left">
                <Github className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-muted-foreground">@Wipas1919</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Linkedin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-muted-foreground">Wipas Anantamongkol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataGovernanceDetails;