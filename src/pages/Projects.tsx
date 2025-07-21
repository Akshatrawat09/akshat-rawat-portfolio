
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { NavigationBar } from "@/components/NavigationBar";
import { ProjectCard } from "@/components/ProjectCard";

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
      githubRepo: "skillswap-ai",
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
      githubRepo: "alpha-trend-tracker",
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
      githubRepo: "lead-forge-refined",
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
      githubRepo: "tide-task-surf",
      features: [
        "Real-time collaborative study sessions",
        "Achievement system with badges and leaderboards",
        "AI-powered study recommendations",
        "Social features with study groups and challenges"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <NavigationBar currentPage="projects" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold text-white mb-6 text-shadow-glow hover-tilt animate-fade-in">
              AI Developer 
              <span className="block text-gray-400 hover-glow animate-float animate-delay-1">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto hover-glow transition-all duration-500 animate-fade-in animate-delay-2">
              A comprehensive collection of AI and machine learning projects spanning computer vision, 
              NLP, predictive analytics, and intelligent automation systems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gray-800/50 rounded-2xl p-8 glass-morphism hover-lift transition-all duration-300 inline-block">
              <p className="text-gray-300 mb-6 text-lg">
                Interested in collaborating on cutting-edge AI solutions?
              </p>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg shadow-3d hover-lift hover-rotate-3d glass-morphism group"
                >
                  <span className="group-hover:animate-pulse">Let's Build the Future Together</span>
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

export default Projects;
