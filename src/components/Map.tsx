import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React from 'react';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const PIN_POSITION = { lat: 53.0362, lng: 18.6186 };

export function ContactSection() {
  return (
    <section id="kontakt" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display mb-6">Znajdź nas w Toruniu</h2>
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
              content={COMPANY_INFO.email}
            />
            <ContactInfoItem 
              icon={<Clock className="w-5 h-5" />}
              title="Godziny otwarcia"
              content={COMPANY_INFO.workingHours}
            />
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden h-[500px] border border-black/10 shadow-lg relative">
          {!hasValidKey ? (
            <div className="w-full h-full bg-brand-light flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="bg-brand-dark text-white p-4 rounded-full">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl">Mapa lokalizacji</h3>
              <p className="text-brand-muted text-sm max-w-xs">
                Tutaj powinna znajdować się interaktywna mapa. Skonfiguruj klucz Google Maps, aby ją zobaczyć.
              </p>
              <div className="bg-white p-4 rounded-xl border border-black/5 text-sm">
                 {COMPANY_INFO.address}
              </div>
            </div>
          ) : (
            <APIProvider apiKey={API_KEY} version="weekly">
              <Map
                defaultCenter={PIN_POSITION}
                defaultZoom={15}
                mapId="FRONT_LAKIEROWANY_MAP"
                internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                style={{ width: '100%', height: '100%' }}
                disableDefaultUI={true}
              >
                <AdvancedMarker position={PIN_POSITION}>
                  <Pin background="#ef4444" glyphColor="#fff" borderColor="#840e0e" />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, title, content, subContent }: { icon: React.ReactNode, title: string, content: string, subContent?: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-brand-dark text-white flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">{title}</p>
        <p className="font-semibold text-brand-dark">{content}</p>
        {subContent && <p className="text-sm text-brand-muted">{subContent}</p>}
      </div>
    </div>
  );
}
