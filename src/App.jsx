import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Solutions from './pages/Solutions'
import SponsorLanding from './pages/SponsorLanding'
import FloatingWhatsapp from './components/FloatingWhatsapp'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-brand-background text-brand-primary">
      <Navbar />
      <div className="page-transition">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media-sponsor" element={<SponsorLanding />} />
        </Routes>
      </div>
      <FloatingWhatsapp />
      <Footer />
    </div>
  )
}

export default App
