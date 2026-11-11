# Catatan CFO

**Semua angka biaya dan volume di bawah ini ESTIMASI saya (lihat `founder/cfo-sources.md`), kecuali harga Rp10.000.000.** Tanda "$" dari alat berarti rupiah. "Proyek per hari" berarti **proyek per bulan** (`days_per_month` diisi 1). Hasil ini adalah ujian logika, bukan prakiraan. Mintalah akuntan memeriksa struktur, gaji, dan pajak sebelum uang bergerak.

- **Margin**: tiap proyek menyisakan Rp8.800.000 setelah biaya langsungnya (88%). Pada rencana 2 proyek per bulan margin bersih 26%. Titik impas sekitar 1,4 proyek per bulan (Rp12.500.000 biaya tetap dibagi Rp8.800.000), dan alat membulatkannya ke 2.
- **Garis yang diawasi**: volume. Pada rencana yang sudah mencerminkan hambatan panel (klien berbayar pertama di bulan ke-4), tahun pertama rugi operasi Rp53.200.000. Volume -20% menurunkan margin dari 26% ke 10% dan memperdalam rugi tahun pertama menjadi Rp72.560.000.
- **Kas**: pendiri membutuhkan sekitar **Rp73.500.000** sebelum usaha menutup dirinya sendiri; biaya awal Rp5.000.000 tidak kembali dalam 12 bulan.
- **Tiga cara memperbaiki**:
  1. Tambah proyek per bulan: tiap proyek tambahan menambah Rp8.800.000 ke laba (kontribusi per proyek). Ini tuas terbesar, dan terikat pada bukti dan referensi yang belum ada.
  2. Jangan turunkan harga: harga Rp8.000.000 memotong margin dari 26% ke 7%, harga Rp5.000.000 membuat margin -49% dan titik impas 4 proyek per bulan, melebihi kapasitas 3. Jadi harga pembuka Rp5.000.000 yang diusulkan di `pricing.md` hanya masuk akal bila biaya tetap jauh lebih rendah atau modul-nya sangat murah dikirim.
  3. Kurangi biaya tetap: tiap penurunan Rp1.000.000 per bulan menurunkan titik impas sekitar 0,11 proyek per bulan (Rp1.000.000 dibagi Rp8.800.000). Angka biaya tetap sendiri perlu dari pemilik.
- **Syarat board soal uang**: belum terpenuhi. Margin per proyek, biaya mendapatkan klien, dan jaminan DP tidak bisa dinyatakan sehat atau tidak sampai angka biaya asli ada; jaminan pengembalian DP juga belum dimasukkan karena nominal DP belum ditetapkan.

---

# Unit economics: N⁻¹ Labs, jasa pembuatan sistem bisnis custom (ASUMSI: semua angka biaya dan volume adalah estimasi, belum dari pemilik)

Every number below comes from the input file. Nothing is looked up or guessed.

## One proyek

| line | per proyek |
| --- | ---: |
| Price | $10,000,000.00 |
| Domain, hosting, dan layanan pihak ketiga per proyek (ESTIMASI) | -$1,200,000.00 |
| **Contribution** (what each proyek leaves to pay the fixed costs) | **$8,800,000.00** (88%) |

## The margin that matters

Fixed costs: $12,500,000 a month (Gaji 2 orang tim inti (ESTIMASI Rp5.000.000 per orang) $10,000,000, Alat kerja, hosting produk sendiri, internet (ESTIMASI) $2,500,000).

- **Break-even: 2 proyeks a day.** Below that you lose money every month.
- **Profit margin at your plan** (2 a day): **26%** of every sale, after every cost.
- Capacity: 3 a day.

## Year 1, month by month

| month | proyeks a day | revenue | profit | cumulative (after $5,000,000 startup) |
| ---: | ---: | ---: | ---: | ---: |
| 1 | 0 | $0 | -$12,500,000 | -$17,500,000 |
| 2 | 0 | $0 | -$12,500,000 | -$30,000,000 |
| 3 | 0 | $0 | -$12,500,000 | -$42,500,000 |
| 4 | 1 | $10,000,000 | -$3,700,000 | -$46,200,000 |
| 5 | 0 | $0 | -$12,500,000 | -$58,700,000 |
| 6 | 1 | $10,000,000 | -$3,700,000 | -$62,400,000 |
| 7 | 1 | $10,000,000 | -$3,700,000 | -$66,100,000 |
| 8 | 1 | $10,000,000 | -$3,700,000 | -$69,800,000 |
| 9 | 1 | $10,000,000 | -$3,700,000 | -$73,500,000 |
| 10 | 2 | $20,000,000 | $5,100,000 | -$68,400,000 |
| 11 | 2 | $20,000,000 | $5,100,000 | -$63,300,000 |
| 12 | 2 | $20,000,000 | $5,100,000 | -$58,200,000 |

- **Year 1 operating profit: -$53,200,000** on $110,000,000 of revenue.
- After the $5,000,000 startup spend: -$58,200,000.
- Startup money earned back: not within year 1.
- Cash you need before it pays for itself: **$73,500,000**.

## What if

| scenario | margin at plan | break-even a day | year 1 profit |
| --- | ---: | ---: | ---: |
| Base plan | 26% | 2 | -$53,200,000 |
| Price -10% | 17% | 2 | -$64,200,000 |
| Volume -20% | 10% | 2 | -$72,560,000 |
| Unit costs +15% | 24% | 2 | -$55,180,000 |

## Red flags

- Year 1 loses money on operations (-$53,200,000).
- The startup spend is not earned back within year 1.
