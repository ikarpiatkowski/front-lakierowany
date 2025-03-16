import FeatureCard from "@/components/feature-card";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-neutral-200 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dlaczego warto wybrać nasze lakierowane fronty{" "}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Nasze lakierowane fronty premium łączą wyjątkową jakość z
            oszałamiającą estetyką, aby odmienić Twoją przestrzeń.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Najwyższa jakość"
            description="Nasze fronty są wykonane przy użyciu najwyższej jakości materiałów i zaawansowanych technik lakierowania."
            icon="Shield"
            titleGradient="from-blue-600 to-blue-400"
            iconColor="text-blue-500"
          />
          <FeatureCard
            title="Niestandardowe kolory"
            description="Wybierz z naszej szerokiej palety kolorów lub poproś o niestandardowy kolor pasujący do twojego projektu."
            icon="Palette"
            titleGradient="from-purple-600 to-pink-400"
            iconColor="text-purple-500"
          />
          <FeatureCard
            title="Wytrzymałość"
            description="Fronty odporne na zarysowania, wilgoć i promienie UV, zapewniające długotrwałe piękno."
            icon="Clock"
            titleGradient="from-amber-600 to-orange-400"
            iconColor="text-amber-500"
          />
          <FeatureCard
            title="Przyjazny dla środowiska"
            description="Do produkcji używamy materiałów i procesów przyjaznych dla środowiska."
            icon="Leaf"
            titleGradient="from-green-600 to-emerald-400"
            iconColor="text-green-500"
          />
          <FeatureCard
            title="Specjalistyczne rzemiosło"
            description="Każdy front jest starannie wykonany przez naszych wykwalifikowanych rzemieślników z wieloletnim doświadczeniem."
            icon="Hammer"
            titleGradient="from-red-600 to-rose-400"
            iconColor="text-red-500"
          />
          <FeatureCard
            title="Szybka produkcja"
            description="Szybki czas realizacji bez uszczerbku dla jakości i dbałości o szczegóły."
            icon="Zap"
            titleGradient="from-indigo-600 to-violet-400"
            iconColor="text-indigo-500"
          />
        </div>
      </div>
    </section>
  );
}
