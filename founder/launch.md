# Peluncuran: N⁻¹ Labs

Dasar: `founder/marketing.md`, `founder/ops.md`, `founder/cfo.md` (angka biaya estimasi), `founder/brand.md`. Hari ini 11 November 2026 (Rabu). **Tanggal peluncuran uji, H, adalah usulan saya: Senin 7 Desember 2026.** Pemilik menetapkan tanggal sebenarnya. Pertengahan sampai akhir Desember (Natal dan tahun baru) bisa memperlambat balasan calon klien.

## 1. Uji sebelum biaya besar

Jenis usaha: jasa. Ujinya: **tiga proyek percontohan berbayar pada harga rencana**, sebelum biaya besar di `numbers.json` (gaji tetap dan iklan) dikeluarkan lebih jauh.

- **Barisan sukses** (ditulis sebelum uji dijalankan): tiga klien berbayar (penawaran tertulis disetujui dan DP diterima) dalam 30 hari setelah H, pada harga mulai Rp10.000.000, dan satu di antaranya memberi izin tertulis disebut sebagai referensi.
- **Barisan gagal**: nol DP setelah 20 percakapan konsultasi. Itu tanda penawaran atau pasar yang salah, bukan hanya waktu.
- **Pembanding panel**: panel simulasi memberi 0 dari 20 pada dua versi penawaran. Jika pembeli nyata juga jauh dari tiga, percayai pembeli nyata dan kembali ke `/founder-offer` atau `/founder-pricing`. Jika pembeli nyata membeli di atas 0 meski panel 0, panel terlalu pesimis di sisi ini; bila bergantung pada referensi, tetap hati-hati karena belum ada referensi.
- **Syarat sebelum uji**: nominal DP dan rekening di `app/content.ts` terisi, kebijakan DP dan pengembalian ditulis, perjanjian proyek ditinjau (`ops.md` bagian 6). Tanpa itu penawaran tidak bisa dijalankan.

## 2. Hitung mundur

Jalur kritis ditandai (K): kalau meleset, H bergeser.

| minggu | tanggal | tugas | pemilik | batas |
| --- | --- | --- | --- | --- |
| 1 | 11 sampai 15 Nov | Putuskan satu segmen dan satu masalah (rekomendasi: pesanan WhatsApp, `marketing.md`) (K) | Pendiri | 13 Nov |
| 1 | 11 sampai 15 Nov | Tetapkan nominal DP, rekening, dan kebijakan pengembalian (K) | Pendiri | 15 Nov |
| 2 | 16 sampai 22 Nov | Tulis perjanjian proyek dan templat penawaran, tinjau pengacara (K) | Pendiri | 20 Nov |
| 2 | 16 sampai 22 Nov | Konfirmasi harga hosting dan domain, jalankan ulang CFO | Pendiri | 20 Nov |
| 2 | 16 sampai 22 Nov | Konfirmasi NIB, NPWP, kode KBLI di OSS | Pendiri | 22 Nov |
| 2 | 16 sampai 22 Nov | Cek merek dagang di PDKI dan ketersediaan nama akun | Pendiri | 22 Nov |
| 3 (H-14) | 23 sampai 29 Nov | Daftar 30 calon klien dari jaringan (kalender `marketing.md` H-13 sampai H-11) | Pendiri | 25 Nov |
| 3 | 23 sampai 29 Nov | Demo 5 menit dari Getruzz atau Systemma, halaman penawaran, Google Business Profile (H-10 sampai H-8) | Developer | 28 Nov |
| 4 | 30 Nov sampai 6 Des | Pesan pribadi ke 10 orang pertama, video demo, soft open (hari demo untuk teman dan kenalan, tanpa DP) pada Kamis 3 Des | Pendiri | 3 Des |
| 4 | 30 Nov sampai 6 Des | Tinjau keberatan dari soft open; perbaiki penawaran | Pendiri | 6 Des |
| H | Senin 7 Des | Uji berbayar dimulai | Pendiri | 7 Des |
| H+1 sampai H+16 | 8 sampai 23 Des | Tindak lanjut, 20 percakapan target, kalender pemasaran | Pendiri | 23 Des |
| H+30 | 6 Jan 2027 | Ukur terhadap barisan sukses dan gagal | Pendiri | 6 Jan |

Tim: developer menyiapkan demo, penawaran teknis, dan estimasi tahap; pendiri memegang percakapan klien. Pelatihan staf klien (rutinitas `ops.md`) disiapkan sebelum proyek pertama berjalan.

## 3. Hari H (Senin 7 Desember 2026)

| jam | siapa | kegiatan |
| --- | --- | --- |
| 08.00 | Pendiri | Periksa situs, form booking, tautan WhatsApp, dan halaman penawaran |
| 09.00 | Pendiri | Kirim batch pesan pertama (10 orang) dengan tawaran konsultasi gratis |
| 10.00 | Developer | Siap demo langsung untuk yang menjawab |
| 12.00 | Pendiri | Balas semua yang masuk; catat keberatan dengan kata mereka |
| 15.00 | Pendiri | Kirim batch kedua; unggah video demo di WhatsApp |
| 17.00 | Pendiri | Tinjau: berapa jadwal konsultasi, berapa penawaran yang diminta |

Jika sesuatu rusak (dari `ops.md`): situs atau form mati: pakai WhatsApp langsung; klien menolak syarat DP: jangan ubah di tempat, catat dan bawa ke tinjauan hari 7.

## 4. 30 hari pertama

Angka yang dilacak tiap minggu:
- Jumlah percakapan konsultasi baru (pemasaran). Ganti jika nol dalam dua minggu.
- Persentase percakapan yang berlanjut ke penawaran tertulis. Ganti jika kurang dari 1 dari 5.
- Jumlah DP dibayar. Ganti jika nol setelah 20 percakapan.
- Dari CFO: titik impas sekitar 1,4 proyek per bulan; di bulan pertama pendapatan nol, jadi kas bulanan terkuras Rp12,5 juta (estimasi).

| tinjauan | tanggal | pertanyaan |
| --- | --- | --- |
| Hari 7 | 14 Des | Berapa percakapan dan dari mana? Keberatan apa yang paling sering? Apakah kebijakan DP diterima atau memicu penolakan? |
| Hari 14 | 21 Des | Berapa penawaran tertulis, dan berapa yang disetujui? Apakah ada klien yang bersedia jadi referensi? |
| Hari 30 | 6 Jan 2027 | Apakah tiga klien berbayar tercapai? Jika tidak, kembali ke `/founder-offer` dengan keberatan nyata, atau berhenti. |
