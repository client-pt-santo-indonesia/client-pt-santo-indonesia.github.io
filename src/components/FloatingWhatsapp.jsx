import { contactInfo } from '../data/siteContent'
import whatsappIcon from '@assets/whatsapp.png'

const FloatingWhatsapp = () => (
  <a
    href={contactInfo.whatsapp}
    target="_blank"
    rel="noreferrer"
    aria-label="Hubungi via WhatsApp"
    className="fixed bottom-6 right-5 z-50 block h-16 w-16 overflow-hidden rounded-xl transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-8 sm:right-8"
  >
    <span className="sr-only">Chat WhatsApp Santo Indonesia</span>
    <img
      src={whatsappIcon}
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover"
    />
  </a>
)

export default FloatingWhatsapp

