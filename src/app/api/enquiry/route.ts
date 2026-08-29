import nodemailer from "nodemailer";

export const runtime = "nodejs";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  formType?: string;
  website?: string;
  gender?: string;
  preferredTime?: string;
};

const clean = (value: unknown, max = 1000) =>
  String(value ?? "").replace(/[<>]/g, "").trim().slice(0, max);

export async function POST(request: Request) {
  try {
    const isMultipart=request.headers.get("content-type")?.includes("multipart/form-data");
    const formData=isMultipart?await request.formData():null;
    const body=(formData?Object.fromEntries(formData.entries()):await request.json()) as EnquiryPayload;
    if (body.website) return Response.json({ ok: true });

    const name = clean(body.name, 100);
    const phone = clean(body.phone, 30);
    const email = clean(body.email, 160);
    const message = clean(body.message, 2500);
    const formType = clean(body.formType || "Quick Enquiry", 80);
    const gender=clean(body.gender,20);
    const preferredTime=clean(body.preferredTime,50);
    const requiresFullDetails=formType.includes("Speciality");

    if (!name || !phone || !message || (requiresFullDetails&&(!email||!gender||!preferredTime))) {
      return Response.json({ error: "Please complete all required enquiry fields." }, { status: 400 });
    }
    if(!/^[0-9+() -]{8,20}$/.test(phone))return Response.json({error:"Please enter a valid contact number."},{status:400});
    if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return Response.json({error:"Please enter a valid email address."},{status:400});

    const files=formData?formData.getAll("reports").filter((value):value is File=>value instanceof File&&value.size>0):[];
    if(files.length>4)return Response.json({error:"You can upload a maximum of 4 reports."},{status:400});
    const allowedTypes=new Set(["image/png","image/jpeg","application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]);
    for(const file of files){if(file.size>5*1024*1024)return Response.json({error:`${file.name} exceeds the 5 MB limit.`},{status:400});if(!/\.(png|jpe?g|pdf|docx?)$/i.test(file.name)||(file.type&&!allowedTypes.has(file.type)))return Response.json({error:`${file.name} is not an accepted report format.`},{status:400})}
    const attachments=await Promise.all(files.map(async file=>({filename:clean(file.name,180),content:Buffer.from(await file.arrayBuffer()),contentType:file.type})));

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
      text: `Form: ${formType}\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nGender: ${gender||"Not provided"}\nPreferred call time: ${preferredTime||"Not provided"}\n\nMessage:\n${message}`,
      html: `<h2>${formType}</h2><p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email || "Not provided"}</p><p><strong>Gender:</strong> ${gender||"Not provided"}</p><p><strong>Preferred call time:</strong> ${preferredTime||"Not provided"}</p><p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>`,
      attachments,
    });

    return Response.json({ ok: true, message: "Thank you. Our team will contact you shortly." });
  } catch {
    return Response.json({ error: "Unable to send your enquiry. Please try again." }, { status: 500 });
  }
}
