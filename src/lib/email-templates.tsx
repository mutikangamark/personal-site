import * as React from "react";

interface LeadData {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
  businessName: string;
  industry: string;
  businessStage: string;
  employeeCount: string;
  websiteStatus: string;
  primaryNeed: string;
  currentSystems?: string;
  budget: string;
  timeline: string;
  goals: string;
  howFound: string;
}

const formatLabel = (value: string): string => {
  const labels: Record<string, string> = {
    // Contact methods
    email: "Email",
    call: "Phone Call",
    // Business stages
    idea: "Just an Idea",
    startup: "Startup (0-2 years)",
    growth: "Growth (2-5 years)",
    established: "Established (5+ years)",
    // Employee count
    solo: "Solo Founder",
    "2-10": "2-10 employees",
    "11-50": "11-50 employees",
    "51-200": "51-200 employees",
    "200+": "200+ employees",
    // Website status
    none: "No website yet",
    basic: "Basic website",
    outdated: "Outdated, needs refresh",
    professional: "Professional, working well",
    // Primary needs
    website: "Professional Website",
    "mobile-app": "Mobile Application",
    "mobile-money": "Mobile Money Integration",
    "saas-platform": "SaaS Platform",
    "e-commerce": "E-Commerce Store",
    "custom-software": "Custom Software",
    other: "Other / Multiple",
    // Budget
    "under-1m": "Under 1M UGX",
    "1m-5m": "1M - 5M UGX",
    "5m-15m": "5M - 15M UGX",
    "15m-50m": "15M - 50M UGX",
    "50m+": "50M+ UGX",
    // Timeline
    asap: "As soon as possible",
    "1-month": "Within 1 month",
    "3-months": "Within 3 months",
    "6-months": "Within 6 months",
    flexible: "Flexible",
    // How found
    google: "Google Search",
    "social-media": "Social Media",
    referral: "Friend/Colleague Referral",
    linkedin: "LinkedIn",
    // Industries
    agriculture: "Agriculture & Farming",
    retail: "Retail & Trade",
    finance: "Finance & Banking",
    healthcare: "Healthcare & Pharmacy",
    education: "Education & Training",
    hospitality: "Hospitality & Tourism",
    transport: "Transport & Logistics",
    "real-estate": "Real Estate & Construction",
    manufacturing: "Manufacturing",
    technology: "Technology & IT",
    media: "Media & Entertainment",
    ngo: "NGO & Non-Profit",
  };
  return labels[value] || value;
};

const calculateLeadScore = (data: LeadData): { score: number; label: string; color: string } => {
  let score = 0;

  // Budget scoring (0-30 points)
  const budgetScores: Record<string, number> = {
    "under-1m": 5,
    "1m-5m": 15,
    "5m-15m": 20,
    "15m-50m": 25,
    "50m+": 30,
  };
  score += budgetScores[data.budget] || 0;

  // Timeline urgency (0-25 points)
  const timelineScores: Record<string, number> = {
    asap: 25,
    "1-month": 20,
    "3-months": 15,
    "6-months": 10,
    flexible: 5,
  };
  score += timelineScores[data.timeline] || 0;

  // Business stage (0-20 points)
  const stageScores: Record<string, number> = {
    idea: 5,
    startup: 15,
    growth: 20,
    established: 18,
  };
  score += stageScores[data.businessStage] || 0;

  // Team size (0-15 points)
  const teamScores: Record<string, number> = {
    solo: 5,
    "2-10": 10,
    "11-50": 13,
    "51-200": 15,
    "200+": 15,
  };
  score += teamScores[data.employeeCount] || 0;

  // Website need (0-10 points)
  const websiteScores: Record<string, number> = {
    none: 10,
    basic: 8,
    outdated: 10,
    professional: 3,
  };
  score += websiteScores[data.websiteStatus] || 0;

  // Determine label and color
  if (score >= 80) {
    return { score, label: "Hot Lead 🔥", color: "#ef4444" };
  } else if (score >= 60) {
    return { score, label: "Warm Lead ☀️", color: "#f97316" };
  } else if (score >= 40) {
    return { score, label: "Cool Lead 🌤️", color: "#3b82f6" };
  } else {
    return { score, label: "Cold Lead ❄️", color: "#6b7280" };
  }
};

