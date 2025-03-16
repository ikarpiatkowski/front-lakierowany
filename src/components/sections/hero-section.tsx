import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import AnimatedHeroImage from "@/components/animated-hero-image";

const heroImages = ["/main1.jpg", "/main2.jpg", "/main3.jpg", "/main4.webp"];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[90vh] pt-16 flex items-center overflow-hidden"
    >
      <AnimatedHeroImage images={heroImages} alt="Elegant lacquered front" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimatedText
            text="Lakierowane fronty klasy premium"
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          />
          <p className="text-xl text-white/90 mb-8">
            Podnieś swoją przestrzeń dzięki naszym wysokiej jakości, wykonanym
            na zamówienie lakierowanym które łączą elegancję z trwałością.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#offer">
                Sprawdź nasze produkty <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              asChild
            >
              <Link href="#contact">Poproś o ofertę online</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-8 w-8 text-white rotate-90" />
      </div>
    </section>
  );
}
