"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2025
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert"
          >
            <h2>Introduction</h2>
            <p>
              Mutikanga Mark Ryan ("I", "me", or "my") respects your privacy and is committed
              to protecting your personal data. This privacy policy explains how I collect,
              use, and safeguard your information when you visit my website or engage my services.
            </p>

            <h2>Information I Collect</h2>
            <h3>Information You Provide</h3>
            <p>When you contact me or use my services, I may collect:</p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Company or business name</li>
              <li>Project requirements and specifications</li>
              <li>Payment and billing information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit my website, I may automatically collect:</p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website or source</li>
            </ul>

            <h2>How I Use Your Information</h2>
            <p>I use the information I collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate about projects, updates, and deliverables</li>
              <li>Process payments and manage billing</li>
              <li>Improve my website and services</li>
              <li>Send relevant updates about my services (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              I do not sell, trade, or rent your personal information to third parties.
              I may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist in delivering my services (hosting, payment processing)</li>
              <li>When required by law or to protect my legal rights</li>
              <li>With your explicit consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              I implement appropriate technical and organizational measures to protect your
              personal data against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data I hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              My website may use cookies and similar technologies to enhance your browsing
              experience and analyze website traffic. You can control cookie settings through
              your browser preferences.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              My website may contain links to third-party websites. I am not responsible for
              the privacy practices of these external sites. I encourage you to review their
              privacy policies.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              I may update this privacy policy from time to time. Any changes will be posted
              on this page with an updated revision date. Continued use of my website after
              changes constitutes acceptance of the updated policy.
            </p>

            <h2>Contact Me</h2>
            <p>
              If you have any questions about this privacy policy or how I handle your data,
              please contact me at:
            </p>
            <ul>
              <li>Email: mutikanga.mark@mmrug.com</li>
              <li>Location: Kampala, Uganda</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
