
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Star, Target, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  category: string;
  emoji: string;
  status: string;
  date: string;
  stars: number;
  githubRepo: string;
  features: string[];
  index: number;
}

export const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  category, 
  emoji, 
  status, 
  date, 
  stars, 
  githubRepo, 
  features, 
  index 
}: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'Active':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Complete':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'Beta':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card 
      className="bg-gray-900/50 border-0 shadow-3d hover-lift group cursor-pointer overflow-hidden glass-morphism hover-glow perspective-1000 backdrop-blur-sm animate-fade-in"
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
          <div className="text-4xl group-hover:animate-pulse animate-float">
            {emoji}
          </div>
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className={`${getStatusColor(status)}`}
            >
              {status}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <CardTitle className="text-white text-xl group-hover:text-gray-300 transition-colors hover-glow">
            {title}
          </CardTitle>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            {stars}
          </div>
          <Badge variant="outline" className="border-gray-600/30 text-gray-400 text-xs">
            {category}
          </Badge>
        </div>

        <CardDescription className="text-gray-300 text-base leading-relaxed mb-4">
          {description}
        </CardDescription>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
            <Target className="w-4 h-4" />
            Key Features
          </h4>
          <ul className="space-y-1">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="text-sm text-gray-400 flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardHeader>

      <CardContent className="relative">
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((tech, techIndex) => (
            <Badge 
              key={techIndex} 
              variant="secondary" 
              className="bg-gray-800/50 text-gray-300 text-xs border-0 hover-lift hover-glow transition-all duration-300 glass-morphism backdrop-blur-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <a
            href={`https://github.com/Akshatrawat09/${githubRepo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-600/30 text-gray-400 hover:bg-gray-600 hover:text-white transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
