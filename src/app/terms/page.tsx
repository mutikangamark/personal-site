"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Terms of Service
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
            <h2>Agreement to Terms</h2>
            <p>
              By engaging Mutikanga Mark Ryan ("I", "me", or "my") for web development,
              design, or consulting services, you ("Client", "you", or "your") agree
              to be bound by these Terms of Service. Please read them carefully before
              proceeding with any project.
            </p>

            <h2>Services</h2>
            <p>
              I provide web development, design, and digital consulting services as
              described on my website and in individual project proposals. The specific
              scope, deliverables, timeline, and pricing for each project will be outlined
              in a separate project agreement or proposal.
            </p>

            <h2>Project Process</h2>
            <h3>Proposals and Agreements</h3>
            <p>
              Before starting any project, I will provide a detailed proposal outlining
              the scope of work, timeline, and pricing. Work begins only after you accept
              the proposal and provide the required deposit payment.
            </p>

            <h3>Revisions</h3>
            <p>
              Each project includes a specified number of revision rounds as outlined in
              your project agreement. Additional revisions beyond the agreed scope may
              incur extra charges at my standard hourly rate.
            </p>

            <h3>Client Responsibilities</h3>
            <p>To ensure successful project delivery, you agree to:</p>
            <ul>
              <li>Provide all required content, assets, and information in a timely manner</li>
              <li>Respond to communications and feedback requests promptly</li>
              <li>Provide clear and consolidated feedback during revision rounds</li>
              <li>Make payments according to the agreed schedule</li>
            </ul>

            <h2>Payment Terms</h2>
            <h3>Deposits</h3>
            <p>
              A deposit is required before work begins. The deposit amount varies based
              on project size and is non-refundable once work has commenced.
            </p>

            <h3>Payment Schedule</h3>
            <p>Payment structures typically follow these guidelines:</p>
            <ul>
              <li>Projects under $10,000: 50% deposit, 50% on completion</li>
              <li>Projects $10,000-$25,000: 40% deposit, 30% at design approval, 30% on delivery</li>
              <li>Projects over $25,000: 30% deposit, milestone payments, 20% on delivery</li>
            </ul>

            <h3>Late Payments</h3>
            <p>
              Invoices are due within 14 days of receipt unless otherwise agreed. Late
              payments may result in project delays or suspension of services.
            </p>

            <h2>Intellectual Property</h2>
            <h3>Ownership</h3>
            <p>
              Upon receipt of full payment, you will own all rights to the final
              deliverables created specifically for your project. I retain the right
              to use the work in my portfolio and for promotional purposes.
            </p>

            <h3>Third-Party Assets</h3>
            <p>
              If your project includes third-party assets (fonts, images, plugins),
              you are responsible for obtaining appropriate licenses. I will advise
              on licensing requirements but cannot be held liable for unlicensed use.
            </p>

            <h3>Pre-Existing Work</h3>
            <p>
              Any frameworks, code libraries, or tools I have developed prior to your
              project remain my intellectual property. You receive a license to use
              these components within your project.
            </p>

            <h2>Warranties and Liability</h2>
            <h3>Warranty Period</h3>
            <p>
              All projects include a post-launch support period (30-60 days depending
              on the package) during which I will fix bugs and issues at no additional
              cost. This does not include changes to scope or new feature requests.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              I strive to deliver high-quality work but cannot guarantee specific
              business outcomes (increased sales, traffic, etc.). My liability is
              limited to the amount paid for the services in question.
            </p>

            <h3>Indemnification</h3>
            <p>
              You agree to indemnify and hold me harmless from any claims arising
              from your use of the deliverables, including content you provide.
            </p>

            <h2>Project Delays and Cancellation</h2>
            <h3>Delays</h3>
            <p>
              If you fail to provide required materials or feedback within reasonable
              timeframes, the project timeline may be extended. Extended delays (over
              30 days) may require project re-scheduling and additional fees.
            </p>

            <h3>Cancellation</h3>
            <p>
              Either party may terminate a project with written notice. If you cancel:
            </p>
            <ul>
              <li>Before work begins: Full refund minus any administrative fees</li>
              <li>During the project: Payment for work completed to date</li>
              <li>Deposits are non-refundable once work has commenced</li>
            </ul>

            <h2>Confidentiality</h2>
            <p>
              I agree to keep confidential any proprietary information you share during
              our engagement. This includes business strategies, technical specifications,
              and unpublished content. This obligation survives the termination of our
              agreement.
            </p>

            <h2>Force Majeure</h2>
            <p>
              Neither party shall be liable for delays caused by circumstances beyond
              reasonable control, including natural disasters, internet outages, or
              other unforeseen events.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our engagement will first be
              addressed through good-faith negotiation. If unresolved, disputes will
              be subject to the laws of Uganda.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              I reserve the right to update these terms at any time. Changes will be
              posted on this page. Existing projects will continue under the terms
              agreed at the time of engagement.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about these terms, please contact me at:
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
