import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Front Lakierowany Toruń - Producent Frontów Lakierowanych",
			},
			{
				name: "description",
				content:
					"Profesjonalna lakiernia frontów lakierowanych / meblowych w Toruniu. Lakierowanie frontów MDF na zamówienie. Kolorystyka: RAL/ICA/NCS. Fronty: mat, połysk, ryflowane i frezowane.",
			},
			{
				name: "keywords",
				content:
					"fronty lakierowane Toruń, lakierowanie frontów MDF, lakiernia meblowa Toruń, fronty na zamówienie, fronty kuchenne lakierowane, cennik frontów lakierowanych",
			},
			{
				property: "og:title",
				content: "Front Lakierowany Toruń - Producent Frontów Lakierowanych",
			},
			{
				property: "og:description",
				content:
					"Profesjonalna lakiernia frontów lakierowanych / meblowych w Toruniu. Najwyższa jakość wykończenia, terminowość i konkurencyjne ceny. Sprawdź naszą ofertę i cennik!",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:url",
				content: "https://frontlakierowany.pl/",
			},
			{
				property: "og:image",
				content: "https://frontlakierowany.pl/image.webp",
			},
			{
				property: "og:locale",
				content: "pl_PL",
			},
			{
				property: "og:site_name",
				content: "Front Lakierowany Toruń",
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:title",
				content: "Fronty Lakierowane Toruń | Producent Frontów MDF",
			},
			{
				name: "twitter:description",
				content:
					"Lakierowanie frontów meblowych i MDF w Toruniu. Szybki czas realizacji, najwyższa precyzja. Skontaktuj się z nami!",
			},
			{
				name: "twitter:image",
				content: "https://frontlakierowany.pl/image.webp",
			},
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon",
			},
			{
				rel: "icon",
				href: "/logo192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				rel: "apple-touch-icon",
				href: "/logo192.png",
			},
			{
				rel: "manifest",
				href: "/manifest.json",
			},
			{
				rel: "canonical",
				href: "https://frontlakierowany.pl/",
			},
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					"name": "Front Lakierowany Toruń",
					"image": "https://frontlakierowany.pl/image.webp",
					"@id": "https://frontlakierowany.pl/#localbusiness",
					"url": "https://frontlakierowany.pl",
					"telephone": "+48533305915",
					"email": "kontakt@frontlakierowany.pl",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "ul. Polna 44/50",
						"addressLocality": "Toruń",
						"postalCode": "87-100",
						"addressCountry": "PL"
					},
					"geo": {
						"@type": "GeoCoordinates",
						"latitude": 53.0366627,
						"longitude": 18.6276229
					},
					"openingHoursSpecification": [
						{
							"@type": "OpeningHoursSpecification",
							"dayOfWeek": [
								"Monday",
								"Tuesday",
								"Wednesday",
								"Thursday",
								"Friday"
							],
							"opens": "08:00",
							"closes": "16:00"
						}
					],
					"priceRange": "$$"
				})
			}
		]
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
