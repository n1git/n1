# n1-landing-fix

Status: semua fase selesai. Menunggu keputusan dan data dari owner (lihat pertanyaan di bawah).

## Fase

- [x] 0. `CLAUDE.md`, progress file, pertanyaan owner. **Wait for my OK.**
- [x] 1. Chat dukungan tanpa endpoint + pemberitahuan privasi bila endpoint ada; `apps-script/Code.gs` (netralkan formula, batas laju global, email notifikasi `NOTIFY_EMAIL`) dan `apps-script/README.md`.
- [x] 2. SEO: `metadataBase` `https://n-1labs.com`, canonical, `og:url`, `og:image`, `summary`, judul dan deskripsi memuat "N-1 Labs" dan "N⁻¹ Labs", `app/robots.ts`, `app/sitemap.ts` (`/`, `/produk`, `/privacy`), JSON-LD `Organization`, logo kecil ~192 px untuk header, footer, favicon.
- [x] 3. Halaman `/privacy` (draf), tertaut dari footer.
- [x] 4. Tautan: sosial opsional di `contact`, GitHub `https://github.com/n1git`, Getruzz `https://getruzz.com`, ruang bawah untuk tombol chat dan WhatsApp.
- [x] 5. Mock tata letak baru (HP 390 px dan desktop 1440 px). **Wait for my OK.**
- [x] 6. Terapkan tata letak yang disetujui, `npm run build` sekali, cek `out/robots.txt`, `out/sitemap.xml`, `out/privacy.html`.

## Tambahan di luar fase: booking jasa

Permintaan owner: jasa sistem keuangan, order, gudang, kasir, e-commerce, website, harga mulai Rp10.000.000, booking wajib DP untuk menyaring klien serius. DP nominal tetap, transfer bank manual, bukti via WhatsApp.

- Berkas: `app/booking/page.tsx`, `components/booking/BookingForm.tsx`, `lib/booking/booking.ts`, `app/content.ts` (`services`, `booking`, `budgetOptions`, `startOptions`), `app/globals.css`, `app/Header.tsx` (CTA jadi "Booking Proyek"), `apps-script/Code.gs`, `apps-script/README.md`.
- `Code.gs`: aksi `create_booking`, sheet `BOOKINGS`, email via `NOTIFY_EMAIL`. Poin 3 Fase 1 sudah terpenuhi di sini: netralisasi awalan formula di `sanitizeText`, batas laju global, `notifyTeam`. Sisa Fase 1 untuk `Code.gs`: panggil `notifyTeam` saat tiket chat baru dibuat.
- Formulir tidak menampilkan apa pun selain pemberitahuan WhatsApp sampai `booking.dpAmount` dan `booking.bank` di `app/content.ts` diisi owner.
- Tanpa endpoint, booking tetap utuh lewat pesan WhatsApp yang sudah terisi (kode, nama, layanan, anggaran, kebutuhan).
- DP tidak bisa dipaksa oleh situs statis: yang ditegakkan adalah pernyataan "booking baru berlaku setelah DP diterima" dan verifikasi manual.
- Fase 2: tambahkan `/booking` ke `app/sitemap.ts`. Fase 3: `/privacy` harus mencakup data booking, lalu tautkan dari formulir booking (kini hanya kalimat singkat tanpa tautan karena halamannya belum ada). Fase 5: mock hero perlu CTA "Booking Proyek".
- Belum diuji di peramban (aturan proyek: hanya typecheck).

## Rincian fase

### Fase 1
- Berkas: `lib/support-chat/api.ts` (`CHAT_BACKEND_ENABLED`), `data/faq.ts`, `components/support-chat/ChatWindow.tsx`, `ChatPanel.tsx`, `PreChatForm.tsx`, `app/globals.css`, `apps-script/Code.gs`, `apps-script/README.md`.
- Tanpa endpoint: sesi lokal otomatis dengan sapaan, tanpa formulir dan tanpa label "Tiket"; jawaban eskalasi hanya WhatsApp dan email. Dengan endpoint: formulir ditambah pemberitahuan privasi dan tautan `/privacy` (halaman dibuat di Fase 3). `Code.gs` kini mengirim email saat tiket chat baru.
- Pengecekan: `npx next typegen && npx tsc --noEmit` lolos.
- Hash commit: lihat `git log` pesan "Fase 1".
- Blocker: tidak ada.

