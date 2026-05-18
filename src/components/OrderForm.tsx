import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { z } from 'zod';
import { PRICING, COMPANY_INFO } from '../constants';
import { Send, Upload } from 'lucide-react';
import { cn } from '../lib/utils';
import React from 'react';

const orderSchema = z.object({
  name: z.string().min(2, 'Imię i nazwisko jest wymagane'),
  company: z.string(),
  email: z.string().email('Niepoprawny adres email'),
  phone: z.string().min(9, 'Podaj poprawny numer telefonu'),
  productType: z.string(),
  area: z.string(),
  color: z.string().min(1, 'Podaj kolor (np. RAL 7016)'),
  comments: z.string(),
});

export function OrderForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      productType: PRICING.base[0].name,
      area: '0',
      color: '',
      comments: '',
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: orderSchema,
    },
    onSubmit: async ({ value }) => {
      // Logic for sending order
      console.log(value);
      alert('Dziękujemy za zamówienie! Skontaktujemy się wkrótce.');
    },
  });

  return (
    <section id="zamowienie" className="section-container bg-brand-dark text-white rounded-3xl my-24 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-display mb-6">Złóż zamówienie</h2>
          <p className="text-brand-light/60 mb-8 max-w-md">
            Wypełnij poniższy formularz, aby przygotować wycenę lub złożyć zamówienie. Odpowiadamy zwykle w ciągu 2 godzin roboczych.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-2">Bezpośredni kontakt</p>
              <p className="text-2xl font-display">{COMPANY_INFO.phone}</p>
              <p className="text-brand-light/40">{COMPANY_INFO.contactPerson}</p>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h4 className="font-bold mb-2">Chcesz załączyć pliki?</h4>
              <p className="text-sm text-brand-light/60 mb-4">Prześlij projekt w formacie PDF lub DXF bezpośrednio na nasz mail.</p>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-primary hover:underline flex items-center gap-2 font-medium">
                <Upload className="w-4 h-4" />
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white text-brand-dark p-8 md:p-10 rounded-2xl shadow-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <form.Field
                name="name"
                children={(field) => (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">Imię i nazwisko *</label>
                    <input
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={cn("w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all", field.state.meta.errors.length > 0 && "ring-2 ring-red-500")}
                      placeholder="Jan Kowalski"
                    />
                  </div>
                )}
              />
              <form.Field
                name="company"
                children={(field) => (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">Firma (opcjonalnie)</label>
                    <input
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                      placeholder="Meble Toruń Sp. z o.o."
                    />
                  </div>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <form.Field
                name="email"
                children={(field) => (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">E-mail *</label>
                    <input
                      type="email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                      placeholder="kontakt@stolarz.pl"
                    />
                  </div>
                )}
              />
              <form.Field
                name="phone"
                children={(field) => (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">Telefon *</label>
                    <input
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <form.Field
                name="productType"
                children={(field) => (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">Typ wykończenia</label>
                    <select
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all appearance-none"
                    >
                      {PRICING.base.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                    </select>
                  </div>
                )}
              />
              <form.Field
                name="area"
                children={(field) => (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">Powierzchnia (m²)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                      placeholder="np. 2.5"
                    />
                  </div>
                )}
              />
            </div>

            <form.Field
              name="color"
              children={(field) => (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Kolor (RAL / NCS / CS)</label>
                  <input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    placeholder="np. RAL 7016 mat"
                  />
                </div>
              )}
            />

            <form.Field
              name="comments"
              children={(field) => (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Uwagi dodatkowe</label>
                  <textarea
                    rows={3}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all resize-none"
                    placeholder="np. uchwyty frezowane, MDF 36mm..."
                  />
                </div>
              )}
            />

            <button
              type="submit"
              className="w-full btn-primary justify-center py-4 text-lg"
            >
              Wyślij zgłoszenie
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
