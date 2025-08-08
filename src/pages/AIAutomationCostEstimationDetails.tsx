import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Clock, Users, Bot, Calculator, TrendingUp, MessageSquare, Mail, Phone, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import taskManagementIllustration from "@/assets/task-management-illustration.jpg";

const AIAutomationCostEstimationDetails = () => {
  const navigate = useNavigate();

  const technologies = ["Dify AI", "Chat Interface", "Automation", "Cost Analysis", "Time Optimization"];
  const features = [
    {
      icon: MessageSquare,
      title: "Interactive Chat Interface",
      description: "Conversational AI interface for seamless user interaction and cost estimation queries"
    },
    {
      icon: Calculator,
      title: "Automated Cost Analysis",
      description: "Intelligent cost calculations based on automation parameters and business requirements"
    },
    {
      icon: Clock,
      title: "Time Optimization",
      description: "Precise time-spending analysis to identify automation opportunities and savings"
    },
    {
      icon: Users,
      title: "FTE Impact Assessment",
      description: "Quantifies potential savings, demonstrating approximately 1 FTE reduction per implementation"
    }
  ];

  const phases = [
    {
      phase: "Planning & Requirements",
      title: "Project Scope Definition",
      description: "Defined automation cost estimation requirements and identified key business processes suitable for automation analysis.",
      deliverables: ["Business requirements document", "Process analysis framework", "Cost estimation methodology"]
    },
    {
      phase: "AI Integration",
      title: "Dify AI Implementation",
      description: "Integrated Dify AI platform to create intelligent cost estimation capabilities with natural language processing for user queries.",
      deliverables: ["AI model configuration", "Chat interface development", "Cost calculation algorithms"]
    },
    {
      phase: "User Interface Development",
      title: "Interactive Chat System",
      description: "Developed intuitive chat interface allowing employees to interact with AI for cost estimation and automation recommendations.",
      deliverables: ["Chat UI components", "User experience design", "Interactive workflows"]
    },
    {
      phase: "Testing & Optimization",
      title: "Performance Validation",
      description: "Comprehensive testing of cost estimation accuracy and user experience optimization for maximum adoption.",
      deliverables: ["Testing reports", "Performance metrics", "User feedback integration"]
    }
  ];

  const results = [
    {
      metric: "Time Savings",
      value: "~1 FTE",
      description: "Equivalent full-time employee productivity gained through automation cost analysis"
    },
    {
      metric: "Cost Accuracy",
      value: "95%+",
      description: "Highly accurate cost estimations for automation projects"
    },
    {
      metric: "User Adoption",
      value: "High",
      description: "Intuitive chat interface drives employee engagement and usage"
    },
    {
      metric: "ROI Analysis",
      value: "Detailed",
      description: "Comprehensive return on investment calculations for automation initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:bg-secondary/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  AI - Automation <span className="gradient-text">Cost Estimation</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Automation cost sheet exhibition using Dify AI with interactive chat interface for best results. This project helps employees optimize time spending on tasks, saving approximately 1 FTE through intelligent automation cost analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="skill-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <a href="https://github.com/Wipas1919/costsheet-excel" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://drive.google.com/file/d/1MgJvytlhhhxGODvJ5zaZmFivprWW-ijs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-secondary/50">
                <img 
                  src={taskManagementIllustration} 
                  alt="AI Automation Cost Estimation Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Overview */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The <span className="gradient-text">Challenge</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organizations struggle to accurately estimate automation costs and identify optimal processes for automation, leading to inefficient resource allocation and missed optimization opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="project-card text-center">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Implementation <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to building an AI-powered automation cost estimation system
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="project-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {phase.phase}
                        </Badge>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">{phase.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Deliverables:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx}>{deliverable}</li>
                          ))}
                        </ul>
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
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results & <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in automation decision-making and cost optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="project-card text-center">
                <CardHeader>
                  <TrendingUp className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl font-bold gradient-text">{result.value}</CardTitle>
                  <p className="text-lg font-semibold">{result.metric}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{result.description}</p>
                </CardContent>
              </Card>
            ))}
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

export default AIAutomationCostEstimationDetails;