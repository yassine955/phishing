// Dutch fake data generator for security awareness training

const dutchVoornamen = [
  "Jan", "Pieter", "Willem", "Kees", "Henk", "Daan", "Sem", "Lucas", "Levi", "Finn",
  "Anna", "Emma", "Sophie", "Julia", "Sara", "Lisa", "Eva", "Mila", "Lotte", "Tessa",
  "Thomas", "Lars", "Tim", "Bram", "Milan", "Stijn", "Jesse", "Thijs", "Ruben", "Max",
  "Fleur", "Femke", "Iris", "Anouk", "Sanne", "Linda", "Marieke", "Esther", "Kim", "Nicole",
  "Wouter", "Jasper", "Niels", "Sander", "Rick", "Kevin", "Dennis", "Jeroen", "Arjan", "Frank",
  "Marjolein", "Monique", "Wendy", "Patricia", "Ingrid", "Judith", "Rianne", "Sandra", "Petra", "Yvonne"
];

const dutchAchternamen = [
  "de Jong", "Jansen", "de Vries", "van den Berg", "van Dijk", "Bakker", "Janssen", "Visser",
  "Smit", "Meijer", "de Boer", "Mulder", "de Groot", "Bos", "Vos", "Peters", "Hendriks",
  "van Leeuwen", "Dekker", "Brouwer", "de Wit", "Dijkstra", "Smits", "de Graaf", "van der Meer",
  "van der Linden", "Kok", "Jacobs", "de Haan", "Vermeer", "van den Heuvel", "van der Veen",
  "van den Broek", "de Bruijn", "de Bruin", "van der Heijden", "Schouten", "van Beek",
  "Willems", "van Vliet", "van der Ven", "Hoekstra", "Maas", "Verhoeven", "Koster",
  "van Dam", "van der Wal", "Prins", "Blom", "Huisman"
];

const dutchSteden = [
  "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Tilburg",
  "Almere", "Breda", "Nijmegen", "Enschede", "Apeldoorn", "Haarlem", "Arnhem", "Zaanstad",
  "Amersfoort", "Haarlemmermeer", "Den Bosch", "Zoetermeer", "Zwolle", "Maastricht",
  "Leiden", "Dordrecht", "Ede", "Delft", "Deventer", "Alkmaar", "Emmen", "Venlo", "Leeuwarden"
];

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateFakeIP(): string {
  // Generate realistic-looking Dutch IP ranges (common ISPs)
  const dutchIPPrefixes = [
    "84.241", "87.210", "77.161", "82.217", "83.160", "84.35", "86.83", "94.208",
    "145.53", "149.210", "188.206", "195.121", "213.46", "217.120"
  ];
  const prefix = randomElement(dutchIPPrefixes);
  return `${prefix}.${randomInt(0, 255)}.${randomInt(1, 254)}`;
}

function generateGeboortedatum(): string {
  // Generate a birth date between 1950 and 2005
  const year = randomInt(1950, 2005);
  const month = randomInt(1, 12);
  const day = randomInt(1, 28); // Using 28 to avoid invalid dates
  return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
}

function generateBSN(): string {
  // Generate a fake BSN (Dutch citizen service number) - 9 digits
  // Note: This is completely fake and does not follow real BSN validation rules
  return Array.from({ length: 9 }, () => randomInt(0, 9)).join('');
}

function generateTelefoonnummer(): string {
  // Generate a Dutch mobile number
  const prefixes = ["06"];
  const prefix = randomElement(prefixes);
  return `${prefix}-${randomInt(10000000, 99999999)}`;
}

function generateEmail(voornaam: string, achternaam: string): string {
  const domains = ["gmail.com", "hotmail.nl", "outlook.com", "live.nl", "ziggo.nl", "kpnmail.nl", "xs4all.nl"];
  const cleanAchternaam = achternaam.replace(/\s+/g, '').toLowerCase();
  const cleanVoornaam = voornaam.toLowerCase();
  const variations = [
    `${cleanVoornaam}.${cleanAchternaam}`,
    `${cleanVoornaam}${cleanAchternaam}`,
    `${cleanVoornaam}${randomInt(1, 99)}`,
    `${cleanAchternaam}${cleanVoornaam.charAt(0)}`,
  ];
  return `${randomElement(variations)}@${randomElement(domains)}`;
}

function generatePostcode(): string {
  return `${randomInt(1000, 9999)} ${String.fromCharCode(65 + randomInt(0, 25))}${String.fromCharCode(65 + randomInt(0, 25))}`;
}

export interface DutchPerson {
  voornaam: string;
  achternaam: string;
  geboortedatum: string;
  stad: string;
  postcode: string;
  telefoonnummer: string;
  email: string;
  ipAdres: string;
  bsn: string;
}

export function generateDutchPerson(): DutchPerson {
  const voornaam = randomElement(dutchVoornamen);
  const achternaam = randomElement(dutchAchternamen);

  return {
    voornaam,
    achternaam,
    geboortedatum: generateGeboortedatum(),
    stad: randomElement(dutchSteden),
    postcode: generatePostcode(),
    telefoonnummer: generateTelefoonnummer(),
    email: generateEmail(voornaam, achternaam),
    ipAdres: generateFakeIP(),
    bsn: generateBSN(),
  };
}
