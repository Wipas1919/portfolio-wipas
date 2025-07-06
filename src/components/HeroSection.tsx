import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 hero-section" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Alex Thompson</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Full Stack Developer & Technical Architect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Specialized in React, Node.js, and scalable cloud architecture.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
          <Button size="lg" className="glow-effect px-8 py-4 text-lg font-semibold">
            <ExternalLink className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in-up">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors glow-effect"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors glow-effect"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:alex@example.com"
            className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors glow-effect"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}} />
    </section>
  );
};

export default HeroSection;