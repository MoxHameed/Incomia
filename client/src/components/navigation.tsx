import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/database", label: "Database" },
    { href: "/jobs", label: "Jobs" },
    { href: "/stories", label: "Stories" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-fresh-green rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">$</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-dark-green tracking-wide">
              INCOMIA
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  location === item.href
                    ? "text-fresh-green"
                    : "text-dark-green hover:text-fresh-green"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
              Join Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-green hover:text-fresh-green"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    location === item.href
                      ? "text-fresh-green"
                      : "text-dark-green hover:text-fresh-green"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-fresh-green hover:bg-fresh-green/90 text-white px-6 py-2 rounded-full font-medium w-full">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
