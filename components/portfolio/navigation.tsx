"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download, ExternalLink } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#tools" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/70 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border/50 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="group flex items-center gap-1"
          >
            <span className="font-bold text-2xl text-foreground tracking-tight">
              Anilkumar Mutyala
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-125 transition-transform" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-full p-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:opacity-90 rounded-full px-5 h-10 text-sm font-medium shadow-lg shadow-primary/20 group"
            >
              <a href="/AnilkumarMutyala.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                Resume
              </a>
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted rounded-xl">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full sm:w-80 bg-background/95 backdrop-blur-xl border-border p-0"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="font-bold text-xl text-foreground flex items-center gap-1">
                    Anilkumar Mutyala
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  </span>
                </div>
                
                {/* Mobile Links */}
                <div className="flex-1 flex flex-col justify-center px-6 gap-1">
                  {navItems.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary transition-colors text-3xl font-semibold py-4 flex items-center gap-3 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-150 transition-all" />
                      {item.label}
                    </a>
                  ))}
                </div>
                
                {/* Mobile CTA */}
                <div className="p-6 border-t border-border space-y-3">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:opacity-90 rounded-full h-14 text-base font-medium shadow-lg"
                  >
                    <a 
                      href="/AnilkumarMutyala.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      View Resume
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-2 rounded-full h-14 text-base font-medium bg-transparent"
                  >
                    <a 
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
