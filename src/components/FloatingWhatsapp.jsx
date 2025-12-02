import { contactInfo } from '../data/siteContent'

const FloatingWhatsapp = () => (
  <a
    href={contactInfo.whatsapp}
    target="_blank"
    rel="noreferrer"
    aria-label="Hubungi via WhatsApp"
    className="fixed bottom-6 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition hover:scale-105 hover:shadow-[0_14px_32px_rgba(37,211,102,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-8 sm:right-8"
  >
    <span className="sr-only">Chat WhatsApp Santo Indonesia</span>
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="h-8 w-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
      <path d="M16 3.3a12.7 12.7 0 0 0-10.9 19l-1.4 5 5.1-1.3a12.7 12.7 0 1 0 7.2-22.7Zm.1 22.7h-.1a10 10 0 0 1-5.1-1.4l-.4-.2-3 .8.8-2.9-.2-.4a10 10 0 1 1 18.1-5.2 10 10 0 0 1-10.1 9.3Zm5.5-7.5c-.3-.2-1.8-.9-2-.9s-.3 0-.5.2-.6.8-.8.9-.3.2-.6 0-.9-.4-1.7-1a6.4 6.4 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4a1.3 1.3 0 0 0 .2-.4.4.4 0 0 0 0-.4c0-.1-.4-1-.6-1.4s-.4-.3-.5-.3h-.4a.9.9 0 0 0-.7.3 2.3 2.3 0 0 0-.7 1.7 4 4 0 0 0 .8 2.1c.1.2 1.2 1.8 2.9 2.6s1.7.7 2 .8.9.1 1.4-.1a2.3 2.3 0 0 0 1.1-.7 1.8 1.8 0 0 0 .1-1c-.1-.2-.3-.3-.6-.5Z" />
    </svg>
  </a>
)

export default FloatingWhatsapp

