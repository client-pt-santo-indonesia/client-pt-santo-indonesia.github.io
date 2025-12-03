import AboutSection from '../components/AboutSection'
import CtaBanner from '../components/CtaBanner'
import { businessLines, companyInfo, packagingSpecialist } from '../data/siteContent'

const About = () => (
  <main>
    <section className="bg-brand-background py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-secondary">{companyInfo.name}</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-primary">Integrator Packaging & Robotic Systems</h1>
        <p className="mt-4 text-base leading-7 text-brand-secondary">
          Berawal dari workshop pada {companyInfo.history.workshopFounded} dan resmi menjadi perseroan pada{' '}
          {companyInfo.history.ptEstablished}, kami terus menghadirkan mesin dan lini packaging untuk industri food &
          beverage, kosmetik, farmasi, dan sektor manufaktur lainnya.
        </p>
      </div>
    </section>
    <AboutSection />
    <section className="bg-brand-background py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b-2 border-brand-primary pb-4">
          <h2 className="text-2xl font-bold uppercase text-brand-primary">{packagingSpecialist.title}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="mb-4 border-b border-brand-accent/40 pb-4">
              <h3 className="text-xl font-semibold text-brand-primary">{packagingSpecialist.innovation.title}</h3>
            </div>
            <p className="text-base leading-7 text-brand-secondary">
              {packagingSpecialist.innovation.description}
            </p>
          </div>
          <div className="space-y-4">
            <div className="mb-4 border-b border-brand-accent/40 pb-4">
              <h3 className="text-xl font-semibold text-brand-primary">{packagingSpecialist.solution.title}</h3>
            </div>
            <p className="text-base leading-7 text-brand-secondary">
              {packagingSpecialist.solution.description}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          { title: 'Fokus Industri', details: 'Food & Beverage · Kosmetik · Farmasi · Industri manufaktur' },
          { title: 'Kapabilitas', details: companyInfo.capabilitiesOverview },
          { title: 'Lini Bisnis', details: `${businessLines.length} business lines mencakup robotik, packaging, dan panel` },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-brand-accent/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary/70">{item.title}</p>
            <p className="mt-3 text-lg font-semibold text-brand-primary">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
    <CtaBanner
      eyebrow="Butuh panduan memilih lini mesin?"
      title="Jadwalkan sesi discovery untuk memetakan kebutuhan bottle, cup, pouch, maupun panel."
      description="Kami bantu menyusun scope kerja, estimasi biaya, dan opsi mesin sesuai standar produksi Anda."
      primary={{ label: 'Booking Konsultasi', href: '/contact' }}
      secondary={{ label: 'Lihat Solusi', href: '/products' }}
    />
  </main>
)

export default About
