import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Router Configuration
// ===================
// BrowserRouter (default): Menggunakan clean URLs seperti /contact
//   - Memerlukan file 404.html untuk GitHub Pages (sudah dibuat di public/404.html)
//   - URL lebih bersih dan SEO-friendly
//   - Direkomendasikan untuk production
//
// HashRouter (alternatif): Menggunakan hash URLs seperti /#/contact
//   - Tidak memerlukan konfigurasi server khusus
//   - Bekerja di semua static hosting tanpa setup tambahan
//   - URL kurang bersih tapi lebih kompatibel
//
// Untuk beralih ke HashRouter, ganti BrowserRouter dengan HashRouter di bawah ini

const Router = BrowserRouter // Ganti dengan HashRouter jika ingin menggunakan hash routing

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
