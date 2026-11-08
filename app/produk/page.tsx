import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import ProductCategories from "../ProductCategories";
import { productCategories } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Produk — N⁻¹ Labs (N-1 Labs)",
  description: "Produk N⁻¹ Labs (N-1 Labs): Getruzz (Produk App) dan Systemma (Produk Sistem).",
  path: "/produk",
});

export default function ProdukPage() {
  return (
    <>
      <div id="top" />
      <Header />

      <section id="produk">
        <div className="container">
          <div className="kicker">Produk</div>
          <h1 className="section-title">Produk Kami</h1>
          <div className="divider" />
          <p className="section-lead">
            Produk N⁻¹ Labs dikelompokkan ke dalam dua kategori: Produk App untuk pengguna akhir, dan
            Produk Sistem untuk operasional bisnis.
          </p>

          <ProductCategories categories={productCategories} />
        </div>
      </section>

      <Footer />
    </>
  );
}
