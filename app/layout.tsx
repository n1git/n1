import type { Metadata } from "next";
import Script from "next/script";
import "../public/kit/system.css";
import "../public/kit/ui/cards.css";
import "../public/kit/motion/motion.css";
import "../public/kit/backgrounds/backgrounds.css";
import "../public/kit/layout/layout.css";
import "../public/kit/icons/icon.css";
import "../public/kit/ui/base.css";
import "../public/kit/ui/window/fragment.css";
import "../public/kit/ui/chat/fragment.css";
import "../public/kit/ui/checklist/fragment.css";
import "../public/kit/ui/stat/fragment.css";
import "../public/kit/ui/search/fragment.css";
import "../public/kit/ui/notify/fragment.css";
import "../public/kit/ui/doc/fragment.css";
import "../public/kit/diagrams/diagram.css";
import "../public/kit/moments/word-highlight/moment.css";
import "./site.css";
import "./doc.css";
import { withBasePath } from "./base-path";
import { SITE_URL, pageMetadata } from "./seo";

const TITLE = "N⁻¹ Labs (N-1 Labs) — Building Indonesia's Own AI Technology Capability";
const DESCRIPTION =
  "N⁻¹ Labs (N-1 Labs) adalah perusahaan teknologi AI asal Semarang, Indonesia yang membangun AI Agent, software systems, automation, dan digital products — dengan filosofi N⁻¹: selalu satu langkah sebelum selesai.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" }),
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), sizes: "48x48" },
      { url: withBasePath("/logo-192.png"), sizes: "192x192", type: "image/png" },
    ],
    apple: withBasePath("/apple-touch-icon.png"),
  },
};

const HEAD_INIT = `document.documentElement.classList.add('m-enter');setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);document.documentElement.classList.add('mo-js');setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500);document.addEventListener('touchstart',function(){},{passive:true});`;

const KIT_SCRIPTS = ["/kit/system.js", "/kit/motion/motion.js", "/kit/layout/layout.js", "/kit/diagrams/mount.js"];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-type="software"
      data-radius="soft"
      data-ground="sky"
      data-buttons="arrow"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wdth,wght@75..100,400..700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: HEAD_INIT }} />
        <script src={withBasePath("/kit/backgrounds/backgrounds.js")} />
      </head>
      <body>
        {children}
        {KIT_SCRIPTS.map((src) => (
          <Script key={src} type="module" src={withBasePath(src)} strategy="afterInteractive" />
        ))}
      </body>
    </html>
  );
}
