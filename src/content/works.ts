export type Locale = "en" | "tr";
export type Localized = Record<Locale, string>;
export type WorkCategory = "animation" | "illustration";

export type WorkVideo = {
  src: string;
  poster: string;
  width: number;
  height: number;
  loop?: boolean;
  muted?: boolean;
  label?: Localized;
};

export type Work = {
  slug: string;
  category: WorkCategory;
  year: string;
  cover: string;
  images: string[];
  videos?: WorkVideo[];
  title: Localized;
  subtitle: Localized;
  description: Localized;
};

export const works: Work[] = [
  {
    slug: "reel",
    category: "animation",
    year: "2025",
    cover: "/videos/reel/poster.jpg",
    images: [],
    videos: [
      {
        src: "/videos/reel/reel.mp4",
        poster: "/videos/reel/poster.jpg",
        width: 1920,
        height: 1080,
        loop: true,
      },
    ],
    title: {
      en: "2025 Animation Reel",
      tr: "2025 Animasyon Reeli",
    },
    subtitle: {
      en: "Selected animation",
      tr: "Seçilmiş animasyon",
    },
    description: {
      en: "A reel of recent 2D animation, character work, and commissioned pieces.",
      tr: "Güncel 2D animasyon, karakter işleri ve komisyonlardan bir reel.",
    },
  },
  {
    slug: "bubbles",
    category: "animation",
    year: "2025",
    cover: "/works/bubbles.gif",
    images: [
      "/works/bubbles.gif",
      "/works/bubbles.jpeg",
      "/works/bubble-merge.gif",
    ],
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
    cover: "/works/beesider.gif",
    images: [
      "/works/beesider.gif",
      "/works/milana.gif",
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
    cover: "/works/strike-1.gif",
    images: [
      "/works/strike-1.gif",
      "/works/strike-2.gif",
      "/works/strike-cover.jpeg",
    ],
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
    cover: "/works/obsa.gif",
    images: ["/works/obsa.gif", "/works/obsa.jpeg"],
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
    cover: "/works/blob-loop.gif",
    images: [
      "/works/blob-loop.gif",
      "/works/blob.gif",
      "/works/blob-rotoscope.gif",
    ],
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

export function workVideos(work: Work) {
  return work.videos ?? [];
}

export function workPosterSrcs(work: Work) {
  return workVideos(work).map((video) => video.poster);
}
