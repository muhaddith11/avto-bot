// BACKEND/DATA.JS (YAKUNIY ANIQ NARXLAR BILAN)

// Yordamchi funksiya: xizmatlar ro'yxati va narxlarni yaratish uchun
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
  "Audi": {
    "A4": services(150000), "A6": services(150000), "A7": services(200000), "A8": services(250000),
    "Q2": services(120000), "Q3": services(130000), "Q5": services(150000), "Q7": services(200000)
  },
  "BMW": {
    "I3": services(150000), "I4": services(180000), "I5": services(200000), "I7": services(250000),
    "I9": services(300000), "IX": services(250000), "IX3": services(200000), "X5": services(200000),
    "X6": services(220000), "X7 40I": services(250000)
  },
  "BYD": {
    "Champion": services(100000), "Chazor": services(100000), "Han (XAN)": services(150000),
    "Seal": services(150000), "Seagull": services(80000), "Song Gebrid": services(100000),
    "Song Plus": services(120000), "Song Pro": services(120000), "Tang": services(150000),
    "Xan Gibrid": services(150000), "Yuan": services(100000), "Yuan App": services(100000)
  },
  "Chery": {
    "8 Pro": services(130000), "Arizo 6 Pro": services(110000), "Arizo 7 Pro": services(120000),
    "Tiggo 6 Pro": services(120000), "Tiggo 7 Pro": services(130000)
  },
  "Chevrolet": {
    "Matiz": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Tico": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Damas": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 100000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 70000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Nexia 1": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Nexia 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Nexia 3": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 150000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Lasseti": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Spark": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 150000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 100000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Captiva 1, 2, 3": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 400000 },
      { id: 7, name: "Probeg tekshirish", price: 200000 }, { id: 8, name: "Programma yozish", price: 300000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 100000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Captiva 4": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 300000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 400000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 400000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 100000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Captiva 5": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 400000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 200000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 80000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Gentra": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Cruze": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 70000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Cobalt": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 400000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 80000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 200000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Epica": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 200000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 250000 },
      { id: 7, name: "Probeg tekshirish", price: 50000 }, { id: 8, name: "Programma yozish", price: 300000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 80000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Onix": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 400000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 80000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 250000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Malibu 1": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 250000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 80000 }, { id: 6, name: "Injector tozalash", price: 150000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 80000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Malibu 2 / Primer": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 900000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 80000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 600000 },
      { id: 9, name: "Stage urish", price: 800000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 250000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Malibu 2.4": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 80000 }, { id: 6, name: "Injector tozalash", price: 300000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 400000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 250000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Tracker 1, 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 70000 }, { id: 6, name: "Injector tozalash", price: 100000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 400000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 300000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Equinox 1, 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 1000000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 600000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 400000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Orlando 1, 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 70000 }, { id: 6, name: "Injector tozalash", price: 100000 },
      { id: 7, name: "Probeg tekshirish", price: 50000 }, { id: 8, name: "Programma yozish", price: 400000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 300000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Monza 1.3, 1.5": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 400000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 80000 }, { id: 6, name: "Injector tozalash", price: 800000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 500000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 250000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Traverse 1, 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 1100000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 500000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Tahoe 1, 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 1100000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 500000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ]
  },
  "Genesis": {
    "G70": services(150000), "G80": services(180000), "G90": services(200000),
    "GV60": services(150000), "GV70": services(160000), "GV80": services(200000)
  },
  "Haval": {
    "Dargo": services(130000), "H6": services(120000), "Jolion": services(110000), "M6": services(110000)
  },
  "Hyundai": {
    "Avante": services(100000), "Creta": services(100000), "Elantra": services(100000),
    "Ioniq 5": services(150000), "Ioniq 6": services(150000), "Palisat": services(180000),
    "Porter": services(80000), "Santafe": services(150000), "Sonata": services(120000),
    "Sonata 2008": services(110000), "Staria": services(150000), "Stariks": services(130000),
    "Tranjet 2007": services(100000)
  },
  "KIA": {
    "Bongo": services(80000), "Bongo EV": services(100000), "EV5": services(150000),
    "EV6": services(180000), "EV9": services(250000), "K3": services(100000),
    "K5": services(120000), "K8": services(180000), "K8 Restaling": services(200000),
    "K9": services(250000), "Karnival": services(200000), "Morning": services(60000),
    "Seltos": services(110000), "Sonet": services(100000), "Sorento": services(180000),
    "Sportage": services(150000)
  },
  "Leapmotor": {
    "C01": services(150000), "C10": services(160000), "C11": services(160000),
    "C16": services(170000), "T03": services(100000)
  },
  "Li Auto": {
    "Li 6": services(200000), "Li 7": services(220000), "Li 8": services(240000),
    "Li 9": services(260000), "Li 9 Restalin": services(280000)
  },
  "Lexus": {
    "ES 350": services(150000), "GX460": services(200000), "Lexus 570": services(250000)
  },
  "Mercedes-Benz": {
    "124": services(100000), "223": services(300000), "E240": services(120000),
    "E250": services(130000), "E300": services(150000), "EQA 250": services(180000),
    "EQB 300": services(200000), "EQE 350": services(250000), "EQS 350": services(300000),
    "EQS 450": services(350000), "EQS 450 SUV": services(350000), "EQS 580": services(400000),
    "GL 450": services(250000), "GLC 300": services(200000), "GLE 450": services(250000),
    "ML 320": services(180000), "Sprinter": services(150000), "Vito 2007": services(120000),
    "W221": services(250000), "W222": services(300000)
  },
  "Toyota": {
    "Camry": services(120000), "Corolla": services(100000), "Corolla 2008": services(100000),
    "Grand Highlander": services(180000), "Highlander": services(180000), "LC200": services(250000),
    "LC250": services(250000), "LC300": services(300000)
  },
  "Zeekr": {
    "001": services(250000), "007": services(230000), "X": services(200000), "X7": services(250000)
  },
  "Boshqa": {
    "Aralash": services(50000), "Bestune T55": services(100000), "Bestune T99": services(120000),
    "Dashing": services(100000), "Denza N9": services(200000), "Depal": services(150000),
    "Depal S07": services(150000), "JAC J7": services(100000), "JAC JS8": services(120000),
    "JAC M4": services(130000), "JAC T30": services(100000), "Lada Niva": services(50000),
    "Lada Vesta": services(60000), "T2": services(150000), "Voyah Free": services(250000),
    "VW Caddy": services(120000), "VW ID.3": services(150000), "VW ID.4": services(180000),
    "VW ID.6": services(200000), "X50": services(100000), "X70": services(120000),
    "X90": services(130000), "X95": services(140000)
  }
};
