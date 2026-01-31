"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const processSteps = [
  {
    step: "01",
    badge: "Discovery",
    title: "Understanding Your Vision",
    description: (
      <>
        <p>
          Every successful project starts with a deep understanding of your goals,
          audience, and challenges. I take time to listen and ask the right questions.
        </p>
        <p>
          During this phase, we'll explore your business objectives, target users,
          competitors, and the unique value you want to deliver. This foundation
          ensures every decision we make is aligned with your success.
        </p>
      </>
    ),
    image: "/my_process/1_vision.jpg",
  },
  {
    step: "02",
    badge: "Planning",
    title: "Mapping the Journey",
    description: (
      <>
        <p>
          With a clear understanding of your needs, I create a detailed roadmap
          that outlines every milestone, deliverable, and timeline. No surprises,
          just clear expectations.
        </p>
        <p>
          This includes technical architecture decisions, feature prioritization,
          and resource planning. You'll know exactly what to expect and when.
        </p>
      </>
    ),
    image: "/my_process/2_journey.jpg",
  },
  {
    step: "03",
    badge: "Design",
    title: "Crafting the Experience",
    description: (
      <>
        <p>
          Beautiful design is more than aesthetics - it's about creating intuitive
          experiences that delight users and drive results. Every pixel serves a purpose.
        </p>
        <p>
          From wireframes to high-fidelity mockups, I iterate closely with you
          to ensure the design captures your brand essence while maximizing usability.
        </p>
      </>
    ),
    image: "/my_process/3_experience.png",
  },
  {
    step: "04",
    badge: "Development",
    title: "Building with Precision",
    description: (
      <>
        <p>
          This is where your vision comes to life. Using modern technologies and
          best practices, I write clean, maintainable code that scales with your business.
        </p>
        <p>
          Regular updates and demos keep you involved throughout the process.
          You'll see progress in real-time and can provide feedback at every stage.
        </p>
      </>
    ),
    image: "/my_process/4_precision.jpg",
  },
  {
    step: "05",
    badge: "Testing",
    title: "Ensuring Excellence",
    description: (
      <>
        <p>
          Quality isn't optional. Every feature undergoes rigorous testing across
          devices and browsers to ensure a flawless experience for your users.
        </p>
        <p>
          Performance optimization, security audits, and accessibility checks
          are all part of the process. Your product will be fast, secure, and inclusive.
        </p>
      </>
    ),
    image: "/my_process/5_excellence.jpg",
  },
  {
    step: "06",
    badge: "Launch",
    title: "Going Live & Beyond",
    description: (
      <>
        <p>
          Launch day is just the beginning. I handle the deployment, monitor
          performance, and ensure everything runs smoothly from day one.
        </p>
        <p>
          Post-launch support means I'm here when you need me - whether it's
          fixing issues, adding features, or scaling your solution as you grow.
        </p>
      </>
    ),
    image: "/my_process/6_scaling.jpg",
  },
];

export function ProcessSection() {
  return (
    <section className="py-12 md:py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <ScrollReveal className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">My Process</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A proven workflow that ensures successful project delivery every time.
            From discovery to launch, here's how we'll work together.
          </p>
        </ScrollReveal>

        <TracingBeam className="pl-6 pr-2 sm:px-6 md:px-8">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative pl-2 sm:pl-4">
            {processSteps.map((item, index) => (
              <motion.div
                key={`process-${index}`}
                className="mb-12 sm:mb-16 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Step number and badge */}
                <motion.div
                  className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <Badge className="bg-primary text-primary-foreground text-xs sm:text-sm">
                    {item.badge}
                  </Badge>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>

                {/* Content */}
                <motion.div
                  className="text-sm sm:text-base text-muted-foreground prose prose-sm dark:prose-invert space-y-3 sm:space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.div>

                {/* Process Image */}
                <motion.div
                  className="mt-4 sm:mt-6 rounded-lg overflow-hidden bg-muted aspect-video relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover transition-transform duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
