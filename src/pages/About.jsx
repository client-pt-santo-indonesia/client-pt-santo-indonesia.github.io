import AboutSection from '../components/AboutSection'
import CtaBanner from '../components/CtaBanner'
import { companyInfo } from '../data/siteContent'

const About = () => (
  <main>
    <section className="bg-brand-background py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-secondary">About Lembono</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-primary">Partner strategis automasi Anda</h1>
        <p className="mt-4 text-base leading-7 text-brand-secondary">
          Sejak {companyInfo.founded}, kami membantu pabrikan dan operator logistik melakukan transformasi digital yang
          realistis dan berdampak.
        </p>
      </div>
    </section>
    <AboutSection />
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          { title: 'Fokus Industri', details: 'Manufaktur, Logistik, Energi, Kesehatan' },
          { title: 'Keunggulan', details: 'Certified Siemens, Mitsubishi, Schneider, Rockwell partner' },
          { title: 'Tim Lokal', details: 'Engineer tersebar di Jakarta, Bandung, Surabaya, Makassar' },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-brand-accent/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary/70">{item.title}</p>
            <p className="mt-3 text-lg font-semibold text-brand-primary">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
    <CtaBanner
      eyebrow="Perlu workshop singkat?"
      title="Jadwalkan sesi discovery 90 menit dengan konsultan kami."
      description="Kami bantu memetakan proses prioritas, risiko implementasi, serta resource yang dibutuhkan."
      primary={{ label: 'Booking Konsultasi', href: '/contact' }}
      secondary={{ label: 'Kenali Produk', href: '/products' }}
    />
  </main>
)

export default About
