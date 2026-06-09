import { motion } from 'motion/react';
import { PRICING } from '@/lib/constants';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="cennik" className="section-container text-center">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-display mb-4">Cennik B2B (dla stolarzy)</h2>
        <p className="text-brand-muted max-w-4xl mx-auto text-lg">
          Podane ceny są cenami netto za m².
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-brand-dark text-white font-display uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4">Produkt</th>
                  <th className="px-6 py-4 text-right">Cena za m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {PRICING.base.map((item, i) => (
                  <motion.tr 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="hover:bg-brand-light transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-brand-primary font-bold text-xl">{item.price} zł</span>
                        <span className="text-brand-muted line-through text-xs">{item.regularPrice} zł</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-6 flex gap-4 items-center">
            <div className="bg-brand-primary text-white p-2 rounded-full">
              <Info className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-brand-primary mb-1">Promocja wiosenna!</h4>
              <p className="text-sm text-brand-primary/80">Pierwsze 3 zamówienia 10% zniżki.</p>
            </div>
          </div> */}
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs">01</span>
              Dopłaty i warianty
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "MDF 36mm", value: "+50%" },
                { label: "Lakier dwustronny", value: "+70%" },
                { label: "Uchwyt frezowany", value: "+30 zł/szt" },
                { label: "Zamówienie ekspres (5 dni)", value: "+50%" },
              ].map((item) => (
                <li key={item.label} className="p-4 bg-brand-light rounded-xl border border-black/5 flex justify-between items-center">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-brand-primary font-bold">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
    <span className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs">02</span>
    Ważne informacje
  </h3>
  <div className="space-y-4">
    {[
      { text: "Zamówienia detaliczne (indywidualne): ", highlight: "+20%", suffix: " do cen podstawowych", isSpecial: true },
      { text: "Minimalna powierzchnia: 0.1m²" },
      { text: "Ciemne kolory: min. wartość liczona za 0.5m²" },
      { text: "Standardowy promień: R2" },
      { text: "Kolorystyka: RAL, ICA, NCS, CS" },
      { text: "Wycena indywidualna: kolory metaliczne i frezowane" },
      { text: "Czas realizacji: 10 dni roboczych" },
    ].map((item, index) => (
      <div key={index} className="flex items-center gap-3 text-brand-muted text-sm px-1">
        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
        
        {item.isSpecial ? (
          <span className="text-black font-medium">
            {item.text}
            <span className="text-brand-primary font-bold">{item.highlight}</span>
            {item.suffix}
          </span>
        ) : (
          <span>{item.text}</span>
        )}
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
