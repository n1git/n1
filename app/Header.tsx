import Link from "next/link";
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
        <Link className="nav__logo" href="/">
          <Image src={withBasePath("/logo-192.png")} alt="" width={24} height={24} priority />
          N⁻¹ Labs
        </Link>
        <nav className="nav__links" aria-label="Utama">
          <div className="nav__item">
            <Link className="nav__link" href="/#order">
              Order
            </Link>
          </div>
          <div className="nav__item">
            <Link className="nav__link" href="/#layanan">
              Layanan {CHEVRON}
            </Link>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Operasional</p>
                  <Link href="/#order">
                    Sistem Order<span>Pesanan dalam satu alur</span>
                  </Link>
                  <Link href="/#layanan">
                    Sistem Gudang<span>Stok masuk dan keluar</span>
                  </Link>
                  <Link href="/#layanan">
                    Sistem Kasir<span>Transaksi di toko</span>
                  </Link>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Keuangan dan toko</p>
                  <Link href="/#layanan">
                    Sistem Keuangan<span>Arus kas dan laporan</span>
                  </Link>
                  <Link href="/#layanan">
                    E-commerce<span>Katalog, keranjang, pesanan</span>
                  </Link>
                  <Link href="/#layanan">
                    Website<span>Profil usaha di ponsel</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="nav__item">
            <Link className="nav__link" href="/#mulai">
              Mulai
            </Link>
          </div>
          <div className="nav__item">
            <Link className="nav__link" href="/produk">
              Produk
            </Link>
          </div>
          <div className="nav__item">
            <Link className="nav__link" href="/portofolio">
              Portofolio
            </Link>
          </div>
          <div className="nav__item">
            <Link className="nav__link" href="/visi">
              Visi
            </Link>
          </div>
        </nav>
        <div className="nav__actions">
          <Link className="btn btn--primary" href="/booking">
            Booking proyek
          </Link>
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
