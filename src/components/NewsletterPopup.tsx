import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Bell } from 'lucide-react';
import React from 'react';

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('newsletter-seen');
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem('newsletter-seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => closePopup(), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full relative shadow-2xl"
          >
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 hover:bg-brand-light rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 text-brand-dark" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-brand-primary p-8 flex flex-col justify-center items-center text-white text-center">
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  <Bell className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display">Bądź na bieżąco!</h3>
              </div>

              <div className="md:col-span-3 p-8">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl">Dziękujemy!</h4>
                    <p className="text-brand-muted text-sm">Zostałeś zapisany do newslettera.</p>
                  </div>
                ) : (
                  <>
                    <p className="text-brand-muted text-sm mb-6">
                      Zapisz się do naszego newslettera, aby otrzymywać informacje o nowych kolorach, promocjach i terminach.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input 
                          required
                          type="email" 
                          placeholder="Twój adres e-mail"
                          className="w-full bg-brand-light border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                        />
                      </div>
                      <button className="w-full btn-primary justify-center py-3">
                        Zapisz mnie
                      </button>
                      <p className="text-[10px] text-brand-muted text-center">
                        Klikając przycisk wyrażasz zgodę na przetwarzanie danych osobowych.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
