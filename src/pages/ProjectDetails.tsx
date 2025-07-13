import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, Database, BarChart3, Cloud, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import dataEngineeringCover from "@/assets/data-engineering-cover.jpg";
import aiAutomationCost from "@/assets/ai-automation-cost.jpg";
import dataGovernanceCover from "@/assets/data-governance-cover.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
const ProjectDetails = () => {
  const journeySteps = [{
    phase: "Ubuntu Server & Database Foundation",
    icon: <Database className="w-8 h-8" />,
    image: dataEngineeringCover,
    description: "Started with a blank slate, collaborating with Infrastructure team to provision and configure an on-premises Ubuntu Server. Set up core system configurations including network security, OS installation, and backup policy compliance using container-based architecture with Portainer.",
    technologies: ["Ubuntu Server", "MySQL", "Docker", "Portainer", "DBeaver"],
    challenges: "Setting up secure infrastructure from scratch with proper network and security configurations",
    solution: "Implemented container-based architecture for modular service management and established Raw/Staging Layer with MySQL"
  }, {
    phase: "Scalable ETL Pipeline with Windmill",
    icon: <Workflow className="w-8 h-8" />,
    image: aiAutomationCost,
    description: "Chose Windmill as orchestration tool for building ETL workflows, offering ideal balance between functionality and simplicity. Modularized pipeline into Extract, Transform, and Load stages with built-in integrations and error tracking.",
    technologies: ["Windmill", "Python", "RESTful APIs", "ETL"],
    challenges: "Managing data extraction from diverse sources and implementing complex transformation logic",
    solution: "Created modular ETL architecture with automated scheduling, error notifications, and secure credential management"
  }, {
    phase: "Data Mart for Analytics Consumption",
    icon: <Cloud className="w-8 h-8" />,
    image: dataGovernanceCover,
    description: "Created curated Data Marts as purpose-built datasets tailored to analytical needs of business units. Implemented data governance with PII segregation, anonymization, and compliance measures while ensuring analytics-ready outputs.",
    technologies: ["PostgreSQL", "Data Governance", "PII Protection", "Windmill"],
    challenges: "Balancing data accessibility with security and compliance requirements",
    solution: "Built secure, anonymized data marts with parallel processing and nested sub-flows for performance"
  }, {
    phase: "Visualization & Insight Delivery",
    icon: <BarChart3 className="w-8 h-8" />,
    image: projectDashboard,
    description: "Connected PostgreSQL Data Mart to Power BI, creating self-service dashboards for business units. Enabled departments to independently access and explore data while reducing dependency on Business Analytics team.",
    technologies: ["Power BI", "PostgreSQL", "DAX", "Self-Service BI"],
    challenges: "Making complex data accessible to non-technical stakeholders across departments",
    solution: "Designed user-friendly dashboards with role-based access control and comprehensive training for business users"
  }];
  return <div className="min-h-screen bg-background">
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
              <span className="gradient-text">End to End Data Engineering Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Upon joining this project, I encountered highly fragmented organizational data across multiple sources. Building end-to-end data infrastructure from scratch - transforming Excel-based analysis into automated, scalable data pipelines
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Python", "SQL", "ETL", "Orchestration", "Pipeline Optimization", "Data Storage Layer", "Data Modeling", "Infrastructure", "Bash Shell", "Docker", "Portainer", "Data Security", "Server Setup"].map(tech => <Badge key={tech} variant="secondary" className="skill-badge px-4 py-2">
                  {tech}
                </Badge>)}
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://github.com/Wipas1919/data-engineering-journey" target="_blank" rel="noopener noreferrer">
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
              Organizational data was highly fragmented across multiple sources with no centralized or automated data pipeline. 
              Most data remained siloed within disparate systems and was primarily analyzed through manually maintained Excel files, 
              leading to underutilization of valuable insights. With a lean data team of only two members, I was tasked with 
              designing and implementing core data infrastructure components from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Journey</h2>
            <p className="text-lg text-muted-foreground">
              Follow the complete data engineering process through four key phases
            </p>
          </div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => <Card key={index} className="project-card">
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
                            {step.technologies.map(tech => <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>)}
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
                      <img 
                        src={step.image} 
                        alt={`${step.phase} illustration`}
                        className="aspect-video w-full object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>)}
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
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Infrastructure Automation</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-accent/10 text-accent">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">95%</h3>
                <p className="text-muted-foreground">Manual Work Reduction</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-secondary/50">
                  <Workflow className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Self-Service</h3>
                <p className="text-muted-foreground">BI Dashboard Access</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          
          
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
    </div>;
};
export default ProjectDetails;