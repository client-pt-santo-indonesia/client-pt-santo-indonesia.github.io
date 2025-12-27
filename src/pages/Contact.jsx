import CtaBanner from '../components/CtaBanner'
import { contactInfo } from '../data/siteContent'

const CheckIcon = ({ className = '' }) => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 10.5l2.5 2.5L14 7" />
  </svg>
)

const Contact = () => (
  <main>
    <section className="bg-brand-primary py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent/60">Contact Santo Indonesia</p>
        <h1 className="mt-4 text-4xl font-semibold">Discuss Your Packaging and Robotics Line</h1>
        <p className="mt-4 text-base text-brand-accent">
          Send product specifications, capacity targets, or technical challenges, and we will respond within 24 business hours.
        </p>
      </div>
    </section>
    <section className="bg-brand-background py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-brand-primary">Contact directly</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-secondary">
              <li>
                <span className="font-semibold text-brand-primary">Address:</span> {contactInfo.address}
              </li>
              <li>
                <span className="font-semibold text-brand-primary">Phone:</span> {contactInfo.phone}
              </li>
              <li>
                <span className="font-semibold text-brand-primary">Alternate Phone:</span> {contactInfo.phoneAlt}
              </li>
              <li>
                <span className="font-semibold text-brand-primary">Email:</span>{' '}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-1 font-semibold text-brand-secondary"
                >
                  {contactInfo.email}
                  <span aria-hidden="true">→</span>
                </a>
              </li>
              <li>
                <span className="font-semibold text-brand-primary">Website:</span> {contactInfo.website}
              </li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              title="Santo Indonesia location"
              src={contactInfo.mapEmbed}
              loading="lazy"
              className="h-64 w-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold text-brand-primary">Fast ways to connect</h2>
            <p className="mt-3 text-sm leading-7 text-brand-secondary">
              Send a voice note, product specifications, or your factory layout via the channels below. Our team will
              respond within 24 business hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm text-brand-secondary">
              <p className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 flex-none text-brand-primary" />
                <span>Include product type and hourly output target</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 flex-none text-brand-primary" />
                <span>Attach photos of existing machines if available</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 flex-none text-brand-primary" />
                <span>Note component brand preferences (PLC, robots, etc.)</span>
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-brand-primary">Need an NDA?</h3>
            <p className="mt-3 text-sm leading-7 text-brand-secondary">
              We are ready to sign a Non-Disclosure Agreement before receiving your technical data. Send the draft to
              our email and include a legal contact person we can reach.
            </p>
          </div>
        </div>
      </div>
    </section>
    <CtaBanner
      tone="dark"
      eyebrow="Prefer to talk directly?"
      title="Contact us via WhatsApp or schedule an onsite visit."
      description="Our team responds within 24 business hours and can prepare an NDA if needed."
      primary={{ label: 'Chat on WhatsApp', href: contactInfo.whatsapp }}
      secondary={{ label: 'View Our Products', href: '/products' }}
    />
  </main>
)

export default Contact
