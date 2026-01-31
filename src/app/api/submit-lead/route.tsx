import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { 
  ClientConfirmationEmail, 
  AdminNotificationEmail,
  calculateLeadScore,
  type LeadData 
} from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  preferredContact: z.enum(["email", "call"]),
  businessName: z.string().min(2),
  industry: z.string().min(1),
  businessStage: z.enum(["idea", "startup", "growth", "established"]),
  employeeCount: z.enum(["solo", "2-10", "11-50", "51-200", "200+"]),
  websiteStatus: z.enum(["none", "basic", "outdated", "professional"]),
  primaryNeed: z.enum([
    "website",
    "mobile-app",
    "mobile-money",
    "saas-platform",
    "e-commerce",
    "custom-software",
    "other",
  ]),
  currentSystems: z.string().optional(),
  budget: z.enum(["under-1m", "1m-5m", "5m-15m", "15m-50m", "50m+"]),
  timeline: z.enum(["asap", "1-month", "3-months", "6-months", "flexible"]),
  goals: z.string().min(10),
  howFound: z.enum(["google", "social-media", "referral", "linkedin", "other"]),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = formSchema.parse(body);
    const leadData: LeadData = validatedData;
    
    // Calculate lead score for admin notification
    const leadScore = calculateLeadScore(leadData);

    // Send confirmation email to client
    const clientEmailResult = await resend.emails.send({
      from: "Mutikanga Mark <hello@updates.mmrug.com>",
      to: [leadData.email],
      subject: `Thank you for reaching out, ${leadData.fullName.split(" ")[0]}!`,
      react: <ClientConfirmationEmail data={leadData} />,
    });

    if (clientEmailResult.error) {
      console.error("Failed to send client email:", clientEmailResult.error);
    }

    // Send notification email to admin with all lead data
    const adminEmailResult = await resend.emails.send({
      from: "Lead Notifications <leads@updates.mmrug.com>",
      to: ["mutikanga.mark@mmrug.com"],
      subject: `${leadScore.label} New Lead: ${leadData.businessName} - ${leadData.primaryNeed}`,
      react: <AdminNotificationEmail data={leadData} />,
    });

    if (adminEmailResult.error) {
      console.error("Failed to send admin email:", adminEmailResult.error);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Lead submitted successfully",
        leadScore: leadScore.score,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead submission:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid form data", 
          errors: error.issues 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to process submission. Please try again." 
      },
      { status: 500 }
    );
  }
}
