import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import dataEngineeringIllustration from "@/assets/data-engineering-illustration.jpg";
import dataGovernanceIllustration from "@/assets/data-governance-illustration.jpg";
import taskManagementIllustration from "@/assets/task-management-illustration.jpg";
import aiContentIllustration from "@/assets/ai-content-illustration.jpg";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const ProjectsSection = () => {
  const [selectedLevel, setSelectedLevel] = useState<'entry' | 'middle' | 'high'>('entry');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const projects = [
    {
      id: 1,
      title: "End to End Data Engineering Journey (From scratch)",
      description: "Complete data engineering pipeline built from ground up. From raw data ingestion to advanced analytics dashboard, showcasing the entire data journey with modern tools and best practices.",
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "Tableau"],
      demoUrl: "/project/data-engineering-journey",
      githubUrl: "https://github.com/Wipas1919/data-engineering-journey",
      imageUrl: dataEngineeringIllustration,
      level: 'entry' as const
    },
    {
      id: 2,
      title: "Data Governance (From scratch)",
      description: "Complete data governance framework implementation using OpenMetadata. Establishing data ownership, quality standards, and governance policies with stakeholder collaboration workflows.",
      technologies: ["OpenMetadata", "Python", "Apache Kafka", "PostgreSQL", "React"],
      demoUrl: "/project/data-governance",
      githubUrl: "https://github.com/example/data-governance",
      imageUrl: dataGovernanceIllustration,
      level: 'entry' as const
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with drag-and-drop interface, team collaboration features, and detailed analytics.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
      demoUrl: "https://tasks.example.com",
      githubUrl: "https://github.com/example/taskmanager",
      imageUrl: taskManagementIllustration,
      level: 'entry' as const
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Machine learning powered content generation tool with custom training models and API integration.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      demoUrl: "https://ai.example.com",
      githubUrl: "https://github.com/example/ai-content",
      imageUrl: aiContentIllustration,
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
                  <div className="project-card animate-fade-in-up h-full" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-secondary/50">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
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
                            Demo
                          </a>
                        )}
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
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
};

export default ProjectsSection;