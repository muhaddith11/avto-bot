// BACKEND/DATA.JS (A-Z TARTIBIDAGI YANGLANGAN KATALOG)

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
    { id: 106, name: "🔋 Akkumulyator", price: Math.round(650000 * m) }
  ];
};

module.exports = {
  "Audi": {
    "A4": { services: services(150000), parts: parts("luxury") },
    "A6": { services: services(180000), parts: parts("luxury") },
    "A8": { services: services(250000), parts: parts("luxury") },
    "Q5": { services: services(180000), parts: parts("suv") },
    "Q7": { services: services(220000), parts: parts("suv") }
  },
  "BMW": {
    "i3": { services: services(150000), parts: parts("luxury") },
    "iX": { services: services(250000), parts: parts("luxury") },
    "X1": { services: services(150000), parts: parts("suv") },
    "X5": { services: services(200000), parts: parts("suv") },
    "X7": { services: services(250000), parts: parts("suv") },
    "5 Series": { services: services(180000), parts: parts("luxury") },
    "7 Series": { services: services(250000), parts: parts("luxury") }
  },
  "BYD": {
    "Chazor": { services: services(100000), parts: parts("standard") },
    "Song Plus": { services: services(120000), parts: parts("standard") },
    "Tang": { services: services(150000), parts: parts("suv") },
    "Han": { services: services(150000), parts: parts("luxury") },
    "Seal": { services: services(150000), parts: parts("luxury") }
  },
  "Chery": {
    "Tiggo 7 Pro": { services: services(100000), parts: parts("suv") },
    "Tiggo 8 Pro": { services: services(120000), parts: parts("suv") },
    "Arrizo 6 Pro": { services: services(100000), parts: parts("standard") }
  },
  "Chevrolet": {
    "Matiz": { services: services(50000), parts: parts("budget") },
    "Spark": { services: services(50000), parts: parts("standard") },
    "Nexia 1/2/3": { services: services(50000), parts: parts("standard") },
    "Cobalt": { services: services(60000), parts: parts("standard") },
    "Gentra": { services: services(60000), parts: parts("standard") },
    "Damas": { services: services(50000), parts: parts("budget") },
    "Tracker": { services: services(80000), parts: parts("suv") },
    "Captiva": { services: services(100000), parts: parts("suv") },
    "Malibu": { services: services(120000), parts: parts("luxury") },
    "Equinox": { services: services(120000), parts: parts("suv") },
    "Traverse": { services: services(150000), parts: parts("luxury") },
    "Tahoe": { services: services(200000), parts: parts("luxury") },
    "Monza": { services: services(80000), parts: parts("standard") }
  },
  "Genesis": {
    "G70": { services: services(150000), parts: parts("luxury") },
    "G80": { services: services(180000), parts: parts("luxury") },
    "G90": { services: services(250000), parts: parts("luxury") },
    "GV80": { services: services(220000), parts: parts("suv") }
  },
  "Haval": {
    "Dargo": { services: services(120000), parts: parts("suv") },
    "M6": { services: services(100000), parts: parts("suv") },
    "H6": { services: services(120000), parts: parts("suv") },
    "Jolion": { services: services(100000), parts: parts("suv") }
  },
  "Hyundai": {
    "Avante": { services: services(100000), parts: parts("standard") },
    "Elantra": { services: services(100000), parts: parts("standard") },
    "Sonata": { services: services(120000), parts: parts("luxury") },
    "Santa Fe": { services: services(150000), parts: parts("suv") },
    "Tucson": { services: services(120000), parts: parts("suv") },
    "Staria": { services: services(150000), parts: parts("suv") }
  },
  "KIA": {
    "K5": { services: services(120000), parts: parts("luxury") },
    "Sportage": { services: services(120000), parts: parts("suv") },
    "Sorento": { services: services(150000), parts: parts("suv") },
    "Carnival": { services: services(180000), parts: parts("suv") },
    "Bongo": { services: services(80000), parts: parts("standard") }
  },
  "Leapmotor": {
    "C01": { services: services(150000), parts: parts("luxury") },
    "C11": { services: services(150000), parts: parts("suv") },
    "T03": { services: services(80000), parts: parts("budget") }
  },
  "Li Auto": {
    "Li 6": { services: services(200000), parts: parts("suv") },
    "Li 7": { services: services(220000), parts: parts("suv") },
    "Li 8": { services: services(230000), parts: parts("suv") },
    "Li 9": { services: services(250000), parts: parts("suv") }
  },
  "Lexus": {
    "ES 350": { services: services(180000), parts: parts("luxury") },
    "RX 350": { services: services(200000), parts: parts("suv") },
    "LX 570": { services: services(250000), parts: parts("suv") },
    "LX 600": { services: services(300000), parts: parts("suv") }
  },
  "Mercedes-Benz": {
    "C-Class": { services: services(150000), parts: parts("luxury") },
    "E-Class": { services: services(200000), parts: parts("luxury") },
    "S-Class": { services: services(300000), parts: parts("luxury") },
    "EQS": { services: services(350000), parts: parts("luxury") },
    "W222": { services: services(300000), parts: parts("luxury") },
    "G-Class": { services: services(350000), parts: parts("luxury") }
  },
  "Toyota": {
    "Corolla": { services: services(100000), parts: parts("standard") },
    "Camry": { services: services(120000), parts: parts("luxury") },
    "Prado": { services: services(200000), parts: parts("suv") },
    "LC300": { services: services(250000), parts: parts("suv") }
  },
  "Zeekr": {
    "001": { services: services(200000), parts: parts("luxury") },
    "007": { services: services(200000), parts: parts("luxury") },
    "009": { services: services(250000), parts: parts("luxury") },
    "X7": { services: services(150000), parts: parts("suv") }
  },
  "Boshqa": {
    "Lada": { services: services(60000), parts: parts("standard") },
    "JAC": { services: services(100000), parts: parts("standard") },
    "Jetour": { services: services(120000), parts: parts("suv") },
    "Volkswagen": { services: services(150000), parts: parts("standard") },
    "Model kiritish": { services: services(50000), parts: parts("standard") }
  }
};
