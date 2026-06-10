import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-28 pb-16 lg:pt-20 lg:pb-0">
			{/* Dynamic Background Elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
				<div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px]" />
			</div>

			<div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<h1 className="text-6xl md:text-8xl font-display text-white leading-[0.9] mb-8">
						Fronty <br />
						<span className="text-brand-primary">Lakierowane</span>
					</h1>

					<p className="text-lg md:text-xl text-brand-light/60 max-w-lg mb-10 leading-relaxed">
						Profesjonalna lakiernia frontów meblowych w Toruniu. Gwarantujemy
						najwyższą jakość wykończenia i terminowość realizacji dla Twoich
						projektów.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 mb-10">
						<a href="#zamowienie" className="btn-primary text-lg px-8 py-4">
							Zamów online
							<ArrowRight className="w-5 h-5" />
						</a>
						<a
							href="#cennik"
							className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark px-8 py-4"
						>
							Zobacz cennik
						</a>
					</div>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
						<span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
						Dostawa w całym kujawsko-pomorskim
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="relative block w-full max-w-md mx-auto lg:max-w-none lg:w-auto"
				>
					<div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5]">
						{/* <img 
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=1000" 
              alt="Fronty meblowe proces" 
              className="w-full h-full object-cover"
            /> */}
						<img
							src="/image.jpg"
							alt=""
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
						<div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
							<div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
								<p className="text-white text-xs sm:text-sm font-medium mb-1 tracking-wide uppercase italic">
									Najwyższa jakość
								</p>
								<div className="flex justify-between items-end">
									<p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest leading-none">
										Termin realizacji
									</p>
									<p className="text-brand-primary text-lg sm:text-xl font-display leading-none">
										10 dni
									</p>
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

			<a
				href="#cennik"
				className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer select-none"
			>
				<span className="text-[10px] uppercase tracking-[0.3em] font-bold">
					Przewiń
				</span>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<ChevronDown className="w-5 h-5" />
				</motion.div>
			</a>
		</section>
	);
}
