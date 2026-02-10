"use client";

import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Developer",
    company: "String Metaverse Ltd",
    location: "Remote",
    period: "January 2025 – Present",
    description: [
      "Integrated backend APIs for Admin Dashboard functionalities to monitor user activity and payments",
      "Developed interactive Telegram web applications featuring integrated mini-games and ads using React.js",
      "Built and deployed multiple in-app mini-games with ad monetization, improving user engagement and average session time",
      "Designed and implemented RESTful APIs using Node.js and Express.js to ensure seamless frontend–backend communication",
      "Integrated third-party APIs and ad SDKs to manage dynamic ad placements within Telegram game interfaces",
    ],
    skills: ["React.js", "Node.js", "MongoDB", "API Integration", "TON Blockchain"],
  },
  {
    title: "eSupport Officer",
    company: "InTouch",
    location: "Hyderabad",
    period: "October 2024 – January 2025",
    description: [
      "Provided technical support and troubleshooting for end users",
      "Assisted in monitoring applications and resolving customer queries",
      "Supported deployment and operational activities within the team",
    ],
    skills: ["Technical Support", "Application Monitoring", "Customer Service"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Where I&apos;ve Worked</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm mt-1">
                    {exp.period} | {exp.location}
                  </p>
                </div>
                
                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 text-sm">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="outline"
                      className="border-primary/30 text-primary text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