## Pertanyaan untuk owner

1. Masa simpan data chat (nama, email, telepon, isi percakapan) di Google Sheets: berapa lama? Belum diisi di `/privacy`.
2. URL resmi Instagram, TikTok, YouTube. Sampai ada, ikonnya disembunyikan.
3. Gambar OG 1200x630. Sampai ada, kartu Twitter tetap `summary`.
4. URL Systemma. Sampai ada, tanpa tautan.
5. Alamat email tim untuk Script Properties `NOTIFY_EMAIL` (diisi owner di Apps Script, tidak ditulis di kode).
6. Apakah `SUPPORT_CHAT_ENDPOINT` akan dibuat sebagai secret GitHub? Tanpa itu, chat produksi memakai mode tanpa formulir.

7. Nominal DP (angka) dan rekening: nama bank, nomor rekening, atas nama. Isi `booking.dpAmount` dan `booking.bank` di `app/content.ts`.
8. Kebijakan DP jika proyek batal atau ditolak: dikembalikan atau tidak? Belum dinyatakan di halaman. Halaman juga belum menyebut DP dipotong dari total proyek; tambahkan bila benar.

## Kebutuhan data dari owner (bagian bukti)

Belum ada data untuk: nama klien, angka hasil, testimoni, studi kasus yang bisa dibuktikan. Tidak ditambahkan.

## Klaim yang perlu keputusan owner

- "sistem yang digunakan secara nyata" dan "enam proyek telah dibangun" (`app/page.tsx`, `app/content.ts`): perlu fakta yang bisa dibuktikan atau diubah redaksinya di Fase 6.

## Tindakan owner di luar repo

- Situs lama `irwanasas.github.io/n1/`: matikan atau alihkan ke `n-1labs.com`.

### Fase 2
- Berkas: `app/seo.ts` (`pageMetadata`, `organizationJsonLd`), `app/layout.tsx`, `app/produk/page.tsx`, `app/booking/page.tsx`, `app/page.tsx` (JSON-LD), `app/robots.ts`, `app/sitemap.ts`, `public/logo-192.png` (5,9 KB dari 210 KB, dibuat dengan ImageMagick sekali jalan), `app/Header.tsx`, `app/Footer.tsx`.
- `metadataBase` `https://n-1labs.com`; canonical dan `og:url` per halaman lewat `pageMetadata`; `og:image` logo 985 px; kartu Twitter tetap `summary` karena belum ada gambar 1200x630; judul dan deskripsi memuat "N-1 Labs". Sitemap: `/`, `/produk`, `/booking`, `/privacy`. JSON-LD `sameAs` hanya `https://github.com/n1git`.
- Favicon, header, footer memakai `logo-192.png`; `logo.png` besar tetap untuk OG dan JSON-LD.
- `/privacy` sudah ada di sitemap tetapi halamannya baru dibuat di Fase 3.
- Pengecekan: `npx next typegen && npx tsc --noEmit` lolos.
- Blocker: tidak ada.

### Fase 3
- Berkas: `app/privacy/page.tsx`, `app/Footer.tsx` (tautan "Kebijakan Privasi"), `components/booking/BookingForm.tsx` (tautan ke `/privacy`), `app/globals.css`.
- Isi: pengelola, data chat dan booking, tujuan, penyimpanan di Google Sheets dan email (Google sebagai penyedia), penyimpanan lokal chat, hak menurut UU PDP, kontak dari `contact`; berlabel "Draf, belum ditinjau ahli hukum".
- Masa simpan tidak diisi: halaman hanya menyatakan belum ditetapkan. Tetap pertanyaan owner nomor 1.
- Pengecekan: `npx next typegen && npx tsc --noEmit` lolos.
- Blocker: tidak ada.

