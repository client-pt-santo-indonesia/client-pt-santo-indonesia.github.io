import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { companyInfo } from '../data/siteContent'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Solutions', path: '/products' },
  { label: 'Our Clients', path: '/clients' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-brand-primary text-white sticky top-0 z-50 shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-wide">
          {companyInfo.name.replace('PT. ', '')}
          <span className="text-brand-highlight">.</span>
        </Link>
        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-2 text-sm font-medium sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
        <div className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-brand-highlight ${
                  isActive ? 'text-brand-highlight' : 'text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-full bg-brand-highlight px-4 py-2 text-sm font-semibold text-white">
            Konsultasi
          </Link>
        </div>
      </nav>
      {isOpen && (
        <div className="space-y-2 border-t border-white/20 px-4 py-4 sm:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm font-medium ${
                  isActive ? 'bg-white/10 text-brand-highlight' : 'text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block rounded-full bg-brand-highlight px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Konsultasi
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
