import nodemailer from "nodemailer";

export const runtime = "nodejs";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  formType?: string;
  website?: string;
};

const clean = (value: unknown, max = 1000) =>
  String(value ?? "").replace(/[<>]/g, "").trim().slice(0, max);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;
    if (body.website) return Response.json({ ok: true });

    const name = clean(body.name, 100);
    const phone = clean(body.phone, 30);
    const email = clean(body.email, 160);
    const message = clean(body.message, 2500);
    const formType = clean(body.formType || "Quick Enquiry", 80);

    if (!name || !phone || !message) {
      return Response.json({ error: "Name, phone and message are required." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.MAIL_TO;
    if (!host || !user || !pass || !recipient) {
      return Response.json({ error: "Email service is not configured yet." }, { status: 503 });
    }

    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true" || port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || user,
      to: recipient,
      replyTo: email || undefined,
      subject: `[MASSH] ${formType} from ${name}`,
      text: `Form: ${formType}\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\n\nMessage:\n${message}`,
      html: `<h2>${formType}</h2><p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email || "Not provided"}</p><p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return Response.json({ ok: true, message: "Thank you. Our team will contact you shortly." });
  } catch {
    return Response.json({ error: "Unable to send your enquiry. Please try again." }, { status: 500 });
  }
}
