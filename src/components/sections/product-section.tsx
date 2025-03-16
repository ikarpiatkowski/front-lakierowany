import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductShowcase from "@/components/product-showcase";
import { Button } from "@/components/ui/button";

export default function ProductSection() {
  return (
    <section id="offer" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nasze produkty
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Zapoznaj się z naszą ofertą lakierowanych frontów premium
            zaprojektowanych z myślą o każdą przestrzeń.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="h-96 flex items-center justify-center">
              Ładowanie produktów...
            </div>
          }
        >
          <ProductShowcase />
        </Suspense>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#contact">
              Zapytaj o cenę <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
