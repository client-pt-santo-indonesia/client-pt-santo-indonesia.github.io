import { useMemo, useState } from 'react'

const ProjectsSection = ({
  title = 'Featured Projects',
  description = 'Building modern production lines across Indonesia.',
  projectsList = [],
  highlightCount,
  enableFilter = false,
}) => {
  const industries = useMemo(() => {
    const unique = new Set(projectsList.map((project) => project.industry))
    return ['All', ...unique]
  }, [projectsList])

  const [activeFilter, setActiveFilter] = useState(industries[0] ?? 'All')

  const filteredProjects =
    activeFilter === 'All'
      ? projectsList
      : projectsList.filter((project) => project.industry === activeFilter)

  const displayedProjects = highlightCount ? filteredProjects.slice(0, highlightCount) : filteredProjects

  return (
    <section className="bg-brand-background py-16" id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-secondary">Our Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-primary">{title}</h2>
          <p className="mt-4 text-base text-brand-secondary">{description}</p>
        </div>
        {enableFilter && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => setActiveFilter(industry)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === industry
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-brand-primary shadow-sm'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        )}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <article key={project.name} className="rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between text-sm text-brand-secondary/80">
                <span className="font-semibold text-brand-primary">{project.industry}</span>
                <span>{project.location}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-brand-primary">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-secondary">{project.description}</p>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-wide text-brand-secondary/70">
                <span>Timeline 4-12 weeks</span>
                <span>ROI 12-24 months</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
