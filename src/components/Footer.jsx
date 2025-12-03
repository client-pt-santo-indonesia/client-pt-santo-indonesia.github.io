import { Link } from 'react-router-dom'
import { companyInfo, contactInfo } from '../data/siteContent'

const Footer = () => (
  <footer className="bg-brand-secondary text-brand-accent">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
      <div>
        <p className="text-lg font-semibold text-white">{companyInfo.name}</p>
        <p className="mt-3 text-sm leading-7 text-brand-accent/80">{companyInfo.description}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-white uppercase tracking-wide">Perusahaan</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link to="/about" className="hover:text-white">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-white">
              Portfolio Project
            </Link>
          </li>
          <li>
            <Link to="/clients" className="hover:text-white">
              Klien Kami
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-white uppercase tracking-wide">Kontak</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>{contactInfo.address}</li>
          <li>Tel: {contactInfo.phone}</li>
          <li>Email: {contactInfo.email}</li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-white uppercase tracking-wide">Ikuti Kami</p>
        <a
          href="https://www.facebook.com/ptsantoindonesia"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center text-sm text-brand-accent hover:text-white"
        >
          Facebook
          <span aria-hidden="true" className="ml-2 text-xs">
            ↗
          </span>
        </a>
      </div>
    </div>
    <div className="border-t border-white/10">
      <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-brand-accent/80 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
