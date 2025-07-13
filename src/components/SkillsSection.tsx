import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
const SkillsSection = () => {
  const skillCategories = [{
    category: "Data Engineering",
    skills: [{
      name: "Python",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "SQL/PostgreSQL",
      experience: "1+ year",
      level: "advanced"
    }, {
      name: "Apache Spark",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "Apache Airflow",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "ETL/ELT Pipelines",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "Data Modeling",
      experience: "1+ year",
      level: "intermediate"
    }]
  }, {
    category: "DevOps & Infrastructure",
    skills: [{
      name: "Docker",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "Kubernetes",
      experience: "1+ year",
      level: "basic"
    }, {
      name: "CI/CD Pipelines",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "Infrastructure as Code",
      experience: "1+ year"
    }, {
      name: "Git",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "Linux/Unix",
      experience: "1+ year"
    }]
  }, {
    category: "Data Analytics & BI",
    skills: [{
      name: "Power BI",
      experience: "1+ year",
      level: "advanced"
    }, {
      name: "Tableau",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "Advanced Excel",
      experience: "1+ year",
      level: "advanced"
    }, {
      name: "Statistical Analysis",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "Data Visualization",
      experience: "1+ year",
      level: "intermediate"
    }, {
      name: "Business Intelligence",
      experience: "1+ year"
    }]
  }];
  const technologies = ["Python", "SQL", "PostgreSQL", "Power BI", "Tableau", "Excel", "Apache Spark", "Apache Airflow", "ETL/ELT", "AWS", "Azure", "Docker", "Apache Kafka", "MongoDB", "Statistical Analysis", "Data Modeling", "Git", "Machine Learning", "DevOps", "CI/CD", "Backend Development", "Data Infrastructure", "Kubernetes"];
  return <section id="skills" className="py-20 px-6 bg-secondary/30">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => <div key={category.category} className="bg-card border border-border rounded-lg p-6 animate-fade-in-up shadow-sm hover:shadow-md transition-shadow" style={{
          animationDelay: `${categoryIndex * 0.2}s`
        }}>
              <h3 className="text-lg font-bold mb-4 text-center">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map(skill => <div key={skill.name} className="flex justify-between items-center">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      {(skill as any).type === "educational" && <Badge variant="outline" className="text-xs px-2 py-0.5 bg-muted/20 border-muted-foreground/30 text-muted-foreground">
                          Educational
                        </Badge>}
                      {skill.level === "advanced" && <Badge variant="outline" className="text-xs px-2 py-0.5 bg-primary text-primary-foreground border-primary">
                          Advanced
                        </Badge>}
                      {skill.level === "intermediate" && <Badge variant="outline" className="text-xs px-2 py-0.5 bg-primary text-primary-foreground border-primary">
                          Intermediate
                        </Badge>}
                      {skill.level === "basic" && <Badge variant="outline" className="text-xs px-2 py-0.5 bg-primary text-primary-foreground border-primary">
                          Basic
                        </Badge>}
                      <span className="text-xs text-muted-foreground">{skill.experience}</span>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>

        {/* Certifications & Learning */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">                                            Cloud Certifications </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Google Cloud Data Engineer Certificate</span>
                <Badge variant="outline">2024</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Aws Certified Data Engineer</span>
                <Badge variant="outline">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Azure Data Engineer Certification</span>
                <Badge variant="outline">In Progress</Badge>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">                                         Other Certifications </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Power Bi Certificate PL-300</span>
                <Badge>In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Databricks Data Engineer Associate Certification</span>
                <Badge>In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>-</span>
                <Badge variant="outline">Completed</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;