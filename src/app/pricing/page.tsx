"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/motion/ScrollReveal";

const pricingPlans = [
  {
    name: "Starter Website",
    emoji: "🚀",
    description: "Perfect for small businesses and professional portfolios",
    price: "$1,500",
    period: "starting at",
    popular: false,
    features: [
      { text: "5-7 page responsive website", included: true },

      { text: "Basic SEO & meta tags setup", included: true },
      { text: "Contact form with email notifications", included: true },
      { text: "2 design revision rounds", included: true },
      { text: "5-7 business days delivery", included: true },
      { text: "Google PageSpeed optimization", included: true },
      { text: "Domain & hosting setup guidance", included: true },
      { text: "Content management system", included: false },
      { text: "E-commerce functionality", included: false },
      { text: "Custom animations & interactions", included: false },
    ],
  },
  {
    name: "Professional Website",
    emoji: "⭐",
    description: "Comprehensive solution for established businesses",
    price: "$2,500",
    period: "starting at",
    popular: true,
    features: [
      { text: "Up to 10 pages with custom design", included: true },
      { text: "Advanced responsive design", included: true },
      { text: "Comprehensive SEO optimization", included: true },
      { text: "Multiple contact forms & integrations", included: true },
      { text: "5 design revision rounds", included: true },
      { text: "2-3 weeks delivery timeline", included: true },
      { text: "WordPress/Strapi CMS integration", included: true },
      { text: "Custom animations & micro-interactions", included: true },
      { text: "Analytics setup", included: true },
      { text: "30 days post-launch support", included: true },
    ],
    addons: [
      "E-commerce integration: +$3,000-5,000",
      "Mobile money payments: +$3,000-6,000",
    ],
  },
  {
    name: "Enterprise Solution",
    emoji: "💼",
    description: "Custom web applications and SaaS platforms",
    price: "$5,000",
    period: "starting at",
    popular: false,
    features: [
      { text: "Unlimited pages & sections", included: true },
      { text: "Fully custom responsive design", included: true },
      { text: "Technical SEO & schema markup", included: true },
      { text: "Payment gateway & API integrations", included: true },
      { text: "Unlimited revisions within scope", included: true },
      { text: "6-12 weeks (phased delivery)", included: true },
      { text: "Custom admin dashboard", included: true },
      { text: "Advanced animations & interactions", included: true },
      { text: "E-commerce platform setup", included: true },
      { text: "Real-time features & notifications", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "60 days post-launch support", included: true },
      { text: "Documentation & team training", included: true },
    ],
    examples: [
      "SaaS MVP: $25,000-50,000",
      "E-commerce Marketplace: $20,000-40,000",
      "Custom Web Application: $35,000-75,000+",
    ],
  },
];

const retainers = [
  {
    name: "Maintenance Retainer",
    price: "$1,000/month",
    hours: "10 hours/month",
    features: ["Security updates & bug fixes", "Content updates & changes", "Performance monitoring", "Monthly performance reports"],
  },
  {
    name: "Development Retainer",
    price: "$1,200/month",
    hours: "20 hours/month",
    features: ["New feature development", "Ongoing website improvements", "Priority technical support", "Bi-weekly progress updates"],
  },
  {
    name: "Full-Service Retainer",
    price: "$1,750/month",
    hours: "40 hours/month",
    features: ["Dedicated development resources", "Continuous feature development", "Comprehensive maintenance", "Strategic technical consulting"],
  },
];

