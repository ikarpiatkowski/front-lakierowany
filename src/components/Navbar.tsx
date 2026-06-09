import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
			<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
				{/* biome-ignore lint/a11y/useValidAnchor: logo click closes menu */}
				<a
					href="#"
					className="flex items-center gap-3 select-none cursor-pointer"
					onClick={() => setIsOpen(false)}
				>
					<img
						src="/logo.png"
						alt="Logo frontu lakierowanego"
						className="w-12 h-12 rounded-xl"
					/>
					<span className="text-white font-display text-lg hidden sm:block">
						Front<span className="text-brand-primary"> Lakierowany</span>
					</span>
				</a>

				<div className="hidden md:flex items-center gap-10">
					<NavLink href="#cennik">Cennik</NavLink>
					<NavLink href="#realizacje">Realizacje</NavLink>
					<NavLink href="#kontakt">Kontakt</NavLink>
					<a
						href="#zamowienie"
						className="bg-white text-brand-dark px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-primary hover:text-white transition-all"
					>
						Zamów online
					</a>
				</div>

				<div className="md:hidden">
					<button
						type="button"
						className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
					>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className="md:hidden bg-brand-dark border-t border-white/5 py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
					{/* biome-ignore lint/a11y/useValidAnchor: menu navigation closes dropdown */}
					<a
						href="#cennik"
						onClick={() => setIsOpen(false)}
						className="text-white/80 text-lg font-medium py-2 hover:text-brand-primary transition-colors"
					>
						Cennik
					</a>
					{/* biome-ignore lint/a11y/useValidAnchor: menu navigation closes dropdown */}
					<a
						href="#realizacje"
						onClick={() => setIsOpen(false)}
						className="text-white/80 text-lg font-medium py-2 hover:text-brand-primary transition-colors"
					>
						Realizacje
					</a>
					{/* biome-ignore lint/a11y/useValidAnchor: menu navigation closes dropdown */}
					<a
						href="#kontakt"
						onClick={() => setIsOpen(false)}
						className="text-white/80 text-lg font-medium py-2 hover:text-brand-primary transition-colors"
					>
						Kontakt
					</a>
					{/* biome-ignore lint/a11y/useValidAnchor: menu navigation closes dropdown */}
					<a
						href="#zamowienie"
						onClick={() => setIsOpen(false)}
						className="bg-brand-primary text-white text-center py-3 rounded-lg font-bold hover:bg-red-600 transition-colors mt-2"
					>
						Zamów online
					</a>
				</div>
			)}
		</nav>
	);
}

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<a
			href={href}
			className="text-white/60 text-sm font-medium hover:text-brand-primary transition-colors uppercase tracking-wider"
		>
			{children}
		</a>
	);
}