export function ClientConfirmationEmail({ data }: { data: LeadData }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#0f172a", marginBottom: "10px" }}>
          Thank You, {data.fullName.split(" ")[0]}! 🎉
        </h1>
        <p style={{ color: "#64748b", fontSize: "16px" }}>
          We've received your inquiry and we're excited to learn more about your project.
        </p>
      </div>

      <div style={{ backgroundColor: "#f8fafc", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
        <h2 style={{ color: "#0f172a", fontSize: "18px", marginBottom: "16px" }}>
          📋 Your Submission Summary
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "8px 0", color: "#64748b", width: "40%" }}>Business Name:</td>
              <td style={{ padding: "8px 0", color: "#0f172a", fontWeight: 500 }}>{data.businessName}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#64748b" }}>Industry:</td>
              <td style={{ padding: "8px 0", color: "#0f172a", fontWeight: 500 }}>{formatLabel(data.industry)}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#64748b" }}>Primary Need:</td>
              <td style={{ padding: "8px 0", color: "#0f172a", fontWeight: 500 }}>{formatLabel(data.primaryNeed)}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#64748b" }}>Timeline:</td>
              <td style={{ padding: "8px 0", color: "#0f172a", fontWeight: 500 }}>{formatLabel(data.timeline)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ backgroundColor: "#ecfdf5", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
        <h2 style={{ color: "#065f46", fontSize: "18px", marginBottom: "12px" }}>
          ✅ What Happens Next?
        </h2>
        <ol style={{ color: "#047857", paddingLeft: "20px", margin: 0 }}>
          <li style={{ marginBottom: "8px" }}>We'll review your requirements within 24 hours</li>
          <li style={{ marginBottom: "8px" }}>You'll receive a personalized response via {formatLabel(data.preferredContact)}</li>
          <li style={{ marginBottom: "8px" }}>We'll schedule a discovery call to discuss your project in detail</li>
          <li style={{ marginBottom: "0" }}>You'll receive a tailored proposal with timeline and pricing</li>
        </ol>
      </div>

      <div style={{ backgroundColor: "#f0f9ff", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
        <h2 style={{ color: "#0369a1", fontSize: "18px", marginBottom: "12px" }}>
          💬 Need to Reach Us Sooner?
        </h2>
        <p style={{ color: "#0284c7", margin: "0 0 12px 0" }}>
          For urgent inquiries, feel free to reach out directly via email:
        </p>
        <p style={{ margin: "0" }}>
          <a href="mailto:mutikanga.mark@mmrug.com" style={{ color: "#0284c7", textDecoration: "none", fontWeight: 500 }}>
            ✉️ Email: mutikanga.mark@mmrug.com
          </a>
        </p>
      </div>

      <div style={{ textAlign: "center", padding: "24px 0", borderTop: "1px solid #e2e8f0" }}>
        <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 8px 0" }}>
          Best regards,
        </p>
        <p style={{ color: "#0f172a", fontSize: "16px", fontWeight: 600, margin: "0 0 4px 0" }}>
          Mark Ryan Mutikanga
        </p>
        <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
          MMR Consultancy | Kampala, Uganda
        </p>
      </div>
    </div>
  );
}

export function AdminNotificationEmail({ data }: { data: LeadData }) {
  const leadScore = calculateLeadScore(data);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <div style={{ 
        backgroundColor: leadScore.color, 
        color: "white", 
        padding: "16px 24px", 
        borderRadius: "12px 12px 0 0",
        marginBottom: "0"
      }}>
        <h1 style={{ margin: "0 0 8px 0", fontSize: "22px" }}>
          🚀 New Lead: {data.businessName}
        </h1>
        <p style={{ margin: 0, opacity: 0.9 }}>
          {leadScore.label} • Score: {leadScore.score}/100
        </p>
      </div>

      <div style={{ backgroundColor: "#f8fafc", padding: "24px", borderRadius: "0 0 12px 12px", marginBottom: "24px" }}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a 
            href={`mailto:${data.email}`}
            style={{ 
              backgroundColor: "#3b82f6", 
              color: "white", 
              padding: "10px 20px", 
              borderRadius: "8px", 
              textDecoration: "none",
              fontWeight: 500
            }}
          >
            📧 Reply via Email
          </a>
          <a 
            href={`tel:${data.phone}`}
            style={{ 
              backgroundColor: "#6366f1", 
              color: "white", 
              padding: "10px 20px", 
              borderRadius: "8px", 
              textDecoration: "none",
              fontWeight: 500
            }}
          >
            📞 Call
          </a>
        </div>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ color: "#0f172a", fontSize: "18px", marginBottom: "16px", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px" }}>
          👤 Contact Information
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <td style={{ padding: "12px", color: "#64748b", width: "35%", borderBottom: "1px solid #e2e8f0" }}>Full Name</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{data.fullName}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Email</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>
                <a href={`mailto:${data.email}`} style={{ color: "#3b82f6" }}>{data.email}</a>
              </td>
            </tr>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Phone</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{data.phone}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Preferred Contact</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{formatLabel(data.preferredContact)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ color: "#0f172a", fontSize: "18px", marginBottom: "16px", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px" }}>
          🏢 Business Details
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <td style={{ padding: "12px", color: "#64748b", width: "35%", borderBottom: "1px solid #e2e8f0" }}>Business Name</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{data.businessName}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Industry</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{formatLabel(data.industry)}</td>
            </tr>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Business Stage</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{formatLabel(data.businessStage)}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Team Size</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{formatLabel(data.employeeCount)}</td>
            </tr>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Website Status</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{formatLabel(data.websiteStatus)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ color: "#0f172a", fontSize: "18px", marginBottom: "16px", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px" }}>
          🎯 Project Requirements
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <td style={{ padding: "12px", color: "#64748b", width: "35%", borderBottom: "1px solid #e2e8f0" }}>Primary Need</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>{formatLabel(data.primaryNeed)}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Budget Range</td>
              <td style={{ padding: "12px", color: "#059669", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>{formatLabel(data.budget)}</td>
            </tr>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Timeline</td>
              <td style={{ padding: "12px", color: "#dc2626", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>{formatLabel(data.timeline)}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Current Systems</td>
              <td style={{ padding: "12px", color: "#0f172a", borderBottom: "1px solid #e2e8f0" }}>{data.currentSystems || "Not specified"}</td>
            </tr>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>How They Found Us</td>
              <td style={{ padding: "12px", color: "#0f172a", borderBottom: "1px solid #e2e8f0" }}>{formatLabel(data.howFound)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ color: "#0f172a", fontSize: "18px", marginBottom: "16px", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px" }}>
          📝 Project Goals & Requirements
        </h2>
        <div style={{ backgroundColor: "#fffbeb", border: "1px solid #fcd34d", borderRadius: "8px", padding: "16px" }}>
          <p style={{ color: "#92400e", margin: 0, whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
            {data.goals}
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "24px", backgroundColor: "#f1f5f9", borderRadius: "12px" }}>
        <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
          Lead submitted on {new Date().toLocaleString("en-UG", { 
            dateStyle: "full", 
            timeStyle: "short",
            timeZone: "Africa/Kampala"
          })}
        </p>
      </div>
    </div>
  );
}

export { formatLabel, calculateLeadScore };
export type { LeadData };
