import type { Localized } from "./works";

export type ResumeEntry = {
  title: Localized;
  location: Localized;
  period: string;
  description: Localized;
};

export const experience: ResumeEntry[] = [
  {
    title: {
      en: "Promo Team Member at Minneapolis College of Art & Design",
      tr: "Tanıtım Ekibi Üyesi, Minneapolis College of Art & Design",
    },
    location: { en: "Minneapolis, MN, USA", tr: "Minneapolis, MN, ABD" },
    period: "2025–2026",
    description: {
      en: "Photographed MFA students and designed graphic elements for program events and promotional materials.",
      tr: "MFA öğrencilerini fotoğrafladı; program etkinlikleri ve tanıtım materyalleri için grafik öğeler tasarladı.",
    },
  },
  {
    title: {
      en: "Visual Arts & Education Associate at Northfield Arts Guild",
      tr: "Görsel Sanatlar ve Eğitim Asistanı, Northfield Arts Guild",
    },
    location: { en: "Northfield, MN, USA", tr: "Northfield, MN, ABD" },
    period: "2024–2025",
    description: {
      en: "Designed and led community art workshops in figure drawing and flipbook animation, while creating promotional materials and managing digital content.",
      tr: "Figür çizimi ve flipbook animasyonu atölyeleri tasarlayıp yürüttü; tanıtım materyalleri üretti ve dijital içeriği yönetti.",
    },
  },
  {
    title: {
      en: "St. Olaf Emerging Artist",
      tr: "St. Olaf Emerging Artist",
    },
    location: { en: "Northfield, MN, USA", tr: "Northfield, MN, ABD" },
    period: "2024–2025",
    description: {
      en: "Selected for a competitive artist residency with funded studio space, exhibitions, faculty mentorship, and teaching responsibilities.",
      tr: "Finanse edilen stüdyo, sergiler, mentörlük ve öğretim sorumlulukları içeren rekabetçi bir sanatçı programına seçildi.",
    },
  },
  {
    title: {
      en: "2D Animation Artist at Beesider Studio",
      tr: "2D Animasyon Sanatçısı, Beesider Studio",
    },
    location: { en: "Remote", tr: "Uzaktan" },
    period: "2024",
    description: {
      en: "Created 2D character animations, turnarounds, walk cycles, in-betweens, and rough animation across multiple visual styles under production deadlines.",
      tr: "Teslim tarihleri içinde birden fazla görsel dilde 2D karakter animasyonu, turnaround, yürüyüş döngüsü, ara kare ve rough animasyon üretti.",
    },
  },
  {
    title: {
      en: "Museum Assistant at Flaten Art Museum",
      tr: "Müze Asistanı, Flaten Art Museum",
    },
    location: { en: "Northfield, MN, USA", tr: "Northfield, MN, ABD" },
    period: "2023–2024",
    description: {
      en: "Supported museum operations, art handling, installation and deinstallation, collections management, and curatorial activities.",
      tr: "Müze operasyonları, eser taşıma, kurulum/söküm, koleksiyon yönetimi ve küratoryal çalışmalara destek verdi.",
    },
  },
  {
    title: {
      en: "Graphic Designer & Project Assistant at Piper Center, St. Olaf College",
      tr: "Grafik Tasarımcı ve Proje Asistanı, Piper Center, St. Olaf College",
    },
    location: { en: "Northfield, MN, USA", tr: "Northfield, MN, ABD" },
    period: "2023–2024",
    description: {
      en: "Created graphic, video, and animation assets for posters, social media, and web content for the Piper Center for Vocation and Career.",
      tr: "Piper Center için afiş, sosyal medya ve web içeriklerinde grafik, video ve animasyon üretti.",
    },
  },
  {
    title: {
      en: "Digital Scholarship Intern at DISCO, St. Olaf College",
      tr: "Dijital Scholarship Stajyeri, DISCO, St. Olaf College",
    },
    location: { en: "Northfield, MN, USA", tr: "Northfield, MN, ABD" },
    period: "2023",
    description: {
      en: "Created storyboards and multimedia assets using Blender and Adobe software while filming and editing video projects.",
      tr: "Blender ve Adobe yazılımlarıyla storyboard ve multimedya üretti; video projelerini çekip kurguladı.",
    },
  },
  {
    title: {
      en: "Art Editor at Quarry Literary & Fine Arts Magazine",
      tr: "Sanat Editörü, Quarry Literary & Fine Arts Magazine",
    },
    location: {
      en: "St. Olaf College, MN, USA",
      tr: "St. Olaf College, MN, ABD",
    },
    period: "2021–2024",
    description: {
      en: "Led visual direction and contributed to the curation and promotion of interdisciplinary student artwork through selection, outreach, and publication design.",
      tr: "Görsel yönlendirmeyi yürüttü; seçki, iletişim ve yayın tasarımıyla disiplinlerarası öğrenci işlerinin kürasyonu ve tanıtımına katkı verdi.",
    },
  },
  {
    title: {
      en: "Creative Intern at Deodato Arte",
      tr: "Kreatif Stajyer, Deodato Arte",
    },
    location: { en: "Milan, Italy", tr: "Milano, İtalya" },
    period: "2022",
    description: {
      en: "Edited and photographed artwork for a digital museum catalog and contributed to website design, UX, and multilingual digital content.",
      tr: "Dijital müze kataloğu için eserleri düzenleyip fotoğrafladı; web tasarımı, UX ve çok dilli içeriğe katkı verdi.",
    },
  },
];

