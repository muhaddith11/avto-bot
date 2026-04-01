// BACKEND/DATA.JS (To'liq xizmatlar va Zapchastlar ro'yxati)

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

const parts = (tier = "standard") => {
  const multipliers = {
    budget: 0.8,
    standard: 1.0,
    suv: 1.8,
    luxury: 2.5
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
    "Spark": { services: services(50000), parts: parts("standard") },
    "Nexia 1": { services: services(50000), parts: parts("standard") },
    "Nexia 2": { services: services(50000), parts: parts("standard") },
    "Nexia 3": { services: services(50000), parts: parts("standard") },
    "Lasseti": { services: services(60000), parts: parts("standard") },
    "Gentra": { services: services(60000), parts: parts("standard") },
    "Cobalt": { services: services(60000), parts: parts("standard") },
    "Cruze": { services: services(80000), parts: parts("standard") },
    "Onix": { services: services(80000), parts: parts("standard") },
    "Epica": { services: services(80000), parts: parts("standard") },
    "Malibu 1": { services: services(100000), parts: parts("luxury") },
    "Malibu 2 (Primer)": { services: services(120000), parts: parts("luxury") },
    "Captiva 1,2,3": { services: services(80000), parts: parts("suv") },
    "Captiva 4": { services: services(80000), parts: parts("suv") },
    "Captiva 5": { services: services(100000), parts: parts("suv") },
    "Tracker 1,2": { services: services(80000), parts: parts("suv") },
    "Equinox": { services: services(100000), parts: parts("suv") },
    "Orlando": { services: services(80000), parts: parts("suv") },
    "Monza": { services: services(80000), parts: parts("standard") },
    "Traverse": { services: services(120000), parts: parts("luxury") },
    "Tahoe": { services: services(150000), parts: parts("luxury") }
  },
  "Daewoo": {
    "Nexia 1": { services: services(50000), parts: parts("standard") },
    "Nexia 2": { services: services(50000), parts: parts("standard") },
    "Espero": { services: services(50000), parts: parts("standard") },
    "Tico": { services: services(50000), parts: parts("budget") },
    "Damas": { services: services(50000), parts: parts("budget") }
  },
  "Hyundai": {
    "Accent": { services: services(80000), parts: parts("standard") },
    "Elantra": { services: services(80000), parts: parts("standard") },
    "Sonata": { services: services(100000), parts: parts("luxury") },
    "Santa Fe": { services: services(120000), parts: parts("suv") },
    "Tucson": { services: services(100000), parts: parts("suv") },
    "Creta": { services: services(80000), parts: parts("suv") }
  },
  "Kia": {
    "K5": { services: services(100000), parts: parts("luxury") },
    "K8": { services: services(120000), parts: parts("luxury") },
    "Seltos": { services: services(100000), parts: parts("suv") },
    "Sportage": { services: services(100000), parts: parts("suv") },
    "Sorento": { services: services(120000), parts: parts("suv") },
    "Carnival": { services: services(150000), parts: parts("suv") }
  },
  "BYD": {
    "Chazor": { services: services(100000), parts: parts("standard") },
    "Song Plus": { services: services(120000), parts: parts("standard") },
    "Han": { services: services(150000), parts: parts("luxury") },
    "Tang": { services: services(150000), parts: parts("suv") },
    "Seal": { services: services(150000), parts: parts("luxury") }
  },
  "Chery": {
    "Tiggo 7 Pro": { services: services(100000), parts: parts("suv") },
    "Tiggo 8 Pro": { services: services(120000), parts: parts("suv") },
    "Arrizo 6 Pro": { services: services(100000), parts: parts("standard") }
  },
  "Jetour": {
    "X70": { services: services(100000), parts: parts("suv") },
    "X90": { services: services(120000), parts: parts("suv") },
    "Dashing": { services: services(100000), parts: parts("suv") }
  },
  "Changan": {
    "CS35 Plus": { services: services(100000), parts: parts("suv") },
    "CS75 Plus": { services: services(120000), parts: parts("suv") },
    "Uni-K": { services: services(150000), parts: parts("suv") }
  },
  "Toyota": {
    "Corolla": { services: services(100000), parts: parts("standard") },
    "Camry": { services: services(120000), parts: parts("luxury") },
    "Prado": { services: services(150000), parts: parts("suv") },
    "Land Cruiser": { services: services(200000), parts: parts("suv") }
  },
  "Mercedes-Benz": {
    "C-Class": { services: services(150000), parts: parts("luxury") },
    "E-Class": { services: services(200000), parts: parts("luxury") },
    "S-Class": { services: services(250000), parts: parts("luxury") },
    "G-Class": { services: services(300000), parts: parts("luxury") }
  },
  "BMW": {
    "3 Series": { services: services(150000), parts: parts("luxury") },
    "5 Series": { services: services(200000), parts: parts("luxury") },
    "7 Series": { services: services(250000), parts: parts("luxury") },
    "X5/X6/X7": { services: services(250000), parts: parts("luxury") }
  },
  "Boshqa": {
    "Model kiritish": { services: services(50000), parts: parts("standard") }
  }
};
