import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const sendSchema = z.object({
	name: z.string().min(2, "Imię i nazwisko jest wymagane"),
	email: z.email({
		error: (issue) =>
			issue.input === ""
				? "E-mail jest wymagany."
				: "Niepoprawny format adresu e-mail.",
	}),
	phone: z.string().min(9, "Podaj poprawny numer telefonu"),
	message: z.string().optional(),
	website: z.string().optional(),
});

export const Route = createFileRoute("/api/send")({
	server: {
		handlers: {
			POST: async ({ request }) => {
				try {
					const body = await request.json();
					const result = sendSchema.safeParse(body);

					if (!result.success) {
						return Response.json(
							{ error: result.error.issues[0]?.message || "Niepoprawne dane." },
							{ status: 400 },
						);
					}

					const data = result.data;

					// 1. Honeypot check
					if (data.website) {
						console.warn(
							"Bot email attempt detected via honeypot:",
							data.email,
						);
						return Response.json({ id: "fake_bot_id" }, { status: 200 });
					}

					const RESEND_API_KEY = process.env.RESEND_API_KEY;

					if (!RESEND_API_KEY) {
						console.error("Brak klucza RESEND_API_KEY w process.env");
						return Response.json(
							{ error: "Błąd konfiguracji serwera." },
							{ status: 500 },
						);
					}

					const escapedMessage = data.message
						? data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")
						: "Brak";

					const res = await fetch("https://api.resend.com/emails", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${RESEND_API_KEY}`,
						},
						body: JSON.stringify({
							from: "Formularz zamówieniowy <kontakt@frontlakierowany.pl>",
							to: "kontakt@frontlakierowany.pl",
							reply_to: data.email,
							subject: `Nowe zapytanie od: ${data.name}`,
							html: `
                <h2>Nowe zapytanie ze strony frontlakierowany.pl</h2>
                <p><strong>Imię i nazwisko:</strong> ${data.name}</p>
                <p><strong>E-mail:</strong> ${data.email}</p>
                <p><strong>Telefon:</strong> ${data.phone}</p>
                <p><strong>Wiadomość:</strong></p>
                <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px;">${escapedMessage}</p>
              `,
						}),
					});

					const resData = (await res.json()) as any;

					if (!res.ok) {
						console.error("Resend API error:", JSON.stringify(resData));
						return Response.json(resData, { status: res.status });
					}

					console.log("Email wysłany, ID:", resData?.id);
					return Response.json(resData, { status: 200 });
				} catch (error) {
					console.error("Send error:", error);
					return Response.json(
						{ error: "Wystąpił błąd podczas wysyłania wiadomości." },
						{ status: 500 },
					);
				}
			},
		},
	},
});
