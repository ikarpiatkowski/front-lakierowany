import { REVIEWS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Quote, Star } from 'lucide-react';
import { motion } from "motion/react";

export function Reviews() {
  return (
    <section className="bg-brand-light">
      <div className="section-container">
        <div className="text-center mb-8">
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
              className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 relative flex flex-col h-full"
            >
              <Quote className="absolute top-4 right-4 text-brand-primary/10 w-12 h-12" />
              
              <div className="flex gap-1 mb-4 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-4 h-4", i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200")} />
                ))}
              </div>

              <div className="flex-grow flex items-center mb-6">
                <p className="text-brand-muted italic leading-relaxed">"{review.text}"</p>
              </div>

              <div className="mt-auto shrink-0">
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