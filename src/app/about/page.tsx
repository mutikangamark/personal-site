"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/motion/ScrollReveal";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL"] },
  { category: "Design", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
];

const experience = [
  {
    title: "Technical Co-founder & CTO",
    company: "Parcelo Uganda",
    period: "2023 - Present",
    description: "Built Uganda's first WhatsApp-powered international shopping platform. Architected the complete SaaS solution with MTN Mobile Money integration, WhatsApp Business API, and real-time analytics dashboard.",
  },
  {
    title: "Lead Developer",
    company: "Fuel Core Uganda",
    period: "2026",
    description: "Delivered a professional B2B website for one of Uganda's largest fuel maintenance companies in just 72 hours. Built with Next.js, optimized for mobile sales teams.",
  },

];

const values = [
  {
    title: "Quality First",
    description: "I believe in delivering exceptional work that exceeds expectations.",
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves, and so do I. Always staying ahead of the curve.",
  },
  {
    title: "Clear Communication",
    description: "Transparency and regular updates are key to successful projects.",
  },
  {
    title: "User-Centered",
    description: "Every decision is made with the end user in mind.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                <Image
                  src="/me_2.jpg"
                  alt="Mark Ryan Mutikanga"
                  width={500}
                  height={500}
                  className="relative rounded-2xl object-cover aspect-square shadow-2xl"
                  priority
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Badge className="mb-4">About Me</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, I'm <span className="text-primary">Mutikanga Mark</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate full-stack developer specializing in building digital
                products that solve real problems. From WhatsApp-powered e-commerce platforms
                to rapid-delivery professional websites, I love turning complex challenges
                into elegant solutions.
              </p>
              <p className="text-muted-foreground mb-8">
                As Technical Co-founder at Parcelo Uganda, I built systems that handle real
                money and real users daily. When I'm not coding, you'll find me exploring
                new technologies or figuring out how to make the next project even better.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Kampala, Uganda</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>mutikanga.mark@mmrug.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Available for hire</span>
                </div>
              </div>

              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The tools I use to build production-ready applications.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <StaggerItem key={skillGroup.category}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in the tech industry.
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <ScrollReveal key={exp.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full" />
                  {index !== experience.length - 1 && (
                    <div className="absolute left-1.5 top-3 w-px h-full bg-border" />
                  )}
                  <div className="mb-1">
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and relationships.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Fun Facts</h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p className="text-4xl md:text-5xl font-bold mb-2">72hrs</p>
                <p className="text-primary-foreground/80">Fastest Delivery</p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p className="text-4xl md:text-5xl font-bold mb-2">0</p>
                <p className="text-primary-foreground/80">Payment Failures</p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p className="text-4xl md:text-5xl font-bold mb-2">95%</p>
                <p className="text-primary-foreground/80">Mobile Users</p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
                <p className="text-primary-foreground/80">Dedication</p>
              </motion.div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
}
