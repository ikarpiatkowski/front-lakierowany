import { AlertCircle, Bell, Loader2, Mail, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function NewsletterPopup() {
	const [isOpen, setIsOpen] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const honeypotRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			const hasSeen = localStorage.getItem("newsletter-seen");
			if (!hasSeen) {
				setIsOpen(true);
			}
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	const closePopup = () => {
		setIsOpen(false);
		localStorage.setItem("newsletter-seen", "true");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setIsLoading(true);

		const email = emailRef.current?.value ?? "";
		const website = honeypotRef.current?.value ?? "";

		try {
			const res = await fetch("/api/newsletter", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, website }),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data?.error || "Wystąpił błąd. Spróbuj ponownie.");
			}

			setIsSubmitted(true);
			setTimeout(() => closePopup(), 3000);
		} catch (err: unknown) {
			setError(
				err instanceof Error ? err.message : "Wystąpił nieoczekiwany błąd.",
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-sm">
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className="bg-white rounded-3xl overflow-hidden max-w-lg w-full relative shadow-2xl"
					>
						<button
							onClick={closePopup}
							className="absolute top-4 right-4 p-2 hover:bg-brand-light rounded-full transition-colors z-10"
							aria-label="Zamknij"
						>
							<X className="w-5 h-5 text-brand-dark" />
						</button>

						<div className="grid grid-cols-1 md:grid-cols-5">
							<div className="md:col-span-2 bg-brand-primary p-8 flex flex-col justify-center items-center text-white text-center">
								<div className="bg-white/20 p-4 rounded-full mb-4">
									<Bell className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-display">Bądź na bieżąco!</h3>
							</div>

							<div className="md:col-span-3 p-8">
								{isSubmitted ? (
									<div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-4">
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 20,
											}}
											className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center"
										>
											<Mail className="w-7 h-7" />
										</motion.div>
										<h4 className="font-bold text-xl">Dziękujemy!</h4>
										<p className="text-brand-muted text-sm">
											Zostałeś zapisany do newslettera. 🎉
										</p>
									</div>
								) : (
									<>
										<p className="text-brand-muted text-sm mb-6">
											Zapisz się do naszego newslettera, aby otrzymywać
											informacje o nowych kolorach, promocjach i terminach.
										</p>
										<form onSubmit={handleSubmit} className="space-y-3">
											<input
												ref={emailRef}
												required
												type="email"
												placeholder="Twój adres e-mail"
												className="w-full bg-brand-light border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary transition-all"
											/>

											{/* Honeypot field to prevent bot spam */}
											<input
												ref={honeypotRef}
												type="text"
												name="website"
												tabIndex={-1}
												autoComplete="off"
												className="absolute opacity-0 -z-50 pointer-events-none w-0 h-0"
											/>

											{error && (
												<div className="flex items-center gap-2 text-brand-primary text-sm bg-red-50 rounded-xl px-3 py-2">
													<AlertCircle className="w-4 h-4 shrink-0" />
													<span>{error}</span>
												</div>
											)}

											<button
												type="submit"
												disabled={isLoading}
												className="w-full btn-primary justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
											>
												{isLoading ? (
													<span className="flex items-center justify-center gap-2">
														<Loader2 className="w-4 h-4 animate-spin" />
														Zapisywanie…
													</span>
												) : (
													"Zapisz mnie"
												)}
											</button>
											<p className="text-[10px] text-brand-muted text-center">
												Klikając przycisk wyrażasz zgodę na przetwarzanie danych
												osobowych.
											</p>
										</form>
									</>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
