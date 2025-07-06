import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95, experience: "5+ years" },
        { name: "TypeScript", level: 90, experience: "4+ years" },
        { name: "Vue.js", level: 85, experience: "3+ years" },
        { name: "Tailwind CSS", level: 92, experience: "3+ years" },
        { name: "HTML/CSS", level: 98, experience: "7+ years" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 93, experience: "5+ years" },
        { name: "Python", level: 88, experience: "4+ years" },
        { name: "Express.js", level: 90, experience: "4+ years" },
        { name: "PostgreSQL", level: 85, experience: "4+ years" },
        { name: "MongoDB", level: 82, experience: "3+ years" }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 88, experience: "3+ years" },
        { name: "AWS", level: 85, experience: "3+ years" },
        { name: "Git", level: 95, experience: "6+ years" },
        { name: "CI/CD", level: 80, experience: "2+ years" },
        { name: "Linux", level: 87, experience: "4+ years" }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "GraphQL", 
    "REST APIs", "Tailwind CSS", "Socket.io", "Redis", "Express.js"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning modern web development, cloud architecture, and emerging technologies
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category} 
              className="bg-card border border-border rounded-lg p-6 animate-fade-in-up"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.experience}</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
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