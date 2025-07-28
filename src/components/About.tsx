import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Expert in React, JavaScript, and modern UI frameworks"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development", 
      description: "Proficient in Node.js, Express, and RESTful API design"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Management",
      description: "Experience with MongoDB, MySQL, and database optimization"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Infrastructure",
      description: "AWS certified with experience in EC2, S3, Lambda, and more"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated full-stack developer with a passion for creating efficient, 
            scalable solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over the past 4 years, I've honed my skills in the MERN stack, building 
                everything from small business websites to large-scale enterprise applications. 
                My expertise extends to cloud technologies, particularly AWS, where I've 
                architected and deployed numerous production systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest industry trends and best practices. I'm passionate about 
                performance optimization, user experience, and building applications that scale.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium text-foreground">Experience Highlights</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  4+ years of professional development experience
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Multiple full-stack applications deployed to production
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  AWS cloud architecture and deployment expertise
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Agile development and team collaboration experience
                </li>
              </ul>
            </div>
          </div>

          {/* Skills highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;