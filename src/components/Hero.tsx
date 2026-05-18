import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-dark pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
            Lakiernia Toruń
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display text-white leading-[0.9] mb-8">
            Fronty <br /> 
            <span className="text-brand-primary">Lakierowane</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-light/60 max-w-lg mb-10 leading-relaxed">
            Perfekcyjne wykończenie dla Twoich mebli. Od bieli w wysokim połysku po głęboki mat w dowolnym kolorze RAL/NCS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#zamowienie" className="btn-primary text-lg px-8 py-4">
              Złóż zamówienie
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#cennik" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark px-8 py-4">
              Zobacz cennik
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=1000" 
              alt="Fronty meblowe proces" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-white text-sm font-medium mb-1 tracking-wide uppercase italic">Najwyższa jakość</p>
                <div className="flex justify-between items-end">
                  <p className="text-white/60 text-xs uppercase tracking-widest leading-none">Termin realizacji</p>
                  <p className="text-brand-primary text-xl font-display leading-none">10 dni</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -top-12 -right-12 w-48 h-48 border-2 border-brand-primary/30 rounded-full flex items-center justify-center -z-10">
             <div className="w-32 h-32 border-2 border-brand-primary/50 rounded-full" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Przewiń</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-bottom border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center font-display text-white italic font-bold text-xl">
            f
          </div>
          <span className="text-white font-display text-lg hidden sm:block">
            Front<span className="text-brand-primary">Lakierowany</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <NavLink href="#cennik">Cennik</NavLink>
          <NavLink href="#realizacje">Realizacje</NavLink>
          <NavLink href="#kontakt">Kontakt</NavLink>
          <a href="#zamowienie" className="bg-white text-brand-dark px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-primary hover:text-white transition-all">
            Zamów online
          </a>
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu could go here */}
          <button className="text-white p-2">
             <div className="w-6 h-0.5 bg-white mb-1.5" />
             <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-white/60 text-sm font-medium hover:text-brand-primary transition-colors uppercase tracking-wider"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="section-container border-t border-white/10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-display text-white italic font-bold text-lg">
                f
              </div>
              <span className="text-xl font-display">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-white/40 max-w-sm">
              Profesjonalna lakiernia frontów meblowych w Toruniu. Gwarantujemy najwyższą jakość wykończenia i terminowość realizacji dla Twoich projektów.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Nawigacja</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Strona główna</a></li>
              <li><a href="#cennik" className="hover:text-brand-primary transition-colors">Cennik</a></li>
              <li><a href="#realizacje" className="hover:text-brand-primary transition-colors">Nasze realizacje</a></li>
              <li><a href="#zamowienie" className="hover:text-brand-primary transition-colors">Składanie zamówień</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-white/60 text-sm">
               <li><a href="#" className="hover:text-brand-primary transition-colors">Polityka prywatności</a></li>
               <li><a href="#" className="hover:text-brand-primary transition-colors">Regulamin</a></li>
               <li><a href="#" className="hover:text-brand-primary transition-colors">RODO</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Wszystkie prawa zastrzeżone.</p>
          <p className="flex gap-4">
             <span>LAKIEROWANIE</span>
             <span>STRUKTURA</span>
             <span>POŁYSK</span>
             <span>MAT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
