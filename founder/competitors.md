# Peta pesaing: N⁻¹ Labs

Tanggal pengambilan: 2026-11-11. Hanya sumber publik. Sumber yang tidak bisa dijangkau dicatat di bagian akhir. Data mentah ada di `competitors.csv`.

**Peringatan utama: data ulasan sangat tipis. Tidak ada tema keluhan yang mencapai tiga ulasan. Celah di bawah belum terbukti.**

## 1. Tabel (urut dari yang paling langsung)

| # | Nama | Jenis | Harga pembanding (tertulis di sumber) | Posisi sendiri | Sumber |
|---|---|---|---|---|---|
| 1 | iDevArts (Kab Semarang) | Langsung | Min. project $1,000+; $25-$49 per jam | "Affordable App Development for Growing Businesses" | [Clutch](https://clutch.co/profile/idevarts) |
| 2 | BMS Services (Semarang) | Langsung | $35 per jam; anggaran minimal di bawah $1.000 | tidak diambil | [DesignRush](https://www.designrush.com/agency/profile/bms-services) |
| 3 | Ditya Gie (Semarang, freelancer) | Langsung | Mulai $3,000 | tidak diambil | [Contra](https://contra.com/s/QQ6B6FlO-website-design-and-development) |
| 4 | SoftwareSeni (Yogyakarta, Sydney) | Langsung | tidak tercantum | "Software House Terbaik untuk Web & Sistem Enterprise di Indonesia" | [situs](http://www.softwareseni.co.id/) |
| 5 | Fastwork | Marketplace freelancer | tidak ada harga di beranda; kategori Web Development, Aplikasi, AI Development | "Situs Freelance Online Terpercaya #1 di Indonesia" | [Fastwork](https://fastwork.id/) |
| 6 | Freelancer.co.id | Marketplace freelancer | rata-rata tawaran $560 untuk satu proyek POS restoran | tidak diambil | [proyek](https://www.freelancer.co.id/projects/php/comprehensive-restaurant-pos-system) |
| 7 | Majoo | Aplikasi siap pakai | Starter Rp 249.000 per outlet per bulan, belum PPN; Advance Rp 499.000; Prime Rp 999.000 | "Harga Paket Berlangganan majoo" | [majoo](https://majoo.id/harga) |
| 8 | Jurnal by Mekari | Aplikasi siap pakai | Essentials Rp299.250 /bulan* (kontrak pertama, dibayar per tahun); Plus Rp674.250 /bulan* | "Mulai transformasi bisnis dengan solusi akuntansi dan operasional terintegrasi" | [Jurnal](https://www.jurnal.id/id/harga/) |
| 9 | Accurate Online | Aplikasi siap pakai | Paket Dasar Rp 333,000 /bulan (termasuk PPN 11%); Accurate POS Rp 222.000 /bulan | "Dapatkan Penawaran Terbaik dari Kami" | [Accurate](https://accurate.id/harga/) |
| 10 | Moka POS | Aplikasi siap pakai | harga resmi tidak berhasil dibaca | "Start growing your offline and online business with Moka App!" | [App Store](https://apps.apple.com/id/app/moka-pos/id955811575) |
| 11 | Kasir Pintar POS | Aplikasi siap pakai | Gratis di App Store | tidak ada | [App Store](https://apps.apple.com/app/id1594336570) |
| 12 | Sirclo | Pembuat toko online | Rp99.000 sampai Rp1,75 juta per bulan (blog, tanggal tidak jelas) | tidak diambil | [Midtrans](https://midtrans.com/id/blog/sirclo-a-simple-solution-to-build-your-own-ecommerce-website) |
| 13 | BukuKas, BukuWarung | Aplikasi pembukuan | tidak ditemukan | BukuKas digambarkan gratis oleh media (2020) | [Bisnis.com](https://ekonomi.bisnis.com/read/20200511/9/1238739/bukukas-solusi-pembukuan-keuangan-digital-umkm) |
| 14 | Spreadsheet, buku manual, WhatsApp | Substitusi | gratis, tetapi tidak ada sumber publik yang diteliti | n/a | tidak ada |

Peringkat 14 adalah substitusi yang disebut di `idea.md`; tidak ada sumber publik yang dikumpulkan untuknya.

Pembanding harga proyek custom UMKM: artikel [Teknologi.id](https://teknologi.id/teknologi/cara-memilih-jasa-pembuatan-aplikasi-software-house-di-indonesia) (13 Juni 2026): "biayanya berkisar Rp5 juta hingga Rp50 juta" untuk kasir, toko online, atau booking sederhana. [Next-IT](https://next-it.co.id/blog/aplikasi-custom-vs-saas-kapan-bisnis-anda-butuh-solusi-khusus) menyebut aplikasi internal sederhana mulai dari Rp 50 juta (dari ringkasan pencarian, halaman tidak dibuka).

## 2. Rentang harga

**Aplikasi siap pakai, paket terendah berbayar per bulan** (Majoo Starter, Jurnal Essentials, Accurate Dasar): terendah Rp249.000 ([Majoo](https://majoo.id/harga)), median Rp299.250 ([Jurnal](https://www.jurnal.id/id/harga/)), tertinggi Rp333.000 ([Accurate](https://accurate.id/harga/)). Tiga titik saja; basis pajak dan penagihan berbeda (Majoo belum PPN, Accurate sudah PPN, Jurnal dibayar tahunan).

**Proyek custom:** tidak ada median yang jujur. Titik data campur mata uang dan jenis (USD per jam, rata-rata tawaran, perkiraan artikel): terendah $560 rata-rata tawaran POS ([Freelancer.co.id](https://www.freelancer.co.id/projects/php/comprehensive-restaurant-pos-system)), tertinggi Rp50 juta ke atas ([Next-IT](https://next-it.co.id/blog/aplikasi-custom-vs-saas-kapan-bisnis-anda-butuh-solusi-khusus)). Rp10.000.000 N⁻¹ Labs jatuh di dalam rentang Rp5-50 juta Teknologi.id, di bagian bawahnya. Tidak ada halaman harga rupiah dari software house Semarang yang ditemukan.

## 3. Peta posisi

Sumbu: harga di muka (rendah ke tinggi) dan kesesuaian dengan alur kerja sendiri (standar ke custom).

```
Custom  |  Freelancer marketplace       Software house (SoftwareSeni)
        |  (Fastwork, Freelancer.co.id) iDevArts, BMS, Ditya Gie
        |                         [N⁻¹ Labs: Rp10 juta, custom]
        |
Standar |  Kasir Pintar  BukuKas  Majoo  Moka  Jurnal  Accurate  Sirclo
        +------------------------------------------------------------
          Rendah (gratis - Rp300 rb/bulan)            Tinggi (Rp5 juta+)
```

Penempatan dari harga yang tertera di tabel; posisi relatif di antara software house tidak punya angka rupiah pembanding.

## 4. Keluhan, diurutkan

Semua tema tipis (kurang dari tiga ulasan). Ini sinyal lemah, bukan temuan.

1. **Freelancer tidak merespons dan pengembalian dana berbelit (Fastwork), 1 ulasan, tipis.** "2 bulan gak ada kabar dari freelancer, admin slow respon dan solusi refund. Refundnya pun berbelit berbelit." ([App Store Fastwork](https://apps.apple.com/id/app/fastwork-hire-freelancers/id1154830520?l=id), 09/11/2021). Skor aplikasi 4.7 dari sekitar 1.100 penilaian, jadi ini satu ulasan negatif dari empat yang tampil.
2. **Pembayaran QRIS error dan langganan gagal (majoolite), 2 ulasan, tipis.** "Pembayaran Qris server error terus udah lama gk ada perbaikan dan jawaban" dan "Mau lanjut subscribe bayar langganan biar premium, gak bisa. ERROR berhari2." ([App Store majoolite](https://apps.apple.com/id/app/majoolite-aplikasi-kasir/id1669605872)). Halaman tidak menampilkan bintang per ulasan, jadi belum pasti 1-3 bintang. Rating 3.6 dari 80.
3. **Tampilan iPad tidak diperbarui (majoolite), 1 ulasan, tipis.** "Ini download di ipad tampilanya seukuran hp , ga da niat di update gitu?" (sumber sama).
4. **Moka POS:** hanya empat ulasan positif dari Maret 2021 yang tampil, tidak ada keluhan ([App Store Moka](https://apps.apple.com/id/app/moka-pos/id955811575)).
5. **iDevArts:** nol ulasan di Clutch ([Clutch](https://clutch.co/profile/idevarts)).

## 5. Celah

**Belum ada celah yang terbukti oleh bukti ini.** Tidak ada tema keluhan dengan tiga ulasan atau lebih, dan tidak ada ulasan dari pembeli jasa custom Semarang.

Yang didukung data hanya posisi harga: ada jurang antara langganan siap pakai (Rp249.000-Rp333.000 per bulan) dan proyek custom (Rp5-50 juta ke atas per [Teknologi.id](https://teknologi.id/teknologi/cara-memilih-jasa-pembuatan-aplikasi-software-house-di-indonesia)), dan penyedia Semarang yang ditemukan (iDevArts, BMS, Ditya Gie) mencantumkan harga dalam dolar, bukan rupiah. Harga rupiah yang jelas dengan DP bisa terlihat berbeda, tetapi ini hipotesis, bukan bukti keluhan pembeli.

Hipotesis kedua, juga belum terbukti: satu ulasan Fastwork soal freelancer yang menghilang menunjuk pada risiko pengerjaan di jalur freelancer; jaminan per tahap bisa menjawabnya. Satu ulasan terlalu sedikit untuk menyimpulkan. Uji lewat `/founder-consumer`.

## 6. Ancaman

- **Tercepat meniru: aplikasi siap pakai.** Majoo Starter sudah memuat kasir, toko online, inventori, CRM, dan laporan seharga Rp 249.000 per outlet per bulan ([Majoo](https://majoo.id/harga)); Prime+ menyebut manajemen gudang dengan harga konsultasi. Pemilik usaha yang hanya perlu kasir dan stok standar tidak butuh proyek Rp10.000.000.
- **Freelancer di Fastwork dan Freelancer.co.id**: tawaran POS rata-rata $560 menekan harga di bawah Rp10.000.000 ([Freelancer.co.id](https://www.freelancer.co.id/projects/php/comprehensive-restaurant-pos-system)). Fastwork juga sudah mengelompokkan layanan AI Development ([Fastwork](https://fastwork.id/)).
- **Software house lokal seperti iDevArts**: sudah di Kab Semarang, tarif $25-$49 per jam, sasaran "Growing Businesses" ([Clutch](https://clutch.co/profile/idevarts)); bisa menurunkan harga atau menambah paket rupiah kapan saja.

## Sumber yang tidak terjangkau atau belum dibaca

- Fastwork: tidak ada halaman layanan atau harga pembuatan sistem yang muncul di pencarian; hanya beranda dan ulasan App Store yang dibaca.
- G2 (ulasan Jurnal): 403, tidak dibaca. Google Play (BukuWarung, Moka, Majoo): tidak terbaca. Google Maps, Reddit, Kaskus: tidak ada hasil berguna.
- Halaman harga resmi Moka dan Sirclo: tidak terbaca atau tidak ditemukan.
- BMS Services, Ditya Gie, Freelancer.co.id, Next-IT: harga diambil dari ringkasan hasil pencarian, halaman tidak dibuka langsung.
- Ulasan Moka di App Store seluruhnya dari 2021 dan positif; tidak mewakili keluhan terbaru.
- BukuKas dan BukuWarung: tidak ada rating, harga, atau ulasan ditemukan.
- Substitusi (spreadsheet, buku manual, WhatsApp): tidak diteliti dengan sumber publik.