const faqs = [
  {
    question: "What is the typical project timeline?",
    answer:
      "Starter websites: 5-7 business days. Professional websites: 2-3 weeks. Enterprise solutions: 6-12 weeks with phased delivery. Rush delivery available with premium pricing (50% additional fee for 3-day turnaround).",
  },
  {
    question: "How are payments structured?",
    answer:
      "Projects under $10,000: 50% deposit, 50% on completion. Projects $10,000-$25,000: 40% deposit, 30% at design approval, 30% final payment. Projects over $25,000: 30% deposit, milestone payments, 20% on delivery. Retainers billed monthly in advance.",
  },
  {
    question: "What ongoing support do you provide?",
    answer:
      "Yes! Basic Maintenance: $150-300/month (security, updates, minor changes). Premium Maintenance: $300-600/month (development hours included). Hourly Support: $75-100/hour (as-needed). All projects include 30-60 days post-launch support based on package level.",
  },
  {
    question: "Can I manage my website content?",
    answer:
      "Absolutely! Professional and Enterprise packages include CMS integration allowing you to update content, images, blog posts, product information, and team profiles. I provide comprehensive training and documentation for your team.",
  },
  {
    question: "What about changes after project completion?",
    answer:
      "During warranty period (30-60 days): Bug fixes and content updates are complimentary. Post-warranty: Minor changes at hourly rates ($75-100/hr), major changes quoted as separate projects, or ongoing updates through monthly retainer packages.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! Based in Kampala, Uganda, I serve clients across East Africa and globally. Advantages include competitive rates compared to US/European developers, fluent English communication, East African timezone (EAT/UTC+3), and flexible payment options including mobile money and international transfers.",
  },
  {
    question: "How does your pricing compare to others?",
    answer:
      "Enterprise-level quality at accessible rates.  production-ready code (Parcelo processes real transactions), proven rapid delivery (Fuel Core in under 3 days), and deep Uganda market expertise. My rate: $75-100/hour versus US developers at $100-200/hour.",
  },
  {
    question: "Is expedited delivery available?",
    answer:
      "Yes! Fast-Track (2 weeks): +30% fee. Express (1 week): +50% fee. Emergency (3 days): +75% fee. Available for websites only, not complex applications. Limited to 2 rush projects monthly to maintain quality standards.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "East Africa: Mobile Money (MTN, Airtel), Bank transfers. International: PayPal, Wise/TransferWise (recommended for lower fees), Bank wire transfers, Cryptocurrency options available.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "Yes! Client referrals (10% off), Non-profit organizations (15-25% off), Long-term retainers (10-15% off for 6+ month commitments), Multiple projects (10-15% off). Quality work deserves fair pricing, but I believe in building long-term relationships.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Pricing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the package that fits your needs. All prices are starting points
              and can be customized based on your specific requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card
                    className={`h-full relative ${
                      plan.popular
                        ? "border-primary shadow-lg shadow-primary/10"
                        : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="pt-4">
                        <span className="text-sm text-muted-foreground">
                          {plan.period}
                        </span>
                        <p className="text-4xl font-bold">{plan.price}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature) => (
                          <li
                            key={feature.text}
                            className="flex items-center gap-2"
                          >
                            {feature.included ? (
                              <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground/40 flex-shrink-0" />
                            )}
                            <span
                              className={
                                feature.included
                                  ? ""
                                  : "text-muted-foreground/60"
                              }
                            >
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Retainers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Retainers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For ongoing support and active projects. Retainers provide discounted rates and priority scheduling.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-bold">Retainer Type</TableHead>
                      <TableHead className="text-center font-bold">Hours/Month</TableHead>
                      <TableHead className="text-right font-bold">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {retainers.map((retainer) => (
                      <TableRow key={retainer.name}>
                        <TableCell>
                          <div>
                            <p className="font-semibold">{retainer.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {retainer.features.slice(0, 2).join(" • ")}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">{retainer.hours}</TableCell>
                        <TableCell className="text-right font-bold text-primary">{retainer.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                  Every project is unique. If your needs don't fit into these packages,
                  let's discuss a custom solution tailored specifically for you.
                </p>
                <p className="text-lg font-semibold mb-6">
                  Hourly Rate for Custom Work: <span className="text-primary">$75-100/hour</span>
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Perfect for: Technical consulting, code reviews, emergency fixes, ongoing support, small updates
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Got questions? I've got answers.
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </ScrollReveal>
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
              Let's discuss your project and find the right solution for your needs.
            </p>
            <p className="text-primary-foreground/60 text-sm mb-8">
              Prices shown in USD. Local clients can pay in UGX at current exchange rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/case-studies">View My Work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
