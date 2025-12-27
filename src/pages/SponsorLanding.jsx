import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ClientLogo from '../components/ClientLogo'
import {
  aboutCarousel,
  businessLines,
  companyInfo,
  contactInfo,
  heroSlides,
  clients,
  sponsorLandingContent,
} from '../data/siteContent'

const machineImages = import.meta.glob('../../assets/machines/*.{jpg,JPG,jpeg,JPEG,png,PNG}', {
  eager: true,
  import: 'default',
})

const toMachineTitle = (path) => {
  const filename = path.split('/').pop() || ''
  const base = filename.replace(/\.[^/.]+$/, '')
  const trimmed = base.replace(/^\d+\s+/, '').trim()
  const cutAt = trimmed.search(/\b[Cc]atalogue\b|\(/)
  const main = (cutAt === -1 ? trimmed : trimmed.slice(0, cutAt)).trim()
  const words = main.split(/\s+/).filter(Boolean)
  const label = words.slice(0, Math.max(1, words.length)).join(' ')

  return label || companyInfo.name
}

const machineSlides = Object.entries(machineImages)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([path, image], index) => {
    const slideNumber = String(index + 1).padStart(2, '0')
    const title = toMachineTitle(path)
    return {
      id: `machine-${slideNumber}`,
      title,
      description: companyInfo.slogan,
      location: companyInfo.tagline,
      image,
    }
  })

const carouselSlides = machineSlides.length > 0 ? machineSlides : heroSlides
const heroPanVariants = ['hero-pan-top-left', 'hero-pan-top-right', 'hero-pan-bottom-left', 'hero-pan-bottom-right']

const highlightKeywords = ['konimex', 'ajinomoto', 'aqua danone']
const normalizeName = (name) => name.toLowerCase()

