import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import Portfolio from "../Portfolio";
import ProductCategories from "../ProductCategories";
import { projects, productCategories } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Produk dan Portofolio — N⁻¹ Labs (N-1 Labs)",
  description: "Produk dan enam proyek N⁻¹ Labs (N-1 Labs): masalah, solusi, fungsi, dampak, dan hal yang dipelajari.",
  path: "/portofolio",
});

export default function PortofolioPage() {
  return (
    <>
      <div id="top" />
      <Header />

      <section id="portfolio">
        <div className="container">
          <div className="kicker">Produk &amp; Portofolio</div>
          <h1 className="section-title">Produk dan Proyek</h1>
          <div className="divider" />

          <ProductCategories categories={productCategories} />

          <div className="subhead" style={{ marginTop: 16 }}>
            Project Portfolio
          </div>
          <p className="section-lead">
            Enam proyek berikut menggambarkan perjalanan N⁻¹ Labs dalam membangun kapabilitas — dari
            software engineering, sistem bisnis, automation, hingga AI Agent. Setiap proyek dijelaskan
            berdasarkan permasalahan, solusi, fungsi, dampak, dan hal yang dipelajari N⁻¹ Labs.
          </p>
          <span className="tag existing">Existing Capability</span>

          <Portfolio projects={projects} />
        </div>
      </section>

      <Footer />
    </>
  );
}
