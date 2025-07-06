import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead developer for enterprise-level web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load times by 40% through performance optimization",
        "Led migration from monolith to microservices architecture",
        "Mentored 5 junior developers and established code review processes",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript"]
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "Remote",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Built the core platform from ground up for a fast-growing fintech startup. Responsible for both frontend and backend development.",
      achievements: [
        "Developed MVP that secured $2M Series A funding",
        "Built real-time trading dashboard with WebSocket integration",
        "Implemented secure payment processing with Stripe",
        "Scaled application to handle 10k+ concurrent users"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Stripe", "Docker"]
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "New York, NY",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Developed responsive websites and web applications for various clients across different industries.",
      achievements: [
        "Delivered 20+ client projects with 100% on-time completion",
        "Improved client website performance scores by average 35%",
        "Developed reusable component library used across all projects",
        "Collaborated with design team to implement pixel-perfect UIs"
      ],
      technologies: ["JavaScript", "HTML/CSS", "React", "Gatsby", "GraphQL", "Contentful"]
    },
    {
      id: 4,
      company: "Freelance",
      position: "Web Developer",
      location: "Remote",
      period: "2018 - 2019",
      type: "Contract",
      description: "Provided web development services to small and medium businesses, helping them establish their online presence.",
      achievements: [
        "Completed 15+ freelance projects across various industries",
        "Built e-commerce solutions generating $500k+ in client revenue",
        "Established long-term partnerships with 5 recurring clients",
        "Maintained 5-star rating across all freelance platforms"
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "WooCommerce"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            6+ years of experience building scalable applications and leading development teams
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="relative bg-card border border-border rounded-lg p-8 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 bottom-0 w-px h-12 bg-border transform translate-y-full" />
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <Badge variant="outline" className="ml-auto lg:ml-0">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-primary mb-3">{exp.position}</h4>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h5 className="font-semibold mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="skill-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center animate-fade-in-up">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;