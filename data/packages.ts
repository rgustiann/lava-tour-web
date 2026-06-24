export interface TourPackage {
  id: number;
  name: string;
  price: number;
  route: string;
  duration: string;
  rating: number;
  description: string;
  includes: string[];
  image: string;
}

export interface PopularRoute {
  id: number;
  name: string;
  description: string;
  duration: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  trip: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    name: "Paket Lava Tour Sunrise",
    price: 550000,
    route: "Bunker Kaliadem (Sunrise) → Batu Alien → Maneuver Kali Kuning",
    duration: "1,5 Jam",
    rating: 4.9,
    description: "Saksikan keindahan matahari terbit berlatar Gunung Merapi yang megah menggunakan Jeep wisata.",
    includes: ["Jeep terbuka", "Guide lokal", "Air mineral", "Dokumentasi", "Lighting equipment"],
    image: "/images/package/sunrise.jpg",
  },
  {
    id: 2,
    name: "Paket Lava Tour Short",
    price: 550000,
    route: "Museum Sisa Hartaku → Bunker Kaliadem → Batu Alien → Maneuver Kali Kuning",
    duration: "1,5 Jam",
    rating: 4.6,
    description: "Nikmati petualangan seru menyusuri rute pendek terpopuler di kaki Gunung Merapi.",
    includes: ["Jeep terbuka", "Guide lokal", "Air mineral", "Dokumentasi"],
    image: "/images/package/basic.jpg",
  },
  {
    id: 3,
    name: "Paket Lava Tour Medium",
    price: 650000,
    route: "Museum Sisa Hartaku → Bunker Kaliadem → Batu Alien → Maneuver Kali Kuning → Pasir Sengon",
    duration: "2 Jam",
    rating: 4.8,
    description: "Jelajahi lebih banyak spot menarik dengan rute sedang dan keseruan bermanuver di air.",
    includes: ["Jeep terbuka", "Guide lokal", "Air mineral", "Dokumentasi"],
    image: "/images/package/medium.jpg",
  },
  {
    id: 4,
    name: "Paket Lava Tour Long",
    price: 700000,
    route: "Museum Sisa Hartaku → Bunker Kaliadem → Batu Alien → Maneuver Kali Kuning → Rumah Mbah Maridjan",
    duration: "2,5 Jam",
    rating: 4.9,
    description: "Petualangan lengkap menjelajahi seluruh kawasan bersejarah Merapi hingga kediaman sang juru kunci.",
    includes: ["Jeep terbuka", "Guide lokal", "Air mineral", "Dokumentasi"],
    image: "/images/package/fullday.jpg",
  },
];

export const popularRoutes: PopularRoute[] = [
  {
    id: 1,
    name: "Kaliurang",
    description: "Rute klasik melewati pemukiman dan hamparan pasir lava yang membeku.",
    duration: "2 Jam",
    image: "/images/rute/kaliurang.webp",
  },
  {
    id: 2,
    name: "Bunker Kaliadem",
    description: "Jelajahi bunker bersejarah yang menjadi saksi erupsi Merapi 2006.",
    duration: "3 Jam",
    image: "/images/rute/bunker.webp",
  },
  {
    id: 3,
    name: "Kali Kuning",
    description: "Nikmati panorama Merapi dari ketinggian dengan pemandangan yang menakjubkan.",
    duration: "4 Jam",
    image: "/images/rute/kalikuning.webp",
  },
  {
    id: 4,
    name: "Museum Sisa Hartaku",
    description: "Melihat langsung rumah-rumah yang hancur terkena dampak erupsi Merapi.",
    duration: "1.5 Jam",
    image: "/images/rute/museum-sisa-hartaku.webp",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    text: "Pengalaman yang luar biasa! Jipnya nyaman, guide-nya ramah dan informatif. Sangat merekomendasikan Paket Long untuk pemandangan terbaik.",
    trip: "Paket Lava Tour Long",
  },
  {
    id: 2,
    name: "Siti Rahmawati",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    text: "Lava Tour Sunrise benar-benar magical! Melihat matahari terbit dari atas Jeep dengan latar Merapi sungguh tak terlupakan.",
    trip: "Paket Lava Tour Sunrise",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4,
    text: "Tour yang seru dan menantang. Anak-anak saya sangat senang. Harga terjangkau untuk pengalaman yang luar biasa.",
    trip: "Paket Lava Tour Medium",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Tips Aman Lava Tour di Merapi",
    excerpt: "Persiapkan diri Anda dengan baik sebelum memulai petualangan Lava Tour di lereng Merapi.",
    image: "/images/rute/kaliurang.webp",
    date: "15 Juni 2026",
    author: "Tim Jeep Lava Tour",
  },
  {
    id: 2,
    title: "Sejarah Erupsi Merapi & Dampaknya",
    excerpt: "Mengenal lebih dekat sejarah erupsi Gunung Merapi dan bagaimana wisata edukasi berkembang di sekitarnya.",
    image: "/images/rute/bunker.webp",
    date: "10 Juni 2026",
    author: "Tim Jeep Lava Tour",
  },
  {
    id: 3,
    title: "5 Spot Foto Terbaik di Lava Tour",
    excerpt: "Temukan spot-spot terbaik untuk mengabadikan momen petualangan Jeep Lava Tour Merapi Anda.",
    image: "/images/rute/kalikuning.webp",
    date: "5 Juni 2026",
    author: "Tim Jeep Lava Tour",
  },
];
