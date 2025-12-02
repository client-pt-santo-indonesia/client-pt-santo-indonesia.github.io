import ProjectsSection from '../components/ProjectsSection'
import CtaBanner from '../components/CtaBanner'
import { projects } from '../data/siteContent'

const Projects = () => (
  <main>
    <section className="bg-brand-secondary py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent/70">Project Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold">Lini Packaging & Robotik yang Telah Kami Implementasikan</h1>
        <p className="mt-4 text-base text-brand-accent">
          Portfolio berikut merangkum bottle line, cup packaging, hingga sachet system yang dirancang untuk memenuhi
          standar F&B serta farmasi Indonesia.
        </p>
      </div>
    </section>
    <ProjectsSection
      projectsList={projects}
      enableFilter
      title="Eksplorasi Project Kami"
      description="Gunakan filter industri untuk menemukan referensi yang relevan dengan bisnis Anda."
    />
    <CtaBanner
      eyebrow="Butuh studi kelayakan?"
      title="Sampaikan target kapasitas produksi, kami bantu hitung konfigurasi mesin terbaik."
      description="Tim solution architect akan menyiapkan simulasi throughput, kebutuhan utility, dan estimasi investasi."
      primary={{ label: 'Diskusi Proyek', href: '/contact' }}
      secondary={{ label: 'Lihat Solusi', href: '/products' }}
    />
  </main>
)

export default Projects
