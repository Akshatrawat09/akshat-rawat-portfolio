
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
    <div className="min-h-screen bg-deep-charcoal text-pure-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-deep-charcoal/90 backdrop-blur-sm border-b border-light-gray/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-vibrant-orange">
              Akshat Singh Rawat
            </Link>
            <div className="flex gap-8">
              <Link to="/" className="hover:text-vibrant-orange transition-colors">Home</Link>
              <Link to="/about" className="text-vibrant-orange">About</Link>
              <Link to="/projects" className="hover:text-vibrant-orange transition-colors">Projects</Link>
              <Link to="/contact" className="hover:text-vibrant-orange transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-pure-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-light-gray leading-relaxed">
              The unnecessarily detailed backstory of how I ended up convincing computers to think
            </p>
          </div>

          {/* Bio */}
          <Card className="mb-16 bg-jet-black border-light-gray/20">
            <CardHeader>
              <CardTitle className="text-pure-white">The Origin Story</CardTitle>
            </CardHeader>
            <CardContent className="text-light-gray space-y-4">
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
            <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">
              Professional Journey
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <Card key={index} className="bg-jet-black border-light-gray/20">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-vibrant-orange/10 text-vibrant-orange border-vibrant-orange/30">
                        {item.year}
                      </Badge>
                      <div>
                        <CardTitle className="text-pure-white">{item.title}</CardTitle>
                        <CardDescription className="text-light-gray">{item.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-light-gray">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-pure-white mb-8 text-center">
              When I'm Not Coding
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <Card key={index} className="bg-jet-black border-light-gray/20 hover:border-vibrant-orange/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-vibrant-orange rounded-xl flex items-center justify-center mb-3">
                      <interest.icon className="w-6 h-6 text-pure-white" />
                    </div>
                    <CardTitle className="text-pure-white text-lg">{interest.name}</CardTitle>
                    <CardDescription className="text-light-gray text-sm">
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
              <Button size="lg" className="bg-vibrant-orange hover:bg-orange-600 text-pure-white px-8 py-3">
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
