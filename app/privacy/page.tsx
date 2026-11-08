import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import { contact } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Kebijakan Privasi — N⁻¹ Labs (N-1 Labs)",
  description:
    "Kebijakan privasi N⁻¹ Labs (N-1 Labs): data yang dikumpulkan lewat chat dan booking, tujuan, penyimpanan, dan hak pemilik data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <div id="top" />
      <Header />

      <section id="privacy">
        <div className="container legal">
          <div className="kicker">Legal</div>
          <h1 className="section-title">Kebijakan Privasi</h1>
          <div className="divider" />
          <p>
            <span className="tag vision">Draf, belum ditinjau ahli hukum</span>
          </p>

          <h2>Pengelola data</h2>
          <p>N⁻¹ Labs, Semarang, Jawa Tengah, Indonesia.</p>

          <h2>Data yang dikumpulkan</h2>
          <p>Kami hanya mengumpulkan data yang Anda isi sendiri:</p>
          <ul>
            <li>
              <b>Chat dukungan</b> (bila pencatatan percakapan aktif): nama, email, nomor telepon, dan isi
              percakapan. Bila pencatatan tidak aktif, chat tidak meminta data pribadi dan percakapan
              hanya tersimpan di peramban Anda.
            </li>
            <li>
              <b>Booking proyek</b>: nama, nama usaha, email, nomor WhatsApp, layanan yang dipilih,
              skala proyek, target mulai, dan uraian kebutuhan.
            </li>
          </ul>

          <h2>Tujuan</h2>
          <p>
            Data dipakai hanya untuk menindaklanjuti percakapan atau booking yang Anda ajukan, termasuk
            menghubungi Anda kembali.
          </p>

          <h2>Penyimpanan</h2>
          <p>
            Data chat dan booking disimpan di Google Sheets milik N⁻¹ Labs melalui Google Apps Script, dan
            tim kami menerima pemberitahuan lewat email. Google bertindak sebagai penyedia layanan
            penyimpanan dan email tersebut. Setelah booking, Anda juga mengirim detail dan bukti
            transfer sendiri lewat WhatsApp, yang berjalan di layanan WhatsApp.
          </p>
          <p>
            Sesi chat disimpan sementara di peramban Anda (penyimpanan lokal) dan dihapus saat percakapan
            diakhiri atau kedaluwarsa setelah satu jam tanpa aktivitas.
          </p>

          <h2>Masa simpan</h2>
          <p>Masa simpan data di Google Sheets belum ditetapkan dalam draf ini.</p>

          <h2>Hak Anda</h2>
          <p>
            Menurut Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak
            mengakses data Anda, meminta perbaikan, meminta penghapusan, menarik persetujuan, dan
            mengajukan keberatan atas pemrosesan data Anda.
          </p>

          <h2>Kontak</h2>
          <p>
            Untuk menggunakan hak tersebut atau bertanya tentang data Anda, hubungi kami lewat WhatsApp{" "}
            {contact.whatsappDisplay} atau email {contact.email}.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
