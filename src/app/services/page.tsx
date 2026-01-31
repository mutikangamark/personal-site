"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  Globe,
  Smartphone,
  Database,
  Zap,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/motion/ScrollReveal";
import { ProcessSection } from "@/components/sections/ProcessSection";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js. Fast, scalable, and maintainable code.",
    features: [
      "Single Page Applications",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "Custom CMS Development",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with users in mind. From wireframes to polished designs.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design Systems",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications that work seamlessly on iOS and Android devices.",
    features: [
      "React Native Apps",
      "Flutter Development",
      "App Store Optimization",
      "Push Notifications",
    ],
  },
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Stunning websites that capture your brand essence and convert visitors into customers.",
    features: [
      "Responsive Design",
      "Landing Pages",
      "Portfolio Websites",
      "Blog Platforms",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Robust server-side solutions with secure APIs and efficient database management.",
    features: [
      "RESTful APIs",
      "GraphQL APIs",
      "Database Design",
      "Cloud Infrastructure",
    ],
  },
  {
    icon: Rocket,
    title: "Digital Strategy",
    description:
      "Strategic consulting to help your business grow and succeed in the digital landscape.",
    features: [
      "Technical Consulting",
      "Performance Optimization",
      "SEO Strategy",
      "Analytics Setup",
    ],
  },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "AWS", "Vercel", "Docker",
  "Figma", "Tailwind CSS", "GraphQL", "Redis", "Prisma",
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What I Can Do <span className="text-primary">For You</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From concept to launch, I offer comprehensive services to help bring
              your digital vision to life. Every project is handled with attention
              to detail and a focus on results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern tools and frameworks to build exceptional digital products.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="text-sm py-2 px-4">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets my work apart from the rest.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Quick turnaround without compromising quality.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  Best practices for security and performance.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Maintainable, well-documented codebase.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">
                  Working with clients worldwide.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/pricing">
                  View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
