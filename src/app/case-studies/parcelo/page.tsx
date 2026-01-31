"use client";

import { CaseStudyDetail, CaseStudyData } from "@/components/case-study/CaseStudyDetail";

const parceloData: CaseStudyData = {
  slug: "parcelo",
  badge: "FULL-STACK SAAS PLATFORM",
  title: "Building Uganda's First ",
  titleHighlight: "WhatsApp-Powered Shopping Platform",
  subtitle: "From Concept to Live Transactions in 3 Months",
  image: "/projects/parcelo.png",
  overview: `Parcelo Uganda took on the challenge of enabling Ugandans to shop from international markets like the US, UK, China, and Dubai. As Technical Co-founder, I built a complete SaaS platform that handles international shopping through WhatsApp—Uganda's most popular communication platform. The platform integrates MTN Mobile Money, tracks parcels across borders, and provides real-time business analytics.

Did we mention a 3-month timeline? No problem.`,
  timeline: "",
  challenges: [
    {
      title: "Mobile Money Integration",
      description: "Uganda operates on mobile money, with MTN Mobile Money being dominant. Traditional gateways like Stripe don't support local systems, requiring deep integration with MTN's API and Pesapal as backup."
    },
    {
      title: "WhatsApp as Primary Interface",
      description: "Ugandans live on WhatsApp. Our users expected to communicate, order, and track parcels all through WhatsApp. This meant building robust WhatsApp Business API integration for customer inquiries, order updates, and notifications."
    },
    {
      title: "Complex International Logistics",
      description: "The platform needed to track parcels from multiple countries through various shipping partners, calculate costs across currencies, handle customs, and provide real-time updates. One package might involve three carriers and two customs checkpoints."
    },
    {
      title: "Real-Time Business Intelligence",
      description: "The startup needed instant visibility into operations—comprehensive analytics showing revenue, order status, popular products, and operational bottlenecks, all updated in real-time."
    }
  ],
  solutions: [
    {
      title: "Mobile-First Architecture",
      description: "Built with Next.js and React for lightning-fast mobile performance, even on 3G connections. The interface is responsive and touch-optimized for affordable Android devices most Ugandans use."
    },
    {
      title: "Seamless Payment Integration",
      description: "Integrated MTN Mobile Money and Pesapal for payments. The flow is so smooth customers complete checkout in under 30 seconds—matching the speed they expect from local transactions."
    },
    {
      title: "WhatsApp Business API",
      description: "The platform communicates entirely through WhatsApp. Customers receive order confirmations, tracking updates, and can ask questions—all in the app they use daily."
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Built live dashboards using Supabase showing key metrics: daily revenue, order status, popular products, and operational efficiency—all updated in real-time."
    }
  ],
  results: [
    {
      title: "Live Platform Handling Real Money",
      description: "The platform processes actual customer orders daily with real money flowing through MTN Mobile Money. Payment integration works flawlessly with zero transaction failures since launch."
    },
    {
      title: "95% Mobile Usage",
      description: "As predicted, 95% of customers access Parcelo through mobile devices. The mobile-first design proved critical for matching how Ugandans actually use technology."
    },
    {
      title: "70% Reduction in Manual Work",
      description: "Automated WhatsApp notifications, tracking updates, and payment verification significantly reduced manual work. The real-time dashboard helps spot issues before they become problems."
    }
  ],
  techStack: [
    { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Supabase (PostgreSQL)", "Next.js API Routes"] },
    { category: "Integrations", items: ["WhatsApp Business API", "MTN Mobile Money", "Pesapal"] },
    { category: "Deployment", items: ["Vercel", "Supabase Cloud"] }
  ],
  features: [
    "WhatsApp Business API integration",
    "MTN Mobile Money payment processing",
    "Multi-stage parcel tracking system",
    "Real-time analytics dashboard",
    "Admin order management system",
    "Automated notification system",
    "Multi-currency support",
    "Mobile-responsive design"
  ],
  capabilities: [
    {
      title: "Building for Real Users with Real Money",
      description: "This isn't a demo—Parcelo processes actual transactions. I built systems that handle real money with zero tolerance for errors."
    },
    {
      title: "Deep Understanding of Uganda's Market",
      description: "Knowing that Ugandans prefer WhatsApp, that MTN Mobile Money dominates, and that mobile-first isn't optional—this local knowledge translates to better products."
    },
    {
      title: "Complex Integration Expertise",
      description: "Parcelo integrates WhatsApp Business API, MTN Mobile Money, Pesapal, and real-time notifications. This proves I can connect diverse systems into cohesive solutions."
    },
    {
      title: "Full-Stack Development",
      description: "I built everything: frontend, backend, authentication, real-time features, payment processing, and deployment infrastructure."
    }
  ],
  ctaText: "Want a platform that handles real transactions in Uganda's unique market? Let's talk."
};

export default function ParceloCaseStudyPage() {
  return <CaseStudyDetail data={parceloData} />;
}
