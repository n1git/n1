# Aturan kerja

- UI berbahasa Indonesia.
- Tanpa komentar kode.
- Commit kecil langsung ke `main`; `git pull` sebelum push.
- Next.js 16 berbeda dari versi lama: baca panduan terkait di `node_modules/next/dist/docs/` sebelum menulis kode.

## Progress

- Prompt tugas menyebut slug. Simpan `progress/<slug>-progress.md`: status, kotak centang per fase, dan per fase berkas yang berubah, hash commit, hasil pengecekan, serta blocker.
- Saat mulai, lanjutkan dari fase pertama yang belum selesai.
- Setelah tiap fase jalankan hanya `npx next typegen && npx tsc --noEmit`, catat, commit, lanjut tanpa berhenti. Berhenti hanya di "Wait for my OK" atau kegagalan yang tidak bisa diperbaiki.
- Lint, build, dan tes hanya bila diminta. Satu pengecualian: di fase terakhir jalankan `npm run build` satu kali.
