export type Locale = "en" | "tr";
export type Localized = Record<Locale, string>;
export type WorkCategory = "animation" | "illustration";

export type Work = {
  slug: string;
  category: WorkCategory;
  year: string;
  cover: string;
  images: string[];
  title: Localized;
  subtitle: Localized;
  description: Localized;
};

export const works: Work[] = [
  {
    slug: "bubbles",
    category: "animation",
    year: "2025",
    cover: "/works/bubbles.jpeg",
    images: ["/works/bubbles.jpeg", "/works/bubble-merge.gif"],
    title: {
      en: "Comes and Goes (Bubbles)",
      tr: "Comes and Goes (Bubbles)",
    },
    subtitle: {
      en: "Personal project",
      tr: "Kişisel proje",
    },
    description: {
      en: "Short animation clip for a gallery installation, exhibited in public galleries.",
      tr: "Kamuya açık galerilerde sergilenen, enstalasyon için üretilmiş kısa animasyon.",
    },
  },
  {
    slug: "beesider",
    category: "animation",
    year: "2023–2024",
    cover: "/works/beesider-milana.gif",
    images: [
      "/works/beesider-milana.gif",
      "/works/beesider-intro.gif",
      "/works/beesider-starnose.gif",
    ],
    title: {
      en: "Beesider",
      tr: "Beesider",
    },
    subtitle: {
      en: "2D Animation Intern",
      tr: "2D Animasyon Stajı",
    },
    description: {
      en: "Character animation, turnarounds, walk cycles, in-betweens, and rough animation across multiple visual styles — including Milana, an anime intro, and a Starnose walk-cycle.",
      tr: "Milana, bir anime intro ve Starnose yürüyüş döngüsü dahil olmak üzere birden fazla görsel dilde karakter animasyonu, turnaround, yürüyüş döngüsü ve ara kareler.",
    },
  },
  {
    slug: "strike",
    category: "animation",
    year: "2023–2024",
    cover: "/works/strike-cover.jpeg",
    images: ["/works/strike-cover.jpeg"],
    title: {
      en: "Strike!",
      tr: "Strike!",
    },
    subtitle: {
      en: "Senior capstone · Video game",
      tr: "Bitirme projesi · Video oyunu",
    },
    description: {
      en: "Sole animator and director of a nine-person development team, contributing to animation, visual development, and project management for an original game.",
      tr: "Dokuz kişilik geliştirme ekibinin tek animatörü ve yönetmeni; orijinal bir oyun için animasyon, görsel geliştirme ve proje yönetimi.",
    },
  },
  {
    slug: "obsa",
    category: "animation",
    year: "2024",
    cover: "/works/obsa.jpeg",
    images: ["/works/obsa.jpeg"],
    title: {
      en: "Obsa",
      tr: "Obsa",
    },
    subtitle: {
      en: "Commission · St. Olaf Marketing",
      tr: "Komisyon · St. Olaf Marketing",
    },
    description: {
      en: "Animation commission produced for the St. Olaf College Marketing Department.",
      tr: "St. Olaf College Pazarlama Departmanı için üretilmiş animasyon komisyonu.",
    },
  },
  {
    slug: "blob",
    category: "animation",
    year: "2023",
    cover: "/works/blob.gif",
    images: ["/works/blob.gif", "/works/blob-rotoscope.gif"],
    title: {
      en: "Blob",
      tr: "Blob",
    },
    subtitle: {
      en: "Rotoscope & straight-ahead",
      tr: "Rotoskop ve straight-ahead",
    },
    description: {
      en: "Traced performance (rotoscope) studies and straight-ahead bubble merging animation.",
      tr: "Performans takibi (rotoskop) çalışmaları ve straight-ahead balon birleşme animasyonu.",
    },
  },
  {
    slug: "bally",
    category: "illustration",
    year: "2023–2024",
    cover: "/works/bally-character-sheet.jpg",
    images: [
      "/works/bally-character-sheet.jpg",
      "/works/bedroom-dark.png",
      "/works/bedroom-light.png",
    ],
    title: {
      en: "Bally",
      tr: "Bally",
    },
    subtitle: {
      en: "Video game · Bally's Bedroom",
      tr: "Video oyunu · Bally's Bedroom",
    },
    description: {
      en: "Character sheet and bedroom environments for Bally's Bedroom by Noah Schilbe — set direction, design, color, and light.",
      tr: "Noah Schilbe'nin Bally's Bedroom oyunu için karakter sayfası ve yatak odası ortamları — set yönlendirmesi, tasarım, renk ve ışık.",
    },
  },
  {
    slug: "bowling-alley",
    category: "illustration",
    year: "2023–2024",
    cover: "/works/bowling-alley.png",
    images: ["/works/bowling-alley.png"],
    title: {
      en: "Bowling Alley",
      tr: "Bowling Salonu",
    },
    subtitle: {
      en: "Set direction, design, color, light",
      tr: "Set yönlendirmesi, tasarım, renk, ışık",
    },
    description: {
      en: "Environment illustration with set direction, design, color, and lighting. Illustration by Kristen Kryzle Sison.",
      tr: "Set yönlendirmesi, tasarım, renk ve ışık üzerine ortam illüstrasyonu. İllüstrasyon: Kristen Kryzle Sison.",
    },
  },
  {
    slug: "paintings",
    category: "illustration",
    year: "2023",
    cover: "/works/short-oil.jpg",
    images: [
      "/works/cock-oil.jpg",
      "/works/short-oil.jpg",
      "/works/babam.jpeg",
    ],
    title: {
      en: "Painting & Drawing",
      tr: "Resim ve Çizim",
    },
    subtitle: {
      en: "Oil, ink, charcoal",
      tr: "Yağlıboya, mürekkep, kömür",
    },
    description: {
      en: "Selected studio works including Cock (oil on canvas, 2023), Short (oil on canvas, 2023, St. Olaf Juried Show ’24), and Babam (ink on plexiglass, 2023).",
      tr: "Cock (tuval üzerine yağlıboya, 2023), Short (tuval üzerine yağlıboya, 2023, St. Olaf Jürili Sergi ’24) ve Babam (pleksi üzerine mürekkep, 2023) dahil seçilmiş stüdyo işleri.",
    },
  },
  {
    slug: "self-portraits",
    category: "illustration",
    year: "2022–2024",
    cover: "/works/self-portrait-2.jpeg",
    images: [
      "/works/drawing-embrace.jpeg",
      "/works/self-portrait-1.jpeg",
      "/works/self-portrait-2.jpeg",
      "/works/self-portrait-3.jpg",
      "/works/self-portrait-5.jpeg",
    ],
    title: {
      en: "Self-Portraits",
      tr: "Otoportreler",
    },
    subtitle: {
      en: "Charcoal & drawing",
      tr: "Kömür ve çizim",
    },
    description: {
      en: "Figure drawing and self-portrait studies in charcoal and mixed drawing media.",
      tr: "Kömür ve karma çizim teknikleriyle figür ve otoportre çalışmaları.",
    },
  },
];

export function getWorksByCategory(category: WorkCategory) {
  return works.filter((work) => work.category === category);
}

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
