import Image from "next/image";
import ChatWidget from "@/components/support-chat/ChatWidget";
import { withBasePath } from "./base-path";
import { contact } from "./content";

const WHATSAPP_URL = `https://wa.me/${contact.whatsapp}`;
const MAILTO_URL = `mailto:${contact.email}`;

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.174-1.1-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.246c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.336-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="footer closing footer--statement" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--word">
            <div className="section-head--split">
              <div>
                <h2 id="close-h">Konsultasi sistem gratis</h2>
                <p className="t-lead">Booking tidak dipungut biaya. Kami membalas lewat WhatsApp.</p>
              </div>
              <a className="btn btn--primary" href={withBasePath("/booking")}>
                Booking proyek
                <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                  <path className="m-arrow__stem" d="M1 6h8" />
                  <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
                </svg>
              </a>
            </div>
            <div className="close__word" aria-hidden="true">
              <Image src={withBasePath("/logo-full-light.svg")} alt="" width={1292} height={171} />
            </div>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <p className="footer__lede">Studio sistem bisnis custom dari Semarang, Jawa Tengah.</p>
              </div>
              <div className="span-2 start-7 footer__col">
                <h3>Sistem</h3>
                <ul>
                  <li><a href={withBasePath("/#order")}>Sistem order</a></li>
                  <li><a href={withBasePath("/#layanan")}>Sistem lain</a></li>
                  <li><a href={withBasePath("/booking")}>Booking proyek</a></li>
                </ul>
              </div>
              <div className="span-2 footer__col">
                <h3>Studio</h3>
                <ul>
                  <li><a href={withBasePath("/visi")}>Visi</a></li>
                  <li><a href={withBasePath("/produk")}>Produk</a></li>
                  <li><a href={withBasePath("/portofolio")}>Portofolio</a></li>
                </ul>
              </div>
              <div className="span-2 footer__col">
                <h3>Kontak</h3>
                <ul>
                  <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                  <li><a href={MAILTO_URL}>Email</a></li>
                </ul>
              </div>
            </div>
            <div className="footer__legal">
              <span>&copy; 2026 N⁻¹ Labs</span>
              <a href={withBasePath("/privacy")}>Kebijakan privasi</a>
              <div className="socials"></div>
            </div>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat via WhatsApp ke ${contact.whatsappDisplay}`}
      >
        <WhatsAppIcon size={28} />
      </a>

      <ChatWidget />
    </>
  );
}
