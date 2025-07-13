import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
const ExperienceSection = () => {
  const experiences = [{
    id: 1,
    company: "N.C.C Management and Development (QSNCC)",
    position: "Business Analytics Officer",
    location: "Bangkok, Thailand",
    period: "2025 - Present",
    type: "Full-time",
    description: "Leading business analytics initiatives to drive data-driven decision making across the organization. Developing comprehensive analytics solutions and business intelligence frameworks.",
    achievements: ["Currently developing advanced analytics frameworks for business optimization", "Implementing data-driven strategies for organizational growth", "Building comprehensive business intelligence dashboards", "Leading cross-functional analytics projects"],
    technologies: ["Power BI", "Python", "SQL", "Excel", "Statistical Analysis", "Business Intelligence"]
  }, {
    id: 2,
    company: "stiid co. ltd",
    position: "Project Coordinator - Design Solutions",
    location: "Bangkok, Thailand",
    period: "2022 - 2024",
    type: "Full-time",
    description: "Coordinated design solution projects, managing data analysis requirements and ensuring project delivery aligned with business objectives.",
    achievements: ["Successfully coordinated multiple design solution projects", "Implemented data analysis processes for project optimization", "Collaborated with cross-functional teams to deliver solutions", "Managed project timelines and stakeholder communications"],
    technologies: ["Project Management", "Data Analysis", "Excel", "Business Analysis", "Stakeholder Management"]
  }, {
    id: 3,
    company: "King Mongkut University of Technology North Bangkok",
    position: "Business Administration Student",
    location: "Bangkok, Thailand",
    period: "2018 - 2022",
    type: "Education",
    description: "Graduated in Business Administration with focus on data analysis, business intelligence, and analytical thinking. Built strong foundation in business processes and data-driven decision making.",
    achievements: ["Successfully completed Business Administration degree", "Developed strong analytical and critical thinking skills", "Gained comprehensive understanding of business processes", "Built foundation in data analysis and business intelligence"],
    technologies: ["Business Analysis", "Data Analysis", "Excel", "Statistical Methods", "Research Methods"]
  }];
  return <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience in analytics, data solutions, and business intelligence with strong educational foundation
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => <div key={exp.id} className="relative bg-card border border-border rounded-lg p-8 animate-fade-in-up" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Timeline connector */}
              {index < experiences.length - 1 && <div className="absolute left-8 bottom-0 w-px h-12 bg-border transform translate-y-full" />}
              
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
                  {exp.achievements.map((achievement, achIndex) => <li key={achIndex} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>)}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => <Badge key={tech} variant="secondary" className="skill-badge">
                      {tech}
                    </Badge>)}
                </div>
              </div>
            </div>)}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center animate-fade-in-up">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">1+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Analytics Projects</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">7+</div>
            <div className="text-muted-foreground">Data Tools Mastered</div>
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;