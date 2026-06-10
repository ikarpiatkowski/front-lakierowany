import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function ContactSection() {
	return (
		<section id="kontakt" className="section-container">
			<div className="flex flex-col md:flex-row gap-8 items-stretch">
				<div className="space-y-10 w-full md:w-1/2">
					<div>
						<h2 className="text-4xl md:text-5xl font-display mb-6">
							Znajdź nas w <span className="text-brand-primary">Toruniu!</span>
						</h2>
						<p className="text-brand-muted text-sm sm:text-base md:text-lg mb-8">
							Nasz zakład lakierniczy znajduje się w dogodnej lokalizacji
							przemysłowej Torunia. Zapraszamy do dostarczania materiałów i
							odbioru gotowych frontów.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-8">
						<ContactInfoItem
							icon={<MapPin className="w-5 h-5" />}
							title="Adres"
							content={COMPANY_INFO.addressShort}
						/>
						<ContactInfoItem
							icon={<Mail className="w-5 h-5" />}
							title="E-mail"
							content={
								<a
									href={`mailto:${COMPANY_INFO.email}`}
									className="hover:underline font-medium hover:text-brand-primary break-all block text-sm sm:text-base"
								>
									{COMPANY_INFO.email}
								</a>
							}
						/>
						<ContactInfoItem
							icon={<Phone className="w-5 h-5" />}
							title="Telefon"
							content={COMPANY_INFO.phone}
							subContent={COMPANY_INFO.contactPerson}
						/>
						<ContactInfoItem
							icon={<Clock className="w-5 h-5" />}
							title="Godziny otwarcia"
							content={COMPANY_INFO.workingHours}
						/>
					</div>
				</div>

				<div className="w-full h-[300px] md:h-auto md:w-1/2 rounded-xl overflow-hidden shadow-2xl">
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

function ContactInfoItem({
	icon,
	title,
	content,
	subContent,
}: {
	icon: React.ReactNode;
	title: string;
	content: React.ReactNode;
	subContent?: string;
}) {
	return (
		<div className="flex gap-4 min-w-0">
			<div className="w-10 h-10 rounded-xl bg-brand-dark text-white flex items-center justify-center shrink-0">
				{icon}
			</div>
			<div className="min-w-0 flex-1">
				<p className="text-xs text-brand-primary font-bold uppercase tracking-widest text-brand-muted mb-1">
					{title}
				</p>
				<div className="font-semibold text-brand-dark whitespace-pre-line">{content}</div>
				{subContent && <p className="text-sm text-brand-muted">{subContent}</p>}
			</div>
		</div>
	);
}
