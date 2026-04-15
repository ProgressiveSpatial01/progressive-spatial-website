import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, company, email, project, message } = body;

    const data = await resend.emails.send({
      from: "Progressive Spatial <info@progressivespatial.com.au>",
      to: ["info@progressivespatial.com.au"], // <-- change if needed
      replyTo: email || undefined,
      subject: `Website Enquiry - ${name || "Unknown"}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Project:</strong> ${project || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "-").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Email error:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}