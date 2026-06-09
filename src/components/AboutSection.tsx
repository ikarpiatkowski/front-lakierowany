import { COMPANY_INFO } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="kontakt" className="section-container h-[500px]">
      <div className="flex gap-8 h-full">
        <div className="space-y-12 ">
          <div>
            <h2 className="text-4xl md:text-5xl font-display mb-6">Znajdź nas w <span className='text-brand-primary'>Toruniu!</span></h2>
            <p className="text-brand-muted text-lg mb-8">
              Nasz zakład lakierniczy znajduje się w dogodnej lokalizacji przemysłowej Torunia. Zapraszamy do dostarczania materiałów i odbioru gotowych frontów.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactInfoItem
              icon={<MapPin className="w-5 h-5" />}
              title="Adres"
              content={COMPANY_INFO.addressShort}
            />
            <ContactInfoItem
              icon={<Phone className="w-5 h-5" />}
              title="Telefon"
              content={COMPANY_INFO.phone}
              subContent={COMPANY_INFO.contactPerson}
            />
            <ContactInfoItem
              icon={<Mail className="w-5 h-5" />}
              title="E-mail"
              content={
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline flex items-center gap-2 font-medium hover:text-brand-primary">
                  {COMPANY_INFO.email}
                </a>
              }
            />
            <ContactInfoItem
              icon={<Clock className="w-5 h-5" />}
              title="Godziny otwarcia"
              content={COMPANY_INFO.workingHours}
            />
          </div>
        </div>

          <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
            <iframe
              title="Front Lakierowany Toruń"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=Front%20Lakierowany%20Toru%C5%84&amp;maptype=roadmap&amp;zoom=17"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
    </section>
  );
}

function ContactInfoItem({ icon, title, content, subContent }: { icon: React.ReactNode, title: string, content: React.ReactNode, subContent?: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-brand-dark text-white flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-brand-primary font-bold uppercase tracking-widest text-brand-muted mb-1">{title}</p>
        <div className="font-semibold text-brand-dark">{content}</div>
        {subContent && <p className="text-sm text-brand-muted">{subContent}</p>}
      </div>
    </div>
  );
}
