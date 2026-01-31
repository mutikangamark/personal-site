"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/motion/ScrollReveal";

const caseStudies = [
  {
    id: 1,
    slug: "parcelo",
    title: "Parcelo Uganda",
    subtitle: "WhatsApp-Powered International Shopping Platform",
    category: "Full-Stack SaaS",
    description:
      "Built a complete SaaS platform enabling Ugandans to shop internationally through WhatsApp, with MTN Mobile Money integration and real-time parcel tracking.",
    tags: ["Next.js", "Supabase", "WhatsApp API", "MTN MoMo"],
    results: [
      { label: "Timeline", value: "3 Months" },
      { label: "Mobile Users", value: "95%" },
      { label: "Automation", value: "70%" },
    ],
    image: "/projects/parcelo.png",
  },
  {
    id: 2,
    slug: "fuelcore",
    title: "Fuel Core Uganda",
    subtitle: "Professional B2B Website",
    category: "Corporate Website",
    description:
      "Delivered a professional, production-ready website for one of Uganda's largest fuel maintenance companies in under 72 hours.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    results: [
      { label: "Delivery", value: "72 Hours" },
      { label: "Load Time", value: "<2s" },
      { label: "Mobile Ready", value: "100%" },
    ],
    image: "/projects/fuelcore.png",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">My Work</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real projects with real results. Explore how I help Ugandan businesses
              achieve their digital goals through thoughtful design and development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.id} delay={index * 0.1}>
                <Link href={`/case-studies/${study.slug}`}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden group cursor-pointer h-full">
                      <div className="relative aspect-video">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-primary">
                          {study.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-sm text-primary mb-3">{study.subtitle}</p>
                        <p className="text-muted-foreground mb-4">
                          {study.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                          {study.results.map((result) => (
                            <div key={result.label} className="text-center">
                              <p className="text-lg font-bold text-primary">
                                {result.value}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How I Approach Each Project
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every successful project follows a structured yet flexible process.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                desc: "Understanding goals, users, and market context",
              },
              {
                step: "02",
                title: "Design",
                desc: "Creating wireframes and visual designs",
              },
              {
                step: "03",
                title: "Develop",
                desc: "Building with clean, scalable code",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Testing, deployment, and optimization",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center relative"
                >
                  <span className="text-6xl font-bold text-primary/10">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold -mt-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              I'm always excited to work on new and challenging projects. Let's
              create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
