"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Globe, Smartphone, Database, Layout, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Web3 Trading Bots & DeFi",
    description:
      "Designing automated trading systems on Solana/Raydium with Node.js, Web3.js, robust queueing, retries, and secure wallet management.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    shadowColor: "shadow-blue-500/20",
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Telegram Mini Apps & Games",
    description:
      "Building Telegram Mini Apps like StringDrive and Tetris with React + Vite, leaderboards, referrals, boosters, ads, and secure withdrawals.",
    gradient: "from-primary via-purple-500 to-accent",
    shadowColor: "shadow-primary/20",
    number: "02",
  },
  {
    icon: Database,
    title: "Backend APIs & Platforms",
    description:
      "Crafting Express APIs with MongoDB, JWT auth, role-based access, cron jobs, and production-grade security for products like Swift Backend and CreatorFun.",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    shadowColor: "shadow-emerald-500/20",
    number: "03",
  },
  {
    icon: Layout,
    title: "Admin Dashboards & Analytics",
    description:
      "Creating admin panels for monitoring games, trading bots, and creators with real-time metrics, user management, and payout workflows.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    shadowColor: "shadow-orange-500/20",
    number: "04",
  },
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("services");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-40 w-2 h-2 bg-primary rounded-full animate-bounce opacity-60" />
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-accent rounded-full animate-bounce opacity-40" style={{ animationDelay: "0.5s" }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`max-w-2xl mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            What I can do{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                for you
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 8" fill="none">
                <path d="M0 4C30 4 30 7 60 7C90 7 90 1 120 1" stroke="url(#service-gradient)" strokeWidth="2" strokeLinecap="round" className="animate-draw"/>
                <defs>
                  <linearGradient id="service-gradient" x1="0" y1="0" x2="120" y2="0">
                    <stop stopColor="hsl(var(--primary))" />
                    <stop offset="1" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in Web3 trading systems, Telegram Mini Apps, and backend APIs – taking ideas
            from prototype to production with a strong focus on scalability, DX, and security.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group bg-card/50 backdrop-blur border-border relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${hoveredIndex === index ? `shadow-2xl ${service.shadowColor} border-primary/30 -translate-y-2` : "hover:shadow-xl"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Service Number */}
              <div className="absolute top-6 right-6 text-6xl font-black text-muted/10 group-hover:text-primary/10 transition-colors duration-500">
                {service.number}
              </div>

              <CardContent className="p-8 relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg ${service.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-500`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
