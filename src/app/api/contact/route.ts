import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not defined in environment variables');
        }
        if (!process.env.SMTP_EMAIL && !process.env.SMTP_PASSWORD) {
            console.log('Using Ethereal for email testing as no SMTP credentials provided');
        }

        // Determine which transport to use
        let transporter;
        // Prefer real SMTP if credentials are provided (any provider that supports SMTP)
        if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD) {
            transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.gmail.com', // default to Gmail style; override via SMTP_HOST if needed
                port: Number(process.env.SMTP_PORT) || 465,
                secure: true,
                auth: {
                    user: process.env.SMTP_EMAIL,
                    pass: process.env.SMTP_PASSWORD,
                },
            });
        } else {
            // Fallback to Ethereal (testing only – messages are captured at a preview URL)
            const testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({
                host: testAccount.smtp.host,
                port: testAccount.smtp.port,
                secure: testAccount.smtp.secure,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            });
        }

        const { name, email, subject, message } = await req.json();
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
        }

        const mailOptions = {
            from: `"Grupo Lormar Web" <${process.env.SMTP_EMAIL || 'onboarding@resend.dev'}>`,
            to: ['Desarrollador883@gmail.com'], // change to real recipients after test
            subject: `Nueva consulta: ${subject || 'Contacto General'}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #003B73;">Nueva consulta desde la web</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject || 'N/A'}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f4f4f4; border-radius: 5px;">
            <p><strong>Mensaje:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="margin-top: 20px; border: 0; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #999;">Enviado desde el formulario de la web de Grupo Lormar.</p>
        </div>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        // If using Ethereal, include preview URL in the response for dev testing
        const previewUrl = nodemailer.getTestMessageUrl(info);
        return NextResponse.json({ success: true, messageId: info.messageId, previewUrl });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
