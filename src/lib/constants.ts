export const COMPANY_INFO = {
	name: "Front Lakierowany Toruń",
	email: "kontakt@frontlakierowany.pl",
	phone: "533 305 915",
	contactPerson: "Jarosław",
	address: "ul. Polna 44/50, 87-100 Toruń",
	addressShort: "Toruń ul. Polna 44/50",
	workingHours: "Pn-Pt: 8:00 - 16:00",
};

export const PRICING = {
	base: [
		{
			name: "Mat (biały)",
			price: 289,
			regularPrice: 320,
			image: "/1.svg",
		},
		{
			name: "Mat (jasne kolory)",
			price: 319,
			regularPrice: 350,
			image: "/2.svg",
		},
		{
			name: "Mat (ciemne kolory)",
			price: 349,
			regularPrice: 400,
			image: "/3.svg",
		},
		{
			name: "Połysk (biały)",
			price: 389,
			regularPrice: 430,
			image: "/4.svg",
		},
		{
			name: "Połysk (jasne kolory)",
			price: 419,
			regularPrice: 460,
			image: "/5.svg",
		},
		{
			name: "Połysk (ciemne kolory)",
			price: 449,
			regularPrice: 500,
			image: "/6.svg",
		},
	],
	surcharges: {
		mdf36mm: 0.5, // +50%
		doubleSided: 0.7, // +70%
		milledHandle: 30, // zł/szt
		express: 0.5, // +50%
	},
	rules: {
		darkColorMinArea: 0.5,
		absoluteMinArea: 0.1,
		leadTimeDays: 10,
		expressLeadTimeDays: 5,
		firstOrdersDiscount: 0.1, // 10%
	},
	colors: ["RAL", "ICA", "NCS", "CS"],
};

export const REVIEWS = [
	{
		author: "Waariat",
		role: "Stolarz",
		text: "Polecam firmę, przystępny czas realizacji jak i ceny. Fronty wykonane bardzo ładnie i z starannością. Co do milimetra pod mój projekt razem z niestandardowymi odstępami do frezowania zawiasów. Polecam, niedlugo napewno zamówię następne do kuchni.",
		rating: 5,
	},
	{
		author: "Aneta Nowak",
		role: "Projektant wnętrz",
		text: "Fronty lakierowane z tej firmy to biżuteria dla moich projektów. Kolory idealnie dobrane do wzornika NCS.",
		rating: 5,
	},
	{
		author: "Tomasz W.",
		role: "Klient indywidualny",
		text: "Szybka realizacja i bardzo miły kontakt z Panem Jarosławem. Fronty wyglądają obłędnie.",
		rating: 4,
	},
];
