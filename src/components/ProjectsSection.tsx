import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Lock } from "lucide-react";
import dataEngineeringFilter from "@/assets/data-engineering-filter.jpg";
import dataGovernanceTeam from "@/assets/data-governance-team.jpg";
import taskManagementIllustration from "@/assets/task-management-illustration.jpg";
import aiContentIllustration from "@/assets/ai-content-illustration.jpg";
import aiAutomationCost from "@/assets/ai-automation-cost.jpg";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const ProjectsSection = memo(() => {
  const [selectedLevel, setSelectedLevel] = useState<'entry' | 'middle' | 'high'>('entry');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const projects = [
    {
      id: 1,
      title: "End to End Data Engineering Journey (From scratch)",
      description: "Complete data engineering pipeline implementation from scratch featuring data ingestion, ETL/ELT processing, data warehousing with dimensional modeling, real-time stream processing, and interactive BI dashboards. Demonstrates modern data architecture patterns and best practices.",
      technologies: ["Apache Airflow", "dbt", "Snowflake", "Kafka", "Docker", "Python", "SQL", "Tableau"],
      demoUrl: "/project/data-engineering-journey",
      githubUrl: "https://github.com/Wipas1919/data-engineering-journey",
      imageUrl: dataEngineeringFilter,
      level: 'entry' as const
    },
    {
      id: 2,
      title: "Data Governance (From scratch)",
      description: "Comprehensive data governance framework built with OpenMetadata platform. Implements data cataloging, lineage tracking, data quality rules, metadata management, and stakeholder collaboration workflows for automated governance processes.",
      technologies: ["OpenMetadata", "Data Cataloging", "Apache Atlas", "Great Expectations", "Data Quality", "Policy Management"],
      demoUrl: "/project/data-governance",
      githubUrl: "https://github.com/Wipas1919/data-governance-framework",
      imageUrl: dataGovernanceTeam,
      level: 'entry' as const
    },
    {
      id: 3,
      title: "Smart Footfall Dashboard",
      description: "Real-time visitor analytics platform for multi-day events featuring IoT sensor data ingestion, stream processing with Apache Kafka, crowd density analysis, and heat mapping visualization. Provides actionable insights for event management optimization.",
      technologies: ["Apache Kafka", "InfluxDB", "Grafana", "Python", "IoT Sensors", "Time Series Analysis", "Machine Learning"],
      demoUrl: "/project/smart-footfall-dashboard",
      githubUrl: "https://github.com/Wipas1919/smart-footfall-analytics",
      imageUrl: taskManagementIllustration,
      level: 'entry' as const
    },
    {
      id: 4,
      title: "Internal Tech Talk & Workshop - And Power BI Training",
      description: "Comprehensive internal training program featuring emerging technology trends presentation, hands-on Power BI workshop curriculum, self-service analytics enablement, and data literacy training modules for organizational transformation.",
      technologies: ["Power BI", "Training Design", "Data Literacy", "Workshop Facilitation", "Change Management", "Technical Presentation"],
      demoUrl: "/project/tech-talk-workshop",
      githubUrl: "https://github.com/Wipas1919/powerbi-training-materials",
      imageUrl: aiContentIllustration,
      level: 'entry' as const
    },
    {
      id: 5,
      title: "AI - Automation Cost Estimation",
      description: "AI-powered cost sheet automation system with streamlined workflow featuring file upload processing, LLM data extraction, knowledge retrieval integration, automated price filling, and Excel file generation for efficient cost estimation.",
      technologies: ["AI Integration", "Process Optimization", "Cost-Benefit Analysis", "Productivity Enhancement", "ROI Calculation"],
      demoUrl: "/project/ai-automation-cost-estimation",
      githubUrl: "https://github.com/Wipas1919/costsheet-excel",
      imageUrl: aiAutomationCost,
      level: 'entry' as const
    }
  ];

  const filteredProjects = projects.filter(project => project.level === selectedLevel);

  const levels = [
    { key: 'entry' as const, label: 'Entry Level' },
    { key: 'middle' as const, label: 'Middle Level' },
    { key: 'high' as const, label: 'High Level' }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    setCount(filteredProjects.length);
    setCurrent(0);
  }, [filteredProjects.length]);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing technical expertise and creative problem-solving
          </p>
        </div>

        {/* Level Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {levels.map((level) => (
            <Button
              key={level.key}
              variant={selectedLevel === level.key ? "default" : "outline"}
              onClick={() => setSelectedLevel(level.key)}
              className="px-6 py-2"
            >
              {level.label}
            </Button>
          ))}
        </div>

        {/* Projects Carousel */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-8">
            <Carousel 
              setApi={setApi}
              className="w-full max-w-6xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
              {filteredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="project-card animate-fade-in-up h-full flex flex-col" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-secondary/50 relative">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="skill-badge text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button size="sm" asChild className="flex-1">
                        {project.demoUrl.startsWith('/') ? (
                          <a href={project.demoUrl}>
                            <ExternalLink className="w-3 h-3 mr-1" />
                            More
                          </a>
                        ) : (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            More
                          </a>
                        )}
                      </Button>
                      {!["Data Governance (From scratch)", "Smart Footfall Dashboard", "Internal Tech Talk & Workshop - And Power Bi Training"].includes(project.title) && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            
            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects available for {levels.find(l => l.key === selectedLevel)?.label}
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Check back later for new projects!
            </p>
          </div>
        )}
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;