// BACKEND/DATA.JS (Xizmatlar va Zapchastlar ro'yxati)

// Yordamchi funksiya: Xizmatlar ro'yxati (har bir model uchun alohida narxlari bilan)
const services = (price = 50000) => [
  { id: 1, name: "🔍 Diagnostika", price: price },
  { id: 2, name: "⛽ Benzin sistemasini ko'rish", price: 120000 },
  { id: 3, name: "🚫 Tabloda datchik o'chirish", price: 50000 },
  { id: 4, name: "🕯️ Svechalarni almashtirish", price: 50000 },
  { id: 5, name: "🌀 Drosil tozalash", price: 50000 },
  { id: 6, name: "💉 Injector tozalash", price: 70000 },
  { id: 7, name: "🛣️ Probeg tekshirish", price: 100000 },
  { id: 8, name: "💻 Programma yozish", price: 200000 },
  { id: 9, name: "🚀 Stage urish", price: 600000 },
  { id: 10, name: "⛽ Gaz regulirovka", price: 50000 },
  { id: 11, name: "⛽ Benzin nasos ko'rish", price: 50000 },
  { id: 12, name: "🧵 Simlarni to'g'irlash", price: 100000 },
  { id: 13, name: "🇷🇺 Russifikatsiya (Rus tilida qilish)", price: 150000 },
  { id: 14, name: "📱 Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
];

// Yordamchi funksiya: Zapchastlar ro'yxati (taxminiy narxlar bilan)
const parts = (tier = "standard") => {
  const multipliers = {
    budget: 0.8,
    standard: 1.0,
    luxury: 2.5,
    suv: 1.8
  };
  const m = multipliers[tier] || 1.0;

  return [
    { id: 101, name: "🕯️ Svecha (Orijinal)", price: Math.round(45000 * m) },
    { id: 102, name: "⛽ Benzin Nasos (Komplekt)", price: Math.round(350000 * m) },
    { id: 103, name: "🧼 Pampers (Nasos filtri)", price: Math.round(25000 * m) },
    { id: 104, name: "💨 Havo filtri", price: Math.round(35000 * m) },
    { id: 105, name: "🛢️ Moy filtri", price: Math.round(30000 * m) },
    { id: 106, name: "🔋 Akkumulyator", price: Math.round(650000 * m) },
    { id: 107, name: "⛓️ Remen (Grm)", price: Math.round(180000 * m) }
  ];
};

module.exports = {
  "Chevrolet": {
    "Matiz": { services: services(50000), parts: parts("budget") },
    "Tico": { services: services(50000), parts: parts("budget") },
    "Damas": { services: services(50000), parts: parts("budget") },
    "Nexia 1": { services: services(50000), parts: parts("standard") },
    "Nexia 2": { services: services(50000), parts: parts("standard") },
    "Nexia 3": { services: services(50000), parts: parts("standard") },
    "Lasseti": { services: services(60000), parts: parts("standard") },
    "Spark": { services: services(50000), parts: parts("standard") },
    "Captiva 1, 2, 3": { services: services(80000), parts: parts("suv") },
    "Captiva 4": { services: services(80000), parts: parts("suv") },
    "Captiva 5": { services: services(100000), parts: parts("suv") },
    "Gentra": { services: services(60000), parts: parts("standard") },
    "Cruze": { services: services(80000), parts: parts("standard") },
    "Cobalt": { services: services(60000), parts: parts("standard") },
    "Epica": { services: services(80000), parts: parts("standard") },
    "Onix": { services: services(80000), parts: parts("standard") },
    "Malibu 1": { services: services(100000), parts: parts("luxury") },
    "Malibu 2 / Primer": { services: services(120000), parts: parts("luxury") },
    "Malibu 2.4": { services: services(100000), parts: parts("luxury") },
    "Tracker 1, 2": { services: services(80000), parts: parts("suv") },
    "Equinox 1, 2": { services: services(100000), parts: parts("suv") },
    "Orlando 1, 2": { services: services(80000), parts: parts("suv") },
    "Monza 1.3, 1.5": { services: services(80000), parts: parts("standard") },
    "Traverse 1, 2": { services: services(120000), parts: parts("luxury") },
    "Tahoe 1, 2": { services: services(150000), parts: parts("luxury") }
  },
  "Audi": {
    "A4": { services: services(150000), parts: parts("luxury") },
    "A6": { services: services(150000), parts: parts("luxury") },
    "A7": { services: services(200000), parts: parts("luxury") },
    "A8": { services: services(250000), parts: parts("luxury") }
  },
  "BMW": {
    "X5": { services: services(200000), parts: parts("luxury") },
    "X6": { services: services(220000), parts: parts("luxury") },
    "X7": { services: services(250000), parts: parts("luxury") }
  },
  "BYD": {
    "Chazor": { services: services(100000), parts: parts("standard") },
    "Song Plus": { services: services(120000), parts: parts("standard") },
    "Han": { services: services(150000), parts: parts("standard") }
  },
  "Boshqa": {
    "Aralash": { services: services(50000), parts: parts("standard") }
  }
};
