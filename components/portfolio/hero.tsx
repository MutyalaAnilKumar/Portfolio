"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";

const roles = [
  "Web3 Backend Engineer",
  "Telegram Mini App Developer",
  "Solana & TON Developer",
  "Node.js API Specialist",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 lg:pt-0 lg:pb-0 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
        
        {/* Decorative dots grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-20 w-4 h-4 bg-primary/30 rotate-45 animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute top-1/3 left-16 w-3 h-3 bg-accent/40 rounded-full animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-32 left-1/4 w-5 h-5 border-2 border-primary/20 rotate-12 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary/50 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
      </div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border shadow-lg shadow-primary/5 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Open to new opportunities
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
          </div>
          
          {/* Main heading with gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Anilkumar Mutyala
              </span>
              {/* Decorative underline */}
              <svg 
                className="absolute -bottom-2 left-0 w-full h-3" 
                viewBox="0 0 200 12" 
                fill="none"
              >
                <path 
                  d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" 
                  stroke="url(#gradient)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  className="animate-draw"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--accent)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          {/* Animated role text */}
          <div className="h-16 sm:h-20 flex items-center justify-center mb-8">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
              I&apos;m a{" "}
              <span className="text-foreground font-semibold inline-block min-w-[280px] sm:min-w-[340px] text-left">
                {displayText}
                <span className="inline-block w-0.5 h-8 sm:h-10 bg-primary ml-1 animate-blink" />
              </span>
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            I design{" "}
            <span className="text-foreground font-medium">Web3 trading bots</span>,{" "}
            <span className="text-foreground font-medium">Telegram Mini Apps</span>, and{" "}
            <span className="text-foreground font-medium">backend platforms</span>{" "}
            using Node.js, React, MongoDB, and Solana/TON – from real-time games to
            automated DeFi infrastructure.
          </p>
          
          {/* Location with icon */}
          <div className="flex items-center gap-2 text-muted-foreground mb-10">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium">Hyderabad, India</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:opacity-90 px-8 h-14 rounded-full shadow-xl shadow-primary/25 text-base font-medium group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <a href="#contact">
                Let&apos;s Work Together
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-border text-foreground hover:bg-card hover:border-primary/30 px-8 h-14 rounded-full bg-transparent text-base font-medium group transition-all duration-300"
            >
              <a href="/AnilkumarMutyala.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                View Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground font-medium">Connect with me</span>
            <div className="w-8 h-px bg-border" />
            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/MutyalaAnilKumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/anilkumar-mutyala-612766219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
