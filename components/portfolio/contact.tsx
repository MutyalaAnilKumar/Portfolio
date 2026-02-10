"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ArrowRight, Send, Sparkles, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ak47mutyala@gmail.com",
    href: "mailto:ak47mutyala@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
    delay: "0ms",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9347558332",
    href: "tel:+919642980211",
    gradient: "from-emerald-500 to-teal-500",
    delay: "100ms",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
    gradient: "from-orange-500 to-amber-500",
    delay: "200ms",
  },
];

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl opacity-50" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-32 left-20 w-3 h-3 bg-primary rounded-full animate-bounce opacity-50" />
      <div className="absolute top-60 right-32 w-2 h-2 bg-accent rounded-full animate-bounce opacity-60" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-primary/50 rounded-full animate-bounce opacity-30" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Let&apos;s work{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                together
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 8" fill="none">
                <path d="M0 4C30 4 30 7 60 7C90 7 90 1 120 1" stroke="url(#contact-gradient)" strokeWidth="2" strokeLinecap="round" className="animate-draw"/>
                <defs>
                  <linearGradient id="contact-gradient" x1="0" y1="0" x2="120" y2="0">
                    <stop stopColor="hsl(var(--primary))" />
                    <stop offset="1" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I&apos;ll get back to you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className="group bg-card/50 backdrop-blur border-border hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: item.delay }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground font-bold text-lg hover:text-primary transition-colors group-hover:underline underline-offset-4"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-bold text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Quick CTA */}
            <div className="pt-4">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 rounded-2xl h-16 text-lg font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <a href="mailto:ak47mutyala@gmail.com">
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email Directly
                  <ArrowRight className="w-5 h-5 ml-3" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <Card className="bg-card/50 backdrop-blur border-border shadow-2xl shadow-primary/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -z-10" />
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Send a message</h3>
                    <p className="text-sm text-muted-foreground">Fill out the form below</p>
                  </div>
                </div>
                
                <form className="space-y-6" action="mailto:ak47mutyala@gmail.com" method="POST" encType="text/plain">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground text-sm font-semibold">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        placeholder="John" 
                        className="bg-muted/30 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground text-sm font-semibold">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        placeholder="Doe" 
                        className="bg-muted/30 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground text-sm font-semibold">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-muted/30 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground text-sm font-semibold">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="Project Inquiry" 
                      className="bg-muted/30 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground text-sm font-semibold">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project..." 
                      rows={5}
                      className="bg-muted/30 border-border rounded-xl resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-xl h-14 text-base font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
