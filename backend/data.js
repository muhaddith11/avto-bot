// BACKEND/DATA.JS (YAKUNIY ANIQ NARXLAR BILAN)

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
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 100000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 60000 }, { id: 6, name: "Injector tozalash", price: 150000 },
      { id: 7, name: "Probeg tekshirish", price: 50000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 80000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
      { id: 13, name: "Russifikatsiya (Rus tilida qilish)", price: 150000 }, { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
    ],
    "Damas": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 100000 },
      { id: 3, name: "Tabloda datchik o'chirish", price: 50000 }, { id: 4, name: "Svechalarni almashtirish", price: 40000 },
      { id: 5, name: "Drosil tozalash", price: 60000 }, { id: 6, name: "Injector tozalash", price: 150000 },
      { id: 7, name: "Probeg tekshirish", price: 50000 }, { id: 8, name: "Programma yozish", price: 200000 },
      { id: 9, name: "Stage urish", price: 600000 }, { id: 10, name: "Gaz regulirovka", price: 50000 },
      { id: 11, name: "Benzin nasos ko'rish", price: 80000 }, { id: 12, name: "Simlarni to'g'irlash", price: 100000 },
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
    "Lasseti / Gentra": [
      { id: 1, name: "Diagnostika", price: 50000 }, { id: 2, name: "Benzin sistemasini ko'rish", price: 120000 },
      { id: 13, name: "Russifikatsiya", price: 150000 }
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
  "Audi": { /* qolgan brendlar... */ },
  // ... qolgan brendlar o'zgarishsiz qoldi.
};
