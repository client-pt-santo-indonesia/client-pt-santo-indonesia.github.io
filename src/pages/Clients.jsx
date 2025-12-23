import ClientsSection from '../components/ClientsSection'
import CtaBanner from '../components/CtaBanner'
import ClientLogo from '../components/ClientLogo'
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
          <p className="text-sm uppercase tracking-[0.4em] text-brand-accent/70">Packaging & Automation Clients</p>
          <h1 className="mt-4 text-4xl font-semibold">Santo Partnerships for National & Multinational Brands</h1>
          <p className="mt-4 text-base text-brand-accent">
            Across food, beverage, pharma, and consumer goods, we align packaging operations with performance, hygiene,
            and long-term growth goals.
          </p>
        </div>
      </section>
      <ClientsSection
        clientsList={featuredClients}
        showTestimonials
        title="Priority Collaborations"
        description="Konimex, Ajinomoto, and Aqua Danone work closely with our engineering team for consistent, scalable production."
      />
      <section className="bg-brand-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-center md:max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-secondary/70">
              Other partners
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Brands that trust our team</h2>
            <p className="mt-4 text-base text-brand-secondary">
              The following logos and names represent cross-sector collaborations with Santo Indonesia.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {logoOnlyClients.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-4 rounded-2xl border border-brand-accent/40 bg-white/70 px-4 py-3 text-brand-secondary transition hover:border-brand-primary/60 hover:bg-white"
              >
                <ClientLogo
                  name={client.name}
                  logo={client.logo}
                  logoFit={client.logoFit}
                  className={`h-12 w-12 ${client.logoContainerClassName || ''}`.trim()}
                  imageClassName={`max-h-8 max-w-[2rem] ${client.logoImageClassName || ''}`.trim()}
                  textClassName="text-xs"
                />
                <div>
                  <p className="text-sm font-semibold text-brand-primary">{client.name}</p>
                  {client.secondaryName && (
                    <p className="mt-0.5 text-[0.6rem] font-medium text-brand-secondary/50">
                      {client.secondaryName}
                    </p>
                  )}
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-brand-secondary/70">
                    {client.industry}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm font-semibold uppercase tracking-[0.3em] text-brand-secondary/70">
            And many others
          </p>
        </div>
      </section>
      <div className="bg-brand-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-brand-accent/40" />
        </div>
      </div>
      <CtaBanner
        tone="light"
        eyebrow="Ready to be our next partner?"
        title="Start with a free assessment session for your priority line."
        description="Choose the production area or warehouse to optimize, and we will prepare an initial implementation proposal."
        primary={{ label: 'Request Assessment', href: '/contact' }}
        secondary={{ label: 'View Products', href: '/products' }}
      />
    </main>
  )
}

export default Clients
