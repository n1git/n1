import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import BookingForm from "@/components/booking/BookingForm";
import { SubBack, SubHero } from "../Sub";
import { services } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Booking Proyek — N⁻¹ Labs (N-1 Labs)",
  description:
    "Booking pembuatan sistem keuangan, order, gudang, kasir, e-commerce, dan website di N⁻¹ Labs (N-1 Labs).",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <>
      <Header />

      <main className="sub" id="top">
        <div className="wrap">
          <SubBack />
          <SubHero
            label="Booking proyek"
            title="Ceritakan sistem yang Anda butuhkan"
            lead="Konsultasi awal gratis. DP baru dibayar setelah Anda menyetujui penawaran tertulis."
          />

          <div className="book">
            <div className="book-form">
              <BookingForm />
            </div>

            <aside className="book-side" aria-label="Alur setelah booking">
              <h2>Setelah Anda mengirim form</h2>
              <ol>
                <li>
                  <span>
                    <b>Kode booking</b>
                    Anda langsung mendapat kode. Belum ada pembayaran.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Konsultasi awal gratis</b>
                    Kami menghubungi Anda lewat WhatsApp dalam satu hari kerja.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Penawaran tertulis</b>
                    Harga tetap per tahap, sebelum Anda membayar apa pun.
                  </span>
                </li>
                <li>
                  <span>
                    <b>DP setelah setuju</b>
                    Dikembalikan penuh jika hasil tahap awal tidak Anda terima.
                  </span>
                </li>
              </ol>
              <ul className="book-services" aria-label="Layanan yang tersedia">
                {services.map((service) => (
                  <li key={service.name}>{service.name}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
