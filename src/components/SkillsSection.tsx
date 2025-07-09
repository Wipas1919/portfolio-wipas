import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Cloud, Settings } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Data Engineering",
      icon: Database,
      skills: [
        { name: "Python", level: 95, experience: "4+ years" },
        { name: "SQL/PostgreSQL", level: 92, experience: "5+ years" },
        { name: "Apache Spark", level: 88, experience: "3+ years", type: "educational" },
        { name: "Apache Airflow", level: 85, experience: "2+ years", type: "educational" },
        { name: "ETL/ELT Pipelines", level: 90, experience: "3+ years" }
      ]
    },
    {
      category: "Data Analytics & BI",
      icon: BarChart3,
      skills: [
        { name: "Power BI", level: 93, experience: "4+ years" },
        { name: "Tableau", level: 88, experience: "3+ years" },
        { name: "Excel/Advanced Analytics", level: 95, experience: "6+ years" },
        { name: "Statistical Analysis", level: 85, experience: "3+ years" },
        { name: "Data Visualization", level: 90, experience: "4+ years" }
      ]
    },
    {
      category: "Cloud & Tools",
      icon: Cloud,
      skills: [
        { name: "AWS/Azure", level: 82, experience: "2+ years" },
        { name: "Apache Kafka", level: 80, experience: "2+ years" },
        { name: "Docker", level: 85, experience: "2+ years" },
        { name: "Git", level: 88, experience: "3+ years" },
        { name: "NoSQL (MongoDB)", level: 83, experience: "2+ years", type: "educational" }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: Settings,
      skills: [
        { name: "DevOps Pipeline", level: 78, experience: "2+ years" },
        { name: "CI/CD", level: 80, experience: "2+ years" },
        { name: "Backend Development", level: 75, experience: "2+ years" },
        { name: "Data Infrastructure", level: 85, experience: "3+ years" },
        { name: "Kubernetes", level: 70, experience: "1+ years" }
      ]
    }
  ];

  const technologies = [
    "Python", "SQL", "PostgreSQL", "Power BI", "Tableau", "Excel", 
    "Apache Spark", "Apache Airflow", "ETL/ELT", "AWS", "Azure", "Docker", 
    "Apache Kafka", "MongoDB", "Statistical Analysis", "Data Modeling", "Git", "Machine Learning",
    "DevOps", "CI/CD", "Backend Development", "Data Infrastructure", "Kubernetes"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning data engineering, analytics, and business intelligence with focus on creating data-driven solutions
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category} 
              className="bg-card border border-border rounded-lg p-8 animate-fade-in-up shadow-sm hover:shadow-md transition-shadow"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{skill.name}</span>
                      {skill.type === "educational" ? (
                        <Badge variant="outline" className="text-xs px-2 py-0.5 bg-blue-50/50 border-blue-200/50 text-blue-700">
                          Educational
                        </Badge>
                      ) : (
                        <Badge variant="default" className="text-xs px-2 py-0.5 bg-green-50/50 border-green-200/50 text-green-700">
                          Professional
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{skill.experience}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="skill-badge text-sm py-2 px-4 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>AWS Certified Solutions Architect</span>
                <Badge variant="outline">2024</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Google Cloud Professional Developer</span>
                <Badge variant="outline">2023</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>MongoDB Certified Developer</span>
                <Badge variant="outline">2023</Badge>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Machine Learning Specialization</span>
                <Badge>In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Kubernetes Administration</span>
                <Badge>In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>System Design Patterns</span>
                <Badge variant="outline">Completed</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;