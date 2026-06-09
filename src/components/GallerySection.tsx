import { motion } from "motion/react";

const realizations = [
	{ id: 1, title: "Wysoki połysk", type: "Front Połysk", img: "img4.jpg" },
	{ id: 2, title: "Mat", type: "Front Mat", img: "image.jpg" },
	{ id: 3, title: "Ryflowane", type: "Front Ryflowany", img: "img3.jpg" },
	{ id: 4, title: "Frezowany", type: "Uchwyt Frezowany", img: "img2.jpg" },
	{
		id: 5,
		title: "MDF 18mm, 36mm",
		type: "Dostępne grubości",
		img: "img5.jpg",
	},
	{
		id: 6,
		title: "Lakier dwustronny",
		type: "Lakier z każdej strony",
		img: "img6.jpg",
	},
];

export function Gallery() {
	return (
		<section id="realizacje" className="section-container">
			<div className="mb-8 flex flex-col  text-center">
				<div>
					<h2 className="text-5xl font-display mb-4">Nasze realizacje</h2>
					<p className="text-brand-muted max-w-2xl text-lg mx-auto">
						Zobacz jak nasze fronty odmieniają wnętrza. Pracujemy na najlepszych
						komponentach i zachowujemy najwyższe standardy jakości.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{realizations.map((item, i) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.03 }}
						className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-brand-light shadow-md transition-shadow duration-300 group-hover:shadow-2xl"
					>
						<img
							src={item.img}
							alt={item.title}
							className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent flex flex-col justify-end p-6">
							<span className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-1">
								{item.type}
							</span>
							<h3 className="text-white text-xl font-display leading-tight">
								{item.title}
							</h3>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
