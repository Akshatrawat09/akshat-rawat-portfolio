
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Brain, Music, BookOpen, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { NavigationBar } from "@/components/NavigationBar";

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior AI Developer",
      company: "Current Role",
      description: "Building AI systems that occasionally work on the first try (miracle!)",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/30"
    },
    {
      year: "2023",
      title: "AI/ML Engineer",
      company: "Previous Company",
      description: "Taught machines to be smarter than their creators",
      color: "bg-green-500/10 text-green-400 border-green-500/30"
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Startup Life",
      description: "Wore every hat in the company, including the imaginary ones",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/30"
    }
  ];

  const interests = [
    { icon: Code, name: "Clean Code", description: "Obsessed with writing code that doesn't make future me cry", color: "bg-blue-500" },
    { icon: Coffee, name: "Coffee Brewing", description: "Because good code requires premium fuel", color: "bg-amber-600" },
    { icon: Brain, name: "AI Ethics", description: "Making sure robots stay friendly", color: "bg-green-500" },
    { icon: Music, name: "Music Production", description: "Creating beats that don't crash like my code", color: "bg-purple-500" },
    { icon: BookOpen, name: "Philosophy", description: "Contemplating if AI dreams of electric sheep", color: "bg-indigo-500" },
    { icon: Gamepad2, name: "Gaming", description: "Defeating bosses easier than debugging legacy code", color: "bg-red-500" }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "NLP", level: 88 },
    { name: "Computer Vision", level: 82 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <NavigationBar currentPage="about" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold text-white mb-6 text-shadow-glow hover-tilt animate-fade-in">
              About 
              <span className="block text-gray-400 hover-glow animate-float animate-delay-1">Me</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed hover-glow transition-all duration-500 animate-fade-in animate-delay-2">
              The unnecessarily detailed backstory of how I ended up convincing computers to think
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio */}
            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-gray-700/50 glass-morphism hover-lift transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-3">
                    <Brain className="w-6 h-6 text-blue-400" />
                    The Origin Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    Hi there! I'm Akshat Singh Rawat, an AI Developer who somehow convinced people I know what I'm doing. 
                    My journey into AI started when I realized that teaching machines to think was easier than understanding humans.
                  </p>
                  <p>
                    I specialize in building AI systems that actually solve real problems (revolutionary concept, I know). 
                    When I'm not training neural networks or debugging why my model thinks everything is a cat, 
                    you'll find me exploring the philosophical implications of artificial consciousness or perfecting my coffee brewing technique.
                  </p>
                  <p>
                    My approach to development is simple: write clean code, ship fast, and always assume the user will find 
                    the one edge case you didn't think of. I believe in the power of AI to augment human capabilities, 
                    not replace human judgment (yet).
                  </p>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="bg-gray-800/50 border-gray-700/50 glass-morphism hover-lift transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-3">
                    <Code className="w-6 h-6 text-green-400" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Professional Journey
              </h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <Card 
                    key={index} 
                    className="bg-gray-800/50 border-gray-700/50 glass-morphism hover-lift transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className={`${item.color} font-bold`}>
                          {item.year}
                        </Badge>
                        <div>
                          <CardTitle className="text-white">{item.title}</CardTitle>
                          <CardDescription className="text-gray-400">{item.company}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              When I'm Not Coding
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-800/50 border-gray-700/50 glass-morphism hover-lift transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 ${interest.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <interest.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg group-hover:text-gray-300 transition-colors">
                      {interest.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed">
                      {interest.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gray-800/50 rounded-2xl p-8 glass-morphism hover-lift transition-all duration-300 inline-block">
              <p className="text-gray-300 mb-6 text-lg">
                Want to work together on something awesome?
              </p>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg shadow-3d hover-lift hover-rotate-3d glass-morphism group"
                >
                  <span className="group-hover:animate-pulse">Let's Work Together</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-drift"></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
