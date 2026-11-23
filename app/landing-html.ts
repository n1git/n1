export const LANDING_HTML = `
<section class="hero hero--collage" data-enter aria-labelledby="hero-h">
<div class="wrap"><div class="hero-text grid hero__grid">
<div class="hero__text span-5">
<h1 id="hero-h">Studio sistem bisnis custom dari Semarang</h1>
<p class="hero__lead">N⁻¹ Labs membangun sistem order, keuangan, dan stok sesuai cara kerja usaha Anda. Mulai dari satu sistem, dengan konsultasi awal gratis dan harga tetap per tahap.</p>
<div class="btn-row"><a class="btn btn--primary" href="__BASE__/booking">Booking proyek<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8"/><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg></a><a class="btn btn--secondary" href="#layanan">Lihat layanan</a></div>
<p class="hero__proof">Berdiri 2 September 2026 di Semarang, Jawa Tengah.</p>
</div>
<div class="hero__art span-6 start-7" role="img" aria-label="Daftar pesanan dari WhatsApp, pelanggan, dan agen dalam satu jendela, dengan pesanan nomor 1042 yang sedang diproses">
<div class="ly-piece ly-piece--main" aria-hidden="true"><div class="ui ui-panel ui-win" data-ui="window" data-open="Baru" data-work="Diproses" data-done="Dikirim">
<div class="ui-win__bar"><span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="ui-win__crumb">Pesanan <i>/</i> <b>Baru</b></span><span class="ui-spacer"></span><span class="ui-win__search" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/></svg><span class="ui-win__ph">Cari</span><span class="ui-kbd">/</span></span></div>
<div class="ui-win__body">
<nav class="ui-win__side" aria-hidden="true">
<span class="ui-win__nav is-on"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 9h3l1 1.5h3l1-1.5h3"/><path d="M2.5 9 4 3.5h8L13.5 9v3.5h-11z"/></svg>Baru<em>4</em></span>
<span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/></svg>Diproses<em>7</em></span>
<span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 4.5h11v8h-11z"/><path d="m2.5 5 5.5 4 5.5-4"/></svg>Dikirim<em>12</em></span>
<span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg>Selesai</span>
<span class="ui-win__label">Sumber</span>
<span class="ui-win__nav"><span class="ui-win__hash">#</span>WhatsApp</span>
<span class="ui-win__nav"><span class="ui-win__hash">#</span>Agen</span>
</nav>
<div class="ui-win__main">
<div class="ui-win__cols" aria-hidden="true"><span>Pemesan</span><span>Pesanan</span><span>Status</span><span>Masuk</span></div>
<ul class="ui-win__rows"><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="1">DP</span><span class="ui-win__who">Dewi Pramesti</span><span class="ui-win__sub">3 kaos polos hitam · WhatsApp</span><span class="ui-win__st" data-st>Baru</span><span class="ui-win__age">2m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="3">BS</span><span class="ui-win__who">Budi Santoso</span><span class="ui-win__sub">12 dus teh celup · agen</span><span class="ui-win__st" data-st>Baru</span><span class="ui-win__age">6m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="4">SW</span><span class="ui-win__who">Sari Wulandari</span><span class="ui-win__sub">2 hampers lebaran · WhatsApp</span><span class="ui-win__st" data-st>Baru</span><span class="ui-win__age">11m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="2">AS</span><span class="ui-win__who">Agus Setiawan</span><span class="ui-win__sub">40 nasi kotak · pelanggan</span><span class="ui-win__st is-you" data-st>Perlu Anda</span><span class="ui-win__age">18m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="5">RK</span><span class="ui-win__who">Rina Kartika</span><span class="ui-win__sub">5 kg kopi robusta · agen</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">24m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="3">YP</span><span class="ui-win__who">Yoga Pratama</span><span class="ui-win__sub">1 set seragam · WhatsApp</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">31m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="1">WA</span><span class="ui-win__who">Wening Astuti</span><span class="ui-win__sub">6 toples kue kering · pelanggan</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">47m</span></li></ul>
</div>
</div>
</div></div>
<div class="ly-piece ly-piece--note" aria-hidden="true"><div class="ui ui-panel ui-checks" data-ui="checklist"><div class="ui-checks__head"><div class="ui-title">Pesanan #1042</div><span class="ui-spacer"></span><div class="ui-meta" data-checks-count>3 dari 4</div></div><div class="ui-checks__bar"><i data-checks-bar style="--k:0.75"></i></div><ul class="ui-checks__list"><li class="ui-check is-done"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Dicatat dari WhatsApp</span></li><li class="ui-check is-done"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Stok dipotong</span></li><li class="ui-check is-done"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Pembayaran diterima</span></li><li class="ui-check"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Dikirim ke Banyumanik</span></li></ul></div></div>
</div>
</div></div>
</section>

<section class="section" id="order" aria-labelledby="order-h">
<div class="wrap">
<div class="grid grid--top">
<h2 class="span-5" id="order-h">Sistem order semua pesanan dalam satu jendela</h2>
<p class="span-6 start-7">Pesanan dari WhatsApp, pelanggan, atau agen masuk ke satu daftar. Buka satu pesanan untuk melihat percakapan, stok, dan statusnya, dari masuk sampai selesai. <a class="link" href="#mulai">Lihat cara memulai</a></p>
</div>
<div class="ui app fill" role="img" aria-label="Jendela sistem order: daftar pesanan di kiri, percakapan pesanan nomor 1042 di kanan" data-ui-pause-host>
<div class="app__pane app__pane--list"><div class="ui ui-panel ui-win" data-ui="window" data-open="Baru" data-work="Diproses" data-done="Dikirim">
<div class="ui-win__bar"><span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="ui-win__crumb">Pesanan <i>/</i> <b>Baru</b></span><span class="ui-spacer"></span><span class="ui-win__search" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/></svg><span class="ui-win__ph">Cari</span><span class="ui-kbd">/</span></span></div>
<div class="ui-win__body">
<nav class="ui-win__side" aria-hidden="true">
<span class="ui-win__nav is-on"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 9h3l1 1.5h3l1-1.5h3"/><path d="M2.5 9 4 3.5h8L13.5 9v3.5h-11z"/></svg>Baru<em>4</em></span>
<span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/></svg>Diproses<em>7</em></span>
<span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 4.5h11v8h-11z"/><path d="m2.5 5 5.5 4 5.5-4"/></svg>Dikirim<em>12</em></span>
<span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg>Selesai</span>
<span class="ui-win__label">Sumber</span>
<span class="ui-win__nav"><span class="ui-win__hash">#</span>WhatsApp</span>
<span class="ui-win__nav"><span class="ui-win__hash">#</span>Agen</span>
</nav>
<div class="ui-win__main">
<div class="ui-win__cols" aria-hidden="true"><span>Pemesan</span><span>Pesanan</span><span>Status</span><span>Masuk</span></div>
<ul class="ui-win__rows"><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="1">DP</span><span class="ui-win__who">Dewi Pramesti</span><span class="ui-win__sub">3 kaos polos hitam · WhatsApp</span><span class="ui-win__st" data-st>Baru</span><span class="ui-win__age">2m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="3">BS</span><span class="ui-win__who">Budi Santoso</span><span class="ui-win__sub">12 dus teh celup · agen</span><span class="ui-win__st" data-st>Baru</span><span class="ui-win__age">6m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="4">SW</span><span class="ui-win__who">Sari Wulandari</span><span class="ui-win__sub">2 hampers lebaran · WhatsApp</span><span class="ui-win__st" data-st>Baru</span><span class="ui-win__age">11m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="2">AS</span><span class="ui-win__who">Agus Setiawan</span><span class="ui-win__sub">40 nasi kotak · pelanggan</span><span class="ui-win__st is-you" data-st>Perlu Anda</span><span class="ui-win__age">18m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="5">RK</span><span class="ui-win__who">Rina Kartika</span><span class="ui-win__sub">5 kg kopi robusta · agen</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">24m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="3">YP</span><span class="ui-win__who">Yoga Pratama</span><span class="ui-win__sub">1 set seragam · WhatsApp</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">31m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="1">WA</span><span class="ui-win__who">Wening Astuti</span><span class="ui-win__sub">6 toples kue kering · pelanggan</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">47m</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="4">HW</span><span class="ui-win__who">Hendra Wijaya</span><span class="ui-win__sub">20 sak pupuk · agen</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">1j</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="2">PL</span><span class="ui-win__who">Putri Lestari</span><span class="ui-win__sub">3 buket bunga · WhatsApp</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">2j</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="5">FN</span><span class="ui-win__who">Fajar Nugroho</span><span class="ui-win__sub">8 dus air mineral · agen</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">3j</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="1">IK</span><span class="ui-win__who">Indah Kusuma</span><span class="ui-win__sub">2 kemeja batik · pelanggan</span><span class="ui-win__st is-done" data-st>Dikirim</span><span class="ui-win__age">4j</span></li></ul>
</div>
</div>
</div></div>
<div class="app__pane app__pane--open" data-ui-loop><div class="ui ui-panel ui-chat" data-ui="chat">
<div class="ui-head"><span class="ui-avatar" data-tone="1" aria-hidden="true">DP</span><div class="ui-title">Dewi Pramesti · Pesanan #1042</div><span class="ui-chat__online">WhatsApp</span><span class="ui-spacer"></span></div>
<div class="ui-chat__body">
<div class="ui-chat__day">Hari ini, 09.41</div>
<div class="ui-msg ui-msg--me"><span class="ui-msg__text">Kak, pesan 3 kaos polos hitam ukuran L ya.</span></div>
<div class="ui-msg ui-msg--bot"><span class="ui-agent ui-msg__av" aria-hidden="true"></span><span class="ui-msg__col"><span class="ui-chat__answer">Stok ada 14 lembar. Dikirim ke alamat mana, Kak?</span></span></div>
<div class="ui-msg ui-msg--me" data-chat-q><span class="ui-msg__text">Kirim ke Banyumanik, Semarang. Bayar transfer.</span></div>
<div class="ui-msg ui-msg--bot" data-chat-a><span class="ui-agent ui-msg__av" aria-hidden="true"></span><span class="ui-msg__col">
<span class="ui-chat__typing" aria-hidden="true"><i></i><i></i><i></i></span>
<span class="ui-chat__answer">Pesanan #1042 sudah dicatat: <b>3 kaos polos hitam L</b>. Dikirim besok ke Banyumanik.</span>
<span class="ui-chat__srcs"><span class="ui-chat__src"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4z"/><path d="M9 2.5v3h3"/></svg>Pesanan #1042</span><span class="ui-chat__src"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 9 4 3.5h8L13.5 9v3.5h-11z"/></svg>Stok: 11 tersisa</span></span>
</span></div>
<div class="ui-msg ui-msg--me"><span class="ui-msg__text">Sudah saya transfer ya, Kak.</span></div>
<div class="ui-msg ui-msg--bot"><span class="ui-agent ui-msg__av" aria-hidden="true"></span><span class="ui-msg__col"><span class="ui-chat__answer">Pembayaran diterima. Status pesanan berubah ke <b>Diproses</b>.</span></span></div>
<div class="ui-msg ui-msg--me"><span class="ui-msg__text">Terima kasih, ditunggu kirimannya.</span></div>
</div>
<div class="ui-chat__input"><span class="ui-chat__ph">Tulis pesan</span><span class="ui-chat__send" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
</div></div>
</div>
</div>
</section>

<section class="section g2" id="layanan" aria-labelledby="layanan-h">
<div class="wrap">
<div class="group">
<div class="section-head"><h2 id="layanan-h">Lima sistem lain bisa menyusul. <span class="muted">Ditambah satu per satu setelah sistem order berjalan.</span></h2></div>
<div class="grid">
<article class="card card--row card--open span-6 m-nolift">
<h3>Sistem gudang memantau stok</h3>
<p>Barang masuk dan keluar tercatat per rak, jadi stok yang menipis terlihat sebelum habis.</p>
<div class="panel"><div class="stage stage--fade-br"><div class="at-corner" style="--ax:40px;--ay:48px"><div class="ui ui-panel ui-win" data-ui="window" data-open="Habis" data-work="Dipesan" data-done="Aman">
<div class="ui-win__bar"><span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="ui-win__crumb">Gudang <i>/</i> <b>Stok</b></span><span class="ui-spacer"></span><span class="ui-win__search" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/></svg><span class="ui-win__ph">Cari barang</span><span class="ui-kbd">/</span></span></div>
<div class="ui-win__body">
<nav class="ui-win__side" aria-hidden="true">
<span class="ui-win__nav is-on"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 9h3l1 1.5h3l1-1.5h3"/><path d="M2.5 9 4 3.5h8L13.5 9v3.5h-11z"/></svg>Stok<em>86</em></span>
<span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2"/></svg>Masuk<em>9</em></span>
<span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M8 3v9.5M3.8 8.5 8 12.7l4.2-4.2"/></svg>Keluar<em>17</em></span>
<span class="ui-win__label">Rak</span>
<span class="ui-win__nav"><span class="ui-win__hash">#</span>A</span>
<span class="ui-win__nav"><span class="ui-win__hash">#</span>B</span>
</nav>
<div class="ui-win__main">
<div class="ui-win__cols" aria-hidden="true"><span>Barang</span><span>Lokasi</span><span>Status</span><span>Hitung</span></div>
<ul class="ui-win__rows"><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="1">KP</span><span class="ui-win__who">Kaos polos hitam L</span><span class="ui-win__sub">Rak A2 · 14 lembar</span><span class="ui-win__st is-done" data-st>Aman</span><span class="ui-win__age">hari ini</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="3">TC</span><span class="ui-win__who">Teh celup 25 kantong</span><span class="ui-win__sub">Rak B1 · 6 dus</span><span class="ui-win__st is-you" data-st>Menipis</span><span class="ui-win__age">hari ini</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="4">KR</span><span class="ui-win__who">Kopi robusta 1 kg</span><span class="ui-win__sub">Rak B3 · 22 kg</span><span class="ui-win__st is-done" data-st>Aman</span><span class="ui-win__age">kemarin</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="2">NK</span><span class="ui-win__who">Kotak nasi kertas</span><span class="ui-win__sub">Rak C1 · 0 pak</span><span class="ui-win__st" data-st>Habis</span><span class="ui-win__age">kemarin</span></li><li class="ui-win__row" data-row><span class="ui-avatar" data-tone="5">TK</span><span class="ui-win__who">Toples kue 500 g</span><span class="ui-win__sub">Rak C4 · 31 buah</span><span class="ui-win__st is-done" data-st>Aman</span><span class="ui-win__age">2 hari</span></li></ul>
</div>
</div>
</div></div></div></div>
</article>
<article class="card card--row card--open span-6 m-nolift">
<h3>Sistem keuangan mencatat arus kas</h3>
<p>Pemasukan dan pengeluaran masuk ke laporan tanpa rekap manual.</p>
<div class="panel"><div class="stage stage--fade-br"><div class="at-corner" style="--ax:24px;--ay:40px"><div class="ui ui-panel ui-stat" data-ui="stat" data-from="38" data-to="46" data-suffix=" jt">
<div class="ui-stat__head"><div class="ui-stat__top"><span class="ui-stat__label">Pemasukan bulan ini</span><span class="ui-stat__range">30 hari<svg class="ui-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 6.5 3.5 3.5 3.5-3.5"/></svg></span></div>
<div class="ui-stat__line"><span class="ui-stat__num" data-stat-num>46 jt</span><span class="ui-stat__sub">Rp, setelah pengeluaran</span></div></div>
<div class="ui-stat__chart"><svg class="ui-stat__svg" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true"><path class="ui-stat__grid" d="M0 30.5H400M0 60.5H400M0 90.5H400"/><path class="ui-stat__cover" fill-rule="evenodd" d=""/><g class="ui-stat__bars"><rect rx="3" x="0.00" y="49.04" width="21.14" height="70.96"/><rect rx="3" x="29.14" y="40.86" width="21.14" height="79.14"/><rect rx="3" x="58.29" y="44.95" width="21.14" height="75.05"/><rect rx="3" x="87.43" y="36.76" width="21.14" height="83.24"/><rect rx="3" x="116.57" y="42.22" width="21.14" height="77.78"/><rect rx="3" x="145.71" y="34.04" width="21.14" height="85.96"/><rect rx="3" x="174.86" y="38.13" width="21.14" height="81.87"/><rect rx="3" x="204.00" y="29.94" width="21.14" height="90.06"/><rect rx="3" x="233.14" y="35.40" width="21.14" height="84.60"/><rect rx="3" x="262.29" y="25.85" width="21.14" height="94.15"/><rect rx="3" x="291.43" y="31.31" width="21.14" height="88.69"/><rect rx="3" x="320.57" y="23.12" width="21.14" height="96.88"/><rect rx="3" x="349.71" y="27.21" width="21.14" height="92.79"/><rect rx="3" x="378.86" y="16.30" width="21.14" height="103.70"/></g></svg>
<div class="ui-stat__axis" aria-hidden="true"><span>Minggu 1</span><span>Minggu 3</span><span>Hari ini</span></div></div>
</div></div></div></div>
</article>
</div>
</div>
<div class="grid">
<article class="card card--row card--open span-4 m-nolift">
<h3>Sistem kasir melayani transaksi toko</h3>
<p>Cari barang, tambah ke struk, dan transaksi tercatat saat itu juga.</p>
<div class="panel"><div class="stage stage--fade-b"><div class="at-rise fit to-edge" style="--fit-max:380px;--ay:40px"><div class="ui ui-panel ui-search" data-ui="search"><div class="ui-search__field"><svg class="ui-icon" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/></svg><span class="ui-search__q"><span data-search-q>kopi robusta</span><i class="ui-search__caret"></i></span><kbd class="ui-search__kbd">F2</kbd></div><div class="ui-search__group">Barang</div><ul class="ui-search__list" data-search-list><li class="ui-search__row is-sel"><span class="ui-search__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 9 4 3.5h8L13.5 9v3.5h-11z"/></svg></span><span class="ui-search__t"><b>Kopi robusta</b> 1 kg</span><span class="ui-search__m">Rp85.000</span></li><li class="ui-search__row"><span class="ui-search__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 9 4 3.5h8L13.5 9v3.5h-11z"/></svg></span><span class="ui-search__t"><b>Kopi robusta</b> 250 g</span><span class="ui-search__m">Rp24.000</span></li><li class="ui-search__row"><span class="ui-search__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 9 4 3.5h8L13.5 9v3.5h-11z"/></svg></span><span class="ui-search__t"><b>Kopi robusta</b> sachet</span><span class="ui-search__m">Rp3.500</span></li></ul><div class="ui-search__foot"><span><kbd>Enter</kbd> tambah ke struk</span></div></div></div></div></div>
</article>
<article class="card card--row card--open span-4 m-nolift">
<h3>Sistem toko online menerima pesanan</h3>
<p>Katalog, keranjang, dan pesanan toko online masuk ke alur yang sama.</p>
<div class="panel"><div class="stage stage--fade-b"><div class="at-rise fit" style="--fit-max:380px;--ax:32px;--ay:calc(100% - 180px);--ay-sm:calc(100% - 180px)"><div class="ui ui-notify" data-ui="notify"><ul class="ui-notify__list" data-notify-list>
<li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="4">SW</span><span class="ui-note__text"><span class="ui-note__title">Pesanan toko online baru<time>baru</time></span><span class="ui-note__body">Sari Wulandari, 2 hampers lebaran</span></span><span class="ui-btn ui-btn--sm ui-note__btn">Buka</span></li>
<li class="ui-note"><span class="ui-note__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg></span><span class="ui-note__text"><span class="ui-note__title">Pembayaran diterima<time>4m</time></span><span class="ui-note__body">Pesanan #1039, transfer bank</span></span></li>
<li class="ui-note"><span class="ui-note__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg></span><span class="ui-note__text"><span class="ui-note__title">Keranjang dibayar<time>12m</time></span><span class="ui-note__body">3 barang dari katalog</span></span></li>
</ul></div></div></div></div>
</article>
<article class="card card--row card--open span-4 m-nolift">
<h3>Sistem website membuat profil usaha</h3>
<p>Profil usaha yang nyaman dibuka di ponsel maupun komputer.</p>
<div class="panel"><div class="stage stage--fade-b"><div class="at-rise fit" style="--fit-max:340px;--ay:40px"><div class="ui ui-panel ui-checks" data-ui="checklist"><div class="ui-checks__head"><div class="ui-title">Website profil usaha</div><span class="ui-spacer"></span><div class="ui-meta" data-checks-count>3 dari 5</div></div><div class="ui-checks__bar"><i data-checks-bar style="--k:0.6"></i></div><ul class="ui-checks__list"><li class="ui-check is-done"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Halaman profil dan layanan</span></li><li class="ui-check is-done"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Tampilan ponsel diperiksa</span></li><li class="ui-check is-done"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Tombol WhatsApp terpasang</span></li><li class="ui-check"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Halaman kontak</span></li><li class="ui-check"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Terbit di domain usaha</span></li></ul></div></div></div></div>
</article>
</div>
</div>
</section>

<section class="section ground-inverse" id="mulai" style="--hm: 2" aria-labelledby="mulai-h">
<div class="wrap">
<div class="grid grid--top fill">
<div class="span-5">
<h2 id="mulai-h">Lima langkah dari booking sampai berjalan</h2>
<ol class="rows" style="margin-top: var(--s-7)">
<li><span class="rows__name">1. Booking</span><p>Isi form. Belum ada pembayaran.</p></li>
<li><span class="rows__name">2. Konsultasi gratis</span><p>Anda menerima penawaran tertulis dengan harga tetap per tahap.</p></li>
<li><span class="rows__name">3. DP setelah setuju</span><p>Dikembalikan penuh jika hasil tahap awal tidak Anda terima.</p></li>
<li><span class="rows__name">4. Develop dan integrate</span><p>Sistem dibangun per tahap dan dihubungkan ke proses yang berjalan.</p></li>
<li><span class="rows__name">5. Automate</span><p>Proses rutin diotomatisasi.</p></li>
</ol>
</div>
<div class="frame frame--split frame--fill span-6 start-7" role="img" aria-label="Penawaran tertulis tahap 1 dengan harga tetap per tahap dan DP yang dikembalikan penuh">
<div class="stage stage--fade-b"><div class="at-corner to-edge" style="--ax:40px;--ay:40px" aria-hidden="true"><div class="ui ui-doc" data-ui="doc"><article class="ui-doc__page">
<div class="ui-doc__label">Penawaran tertulis, tahap 1</div>
<div class="ui-doc__title">Sistem order untuk usaha Anda</div>
<div class="ui-doc__text">Tahap 1 mencakup pencatatan pesanan dari WhatsApp, pelanggan, dan agen dalam satu alur, dengan <mark class="ui-doc__mark is-on">harga tetap per tahap</mark>.</div>
<div class="ui-doc__text">DP dibayar setelah penawaran ini Anda setujui. <mark class="ui-doc__mark" data-kind="Jaminan" data-msg="Dikembalikan penuh jika hasil tahap awal tidak Anda terima." data-where="Penawaran tertulis, bagian DP">DP dikembalikan penuh</mark> jika hasil tahap awal tidak Anda terima.</div>
<div class="ui-doc__text">Tahap berikutnya dimulai setelah tahap ini Anda periksa dan setujui.</div>
<div class="ui-doc__text">Sistem lain seperti keuangan, gudang, atau kasir bisa ditambah kemudian sebagai tahap tersendiri.</div>
</article><aside class="ui-doc__note ui-panel is-on" aria-live="polite"><div class="ui-doc__kind"><span class="ui-doc__dot"></span><span data-doc-kind>Harga</span></div><div class="ui-doc__msg" data-doc-msg>Tetap per tahap, tertulis sebelum Anda membayar.</div><div class="ui-doc__where" data-doc-where>Penawaran tertulis, bagian harga</div></aside></div></div></div>
</div>
</div>
</div>
</section>

<section class="section statement" id="nama" data-moment="word-highlight" aria-label="Arti nama N⁻¹">
<div class="wrap">
<p class="t-label">Arti nama</p>
<p class="mo-wh__text">N⁻¹ berarti selalu satu langkah sebelum selesai. Sistem Anda dibangun per tahap, tiap tahap Anda periksa sendiri, dan tahap berikutnya baru dimulai setelah Anda <strong>setuju</strong>.</p>
</div>
</section>

<section class="section" id="produk" style="--hm: 2" aria-labelledby="produk-h">
<div class="wrap">
<div class="grid grid--top fill">
<div class="span-5">
<h2 id="produk-h">Dua sistem kami sudah berjalan</h2>
<p class="t-lead" style="margin-top: var(--s-5)">N⁻¹ Labs berdiri tahun 2026. Yang bisa Anda periksa hari ini: Getruzz, produk buatan kami sendiri, dan Systemma, sistem custom yang kami bangun khusus untuk satu usaha.</p>
<ul class="rows" style="margin-top: var(--s-6)">
<li><span class="rows__name">Systemma</span><p>Sistem pre-order custom untuk satu usaha dengan puluhan agen. Agen memesan per batch dan membayar DP; admin memeriksa pembayaran dan mengatur produksi serta pengiriman. Berjalan di produksi.</p></li>
<li><span class="rows__name">Getruzz</span><p>Platform klub olahraga, sudah live.</p></li>
</ul>
</div>
<div class="frame frame--split frame--fill span-6 start-7">
<div class="dg" data-diagram><script type="application/json">{"layout": "fanin", "alt": "Pre-order dari banyak agen masuk ke satu sistem Systemma dan satu rekap.", "sources": [{"label": "Agen 1", "icon": "ui:user", "sub": "Pre-order"}, {"label": "Agen 2", "icon": "ui:user", "sub": "Pre-order"}, {"label": "Agen 3", "icon": "ui:user", "sub": "Pre-order"}, {"label": "Agen 4", "icon": "ui:user", "sub": "Pre-order"}, {"label": "Agen 5", "icon": "ui:user", "sub": "Pre-order"}], "target": {"label": "Systemma", "icon": "ui:database"}, "then": {"label": "Rekap", "icon": "ui:chart-column", "meta": "produksi"}}</script></div>
</div>
</div>
</div>
</section>
`;
