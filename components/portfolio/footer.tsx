"use client";

import { Github, Linkedin, Heart, ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/MutyalaAnilKumar", label: "GitHub" },
  { icon: Linkedin, href: "www.linkedin.com/in/anilkumar-mutyala-612766219", label: "LinkedIn" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-12">
          {/* Logo & Tagline */}
          <div className="text-center lg:text-left">
            <a href="#" className="group inline-flex items-center gap-2 mb-3">
              <span className="font-bold text-2xl text-foreground">
                Anilkumar Mutyala
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent ml-1 group-hover:scale-150 transition-transform duration-300" />
              </span>
            </a>
            <p className="text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              Built with 
              <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> 
              in Hyderabad
            </p>
          </div>
          
          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-2">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 font-medium transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground hover:border-transparent hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            
            {/* Back to top */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-2xl border-border hover:bg-foreground hover:text-background hover:border-foreground hover:-translate-y-1 transition-all duration-300 ml-2 bg-transparent"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Divider with gradient */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4">
              <Sparkles className="w-4 h-4 text-primary" />
            </span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Anilkumar Mutyala
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Software Developer | Full Stack | Blockchain
          </p>
        </div>
      </div>
    </footer>
  );
}
