import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Star, Target, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot for Customer Service",
      description: "Intelligent conversational AI system that handles customer inquiries with natural language processing. Built to reduce response time and improve customer satisfaction through automated support.",
      tech: ["Python", "NLP", "TensorFlow", "Flask", "MongoDB"],
      category: "Conversational AI",
      emoji: "🤖",
      status: "Production",
      date: "2024",
      stars: 156,
      features: [
        "95% accuracy in intent recognition",
        "Multilingual support for 5+ languages",
        "Integration with CRM systems",
        "Real-time sentiment analysis"
      ]
    },
    {
      title: "Stock Price Prediction System",
      description: "Machine learning model that predicts stock price movements using historical data, technical indicators, and market sentiment analysis. Achieved 78% accuracy in price direction prediction.",
      tech: ["Python", "LSTM", "Pandas", "Scikit-learn", "Yahoo Finance API"],
      category: "Financial AI",
      emoji: "📈",
      status: "Active",
      date: "2024",
      stars: 203,
      features: [
        "Time series forecasting with LSTM networks",
        "Technical indicator integration",
        "Risk assessment algorithms",
        "Real-time market data processing"
      ]
    },
    {
      title: "Fake News Detection",
      description: "Natural language processing system that identifies and classifies fake news articles. Uses advanced NLP techniques and machine learning to analyze text credibility and source reliability.",
      tech: ["Python", "BERT", "NLP", "Transformers", "FastAPI"],
      category: "NLP",
      emoji: "📰",
      status: "Complete",
      date: "2023",
      stars: 198,
      features: [
        "Advanced text analysis with BERT",
        "Source credibility assessment",
        "Fact-checking integration",
        "Real-time news verification"
      ]
    },
    {
      title: "Gamified Social Study Companion",
      description: "Interactive learning platform that transforms studying into an engaging social experience. Features gamification elements, collaborative study rooms, and progress tracking to motivate students and enhance learning outcomes.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      category: "Educational Technology",
      emoji: "🎮",
      status: "Active",
      date: "2024",
      stars: 245,
      features: [
        "Real-time collaborative study sessions",
        "Achievement system with badges and leaderboards",
        "AI-powered study recommendations",
        "Social features with study groups and challenges"
      ]
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
              AI Developer Portfolio
            </h1>
            <p className="text-xl text-light-gray leading-relaxed max-w-3xl mx-auto">
              A comprehensive collection of AI and machine learning projects spanning computer vision, 
              NLP, predictive analytics, and intelligent automation systems
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
                          project.status === 'Production' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                          project.status === 'Active' ? 'bg-vibrant-orange/10 text-vibrant-orange border-vibrant-orange/30' :
                          project.status === 'Complete' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
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

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-vibrant-orange mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-light-gray flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-vibrant-orange mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                      View Details
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
              Interested in collaborating on cutting-edge AI solutions?
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-vibrant-orange hover:bg-orange-600 text-pure-white px-8 py-3">
                Let's Build the Future Together
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
