import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Grupo Lormar Web <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL || 'info@grupolormar.com'],
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
          <p style="font-size: 12px; color: #999;">Enviado desde el widget de contacto de Grupo Lormar.</p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
