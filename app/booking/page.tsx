import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import BookingForm from "@/components/booking/BookingForm";
import { booking, services } from "../content";
import { formatRupiah } from "@/lib/booking/booking";

export const metadata: Metadata = pageMetadata({
  title: "Booking Proyek — N⁻¹ Labs (N-1 Labs)",
  description: `Booking pembuatan sistem keuangan, order, gudang, kasir, e-commerce, dan website di N⁻¹ Labs (N-1 Labs). Harga mulai ${formatRupiah(booking.minPrice)}.`,
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
            Harga mulai {formatRupiah(booking.minPrice)}, menyesuaikan tingkat kompleksitas yang Anda
            butuhkan. Booking disertai DP agar kami bisa fokus pada klien yang benar-benar siap
            berjalan.
          </p>

          <ul className="booking-services">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <BookingForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
