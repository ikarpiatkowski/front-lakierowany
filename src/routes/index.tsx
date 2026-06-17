import { createFileRoute } from "@tanstack/react-router";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { ContactSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/GallerySection";
import { Hero } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Form } from "@/components/FormSection";
import { Pricing } from "@/components/PricesSection";
import { Reviews } from "@/components/ReviewsSection";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main>
				<Hero />
				<Pricing />
				<Form />
				<Gallery />
				<Reviews />
				<ContactSection />
			</main>
			<Footer />
			<NewsletterPopup />
		</div>
	);
}
