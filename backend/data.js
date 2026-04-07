// BACKEND/DATA.JS (YAKUNIY TOLI METADATA)

// 1. ELEKTRON moshinalar uchun (Notion narxlari)
const servicesEV = () => [
  { id: 1, name: "Diagnostika", price: 100000 },
  { id: 2, name: "Batareya holatini tekshirish (SOH)", price: 200000 },
  { id: 3, name: "Zaryadlash portini remonti", price: 600000 },
  { id: 4, name: "Tabloda datchik o'chirish", price: 100000 },
  { id: 5, name: "Konditsioner remont", price: 600000 },
  { id: 6, name: "Probeg tekshirish", price: 100000 },
  { id: 7, name: "Simlarni to'g'irlash (Izolatsiya)", price: 500000 },
  { id: 8, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 },
  { id: 9, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 },
  { id: 10, name: "Invertor holatini tekshirish", price: 100000 },
  { id: 11, name: "Batareya yechish", price: 12000000 }
];

// 2. GIBRID moshinalar uchun (Notion narxlari)
const servicesGibrid = (benzinSistemPrice = 700000, nasosPrice = 300000) => [
  { id: 1, name: "Diagnostika", price: 100000 },
  { id: 2, name: "Benzin sistemasini ko'rish", price: benzinSistemPrice },
  { id: 3, name: "Tabloda datchik o'chirish", price: 100000 },
  { id: 4, name: "Svechalarni almashtirish", price: 100000 },
  { id: 5, name: "Drosil tozalash", price: 100000 },
  { id: 6, name: "Injector tozalash", price: 600000 },
  { id: 7, name: "Probeg tekshirish", price: 100000 },
  { id: 8, name: "Programma yozish", price: 800000 },
  { id: 9, name: "Stage urish", price: 600000 },
  { id: 10, name: "Gaz regulirovka", price: 100000 },
  { id: 11, name: "Benzin nasos ko'rish", price: nasosPrice },
  { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
  { id: 13, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
];

// 3. Xitoy BENZINLI (Notion narxlari)
const servicesXitoyBenzin = (benzinSistemPrice = 700000) => [
  { id: 1, name: "Diagnostika", price: 50000 },
  { id: 2, name: "Benzin sistemasini ko'rish", price: benzinSistemPrice },
  { id: 3, name: "Tabloda datchik o'chirish", price: 100000 },
  { id: 4, name: "Svechalarni almashtirish", price: 100000 },
  { id: 5, name: "Drosil tozalash", price: 100000 },
  { id: 6, name: "Injector tozalash", price: 400000 },
  { id: 7, name: "Probeg tekshirish", price: 100000 },
  { id: 8, name: "Programma yozish", price: 800000 },
  { id: 9, name: "Stage urish", price: 600000 },
  { id: 10, name: "Gaz regulirovka", price: 100000 }
];

// 4. ESKI/BASIC moshinalar uchun (Legacy)
const servicesLegacy = (price = 50000) => [
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
  { id: 13, name: "Russifikatsiya", price: 150000 },
  { id: 14, name: "Ilovalar o'rnatish", price: 100000 }
];

module.exports = {
  "Audi": {
    "A4": servicesLegacy(150000), "A6": servicesLegacy(150000), "A7": servicesLegacy(200000), "A8": servicesLegacy(250000),
    "Q2": servicesLegacy(120000), "Q3": servicesLegacy(130000), "Q5": servicesLegacy(150000), "Q7": servicesLegacy(200000),
    "E-Tron": servicesEV()
  },
  "Bestune": {
    "T 33": servicesXitoyBenzin(500000), "T 55": servicesXitoyBenzin(500000), 
    "T 77": servicesXitoyBenzin(500000), "T 99": servicesXitoyBenzin(500000), 
    "B 70": servicesXitoyBenzin(500000)
  },
  "BMW": {
    "I3": servicesEV(), "I4": servicesEV(), "I5": servicesEV(), "I7": servicesEV(),
    "I9": servicesEV(), "IX": servicesEV(), "IX3": servicesEV(), "X5": servicesLegacy(200000),
    "X6": servicesLegacy(220000), "X7 40I": servicesLegacy(250000)
  },
  "BYD": {
    "Champion (Elektron)": servicesEV(), "Chazor (Gibrid)": servicesGibrid(700000, 300000),
    "Han (Elektron)": servicesEV(), "Seal (Elektron)": servicesEV(),
    "Seagull (Elektron)": servicesEV(), "Song Plus Gibrid": servicesGibrid(700000, 300000),
    "Song Plus Elektron": servicesEV(), "Song Pro (Gibrid)": servicesGibrid(700000, 300000),
    "Tang (Elektron)": servicesEV(), "Yuan (Elektron)": servicesEV(),
    "e2 (Elektron)": servicesEV(), "Dolphin (Elektron)": servicesEV()
  },
  "Chery": {
    "8 Pro": servicesXitoyBenzin(700000), "Arizo 6 Pro": servicesXitoyBenzin(700000), 
    "Arizo 7 Pro": servicesXitoyBenzin(700000), "Tiggo 6 Pro": servicesXitoyBenzin(700000), 
    "Tiggo 7 Pro": servicesXitoyBenzin(700000)
  },
  "Chevrolet": {
    "Matiz": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Tico": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Damas": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 100000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 70000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Nexia 1": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Nexia 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Nexia 3": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 150000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Lasseti": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Spark": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 150000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 50000 }, { id: 6, name: "Injector tozalash", price: 100000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Captiva 1, 2, 3": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 400000 },
      { id: 7, name: "Probeg tekshirish", price: 200000 }, { id: 8, name: "Programma yozish", price: 300000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 100000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Captiva 4": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 300000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 400000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 400000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 100000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
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
      { id: 11, name: "Benzin nasos ko'rish", price: 50000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
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
      { id: 11, name: "Benzin nasos ko'rish", price: 200000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Epica": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 200000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 250000 },
      { id: 7, name: "Probeg tekshirish", price: 50000 }, { id: 8, name: "Programma yozish", price: 300000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 80000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
    ],
    "Onix": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 400000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 80000 }, { id: 6, name: "Injector tozalash", price: 70000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 250000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 }
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
    "Malibu 2 /primer": [
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
    "Tracker 1": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 70000 }, { id: 6, name: "Injector tozalash", price: 100000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 400000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 300000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Tracker 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 50000 },
      { id: 5, name: "Drosil tozalash", price: 70000 }, { id: 6, name: "Injector tozalash", price: 100000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 400000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 300000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Equinox 1": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 1000000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 600000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 400000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 600000 }
    ],
    "Equinox 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 1000000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 600000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 400000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 600000 }
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
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 400000 }
    ],
    "Traverse 1": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 1000000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 500000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 600000 }
    ],
    "Traverse 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 1000000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 500000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 600000 }
    ],
    "Tahoe 1": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 1000000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 500000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 600000 }
    ],
    "Tahoe 2": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 1000000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 500000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 600000 }
    ]
  },
  "Genesis": {
    "G70": servicesLegacy(150000), "G80": servicesLegacy(180000), "G90": servicesLegacy(200000),
    "GV60": servicesEV(), "GV70": servicesLegacy(160000), "GV80": servicesLegacy(200000)
  },
  "Haval": {
    "Dargo": servicesXitoyBenzin(700000), "H6": servicesXitoyBenzin(700000), 
    "Jolion": servicesXitoyBenzin(700000), "M6": servicesXitoyBenzin(700000)
  },
  "Hyundai": {
    "Avante": servicesGibrid(600000, 150000), "Creta": servicesGibrid(500000, 150000), 
    "Elantra": servicesGibrid(600000, 150000), "Sonata": servicesGibrid(700000, 150000),
    "Tucson": servicesGibrid(700000, 150000), "Santa Fe": servicesGibrid(700000, 150000),
    "Palisade": servicesGibrid(700000, 150000), "Ioniq 5": servicesEV(), "Ioniq 6": servicesEV(),
    "Ioniq 7": servicesEV(), "Ioniq 8": servicesEV(), "Ioniq 9": servicesEV(),
    "Porter": servicesLegacy(80000), "Staria": servicesLegacy(150000)
  },
  "Jetour": {
    "T 2": servicesXitoyBenzin(700000), "Dashing": servicesXitoyBenzin(700000), 
    "X 50": servicesXitoyBenzin(700000), "X 70": servicesXitoyBenzin(700000), 
    "X 90": servicesXitoyBenzin(700000)
  },
  "KIA": {
    "Carnival": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 700000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "Bongo": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "Bongo EV": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Batareya holatini tekshirish", price: 200000 },
      { id: 3, name: "Simlarni to'g'irlash (Izolatsiya)", price: 500000 }, { id: 4, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 },
      { id: 5, name: "Ilovalar (App) o'rnatish", price: 100000 }, { id: 6, name: "Probeg tekshirish", price: 100000 },
      { id: 7, name: "Batareya yechish", price: 12000000 }, { id: 8, name: "Zaryadlash portini remonti", price: 600000 },
      { id: 9, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 10, name: "Konditsioner remont", price: 600000 },
      { id: 11, name: "Invertor holatini tekshirish", price: 100000 }
    ],
    "EV 3": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Batareya holatini tekshirish", price: 200000 },
      { id: 3, name: "Simlarni to'g'irlash (Izolatsiya)", price: 500000 }, { id: 4, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 },
      { id: 5, name: "Ilovalar (App) o'rnatish", price: 100000 }, { id: 6, name: "Probeg tekshirish", price: 100000 },
      { id: 7, name: "Batareya yechish", price: 12000000 }, { id: 8, name: "Zaryadlash portini remonti", price: 600000 },
      { id: 9, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 10, name: "Konditsioner remont", price: 600000 },
      { id: 11, name: "Invertor holatini tekshirish", price: 100000 }
    ],
    "EV 5": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Batareya holatini tekshirish", price: 200000 },
      { id: 3, name: "Simlarni to'g'irlash (Izolatsiya)", price: 500000 }, { id: 4, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 },
      { id: 5, name: "Ilovalar (App) o'rnatish", price: 100000 }, { id: 6, name: "Probeg tekshirish", price: 100000 },
      { id: 7, name: "Batareya yechish", price: 12000000 }, { id: 8, name: "Zaryadlash portini remonti", price: 600000 },
      { id: 9, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 10, name: "Konditsioner remont", price: 600000 },
      { id: 11, name: "Invertor holatini tekshirish", price: 100000 }
    ],
    "EV 6": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Batareya holatini tekshirish", price: 200000 },
      { id: 3, name: "Simlarni to'g'irlash (Izolatsiya)", price: 500000 }, { id: 4, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 },
      { id: 5, name: "Ilovalar (App) o'rnatish", price: 100000 }, { id: 6, name: "Probeg tekshirish", price: 100000 },
      { id: 7, name: "Batareya yechish", price: 12000000 }, { id: 8, name: "Zaryadlash portini remonti", price: 600000 },
      { id: 9, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 10, name: "Konditsioner remont", price: 600000 },
      { id: 11, name: "Invertor holatini tekshirish", price: 100000 }
    ],
    "EV 9": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Batareya holatini tekshirish", price: 200000 },
      { id: 3, name: "Simlarni to'g'irlash (Izolatsiya)", price: 500000 }, { id: 4, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 },
      { id: 5, name: "Ilovalar (App) o'rnatish", price: 100000 }, { id: 6, name: "Probeg tekshirish", price: 100000 },
      { id: 7, name: "Batareya yechish", price: 12000000 }, { id: 8, name: "Zaryadlash portini remonti", price: 600000 },
      { id: 9, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 10, name: "Konditsioner remont", price: 600000 },
      { id: 11, name: "Invertor holatini tekshirish", price: 100000 }
    ],
    "K 3": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "K 5": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "K 8": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 700000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "K 8 restaylin": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 700000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "K 9": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 700000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "Morning": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 400000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "Seltos": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 500000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "Sorento": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 600000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ],
    "Sportage": [
      { id: 1, name: "Diagnostika", price: 100000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 600000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 100000 }, { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 }, { id: 6, name: "Injector tozalash", price: 600000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 }, { id: 8, name: "Programma yozish", price: 800000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 100000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 150000 }, { id: 12, name: "Simlarni to'g'irlash", price: 200000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 1200000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 300000 }
    ]
  },
  "Lada": {
    "Vesta": [
      { id: 1, name: "Diagnostika", price: 50000 },
      { id: 2, name: "Benzin sistemasini ko'rish", price: 300000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 },
      { id: 4, name: "Svechalarni almashtirish", price: 100000 },
      { id: 5, name: "Drosil tozalash", price: 100000 },
      { id: 6, name: "Injector tozalash", price: 400000 },
      { id: 7, name: "Probeg tekshirish", price: 100000 },
      { id: 8, name: "Programma yozish", price: 500000 },
      { id: 9, name: "Stage urish", price: 600000 },
      { id: 10, name: "Gaz regulirovka", price: 50000 }
    ],
    "Niva": servicesLegacy(50000), "Forza": servicesLegacy(60000)
  },
  "Leapmotor": {
    "C01": servicesEV(), "C10": servicesEV(), "C11": servicesEV(), "T03": servicesEV()
  },
  "Li Auto": {
    "Li 6": servicesLegacy(200000), "Li 7": servicesLegacy(220000), 
    "Li 8": servicesLegacy(240000), "Li 9": servicesLegacy(260000), 
    "Li 9 Restalin": servicesLegacy(280000)
  },
  "Lexus": {
    "ES 350": servicesLegacy(150000), "GX460": servicesLegacy(200000), "Lexus 570": servicesLegacy(250000)
  },
  "Mercedes-Benz": {
    "124": servicesLegacy(100000), "223": servicesLegacy(300000), "E240": servicesLegacy(120000),
    "E250": servicesLegacy(130000), "E300": servicesLegacy(150000), "EQA 250": servicesLegacy(180000),
    "EQB 300": servicesLegacy(200000), "EQE 350": servicesLegacy(250000), "EQS 350": servicesLegacy(300000),
    "EQS 450": servicesLegacy(350000), "EQS 450 SUV": servicesLegacy(350000), "EQS 580": servicesLegacy(400000),
    "GL 450": servicesLegacy(250000), "GLC 300": servicesLegacy(200000), "GLE 450": servicesLegacy(250000),
    "ML 320": servicesLegacy(180000), "Sprinter": servicesLegacy(150000), "Vito 2007": servicesLegacy(120000),
    "W221": servicesLegacy(250000), "W222": servicesLegacy(300000)
  },
  "Tesla": {
    "Model 3": servicesEV(), "Model Y": servicesEV(), "Model S": servicesEV(), "Model X": servicesEV()
  },
  "Toyota": {
    "Camry": servicesGibrid(700000, 150000), "Corolla": servicesLegacy(100000), 
    "Grand Highlander": servicesLegacy(180000), "Highlander": servicesLegacy(180000), 
    "LC200": servicesLegacy(250000), "LC250": servicesLegacy(250000), "LC300": servicesLegacy(300000)
  },
  "VW": {
    "ID.3": servicesEV(), "ID.4": servicesEV(), "ID.6": servicesEV(), "Caddy": servicesLegacy(120000)
  },
  "Zeekr": {
    "001": servicesEV(), "007": servicesEV(), "X": servicesEV(), "X7": servicesEV()
  },
  "Boshqa": {
    "Aralash": servicesLegacy(50000),
    "Venucia": servicesXitoyBenzin(700000),
    "Nissan Altima": servicesLegacy(120000),
    "Gazel": servicesLegacy(100000),
    "Denza N9": servicesLegacy(200000),
    "Depal": servicesLegacy(150000),
    "Depal S07": servicesLegacy(150000),
    "JAC J7": servicesLegacy(100000),
    "JAC JS8": servicesLegacy(120000),
    "JAC M4": servicesLegacy(130000),
    "JAC T30": servicesLegacy(100000),
    "Voyah Free": servicesLegacy(250000),
    "X95": servicesLegacy(140000)
  }
};
