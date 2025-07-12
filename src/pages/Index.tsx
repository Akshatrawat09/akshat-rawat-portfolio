
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Linkedin, ArrowRight, Code, Brain, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const projects = [
    {
      title: "AI Chatbot for Customer Service",
      description: "Intelligent conversational AI that handles customer inquiries with 95% accuracy using advanced NLP techniques.",
      tech: ["Python", "NLP", "TensorFlow", "Flask"],
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: "Stock Price Prediction System", 
      description: "ML model predicting stock movements using historical data and market sentiment analysis with LSTM networks.",
      tech: ["Python", "LSTM", "Pandas", "Scikit-learn"],
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Fake News Detection",
      description: "NLP system that identifies and classifies fake news articles using BERT transformers and advanced text analysis.",
      tech: ["Python", "BERT", "NLP", "Transformers"],
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Gamified Social Study Companion",
      description: "Interactive learning platform that makes studying engaging through gamification elements and social features.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      icon: <Users className="w-8 h-8" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-700 rotate-45 animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-800 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-gray-600 animate-rotate-3d"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-gray-700 to-gray-600 clip-path-triangle animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-gray-700 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gray-700 rotate-45 animate-float"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
              Akshat Singh Rawat
            </Link>
            <div className="flex gap-8">
              <Link to="/" className="hover:text-gray-300 transition-colors font-medium">Home</Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors font-medium">About</Link>
              <Link to="/projects" className="hover:text-gray-300 transition-colors font-medium">Projects</Link>
              <Link to="/contact" className="hover:text-gray-300 transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-7xl lg:text-8xl font-bold leading-none">
                  <span className="block text-white">AI</span>
                  <span className="block text-gray-400">Developer</span>
                  <span className="block text-white text-shadow">Who Ships</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Building intelligent systems that solve real-world problems. 
                  Transforming ideas into production-ready AI solutions with precision and impact.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button 
                    size="lg" 
                    className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg shadow-3d hover-lift group"
                  >
                    View Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg shadow-3d hover-lift"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Deep Learning"].map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 bg-gray-800 px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Portrait */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Main portrait */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative shadow-3d-lg hover-lift">
                  <img 
                    src="/lovable-uploads/fda9e274-cd0c-4fad-99f2-9c910a4d09ff.png" 
                    alt="Akshat Singh Rawat - AI Developer" 
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-110"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
                    }}
                  />
                  
                  {/* Geometric overlay */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm animate-pulse-glow"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rotate-45 opacity-80"></div>
                </div>

                {/* Floating elements around portrait */}
                <div className="absolute -top-8 left-1/4 w-12 h-12 border border-gray-500 rotate-45 animate-float"></div>
                <div className="absolute -bottom-4 right-1/4 w-8 h-8 bg-gray-700 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gray-800 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Featured <span className="text-gray-400">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              AI solutions that deliver measurable impact in production environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-gray-900 border-0 shadow-3d hover-lift group cursor-pointer overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                      {project.icon}
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-gray-300 transition-colors leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-gray-800 text-gray-300 text-xs border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 shadow-3d hover-lift"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 border border-gray-800 rotate-12 animate-float opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-900 rotate-45 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Build 
              <span className="block text-gray-400">Something Amazing?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Whether you need AI integration, machine learning solutions, or want to discuss 
              the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg shadow-3d hover-lift"
                >
                  Start a Conversation
                </Button>
              </Link>
              <a 
                href="mailto:rawaks0910@gmail.com"
                className="inline-flex"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg shadow-3d hover-lift"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 Akshat Singh Rawat. Crafted with precision and powered by AI.
              </p>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://github.com/AkshatRawat-04" 
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover-lift"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/akshat-singh-rawat-bb52552a6" 
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:rawaks0910@gmail.com" 
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors hover-lift"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
