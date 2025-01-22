import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',  // Gmail service
        auth: {
          user: process.env.EMAIL_USER,  // Gmail address
          pass: process.env.EMAIL_PASS,  // App Password generated in Google Account
        },
      });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Recipient's email address
      subject: `${subject} - From: ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Error sending email.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
