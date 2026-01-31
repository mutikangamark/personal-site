import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
}

function ContactConfirmationEmail({ data }: { data: ContactFormData }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#0f172a", marginBottom: "10px" }}>
          Thank You, {data.name.split(" ")[0]}!
        </h1>
        <p style={{ color: "#64748b", fontSize: "16px" }}>
          We have received your message and will get back to you within 24 hours.
        </p>
      </div>

      <div style={{ backgroundColor: "#f8fafc", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
        <h2 style={{ color: "#0f172a", fontSize: "18px", marginBottom: "16px" }}>
          Your Message Summary
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {data.company && (
              <tr>
                <td style={{ padding: "8px 0", color: "#64748b", width: "40%" }}>Company:</td>
                <td style={{ padding: "8px 0", color: "#0f172a", fontWeight: 500 }}>{data.company}</td>
              </tr>
            )}
            {data.budget && (
              <tr>
                <td style={{ padding: "8px 0", color: "#64748b" }}>Budget:</td>
                <td style={{ padding: "8px 0", color: "#0f172a", fontWeight: 500 }}>{data.budget}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div style={{ marginTop: "16px", padding: "12px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
          <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 8px 0" }}>Your message:</p>
          <p style={{ color: "#0f172a", margin: 0, whiteSpace: "pre-wrap" }}>{data.message}</p>
        </div>
      </div>

      <div style={{ backgroundColor: "#f0f9ff", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
        <h2 style={{ color: "#0369a1", fontSize: "18px", marginBottom: "12px" }}>
          Need to Reach Us Sooner?
        </h2>
        <p style={{ color: "#0284c7", margin: "0 0 12px 0" }}>
          For urgent inquiries, feel free to reach out directly via email:
        </p>
        <p style={{ margin: "0" }}>
          <a href="mailto:mutikanga.mark@mmrug.com" style={{ color: "#0284c7", textDecoration: "none", fontWeight: 500 }}>
            Email: mutikanga.mark@mmrug.com
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

function AdminContactNotificationEmail({ data }: { data: ContactFormData }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <div style={{ 
        backgroundColor: "#3b82f6", 
        color: "white", 
        padding: "16px 24px", 
        borderRadius: "12px 12px 0 0",
        marginBottom: "0"
      }}>
        <h1 style={{ margin: "0 0 8px 0", fontSize: "22px" }}>
          New Contact Form Submission
        </h1>
        <p style={{ margin: 0, opacity: 0.9 }}>
          From: {data.name}
        </p>
      </div>

      <div style={{ backgroundColor: "#f8fafc", padding: "24px", borderRadius: "0 0 12px 12px", marginBottom: "24px" }}>
        <a 
          href={`mailto:${data.email}`}
          style={{ 
            backgroundColor: "#3b82f6", 
            color: "white", 
            padding: "10px 20px", 
            borderRadius: "8px", 
            textDecoration: "none",
            fontWeight: 500,
            display: "inline-block"
          }}
        >
          Reply via Email
        </a>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ color: "#0f172a", fontSize: "18px", marginBottom: "16px", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px" }}>
          Contact Information
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <td style={{ padding: "12px", color: "#64748b", width: "35%", borderBottom: "1px solid #e2e8f0" }}>Name</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{data.name}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Email</td>
              <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>
                <a href={`mailto:${data.email}`} style={{ color: "#3b82f6" }}>{data.email}</a>
              </td>
            </tr>
            {data.company && (
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Company</td>
                <td style={{ padding: "12px", color: "#0f172a", fontWeight: 500, borderBottom: "1px solid #e2e8f0" }}>{data.company}</td>
              </tr>
            )}
            {data.budget && (
              <tr>
                <td style={{ padding: "12px", color: "#64748b", borderBottom: "1px solid #e2e8f0" }}>Budget Range</td>
                <td style={{ padding: "12px", color: "#059669", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>{data.budget}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ color: "#0f172a", fontSize: "18px", marginBottom: "16px", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px" }}>
          Project Details
        </h2>
        <div style={{ backgroundColor: "#fffbeb", border: "1px solid #fcd34d", borderRadius: "8px", padding: "16px" }}>
          <p style={{ color: "#92400e", margin: 0, whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
            {data.message}
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "24px", backgroundColor: "#f1f5f9", borderRadius: "12px" }}>
        <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
          Submitted on {new Date().toLocaleString("en-UG", { 
            dateStyle: "full", 
            timeStyle: "short",
            timeZone: "Africa/Kampala"
          })}
        </p>
      </div>
    </div>
  );
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const clientEmailResult = await resend.emails.send({
      from: "Mutikanga Mark <hello@updates.mmrug.com>",
      to: [body.email],
      subject: `Thank you for reaching out, ${body.name.split(" ")[0]}!`,
      react: <ContactConfirmationEmail data={body} />,
    });

    if (clientEmailResult.error) {
      console.error("Failed to send client email:", clientEmailResult.error);
    }

    const adminEmailResult = await resend.emails.send({
      from: "Contact Form <contact@updates.mmrug.com>",
      to: ["mutikanga.mark@mmrug.com"],
      subject: `New Contact: ${body.name}${body.company ? ` from ${body.company}` : ""}`,
      react: <AdminContactNotificationEmail data={body} />,
    });

    if (adminEmailResult.error) {
      console.error("Failed to send admin email:", adminEmailResult.error);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
