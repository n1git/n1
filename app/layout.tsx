import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "./landing.css";
import { withBasePath } from "./base-path";
import { SITE_URL, pageMetadata } from "./seo";

const TITLE = "N⁻¹ Labs (N-1 Labs) — Building Indonesia's Own AI Technology Capability";
const DESCRIPTION =
  "N⁻¹ Labs (N-1 Labs) adalah perusahaan teknologi AI asal Semarang, Indonesia yang membangun AI Agent, software systems, automation, dan digital products — dengan filosofi N⁻¹: selalu satu langkah sebelum selesai.";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" }),
  icons: { icon: withBasePath("/logo-192.png") },
};

const THEME_INIT = `
(function () {
  try {
    var stored = localStorage.getItem("n1-theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
  // iOS Safari only triggers :active on elements if a touch listener
  // exists somewhere on the page - this unlocks tap/press feedback site-wide.
  document.addEventListener("touchstart", function () {}, { passive: true });
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
