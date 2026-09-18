export const site = {
  name: "Kernel & Press",
  legalName: "Kernel and Press Pvt Ltd",
  tagline: "COLD PRESSED OILS",
  motto: "The seeds you select, pressed for the family you love.",
  description:
    "100% pure, wholesome culinary oils cold-pressed in Sangareddy, Telangana. Mechanical expellers, zero added heat, double-filtered for clarity and shelf life.",
  url: "https://www.kernelandpress.com",
  email: "admin@kernelandpress.com",
  phoneDisplay: "+91 95151 29292",
  phoneTel: "+919515129292",
  address: {
    line: "Plot 105, Teja Garden, Kulabgoor, Sangareddy, Telangana, India-502294",
    locality: "Sangareddy",
    region: "Telangana",
    postalCode: "502294",
    country: "IN",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Oils" },
  { href: "/process", label: "Our Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const oils = [
  {
    slug: "groundnut",
    name: "Groundnut / Peanut Oil",
    originNote: "A South Indian kitchen staple",
    blurb:
      "Nutty, familiar, and made for everyday tadka and frying. Cold-pressed groundnut oil keeps the aroma of the seed in the kadhai—without added heat in the press.",
  },
  {
    slug: "sesame",
    name: "Sesame Oil",
    originNote: "Gingelly richness",
    blurb:
      "Deep, toasted character that belongs in pickles, podis, and finishing a vegetable fry. Pressed from sesame so the oil stays true to the seed.",
  },
  {
    slug: "coconut",
    name: "Coconut Oil",
    originNote: "Coastal cooking, inland care",
    blurb:
      "Clean coconut sweetness for curries, sweets, and traditional recipes that call for a gentle, wholesome fat.",
  },
  {
    slug: "mustard",
    name: "Mustard Oil",
    originNote: "Pungent and warming",
    blurb:
      "The sharp, alive flavour families reach for in certain regional kitchens. Mechanical pressing holds onto that characteristic bite.",
  },
  {
    slug: "sunflower",
    name: "Sunflower Oil",
    originNote: "Light on the palate",
    blurb:
      "A lighter, everyday oil for sautéing and baking when you want a milder seed flavour with the same cold-pressed care.",
  },
  {
    slug: "almond",
    name: "Almond Oil",
    originNote: "A finer press",
    blurb:
      "Delicate and nutty—suited to finishing, special recipes, and kitchens that want a small-batch almond oil in the pantry.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Select the seeds",
    body: "Oil is only as honest as what goes into the hopper. We start with carefully selected seeds and kernels—the same standard we would cook with at home.",
  },
  {
    number: "02",
    title: "Mechanical expeller, no added heat",
    body: "Seeds are pressed in mechanical expellers with zero added heat. Cold pressing is how we keep vital nutrients, natural antioxidants, and the seed’s authentic flavour.",
  },
  {
    number: "03",
    title: "Double-filtered to reduce FFA",
    body: "Every batch is double-filtered to eliminate free fatty acids (FFA), supporting clearer oil, better shelf life, and oil that sits well with digestion.",
  },
  {
    number: "04",
    title: "Hygienic packing",
    body: "Oil is packed from a strictly dust-free, hygienic facility. Expellers and equipment are steam-cleaned every day to strip residues, contaminants, and impurities before the next run.",
  },
] as const;
