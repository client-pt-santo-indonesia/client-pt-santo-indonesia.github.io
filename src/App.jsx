import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Products from './pages/Products'

const App = () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('page-enter')

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('page-exit')
    }
  }, [location, displayLocation])

  useEffect(() => {
    if (transitionStage === 'page-exit') {
      const timeout = setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('page-enter')
      }, 250)

      return () => clearTimeout(timeout)
    }
    return undefined
  }, [transitionStage, location])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [displayLocation])

  return (
    <div className="min-h-screen bg-brand-background text-brand-primary">
      <Navbar />
      <div className={`page-transition ${transitionStage}`}>
        <Routes location={displayLocation} key={displayLocation.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
