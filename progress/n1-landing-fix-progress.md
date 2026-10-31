# n1-landing-fix

Status: Fase 0 selesai, menunggu OK owner.

## Fase

- [x] 0. `CLAUDE.md`, progress file, pertanyaan owner. **Wait for my OK.**
- [ ] 1. Chat dukungan tanpa endpoint + pemberitahuan privasi bila endpoint ada; `apps-script/Code.gs` (netralkan formula, batas laju global, email notifikasi `NOTIFY_EMAIL`) dan `apps-script/README.md`.
- [ ] 2. SEO: `metadataBase` `https://n-1labs.com`, canonical, `og:url`, `og:image`, `summary`, judul dan deskripsi memuat "N-1 Labs" dan "N⁻¹ Labs", `app/robots.ts`, `app/sitemap.ts` (`/`, `/produk`, `/privacy`), JSON-LD `Organization`, logo kecil ~192 px untuk header, footer, favicon.
- [ ] 3. Halaman `/privacy` (draf), tertaut dari footer.
- [ ] 4. Tautan: sosial opsional di `contact`, GitHub `https://github.com/n1git`, Getruzz `https://getruzz.com`, ruang bawah untuk tombol chat dan WhatsApp.
- [ ] 5. Mock tata letak baru (HP 390 px dan desktop 1440 px). **Wait for my OK.**
- [ ] 6. Terapkan tata letak yang disetujui, `npm run build` sekali, cek `out/robots.txt`, `out/sitemap.xml`, `out/privacy.html`.

Rincian per fase (berkas berubah, hash commit, hasil pengecekan, blocker) diisi saat fase dikerjakan.

## Pertanyaan untuk owner

1. Masa simpan data chat (nama, email, telepon, isi percakapan) di Google Sheets: berapa lama? Belum diisi di `/privacy`.
2. URL resmi Instagram, TikTok, YouTube. Sampai ada, ikonnya disembunyikan.
3. Gambar OG 1200x630. Sampai ada, kartu Twitter tetap `summary`.
4. URL Systemma. Sampai ada, tanpa tautan.
5. Alamat email tim untuk Script Properties `NOTIFY_EMAIL` (diisi owner di Apps Script, tidak ditulis di kode).
6. Apakah `SUPPORT_CHAT_ENDPOINT` akan dibuat sebagai secret GitHub? Tanpa itu, chat produksi memakai mode tanpa formulir.

## Kebutuhan data dari owner (bagian bukti)

Belum ada data untuk: nama klien, angka hasil, testimoni, studi kasus yang bisa dibuktikan. Tidak ditambahkan.

## Klaim yang perlu keputusan owner

- "sistem yang digunakan secara nyata" dan "enam proyek telah dibangun" (`app/page.tsx`, `app/content.ts`): perlu fakta yang bisa dibuktikan atau diubah redaksinya di Fase 6.

## Tindakan owner di luar repo

- Situs lama `irwanasas.github.io/n1/`: matikan atau alihkan ke `n-1labs.com`.
