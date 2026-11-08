# n1-landing-fix

Status: Fase 0 selesai, menunggu OK owner.

## Fase

- [x] 0. `CLAUDE.md`, progress file, pertanyaan owner. **Wait for my OK.**
- [x] 1. Chat dukungan tanpa endpoint + pemberitahuan privasi bila endpoint ada; `apps-script/Code.gs` (netralkan formula, batas laju global, email notifikasi `NOTIFY_EMAIL`) dan `apps-script/README.md`.
- [ ] 2. SEO: `metadataBase` `https://n-1labs.com`, canonical, `og:url`, `og:image`, `summary`, judul dan deskripsi memuat "N-1 Labs" dan "N⁻¹ Labs", `app/robots.ts`, `app/sitemap.ts` (`/`, `/produk`, `/privacy`), JSON-LD `Organization`, logo kecil ~192 px untuk header, footer, favicon.
- [ ] 3. Halaman `/privacy` (draf), tertaut dari footer.
- [ ] 4. Tautan: sosial opsional di `contact`, GitHub `https://github.com/n1git`, Getruzz `https://getruzz.com`, ruang bawah untuk tombol chat dan WhatsApp.
- [ ] 5. Mock tata letak baru (HP 390 px dan desktop 1440 px). **Wait for my OK.**
- [ ] 6. Terapkan tata letak yang disetujui, `npm run build` sekali, cek `out/robots.txt`, `out/sitemap.xml`, `out/privacy.html`.

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
