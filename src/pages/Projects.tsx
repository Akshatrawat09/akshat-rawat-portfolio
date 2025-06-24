
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Neural Network Optimizer",
      description: "An automated hyperparameter tuning system that uses genetic algorithms to optimize neural network architectures. Because manually tweaking learning rates is so 2019.",
      longDescription: "This project combines evolutionary algorithms with Bayesian optimization to automatically find the best hyperparameters for deep learning models. It's saved me approximately 847 hours of manual tuning and my sanity.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Flask", "React"],
      category: "AI/ML",
      emoji: "🧠",
      status: "Complete",
      date: "2024",
      stars: 42,
      link: "#",
      github: "#"
    },
    {
      title: "Smart Code Reviewer",
      description: "AI-powered code review system that provides detailed feedback on code quality, performance, and potential bugs. More thorough than most senior developers.",
      longDescription: "Uses fine-tuned language models to analyze code patterns, detect anti-patterns, and suggest improvements. It even leaves encouraging comments when your code doesn't completely suck.",
      tech: ["GPT-4", "TypeScript", "Node.js", "Docker", "PostgreSQL"],
      category: "Developer Tools",
      emoji: "🔍",
      status: "Active",
      date: "2024",
      stars: 128,
      link: "#",
      github: "#"
    },
    {
      title: "Mood-Based Music AI",
      description: "Analyzes text communication patterns to determine emotional state and curates appropriate music playlists. Surprisingly accurate at detecting Monday blues.",
      longDescription: "This system processes Slack messages, emails, and other text data to understand emotional context, then generates Spotify playlists that match the detected mood. It's like having a DJ who actually gets you.",
      tech: ["Python", "Spotify API", "NLP", "React", "FastAPI"],
      category: "AI/ML",
      emoji: "🎵",
      status: "Beta",
      date: "2023",
      stars: 89,
      link: "#",
      github: "#"
    },
    {
      title: "Quantum Error Predictor",
      description: "Machine learning model that predicts quantum circuit errors before they happen. Because quantum computers are expensive and I'm not.",
      longDescription: "Built during my exploration of quantum computing, this tool uses classical ML to predict when quantum circuits are likely to produce errors, allowing for preemptive corrections.",
      tech: ["Qiskit", "Python", "PyTorch", "Streamlit"],
      category: "Quantum Computing",
      emoji: "⚛️",
      status: "Research",
      date: "2023",
      stars: 34,
      link: "#",
      github: "#"
    },
    {
      title: "Procrastination Tracker",
      description: "AI system that monitors productivity patterns and gently (aggressively) reminds you to get back to work. Built ironically while procrastinating.",
      longDescription: "Uses computer vision and activity monitoring to detect when I'm browsing Reddit instead of coding. Features escalating intervention strategies from subtle notifications to complete social media blocking.",
      tech: ["Python", "OpenCV", "React", "Electron"],
      category: "Productivity",
      emoji: "⏰",
      status: "Personal Use",
      date: "2023",
      stars: 156,
      link: "#",
      github: "#"
    },
    {
      title: "Sarcasm Detection API",
      description: "Natural language processing API that detects sarcasm in text with 94% accuracy. Finally, technology that understands my communication style.",
      longDescription: "A REST API that analyzes text for sarcastic intent using transformer models fine-tuned on social media data. Useful for customer service automation and understanding Gen Z.",
      tech: ["Python", "Transformers", "FastAPI", "Docker"],
      category: "NLP",
      emoji: "😏",
      status: "Complete",
      date: "2022",
      stars: 203,
      link: "#",
      github: "#"
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
              <Link to="/projects" className="text-vibrant-orange">Projects</Link>
              <Link to="/contact" className="hover:text-vibrant-orange transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-pure-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-light-gray leading-relaxed max-w-3xl mx-auto">
              A collection of AI experiments, practical tools, and solutions to problems I created while trying to solve other problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-jet-black border-light-gray/20 overflow-hidden hover:border-vibrant-orange/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.emoji}</div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          project.status === 'Complete' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                          project.status === 'Active' ? 'bg-vibrant-orange/10 text-vibrant-orange border-vibrant-orange/30' :
                          project.status === 'Beta' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' :
                          'bg-purple-500/10 text-purple-400 border-purple-500/30'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-pure-white text-xl group-hover:text-vibrant-orange transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-light-gray">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                    <Badge variant="outline" className="border-light-gray/30 text-light-gray text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <CardDescription className="text-light-gray text-base leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>

                  <CardDescription className="text-light-gray/70 text-sm leading-relaxed">
                    {project.longDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-light-gray/30 text-light-gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-vibrant-orange/30 text-vibrant-orange hover:bg-vibrant-orange hover:text-pure-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-light-gray/30 text-light-gray hover:bg-light-gray hover:text-deep-charcoal">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-light-gray mb-6">
              Interested in collaborating on something equally ridiculous?
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-vibrant-orange hover:bg-orange-600 text-pure-white px-8 py-3">
                Let's Build Something
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
