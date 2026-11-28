import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import { withBasePath } from "../base-path";
import { SubBack, SubHero } from "../Sub";
import { GETRUZZ_VISUAL, SYSTEMMA_VISUAL } from "../sub-visuals";
import { productCategories } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Produk — N⁻¹ Labs (N-1 Labs)",
  description: "Produk N⁻¹ Labs (N-1 Labs): Getruzz (Produk App) dan Systemma (Produk Sistem).",
  path: "/produk",
});

const VISUALS: Record<string, { html: string; dark: boolean }> = {
  Getruzz: { html: GETRUZZ_VISUAL, dark: false },
  Systemma: { html: SYSTEMMA_VISUAL, dark: true },
};

export default function ProdukPage() {
  const items = productCategories.flatMap((category) =>
    category.products.map((product) => ({ ...product, category: category.name })),
  );

  return (
    <>
      <Header />

      <main className="sub" id="top">
        <div className="wrap">
          <SubBack />
          <SubHero
            label="Produk"
            title="Produk buatan kami sendiri"
            lead="Dua produk yang sudah berjalan: Produk App untuk pengguna akhir, dan Produk Sistem untuk operasional bisnis."
          />

          {items.map((product, index) => {
            const visual = VISUALS[product.name];
            return (
              <section
                className={`prod${index % 2 ? " prod--flip" : ""}`}
                key={product.name}
                aria-labelledby={`${product.name}-h`}
              >
                <div className="prod-text">
                  <span className="sub-label">{product.category}</span>
                  <h2 id={`${product.name}-h`}>{product.name}</h2>
                  <p className="tagline">{product.tagline}</p>
                  <p>{product.description}</p>
                  {product.url && (
                    <a className="sub-link" href={product.url} target="_blank" rel="noopener noreferrer">
                      Kunjungi {product.name}
                      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                        <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
                {visual && (
                  <div
                    className={`prod-visual${visual.dark ? " prod-visual--dark" : ""}`}
                    role="img"
                    aria-label={`Ilustrasi ${product.name}`}
                    dangerouslySetInnerHTML={{ __html: visual.html }}
                  />
                )}
              </section>
            );
          })}

          <div className="sub-links">
            <a className="sub-link" href={withBasePath("/portofolio")}>
              Lihat enam proyek di portofolio
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
