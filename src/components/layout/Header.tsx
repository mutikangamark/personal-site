"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/logo.png"
              alt="Mark Mutikanga Ryan"
              width={550}
              height={550}
              className="h-20 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col">
            <nav className="flex flex-col mt-12 flex-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 text-xl font-medium transition-colors hover:text-primary border-b border-border/50"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="flex flex-col gap-3 pb-8">
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-between text-base"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link href="/pricing">
                  How Does It Work?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-between text-base"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link href="/case-studies">
                  See Previous Work
                  <Layers className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
