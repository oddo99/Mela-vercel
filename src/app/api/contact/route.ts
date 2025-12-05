import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validazione
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Nome, email e messaggio sono obbligatori' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Email non valida' },
                { status: 400 }
            );
        }

        // Invia email con Resend
        const { data, error } = await resend.emails.send({
            from: 'Mela Services Website <onboarding@resend.dev>', // Temporary - user will update
            to: ['alessandro@mela.services'],
            replyTo: email,
            subject: `Nuovo messaggio da ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B223A;">Nuovo Messaggio dal Sito Web</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : ''}
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #FFD700;">
            <h3 style="margin-top: 0;">Messaggio:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Questo messaggio è stato inviato dal form di contatto su mela.services
          </p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Errore durante l\'invio dell\'email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Email inviata con successo!', id: data?.id },
            { status: 200 }
        );

    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Errore del server' },
            { status: 500 }
        );
    }
}
