import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import Portfolio from "../Portfolio";
import { SubBack, SubHero, Tag } from "../Sub";
import { withBasePath } from "../base-path";
import { projects } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Portofolio — N⁻¹ Labs (N-1 Labs)",
  description: "Enam proyek N⁻¹ Labs (N-1 Labs): masalah, solusi, fungsi, dampak, dan hal yang dipelajari.",
  path: "/portofolio",
});

export default function PortofolioPage() {
  return (
    <>
      <Header />

      <main className="sub" id="top">
        <div className="wrap">
          <SubBack />
          <SubHero
            label="Portofolio"
            title="Enam proyek, enam fondasi"
            lead="Setiap proyek menggambarkan satu langkah membangun kapabilitas, dari software engineering dan sistem bisnis sampai automation dan AI Agent."
          >
            <div className="sub-tags">
              <Tag kind="existing" />
            </div>
          </SubHero>

          <nav className="sub-toc" aria-label="Daftar proyek">
            {projects.map((project) => (
              <a key={project.num} href={`#proyek-${project.num}`}>
                {project.num} {project.title}
              </a>
            ))}
          </nav>

          <Portfolio projects={projects} />

          <div className="sub-links">
            <a className="sub-link" href={withBasePath("/produk")}>
              Lihat produk yang sudah berjalan
            </a>
            <a className="sub-link" href={withBasePath("/booking")}>
              Booking proyek
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
