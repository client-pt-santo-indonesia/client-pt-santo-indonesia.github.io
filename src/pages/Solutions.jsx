import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { companyInfo, productDetails, productionSupport } from '../data/siteContent'

const Solutions = () => {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">Business Lines</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-primary sm:text-5xl">Solusi Packaging & Robotik Santo</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-brand-secondary">
          {companyInfo.valueProposition} Lini bisnis kami mencakup bottle, cup, pouch, bag, labeling, panel elektrik, dan
          konstruksi pendukung sehingga klien menerima solusi turnkey.
        </p>
      </section>
      <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">Product Detail</p>
          <h2 className="mt-4 text-3xl font-semibold text-brand-primary">Spesifikasi teknis mesin unggulan</h2>
          <p className="mt-4 text-base text-brand-secondary">
            Informasi berikut merangkum keluaran terbaru kami untuk lini bottle, bag, pouch granular, dan pouch powder sesuai dokumen spesifikasi 2024.
          </p>
        </div>
        <div className="mt-12 space-y-10">
          {productDetails.map((product) => (
            <article key={product.slug} className="rounded-3xl border border-brand-accent/40 bg-brand-background/60 p-6 shadow-inner lg:p-10">
              <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-secondary"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-brand-primary">{product.name}</h3>
                  <p className="text-sm uppercase tracking-[0.4em] text-brand-secondary/70">{product.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-brand-secondary">{product.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-brand-primary">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span aria-hidden="true">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-highlight transition hover:gap-3"
                  >
                    Request Penawaran
                    <span className="inline-block">&rarr;</span>
                  </Link>
                </div>
                <div>
                  <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                    {product.gallery?.[0] ? (
                      <img
                        src={product.gallery[0]}
                        alt={`${product.name} hero`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="flex h-64 items-center justify-center bg-brand-background text-brand-secondary">No Image</div>
                    )}
                  </div>
                  {product.gallery && product.gallery.length > 1 && (
                    <div className="mt-3 flex gap-3">
                      {product.gallery.slice(1).map((image, index) => (
                        <div key={image} className="flex-1 overflow-hidden rounded-xl border border-brand-accent/30 bg-white">
                          <img
                            src={image}
                            alt={`${product.name} variant ${index + 2}`}
                            className="h-20 w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-8 overflow-x-auto">
                <table className="min-w-full text-left text-sm text-brand-secondary">
                  <thead>
                    <tr>
                      {product.specs.columns.map((column) => (
                        <th key={column.key} className="whitespace-nowrap border-b border-brand-accent/40 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                          {column.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.rows.map((row, rowIndex) => (
                      <tr key={`${product.slug}-${rowIndex}`} className="border-b border-brand-accent/20">
                        {product.specs.columns.map((column) => (
                          <td key={column.key} className="whitespace-nowrap px-3 py-3 text-sm text-brand-primary/90">
                            {row[column.key] ?? '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-brand-background py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/70">Production Support & Others</p>
        <h2 className="mt-4 text-3xl font-semibold text-brand-primary">Integrasi komponen pendukung lini</h2>
        <p className="mt-3 text-sm leading-7 text-brand-secondary">
          Sebagai integrator, kami menyediakan komponen tambahan mulai dari robotic palletizer, conveyor, hingga carton erector & sealer.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {productionSupport.map((support) => (
            <article key={support.category} className="rounded-3xl border border-brand-accent/30 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-primary">{support.category}</h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-secondary">
                {support.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
    <CtaBanner
      eyebrow="Butuh konfigurasi custom?"
      title="Diskusikan spesifikasi CHRONOS, TITAN, THEMIS, atau VORTEX yang paling sesuai dengan lini Anda."
      description="Kami membantu menentukan kombinasi mesin, panel, dan conveyor yang mendukung throughput dan standar higienitas yang ditargetkan."
      primary={{ label: 'Jadwalkan Demo', href: '/contact' }}
      secondary={{ label: 'Lihat Project', href: '/projects' }}
    />
  </main>
)

}

export default Solutions
