import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const ContactSection = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Wipas.ananta@gmail.com",
      href: "mailto:Wipas.ananta@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "098-958-6430",
      href: "tel:0989586430"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangkok, Thailand",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Wipas1919",
      username: "@Wipas1919"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/wipas-ananta",
      username: "Wipas Anantamongkol"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your data into insights? Let's discuss your analytics needs or explore potential collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info & Social */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Contact Information */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Connect Online</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <social.icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="group-hover:border-primary transition-colors">
                      Follow
                    </Badge>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Resume</h3>
              <p className="text-muted-foreground mb-6">
                Download my resume for a detailed overview of my experience and qualifications.
              </p>
              <Button className="w-full glow-effect" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
            <span className="font-medium">Currently available for new projects</span>
          </div>
        </div>

        {/* Project Types */}
        <div className="mt-12 text-center animate-fade-in-up">
          <h4 className="text-xl font-semibold mb-6">I'm interested in:</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Engineering Solutions",
              "Business Intelligence Dashboards",
              "Data Analytics Projects",
              "ETL/ELT Pipeline Development",
              "Statistical Analysis",
              "Data Visualization",
              "Business Analytics Consulting",
              "Data-driven Decision Making"
            ].map((type, index) => (
              <Badge 
                key={type} 
                variant="secondary" 
                className="skill-badge px-4 py-2 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;