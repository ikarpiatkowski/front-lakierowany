import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-200 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O naszej firmie
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Dzięki ponad 15-letniemu doświadczeniu w produkcji lakierowanych
              frontów, staliśmy się liderem w branży. branży.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Nasze zaangażowanie w jakość, innowacyjność i zadowolenie klientów
              przyniosło nam zaufanie klientów w całym kraju.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Łączymy tradycyjne rzemiosło z nowoczesną technologią, aby tworzyć
              lakierowane fronty, które są nie tylko piękne, ale również trwałe
              i funkcjonalne.
            </p>
            <Button variant="outline" asChild>
              <Link href="#contact">Dowiedz się o nas więcej</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/main3.jpg"
              alt="Our workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
