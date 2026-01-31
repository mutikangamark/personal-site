"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export interface ChallengeItem {
  title: string;
  description: string;
}

export interface SolutionItem {
  title: string;
  description: string;
}

export interface ResultItem {
  title: string;
  description: string;
}

export interface TechStack {
  category: string;
  items: string[];
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface CaseStudyData {
  slug: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  image: string;
  overview: string;
  timeline: string;
  challenges: ChallengeItem[];
  solutions: SolutionItem[];
  results: ResultItem[];
  techStack: TechStack[];
  features: string[];
  capabilities: CapabilityItem[];
  ctaText: string;
}

interface CaseStudyDetailProps {
  data: CaseStudyData;
}

export function CaseStudyDetail({ data }: CaseStudyDetailProps) {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section with ContainerScroll */}
      <section className="bg-white text-black">
        <ContainerScroll
          titleComponent={
            <>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                {data.badge}
              </Badge>
              <h1 className="text-4xl font-semibold text-black">
                {data.title.split(data.titleHighlight)[0]}
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary">
                  {data.titleHighlight}
                </span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto mt-4">
                {data.subtitle}
              </p>
            </>
          }
        >
          <img
            src={data.image}
            alt={data.title}
            height={720}
            width={1400}
            className="mx-auto rounded-lg md:rounded-2xl object-contain h-full w-full"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Project Overview</h2>
              <p className="text-lg text-neutral-700 leading-relaxed whitespace-pre-line">
                {data.overview}
              </p>
              <p className="text-neutral-500 mt-6 italic">
                {data.timeline}
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <Button variant="outline" asChild>
                  <Link href="/case-studies">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go Back
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">
                    View More
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-neutral-50 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">The Challenge</h2>
              <p className="text-lg text-neutral-700 mb-8">
                {data.challenges[0]?.description.split('\n')[0]}
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {data.challenges.map((challenge, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Solutions</h2>
            </ScrollReveal>

            <div className="space-y-8">
              {data.solutions.map((solution, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-neutral-50 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Results & Impact</h2>
            </ScrollReveal>

            <div className="space-y-8">
              {data.results.map((result, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {result.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Highlights</h2>
            </ScrollReveal>

            {/* Tech Stack */}
            <ScrollReveal>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Stack:</h3>
                <div className="space-y-3">
                  {data.techStack.map((stack, index) => (
                    <div key={index} className="flex flex-wrap gap-2">
                      <span className="font-semibold text-black">{stack.category}:</span>
                      <span className="text-neutral-600">{stack.items.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Features Checklist */}
            <ScrollReveal>
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Features Delivered:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {data.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: false }}
                      className="flex items-start gap-2"
                    >
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why This Showcases My Capabilities */}
      <section className="py-20 bg-neutral-50 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Why This Project Showcases My Capabilities
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {data.capabilities.map((capability, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {index + 1}. {capability.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white text-black">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-center text-neutral-400 italic">
              Not all pages and features are displayed here
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {data.ctaText}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/case-studies">View Other Projects</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
