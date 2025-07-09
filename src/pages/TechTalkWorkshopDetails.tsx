import { ArrowLeft, Github, ExternalLink, Users, Presentation, BarChart3, BookOpen, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import aiContentIllustration from "@/assets/ai-content-illustration.jpg";

const TechTalkWorkshopDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Internal Tech Talk & Workshop - And Power Bi Training
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                I had the great opportunity to serve as a co-speaker and workshop facilitator in an internal training session focused on emerging technology trends and Support the organization's shift toward self-service analytics and data-driven decision-making.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["Power BI", "Data Analytics", "Training", "Workshop", "Self-Service Analytics"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Workshop Materials
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/example/tech-talk-workshop" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code Repository
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={aiContentIllustration} 
                  alt="Tech Talk Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Overview */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation className="h-5 w-5" />
                Workshop Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Training Objectives</h4>
                <p className="text-muted-foreground">
                  Delivered comprehensive training on emerging technology trends and Power BI implementation 
                  to enable self-service analytics across the organization.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Target Audience</h4>
                <p className="text-muted-foreground">
                  Internal team members, data analysts, and business users seeking to enhance their 
                  data analytics capabilities and understand modern tech trends.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Workshop Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Power BI Training</h4>
                    <p className="text-sm text-muted-foreground">
                      Hands-on training on Power BI dashboard creation and data visualization
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Technology Trends</h4>
                    <p className="text-sm text-muted-foreground">
                      Explored emerging technologies and their impact on business operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Self-Service Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Empowering users to create their own reports and insights
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Interactive Workshop</h4>
                    <p className="text-sm text-muted-foreground">
                      Facilitated hands-on exercises and real-world case studies
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Training Impact & Outcomes</CardTitle>
            <CardDescription>
              Key achievements and learning outcomes from the workshop
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Workshop Delivery</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Co-facilitated interactive training sessions</li>
                  <li>• Delivered presentations on emerging tech trends</li>
                  <li>• Conducted hands-on Power BI exercises</li>
                  <li>• Provided real-world case study examples</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Learning Outcomes</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Enhanced data literacy across the organization</li>
                  <li>• Improved self-service analytics capabilities</li>
                  <li>• Increased adoption of data-driven decision making</li>
                  <li>• Better understanding of modern tech landscape</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Similar Training?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm passionate about sharing knowledge and empowering teams with data analytics skills. 
            Let's discuss how I can help your organization enhance its data capabilities.
          </p>
          <Button size="lg" asChild>
            <Link to="/#contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TechTalkWorkshopDetails;