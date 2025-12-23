const ClientsSection = ({
  title = 'Our Clients',
  description = 'Trusted by companies across industries.',
  clientsList = [],
  limit,
  showTestimonials = false,
}) => {
  const displayedClients = limit ? clientsList.slice(0, limit) : clientsList

  return (
    <section className="bg-white py-16" id="clients">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center md:max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-highlight">Our Clients</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-primary">{title}</h2>
          <p className="mt-4 text-base text-brand-secondary">{description}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedClients.map((client) => (
            <article
              key={client.name}
              className="rounded-3xl border border-brand-accent/40 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 lg:min-h-[120px]">
                <div className="flex items-center gap-4">
                  {client.logo && (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-background">
                      <img src={client.logo} alt={`Logo ${client.name}`} className="max-h-10 max-w-[2.5rem] object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary">{client.name}</h3>
                    <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/70">{client.industry}</p>
                  </div>
                </div>
                <span className="rounded-full bg-brand-background px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                  Solutions
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-brand-secondary">{client.solutions}</p>
              {showTestimonials && client.testimonial && (
                <div className="mt-4 rounded-2xl border border-dashed border-brand-accent/60 bg-brand-background/60 p-4 text-sm text-brand-secondary">
                  “{client.testimonial}”
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
