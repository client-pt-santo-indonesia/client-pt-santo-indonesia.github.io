import ProjectsSection from '../components/ProjectsSection'
import CtaBanner from '../components/CtaBanner'
import { projects } from '../data/siteContent'

const Projects = () => (
  <main>
    <section className="bg-brand-secondary py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent/70">Project Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold">Packaging & Robotics Lines We Have Delivered</h1>
        <p className="mt-4 text-base text-brand-accent">
          This portfolio summarizes bottle lines, cup packaging, and sachet systems designed to meet Indonesian F&B and
          pharmaceutical standards.
        </p>
      </div>
    </section>
    <ProjectsSection
      projectsList={projects}
      enableFilter
      title="Explore Our Projects"
      description="Use the industry filter to find references relevant to your business."
    />
    <CtaBanner
      eyebrow="Need a feasibility study?"
      title="Share your production capacity targets, and we will calculate the best machine configuration."
      description="Our solution architects will prepare throughput simulations, utility requirements, and investment estimates."
      primary={{ label: 'Discuss a Project', href: '/contact' }}
      secondary={{ label: 'View Solutions', href: '/products' }}
    />
  </main>
)

export default Projects
