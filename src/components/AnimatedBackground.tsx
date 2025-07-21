
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 2 + 1,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dynamic Particle System */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-drift"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.id * 0.1}s`,
            animationDuration: `${particle.speed * 5}s`,
          }}
        />
      ))}

      {/* Advanced 3D Floating Geometric Shapes */}
      <div className="absolute inset-0 preserve-3d">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gray-700 rotate-45 animate-float hover-rotate-3d opacity-60 perspective-1000">
          <div className="absolute inset-4 border border-gray-600 animate-rotate-3d-slow"></div>
        </div>
        
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-800 animate-morph animate-pulse-glow-intense">
          <div className="absolute inset-2 bg-gray-700 rounded-full animate-wave opacity-70"></div>
        </div>
        
        <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-gray-600 animate-rotate-3d preserve-3d">
          <div className="absolute inset-4 border border-gray-500 clip-path-hexagon animate-pulse-glow"></div>
          <div className="absolute inset-8 border border-gray-400 rotate-45 animate-float-reverse"></div>
        </div>
        
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 clip-path-diamond animate-float hover-glow">
          <div className="absolute inset-2 bg-gray-800 clip-path-diamond animate-pulse opacity-80"></div>
        </div>
        
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-gray-700 rounded-lg rotate-12 animate-tilt-shake interactive-cube glass-morphism">
          <div className="absolute inset-2 bg-gray-600 rounded animate-rotate-3d opacity-60"></div>
        </div>
        
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gray-700 clip-path-hexagon animate-float-reverse hover-lift">
          <div className="absolute inset-2 bg-gray-600 rounded-full animate-pulse-glow animate-delay-2"></div>
        </div>
      </div>

      {/* Magnetic cursor follower */}
      <div 
        className="absolute w-6 h-6 bg-white rounded-full opacity-20 animate-pulse-glow-intense pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x / window.innerWidth * 100}%`,
          top: `${mousePosition.y / window.innerHeight * 100}%`,
          transform: 'translate(-50%, -50%) scale(0.5)',
        }}
      />
    </div>
  );
};
