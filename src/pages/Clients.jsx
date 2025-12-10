import ClientsSection from '../components/ClientsSection'
import CtaBanner from '../components/CtaBanner'
import { clients } from '../data/siteContent'

const highlightKeywords = ['konimex', 'ajinomoto', 'aqua danone']

const normalizeName = (name) => name.toLowerCase()

const Clients = () => {
  const featuredClients = highlightKeywords
    .map((keyword) => clients.find((client) => normalizeName(client.name).includes(keyword)))
    .filter(Boolean)

  const featuredNames = new Set(featuredClients.map((client) => client.name))
  const logoOnlyClients = clients.filter((client) => !featuredNames.has(client.name))

  return (
    <main>
      <section className="bg-brand-primary py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-accent/70">Klien Packaging & Otomasi</p>
          <h1 className="mt-4 text-4xl font-semibold">Solusi Santo untuk Brand Nasional & Multinasional</h1>
          <p className="mt-4 text-base text-brand-accent">
            Dari bottle line untuk grup Charoen Pokphand hingga cup dan sachet system untuk industri dairy dan farmasi,
            kami memadukan mesin dan robotik agar produksi lebih efisien.
          </p>
        </div>
      </section>
      <ClientsSection
        clientsList={featuredClients}
        showTestimonials
        title="Kolaborasi Prioritas"
        description="Konimex, Ajinomoto, dan Aqua Danone mendapatkan dukungan penuh melalui otomasi lini cup, sachet, hingga vision system."
      />
      <section className="bg-brand-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-center md:max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-secondary/70">
              Partner lainnya
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Brand yang mempercayai solusi kami</h2>
            <p className="mt-4 text-base text-brand-secondary">
              Logo dan nama berikut mewakili kolaborasi lintas sektor yang memanfaatkan packaging system Santo Indonesia.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {logoOnlyClients.map((client) => (
              <span
                key={client.name}
                className="rounded-full border border-brand-accent/40 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-brand-secondary transition hover:border-brand-primary/60 hover:bg-white hover:text-brand-primary"
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        tone="dark"
        eyebrow="Siap jadi partner berikutnya?"
        title="Mulai dengan sesi assessment gratis untuk lini prioritas Anda."
        description="Pilih area produksi atau warehouse yang ingin dioptimalkan dan kami siapkan proposal implementasi awal."
        primary={{ label: 'Request Assessment', href: '/contact' }}
        secondary={{ label: 'Lihat Produk', href: '/products' }}
      />
    </main>
  )
}

export default Clients
