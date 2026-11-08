import type { Metadata } from "next";
import { withBasePath } from "./base-path";
import { contact } from "./content";

export const SITE_URL = "https://n-1labs.com";
export const SITE_NAME = "N⁻¹ Labs";
export const SITE_ALTERNATE_NAME = "N-1 Labs";

const OG_IMAGE = {
  url: withBasePath("/logo.png"),
  width: 985,
  height: 985,
  alt: `${SITE_NAME} (${SITE_ALTERNATE_NAME})`,
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = withBasePath(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
      locale: "id_ID",
      type: "website",
    },
    twitter: { card: "summary", title, description, images: [OG_IMAGE.url] },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: SITE_ALTERNATE_NAME,
  url: `${SITE_URL}${withBasePath("/")}`,
  logo: `${SITE_URL}${withBasePath("/logo.png")}`,
  email: contact.email,
  telephone: `+${contact.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Semarang",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  foundingDate: "2026-09-02",
  sameAs: [
    "https://github.com/n1git",
    ...[contact.instagram, contact.tiktok, contact.youtube].filter((url): url is string => Boolean(url)),
  ],
};
