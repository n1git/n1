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
            Ceritakan kebutuhan bisnis Anda. Booking disertai DP agar kami bisa fokus pada klien yang
            benar-benar siap berjalan.
          </p>

          <ul className="booking-services">
            {services.map((service) => (
              <li key={service.name}>{service.name}</li>
            ))}
          </ul>

          {booking.dpAmount && booking.bank && (
            <ol className="booking-flow">
              <li>Isi form dan dapatkan kode booking.</li>
              <li>Transfer DP ke rekening yang tampil setelah form terkirim.</li>
              <li>Kirim bukti transfer lewat WhatsApp. Booking berlaku setelah DP kami terima.</li>
            </ol>
          )}

          <BookingForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
