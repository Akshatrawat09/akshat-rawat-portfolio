
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Star } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              A collection of AI experiments, practical tools, and solutions to problems I created while trying to solve other problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.emoji}</div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          project.status === 'Complete' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800' :
                          project.status === 'Active' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800' :
                          project.status === 'Beta' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800' :
                          'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-slate-900 dark:text-white text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                    <Badge variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>

                  <CardDescription className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {project.longDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
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
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Interested in collaborating on something equally ridiculous?
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              Let's Build Something
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
