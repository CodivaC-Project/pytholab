import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface BookingData {
  name: string;
  phone: string;
  email: string;
  age: string;
  date: string;
  time: string;
  test: string;
  collection: string;
  notes: string;
}

function buildLabEmail(data: BookingData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0f3d3e; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 22px;">New Booking Request</h1>
      </div>
      <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #0f3d3e; margin-top: 0;">Patient Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Name</td><td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.phone}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.email || "N/A"}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Age</td><td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.age || "N/A"}</td></tr>
        </table>

        <h2 style="color: #0f3d3e;">Appointment Info</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Date</td><td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.date}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Time</td><td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.time}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Test/Package</td><td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.test}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Collection</td><td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.collection === "home" ? "Home Collection" : "Visit Lab"}</td></tr>
        </table>

        ${data.notes ? `<h2 style="color: #0f3d3e;">Notes</h2><p style="color: #1e293b; background: #f8fafc; padding: 12px; border-radius: 6px;">${data.notes}</p>` : ""}
      </div>
    </div>
  `;
}

function buildPatientEmail(data: BookingData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0f3d3e; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 22px;">Booking Confirmation</h1>
      </div>
      <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="color: #1e293b; font-size: 16px;">Dear <strong>${data.name}</strong>,</p>
        <p style="color: #64748b;">Thank you for booking with <strong style="color: #0f3d3e;">Trust Care Diagnostics</strong>. Your appointment request has been received and our team will contact you shortly to confirm.</p>

        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <h3 style="color: #0f3d3e; margin-top: 0;">Your Booking Summary</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 130px;">Test/Package</td><td style="padding: 6px 0; color: #1e293b;">${data.test}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Date</td><td style="padding: 6px 0; color: #1e293b;">${data.date}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Time</td><td style="padding: 6px 0; color: #1e293b;">${data.time}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Collection</td><td style="padding: 6px 0; color: #1e293b;">${data.collection === "home" ? "Home Collection" : "Visit Lab"}</td></tr>
          </table>
        </div>

        <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <h3 style="color: #0f3d3e; margin-top: 0;">Contact Us</h3>
          <p style="color: #64748b; margin: 4px 0;">Phone: <a href="tel:+919608759500" style="color: #0f3d3e;">+91 9608759500</a></p>
          <p style="color: #64748b; margin: 4px 0;">WhatsApp: <a href="https://wa.me/919608759500" style="color: #0f3d3e;">Chat with us</a></p>
          <p style="color: #64748b; margin: 4px 0;">Address: Near Asarganj More, Shahkund, Bhagalpur, Bihar - 812001</p>
        </div>

        <p style="color: #64748b; font-size: 13px; text-align: center; margin-top: 24px;">This is an automated confirmation. Our team will reach out to you soon.</p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const data: BookingData = await request.json();

    if (!data.name || !data.phone || !data.date || !data.time || !data.test) {
      return NextResponse.json(
        { success: false, error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // Send email to lab
    await transporter.sendMail({
      from: `"Trust Care Diagnostics" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email || undefined,
      subject: `New Booking Request — ${data.name}`,
      html: buildLabEmail(data),
    });

    // Send confirmation to patient
    if (data.email) {
      await transporter.sendMail({
        from: `"Trust Care Diagnostics" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: `Booking Confirmation — Trust Care Diagnostics`,
        html: buildPatientEmail(data),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send booking. Please try again or call us." },
      { status: 500 }
    );
  }
}