const SponsorLanding = () => {
  const featuredClients = highlightKeywords
    .map((keyword) => clients.find((client) => normalizeName(client.name).includes(keyword)))
    .filter(Boolean)
  const featuredNames = new Set(featuredClients.map((client) => client.name))
  const orderedClients = [...featuredClients, ...clients.filter((client) => !featuredNames.has(client.name))]
  const previewClients = orderedClients.slice(0, 8)
  const quickLinks = [
    { title: 'Company Profile', href: '/about' },
    { title: 'Solutions', href: '/products' },
    { title: 'Projects', href: '/projects' },
    { title: 'Clients', href: '/clients' },
    { title: 'Contact', href: '/contact' },
    { title: 'Home', href: '/' },
  ]
  const showcaseImages = aboutCarousel.slice(0, 3)
  const featuredSolutions = businessLines.slice(0, 4)
  const [activeSlide, setActiveSlide] = useState(0)
  const heroPanClasses = useMemo(
    () => carouselSlides.map((_, index) => heroPanVariants[index % heroPanVariants.length]),
    []
  )
  const heroPanDurations = useMemo(() => carouselSlides.map((_, index) => `${14 + (index % 6)}s`), [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const handleSlideChange = (direction) => {
    setActiveSlide((prev) => {
      if (direction === 'next') {
        return (prev + 1) % carouselSlides.length
      }
      return (prev - 1 + carouselSlides.length) % carouselSlides.length
    })
  }

  return (
    <main className="bg-brand-background text-brand-primary">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-background via-white to-brand-accent/60 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,10,189,0.08),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/80">
              {sponsorLandingContent.heroEyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-primary sm:text-5xl">
              {sponsorLandingContent.heroTitle}
            </h1>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-brand-secondary/70">
              {sponsorLandingContent.heroSubtitle}
            </p>
            <p className="mt-5 text-base leading-7 text-brand-secondary">{companyInfo.slogan}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-secondary"
              >
                {sponsorLandingContent.primaryCtaLabel}
              </Link>
              <a
                href={contactInfo.whatsapp}
                className="rounded-full border border-brand-primary/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                {sponsorLandingContent.secondaryCtaLabel}
              </a>
            </div>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-brand-secondary/70">
              Robot system integrator · Packaging line specialist
            </p>
          </div>
          <div className="relative">
            <div className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-brand-accent/20 bg-brand-background shadow-lg sm:min-h-[420px]">
              {carouselSlides.map((slide, index) => (
                <figure
                  key={slide.id}
                  className={`hero-pan ${heroPanClasses[index]} absolute inset-0 flex flex-col justify-end bg-cover bg-center p-8 text-white transition-opacity duration-700 ${
                    index === activeSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(12,23,64,0.75), rgba(12,23,64,0.3)), url("${slide.image}")`,
                    '--pan-duration': heroPanDurations[index],
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">{slide.location}</p>
                  <figcaption className="mt-3">
                    <h2 className="text-2xl font-semibold uppercase">{slide.title}</h2>
                    <p className="mt-2 text-sm text-white/90">{slide.description}</p>
                  </figcaption>
                </figure>
              ))}
              <div className="relative z-10 flex items-center justify-between p-5">
                <button
                  type="button"
                  aria-label="Slide sebelumnya"
                  className="rounded-full border border-white/40 bg-white/10 px-3 py-2 text-xs uppercase tracking-wider text-white transition hover:bg-white/20"
                  onClick={() => handleSlideChange('prev')}
                >
                  Prev
                </button>
                <div className="flex items-center gap-2">
                  {carouselSlides.map((slide, index) => (
                    <button
                      type="button"
                      key={slide.id}
                      className={`h-2.5 w-7 rounded-full transition ${index === activeSlide ? 'bg-white' : 'bg-white/30'}`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`View slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Slide berikutnya"
                  className="rounded-full border border-white/40 bg-white/10 px-3 py-2 text-xs uppercase tracking-wider text-white transition hover:bg-white/20"
                  onClick={() => handleSlideChange('next')}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/70">Quick Links</p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Explore the full profile</h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary/40 px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              View solutions
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {quickLinks.map((card) => (
              <Link
                key={card.title}
                to={card.href}
                className="group rounded-3xl border border-brand-accent/40 bg-brand-background/80 p-6 shadow-inner transition hover:-translate-y-1 hover:bg-white"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary/70">Navigate</p>
                <p className="mt-3 text-xl font-semibold text-brand-primary">{card.title}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition group-hover:text-brand-primary">
                  Open page
                  <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-background/70 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/70">Showcase</p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Highlights from our profile</h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary/40 px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              View profile
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {showcaseImages.map((item) => (
              <div
                key={item.id}
                className="relative min-h-[220px] overflow-hidden rounded-3xl border border-brand-accent/40 bg-brand-background shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-brand-secondary/10 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Event</p>
                  <p className="mt-2 text-base font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/70">Solutions</p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Eight core business lines</h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary/40 px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              See all solutions
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSolutions.map((line) => (
              <div
                key={line.title}
                className="group relative min-h-[220px] overflow-hidden rounded-3xl border border-brand-accent/40 bg-brand-background shadow-lg"
              >
                {line.image ? (
                  <img
                    src={line.image}
                    alt={line.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-brand-accent via-white to-brand-background" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-brand-secondary/5 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em]">{line.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-brand-accent/40 bg-brand-background/80 p-6 text-sm text-brand-secondary">
            Bottle · Cup · Pouch · Robotic system · Labeling · Handling · Panel · Construction
          </div>
        </div>
      </section>

      <section className="bg-brand-background/70 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/70">Clients</p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Trusted national brands</h2>
            </div>
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary/40 px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              View all clients
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {previewClients.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-3 rounded-2xl border border-brand-accent/50 bg-white/80 p-4 shadow-sm"
              >
                <ClientLogo
                  name={client.name}
                  logo={client.logo}
                  logoFit={client.logoFit}
                  className={client.logoContainerClassName || ''}
                  imageClassName={client.logoImageClassName || ''}
                />
                <div>
                  <p className="text-sm font-semibold text-brand-primary">{client.name}</p>
                  <p className="text-xs text-brand-secondary/70">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-accent/40 bg-brand-background/70 p-8 text-center shadow-inner">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/70">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Chat directly on WhatsApp</h2>
            <p className="mt-3 text-base leading-7 text-brand-secondary">{contactInfo.phone}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={contactInfo.whatsapp}
                className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-secondary"
              >
                WhatsApp
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-brand-primary/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SponsorLanding
