
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-charcoal text-pure-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-vibrant-orange">404</h1>
        <p className="text-2xl text-light-gray mb-8">Oops! Page not found</p>
        <p className="text-lg text-light-gray mb-8">
          Looks like this page went on vacation without telling anyone.
        </p>
        <Link to="/">
          <Button className="bg-vibrant-orange hover:bg-orange-600 text-pure-white px-8 py-3">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
