import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { businessLines, companyInfo } from '../data/siteContent'

const Products = () => (
  <main className="bg-white">
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">Business Lines</p>
      <h1 className="mt-4 text-4xl font-semibold text-brand-primary sm:text-5xl">Solusi Packaging & Robotik Santo</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-brand-secondary">
        {companyInfo.valueProposition} Kami menyediakan lini lengkap mulai dari pick & place robot, bottle line, hingga
        panel elektrik dan pneumatic cabinet.
      </p>
    </section>
    <section className="relative bg-brand-background py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold uppercase text-brand-primary sm:text-3xl">9 Lini Solusi</h2>
          <p className="mt-4 text-base leading-7 text-brand-secondary">
            Kami menyediakan solusi lengkap untuk kebutuhan packaging dan robotik, dari robotic system hingga panel kontrol.
          </p>
        </div>

        {/* Top 3 Featured Solutions */}
        <div className="mb-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {[
            businessLines.find((line) => line.title === 'Bottle Packaging System'),
            businessLines.find((line) => line.title === 'Robotic System'),
            businessLines.find((line) => line.title === 'Cup Packaging System'),
          ].map((line) => (
            <article
              key={line.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-brand-primary/30 bg-white shadow-lg transition-all hover:-translate-y-2 hover:border-brand-primary hover:shadow-2xl"
            >
              {line.image && (
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={line.image}
                    alt={line.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
                </div>
              )}
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-bold text-brand-primary">{line.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-secondary">{line.description}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-highlight transition hover:gap-3"
                >
                  Pelajari Lebih Lanjut
                  <span className="inline-block transition group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 6 Other Solutions as Decorative Grid */}
        <div className="relative">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/70">
              Layanan Lainnya
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {businessLines
              .filter(
                (line) =>
                  line.title !== 'Bottle Packaging System' &&
                  line.title !== 'Robotic System' &&
                  line.title !== 'Cup Packaging System'
              )
              .map((line) => (
                <div
                  key={line.title}
                  className="group relative overflow-hidden rounded-xl border border-brand-accent/20 bg-white/60 p-4 text-center transition hover:border-brand-accent/40 hover:bg-white/80"
                >
                  {line.image && (
                    <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-lg opacity-60 transition group-hover:opacity-80">
                      <img
                        src={line.image}
                        alt={line.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h4 className="text-xs font-semibold text-brand-primary">{line.title}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">Machinery</p>
          <h2 className="mt-4 text-3xl font-semibold text-brand-primary">Contoh Mesin & Sistem yang Tersedia</h2>
          <p className="mt-4 text-base text-brand-secondary">
            Lima mesin paling populer yang sering dicari untuk kebutuhan packaging dan robotik Anda.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Featured Card - Bottle Filling & Capping (Most Popular) */}
          <article className="group relative overflow-hidden rounded-3xl border-2 border-brand-primary/20 bg-gradient-to-br from-brand-background to-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:border-brand-primary/40 hover:shadow-2xl lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-highlight/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-highlight">
                <span>⭐</span>
                <span>Paling Populer</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary lg:text-3xl">
                Automatic Bottle Rinsing, Filling & Capping Machine
              </h3>
              <p className="mt-4 text-base leading-7 text-brand-secondary lg:text-lg">
                Solusi 3-in-1 untuk lini beverage dengan sanitasi ketat. Menggabungkan rinsing, filling, dan capping dalam satu sistem terintegrasi untuk efisiensi maksimal.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-highlight px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-highlight/90"
              >
                Request Penawaran
                <span className="inline-block transition group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center lg:mt-0">
              <div className="flex h-48 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-highlight/10 text-6xl lg:h-64">
                🍾
              </div>
            </div>
          </article>

          {/* 4 Other Popular Machines */}
          {[
            {
              name: 'Automatic In-Line Wrap Around Paper Labeler',
              highlight: 'Label presisi tinggi untuk botol silinder dengan kecepatan tinggi dan akurasi sempurna.',
              icon: '🏷️',
            },
            {
              name: 'Automatic Pouch Filling & Sealing Machine',
              highlight: 'Fleksibel untuk pouch liquid maupun semi-solid dengan kontrol suhu dan tekanan optimal.',
              icon: '📦',
            },
            {
              name: 'Automatic Cup Feeding, Filling, Sealing & Trimming Machine',
              highlight: 'Satu rangkaian lengkap untuk yoghurt, pudding, maupun dessert dengan efisiensi tinggi.',
              icon: '🥤',
            },
            {
              name: 'Pick & Place Robotic Cup Packaging System',
              highlight: 'Delta robot memastikan loading cup presisi sebelum proses filling dan sealing otomatis.',
              icon: '🤖',
            },
          ].map((machine, index) => (
            <article
              key={machine.name}
              className="group relative overflow-hidden rounded-2xl border border-brand-accent/30 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-highlight/10 text-3xl">
                  {machine.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold leading-tight text-brand-primary">{machine.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-secondary">{machine.highlight}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-highlight transition hover:gap-2"
                  >
                    Pelajari Lebih Lanjut
                    <span className="inline-block transition group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
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
