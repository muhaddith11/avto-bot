const commonServices = [
  { id: 1, name: "Diagnostika", price: 50000 },
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
  { id: 13, name: "Russifikatsiya (Tabloni rus tilida qilish)", price: 150000 },
  { id: 14, name: "Prilojeniye (Ilovalar) o'rnatish", price: 100000 }
];

const chevroletModels = ["Cobalt", "Gentra", "Nexia 1", "Nexia 2", "Nexia 3", "Spark", "Matiz", "Damas", "Labo", "Malibu", "Tracker", "Equinox", "Captiva", "Tahoe", "Traverse", "Epica", "Monza", "Onix"];
const kiaModels = ["K5", "Carnival", "Sorento", "Sonet", "Cerato", "Sportage", "Bongo"];
const hyundaiModels = ["Tucson", "Sonata", "Elantra", "Santa Fe", "Creta", "Palisade", "Staria"];
const bydModels = ["Song Plus", "Chazor", "Han", "Seal", "Song Pro"];
const ladaModels = ["Vesta", "Largus", "Granta", "Niva"];

const buildCatalog = (models) => {
  const result = {};
  models.forEach(model => {
    result[model] = [...commonServices];
  });
  return result;
};

module.exports = {
  Chevrolet: buildCatalog(chevroletModels),
  Kia: buildCatalog(kiaModels),
  Hyundai: buildCatalog(hyundaiModels),
  BYD: buildCatalog(bydModels),
  Lada: buildCatalog(ladaModels),
  "Boshqa": buildCatalog(["Boshqa rusum"])
};
