"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code2, GraduationCap, Briefcase, Award, Calendar, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "1", label: "Companies" },
  { value: "4+", label: "Live Projects" },
  { value: "3+", label: "Web3 & Telegram Apps" },
];

const experience = [
  {
    title: "Software Developer",
    company: "String Metaverse Limited",
    period: "August 2023 - Present",
    current: true,
    highlights: [
      "Engineered a high-frequency Solana trading bot using Node.js & Web3.js",
      "Built 'StringDrive' (Telegram Mini App) on TON Blockchain with Express.js",
      "Optimized MongoDB aggregation pipelines, reducing query latency by ~20%",
    ],
  },
  // {
  //   title: "Analyst",
  //   company: "Global Logic Technologies",
  //   period: "Sep 2023 - Jan 2025",
  //   current: false,
  //   highlights: [
  //     "Collaborated with cross-functional teams to streamline business logic",
  //     "Managed data accuracy and reporting standards for enterprise clients",
  //   ],
  // },
];

const techStack = [
  "Node.js",
  "React.js",
  "Express.js",
  "MongoDB",
  "Solana Web3.js",
  "TON Blockchain",
  "Telegram Bot API",
  "Web3 Trading Bots",
  "Telegram Mini Apps",
  "REST APIs",
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Floating Decorations */}
      <div className="absolute top-32 right-20 w-3 h-3 bg-primary rounded-full animate-bounce opacity-60" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-60 left-20 w-2 h-2 bg-accent rounded-full animate-bounce opacity-60" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`max-w-2xl mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Building{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Web3 trading, games & APIs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a backend-focused MERN developer who ships production-ready Web3 trading
            bots, Telegram Mini Apps, and admin platforms. I work end-to-end from Solana/TON
            integrations and REST APIs to game logic, security, and analytics.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur border-border text-center hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500"
            >
              <CardContent className="py-6 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1 relative z-10">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-medium relative z-10">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Main Content - 3 Column Grid */}
        <div className={`grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          {/* Tech Stack Card */}
          <Card className="bg-card/50 backdrop-blur border-border overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
            <CardContent className="p-0">
              <div className="p-5 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Code2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Tech Stack</h3>
                    <p className="text-xs text-muted-foreground">Technologies I work with</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-primary/5 text-foreground text-xs rounded-lg border border-primary/10 font-medium hover:border-primary/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Education Card (Replaced Certification with 2nd Degree) */}
          <Card className="bg-card/50 backdrop-blur border-border overflow-hidden group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
            <CardContent className="p-0">
              <div className="p-5 border-b border-border bg-gradient-to-r from-accent/5 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-lg shadow-accent/20">
                    <GraduationCap className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Education</h3>
                    <p className="text-xs text-muted-foreground">Academic background</p>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-5">
                {/* Degree 1 */}
                <div>
                  <p className="font-bold text-foreground">Bachelor of Technology (Btech)</p>
                  <p className="text-primary font-medium text-sm">Computer Science & Engineering</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                   <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      Mandava Institute Of Engineering & Technology
                    </span>
                  </div>
                </div>
                
                {/* Degree 2 */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-lg"> */}
                      <Award className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      {/* <div className="flex flex-col"> */}
                        {/* <span className="font-bold text-foreground text-sm">Computer Science & Engineering</span>
                        <p className="text-xs text-muted-foreground"></p>
                         <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
                          Vivekananda Govt Degree College
                        </span> */}
                      {/* </div> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Work Experience Card */}
          <Card className="bg-card/50 backdrop-blur border-border overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
            <CardContent className="p-0">
              <div className="p-5 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Work Experience</h3>
                    <p className="text-xs text-muted-foreground">Professional journey</p>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-5">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-5">
                    {/* Timeline */}
                    <div className={`absolute left-0 top-2 bottom-0 w-0.5 ${index === experience.length - 1 ? "h-2" : "h-full"} ${job.current ? "bg-primary" : "bg-border"}`} />
                    <div className={`absolute left-0 top-1 w-2 h-2 -translate-x-[3px] rounded-full ${job.current ? "bg-primary ring-2 ring-primary/30" : "bg-muted-foreground/40"}`} />
                    
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-foreground text-sm">{job.title}</h4>
                      {job.current && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] font-semibold rounded">
                          <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium text-xs mb-1">{job.company}</p>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1 mb-2">
                      <Calendar className="w-2.5 h-2.5" />
                      {job.period}
                    </p>
                    <ul className="space-y-1">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${job.current ? "bg-primary" : "bg-muted-foreground/50"}`} />
                          <span className="text-xs leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}