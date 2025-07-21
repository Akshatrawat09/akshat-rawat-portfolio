import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Linkedin, ArrowRight, Code, Brain, TrendingUp, Users, Zap, Cpu, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { NavigationBar } from "@/components/NavigationBar";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "AI Chatbot for Customer Service",
      description: "Intelligent conversational AI that handles customer inquiries with 95% accuracy using advanced NLP techniques.",
      tech: ["Python", "NLP", "TensorFlow", "Flask"],
      icon: <Brain className="w-8 h-8" />,
      githubRepo: "skillswap-ai",
    },
    {
      title: "Stock Price Prediction System", 
      description: "ML model predicting stock movements using historical data and market sentiment analysis with LSTM networks.",
      tech: ["Python", "LSTM", "Pandas", "Scikit-learn"],
      icon: <TrendingUp className="w-8 h-8" />,
      githubRepo: "alpha-trend-tracker",
    },
    {
      title: "Fake News Detection",
      description: "NLP system that identifies and classifies fake news articles using BERT transformers and advanced text analysis.",
      tech: ["Python", "BERT", "NLP", "Transformers"],
      icon: <Code className="w-8 h-8" />,
      githubRepo: "lead-forge-refined",
    },
    {
      title: "Gamified Social Study Companion",
      description: "Interactive learning platform that makes studying engaging through gamification elements and social features.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      icon: <Users className="w-8 h-8" />,
      githubRepo: "tide-task-surf",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden perspective-1000">
      <AnimatedBackground />
      <NavigationBar currentPage="home" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className={`space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-6">
                <h1 className="text-7xl lg:text-8xl font-bold leading-none perspective-1000">
                  <span className="block text-white text-shadow-glow hover-tilt animate-float inline-block">AI</span>
                  <span className="block text-gray-400 hover-glow animate-float animate-delay-1 inline-block">Developer</span>
                  <span className="block text-white text-shadow hover-rotate-3d animate-float animate-delay-2 inline-block">Who Ships</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg hover-glow transition-all duration-500 animate-fade-in animate-delay-3">
                  Building intelligent systems that solve real-world problems. 
                  Transforming ideas into production-ready AI solutions with precision and impact.
                </p>
                
                {/* Dynamic Tech Icons */}
                <div className="flex gap-4 mt-8">
                  <div className="p-3 bg-gray-800/50 rounded-lg animate-pulse-glow hover-lift glass-morphism">
                    <Brain className="w-6 h-6 text-gray-300 animate-float" />
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg animate-pulse-glow hover-lift glass-morphism animate-delay-1">
                    <Cpu className="w-6 h-6 text-gray-300 animate-float animate-delay-1" />
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg animate-pulse-glow hover-lift glass-morphism animate-delay-2">
                    <Database className="w-6 h-6 text-gray-300 animate-float animate-delay-2" />
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg animate-pulse-glow hover-lift glass-morphism animate-delay-3">
                    <Zap className="w-6 h-6 text-gray-300 animate-float animate-delay-3" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button 
                    size="lg" 
                    className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg shadow-3d hover-lift group glass-morphism border border-white/20 perspective-1000"
                  >
                    <span className="group-hover:animate-pulse">View Projects</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg shadow-3d hover-lift hover-rotate-3d glass-morphism"
                  >
                    <span className="hover:animate-pulse">Get In Touch</span>
                  </Button>
                </Link>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400 uppercase tracking-wider font-medium hover-glow">Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Deep Learning"].map((tech, index) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className={`border-gray-600 text-gray-300 bg-gray-800/50 px-4 py-2 hover:bg-gray-700 transition-all duration-300 hover-lift hover-glow glass-morphism animate-fade-in cursor-pointer hover-tilt`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="hover:animate-pulse">{tech}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Portrait */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group perspective-1000">
                {/* Orbital rings around portrait */}
                <div className="absolute inset-0 animate-rotate-3d-slow">
                  <div className="absolute inset-8 border border-gray-600/30 rounded-full"></div>
                  <div className="absolute inset-16 border border-gray-500/20 rounded-full animate-rotate-3d"></div>
                </div>
                
                {/* Main portrait */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative shadow-3d-lg hover-lift hover-rotate-3d group perspective-1000">
                  <img 
                    src="/lovable-uploads/fda9e274-cd0c-4fad-99f2-9c910a4d09ff.png" 
                    alt="Akshat Singh Rawat - AI Developer" 
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-110 transition-all duration-500 group-hover:brightness-125 group-hover:contrast-150"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
                    }}
                  />
                  
                  {/* Enhanced geometric overlays */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm animate-pulse-glow-intense hover-rotate-3d glass-morphism"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rotate-45 opacity-80 animate-tilt-shake hover-lift"></div>
                  
                  {/* Additional 3D elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 border border-gray-500 clip-path-hexagon animate-wave opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-gray-700 clip-path-diamond animate-morph opacity-70"></div>
                </div>

                {/* Enhanced floating elements around portrait */}
                <div className="absolute -top-8 left-1/4 w-12 h-12 border border-gray-500 rotate-45 animate-float hover-glow interactive-cube"></div>
                <div className="absolute -bottom-4 right-1/4 w-8 h-8 bg-gray-700 rounded-full animate-pulse-glow animate-drift"></div>
                <div className="absolute -left-8 top-1/3 w-10 h-10 border-2 border-gray-600 clip-path-triangle animate-wave hover-lift"></div>
                <div className="absolute -right-6 bottom-1/3 w-6 h-6 bg-gray-500 animate-morph animate-delay-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gray-800 relative overflow-hidden">
        {/* Section background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-60 h-60 border border-gray-700/30 animate-rotate-3d-slow opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-700/10 clip-path-hexagon animate-wave"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-gray-600/20 rotate-45 animate-drift"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 text-shadow-glow hover-tilt">
              Featured <span className="text-gray-400 hover-glow">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto hover-glow transition-all duration-500">
              AI solutions that deliver measurable impact in production environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-gray-900/50 border-0 shadow-3d hover-lift group cursor-pointer overflow-hidden glass-morphism hover-glow perspective-1000 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4 relative">
                  {/* Floating particles in card */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="particle animate-drift opacity-20"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-gray-700 transition-all duration-300 hover-rotate-3d glass-morphism backdrop-blur-sm">
                      <div className="group-hover:animate-pulse">
                        {project.icon}
                      </div>
                    </div>
                    <a
                      href={`https://github.com/Akshatrawat09/${project.githubRepo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-all duration-300 hover-lift group-hover:animate-pulse" />
                    </a>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-gray-300 transition-all duration-300 leading-tight hover-glow">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-gray-800/50 text-gray-300 text-xs border-0 hover-lift hover-glow transition-all duration-300 glass-morphism backdrop-blur-sm"
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
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 shadow-3d hover-lift hover-rotate-3d glass-morphism group"
              >
                <span className="group-hover:animate-pulse">View All Projects</span>
                <div className="absolute inset-0 bg-white/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
        {/* Enhanced background geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 border border-gray-800 rotate-12 animate-float opacity-30 hover-rotate-3d"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-900 rotate-45 animate-pulse-glow-intense clip-path-diamond"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-gray-700 clip-path-hexagon animate-wave opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gray-800/20 animate-morph opacity-10"></div>
          
          {/* Floating particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="particle animate-drift"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-shadow-glow perspective-1000">
              <span className="inline-block hover-tilt animate-float">Ready to Build</span>
              <span className="block text-gray-400 hover-glow animate-float animate-delay-1">Something Amazing?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto hover-glow transition-all duration-500 animate-fade-in animate-delay-2">
              Whether you need AI integration, machine learning solutions, or want to discuss 
              the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg shadow-3d hover-lift hover-rotate-3d glass-morphism group perspective-1000"
                >
                  <span className="group-hover:animate-pulse">Start a Conversation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-drift"></div>
                </Button>
              </Link>
              <a 
                href="mailto:rawaks0910@gmail.com"
                className="inline-flex"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg shadow-3d hover-lift hover-glow glass-morphism group"
                >
                  <Mail className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                  <span className="group-hover:animate-pulse">Email Me</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 relative overflow-hidden">
        {/* Footer background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-4 left-10 w-20 h-20 border border-gray-700 animate-float"></div>
          <div className="absolute bottom-4 right-10 w-16 h-16 bg-gray-800 clip-path-triangle animate-pulse-glow"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 hover-glow transition-all duration-300">
                © 2024 Akshat Singh Rawat. Crafted with precision and powered by AI.
              </p>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://github.com/Akshatrawat09" 
                className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all duration-300 hover-lift hover-rotate-3d glass-morphism group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:animate-pulse" />
              </a>
              <a 
                href="https://www.linkedin.com/in/akshat-singh-rawat-bb52552a6" 
                className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all duration-300 hover-lift hover-rotate-3d glass-morphism group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
              </a>
              <a 
                href="mailto:rawaks0910@gmail.com" 
                className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all duration-300 hover-lift hover-rotate-3d glass-morphism group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
