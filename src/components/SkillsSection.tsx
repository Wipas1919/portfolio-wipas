import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Data Engineering",
      skills: [
        { name: "Python", experience: "4+ years", level: "intermediate" },
        { name: "SQL/PostgreSQL", experience: "5+ years" },
        { name: "Apache Spark", experience: "3+ years", type: "educational" },
        { name: "Apache Airflow", experience: "2+ years", type: "educational" },
        { name: "ETL/ELT Pipelines", experience: "3+ years", level: "intermediate" }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      skills: [
        { name: "DevOps Pipeline", experience: "2+ years" },
        { name: "CI/CD", experience: "2+ years" },
        { name: "Backend Development", experience: "2+ years" },
        { name: "Data Infrastructure", experience: "3+ years" },
        { name: "Kubernetes", experience: "1+ years", level: "basic" }
      ]
    },
    {
      category: "Cloud & Tools",
      skills: [
        { name: "AWS/Azure/GCP", experience: "2+ years" },
        { name: "Apache Kafka", experience: "2+ years" },
        { name: "Docker", experience: "2+ years", level: "intermediate" },
        { name: "Git", experience: "3+ years", level: "basic" },
        { name: "NoSQL (MongoDB)", experience: "2+ years", type: "educational" }
      ]
    },
    {
      category: "Data Analytics & BI",
      skills: [
        { name: "Power BI", experience: "4+ years", level: "advanced" },
        { name: "Tableau", experience: "3+ years" },
        { name: "Excel/Advanced Analytics", experience: "6+ years" },
        { name: "Statistical Analysis", experience: "3+ years", level: "intermediate" },
        { name: "Data Visualization", experience: "4+ years" }
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category} 
              className="bg-card border border-border rounded-lg p-6 animate-fade-in-up shadow-sm hover:shadow-md transition-shadow"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <h3 className="text-lg font-bold mb-4 text-center">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      {skill.type === "educational" && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5 bg-blue-50/50 border-blue-200/50 text-blue-700">
                          Educational
                        </Badge>
                      )}
                      {skill.level === "advanced" && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5 bg-green-50/50 border-green-200/50 text-green-700">
                          Advanced
                        </Badge>
                      )}
                      {skill.level === "intermediate" && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5 bg-yellow-50/50 border-yellow-200/50 text-yellow-700">
                          Intermediate
                        </Badge>
                      )}
                      {skill.level === "basic" && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5 bg-gray-50/50 border-gray-200/50 text-gray-700">
                          Basic
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{skill.experience}</span>
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