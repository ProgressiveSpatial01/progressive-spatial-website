import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      formType,
      name,
      company,
      email,
      project,
      message,
      phone,
      linkedin,
      resumeLink,
    } = body;

    // 🔹 Subject line switches depending on form
    const subject =
      formType === "career"
        ? `Website CV Submission - ${name || "Unknown Applicant"}`
        : `Website Enquiry - ${name || "Unknown Sender"}`;

    // 🔹 Email body switches depending on form
    const html =
      formType === "career"
        ? `
          <h2>${subject}</h2>
          <p><strong>Name:</strong> ${name || "-"}</p>
          <p><strong>Email:</strong> ${email || "-"}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>LinkedIn:</strong> ${linkedin || "-"}</p>
          <p><strong>CV Link:</strong> ${resumeLink || "-"}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || "-").replace(/\n/g, "<br/>")}</p>
        `
        : `
          <h2>${subject}</h2>
          <p><strong>Name:</strong> ${name || "-"}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Email:</strong> ${email || "-"}</p>
          <p><strong>Project:</strong> ${project || "-"}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || "-").replace(/\n/g, "<br/>")}</p>
        `;

    const data = await resend.emails.send({
      from: "Progressive Spatial <info@progressivespatial.com.au>",
      to: ["info@progressivespatial.com.au"],
      replyTo: email || undefined,
      subject,
      html,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Email error:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}