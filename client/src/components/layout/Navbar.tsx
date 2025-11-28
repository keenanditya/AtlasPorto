import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Map } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const isHome = location === "/";

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      window.location.href = `/${id}`;
      return;
    }
    
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 text-xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity">
            <Map className="w-6 h-6 text-primary" />
            <span>ATLAS</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            RESUME
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-lg font-medium text-foreground hover:text-primary py-2"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="w-full mt-2 rounded-none"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            RESUME
          </Button>
        </div>
      )}
    </nav>
  );
}
