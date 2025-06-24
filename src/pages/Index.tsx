
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Linkedin, Brain, Code, Palette, Zap } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "AI-Powered Social Media Content Generator",
      description: "Intelligent platform that crafts engaging, visually-rich social media prompts using advanced NLP and creative storytelling algorithms.",
      tech: ["React", "OpenAI GPT", "TailwindCSS", "Node.js"],
      category: "AI/ML",
      image: "🎨",
      link: "#",
      github: "#"
    },
    {
      title: "VR Property Matching Platform",
      description: "Advanced property matching website with virtual reality tours, utilizing machine learning to understand user preferences and deliver personalized recommendations.",
      tech: ["Vue.js", "Three.js", "Python", "TensorFlow", "WebXR"],
      category: "Full-Stack",
      image: "🏠",
      link: "#",
      github: "#"
    },
    {
      title: "Intelligent Prompt Engineering Tool",
      description: "Sophisticated tool for optimizing AI prompts with real-time analysis, A/B testing capabilities, and performance metrics for maximum AI output quality.",
      tech: ["TypeScript", "React", "FastAPI", "PostgreSQL"],
      category: "AI Tools",
      image: "⚡",
      link: "#",
      github: "#"
    },
    {
      title: "Smart Document Analyzer",
      description: "AI-powered document processing system that extracts insights, summarizes content, and provides intelligent recommendations using advanced NLP models.",
      tech: ["Python", "Transformers", "Flask", "Docker"],
      category: "AI/ML",
      image: "📄",
      link: "#",
      github: "#"
    }
  ];

  const skills = [
    { name: "AI/ML Development", icon: Brain, description: "Advanced machine learning, NLP, and AI model integration" },
    { name: "Full-Stack Development", icon: Code, description: "Modern web applications with React, Node.js, and Python" },
    { name: "Creative Problem Solving", icon: Palette, description: "Innovative solutions blending technology with user experience" },
    { name: "Prompt Engineering", icon: Zap, description: "Optimizing AI interactions for maximum effectiveness" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">Available for exciting projects</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Adventures
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                Portfolio
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore innovative AI-powered projects and web applications designed to solve real-world problems. 
              From crafting engaging social media experiences to building advanced VR platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg font-semibold">
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Expertise</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Blending technical excellence with creative innovation to deliver impactful solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{skill.name}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Innovative solutions showcasing AI/ML expertise, full-stack development, and creative problem-solving
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 overflow-hidden hover:bg-slate-900/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-4">{project.image}</div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-slate-600 text-slate-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your next innovative project to life? Let's discuss how we can solve real-world problems together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
