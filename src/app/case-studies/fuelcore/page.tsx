"use client";

import { CaseStudyDetail, CaseStudyData } from "@/components/case-study/CaseStudyDetail";

const fuelcoreData: CaseStudyData = {
  slug: "fuelcore",
  badge: "PROFESSIONAL WEBSITE",
  title: "Professional Website ",
  titleHighlight: "Delivered in 72 Hours",
  subtitle: "From Brief to Launch: Focused Execution Under Pressure",
  image: "/projects/fuelcore.png",
  overview: `Fuel Core Uganda, one of Uganda's largest fuel maintenance companies, needed a professional online presence that matched their industry leadership. They required a modern website showcasing products, services, and case studies to B2B clients. Most agencies quote 4-6 weeks. I delivered in under 3 days—without compromising quality.

Did we mention a 72-hour timeline? No problem.`,
  timeline: "",
  challenges: [
    {
      title: "Time Pressure Without Compromising Quality",
      description: "The aggressive 72-hour timeline eliminated room for back-and-forth revisions. Every decision needed to be right the first time. The website had to look professional and represent a company serving Uganda's largest fuel operators."
    },
    {
      title: "Understanding Complex B2B Messaging",
      description: "Fuel maintenance is highly technical, serving fuel stations and industrial clients. The content had to speak credibly to operations managers and procurement officers who know the industry inside out."
    },
    {
      title: "Professional Design That Commands Credibility",
      description: "In B2B sales, credibility is everything. The website needed to look like it belonged to a major industry player—clean, professional, and trustworthy."
    },
    {
      title: "Mobile Responsiveness for Field Teams",
      description: "Fuel Core's sales team presents on tablets during client site visits. The website needed to work flawlessly on mobile devices with fast loading and professional presentation."
    }
  ],
  solutions: [
    {
      title: "Strategic Content Architecture",
      description: "Organized the website around how clients think: products, services, case studies, and credentials. This client-first structure guides visitors naturally toward contacting sales."
    },
    {
      title: "Modern, Professional Design",
      description: "Built with Next.js and Tailwind CSS, creating a clean design that commands B2B credibility. High-quality photography and consistent branding maintain visual professionalism throughout."
    },
    {
      title: "Performance Optimization",
      description: "Used static generation, image optimization, and code splitting. Pages load in under 2 seconds even on 3G networks—critical for maintaining professionalism."
    },
    {
      title: "Mobile-First Responsive Design",
      description: "Designed for mobile first, then scaled up. Sales teams can present confidently on tablets during site visits with the same professional experience."
    }
  ],
  results: [
    {
      title: "Mission Critical Deadline Met",
      description: "Fuel Core used the website in their important client meeting as planned. The professional presence reinforced their positioning as an industry leader."
    },
    {
      title: "Professional Presentation",
      description: "The website looks like it belongs to a major industry player. Potential clients see a company that invests in quality and maintains professional standards."
    },
    {
      title: "Rapid Turnaround",
      description: "The 72-hour delivery proved that speed and quality aren't mutually exclusive. Fuel Core received a website that typically takes 4-6 weeks—in under 3 days."
    }
  ],
  techStack: [
    { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { category: "Hosting", items: ["Vercel (CDN, automatic SSL)"] },
    { category: "Performance", items: ["Static generation", "image optimization"] },
    { category: "Analytics", items: ["Vercel Analytics"] }
  ],
  features: [
    "Homepage with company overview",
    "Products showcase with categories",
    "Detailed services pages",
    "Case studies section",
    "Contact page with inquiry forms",
    "Mobile-responsive design",
    "Fast loading (<2s on 3G)",
    "SEO optimization"
  ],
  capabilities: [
    {
      title: "Rapid Execution Under Pressure",
      description: "Delivering production-ready work in 72 hours requires exceptional focus. Most developers need weeks to deliver what I shipped in three days."
    },
    {
      title: "Quality Without Compromise",
      description: "Fast doesn't mean sloppy. Despite the aggressive timeline, the website demonstrates professional polish and attention to detail throughout."
    },
    {
      title: "B2B Understanding",
      description: "Understanding how B2B buying decisions work informed every design choice. The website speaks to procurement managers and guides them toward next steps."
    },
    {
      title: "Technical Proficiency",
      description: "Deep proficiency with Next.js, React, and Tailwind CSS means I focus on building features, not debugging basics."
    }
  ],
  ctaText: "Need a professional website delivered quickly without compromising quality? Let's talk."
};

export default function FuelcoreCaseStudyPage() {
  return <CaseStudyDetail data={fuelcoreData} />;
}
