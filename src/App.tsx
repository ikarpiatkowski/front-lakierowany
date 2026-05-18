/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hero, Navbar, Footer } from './components/Hero';
import { Pricing } from './components/Pricing';
import { OrderForm } from './components/OrderForm';
import { Gallery, Reviews } from './components/Gallery';
import { ContactSection } from './components/Map';
import { NewsletterPopup } from './components/NewsletterPopup';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Pricing />
          <Gallery />
          <Reviews />
          <OrderForm />
          <ContactSection />
        </main>
        <Footer />
        <NewsletterPopup />
      </div>
    </QueryClientProvider>
  );
}

