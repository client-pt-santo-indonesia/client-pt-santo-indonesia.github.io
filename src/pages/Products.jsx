import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'

const featuredProducts = [
  {
    name: 'IoT Gateway Suite',
    description: 'Integrasi sensor lama dan baru dengan protokol Modbus, OPC-UA, serta konektor MQTT siap cloud.',
    highlights: ['Redundant network-ready', 'Edge analytics dasar', 'Integrasi dashboard SCADA'],
  },
  {
    name: 'Smart Conveyor Kit',
    description: 'Paket retrofit conveyor dengan kontrol PID dan sensor vision untuk quality check otomatis.',
    highlights: ['Instalasi < 48 jam', 'Compatible PLC Siemens/Omron', 'Maintenance guide lengkap'],
  },
  {
    name: 'Energy Insight Platform',
    description: 'Platform monitoring konsumsi energi gedung pabrik dengan notifikasi anomali dan laporan ROI.',
    highlights: ['Mobile dashboard', 'API terbuka', 'SLA support 24/7'],
  },
]

const Products = () => (
  <main className="bg-white">
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">Products</p>
      <h1 className="mt-4 text-4xl font-semibold text-brand-primary sm:text-5xl">Solusi siap pakai</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-brand-secondary">
        Paket produk Lembono mempersingkat waktu implementasi dengan dokumentasi lengkap serta dukungan engineer
        lokal. Cocok untuk pabrik yang membutuhkan upgrade cepat namun tetap aman.
      </p>
    </section>
    <section className="bg-brand-background py-12">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {featuredProducts.map((product) => (
          <article
            key={product.name}
            className="flex flex-col rounded-3xl border border-brand-accent/30 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary/70">Produk</p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-primary">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-secondary">{product.description}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-brand-primary">
              {product.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-brand-highlight">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex rounded-full border border-brand-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                Minta Demo
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
    <CtaBanner
      eyebrow="Butuh konfigurasi custom?"
      title="Diskusikan integrasi produk ini dengan sistem Anda."
      description="Kami dapat menyesuaikan lisensi, training, hingga maintenance sesuai SLA operasional Anda."
      primary={{ label: 'Jadwalkan Demo', href: '/contact' }}
      secondary={{ label: 'Lihat Project', href: '/projects' }}
    />
  </main>
)

export default Products
