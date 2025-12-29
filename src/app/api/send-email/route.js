import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. WELL-FORMATTED EMAIL TO YOU
    const htmlToYou = `
      <div style="font-family:Arial,sans-serif;">
        <h2 style="color:#4CAF50;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background:#f5f5f5;padding:15px;border-radius:5px;">${message.replace(
          /\n/g,
          "<br>"
        )}</blockquote>
        <hr>
        <small style="color:#888;">This message was sent via your contact form.</small>
      </div>
    `;

    // 2. WELL-FORMATTED AUTO-REPLY TO SENDER
    const htmlToSender = `
  <div style="font-family: Arial;">
    <h2 style="color:#4A90E2;">Hi ${name}, thanks for reaching out!</h2>
    <p>I appreciate your message and will get back to you soon.</p>
    <hr>
    <p style="font-size:14px;color:#888;">
      — Regards,<br>
      MUNJULURI V V D SURYA KISHORE VINAY<br>
      <a href="https://vinaykishore25-portfolio.vercel.app/">Vinay's Portfolio</a>
    </p>
  </div>
`;

    // Send email to YOU
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // "Name" <your address>
      to: process.env.RECIPIENT_EMAIL,
      subject: `Contact form: ${subject} — from ${name}`,
      html: htmlToYou,
      replyTo: email, // handy for replying directly
    });

    // Send confirmation to SENDER
    await transporter.sendMail({
      from: `"Vinay Kishore" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting us, ${name}!`,
      html: htmlToSender,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Error sending email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
