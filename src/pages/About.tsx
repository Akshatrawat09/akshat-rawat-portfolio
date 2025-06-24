
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Brain, Music, BookOpen, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior AI Developer",
      company: "Current Role",
      description: "Building AI systems that occasionally work on the first try (miracle!)"
    },
    {
      year: "2023",
      title: "AI/ML Engineer",
      company: "Previous Company",
      description: "Taught machines to be smarter than their creators"
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Startup Life",
      description: "Wore every hat in the company, including the imaginary ones"
    }
  ];

  const interests = [
    { icon: Code, name: "Clean Code", description: "Obsessed with writing code that doesn't make future me cry" },
    { icon: Coffee, name: "Coffee Brewing", description: "Because good code requires premium fuel" },
    { icon: Brain, name: "AI Ethics", description: "Making sure robots stay friendly" },
    { icon: Music, name: "Music Production", description: "Creating beats that don't crash like my code" },
    { icon: BookOpen, name: "Philosophy", description: "Contemplating if AI dreams of electric sheep" },
    { icon: Gamepad2, name: "Gaming", description: "Defeating bosses easier than debugging legacy code" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              The unnecessarily detailed backstory of how I ended up convincing computers to think
            </p>
          </div>

          {/* Bio */}
          <Card className="mb-16 bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">The Origin Story</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300 space-y-4">
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

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Professional Journey
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <Card key={index} className="bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                        {item.year}
                      </Badge>
                      <div>
                        <CardTitle className="text-slate-900 dark:text-white">{item.title}</CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400">{item.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              When I'm Not Coding
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <Card key={index} className="bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-3">
                      <interest.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-slate-900 dark:text-white text-lg">{interest.name}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 text-sm">
                      {interest.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Let's Work Together
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
