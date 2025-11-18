import ContactForm from '../components/ContactForm'
import CtaBanner from '../components/CtaBanner'
import { contactInfo } from '../data/siteContent'

const Contact = () => (
  <main>
    <section className="bg-brand-primary py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent/60">Contact Us</p>
        <h1 className="mt-4 text-4xl font-semibold">Mari wujudkan automasi impian Anda</h1>
        <p className="mt-4 text-base text-brand-accent">
          Kirimkan detail kebutuhan Anda dan tim konsultan kami akan menghubungi maksimal dalam 24 jam kerja.
        </p>
      </div>
    </section>
    <section className="bg-brand-background py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-brand-primary">Hubungi langsung</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-secondary">
              <li>
                <span className="font-semibold text-brand-primary">Alamat:</span> {contactInfo.address}
              </li>
              <li>
                <span className="font-semibold text-brand-primary">Telepon:</span> {contactInfo.phone}
              </li>
              <li>
                <span className="font-semibold text-brand-primary">Email:</span> {contactInfo.email}
              </li>
              <li>
                <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="font-semibold text-brand-highlight">
                  WhatsApp kami →
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              title="Lokasi Lembono"
              src={contactInfo.mapEmbed}
              loading="lazy"
              className="h-64 w-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
    <CtaBanner
      tone="dark"
      eyebrow="Lebih nyaman bicara langsung?"
      title="Hubungi kami via WhatsApp atau jadwalkan kunjungan onsite."
      description="Tim kami siap merespons dalam 24 jam kerja dan menyiapkan NDA bila dibutuhkan."
      primary={{ label: 'Chat WhatsApp', href: contactInfo.whatsapp }}
      secondary={{ label: 'Lihat Produk Kami', href: '/products' }}
    />
  </main>
)

export default Contact
