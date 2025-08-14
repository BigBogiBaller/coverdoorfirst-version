import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import coverDoorLogo from "@/assets/coverdoor-logo.png";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Pre-Order", path: "/pre-order" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src={coverDoorLogo} alt="CoverDoor Logo" className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">CoverDoor</span>
            <span className="text-xs text-secondary font-medium">Insurance</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button asChild variant="hero" size="sm">
            <Link to="/pre-order">Reserve Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;