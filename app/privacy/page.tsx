import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import Header from "../Header";
import Footer from "../Footer";
import { SubBack, SubHero } from "../Sub";
import { contact } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Kebijakan Privasi — N⁻¹ Labs (N-1 Labs)",
  description:
    "Kebijakan privasi N⁻¹ Labs (N-1 Labs): data yang dikumpulkan lewat chat dan booking, tujuan, penyimpanan, dan hak pemilik data.",
  path: "/privacy",
});

const TOC = [
  ["pengelola-data", "Pengelola data"],
  ["data-yang-dikumpulkan", "Data yang dikumpulkan"],
  ["tujuan", "Tujuan"],
  ["penyimpanan", "Penyimpanan"],
  ["masa-simpan", "Masa simpan"],
  ["hak-anda", "Hak Anda"],
  ["kontak", "Kontak"],
];

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="sub" id="top">
        <div className="wrap">
          <SubBack />
          <SubHero
            label="Legal"
            title="Kebijakan privasi"
            lead="Data apa yang kami kumpulkan lewat chat dan booking, untuk apa, di mana disimpan, dan hak Anda atas data tersebut."
          >
            <div className="sub-tags">
              <div>
                <span className="sub-tag sub-tag--vision">Draf, belum ditinjau ahli hukum</span>
              </div>
            </div>
          </SubHero>

          <div className="legal-layout">
            <nav className="legal-toc" aria-label="Isi kebijakan">
              <ul className="legal-toc" style={{ position: "static" }}>
                {TOC.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="legal-body">
            <h2 id="pengelola-data">Pengelola data</h2>
            <p>N⁻¹ Labs, Semarang, Jawa Tengah, Indonesia.</p>

            <h2 id="data-yang-dikumpulkan">Data yang dikumpulkan</h2>
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

            <h2 id="tujuan">Tujuan</h2>
            <p>
              Data dipakai hanya untuk menindaklanjuti percakapan atau booking yang Anda ajukan, termasuk
              menghubungi Anda kembali.
            </p>

            <h2 id="penyimpanan">Penyimpanan</h2>
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

            <h2 id="masa-simpan">Masa simpan</h2>
            <p>Masa simpan data di Google Sheets belum ditetapkan dalam draf ini.</p>

            <h2 id="hak-anda">Hak Anda</h2>
            <p>
              Menurut Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak
              mengakses data Anda, meminta perbaikan, meminta penghapusan, menarik persetujuan, dan
              mengajukan keberatan atas pemrosesan data Anda.
            </p>

            <h2 id="kontak">Kontak</h2>
            <p>
              Untuk menggunakan hak tersebut atau bertanya tentang data Anda, hubungi kami lewat WhatsApp{" "}
              {contact.whatsappDisplay} atau email {contact.email}.
            </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
