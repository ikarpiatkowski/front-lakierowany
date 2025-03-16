import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Front Lakierowany",
  description:
    "Firma Front Lakierowany to polski producent wysokiej jakości frontów lakierowanych, specjalizujący się w precyzyjnej obróbce drewna i MDF. Dzięki nowoczesnym technologiom lakierowania i dbałości o detale, oferuje estetyczne i trwałe rozwiązania do kuchni, łazienek i mebli na wymiar. Firma łączy rzemieślniczą precyzję z nowoczesnym designem, dostosowując produkty do indywidualnych potrzeb klientów.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
