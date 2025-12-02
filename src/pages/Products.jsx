import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { businessLines, companyInfo, machineryExamples } from '../data/siteContent'

const Products = () => (
  <main className="bg-white">
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">Business Lines</p>
      <h1 className="mt-4 text-4xl font-semibold text-brand-primary sm:text-5xl">Solusi packaging & robotik Santo</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-brand-secondary">
        {companyInfo.valueProposition} Kami menyediakan lini lengkap mulai dari pick & place robot, bottle line, hingga
        panel elektrik dan pneumatic cabinet.
      </p>
    </section>
    <section className="bg-brand-background py-12">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {businessLines.map((line) => (
          <article
            key={line.title}
            className="flex flex-col rounded-3xl border border-brand-accent/30 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary/70">Business Line</p>
            <h2 className="mt-3 text-2xl font-semibold text-brand-primary">{line.title}</h2>
            <p className="mt-3 text-sm leading-6 text-brand-secondary">{line.description}</p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex rounded-full border border-brand-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                Diskusikan
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">Machinery</p>
          <h2 className="mt-4 text-3xl font-semibold text-brand-primary">Contoh mesin & sistem yang tersedia</h2>
          <p className="mt-4 text-base text-brand-secondary">
            Daftar di bawah merangkum mesin standar yang dapat dikonfigurasi ulang sesuai kapasitas dan produk Anda.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {machineryExamples.map((machine) => (
            <article key={machine.name} className="rounded-3xl border border-brand-accent/40 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-primary">{machine.name}</h3>
              <p className="mt-2 text-sm text-brand-secondary">{machine.highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <CtaBanner
      eyebrow="Butuh konfigurasi custom?"
      title="Diskusikan kebutuhan lini packaging dan robotik langsung dengan engineer Santo."
      description="Kami membantu menentukan kombinasi mesin, panel, dan conveyor yang paling relevan dengan proses Anda."
      primary={{ label: 'Jadwalkan Demo', href: '/contact' }}
      secondary={{ label: 'Lihat Project', href: '/projects' }}
    />
  </main>
)

export default Products
