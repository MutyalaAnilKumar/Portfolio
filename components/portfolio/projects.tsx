"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { 
  ArrowRight, 
  Github, 
  Server, 
  Smartphone, 
  Users, 
  Shield, 
  Zap, 
  BarChart3, 
  Wallet, 
  Database,
  Layers,
  Gamepad2,
  Blocks,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Web3 Trading Suite (3 Projects)",
    subtitle: "Automated Market Making · Pool Automation · Auto Reports",
    icon: Gamepad2,
    gradient: "from-sky-500 via-cyan-500 to-emerald-500",
    accentColor: "cyan",
    overview:
      "A three-part Web3 trading suite on Solana: an automated market making engine, pool automation for Raydium liquidity, and an automated reporting service for tokens, wallets, and pools.",
    architecture: [
      "Automated market making engine built with Node.js on Solana/Raydium",
      "Pool automation service for creating and managing Raydium liquidity pools",
      "Automated reporting service tracking tokens, wallets, and pool performance",
      "MongoDB persistence for swaps, liquidity, wallets, metrics, and logs",
      "Solana Web3.js and Raydium SDK for all on-chain interactions",
    ],
    userFeatures: [
      "Strategy-based automated market making on Solana/Raydium",
      "Automatic pool management and rebalancing for Raydium pools",
      "Real-time and historical reports for tokens, wallets, and pools",
    ],
    adminFeatures: [
      "Role-based API access for operators and admins",
      "Configuration of AMM strategies, risk limits, and pool selection",
      "Monitoring of queues, errors, retries, uptime, and reporting jobs",
    ],
    techStack: {
      backend: ["Node.js", "Express.js", "MongoDB", "Solana Web3.js"],
      frontend: ["API-first backend (CLI/dashboards ready)"],
      blockchain: ["Raydium DEX", "Solana"],
    },
    githubUrl: "https://github.com/panuganti0211/PoolAutomatiomRaydium",
  },
  {
    title: "StringDrive Racing Platform",
    subtitle: "Telegram Mini App · Web3 Game",
    icon: Gamepad2,
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    accentColor: "violet",
    overview:
      "A Telegram Mini App racing game with boosters, referrals, ad-driven tasks, and crypto-style withdrawals, backed by a Node.js/Express API and MongoDB.",
    architecture: [
      "React + Vite Telegram Mini App frontend",
      "Node.js/Express REST API for racing, rewards, boosters, and referrals",
      "MongoDB modeling for users, races, rewards, and history",
      "JWT authentication and role-based user/admin APIs",
      "Cron jobs for tasks, rewards, and system maintenance",
    ],
    userFeatures: [
      "In-chat racing gameplay with boosters and power-ups",
      "Leaderboards, referral tracking, and reward history",
      "Ad-driven tasks and secure withdrawal flows",
    ],
    adminFeatures: [
      "APIs for managing races, rewards, boosters, and referrals",
      "User management and ban/enable controls",
      "Configuration of reward rules and payout logic",
    ],
    techStack: {
      backend: ["Node.js", "Express.js", "MongoDB", "JWT"],
      frontend: ["React", "Vite", "Telegram WebApp SDK"],
      integrations: ["Telegram Bot API"],
    },
    githubUrl: "https://github.com/panuganti0211/CarGame-testStringRace",
  },
  {
    title: "Tetris Game Platform",
    subtitle: "React · Node.js · Telegram",
    icon: Blocks,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    accentColor: "rose",
    overview:
      "A modern Tetris-style platform with Telegram integration, leaderboards, referrals, daily tasks, boosters, adblock detection, and secure withdrawals.",
    architecture: [
      "React + Vite frontend for Tetris gameplay and UI",
      "Node.js/Express backend for users, scores, bets, and payouts",
      "MongoDB/Mongoose schemas for users, tasks, rewards, and withdrawals",
      "Telegram integration for access, notifications, and bots",
    ],
    userFeatures: [
      "Classic Tetris gameplay with modern UX",
      "Global leaderboards and high-score tracking",
      "Referral system, daily tasks, and boosters",
      "Adblock-aware flows and secure withdrawal handling",
    ],
    adminFeatures: [
      "Admin panel/APIs for configuring tasks, boosters, and rewards",
      "Management of users, scores, and withdrawals",
      "Control over ad and ticket systems",
    ],
    dataModels: ["Users", "Game Sessions", "Tasks & Rewards", "Withdrawals", "Referrals"],
    techStack: {
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      frontend: ["React", "Vite"],
      integrations: ["Telegram API"],
    },
    githubUrl: "https://github.com/panuganti0211/TetrisGame",
  },
];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Decorative code brackets */}
        <div className="absolute top-20 left-10 text-8xl font-mono text-primary/5 select-none">{"{"}</div>
        <div className="absolute bottom-20 right-10 text-8xl font-mono text-accent/5 select-none">{"}"}</div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`max-w-2xl mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Featured{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 8" fill="none">
                <path d="M0 4C30 4 30 7 60 7C90 7 90 1 120 1" stroke="url(#project-gradient)" strokeWidth="2" strokeLinecap="round" className="animate-draw"/>
                <defs>
                  <linearGradient id="project-gradient" x1="0" y1="0" x2="120" y2="0">
                    <stop stopColor="hsl(var(--primary))" />
                    <stop offset="1" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Web3 trading bots, Telegram Mini Apps, and backend platforms – from Solana/Raydium
            automation to real-time games with leaderboards, referrals, and admin dashboards.
          </p>
        </div>
        
        <div className="space-y-10">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group bg-card/50 backdrop-blur border-border overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Header with Gradient */}
                <div className={`relative p-8 lg:p-10 bg-gradient-to-r ${project.gradient} text-white overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "24px 24px"
                  }} />
                  
                  {/* Floating shapes */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute bottom-4 right-20 w-12 h-12 bg-white/10 rounded-full blur-lg" />
                  
                  <div className="relative z-10 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <project.icon className="w-8 h-8 lg:w-10 lg:h-10" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-1">{project.title}</h3>
                        <p className="text-white/80 font-medium text-lg">{project.subtitle}</p>
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="hidden sm:inline-flex bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur"
                      onClick={() => setSelectedProjectIndex(index)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 lg:p-10 space-y-8">
                  {/* Overview */}
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.overview}
                  </p>
                  
                  {/* Architecture */}
                  <div className="relative p-6 bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl border border-border overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Layers className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-bold text-lg text-foreground">Project Structure</h4>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.architecture.map((comp, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-card/50 rounded-xl border border-border/50">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* User Features */}
                    <div className="relative p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <h4 className="font-bold text-foreground">User Features</h4>
                        </div>
                        <ul className="space-y-3">
                          {project.userFeatures.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                <Zap className="w-3 h-3 text-primary" />
                              </div>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Admin Features */}
                    <div className="relative p-6 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-accent" />
                          </div>
                          <h4 className="font-bold text-foreground">Admin Features</h4>
                        </div>
                        <ul className="space-y-3">
                          {project.adminFeatures.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-5 h-5 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                <BarChart3 className="w-3 h-3 text-accent" />
                              </div>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Models (for Tetris) */}
                  {project.dataModels && (
                    <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/30 rounded-xl border border-border">
                      <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Database className="w-4 h-4 text-primary" />
                        Data Models:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.dataModels.map((model, i) => (
                          <span key={i} className="px-3 py-1.5 bg-card text-muted-foreground text-xs rounded-lg font-medium border border-border">
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Tech Stack */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex flex-wrap gap-8">
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Server className="w-4 h-4" /> Backend
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.backend.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm rounded-xl font-medium border border-primary/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Smartphone className="w-4 h-4" /> Frontend
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.frontend.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 text-accent text-sm rounded-xl font-medium border border-accent/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Wallet className="w-4 h-4" /> {project.techStack.blockchain ? "Blockchain" : "Integrations"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(project.techStack.blockchain || project.techStack.integrations)?.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-muted/50 text-muted-foreground text-sm rounded-xl font-medium border border-border">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* GitHub CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-muted-foreground">Want to see more of my work?</p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-foreground to-foreground/80 text-background hover:opacity-90 rounded-full px-10 h-14 text-base font-semibold shadow-xl shadow-foreground/10 hover:shadow-2xl hover:shadow-foreground/20 hover:-translate-y-1 transition-all duration-300"
            >
              <a href="https://github.com/MutyalaAnilKumar" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-3" />
                View More on GitHub
                <ArrowRight className="w-4 h-4 ml-3" />
                </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog
        open={selectedProjectIndex !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProjectIndex(null);
        }}
      >
        {selectedProjectIndex !== null && (
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{projects[selectedProjectIndex].title}</DialogTitle>
              <DialogDescription className="space-y-1">
                <p className="font-medium text-foreground">
                  {projects[selectedProjectIndex].subtitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {projects[selectedProjectIndex].overview}
                </p>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  Architecture
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {projects[selectedProjectIndex].architecture.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    User Features
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {projects[selectedProjectIndex].userFeatures.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    Admin Features
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {projects[selectedProjectIndex].adminFeatures.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {projects[selectedProjectIndex].techStack.backend.map((tech, i) => (
                    <span
                      key={`b-${i}`}
                      className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {projects[selectedProjectIndex].techStack.frontend.map((tech, i) => (
                    <span
                      key={`f-${i}`}
                      className="px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {(projects[selectedProjectIndex].techStack.blockchain ||
                    projects[selectedProjectIndex].techStack.integrations)?.map((tech, i) => (
                    <span
                      key={`o-${i}`}
                      className="px-3 py-1 rounded-full border border-border bg-muted/40 text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <DialogFooter className="mt-6 flex items-center justify-between gap-4">
              {projects[selectedProjectIndex].githubUrl && (
                <Button asChild variant="outline" size="sm">
                  <a
                    href={projects[selectedProjectIndex].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              )}
              <Button variant="default" size="sm" onClick={() => setSelectedProjectIndex(null)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
