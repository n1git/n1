import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";
import { withBasePath } from "./base-path";

export const dynamic = "force-static";

const PATHS = ["/", "/produk", "/portofolio", "/visi", "/booking", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${SITE_URL}${withBasePath(path)}` }));
}
