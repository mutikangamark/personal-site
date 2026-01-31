"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Smartphone,
  CreditCard,
  Zap,
  MessageSquare,
  Shield,
  Check,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/motion/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const highlights = [
  "Fast Turnaround",
  "Attention to Detail",
  "Project-Based Retainer",
  "Uganda-Focused Solutions",
];

const services = [
  {
    icon: Globe,
    title: "Professional Websites",
    description:
      "Modern, fast-loading websites that convert visitors into customers. Perfect for service companies and B2B businesses.",
  },
  {
    icon: Smartphone,
    title: "SaaS Applications",
    description:
      "Full-stack platforms with payment integration, user management, and analytics. Systems handling real money and real users.",
  },
  {
    icon: CreditCard,
    title: "Mobile Money Integration",
    description:
      "Seamless MTN Mobile Money, Airtel Money, and Pesapal integration. Essential for serving Ugandan customers.",
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "Real-Time Communication",
    description:
      "Direct access via WhatsApp, email, and project management tools. Track progress and get quick responses.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Recent project completed in under 3 days. Systematic process eliminates delays while maintaining quality.",
  },
  {
    icon: Shield,
    title: "Enterprise-Level Quality",
    description:
      "Built production systems handling real transactions. Code that scales with your business.",
  },
];

const technologies = [
  { name: "Supabase", logo: "/partners/supabase.png" },
  { name: "OpenAI", logo: "/partners/OpenAI-Logo-2022.png" },
  { name: "Claude AI", logo: "/partners/Claude_logo.png.webp" },
  { name: "MTN Mobile Money", logo: "/partners/mtn_momo.jpg" },
  { name: "Airtel Money", logo: "/partners/airtel.png.webp" },
  { name: "Pesapal", logo: "/partners/pesapal-logo.png" },
];

