import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import projectDashboard from "@/assets/project-dashboard.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, order management, and real-time inventory tracking.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/ecommerce",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "WebSocket-powered chat application with rooms, file sharing, and message encryption. Built with Socket.io and Redis for scalability.",
      technologies: ["React", "Socket.io", "Redis", "Express", "MongoDB"],
      demoUrl: "https://chat.example.com",
      githubUrl: "https://github.com/example/chat",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with drag-and-drop interface, team collaboration features, and detailed analytics.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
      demoUrl: "https://tasks.example.com",
      githubUrl: "https://github.com/example/taskmanager",
      imageUrl: projectDashboard,
      featured: false
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Machine learning powered content generation tool with custom training models and API integration.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      demoUrl: "https://ai.example.com",
      githubUrl: "https://github.com/example/ai-content",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="project-card animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-secondary/50">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="skill-badge">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">More Projects</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div key={project.id} className="project-card animate-fade-in-up" style={{animationDelay: `${(index + 2) * 0.2}s`}}>
              <h4 className="text-xl font-bold mb-3">{project.title}</h4>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="skill-badge text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
