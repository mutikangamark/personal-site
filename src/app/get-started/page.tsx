"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BusinessLeadForm } from "@/components/forms/BusinessLeadForm";
import { CheckCircle2, Clock, Zap, Shield, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get a response within 24 hours",
  },
  {
    icon: Zap,
    title: "Free Consultation",
    description: "No-obligation discovery call",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "Clear quotes with no hidden fees",
  },
  {
    icon: MessageSquare,
    title: "Local Support",
    description: "Uganda-based, understands your market",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Submit Your Details",
    description: "Fill out the form with your business information and project requirements",
  },
  {
    step: 2,
    title: "Discovery Call",
    description: "We'll schedule a call to understand your needs in detail",
  },
  {
    step: 3,
    title: "Custom Proposal",
    description: "Receive a tailored proposal with timeline and transparent pricing",
  },
  {
    step: 4,
    title: "Start Building",
    description: "Once approved, we begin bringing your vision to life",
  },
];

export default function GetStartedPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4" variant="outline">
              Get Started
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Your <span className="text-primary">Digital Solution</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your business and project needs. We'll get back to you within 24 hours with a personalized response.
            </p>
          </ScrollReveal>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {benefits.map((benefit) => (
              <ScrollReveal key={benefit.title}>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Sidebar */}
            <ScrollReveal direction="left" className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Our Process</h2>
                    <div className="space-y-4">
                      {processSteps.map((item) => (
                        <div key={item.step} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="font-medium text-sm">{item.title}</h3>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3">What Our Clients Say</h3>
                    <blockquote className="text-sm italic opacity-90 mb-3">
                      "Working with MMR Consultancy transformed our business operations. 
                      The mobile money integration they built increased our sales by 40%."
                    </blockquote>
                    <p className="text-xs opacity-75">
                      — Happy Client, Kampala Business
                    </p>
                  </CardContent>
                </Card>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>10+ years of software development experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Deep understanding of the Ugandan market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Mobile Money & local payment integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Ongoing support and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <BusinessLeadForm />
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by businesses across Uganda
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold">Your Business</span>
              <span className="text-lg font-semibold">Could Be Here</span>
              <span className="text-lg font-semibold">Join Us Today</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
