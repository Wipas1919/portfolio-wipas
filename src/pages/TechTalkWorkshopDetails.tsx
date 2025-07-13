import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, Users, Presentation, BarChart3, Target, Lightbulb, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import techTalkPhase1 from "@/assets/tech-talk-phase1.jpg";
import techTalkPhase2 from "@/assets/tech-talk-phase2.jpg";
import techTalkPhase3 from "@/assets/tech-talk-phase3.jpg";
import techTalkPhase4 from "@/assets/tech-talk-phase4.jpg";

const TechTalkWorkshopDetails = () => {
  const journeySteps = [
    {
      phase: "Technology Trends & AI Era Insights",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Served as co-speaker in internal training session focused on emerging technology trends and AI adaptation. Shared research and insights in digestible, engaging format to help employees understand technology integration in daily operations.",
      technologies: ["Public Speaking", "AI Research", "Technology Trends", "Interactive Demos"],
      challenges: "Making complex technology concepts accessible to employees across departments",
      solution: "Assisted in live demos to help colleagues visualize how emerging tools can be applied in real-world business scenarios",
      image: techTalkPhase1
    },
    {
      phase: "Power BI Training Design & Planning",
      icon: <Target className="w-8 h-8" />,
      description: "Designed training flow and materials for Power BI basic training series. Organized small groups (5-10 people per session) segmented by department for 2-3 hour hands-on workshops.",
      technologies: ["Training Design", "Power BI Desktop", "Curriculum Planning", "Department Segmentation"],
      challenges: "Supporting organization's shift toward self-service analytics for non-technical team members",
      solution: "Created modular training structure tailored to each department's specific context and needs",
      image: techTalkPhase2
    },
    {
      phase: "Hands-on Workshop Facilitation",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Led live demonstrations and step-by-step tutorials enabling participants to understand Power BI structure, navigate dashboards, perform basic data transformation using Power Query, and create simple visualizations.",
      technologies: ["Power BI Desktop", "Power Query", "Data Visualization", "Live Teaching"],
      challenges: "Ensuring participants could apply fundamental Power BI skills to their own team needs",
      solution: "Used sample datasets and interactive exercises with real-time troubleshooting for common beginner issues",
      image: techTalkPhase3
    },
    {
      phase: "Knowledge Transfer & Sustainable Adoption",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Provided follow-up support materials and established scalable training structure for future advanced stages. Helped teams gain confidence in exploring and interpreting data while reducing dependency on centralized reporting.",
      technologies: ["Support Materials", "Self-paced Learning", "Knowledge Base", "Continuous Support"],
      challenges: "Establishing sustainable adoption and reducing reliance on centralized data teams",
      solution: "Created comprehensive guides and follow-up resources for ongoing self-service analytics development",
      image: techTalkPhase4
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
              Co-speaker and workshop facilitator in internal training sessions focused on emerging technology trends and Power BI fundamentals to support the organization's shift toward self-service analytics
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Public Speaking", "Workshop Facilitation", "Employee Training", "Soft Skills Development", "Power BI", "Hands-on Learning"].map((tech) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Objectives</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              As part of knowledge-sharing initiative organized by HR and Business Analytics departments, I served as co-speaker 
              and workshop facilitator to help employees understand how technology is increasingly integrated into daily operations, 
              practically leverage these tools in the workplace, and empower non-technical team members with fundamental Power BI 
              skills for self-service analytics and data-driven decision-making.
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
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={step.image} 
                          alt={`${step.phase} - Phase ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
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