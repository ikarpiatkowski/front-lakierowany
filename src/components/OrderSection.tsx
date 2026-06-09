import { useRef } from 'react';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { Send, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';

const fieldSchemas = {
  name: z.string().min(2, 'Imię i nazwisko jest wymagane'),
  email: z.string().email('Niepoprawny adres email'),
  phone: z.string().min(9, 'Podaj poprawny numer telefonu'),
  message: z.string().min(1, 'Wiadomość jest wymagana'),
};

function zodField<T>(schema: z.ZodType<T>) {
  return ({ value }: { value: T }) => {
    const result = schema.safeParse(value);
    if (!result.success) {
      return result.error.issues[0]?.message;
    }
    return undefined;
  };
}

export function OrderForm() {
  const honeypotRef = useRef<HTMLInputElement>(null);
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },

    onSubmit: async ({ value }) => {
      const honeypot = honeypotRef.current?.value ?? '';
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...value, website: honeypot }),
        });

        if (!response.ok) {
          throw new Error('Błąd podczas wysyłania e-maila');
        }

        alert('Dziękujemy za zamówienie! Skontaktujemy się wkrótce.');
        form.reset();
      } catch (error) {
        console.error('Submit error:', error);
        alert('Wystąpił problem z wysłaniem wiadomości. Spróbuj ponownie.');
      }
    },
  });

  return (
    <section id="zamowienie" className="section-container bg-brand-dark text-white rounded-3xl overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/10 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
        <div className="p-6">
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
              <h4 className="font-bold mb-2">Chcesz załączyć zdjęcia lub pliki?</h4>
              <p className="text-sm text-brand-light/60 mb-4">Prześlij je bezpośrednio na nasz adres mail.</p>
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
            className="space-y-3"
          >
            {/* Honeypot field to prevent bot spam */}
            <input
              ref={honeypotRef}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute opacity-0 -z-50 pointer-events-none w-0 h-0"
            />

            <form.Field
              name="name"
              validators={{ onChange: zodField(fieldSchemas.name) }}
              children={(field) => (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Imię i nazwisko</label>
                  <input
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={cn("mt-1.5 w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all", field.state.meta.errors.length > 0 && "ring-2 ring-red-500")}
                    placeholder="Imie i nazwisko"
                  />
                  <p className="min-h-4 mt-0.5 text-xs text-brand-primary">
                    {field.state.meta.errors[0] ? String(field.state.meta.errors[0]) : ''}
                  </p>
                </div>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <form.Field
                name="phone"
                validators={{ onChange: zodField(fieldSchemas.phone) }}
                children={(field) => (
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">Telefon</label>
                    <input
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={cn("mt-1.5 w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all", field.state.meta.errors.length > 0 && "ring-2 ring-red-500")}
                      placeholder="Podaj numer telefonu"
                    />
                    <p className="min-h-4 mt-0.5 text-xs text-brand-primary">
                      {field.state.meta.errors[0] ? String(field.state.meta.errors[0]) : ''}
                    </p>
                  </div>
                )}
              />
              <form.Field
                name="email"
                validators={{ onChange: zodField(fieldSchemas.email) }}
                children={(field) => (
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">E-mail</label>
                    <input
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={cn("mt-1.5 w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all", field.state.meta.errors.length > 0 && "ring-2 ring-red-500")}
                      placeholder="Podaj adres email"
                    />
                    <p className="min-h-4 mt-0.5 text-xs text-brand-primary">
                      {field.state.meta.errors[0] ? String(field.state.meta.errors[0]) : ''}
                    </p>
                  </div>
                )}
              />
            </div>

            <form.Field
              name="message"
              validators={{ onChange: zodField(fieldSchemas.message) }}
              children={(field) => (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Napisz wiadomość</label>
                  <textarea
                    rows={7}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={cn("mt-1.5 w-full bg-brand-light border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all resize-y min-h-[150px]", field.state.meta.errors.length > 0 && "ring-2 ring-red-500")}
                    placeholder={`Mat RAL 9008, uchwyt frezowany\n600x724 mm - 2 szt\n600x725 mm - 1 szt\n\nPołysk NCS S 1500-N, lakier dwustronny, mdf 36mm\n600x726 mm - 3szt\n600x727 mm - 4szt`}
                  />
                  <p className="min-h-4 mt-0.5 text-xs text-brand-primary">
                    {field.state.meta.errors[0] ? String(field.state.meta.errors[0]) : ''}
                  </p>
                </div>
              )}
            />

            <button
              type="submit"
              className="w-full btn-primary justify-center py-4 text-lg"
            >
              <Send className="w-5 h-5" />
              Wyślij zapytanie
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
