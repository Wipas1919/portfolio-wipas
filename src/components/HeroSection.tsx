import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBackground} alt="Developer workspace" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 hero-section" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">PORTFOLIO</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/90 mb-8 font-medium">
            Analytics & Data Careers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            My name is Wipas Anantamongkol (Frong), a passionate person about data, insights, and creating meaningful solutions. 
            Specialized in Data Engineering, Data Analytics, and Business Intelligence.
          </p>
        </div>
        
        
        
        <div className="flex justify-center gap-6 animate-fade-in-up">
          <a href="https://github.com/Wipas1919" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors glow-effect">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/wipas-ananta" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors glow-effect">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:Wipas.ananta@gmail.com" className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors glow-effect">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-8 animate-fade-in-up">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      
      
      
    </section>;
};
export default HeroSection;