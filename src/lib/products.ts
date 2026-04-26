export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  oldPrice?: number;
  specs?: string;
  badge?: string;
  stock?: string;
  details?: string;
  sizes?: string[];
  note?: string;
}

export const HERO_PRODUCTS = [
  {
    id: "h1",
    name: "LAMBORGHINI REVUELTO",
    price: 700000,
    category: "HYPERCARS",
    image: "https://4kwallpapers.com/images/wallpapers/lamborghini-3840x2160-11125.jpeg",
    badge: "IN STOCK",
    specs: "6.9L V12 // 1,015 HP // 0-60 IN 2.5s",
    desc: "The new V12 hybrid benchmark. Pure power and flawless aerodynamic design. An engineering masterpiece."
  },
  {
    id: "h2",
    name: "BUGATTI CENTODIECI",
    price: 9000000,
    category: "HYPERCARS",
    image: "https://wallpapers.com/images/hd/bugatti-4k-bn6lkcogu4p28vu6.jpg",
    badge: "LIMITED",
    specs: "8.0L W16 // 1,600HP // 1 of 10",
    desc: "The Centodieci pays homage to the EB110. Only 10 produced. Every detail handcrafted in Molsheim."
  },
  {
    id: "h3",
    name: "IPHONE 17 PRO MAX",
    price: 1299,
    category: "TECH",
    image: "https://www.iclarified.com/images/news/98545/98545/98545-1280.jpg",
    badge: "IN STOCK",
    specs: "A19 Chip // 48MP Camera // 4K ProRes",
    desc: "The most advanced camera system and fastest processor ever created for a smartphone."
  },
  {
    id: "h4",
    name: "SAMSUNG S26 ULTRA",
    price: 1499,
    category: "TECH",
    image: "https://i0.wp.com/www.gizdev.com/wp-content/uploads/2025/12/Galaxy-S26-Ultra-Stock-Wallpapers.jpg?fit=1000%2C600&quality=95&ssl=1",
    badge: "NEW",
    specs: "Snapdragon 8 Elite // 200MP // S Pen",
    desc: "Top performance with a spectacular display. Productivity taken to the next level."
  },
  {
    id: "h5",
    name: "RTX 5090",
    price: 1999,
    category: "TECH",
    image: "https://wallpapercave.com/wp/wp15787821.jpg",
    badge: "LIMITED",
    specs: "32GB GDDR7 // 4K 240fps // Ray Tracing",
    desc: "The ultimate graphics card. Dominate any game and render complex scenes in the blink of an eye."
  },
  {
    id: "h6",
    name: "RX 7900 XTX",
    price: 999,
    category: "TECH",
    image: "https://pixelz.cc/wp-content/uploads/2024/01/amd-radeon-rx-7900-xtx-uhd-4k-wallpaper.jpg",
    badge: "IN STOCK",
    specs: "24GB GDDR6 // 4K Gaming",
    desc: "Top AMD performance for enthusiast gaming. Visual quality without compromise."
  },
  {
    id: "h7",
    name: "NIKE AIR MAX 2026",
    price: 189,
    category: "FASHION",
    image: "https://images4.alphacoders.com/108/1085299.jpg",
    badge: "IN STOCK",
    specs: "Limited edition // Absolute comfort",
    desc: "Timeless design rebuilt with future technologies. The ultimate in streetwear."
  },
  {
    id: "h8",
    name: "HERMÈS BIRKIN 25",
    price: 42000,
    category: "LUXURY",
    image: "https://pbs.twimg.com/ext_tw_video_thumb/1750244517771436032/pu/img/Jw5pEfolXkzcyV1_.jpg",
    badge: "LIMITED",
    specs: "Togo Leather // Gold Hardware",
    desc: "The ultimate symbol of luxury and elegance. A rare piece, an investment for life."
  },
  {
    id: "h9",
    name: "AIR JORDAN 1 RETRO HIGH",
    price: 279,
    category: "FASHION",
    image: "https://wallpapers.com/images/hd/yellow-jordan-4ji0iijqzdnbi2mh.jpg",
    badge: "IN STOCK",
    specs: "OG Colors // Authenticated",
    desc: "A piece of history for collectors. A classic silhouette that never goes out of style."
  },
  {
    id: "h10",
    name: "VILLA DUBAI PALM",
    price: 12500000,
    category: "REAL ESTATE",
    image: "https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg",
    badge: "AVAILABLE",
    specs: "7 Bedrooms // Private Pool // Beach Access",
    desc: "Absolute luxury in the heart of Dubai. An exceptional property with the highest quality finishes."
  },
  {
    id: "h11",
    name: "JEAN PAUL COLOGNE",
    price: 349,
    category: "LIFESTYLE",
    image: "https://wallpapercave.com/wp/wp13760348.jpg",
    badge: "IN STOCK",
    specs: "100ml EDT // Limited Edition 2026",
    desc: "A distinctive and bold fragrance for the modern man. Irresistible and memorable."
  }
];

