# Harga: N⁻¹ Labs

Dasar: kurva harga panel simulasi (`founder/pricing-curve.md`), harga pesaing (`founder/competitors.md`). Angka biaya belum ada (`founder/numbers.json` belum dibuat, CFO belum jalan), jadi margin pada harga ini **belum dihitung**. Catatan: tanda "$" di `pricing-curve.md` adalah tanda bawaan alat; semua angkanya rupiah.

## 1. Harganya

**Pertahankan "mulai Rp10.000.000" untuk sementara, sebagai harga yang akan diuji, bukan harga yang sudah terbukti.**

- Panel: rentang yang dapat diterima Rp2,97 juta sampai Rp18,26 juta. Rp10 juta ada di dalam rentang, di atas titik hambatan terendah (OPP Rp5,17 juta) dan titik impas bargain-mahal (IPP Rp7,98 juta).
- Dari 20 pembeli simulasi, 18 menyebut batas "terlalu mahal" mereka di atas Rp10 juta dan hanya 2 yang menyebut Rp10 juta sudah terlalu mahal. 12 dari 20 menganggap harga mulai terasa mahal di atas Rp10 juta. Jadi harga bukan penghalang utama panel: 12 dari 20 menolak karena kepercayaan, 5 karena harga, 3 karena kebiasaan. Menurunkan harga tidak akan memperbaiki 0 dari 20 pembeli.
- Pesaing: aplikasi siap pakai Rp249.000 sampai Rp333.000 per bulan ([Majoo](https://majoo.id/harga), [Jurnal](https://www.jurnal.id/id/harga/), [Accurate](https://accurate.id/harga/)); proyek custom Rp5 juta sampai Rp50 juta menurut [Teknologi.id](https://teknologi.id/teknologi/cara-memilih-jasa-pembuatan-aplikasi-software-house-di-indonesia). Rp10 juta ada di bagian bawah rentang custom. Pesaing lokal yang ditemukan menulis harga dalam dolar, bukan rupiah.
- Margin: **belum diketahui.** Jalankan `/founder-cfo` dengan angka nyata sebelum menetapkan harga final. Jika margin per proyek tidak sehat pada Rp10 juta, naikkan harga atau persempit cakupan, bukan turunkan.

## 2. Tangga

Mengikuti tingkat kompleksitas yang sudah ada di situs. Harga setiap anak tangga adalah hipotesis untuk diuji, belum ditetapkan.

| anak tangga | isi | alasan naik |
| --- | --- | --- |
| Satu modul | satu fungsi utama (misalnya hanya rekap penjualan dan kas) | pintu masuk berisiko rendah untuk klien yang belum kenal: jawaban atas "harga di bawah Rp10 juta untuk satu modul kecil" dari panel |
| Beberapa modul | misalnya order dan gudang yang saling tersambung | data tidak lagi terpisah |
| Kompleks | banyak modul atau integrasi | ada kebutuhan integrasi ke proses yang sudah berjalan |

Titik harga untuk diuji pada satu modul: sekitar Rp5.000.000 (dekat OPP Rp5,17 juta) dan sekitar Rp8.000.000 (dekat IPP Rp7,98 juta), dibandingkan dengan Rp10.000.000. Syaratnya margin dari `/founder-cfo`.

## 3. Penawaran pembuka

Bukan diskon. Panel tidak meminta harga lebih murah; mereka meminta **bukti dan risiko lebih kecil**. Jadi pembuka yang masuk akal:

- Harga tetap tertulis per tahap sebelum DP, dan DP yang bisa dikembalikan jika tahap awal tidak diterima.
- Beberapa slot pertama dengan syarat itu, ditutup pada tanggal tertentu (usul: 31 Desember 2026, pemilik yang menetapkan).
- Jangan menulis "harga normal" yang belum pernah ditagih sebagai jangkar.

Bentuk lengkapnya dikerjakan `/founder-offer`.

## 4. Yang diuji dengan pembeli nyata

1. Dua halaman atau dua penawaran: satu modul pada Rp5.000.000 dan Rp8.000.000, atau Rp10.000.000 untuk paket yang sama, dengan DP nyata.
2. Penawaran dengan DP yang bisa dikembalikan dibanding DP biasa, untuk melihat apakah itu yang mengubah keputusan.
3. Tunjukkan demo Getruzz atau Systemma dan dua atau tiga klien yang bisa dihubungi, lalu ukur apakah penolakan karena kepercayaan turun.

Panel simulasi memberi 0 dari 20; ini batas atas yang menunjukkan masalah kepercayaan dan DP, bukan perkiraan konversi.

## 5. Keberatan harga dari panel (kata mereka)

1. "Saya biasa minta penawaran dari beberapa vendor dan ambil yang paling murah. Rp10 juta itu cuma harga awal, dan freelancer biasanya bisa kerjakan lebih murah." (P001)
2. "Pesanan saya masih lewat WhatsApp dan dicatat manual, tapi Rp10 juta di depan itu mahal kalau aplikasi siap pakai cuma Rp300 ribuan sebulan. Saya coba yang murah dulu sebelum bayar sistem custom." (P002)
3. "Rp10 juta itu lebih dari sebulan penghasilan saya, dan perusahaannya baru berdiri 2026. Saya belum kenal siapa pun yang pernah pakai jasa mereka, jadi saya tidak berani bayar DP." (P003)

Jawaban dari simulasi: bukan kutipan pelanggan.
