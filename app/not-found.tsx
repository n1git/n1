import Header from "./Header";
import Footer from "./Footer";
import { withBasePath } from "./base-path";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="nf" id="top">
        <div className="wrap">
          <span className="sub-label">Kode 404</span>
          <h1>Halaman tidak ditemukan</h1>
          <p>Alamat yang Anda buka tidak ada atau sudah dipindahkan. Kembali ke beranda, atau mulai dari salah satu halaman di bawah.</p>
          <div className="sub-links" style={{ marginTop: 0 }}>
            <a className="btn btn--primary" href={withBasePath("/")}>
              Ke beranda
            </a>
            <a className="sub-link" href={withBasePath("/produk")}>
              Produk
            </a>
            <a className="sub-link" href={withBasePath("/portofolio")}>
              Portofolio
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
