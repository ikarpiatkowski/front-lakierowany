export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-bottom border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 select-none cursor-pointer">
          <img src="/logo.png" alt="Logo frontu lakierowanego" className='w-12 h-12 rounded-xl' />
          <span className="text-white font-display text-lg hidden sm:block">
            Front<span className="text-brand-primary"> Lakierowany</span>
          </span>
        </a>

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
