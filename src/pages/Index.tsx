
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Linkedin, Brain, Code, Palette, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const projects = [
    {
      title: "Neural Network Optimizer",
      description: "AI-powered hyperparameter tuning system using genetic algorithms",
      tech: ["Python", "TensorFlow", "React"],
      emoji: "🧠",
      gradient: "from-vibrant-orange to-orange-600"
    },
    {
      title: "Smart Code Reviewer", 
      description: "Automated code analysis with AI-powered suggestions",
      tech: ["GPT-4", "TypeScript", "Node.js"],
      emoji: "🔍",
      gradient: "from-vibrant-orange to-red-600"
    },
    {
      title: "Mood-Based Music AI",
      description: "Emotion detection from text to curate perfect playlists",
      tech: ["Python", "NLP", "Spotify API"],
      emoji: "🎵",
      gradient: "from-vibrant-orange to-pink-600"
    }
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
              <Link to="/about" className="hover:text-vibrant-orange transition-colors">About</Link>
              <Link to="/projects" className="hover:text-vibrant-orange transition-colors">Projects</Link>
              <Link to="/contact" className="hover:text-vibrant-orange transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Picture */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/fda9e274-cd0c-4fad-99f2-9c910a4d09ff.png" 
                  alt="Akshat Singh Rawat" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-vibrant-orange shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-vibrant-orange/20 animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-6xl font-bold mb-6">
              <span className="text-vibrant-orange">AI Developer</span>
              <br />
              <span className="text-pure-white">Who Actually Ships</span>
            </h1>
            <p className="text-xl text-light-gray mb-8 leading-relaxed">
              I build AI systems that solve real problems, not just impressive demos. 
              Currently making machines smarter while keeping humans in control.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Link to="/projects">
                <Button size="lg" className="bg-vibrant-orange hover:bg-orange-600 text-pure-white px-8 py-3">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-light-gray text-light-gray hover:bg-light-gray hover:text-deep-charcoal px-8 py-3">
                  Let's Talk
                </Button>
              </Link>
            </div>

            {/* Tech Stack */}
            <div className="flex justify-center flex-wrap gap-4">
              {["Python", "TensorFlow", "React", "TypeScript", "Docker", "AWS"].map((tech) => (
                <Badge key={tech} variant="outline" className="border-vibrant-orange text-vibrant-orange bg-transparent px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-jet-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pure-white mb-4">
              Featured <span className="text-vibrant-orange">Projects</span>
            </h2>
            <p className="text-light-gray text-lg">
              AI solutions that actually work in production
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-deep-charcoal border-light-gray/20 hover:border-vibrant-orange/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="text-4xl mb-4">{project.emoji}</div>
                  <CardTitle className="text-pure-white group-hover:text-vibrant-orange transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-light-gray">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-light-gray/30 text-light-gray text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-pure-white mb-6">
              Ready to Build Something <span className="text-vibrant-orange">Amazing?</span>
            </h2>
            <p className="text-light-gray text-lg mb-8">
              Whether you need AI integration, full-stack development, or just want to discuss 
              the existential implications of artificial consciousness over coffee.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-vibrant-orange hover:bg-orange-600 text-pure-white px-8 py-3">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jet-black py-8 px-6 border-t border-light-gray/20">
        <div className="container mx-auto text-center">
          <p className="text-light-gray">
            © 2024 Akshat Singh Rawat. Built with React, fueled by curiosity and caffeine.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