export const education: ResumeEntry[] = [
  {
    title: {
      en: "MFA, New Media & Animation — Minneapolis College of Art & Design",
      tr: "MFA, New Media & Animation — Minneapolis College of Art & Design",
    },
    location: { en: "Minneapolis, MN, USA", tr: "Minneapolis, MN, ABD" },
    period: "2025–2026",
    description: {
      en: "First year completed.",
      tr: "Birinci yıl tamamlandı.",
    },
  },
  {
    title: {
      en: "BA, Studio Art — St. Olaf College",
      tr: "BA, Stüdyo Sanatı — St. Olaf College",
    },
    location: { en: "Northfield, MN, USA", tr: "Northfield, MN, ABD" },
    period: "2020–2024",
    description: {
      en: "GPA: 3.47",
      tr: "Not ortalaması: 3.47",
    },
  },
  {
    title: {
      en: "IB Bilingual Diploma — UWC Robert Bosch College",
      tr: "IB Çift Dilli Diploma — UWC Robert Bosch College",
    },
    location: { en: "Freiburg, Germany", tr: "Freiburg, Almanya" },
    period: "2018–2020",
    description: {
      en: "United World College.",
      tr: "United World College.",
    },
  },
];

export const productions = [
  {
    kind: { en: "Personal", tr: "Kişisel" },
    title: "Comes and Goes (Bubbles)",
    year: "2025",
    role: { en: "Animator & Director", tr: "Animatör ve Yönetmen" },
    company: { en: "Independent", tr: "Bağımsız" },
    image: "/works/bubbles.jpeg",
  },
  {
    kind: { en: "Video Game", tr: "Video Oyunu" },
    title: "Strike!",
    year: "2023–2024",
    role: {
      en: "Animator, Director, Visual Development",
      tr: "Animatör, Yönetmen, Görsel Geliştirme",
    },
    company: { en: "St. Olaf College", tr: "St. Olaf College" },
    image: "/works/strike-cover.jpeg",
  },
  {
    kind: { en: "Studio", tr: "Stüdyo" },
    title: "Beesider",
    year: "2024",
    role: { en: "2D Animation Artist", tr: "2D Animasyon Sanatçısı" },
    company: { en: "Beesider Studio", tr: "Beesider Studio" },
    image: "/works/beesider-milana.gif",
  },
] as const;

export const skills = [
  { en: "2D Animation", tr: "2D Animasyon" },
  { en: "Illustration", tr: "İllüstrasyon" },
  { en: "Character Design", tr: "Karakter Tasarımı" },
  { en: "Visual Development", tr: "Görsel Geliştirme" },
  { en: "Storytelling", tr: "Hikâye Anlatımı" },
  { en: "Graphic Design", tr: "Grafik Tasarım" },
] as const;

export const software = [
  "Clip Studio Paint",
  "Adobe Animate",
  "After Effects",
  "Photoshop",
  "Illustrator",
  "Blender",
  "OpenToonz",
  "DragonFrame",
  "DaVinci Resolve",
  "Premiere Pro",
  "Procreate",
];

export const exhibitions = [
  {
    title: "MCAD Mid-Program Review",
    place: "MCAD MFA Studios & Gallery",
    year: "2025",
  },
  {
    title: "MCAD MFA Open Studio Night",
    place: "MCAD MFA Studios & Gallery",
    year: "2025",
  },
  {
    title: "MCAD MFA Fall Show",
    place: "MCAD Main Gallery",
    year: "2025",
  },
  {
    title: "Emerging Artist Show",
    place: "Q.Arma Gallery, Minneapolis",
    year: "2025",
  },
  {
    title: "Carleton & St. Olaf Emerging Artist Showcase",
    place: "Northfield Arts Guild",
    year: "2025",
  },
  {
    title: "Emerging Artist Work-in-Progress Show",
    place: "Flaten Art Museum",
    year: "2024",
  },
  {
    title: "Northfield Arts Guild Annual Members' Show",
    place: "Northfield Arts Guild",
    year: "2024",
  },
  {
    title: "St. Olaf Senior Art Show",
    place: "St. Olaf College",
    year: "2024",
  },
];
