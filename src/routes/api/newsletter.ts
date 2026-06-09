import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.email({
    error: (issue) => (issue.input === '' ? 'E-mail jest wymagany.' : 'Niepoprawny format adresu e-mail.'),
  }),
  website: z.string().optional(),
});

export const Route = createFileRoute('/api/newsletter')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const result = newsletterSchema.safeParse(body);

          if (!result.success) {
            return Response.json(
              { error: result.error.issues[0]?.message || 'Niepoprawne dane.' },
              { status: 400 }
            );
          }

          const { email, website } = result.data;

          // 1. Honeypot check
          if (website) {
            console.warn('Bot subscription attempt detected via honeypot:', email);
            return Response.json({ success: true }, { status: 200 });
          }

          const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
          const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

          if (!MAILERLITE_API_KEY) {
            console.error('Brak klucza MAILERLITE_API_KEY w process.env');
            return Response.json({ error: 'Błąd konfiguracji serwera.' }, { status: 500 });
          }

          // Utwórz lub zaktualizuj subskrybenta
          const subscriberRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
            },
            body: JSON.stringify({
              email,
              status: 'active',
            }),
          });

          const subscriberData = (await subscriberRes.json()) as any;

          if (!subscriberRes.ok) {
            console.error('MailerLite subscriber error:', JSON.stringify(subscriberData));
            return Response.json(
              { error: subscriberData?.message || 'Błąd podczas zapisywania.' },
              { status: subscriberRes.status }
            );
          }

          const subscriberId = subscriberData.data?.id;

          // Jeśli podano Group ID — dodaj do grupy
          if (MAILERLITE_GROUP_ID && subscriberId) {
            const groupRes = await fetch(
              `https://connect.mailerlite.com/api/subscribers/${subscriberId}/groups/${MAILERLITE_GROUP_ID}`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
                },
              }
            );

            if (!groupRes.ok) {
              const groupData = (await groupRes.json()) as any;
              console.warn('MailerLite group assign warning:', JSON.stringify(groupData));
              // Nie przerywamy — subskrybent i tak został dodany
            }
          }

          console.log('MailerLite: zapisano subskrybenta', email);
          return Response.json({ success: true }, { status: 200 });
        } catch (error) {
          console.error('Newsletter error:', error);
          return Response.json({ error: 'Wystąpił błąd podczas zapisu do newslettera.' }, { status: 500 });
        }
      },
    },
  },
});
