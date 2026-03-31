// BACKEND/DATA.JS (TO'LIQ MANUALLY EDITABLE KATALOG)
// Siz hamma mashinaning har bir xizmati narxini alohida-alohida o'zgartira olasiz.

const services = (price = 50000) => [
  { id: 1, name: "Diagnostika", price: price },
  { id: 2, name: "Benzin sistemasini ko'rish", price: 100000 },
  { id: 3, name: "Tabloda datchik o'chirish", price: 50000 },
  { id: 4, name: "Svechalarni almashtirish", price: 40000 },
  { id: 5, name: "Drosil tozalash", price: 60000 },
  { id: 6, name: "Injector tozalash", price: 150000 },
  { id: 7, name: "Probeg tekshirish", price: 50000 },
  { id: 8, name: "Programma yozish", price: 200000 },
  { id: 9, name: "Stage urish", price: 600000 },
  { id: 10, name: "Gaz regulirovka", price: 50000 },
  { id: 11, name: "Benzin nasos ko'rish", price: 80000 },
  { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
  { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 },
  { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
];

module.exports = {
  "Chevrolet / Daewoo": {
    "Cobalt": services(50000),
    "Gentra": services(50000),
    "Lasseti": services(50000),
    "Malibu 1": services(70000),
    "Malibu 2 XL": services(80000),
    "Malibu Primer": services(100000),
    "Damas": services(30000),
    "Matiz": services(30000),
    "Spark": services(50000),
    "Nexia 1": services(40000),
    "Nexia 2": services(40000),
    "Nexia 3": services(50000),
    "Onix": services(80000),
    "Monza 1.3": services(80000),
    "Monza 1.5": services(80000),
    "Tahoe": services(150000),
    "Traverse 1": services(120000),
    "Traverse 2": services(120000),
    "Tracker 1": services(60000),
    "Tracker 2": services(80000),
    "Equinox 1": services(100000),
    "Equinox 2": services(110000),
    "Captiva 1": services(80000),
    "Captiva 2": services(80000),
    "Captiva 3": services(90000),
    "Captiva 4": services(90000),
    "Captiva 5": services(100000),
    "Menlo": services(100000),
    "Epica": services(80000),
    "Cruze": services(70000),
    "Tico": services(30000)
  },
  "BYD": {
    "Chazor": services(100000),
    "Song Plus": services(150000),
    "Song Gebrid": services(150000),
    "Han (XAN)": services(200000),
    "Seal": services(200000),
    "Song Pro": services(150000),
    "Tang": services(200000),
    "Yuan": services(120000),
    "Yuan App": services(120000),
    "Seagull": services(100000),
    "Champion": services(150000),
    "Xan Gibrid": services(200000)
  },
  "Toyota / Lexus": {
    "Camry": services(120000),
    "Corolla": services(100000),
    "Corolla 2008": services(100000),
    "Grand Highlander": services(180000),
    "Highlander": services(180000),
    "LC200": services(250000),
    "LC250": services(250000),
    "LC300": services(300000),
    "Lexus 570": services(250000),
    "GX460": services(200000),
    "ES 350": services(150000)
  },
  "Mercedes / BMW / Audi": {
    "S-Class": services(300000),
    "E300": services(200000),
    "G-Wagen": services(400000),
    "X5": services(250000),
    "X6": services(250000),
    "X7 40I": services(300000),
    "A8": services(300000),
    "Q7": services(250000)
  },
  "Zeekr / Li Auto / Leap Motor": {
    "Zeekr 001": services(250000),
    "Zeekr 007": services(250000),
    "Zeekr X": services(200000),
    "Li 7": services(250000),
    "Li 9": services(300000),
    "C11": services(150000),
    "T03": services(100000),
    "Voyah Free": services(250000)
  },
  "Boshqa": {
    "Boshqa rusum": services(50000)
  }
};
