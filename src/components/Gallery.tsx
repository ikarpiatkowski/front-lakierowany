import { motion } from 'motion/react';
import { COMPANY_INFO, REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { cn } from '../lib/utils';
import React from 'react';

const realizations = [
  { id: 1, title: "Kuchnia Mat Anthracite", type: "Mat / RAL 7016", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Biel w Połysku", type: "Wysoki Połysk / RAL 9003", img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Szafa Garderobiana", type: "Mat / NCS S 2005-Y50R", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Projekt Salonu", type: "Mat / Jasne Kolory", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Kuchnia Premium", type: "Wysoki Połysk / Ciemne Kolory", img: "https://images.unsplash.com/photo-1556912177-d5402456df73?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Detal Uchwytu", type: "Uchwyt Frezowany", img: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800" },
];

export function Gallery() {
  return (
    <section id="realizacje" className="section-container">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display mb-4">Nasze realizacje</h2>
          <p className="text-brand-muted max-w-xl text-lg">
            Zobacz jak nasze fronty odmieniają wnętrza. Pracujemy na najlepszych komponentach i zachowujemy najwyższe standardy jakości.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 border border-brand-dark/20 rounded-full text-xs font-bold uppercase tracking-widest">
            {realizations.length} Projektów
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {realizations.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-brand-light"
          >
            <img 
              src={item.img} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
              <span className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">{item.type}</span>
              <h3 className="text-white text-2xl font-display">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="bg-brand-light py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display mb-4">Opinie klientów</h2>
          <p className="text-brand-muted">Zaufanie stolarzy i klientów indywidualnych z całego regionu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 relative"
            >
              <Quote className="absolute top-4 right-4 text-brand-primary/10 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-4 h-4", i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200")} />
                ))}
              </div>
              <p className="text-brand-muted italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold">{review.author}</p>
                <p className="text-xs text-brand-muted uppercase tracking-wider font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
