import { google } from "googleapis";

interface LeadSheetRow {
  timestamp: string;
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
  currentSystems: string;
  budget: string;
  timeline: string;
  goals: string;
  howFound: string;
  leadScore: number;
  leadLabel: string;
}

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

async function getAuthClient() {
  const credentials = {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  };

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  return auth;
}

export async function appendToGoogleSheet(data: LeadSheetRow): Promise<void> {
  try {
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: "v4", auth });
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    
    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEET_ID environment variable is not set");
    }

    const values = [
      [
        data.timestamp,
        data.fullName,
        data.email,
        data.phone,
        data.preferredContact,
        data.businessName,
        data.industry,
        data.businessStage,
        data.employeeCount,
        data.websiteStatus,
        data.primaryNeed,
        data.currentSystems || "",
        data.budget,
        data.timeline,
        data.goals,
        data.howFound,
        data.leadScore,
        data.leadLabel,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Leads!A:R", // Assumes sheet named "Leads" with columns A through R
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    console.log("Lead data appended to Google Sheet successfully");
  } catch (error) {
    console.error("Error appending to Google Sheet:", error);
    throw error;
  }
}

export async function initializeSheet(): Promise<void> {
  try {
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: "v4", auth });
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    
    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEET_ID environment variable is not set");
    }

    // Check if headers exist
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Leads!A1:R1",
    });

    if (!response.data.values || response.data.values.length === 0) {
      // Add headers if they don't exist
      const headers = [
        [
          "Timestamp",
          "Full Name",
          "Email",
          "Phone",
          "Preferred Contact",
          "Business Name",
          "Industry",
          "Business Stage",
          "Employee Count",
          "Website Status",
          "Primary Need",
          "Current Systems",
          "Budget",
          "Timeline",
          "Goals",
          "How Found",
          "Lead Score",
          "Lead Label",
        ],
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "Leads!A1:R1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: headers,
        },
      });

      console.log("Google Sheet headers initialized");
    }
  } catch (error) {
    console.error("Error initializing Google Sheet:", error);
    throw error;
  }
}