### Fase 4
- Berkas: `app/content.ts` (`contact.instagram`, `tiktok`, `youtube` opsional), `app/page.tsx` (ikon sosial hanya bila URL diisi; GitHub `https://github.com/n1git`), `app/seo.ts` (`sameAs` ikut URL sosial yang diisi), `app/globals.css` (footer `padding-bottom` 92 px agar tombol chat dan WhatsApp tidak menutup teks).
- Getruzz sudah tertaut ke `https://getruzz.com` di `/produk`; Systemma tanpa tautan.
- Untuk menampilkan ikon sosial: isi `contact.instagram`, `contact.tiktok`, `contact.youtube` di `app/content.ts` (pertanyaan owner nomor 2).
- Pengecekan: `npx next typegen && npx tsc --noEmit` lolos.
- Blocker: tidak ada.

### Fase 5
- Mock (HTML statis di luar repo, memakai `app/globals.css` asli) dirender ke screenshot HP 390 px dan desktop 1440 px lalu dikirim ke owner.
- Urutan yang diusulkan: hero (satu penawaran: enam jenis sistem, harga mulai Rp10.000.000, DP; CTA "Hubungi Kami" WhatsApp di samping "Lihat Portofolio"), Layanan (enam jenis dan empat area dari `buildAreas`), Produk dan Portofolio (Getruzz, Systemma, enam proyek), Cara Memulai Proyek (Booking dan DP, Develop, Integrate, Automate), Tentang, lalu Filosofi, Visi, Roadmap diringkas dan dipindah ke bawah.
- Tidak ada klaim, angka, nama klien, atau testimoni baru. Bagian bukti menunggu data owner.
- Skill `ui-ux-pro-max` tidak punya pola landing jasa yang cocok di database; mock memakai token dan komponen situs sendiri.
- Hal untuk diputuskan owner: judul hero memakai daftar enam jenis sistem (usulan) menggantikan "Building Indonesia's Own AI Technology Capability", yang berpindah ke Visi.
- OK owner diterima; lanjut Fase 6.

### Fase 6
- Berkas: `app/page.tsx` (hero baru, urutan baru, bagian Layanan, Produk dan Portofolio, Cara Memulai Proyek, Arah Kami), `app/content.ts` (`startSteps`), `app/Header.tsx` (nav: Layanan, Produk, Portofolio, Cara Memulai, Tentang, Filosofi, Kontak), `app/globals.css`.
- Urutan: hero, Layanan, Produk dan Portofolio, Cara Memulai Proyek, Tentang, Arah Kami (ringkasan Filosofi, Visi, Roadmap dengan tautan), lalu seluruh teks Filosofi, Misi, Teknologi, Perjalanan, Visi, dan seterusnya tetap ada di bawah. Bagian tidak dilipat; hanya dipindah.
- Daftar "Enam Proyek yang Telah Dibangun" di Layanan dihapus karena duplikat dengan daftar proyek di Portofolio.
- Kalimat "sistem yang digunakan secara nyata" diganti dengan fakta yang bisa dibuktikan: Getruzz live di getruzz.com dan Systemma berjalan di produksi (README repo `systemma`).
- Judul halaman dan deskripsi meta beranda masih "Building Indonesia's Own AI Technology Capability" karena tidak diminta diubah; hero kini memakai judul layanan.
- `npm run build` satu kali: sukses, 8 halaman statis. `out/robots.txt`, `out/sitemap.xml`, `out/privacy.html` ada. Canonical, `og:url`, `og:image` (`https://n-1labs.com/...`), JSON-LD `Organization` pada beranda, dan kartu Twitter `summary` terverifikasi di HTML hasil build; ikon Instagram, TikTok, YouTube tidak muncul; GitHub `n1git` muncul.
- Belum dibuka di peramban.

## Klaim yang belum bisa dibuktikan dan masih tayang (keputusan owner)

- "Enam proyek berikut menggambarkan perjalanan..." (`app/page.tsx`, bagian Portofolio) dan "Proyek-proyek yang telah dikerjakan N⁻¹ Labs..." (bagian Technology Journey): enam proyek tidak bisa diverifikasi dari repo. Ubah redaksi atau beri bukti.
