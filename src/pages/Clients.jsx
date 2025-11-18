import ClientsSection from '../components/ClientsSection'
import CtaBanner from '../components/CtaBanner'
import { clients } from '../data/siteContent'

const Clients = () => (
  <main>
    <section className="bg-brand-primary py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent/70">Our Clients</p>
        <h1 className="mt-4 text-4xl font-semibold">Kemitraan jangka panjang dengan fokus hasil nyata</h1>
        <p className="mt-4 text-base text-brand-accent">
          Kami mendampingi tim engineering internal mulai dari audit pabrik hingga training operator sehingga solusi
          tidak hanya selesai saat commissioning, namun benar-benar teradopsi.
        </p>
      </div>
    </section>
    <ClientsSection
      clientsList={clients}
      showTestimonials
      title="Kolaborasi lintas industri"
      description="Lebih dari 50 perusahaan mempercayakan upgrade automasi mereka."
    />
    <section className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-accent/60 bg-brand-background/60 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold text-brand-primary">Onboarding yang transparan</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-brand-secondary">
            <li>• Audit lokasi dan kebutuhan digital yang dikemas dalam laporan ringkas.</li>
            <li>• Timeline detail berisi deliverable mingguan dan daftar resiko.</li>
            <li>• Dashboard progres dapat diakses tim client kapanpun.</li>
          </ul>
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

export default Clients
