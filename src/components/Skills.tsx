import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux"]
    },
    {
      category: "Backend", 
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices", "Authentication"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Database Design", "Query Optimization"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "EC2", "S3", "Lambda", "RDS", "CloudFormation", "Docker", "CI/CD"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Jest", "Linux", "Agile", "Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-tech-badge text-tech-badge-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional certifications/achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Certifications & Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">AWS</div>
                <div className="text-sm text-muted-foreground">Cloud Practitioner</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">MERN</div>
                <div className="text-sm text-muted-foreground">Stack Expert</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;