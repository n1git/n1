# Merek: N⁻¹ Labs

Nama, logo merah, palet, dan font sudah dipakai di situs. Dokumen ini menilai apa yang ada, bukan memulai dari nol. Pemeriksaan di bawah hanya pencarian publik. Merek dagang dikonfirmasi oleh konsultan kekayaan intelektual, dan tidak ada yang terdaftar sampai pemilik mendaftarkannya.

## 1. Nama

**Rekomendasi: pertahankan "N⁻¹ Labs".** Ia punya makna yang bisa diceritakan (selalu satu langkah sebelum selesai) dan sudah dipakai di situs, logo, dan kontak. Masalahnya ada di cara orang menuliskannya, bukan pada maknanya:

- Tanda pangkat atas (⁻¹) sulit diketik. Orang akan mencari "N-1 Labs", "N1 Labs", atau "n1 labs". Situs sudah memakai "N-1 Labs" sebagai nama alternatif di judul dan tag (`app/seo.ts`).
- "N1" sangat umum sebagai nama, sehingga mudah tertimbun di pencarian.

Sepuluh kandidat sebagai pembanding, bukan saran mengganti nama:

| nama | gaya | catatan |
| --- | --- | --- |
| N⁻¹ Labs | evokatif | dipertahankan; masalah ketik dan pencarian di atas |
| Satu Langkah Lagi | deskriptif | memuat makna nama; panjang, dan terdengar seperti slogan |
| Sistem Semarang | tempat | jelas lokasi; membatasi dan generik |
| Alur Kerja | deskriptif | memuat cara kerja; sangat umum |
| Rakit | evokatif | "merakit sistem"; pendek; mungkin bentrok dengan banyak nama |
| Bangun Sistem | deskriptif | jelas; sulit dilindungi |
| Selesai Lab | evokatif | kebalikan makna N⁻¹ |
| Kurang Satu | evokatif | memuat makna nama; terdengar negatif |
| Nusa Sistem | tempat | terdengar nasional; generik |
| Pandanaran Labs | tempat | nama jalan Semarang; terlalu lokal |

Tiga kandidat yang diperiksa: **N⁻¹ Labs**, **Rakit**, **Satu Langkah Lagi**.

### Pemeriksaan (publik, belum final)

| periksa | hasil |
| --- | --- |
| Domain | `n-1labs.com` sudah mengarah ke GitHub Pages (milik pemilik, situs yang ada). `n1labs.com` sudah mengarah ke alamat lain (194.164.229.209), jadi dipakai pihak lain: risiko keliru. `n-1labs.id`, `n1labs.id`, `n-1labs.co.id`: tidak ada catatan DNS, tetapi itu belum berarti tersedia untuk didaftarkan; periksa di pendaftar domain. |
| Merek dagang | Cari di PDKI Indonesia (https://pdki-indonesia.dgip.go.id): kelas 42 (pembuatan perangkat lunak), kelas 35 dan 9 bila relevan, untuk "N-1 Labs", "N1 Labs", dan "N⁻¹". Cari juga di WIPO Global Brand Database (https://branddb.wipo.int). Saya belum bisa memastikan hasilnya. |
| Akun | Belum ada akun Instagram, TikTok, YouTube yang diisi di situs (`app/content.ts`). GitHub memakai `n1git`. Saya tidak bisa memeriksa ketersediaan akun dari sini (GitHub membalas 403 lewat proxy). Cek manual: nama yang sama di semua akun. |
| Kemiripan dengan pesaing | Tidak ada nama pesaing di `competitors.md` yang mirip "N⁻¹ Labs". Tetapi `n1labs.com` dipakai pihak lain: periksa apa bisnisnya sebelum mengandalkan nama "N1 Labs". |

## 2. Janji dan suara

**Janji**: "Sistem sesuai alur kerja Anda, dengan harga tetap tertulis, dan kode serta data tetap milik Anda." Ini mengikuti posisi di `marketing.md` dan menjawab keberatan yang paling banyak muncul di panel.

**Tagline, tiga pilihan** (bahasa Indonesia, kecuali pilihan 3 yang adalah usulan awal pemilik):
1. "Bayangkan sistemnya, kami yang membangun." (sedang dipakai di hero)
2. "Selalu satu langkah sebelum selesai."
3. "If you can imagine it, we can build it." (usulan pemilik, bahasa Inggris)

**Suara: tiga kata sifat.**

| sifat | lakukan | jangan |
| --- | --- | --- |
| Terus terang | sebut harga, tahap, dan batas yang jelas | menyembunyikan syarat DP atau memakai kata samar ("solusi terbaik") |
| Tenang | menjelaskan seperti kepada pemilik toko yang sibuk | janji berlebihan, tanda seru, "revolusioner" |
| Teliti | sebut angka dan tahap yang nyata | klaim hasil tanpa bukti ("naikkan omzet 200%") |

Sebelum dan sesudah, dari `pitch-v1.md`:
- Sebelum: "Kami membangun sistem keuangan, order, gudang, kasir, e-commerce, atau website sesuai cara kerja bisnis Anda."
- Sesudah: "Kami membangun satu sistem yang cocok dengan cara Anda bekerja, mulai dari pesanan WhatsApp yang berantakan."

## 3. Tampilan (ringkasan dari yang sudah dipakai)

| peran | warna | hex | catatan kontras |
| --- | --- | --- | --- |
| Latar dan teks gelap | Obsidian Black | `#111217` | teks Ice Grey di atasnya 14,74:1 (lolos AA dan AAA) |
| Latar terang dan teks | Ice Grey | `#DFE5EB` | teks Obsidian di atasnya 14,74:1 |
| Aksen dan tombol | Racing Red | `#EF233C` | teks hitam (`#000000`) di atas merah 4,98:1 (lolos AA); **putih di atas merah 4,22:1, tidak lolos AA untuk teks kecil**; merah sebagai teks di atas Obsidian 4,43:1 (tidak lolos), di atas Ice Grey 3,33:1 (tidak lolos) |

Untuk teks merah, pakai varian: `#FF7A8A` di atas Obsidian (7,48:1) dan `#B3182C` di atas Ice Grey (5,37:1). Situs sudah memakai pasangan ini.

**Huruf**: Geist (SIL Open Font License, gratis, tersedia di Google Fonts), satu keluarga untuk judul dan teks. Tidak ada font berlisensi lain.

**Logo**: kotak membulat merah dengan tanda `[N⁻¹]` putih. Dibuat dari logo biru lama dengan pewarnaan ulang, jadi ada sedikit belang halus pada warna merah; ganti dengan berkas asli (SVG atau PNG resolusi tinggi) bila ada. Harus terbaca di ikon 32px (tanda `N⁻¹` kecil saat itu: periksa), di tab browser, dan di avatar WhatsApp. Hindari: gradien, bayangan, dan menempelkan petir atau elemen yang tidak punya makna dengan nama.

## 4. Lima titik sentuh pertama

1. **Beranda**: hero "Bayangkan sistemnya, kami yang membangun." dengan jendela pesanan; tombol Booking Proyek.
2. **Konfirmasi booking**: pesan WhatsApp yang sudah terisi (kode, nama, layanan, anggaran, kebutuhan), tanpa nada menekan.
3. **Penawaran tertulis**: harga tetap per tahap, nama tahap, tanggal, dan kebijakan DP, dalam satu halaman.
4. **Postingan pertama**: video demo 30 detik dari Getruzz atau Systemma (tidak mengklaim hasil klien).
5. **Balasan ke keluhan pertama**: akui masalah dalam kalimat pertama, jelaskan langkah dan waktu, tanpa membela diri.
