import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, Database, BarChart3, Cloud, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const journeySteps = [
    {
      phase: "Data Collection & Ingestion",
      icon: <Database className="w-8 h-8" />,
      description: "Built robust data pipelines to collect raw data from multiple sources including APIs, databases, and file systems.",
      technologies: ["Python", "SQL", "REST APIs"],
      challenges: "Handling different data formats and ensuring data quality",
      solution: "Implemented data validation schemas and error handling mechanisms"
    },
    {
      phase: "Data Processing & Transformation",
      icon: <Workflow className="w-8 h-8" />,
      description: "Designed and implemented ETL workflows to clean, transform, and prepare data for analysis.",
      technologies: ["Windmill", "Pandas", "SQL"],
      challenges: "Managing complex dependencies and scheduling workflows",
      solution: "Used Windmill for orchestration and monitoring"
    },
    {
      phase: "Data Storage & Architecture",
      icon: <Cloud className="w-8 h-8" />,
      description: "Architected scalable data warehouse solution with optimized storage and retrieval patterns.",
      technologies: ["PostgreSQL", "Docker", "Data Modeling"],
      challenges: "Designing efficient database schemas for analytics",
      solution: "Implemented star schema with proper indexing strategies"
    },
    {
      phase: "Analytics & Visualization",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Created comprehensive dashboards and reports to provide actionable insights from processed data.",
      technologies: ["Power BI", "Python", "Business Intelligence"],
      challenges: "Making complex data accessible to stakeholders",
      solution: "Built intuitive dashboards with drill-down capabilities"
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
              <span className="gradient-text">End to End Data Engineering Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From raw data chaos to actionable insights - a complete story of building modern data infrastructure from scratch
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Python", "Windmill", "PostgreSQL", "Docker", "Tableau"].map((tech) => (
                <Badge key={tech} variant="secondary" className="skill-badge px-4 py-2">
                  {tech}
                </Badge>
              ))}
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
              In today's data-driven world, organizations struggle with fragmented data sources, 
              inconsistent formats, and the inability to derive meaningful insights quickly. 
              This project tackles these challenges by building a comprehensive data engineering 
              solution from the ground up.
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
                            {step.phase} Diagram
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
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">90%</h3>
                <p className="text-muted-foreground">Faster Data Processing</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-accent/10 text-accent">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">99.9%</h3>
                <p className="text-muted-foreground">Data Quality Accuracy</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-secondary/50">
                  <Workflow className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-muted-foreground">Automated Monitoring</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Data Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can transform your data chaos into actionable insights
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

export default ProjectDetails;