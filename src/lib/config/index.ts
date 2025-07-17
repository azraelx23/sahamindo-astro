import type { Link } from "../types";

export const SITE = {
  title: "Saham Indonesia News",
  description: "Berita dan analisis pasar saham Indonesia terkini - Platform terpercaya untuk investor dan trader",
  author: "Tim Redaksi Saham Indonesia",
  url: "https://astro-news-six.vercel.app",
  github: "https://github.com/Mrahmani71/astro-news",
  locale: "id-ID",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/pasar-saham",
    text: "Pasar Saham",
  },
  {
    href: "/categories/analisis-perusahaan",
    text: "Analisis Perusahaan",
  },
  {
    href: "/categories/berita-ekonomi",
    text: "Berita Ekonomi",
  },
  {
    href: "/categories/kebijakan-pemerintah",
    text: "Pemerintah",
  },
  {
    href: "/categories/analisis-teknikal",
    text: "Analisis Teknikal",
  },
  {
    href: "/categories/ipo-rights-issue",
    text: "IPO & Rights Issue",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "Tentang Kami",
  },
  {
    href: "/authors",
    text: "Tim Analis",
  },
  {
    href: "/contact",
    text: "Kontak",
  },
  {
    href: "/privacy",
    text: "Kebijakan Privasi",
  },
  {
    href: "/terms",
    text: "Syarat & Ketentuan",
  },
  {
    href: "/cookie-policy",
    text: "Kebijakan Cookie",
  },
  {
    href: "https://astro-news-six.vercel.app/rss.xml",
    text: "RSS",
  },
  {
    href: "https://astro-news-six.vercel.app/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
