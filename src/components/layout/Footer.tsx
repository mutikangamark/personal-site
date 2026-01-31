"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/case-studies", label: "My Work" },
  ],
  social: [
  
    { href: "https://x.com/MarkMutikanga", icon: Twitter, label: "Twitter" },
    { href: "https://www.linkedin.com/in/mutikanga-mark-10639624a/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:mutikanga.mark@mmrug.com", icon: Mail, label: "Email" },
  ],
};

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t bg-muted/30"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Mark Mutikanga Ryan"
                width={120}
                height={48}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Creating exceptional digital experiences through innovative design
              and development.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mark Mutikanga Ryan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
