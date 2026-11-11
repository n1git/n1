# Operasional: N⁻¹ Labs

Dasar: `founder/idea.md`, `founder/offer.md`, `founder/numbers.json` (angka biaya masih estimasi). Aturan hukum dan pajak berbeda per tempat dan berubah; semua butir izin harus dikonfirmasi ke instansi atau profesional. Ini bukan nasihat hukum.

## 1. Siklus kerja

Satu proyek berjalan seperti ini. Tanda (K) = dilihat klien.

1. Pertanyaan masuk lewat form booking atau WhatsApp (K).
2. Konsultasi awal gratis, tentukan sistem yang dibutuhkan (K).
3. Penawaran tertulis: harga tetap per tahap, tahap, jadwal, kebijakan DP (K).
4. Persetujuan dan DP (K).
5. Pengembangan per tahap, demo ke klien di akhir tiap tahap (K).
6. Serah-terima: kode dan data diserahkan, pelatihan staf (K).
7. Dukungan 30 hari (K).
8. Mingguan: tinjau pertanyaan baru, status tahap, dan tagihan.

## 2. Pemasok

Hanya biaya yang ada di `numbers.json`: domain, hosting, dan layanan pihak ketiga per proyek (estimasi Rp1.200.000).

| kebutuhan | pilihan | harga publik yang ditemukan | catatan |
| --- | --- | --- | --- |
| Hosting bersama | IDCloudHost | paket awal Rp25.000 per bulan, SUPERSTAR Rp45.000, LEGEND Rp75.000, tercatat Mei 2026 ([whtop](https://www.whtop.com/id/compare/idcloudhost,jagoanhosting), agregator, bukan halaman resmi) | konfirmasi di situs resmi |
| VPS | IDCloudHost Basic Standard 20 GB | Rp87.000 per bulan ([whtop](https://www.whtop.com/id/plans/idcloudhost.com/148732)) | untuk sistem yang butuh server sendiri |
| Hosting bersama | Niagahoster | angka antarsumber tidak konsisten (harga normal, tahunan, dan promo bercampur) ([Website Planet](https://www.websiteplanet.com/id/web-hosting/niagahoster/)) | minta penawaran atau baca halaman resmi |
| Domain `.com` dan `.id` | pendaftar domain mana pun | tidak ditemukan | tanyakan langsung |

Catatan: harga hosting di atas jauh di bawah estimasi biaya variabel Rp1.200.000 per proyek. Setelah harga resmi dikonfirmasi dan jenis server tiap proyek diketahui, `numbers.json` perlu diperbarui dan CFO dijalankan ulang. Saya belum mengubah angkanya karena harga yang ditemukan belum dikonfirmasi dari sumber resmi.

## 3. Orang

Asumsi: dua orang tim inti. Upah minimum Kota Semarang 2026 adalah Rp3.701.709 ([Dealls](https://dealls.com/pengembangan-karir/umk-semarang), [detik](https://www.detik.com/jateng/bisnis/d-8275954/daftar-lengkap-umk-2026-se-jateng-semarang-tertinggi-banjarnegara-terendah)); estimasi CFO Rp5.000.000 per orang berada di atasnya. Beban di luar upah (BPJS, pajak penghasilan) perlu dihitung akuntan.

| peran | jam | tugas |
| --- | --- | --- |
| Pendiri atau penanggung jawab klien | Senin sampai Jumat, jam kerja | konsultasi, penawaran, tinjau demo, penagihan |
| Developer | Senin sampai Jumat, jam kerja | pengembangan, uji, serah-terima |

Bulan pertama yang sepi (rencana CFO: tanpa klien berbayar sampai bulan ke-4): waktu dipakai untuk bukti, yaitu demo, halaman penawaran, perjanjian tertulis, dan percakapan dengan calon klien.

## 4. Rutinitas

**Penerimaan pertanyaan**
1. Balas dalam satu hari kerja, sapa dan tanya satu hal: usaha apa dan masalahnya.
2. Jadwalkan konsultasi gratis.
3. Catat nama, usaha, dan kebutuhan di satu daftar.

**Konsultasi**
1. Tanya cara kerja sekarang (pesanan, stok, kas).
2. Tentukan satu sistem pertama yang paling mendesak.
3. Jelaskan harga mulai, tahap, dan kebijakan DP terlebih dulu.
4. Kirim ringkasan tertulis dalam satu hari.

**Penawaran**
1. Tulis tahap, hasil tiap tahap, harga tetap, jadwal.
2. Tulis kebijakan DP dan pengembalian, kepemilikan kode dan data, dukungan 30 hari.
3. Klien menyetujui tertulis sebelum DP.

**Serah-terima**
1. Demo ke pemilik, lalu ke staf yang akan memakainya.
2. Serahkan kode, data, dan dokumentasi tertulis.
3. Latih staf; catat pertanyaan mereka.
4. Mulai hitung 30 hari dukungan.

**Keluhan**
1. Akui masalah dalam kalimat pertama, balas dalam satu hari kerja.
2. Jelaskan langkah dan perkiraan waktu.
3. Catat penyebab; ubah rutinitas jika terulang.

**Mingguan**: tinjau percakapan baru, tahap yang tertunda, DP dan tagihan yang belum dibayar, dan tiga angka pemasaran.

## 5. Alat

Paket terkecil yang cukup. Harga tidak saya konfirmasi; periksa halaman resmi masing-masing.

| kebutuhan | pilihan | catatan |
| --- | --- | --- |
| Pesan dan klien | WhatsApp Business | sudah dipakai |
| Pengelolaan kode | GitHub | organisasi `n1git` sudah ada |
| Dokumen penawaran | Google Docs atau editor teks | tanpa biaya tambahan |
| Pembukuan | Jurnal, Accurate, atau Majoo (Rp249.000 sampai Rp333.000 per bulan, dari `competitors.md`) | pilih yang paling cocok dengan akuntan |
| Pembayaran | transfer bank manual | nominal DP dan rekening belum diisi di `app/content.ts` |

## 6. Izin, pajak, asuransi (daftar periksa)

Konfirmasi ke instansi atau profesional.

- [ ] Bentuk usaha (perorangan, CV, atau PT) dan akta bila perlu: tanyakan notaris atau konsultan.
- [ ] Nomor Induk Berusaha (NIB) lewat OSS: https://oss.go.id; pilih kode KBLI yang sesuai dengan pemrograman komputer atau pengembangan perangkat lunak (sekitar 62011, konfirmasi di OSS).
- [ ] NPWP usaha, dan pajak yang berlaku untuk usaha kecil (PPh final UMKM, PP 55/2022): konfirmasi ke akuntan.
- [ ] Perlindungan data pribadi: UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi, karena sistem klien menyimpan data pelanggan mereka.
- [ ] Merek dagang: PDKI https://pdki-indonesia.dgip.go.id (lihat `brand.md`).
- [ ] Perjanjian proyek: kepemilikan kode dan data, DP, pengembalian, dukungan, ditinjau pengacara.
- [ ] Asuransi tanggung jawab profesional: tidak umum untuk usaha sekecil ini; tanyakan pialang bila klien besar meminta.

## 7. Risiko

| # | risiko | kemungkinan | dampak | rencana |
| --- | --- | --- | --- | --- |
| 1 | Tidak ada klien berbayar dalam 3 bulan | tinggi | tinggi | fokus bukti dan satu klien referensi, kas Rp73,5 juta (`cfo.md`) disiapkan |
| 2 | Pendiri atau developer sakit di tengah tahap | sedang | tinggi | dokumentasi tertulis tiap tahap, tahap kecil |
| 3 | Klien mengubah kebutuhan di tengah | tinggi | sedang | harga tetap per tahap, perubahan dihargai terpisah |
| 4 | Klien menolak membayar tahap berikutnya | sedang | sedang | bayar bertahap per tahap, serah kode per tahap yang dibayar |
| 5 | Sistem bermasalah setelah serah-terima | sedang | sedang | 30 hari dukungan, dokumentasi |
| 6 | Pengembalian DP menggerus kas | sedang | sedang | tahap awal kecil, uji kelayakan sebelum DP; model biaya jaminan di CFO |
| 7 | Data klien bocor | rendah | tinggi | akses minimum, cadangan, ikuti UU PDP |
| 8 | Pesaing menurunkan harga di sekitar Rp10 juta | sedang | sedang | jangan bersaing harga; fokus bukti dan kepemilikan |
| 9 | Tim terlalu sibuk satu proyek besar | sedang | sedang | batas 3 proyek per bulan (kapasitas CFO) |
| 10 | Ulasan buruk di tahap awal | rendah | tinggi | konsultasi jujur dari awal, jangan terima proyek di luar kemampuan |
