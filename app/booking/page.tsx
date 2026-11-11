import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import BookingForm from "@/components/booking/BookingForm";
import { booking, services } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Booking Proyek — N⁻¹ Labs (N-1 Labs)",
  description:
    "Booking pembuatan sistem keuangan, order, gudang, kasir, e-commerce, dan website di N⁻¹ Labs (N-1 Labs).",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <>
      <div id="top" />
      <Header />

      <section id="booking">
        <div className="container">
          <div className="kicker">Booking Proyek</div>
          <h1 className="section-title">Booking Jasa Pembuatan Sistem</h1>
          <div className="divider" />
          <p className="section-lead">
            Ceritakan kebutuhan bisnis Anda. Konsultasi awal gratis, dan DP baru dibayar setelah Anda
            menyetujui penawaran tertulis.
          </p>

          <ul className="booking-services">
            {services.map((service) => (
              <li key={service.name}>{service.name}</li>
            ))}
          </ul>

          <ol className="booking-flow">
            <li>Isi form dan dapatkan kode booking.</li>
            <li>Konsultasi awal gratis lewat WhatsApp.</li>
            <li>Terima penawaran tertulis dengan harga tetap per tahap.</li>
            <li>Bayar DP setelah setuju. DP dikembalikan penuh jika hasil tahap awal tidak Anda terima.</li>
          </ol>

          <BookingForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
