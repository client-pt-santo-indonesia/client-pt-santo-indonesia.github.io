import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Router Configuration
// ===================
// BrowserRouter (default): Uses clean URLs like /contact
//   - Requires a 404.html file for GitHub Pages (already in public/404.html)
//   - Cleaner and more SEO-friendly URLs
//   - Recommended for production
//
// HashRouter (alternative): Uses hash URLs like /#/contact
//   - No special server configuration required
//   - Works on any static hosting without extra setup
//   - Less clean URLs but more compatible
//
// To switch to HashRouter, replace BrowserRouter with HashRouter below

const Router = BrowserRouter // Swap with HashRouter if you want hash routing

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
