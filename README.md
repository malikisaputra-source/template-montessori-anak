# Template Preschool Montessori

Template website premium Astro untuk preschool/daycare Montessori: 5 halaman, dua bahasa, kuis program, form daftar ke WhatsApp.

Tier: **premium** · Kategori: Template Website

![Tangkapan layar](ss.png)

## Fitur

- 5 halaman: beranda, program, tentang, galeri, daftar
- Dua bahasa ID/EN
- Data konten & kontak di src/scripts/data.js
- Kuis pencari program
- Jadwal mingguan interaktif
- Form daftar 4 langkah ke WhatsApp
- Galeri dengan lightbox
- Smooth scroll Lenis + animasi GSAP
- Transisi halaman Astro

## Cara menjalankan

1. Pasang [Node.js](https://nodejs.org) versi 18 ke atas.
2. Buka terminal di folder ini.
3. Jalankan `npm install`.
4. Jalankan `npm run dev`, buka http://localhost:4321.
5. Untuk online: `npm run build`, lalu unggah folder `dist/` ke Netlify/Vercel/GitHub Pages.

## Struktur folder

```
src/pages/       halaman (index, program, tentang, galeri, daftar)
src/layouts/     kerangka halaman, header, footer
src/scripts/data.js  kontak, program, paket, FAQ (contoh)
src/scripts/app.js   animasi & interaksi
src/styles/global.css  warna & tampilan
public/img/      ilustrasi SVG pengganti foto
meta.json, README.md, LICENSE, ss.png
```

## Cara ubah brand & warna

Kontak & tautan sosmed di `CONTACT` (`src/scripts/data.js`), program/paket/FAQ di berkas yang sama. Nama brand: cari `Rumah Tumbuh` di `src/`. Warna di `src/styles/global.css` `:root`. Ganti ilustrasi di `public/img/` dengan foto Anda.

## Ganti logo & foto

Semua path gambar diatur di **`GAMBAR`** dalam `src/scripts/data.js`; berkasnya di `public/` (path diawali `/`). Ganti dengan **menimpa berkas bernama sama** atau **ubah path**-nya. Gambar bawaan adalah ilustrasi SVG buatan sendiri dan placeholder berlabel, bukan foto anak asli.

| Slot | Kunci `GAMBAR` | Berkas bawaan | Rasio |
|---|---|---|---|
| Logo header & footer (+ favicon bila diisi) | `logo` (kosong = ikon matahari) | `public/img/logo.svg` | 1:1 |
| Favicon & gambar bagikan | `favicon`, `og` | `public/favicon.svg`, `public/og.svg` | 1:1, 1200×630 |
| Hero beranda (3 blob) | `hero[0..2]` | `public/img/kids-*.svg` | 3:4 |
| Kelas campur usia (polaroid) | `kelas[0..2]` | `public/img/kids-*.svg` | 3:4 |
| Polaroid halaman Tentang | `tentang[0..2]` | `compass.svg`, `kids-*.svg` | 3:4 |
| Guru (nama, peran, foto) | `guru[]` | `public/img/guru-1..2.svg` | 4:5 |
| Galeri | `galeri.material/mandiri/tema/bersama` | `public/img/*.svg` | 3:4 / 1:1 |

Logo yang gagal dimuat diganti inisial nama; foto guru yang gagal diganti inisial guru. Untuk menambah foto galeri, tambah kunci di `GAMBAR.galeri` lalu satu baris di `TILES` (`src/pages/galeri.astro`). Kompres foto (≤200 KB).

## Kredit

Dibuat oleh Maliki Studio — malikisaputra.biz.id, follow TikTok/IG @malikisaputra

## Lisensi

Lisensi Nonkomersial Maliki Studio (lihat `LICENSE`): gratis dipakai untuk usaha/organisasi sendiri dan boleh diubah, **wajib mencantumkan kreator** (Template oleh Maliki Saputra, @malikisaputra), dan **tidak boleh diperjualbelikan** tanpa izin. Mau menjual atau kerja sama? Diskusikan dulu dengan kreatornya.

---

<!-- kredit-maliki -->
**Kredit:** Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Kredit di footer & kepala berkas wajib dipertahankan (lihat LICENSE).

<!-- panduan-ai-maliki -->
## Ubah sendiri sesuai kebutuhanmu pakai AI

Kamu tidak perlu jago coding. Template ini sudah disiapkan supaya mudah diubah AI: ada **AGENTS.md** (aturan proyek untuk AI), **DESIGN.md** (gaya desain), dan skill Claude di folder `.claude/skills/`. Pilih salah satu cara di bawah.

### Cara 1: ChatGPT, Claude, atau Gemini di browser (paling gampang, gratis)
1. Unduh ZIP template ini, lalu ekstrak.
2. Buka chatgpt.com, claude.ai, atau gemini.google.com.
3. Unggah berkas yang mau diubah (biasanya `index.html`, `style.css`, `app.js`, atau berkas data). Unggah juga `AGENTS.md` dan `DESIGN.md` (kalau ada) biar AI paham aturannya. ChatGPT juga bisa menerima ZIP utuh.
4. Tulis permintaanmu (contoh di bawah), lalu minta: "Kirim ulang berkas yang diubah secara utuh."
5. Ganti berkas lama dengan hasil dari AI, lalu buka `index.html` di browser untuk cek.

### Cara 2: Claude Code (paling rapi untuk perubahan besar)
1. Pasang Claude Code (lihat claude.com/claude-code), atau pakai aplikasi Claude Desktop tab Code.
2. Buka folder template ini, lalu jalankan `claude` di terminal folder itu.
3. Tulis permintaanmu. Kalau ada folder `.claude/skills/ubah-…`, Claude Code otomatis memakainya, jadi hasilnya tetap mengikuti desain aslinya.

### Cara 3: Codex (OpenAI)
1. Pasang Codex CLI atau pakai Codex di aplikasi ChatGPT.
2. Buka folder template, jalankan `codex`. Codex otomatis membaca `AGENTS.md`.
3. Tulis permintaanmu, cek perubahannya, lalu setujui.

### Cara 4: Google Antigravity atau Gemini CLI (gratis)
1. Antigravity: buka aplikasinya, pilih **Open Folder** ke folder template ini, lalu tulis permintaan di panel agen.
2. Gemini CLI: jalankan `gemini` di folder template.
3. Di awal, tulis: "Baca AGENTS.md dan DESIGN.md dulu sebelum mengubah apa pun."

### Contoh permintaan yang bisa langsung kamu pakai
- "Ganti nama, logo teks, dan warna utama jadi hijau tua sesuai usahaku: [nama usaha]."
- "Tambahkan kolom [nama kolom] di formulir dan tampilkan di daftar."
- "Ubah semua data contoh jadi data usahaku: [tempel datanya]."
- "Tambahkan halaman/menu baru untuk [kebutuhan], gaya desainnya sama dengan yang sudah ada."
- "Jelaskan dulu cara kerja aplikasi ini dengan bahasa sederhana, baru ubah [bagian]."

### Tips biar hasilnya bagus
- Satu permintaan = satu perubahan. Cek dulu hasilnya, baru minta yang berikutnya.
- Simpan salinan folder asli sebelum mengubah, jadi bisa balik kalau ada yang rusak.
- Kalau ada error, salin pesan errornya (klik kanan > Inspect > Console) lalu tempel ke AI.
- Data aplikasi tersimpan di browser (localStorage). Backup dulu sebelum ganti versi.
- Jangan hapus kredit "Template oleh @malikisaputra", dan template ini **tidak boleh diperjualbelikan** tanpa izin. Mau menjual atau kerja sama? Diskusikan dulu dengan kreatornya (@malikisaputra).

Masih bingung? Komen di TikTok/IG **@malikisaputra**, nanti aku bantu.
