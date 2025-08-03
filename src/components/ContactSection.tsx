import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
const ContactSection = memo(() => {
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "Wipas.ananta@gmail.com",
    href: "mailto:Wipas.ananta@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "098-958-6430",
    href: "tel:0989586430"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Bangkok, Thailand",
    href: null
  }];
  const socialLinks = [{
    icon: Github,
    name: "GitHub",
    href: "https://github.com/Wipas1919",
    username: "@Wipas1919"
  }, {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wipas-ananta",
    username: "Wipas Anantamongkol"
  }];
  return <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Interested in connecting or collaborating? Feel free to reach out, explore my online work, or download my resume to learn more.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Card */}
          <div className="animate-fade-in-up">
            <div className="relative bg-gradient-to-br from-card via-card to-secondary/30 border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Get in Touch</h3>
                </div>
                <div className="space-y-5">
                  {contactInfo.map((info, index) => <div key={info.label} className="flex items-center gap-4 animate-fade-in-up" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{info.label}</div>
                        {info.href ? <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline decoration-primary/50">
                            {info.value}
                          </a> : <div className="text-muted-foreground">{info.value}</div>}
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="animate-fade-in-up" style={{
          animationDelay: '0.1s'
        }}>
            <div className="relative bg-gradient-to-br from-card via-card to-accent/20 border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 my-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Github className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Connect Online</h3>
                </div>
                <div className="space-y-4 my-0">
                  {socialLinks.map((social, index) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" style={{
                  animationDelay: `${index * 0.1 + 0.2}s`
                }} className="group/link flex items-center justify-between p-4 bg-gradient-to-r from-secondary/30 to-secondary/50 hover:from-secondary/50 hover:to-secondary/70 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fade-in-up py-[15px] my-[20px]">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover/link:bg-primary/20 transition-colors duration-300">
                          <social.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.username}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="group-hover/link:border-primary group-hover/link:bg-primary/10 transition-all duration-300">
                        Follow
                      </Badge>
                    </a>)}
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download Card */}
          <div className="animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative bg-gradient-to-br from-card via-card to-accent/20 border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 my-[2px] py-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Resume</h3>
                </div>
                <div className="space-y-5 my-0">
                  <div className="flex items-center gap-4 animate-fade-in-up">
                    
                    <div className="flex-1">
                      <div className="font-semibold text-foreground py-[6px]">Download my resume below</div>
                      
                    </div>
                  </div>
                  <div className="pt-4 my-[48px]">
                    <Button className="w-full glow-effect bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
                      <a href="https://drive.google.com/uc?export=download&id=1nr7vxlHPDc-FUteRdPjQ_GjWsWU4EdKu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        <span className="font-semibold">Download PDF</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
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
            {["Data Engineering Solutions", "Business Intelligence Dashboards", "Data Analytics Projects", "ETL/ELT Pipeline Development", "Statistical Analysis", "Data Visualization", "Business Analytics Consulting", "Data-driven Decision Making", "Data Science", "AI/ML Solutions"].map((type, index) => <Badge key={type} variant="secondary" className="skill-badge px-4 py-2 animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {type}
              </Badge>)}
          </div>
        </div>
      </div>
    </section>;
});
ContactSection.displayName = 'ContactSection';
export default ContactSection;