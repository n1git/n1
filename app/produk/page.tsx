import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import ProductCategories from "../ProductCategories";
import { techDomains } from "../content";

export const metadata: Metadata = {
  title: "Produk — N⁻¹ Labs",
  description:
    "Kategori produk dan layanan N⁻¹ Labs: Artificial Intelligence, AI Infrastructure, Software Engineering, Automation, Digital Products, dan riset masa depan.",
};

export default function ProdukPage() {
  return (
    <>
      <div id="top" />
      <Header />

      <section id="produk">
        <div className="container">
          <div className="kicker">Produk &amp; Layanan</div>
          <h1 className="section-title">Kategori Produk</h1>
          <div className="divider" />
          <p className="section-lead">
            Produk dan layanan N⁻¹ Labs dikelompokkan ke dalam enam kategori utama. Klik tiap kategori
            untuk melihat cakupannya.
          </p>

          <ProductCategories domains={techDomains} />
        </div>
      </section>

      <Footer />
    </>
  );
}
