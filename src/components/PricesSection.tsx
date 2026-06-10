import { Image } from "@unpic/react";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { PRICING } from "@/lib/constants";

export function Pricing() {
	return (
		<section id="cennik" className="section-container">
			<div className="mb-12 text-center flex flex-col items-center gap-4">
				<div>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest">
						<span className="w-2 h-2 rounded-full bg-brand-primary" />
						Czerwiec 2026
					</div>
				</div>
				<h2 className="text-4xl md:text-5xl font-display">
					Cennik B2B (dla stolarzy)
				</h2>
				<p className="text-brand-muted max-w-4xl mx-auto text-lg">
					Zamówienia detaliczne:{" "}
					<span className="text-brand-primary/90 font-bold">+20%</span> do cen
					podstawowych.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div className="space-y-6">
					<div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
						<table className="w-full text-left">
							<thead className="bg-brand-dark text-white font-display uppercase text-xs tracking-wider">
								<tr>
									<th className="px-6 py-4">Produkt</th>
									<th className="px-6 py-4 text-right">Cena netto za m²</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-black/10">
								{PRICING.base.map((item, i) => (
									<motion.tr
										key={item.name}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: i * 0.1 }}
										className="hover:bg-brand-light transition-colors"
									>
										<td className="px-6 py-4 font-medium">
											<div className="flex items-center gap-3">
												<Image
													src={item.image}
													alt={item.name}
													className="w-10 h-10 rounded-full object-cover bg-neutral-50 shrink-0"
													width={40}
													height={40}
													loading="lazy"
												/>
												<span>{item.name}</span>
											</div>
										</td>
										<td className="px-6 py-4 text-right">
											<div className="flex flex-col items-end">
												<span className="text-brand-primary font-bold text-xl">
													{item.price} zł
												</span>
												<span className="text-brand-muted line-through text-xs">
													{item.regularPrice} zł
												</span>
											</div>
										</td>
									</motion.tr>
								))}
							</tbody>
						</table>
					</div>

					{/* <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-6 flex gap-4 items-center">
            <div className="bg-brand-primary text-white p-2 rounded-full">
              <Info className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-brand-primary mb-1">Promocja wiosenna!</h4>
              <p className="text-sm text-brand-primary/80">Pierwsze 3 zamówienia 10% zniżki.</p>
            </div>
          </div> */}
				</div>

				<div className="space-y-8">
					<div>
						<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
							<span className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs">
								01
							</span>
							Dopłaty i warianty
						</h3>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{[
								{ label: "MDF 36mm", value: "+50%" },
								{ label: "Lakier dwustronny", value: "+70%" },
								{ label: "Uchwyt frezowany", value: "+30 zł/szt" },
								{ label: "Zamówienie ekspres (5 dni)", value: "+50%" },
							].map((item) => (
								<li
									key={item.label}
									className="p-4 bg-brand-light rounded-xl border border-black/5 flex justify-between items-center"
								>
									<span className="text-sm font-medium">{item.label}</span>
									<span className="text-brand-primary font-bold">
										{item.value}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
							<span className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs">
								02
							</span>
							Ważne informacje
						</h3>

						<div className="space-y-4">
							{[
								"Minimalna powierzchnia: 0.1m²",
								"Ciemne kolory: min. wartość liczona za 0.5m²",
								"Standardowy promień: R2",
								"Kolorystyka: RAL, ICA, NCS, CS",
								"Wycena indywidualna: kolory metaliczne i frezowane",
								"Czas realizacji: 10 dni roboczych",
							].map((text) => (
								<div
									key={text}
									className="flex items-center gap-3 text-brand-muted text-sm px-1"
								>
									<Check className="w-4 h-4 text-emerald-500 shrink-0" />

									<span>{text}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
