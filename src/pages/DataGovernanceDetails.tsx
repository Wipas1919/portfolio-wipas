import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, Shield, Users, Database, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const DataGovernanceDetails = () => {
  const journeySteps = [
    {
      phase: "Governance Framework Design",
      icon: <Shield className="w-8 h-8" />,
      description: "Established comprehensive data governance framework with clear policies, roles, and responsibilities for data stewardship across the organization.",
      technologies: ["OpenMetadata", "Data Governance Framework", "Policy Design"],
      challenges: "Defining clear governance policies without hindering business agility",
      solution: "Created flexible governance framework with automated policy enforcement"
    },
    {
      phase: "Metadata Management & Discovery",
      icon: <Database className="w-8 h-8" />,
      description: "Implemented OpenMetadata platform for centralized metadata management, data lineage tracking, and automated data discovery across all systems.",
      technologies: ["OpenMetadata", "Data Lineage", "Elasticsearch"],
      challenges: "Integrating diverse data sources with consistent metadata standards",
      solution: "Built automated metadata ingestion pipelines with standardized schemas"
    },
    {
      phase: "Stakeholder Collaboration Platform",
      icon: <Users className="w-8 h-8" />,
      description: "Developed collaborative workflows enabling data owners, stewards, and consumers to work together effectively on data governance initiatives.",
      technologies: ["React", "Workflow Engine", "Role-Based Access"],
      challenges: "Facilitating communication between technical and business stakeholders",
      solution: "Created intuitive interfaces with automated workflow notifications"
    },
    {
      phase: "Quality Monitoring & Compliance",
      icon: <Settings className="w-8 h-8" />,
      description: "Established automated data quality monitoring, compliance reporting, and governance metrics to ensure ongoing data reliability and regulatory adherence.",
      technologies: ["Apache Kafka", "Data Quality Rules", "Compliance Dashboard"],
      challenges: "Maintaining data quality standards across distributed systems",
      solution: "Implemented real-time quality monitoring with automated alerts"
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
              Building comprehensive data governance framework with OpenMetadata - enabling stakeholder collaboration and ensuring data quality across the enterprise
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["OpenMetadata", "Python", "Apache Kafka", "PostgreSQL", "React"].map((tech) => (
                <Badge key={tech} variant="secondary" className="skill-badge px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://github.com/example/data-governance" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Source Code
                </a>
              </Button>
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
              Organizations struggle with data chaos - unclear ownership, inconsistent quality, 
              and lack of collaboration between data stakeholders. This project establishes 
              a comprehensive governance framework using OpenMetadata to create transparency, 
              accountability, and collaboration in data management.
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
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-background/50">
                            {step.icon}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {step.phase} Overview
                          </p>
                        </div>
                      </div>
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

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement Data Governance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can establish robust data governance in your organization
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

export default DataGovernanceDetails;