import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, Users, Presentation, BarChart3, Target, Lightbulb, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const TechTalkWorkshopDetails = () => {
  const journeySteps = [
    {
      phase: "Workshop Preparation & Planning",
      icon: <Target className="w-8 h-8" />,
      description: "Designed comprehensive curriculum focusing on emerging technology trends and Power BI fundamentals to address organizational needs.",
      technologies: ["Curriculum Design", "Training Materials", "Power BI", "Presentation Tools"],
      challenges: "Balancing technical depth with accessibility for diverse skill levels",
      solution: "Created modular content with progressive complexity and hands-on exercises"
    },
    {
      phase: "Technology Trends Presentation",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Delivered engaging presentations on emerging technologies and their business impact to enhance organizational tech literacy.",
      technologies: ["Public Speaking", "Tech Research", "Visual Aids", "Interactive Demos"],
      challenges: "Making complex technical concepts accessible to non-technical audience",
      solution: "Used real-world examples and interactive demonstrations"
    },
    {
      phase: "Power BI Training & Hands-on Workshop",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Conducted practical Power BI training sessions with real datasets to build self-service analytics capabilities.",
      technologies: ["Power BI Desktop", "Data Modeling", "DAX", "Visualization Best Practices"],
      challenges: "Ensuring participants could apply skills to their specific use cases",
      solution: "Provided practice datasets relevant to participants' departments"
    },
    {
      phase: "Knowledge Transfer & Follow-up",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Established ongoing support system and documentation to ensure sustainable adoption of new skills and technologies.",
      technologies: ["Documentation", "Best Practices", "Support Framework", "Knowledge Base"],
      challenges: "Maintaining momentum after initial training completion",
      solution: "Created comprehensive guides and established regular check-in sessions"
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
              <span className="gradient-text">Internal Tech Talk & Workshop</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Empowering teams with emerging technology knowledge and Power BI skills to drive data-driven decision making
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Power BI", "Data Analytics", "Training", "Workshop", "Self-Service Analytics"].map((tech) => (
                <Badge key={tech} variant="secondary" className="skill-badge px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://github.com/example/tech-talk-workshop" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Materials
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
              Organizations often struggle with keeping pace with rapidly evolving technology trends while building 
              internal capabilities for self-service analytics. This workshop addressed these challenges by providing 
              practical training and insights to empower teams with modern data skills and technology awareness.
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
              Follow the complete workshop delivery process through four key phases
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
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Team Members Trained</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-accent/10 text-accent">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">85%</h3>
                <p className="text-muted-foreground">Adoption Rate</p>
              </CardContent>
            </Card>
            
            <Card className="project-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-secondary/50">
                  <Presentation className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">8 Hours</h3>
                <p className="text-muted-foreground">Interactive Training</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Team's Data Skills?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can empower your organization with modern data analytics capabilities
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

export default TechTalkWorkshopDetails;