export const HYPERCARS = [
  ...HERO_PRODUCTS.slice(0, 2),
  {
    id: "hc3",
    name: "KOENIGSEGG JESKO",
    price: 3000000,
    category: "HYPERCARS",
    image: "https://4kwallpapers.com/images/wallpapers/koenigsegg-jesko-5120x2880-18327.jpg", 
    specs: "5.0L V8 Twin-Turbo // 1,600HP // 300+ MPH",
    badge: "LIMITED"
  },
  {
    id: "hc4",
    name: "MCLAREN SENNA",
    price: 1250000,
    category: "HYPERCARS",
    image: "https://wallpapercave.com/wp/wp12669818.jpg",
    specs: "4.0L V8 Twin-Turbo // 789HP // Aero Focus",
    badge: "AVAILABLE"
  }
];

export const TECH_PRODUCTS = [
  HERO_PRODUCTS[2],
  HERO_PRODUCTS[3],
  HERO_PRODUCTS[4],
  {
    ...HERO_PRODUCTS[5],
    oldPrice: 1199,
    badge: "SALE"
  }
];

export const FASHION_PRODUCTS = [
  {
    ...HERO_PRODUCTS[6],
    details: "Limited colorway. Sizes 7-15.",
    badge: "NEW DROP",
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    ...HERO_PRODUCTS[8],
    badge: "RARE",
    details: "OG colorway. Authentic. Deadstock.",
    stock: "Only 3 pairs left"
  },
  {
    ...HERO_PRODUCTS[7],
    badge: "AUTHENTICATED",
    details: "Togo Leather. Gold Hardware. Authenticated.",
    note: "Certificate of authenticity included"
  },
  {
    id: "f-vision",
    name: "VISION PRO 2",
    price: 3499,
    category: "FASHION",
    image: "https://wallpapercave.com/wp/wp12391819.png",
    badge: "PRE-ORDER",
    specs: "Micro-OLED // Spatial Computing",
    details: "The next generation of spatial computing. Limited Fashion Edition."
  }
];

export const REAL_ESTATE_PRODUCTS = [
  {
    ...HERO_PRODUCTS[9],
    id: "re1",
    specs: "7 Bedrooms // Private Pool // Beach Access",
    details: "Full sea view. 847 sqm. Smart home system.",
    badge: "EXCLUSIVE LISTING"
  },
  {
    id: "re-dubai",
    name: "LUXURY VILLA DUBAI PALM",
    price: 18500000,
    category: "REAL ESTATE",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    specs: "6 Bedrooms // Infinity Pool // Private Beach",
    badge: "NEW",
    details: "Ultra-luxury living on the Palm Jumeirah."
  },
  {
    id: "re2",
    name: "PENTHOUSE MONACO",
    price: 8200000,
    category: "REAL ESTATE",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    specs: "4 Bedrooms // Panoramic Ocean View",
    badge: "NEW LISTING"
  }
];
