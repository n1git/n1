import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import AppWindow from "@/components/landing/AppWindow";
import ChatPreview from "@/components/landing/ChatPreview";
import ChecklistPreview from "@/components/landing/ChecklistPreview";
import { contact, services, startSteps } from "./content";
import { organizationJsonLd } from "./seo";

const WHATSAPP_URL = `https://wa.me/${contact.whatsapp}`;
const MAILTO_URL = `mailto:${contact.email}`;

function BrandIcon({ path, viewBox = "0 0 24 24" }: { path: string; viewBox?: string }) {
  return (
    <svg width={18} height={18} viewBox={viewBox} fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const ICON_PATHS = {
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  instagram:
    "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  tiktok:
    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  youtube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
} as const;

function EmailIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/n1git", icon: <BrandIcon path={ICON_PATHS.github} />, external: true },
  { label: "Instagram", href: contact.instagram, icon: <BrandIcon path={ICON_PATHS.instagram} />, external: true },
  { label: "TikTok", href: contact.tiktok, icon: <BrandIcon path={ICON_PATHS.tiktok} />, external: true },
  { label: "YouTube", href: contact.youtube, icon: <BrandIcon path={ICON_PATHS.youtube} />, external: true },
  { label: "WhatsApp", href: WHATSAPP_URL, icon: <BrandIcon path={ICON_PATHS.whatsapp} />, external: true },
  { label: "Email", href: MAILTO_URL, icon: <EmailIcon />, external: false },
];

const ORGANIZATION_JSON_LD = JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c");

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ORGANIZATION_JSON_LD }} />
      <div id="top" />
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div>
            <h1 id="hero-title">Bayangkan sistemnya, kami yang membangun.</h1>
            <p className="hero-lead">Sistem keuangan, order, gudang, kasir, e-commerce, dan website.</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" href="/booking">
                Booking Proyek
              </Link>
              <a className="btn btn-ghost" href="#services">
                Lihat Layanan
              </a>
            </div>
            <div className="hero-socials">
              {SOCIAL_LINKS.filter((social) => social.href).map((social) => (
                <a
                  key={social.label}
                  className="hero-social-link"
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="l-ground">
            <AppWindow />
          </div>
        </div>
      </section>

      <section id="services" className="l-section">
        <div className="container l-split">
          <div>
            <h2>Enam sistem untuk bisnis Anda</h2>
            <ul className="l-rows">
              {services.map((service) => (
                <li key={service.name}>
                  <b>{service.name}</b>
                  <span>{service.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="l-ground l-ground-checks">
            <ChecklistPreview
              title="Pesanan #1042"
              label="Contoh alur satu pesanan di sistem order"
              done={3}
              items={["Pesanan masuk", "Pembayaran dicek", "Stok dipotong", "Barang dikirim", "Pesanan selesai"]}
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="l-section">
        <div className="container l-split">
          <div>
            <h2>Produk dan proyek yang berjalan</h2>
            <ul className="l-rows">
              <li>
                <b>
                  <a href="https://getruzz.com" target="_blank" rel="noopener noreferrer">
                    Getruzz
                  </a>
                </b>
                <span>Platform klub olahraga, sudah live di getruzz.com</span>
              </li>
              <li>
                <b>Systemma</b>
                <span>Sistem pre-order untuk puluhan agen, berjalan di produksi</span>
              </li>
              <li>
                <b>AI Agent Customer Service</b>
                <span>Digital workforce, bukan sekadar chatbot</span>
              </li>
              <li>
                <b>Voucher Management System</b>
                <span>Buat, bagikan, tukar, dan lacak voucher</span>
              </li>
              <li>
                <b>ERP untuk klub renang</b>
                <span>Satu sistem untuk seluruh operasional</span>
              </li>
            </ul>
            <div className="l-actions">
              <Link className="btn btn-ghost" href="/portofolio">
                Lihat Semua Proyek
              </Link>
              <Link className="btn btn-ghost" href="/produk">
                Lihat Produk
              </Link>
            </div>
          </div>
          <div className="l-ground l-ground-chat">
            <ChatPreview />
          </div>
        </div>
      </section>

      <section id="how-to-start" className="l-section">
        <div className="container l-split">
          <div>
            <h2>Dari booking sampai berjalan</h2>
            <p className="l-lead">
              Empat langkah. Booking baru berlaku setelah DP diterima, lalu kami konsultasi dan mulai
              membangun.
            </p>
            <div className="l-actions">
              <Link className="btn btn-primary" href="/booking">
                Booking Proyek
              </Link>
            </div>
          </div>
          <div className="l-ground l-ground-checks">
            <ChecklistPreview
              title="Proyek Anda"
              label="Empat langkah dari booking sampai sistem berjalan"
              done={2}
              items={startSteps.map((step) => step.title)}
            />
          </div>
        </div>
      </section>

      <section id="about" className="l-section l-band">
        <div className="container">
          <h2 className="l-big">N⁻¹: selalu satu langkah sebelum selesai.</h2>
          <p className="l-lead" style={{ marginTop: 32 }}>
            Kami membangun sistem bisnis hari ini, dengan arah jangka panjang menjadi perusahaan teknologi
            AI yang membangun teknologinya sendiri.
          </p>
          <ul className="l-path">
            <li>
              <small>Sekarang</small>
              <b>Sistem bisnis dan AI Agent</b>
            </li>
            <li>
              <small>Berikutnya</small>
              <b>AI infrastructure</b>
            </li>
            <li>
              <small>Lalu</small>
              <b>AI research</b>
            </li>
            <li>
              <small>Tujuan</small>
              <b>Kapabilitas teknologi nasional</b>
            </li>
          </ul>
          <div className="l-actions" style={{ marginTop: 40 }}>
            <Link className="btn btn-ghost" href="/visi">
              Baca Filosofi, Visi, dan Roadmap
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="l-close">
        <div className="container">
          <h2>Booking proyek sistem Anda</h2>
          <p className="l-lead">Isi form booking, lalu kami hubungi untuk konsultasi.</p>
          <div className="l-actions">
            <Link className="btn btn-primary" href="/booking">
              Booking Proyek
            </Link>
            <a className="btn btn-ghost" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Konsultasi via WhatsApp
            </a>
          </div>
          <div className="l-contact">
            <div>
              <b>WhatsApp</b>
              <span>{contact.whatsappDisplay}</span>
            </div>
            <div>
              <b>Email</b>
              <span>{contact.email}</span>
            </div>
            <div>
              <b>Lokasi</b>
              <span>Semarang, Jawa Tengah</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
