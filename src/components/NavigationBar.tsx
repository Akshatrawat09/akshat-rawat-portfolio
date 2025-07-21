
import { Link } from "react-router-dom";

interface NavigationBarProps {
  currentPage: string;
}

export const NavigationBar = ({ currentPage }: NavigationBarProps) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full glass-morphism border-b border-gray-700/50 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300 hover-glow text-shadow-glow"
          >
            <span className="inline-block hover-tilt">Akshat Singh Rawat</span>
          </Link>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-all duration-300 font-medium hover-lift hover-glow relative group ${
                  currentPage === item.name.toLowerCase()
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                  currentPage === item.name.toLowerCase()
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
