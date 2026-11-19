import { contact, identity, productCategories, projects, services, startSteps, techDomains, values } from "@/app/content";
import { CHAT_BACKEND_ENABLED } from "@/lib/support-chat/api";
import type { FaqEntry } from "@/lib/support-chat/types";

const identityValue = (label: string) => identity.find((item) => item.label === label)?.value ?? "";

const servicesSummary = services.map((service) => `${service.name}: ${service.description}`).join("\n");

const stepsSummary = startSteps.map((step, index) => `${index + 1}. ${step.title}: ${step.body}`).join("\n");

const productsSummary = productCategories
  .flatMap((category) => category.products)
  .map((product) => `${product.name} (${product.tagline}): ${product.description}`)
  .join("\n");

const techDomainsSummary = techDomains
  .map((domain) => `${domain.name}: ${domain.items.join(", ")}`)
  .join("\n");

const projectsSummary = projects.map((project) => `${project.num}. ${project.title} — ${project.position}`).join("\n");

const valuesSummary = values.map((value) => `${value.title}: ${value.body}`).join("\n");

export const WELCOME_ENTRY_ID = "greeting";
export const ESCALATION_ENTRY_ID = "talk-human";

export const faqEntries: FaqEntry[] = [
  {
    id: WELCOME_ENTRY_ID,
    intent: "sapaan",
    keywords: ["halo", "hai", "hi", "hello", "pagi", "siang", "sore", "malam"],
    question: "Halo",
    answer: `Halo! Saya asisten FAQ ${identityValue("Nama Perusahaan") || "N⁻¹ Labs"}. Pilih topik di bawah, atau ketik pertanyaan Anda.`,
    quickReplies: [
      { label: "Layanan kami", targetId: "services" },
      { label: "Harga dan DP", targetId: "pricing" },
      { label: "Cara memulai", targetId: "process" },
      { label: "Bicara dengan manusia", targetId: ESCALATION_ENTRY_ID },
    ],
  },
  {
    id: "about",
    intent: "tentang-perusahaan",
    keywords: [
      "siapa",
      "tentang",
      "profil",
      "perusahaan",
      "n1 labs",
      "n 1 labs",
      "didirikan",
      "berdiri",
    ],
    question: "Apa itu N⁻¹ Labs?",
    answer: [
      `${identityValue("Nama Perusahaan")} adalah perusahaan ${identityValue("Industri")} yang berbasis di ${identityValue("Lokasi")}, didirikan pada ${identityValue("Didirikan")}.`,
      `Arah jangka panjang kami: ${identityValue("Arah Jangka Panjang")}.`,
    ].join("\n\n"),
    quickReplies: [
      { label: "Layanan kami", targetId: "services" },
      { label: "Produk kami", targetId: "products" },
      { label: "Lokasi kantor", targetId: "location" },
      { label: "Hubungi tim", targetId: "contact" },
    ],
  },
  {
    id: "services",
    intent: "layanan",
    keywords: ["layanan", "servis", "jasa", "service", "dikerjakan", "kerjakan", "sistem order", "sistem keuangan", "sistem gudang", "sistem kasir", "e-commerce", "website"],
    question: "Apa saja layanan N⁻¹ Labs?",
    answer: `Kami membangun sistem bisnis custom. Mulai dari sistem order, lalu sistem lain bisa ditambah satu per satu:\n\n${servicesSummary}`,
    quickReplies: [
      { label: "Cara memulai", targetId: "process" },
      { label: "Harga dan DP", targetId: "pricing" },
      { label: "Produk kami", targetId: "products" },
      { label: "Hubungi tim", targetId: "contact" },
    ],
  },
  {
    id: "process",
    intent: "proses-kerja",
    keywords: ["proses", "cara kerja", "mulai proyek", "memulai", "mulai", "workflow", "tahapan", "booking", "pesan", "langkah"],
    question: "Bagaimana cara memulai proyek?",
    answer: `Lima langkah dari booking sampai berjalan:\n\n${stepsSummary}\n\nBooking lewat halaman Booking Proyek di situs ini.`,
    quickReplies: [
      { label: "Harga dan DP", targetId: "pricing" },
      { label: "Layanan kami", targetId: "services" },
      { label: "Hubungi tim", targetId: "contact" },
    ],
  },
  {
    id: "pricing",
    intent: "harga-dan-dp",
    keywords: ["harga", "biaya", "tarif", "berapa", "dp", "bayar", "pembayaran", "refund", "kembali", "uang muka", "gratis"],
    question: "Berapa harga dan bagaimana DP-nya?",
    answer:
      "Booking dan konsultasi awal gratis. Setelah itu Anda menerima penawaran tertulis dengan harga tetap per tahap, jadi nominalnya bergantung pada sistem dan kebutuhan Anda.\n\nDP baru dibayar setelah Anda menyetujui penawaran, dan dikembalikan penuh jika hasil tahap awal tidak Anda terima.",
    quickReplies: [
      { label: "Cara memulai", targetId: "process" },
      { label: "Hubungi tim", targetId: "contact" },
    ],
  },
  {
    id: "products",
    intent: "produk-sendiri",
    keywords: ["produk", "getruzz", "systemma", "bukti", "klien", "referensi", "contoh", "demo"],
    question: "Apa produk yang sudah berjalan?",
    answer: `N⁻¹ Labs berdiri tahun 2026 dan belum punya klien proyek custom. Yang bisa Anda periksa hari ini adalah dua produk buatan kami sendiri:\n\n${productsSummary}`,
    quickReplies: [
      { label: "Portofolio", targetId: "portfolio" },
      { label: "Layanan kami", targetId: "services" },
      { label: "Hubungi tim", targetId: "contact" },
    ],
  },
  {
    id: "tech-domains",
    intent: "domain-teknologi",
    keywords: ["teknologi", "domain", "ai agent", "llm", "expertise", "keahlian", "kuasai", "stack"],
    question: "Domain teknologi apa saja yang dikuasai N⁻¹ Labs?",
    answer: `Domain teknologi yang kami kerjakan:\n\n${techDomainsSummary}`,
    quickReplies: [
      { label: "Portofolio", targetId: "portfolio" },
      { label: "Hubungi tim", targetId: "contact" },
    ],
  },
  {
    id: "portfolio",
    intent: "portofolio-proyek",
    keywords: ["portofolio", "portfolio", "proyek", "project", "karya", "case study"],
    question: "Apa saja proyek yang pernah dikerjakan N⁻¹ Labs?",
    answer: `Beberapa proyek yang pernah kami kerjakan:\n\n${projectsSummary}`,
    quickReplies: [
      { label: "Layanan kami", targetId: "services" },
      { label: "Hubungi tim", targetId: "contact" },
    ],
  },
  {
    id: "values",
    intent: "nilai-perusahaan",
    keywords: ["nilai", "nilai perusahaan", "values", "prinsip", "budaya kerja", "budaya", "culture"],
    question: "Apa nilai-nilai N⁻¹ Labs?",
    answer: `Nilai-nilai yang kami pegang:\n\n${valuesSummary}`,
    quickReplies: [
      { label: "Tentang perusahaan", targetId: "about" },
      { label: "Hubungi tim", targetId: "contact" },
    ],
  },
  {
    id: "location",
    intent: "lokasi",
    keywords: ["lokasi", "alamat", "dimana", "kantor", "kota", "domisili"],
    question: "Di mana lokasi N⁻¹ Labs?",
    answer: `Kami berbasis di ${identityValue("Lokasi")}.`,
    quickReplies: [{ label: "Hubungi tim", targetId: "contact" }],
  },
  {
    id: "contact",
    intent: "kontak",
    keywords: ["kontak", "hubungi", "whatsapp", "email", "telepon", "cs", "customer service"],
    question: "Bagaimana cara menghubungi tim?",
    answer: `Anda bisa menghubungi kami lewat WhatsApp di ${contact.whatsappDisplay} atau email ke ${contact.email}.`,
    quickReplies: [{ label: "Bicara dengan manusia", targetId: ESCALATION_ENTRY_ID }],
  },
  {
    id: "how-chat-works",
    intent: "cara-kerja-chat",
    keywords: [
      "bot atau manusia",
      "apakah ini ai",
      "apakah ini bot",
      "chat ini apa",
      "bagaimana chat ini bekerja",
    ],
    question: "Apakah ini chat AI?",
    answer:
      "Chat ini adalah asisten FAQ otomatis dan tidak menggunakan AI — jawabannya selalu berasal dari daftar FAQ tetap. Untuk pertanyaan di luar FAQ, Anda bisa terhubung dengan tim kami secara langsung.",
    quickReplies: [{ label: "Bicara dengan manusia", targetId: ESCALATION_ENTRY_ID }],
  },
  {
    id: ESCALATION_ENTRY_ID,
    intent: "eskalasi-manusia",
    keywords: [
      "bicara dengan manusia",
      "agent",
      "operator",
      "cs manusia",
      "ngobrol dengan orang",
      "talk to human",
      "manusia",
      "orang asli",
    ],
    question: "Bicara dengan manusia",
    answer: CHAT_BACKEND_ENABLED
      ? "Baik, pesan Anda sudah tercatat di tiket ini dan tim kami akan menghubungi Anda kembali. Anda juga bisa langsung menghubungi kami lewat WhatsApp atau email di bawah ini sambil menunggu."
      : `Untuk bicara langsung dengan tim kami, hubungi lewat WhatsApp ${contact.whatsappDisplay} atau email ${contact.email}.`,
    quickReplies: [{ label: "Lihat kontak", targetId: "contact" }],
  },
  {
    id: "thanks",
    intent: "ucapan-terima-kasih",
    keywords: [
      "terima kasih",
      "makasih",
      "mksh",
      "thanks",
      "thank you",
      "trims",
      "tengkyu",
    ],
    question: "Terima kasih",
    answer: "Sama-sama! Senang bisa membantu. Kalau ada pertanyaan lain, jangan ragu untuk bertanya ya.",
    quickReplies: [{ label: "Hubungi tim", targetId: "contact" }],
  },
];

export const FALLBACK_MESSAGE =
  "Maaf, saya belum menemukan jawaban yang cocok di FAQ. Anda bisa mencoba kata kunci lain, atau tekan tombol di bawah untuk terhubung dengan tim kami.";
