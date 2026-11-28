import NavLink from "./NavLink";
import Image from "next/image";
import { withBasePath } from "./base-path";

const CHEVRON = (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Header() {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Lewati ke isi
        </a>
        <a className="nav__logo" href={withBasePath("/")}>
          <Image className="nav__logo-img" src={withBasePath("/logo-full.svg")} alt="N⁻¹ Labs" width={211} height={28} priority />
        </a>
        <nav className="nav__links" aria-label="Utama">
          <div className="nav__item">
            <a className="nav__link" href={withBasePath("/#order")}>
              Order
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href={withBasePath("/#layanan")}>
              Layanan {CHEVRON}
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Operasional</p>
                  <a href={withBasePath("/#order")}>
                    Sistem Order<span>Pesanan dalam satu alur</span>
                  </a>
                  <a href={withBasePath("/#layanan")}>
                    Sistem Gudang<span>Stok masuk dan keluar</span>
                  </a>
                  <a href={withBasePath("/#layanan")}>
                    Sistem Kasir<span>Transaksi di toko</span>
                  </a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Keuangan dan toko</p>
                  <a href={withBasePath("/#layanan")}>
                    Sistem Keuangan<span>Arus kas dan laporan</span>
                  </a>
                  <a href={withBasePath("/#layanan")}>
                    E-commerce<span>Katalog, keranjang, pesanan</span>
                  </a>
                  <a href={withBasePath("/#layanan")}>
                    Website<span>Profil usaha di ponsel</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav__item">
            <a className="nav__link" href={withBasePath("/#mulai")}>
              Mulai
            </a>
          </div>
          <div className="nav__item">
            <NavLink href="/produk">Produk</NavLink>
          </div>
          <div className="nav__item">
            <NavLink href="/portofolio">Portofolio</NavLink>
          </div>
          <div className="nav__item">
            <NavLink href="/visi">Visi</NavLink>
          </div>
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={withBasePath("/booking")}>
            Booking proyek
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