const projects = [
  {
    title: "Fuel Core Uganda",
    category: "Professional Website",
    description:
      "Built a comprehensive marketing website for one of Uganda's largest fuel maintenance companies.",
    timeline: "Less than 3 days",
    stack: ["Next.js", "React", "Modern UI/UX"],
    image: "/projects/fuelcore.png",
  },
  {
    title: "Parcelo Uganda",
    category: "Full-Stack SaaS Platform",
    description:
      "Complete international shopping and delivery platform enabling Ugandans to purchase products from US, UK, China, and Dubai.",
    timeline: "Production Ready",
    stack: ["Next.js", "Supabase", "MTN Mobile Money", "WhatsApp API"],
    image: "/projects/parcelo.png",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="flex flex-col">
      {/* Hero Section with About Me */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                <Image
                  src="/me.jpg"
                  alt="Mark Ryan Mutikanga"
                  width={500}
                  height={500}
                  className="relative rounded-2xl object-cover aspect-square shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
               
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Your Technical Partner for{" "}
                <span className="text-primary">Uganda's Growing Businesses</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-6"
              >
                Professional web development and SaaS solutions. I bring enterprise-level
                technical expertise to help Ugandan businesses scale through custom software,
                from marketing websites to full-stack applications with mobile money integration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {highlights.map((item) => (
                  <Badge key={item} variant="outline" className="py-1.5 px-3">
                    {item}
                  </Badge>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild>
                  <Link href="/case-studies">
                    See Previous Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">How Does It Work?</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">My Partners</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={180}
                    height={60}
                    className="h-12 md:h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bento Grid - What I Build & Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              I Build Products Your Customers Will Love
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From mobile money integration to understanding local user behavior, I've built
              systems that work in Uganda's mobile-first economy.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
              {/* Professional Websites */}
              <BentoGridItem
                title="Professional Websites"
                description="Modern, fast-loading websites that convert visitors into customers. Perfect for service companies and B2B businesses."
                header={
                  <motion.div
                    initial="initial"
                    whileHover="animate"
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-neutral-900 flex-col space-y-2 p-4 overflow-hidden"
                  >
                    <motion.div
                      variants={{ initial: { y: 0 }, animate: { y: -5, transition: { duration: 0.2 } } }}
                      className="rounded-lg border border-neutral-700 bg-neutral-800 p-3"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-xs text-neutral-500 ml-2">mywebsite.com</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-3/4 bg-neutral-700 rounded" />
                        <div className="h-2 w-full bg-neutral-700/50 rounded" />
                        <div className="h-2 w-2/3 bg-neutral-700/50 rounded" />
                      </div>
                    </motion.div>
                  </motion.div>
                }
                className="md:col-span-1"
                icon={<Globe className="h-4 w-4 text-muted-foreground" />}
              />

              {/* SaaS Applications - Wide */}
              <BentoGridItem
                title="Full-Stack SaaS Platforms"
                description="Complete platforms with payment integration, user management, and analytics. Systems handling real money and real users."
                header={
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-neutral-900 flex-row space-x-2 p-4 items-center justify-center"
                  >
                    <motion.div
                      variants={{ initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } }}
                      className="w-1/3 rounded-xl bg-neutral-800 p-3 border border-neutral-700 flex flex-col items-center justify-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
                        <Check className="w-5 h-5 text-emerald-500" />
                      </div>
                      <span className="text-xs text-neutral-400">Verified</span>
                      <span className="text-xs text-emerald-500 mt-1 px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/30">Active</span>
                    </motion.div>
                    <motion.div className="relative z-20 w-1/3 rounded-xl bg-neutral-800 p-3 border border-blue-500/50 flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                        <Shield className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-xs text-neutral-400">Payment</span>
                      <span className="text-xs text-blue-400 mt-1 px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/30">Secured</span>
                    </motion.div>
                    <motion.div
                      variants={{ initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } }}
                      className="w-1/3 rounded-xl bg-neutral-800 p-3 border border-neutral-700 flex flex-col items-center justify-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mb-2">
                        <Users className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="text-xs text-neutral-400">Users</span>
                      <span className="text-xs text-amber-500 mt-1 px-2 py-0.5 bg-amber-500/10 rounded-full border border-amber-500/30">1,200+</span>
                    </motion.div>
                  </motion.div>
                }
                className="md:col-span-2"
                icon={<Smartphone className="h-4 w-4 text-muted-foreground" />}
              />

              {/* Mobile Money - Wide */}
              <BentoGridItem
                title="Mobile Money Integration"
                description="Seamless MTN Mobile Money, Airtel Money, and Pesapal integration. Essential for serving Ugandan customers."
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-muted/30 p-4 items-center justify-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <Image src="/partners/mtn_momo.jpg" alt="MTN Mobile Money" width={60} height={60} className="rounded-lg grayscale hover:grayscale-0 transition-all" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <Image src="/partners/airtel.png.webp" alt="Airtel Money" width={60} height={60} className="rounded-lg object-contain grayscale hover:grayscale-0 transition-all" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <Image src="/partners/pesapal-logo.png" alt="Pesapal" width={60} height={60} className="rounded-lg object-contain grayscale hover:grayscale-0 transition-all" />
                    </motion.div>
                  </div>
                }
                className="md:col-span-2"
                icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
              />

              {/* Fast Execution */}
              <BentoGridItem
                title="Fast Execution"
                description="Recent project completed in under 3 days. Systematic process eliminates delays while maintaining quality."
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-neutral-900 flex-col p-4 justify-center">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-400">Development Progress</span>
                        <span className="text-primary font-bold">3 DAYS</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-neutral-500 w-16">Day 1</span>
                          <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                          <Check className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-neutral-500 w-16">Day 2</span>
                          <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                          <Check className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-neutral-500 w-16">Day 3</span>
                          <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.8 }}
                              className="h-full bg-emerald-500 rounded-full"
                            />
                          </div>
                          <Check className="w-4 h-4 text-emerald-500" />
                        </div>
                      </div>
                      <p className="text-xs text-emerald-500 text-center mt-2">✓ Deployed to Production</p>
                    </div>
                  </div>
                }
                className="md:col-span-1"
                icon={<Zap className="h-4 w-4 text-muted-foreground" />}
              />
            </BentoGrid>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-12" delay={0.3}>
            <Button variant="outline" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Previous Work */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Previous Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real projects, real results. Here's what I've built for Ugandan businesses.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} direction={index === 0 ? "left" : "right"}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Card className="overflow-hidden h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">{project.category}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span>Timeline: {project.timeline}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12" delay={0.3}>
            <Button asChild>
              <Link href="/case-studies">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Technical Partner Who Gets Uganda
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need a professional website or a full SaaS platform, you get
              expertise from someone who's already solved the challenges you're facing.
            </p>
          </ScrollReveal>

          {/* Mobile View - Cards */}
          <div className="md:hidden space-y-4 max-w-md mx-auto">
            {[
              { label: "Pricing", freelancer: "Varies wildly", agency: "Project quotes", mark: "Fixed retainer options" },
              { label: "Communication", freelancer: "Hit or miss", agency: "Account managers", mark: "Direct with developer" },
              { label: "Uganda Expertise", freelancer: "❌", agency: "❌", mark: "✅ Mobile money, local context", highlight: true },
              { label: "Speed", freelancer: "Slow revisions", agency: "Meetings overhead", mark: "3-day turnarounds" },
              { label: "Technical Depth", freelancer: "Basic skills", agency: "Junior devs", mark: "Enterprise-level" },
            ].map((row, idx) => (
              <ScrollReveal key={row.label} delay={idx * 0.05}>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-3 text-lg">{row.label}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Freelancer</span>
                        <span className="text-muted-foreground">{row.freelancer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Agency</span>
                        <span className="text-muted-foreground">{row.agency}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-medium text-primary">Mark</span>
                        <span className={`font-medium ${row.highlight ? "text-primary" : ""}`}>{row.mark}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Desktop View - Table */}
          <ScrollReveal className="hidden md:block">
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold"></th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">
                        Freelancer Marketplace
                      </th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">
                        Traditional Agency
                      </th>
                      <th className="text-center p-4 font-semibold text-primary">
                        Mark
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Pricing</td>
                      <td className="p-4 text-center text-muted-foreground">Varies wildly</td>
                      <td className="p-4 text-center text-muted-foreground">Project quotes</td>
                      <td className="p-4 text-center font-medium">Fixed retainer options</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Communication</td>
                      <td className="p-4 text-center text-muted-foreground">Hit or miss</td>
                      <td className="p-4 text-center text-muted-foreground">Account managers</td>
                      <td className="p-4 text-center font-medium">Direct with developer</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Uganda Expertise</td>
                      <td className="p-4 text-center text-muted-foreground">❌</td>
                      <td className="p-4 text-center text-muted-foreground">❌</td>
                      <td className="p-4 text-center text-primary">✅ Mobile money, local context</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Speed</td>
                      <td className="p-4 text-center text-muted-foreground">Slow revisions</td>
                      <td className="p-4 text-center text-muted-foreground">Meetings overhead</td>
                      <td className="p-4 text-center font-medium">3-day turnarounds possible</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Technical Depth</td>
                      <td className="p-4 text-center text-muted-foreground">Basic skills</td>
                      <td className="p-4 text-center text-muted-foreground">Junior devs</td>
                      <td className="p-4 text-center font-medium">Enterprise-level systems</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Whether you need a professional website in 3 days or a full SaaS platform
              over 3 months, I bring the technical expertise and business understanding
              to deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Call
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
