# Lembono Automation Company Profile

Website statis berbasis React + Vite + Tailwind CSS untuk menampilkan company profile Lembono Automation. Halaman yang tersedia: Home, Our Clients, Our Projects, About Us, dan Contact.

## Requirement

- Node.js 20+
- npm 10+.

## Instalasi

```bash
npm install
```

## Menjalankan Secara Lokal

```bash
npm run dev
```

Server pengembangan akan berjalan di `http://localhost:5173`.

## Build Production

```bash
npm run build
```

Hasil build akan berada di folder `dist/`. Untuk mengecek hasilnya secara lokal:

```bash
npm run preview
```

## Deployment ke Hostinger

1. Jalankan `npm run build`.
2. Kompres isi folder `dist/` menjadi `.zip` atau siap upload.
3. Masuk ke hPanel Hostinger → Files → File Manager.
4. Buka folder domain (biasanya `public_html`) lalu upload isi `dist/`.
5. Pastikan file `index.html` berada di root `public_html` atau subfolder sesuai domain/subdomain.
6. Jika deploy ke subfolder, sesuaikan `base` pada `vite.config.js`.
7. Clear cache browser/Cloudflare jika ada, kemudian tes website pada perangkat mobile dan desktop.

## Struktur Folder

```
src/
├─ components/  // Navbar, Footer, Hero, dll
├─ pages/       // Home, About, Projects, Clients, Contact
├─ data/        // Placeholder konten
├─ main.jsx     // Entry React Router
└─ index.css    // Tailwind directives + font
```

## Styling

- Tailwind CSS dengan warna brand:
  - Primary `#0D0ABD`
  - Secondary `#1B263B`
  - Accent `#E0E1DD`
  - Highlight `#4E8098`
  - Background `#F4F7F9`
- Font utama: Inter

## Placeholder Data

Semua konten (klien, project, kontak) berada pada `src/data/siteContent.js` sehingga mudah diganti ketika konten final sudah tersedia.
