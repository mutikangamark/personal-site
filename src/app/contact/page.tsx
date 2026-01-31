"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BusinessLeadForm } from "@/components/forms/BusinessLeadForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mutikanga.mark@mmrug.com",
    href: "mailto:mutikanga.mark@mmrug.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+256 XXX XXX XXX",
    href: "tel:+256XXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kampala, Uganda",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-primary">Work Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? I'd love to hear about it. Fill out the form
              below and I'll get back to you within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <ScrollReveal direction="left" className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Prefer to reach out directly? Here's how you can contact me.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <BusinessLeadForm />
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prefer a Quick Chat?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Sometimes it's easier to talk things through. Schedule a 15-minute
              call to discuss your project.
            </p>
            <Button size="lg" variant="secondary">
              Schedule a Call
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
