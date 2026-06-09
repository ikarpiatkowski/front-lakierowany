import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/HeroSection'
import { Gallery } from '@/components/GallerySection'
import { Reviews } from '@/components/ReviewsSection'
import { OrderForm } from '@/components/OrderSection'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Pricing } from '@/components/PricesSection'
import { ContactSection } from '@/components/AboutSection'
import { NewsletterPopup } from '#/components/NewsletterPopup'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <OrderForm />
        <Gallery />
        <Reviews />
        <ContactSection />

      </main>
      <Footer />
      <NewsletterPopup />
    </div>
  )
}
