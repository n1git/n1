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
      <footer className="site-footer">
        <div className="container footer-contact">
          <span className="footer-contact-label">Hubungi Kami</span>
          <div className="footer-contact-links">
            <a
              className="btn btn-ghost footer-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              {contact.whatsappDisplay}
            </a>
            <a className="footer-email" href={MAILTO_URL}>
              {contact.email}
            </a>
          </div>
        </div>
        <div className="container">
          <a className="brand" href="#top">
            <Image src={withBasePath("/logo.png")} alt="N⁻¹ Labs" width={26} height={26} />
            N⁻¹ LABS
          </a>
          <span className="footer-tagline">N⁻¹ · always one step from finished.</span>
          <span>© 2026 N⁻¹ Labs. All rights reserved.</span>
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
