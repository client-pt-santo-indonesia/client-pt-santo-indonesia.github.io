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
        <p className="text-sm font-semibold text-white uppercase tracking-wide">Company</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-white">
              Project Portfolio
            </Link>
          </li>
          <li>
            <Link to="/clients" className="hover:text-white">
              Our Clients
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-white uppercase tracking-wide">Contact</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <span className="font-semibold text-white">Grand Tambak Sawah</span>
            <br />
            <span>Blok B No.3, Jabon</span>
            <br />
            <span>Tambak Sawah, Waru</span>
            <br />
            <span>Sidoarjo, East Java (61256)</span>
            <br />
            <span>Indonesia</span>
          </li>
          <li>
            <span className="font-semibold text-white">Tel:</span>{' '}
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-brand-accent hover:text-white"
            >
              {contactInfo.phone}
              <span aria-hidden="true">→</span>
            </a>
          </li>
          <li>
            <span className="font-semibold text-white">Email:</span>{' '}
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-1 text-brand-accent hover:text-white"
            >
              {contactInfo.email}
              <span aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-white uppercase tracking-wide">Follow Us</p>
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
