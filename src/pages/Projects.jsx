import ProjectsSection from '../components/ProjectsSection'
import CtaBanner from '../components/CtaBanner'
import { projects } from '../data/siteContent'

const Projects = () => (
  <main>
    <section className="bg-brand-secondary py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent/70">Case Studies</p>
        <h1 className="mt-4 text-4xl font-semibold">Project automasi dengan KPI terukur</h1>
        <p className="mt-4 text-base text-brand-accent">
          Kami fokus pada ROI nyata: penghematan energi, percepatan siklus produksi, dan keamanan kerja yang meningkat.
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
      title="Kirimkan tantangan otomasi Anda, kami bantu hitung ROI-nya."
      description="Tim solution architect akan menyiapkan simulasi benefit finansial berdasarkan data produksi Anda."
      primary={{ label: 'Diskusi Proyek', href: '/contact' }}
      secondary={{ label: 'Unduh Company Profile', href: '/products' }}
    />
  </main>
)

export default Projects
