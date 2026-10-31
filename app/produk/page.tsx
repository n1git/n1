import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import ProductCategories from "../ProductCategories";
import { productCategories } from "../content";

export const metadata: Metadata = {
  title: "Produk — N⁻¹ Labs",
  description: "Produk N⁻¹ Labs: Getruzz (Produk App) dan Systemma (Produk Sistem).",
};

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
