import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { companyInfo, heroContent, heroSlides, services, eventsAndPartners } from '../data/siteContent'
import santoLogo from '@assets/LOGO SANTO INDONESIA (kecil).jpg'

const carouselSlides = heroSlides

const navigationCards = [
  {
    title: 'Profile',
    subtitle: 'Our Journey',
    path: '/about',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8 stroke-current"
        fill="none"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="9.5" r="2.8" />
        <circle cx="16" cy="8.5" r="2.3" />
        <path d="M3.5 19c0-3 3-5 5.5-5s5.5 2 5.5 5" />
        <path d="M13.5 18.4c.8-1.6 2.5-2.6 4.1-2.6 1.9 0 3.4 1.3 3.4 3.1" />
      </svg>
    ),
  },
  {
    title: 'Solutions',
    subtitle: 'Machines & Robotics',
    path: '/products',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8 stroke-current"
        fill="none"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="12" cy="5" r="2" />
        <circle cx="6.5" cy="16.5" r="2" />
        <circle cx="17.5" cy="16.5" r="2" />
        <path d="M12 9V7.2" />
        <path d="M10.6 13.6l-2.9 1.7" />
        <path d="M13.4 13.6l2.9 1.7" />
      </svg>
    ),
  },
  {
    title: 'Clients',
    subtitle: 'National Brands',
    path: '/clients',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8 stroke-current"
        fill="none"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5.5" y="4.5" width="4.8" height="14.5" rx="0.9" />
        <rect x="12.7" y="8" width="5.8" height="11" rx="0.9" />
        <path d="M3.5 20h17" />
        <path d="M7.5 8.5h0.01" />
        <path d="M7.5 11.5h0.01" />
        <path d="M15.5 11h2" />
        <path d="M15.5 14h2" />
      </svg>
    ),
  },
  {
    title: 'Projects',
    subtitle: 'Case Studies',
    path: '/projects',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8 stroke-current"
        fill="none"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="5" width="6" height="6" rx="1.2" />
        <rect x="13" y="5" width="6" height="6" rx="1.2" />
        <rect x="5" y="13" width="6" height="6" rx="1.2" />
        <rect x="13" y="13" width="6" height="6" rx="1.2" />
      </svg>
    ),
  },
  {
    title: 'Contact',
    subtitle: 'Contact Us',
    path: '/contact',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8 stroke-current"
        fill="none"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.5" y="6.5" width="17" height="11" rx="1.8" />
        <path d="M3.5 7l8.5 6 8.5-6" />
      </svg>
    ),
  },
]

const heroPanVariants = ['hero-pan-top-left', 'hero-pan-top-right', 'hero-pan-bottom-left', 'hero-pan-bottom-right']

const showServicesSection = false
const showEventsSection = false

const Home = () => {
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
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-3xl bg-white p-2 sm:h-40 sm:w-40">
              <img
                src={santoLogo}
                alt={`${companyInfo.name} monogram`}
                className="h-full w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">{companyInfo.name}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.4em] text-brand-secondary/70">{companyInfo.tagline}</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-primary sm:text-5xl">{heroContent.headline}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-brand-secondary">{heroContent.subheadline}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-secondary"
              >
                Discuss with Us
              </Link>
              <Link
                to="/products"
                className="rounded-full border border-brand-primary/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                View Solutions
              </Link>
            </div>
          </div>
          <div className="mt-14">
            <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-brand-accent/20 bg-brand-background shadow-lg sm:min-h-[500px]">
              {carouselSlides.map((slide, index) => (
                <figure
                  key={slide.id}
                  className={`hero-pan ${heroPanClasses[index]} absolute inset-0 flex flex-col justify-end bg-cover bg-center p-10 text-white transition-opacity duration-700 ${
                    index === activeSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(12,23,64,0.75), rgba(12,23,64,0.3)), url("${slide.image}")`,
                    '--pan-duration': heroPanDurations[index],
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">{slide.location}</p>
                  <figcaption className="mt-4">
                    <h2 className="text-3xl font-semibold">{slide.title}</h2>
                    <p className="mt-2 max-w-2xl text-base text-white/90">{slide.description}</p>
                  </figcaption>
                </figure>
              ))}
              <div className="relative z-10 flex items-center justify-between p-6">
                <button
                  type="button"
                  aria-label="Slide sebelumnya"
                  className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm uppercase tracking-wider text-white transition hover:bg-white/20"
                  onClick={() => handleSlideChange('prev')}
                >
                  Prev
                </button>
                <div className="flex items-center gap-2">
                  {carouselSlides.map((slide, index) => (
                    <button
                      type="button"
                      key={slide.id}
                      className={`h-2.5 w-8 rounded-full transition ${index === activeSlide ? 'bg-white' : 'bg-white/30'}`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`View slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Slide berikutnya"
                  className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm uppercase tracking-wider text-white transition hover:bg-white/20"
                  onClick={() => handleSlideChange('next')}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-brand-secondary">Navigation</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {navigationCards.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group flex flex-col items-center rounded-3xl border border-brand-accent/40 bg-white px-5 py-6 text-center transition hover:-translate-y-1 hover:border-brand-highlight hover:shadow-lg"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-background text-brand-primary shadow-inner">
                    {item.icon}
                  </span>
                  <p className="mt-4 text-lg font-semibold text-brand-primary">{item.title}</p>
                  <p className="text-sm text-brand-secondary/80">{item.subtitle}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-highlight">
                    Open
                    <span className="ml-2 inline-block transition group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {showServicesSection && (
        <section className="bg-brand-background py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/70">Services & Speciality</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-brand-secondary/60">
              <span>{companyInfo.slogan}</span>
              <span className="hidden h-px w-16 bg-brand-secondary/30 sm:block" aria-hidden="true" />
              <span className="tracking-[0.3em]">Packaging Machinery Specialist</span>
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-brand-primary sm:text-4xl">
              Eight business lines for packaging and automation needs
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.map((item) => (
                <article key={item.title} className="rounded-3xl border border-brand-accent/30 bg-white/80 p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-brand-highlight">
                    <span>{item.icon}</span>
                    <span>Speciality</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-brand-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-secondary">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full border border-brand-highlight/30 px-3 py-1 text-xs font-semibold text-brand-highlight"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {showEventsSection && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/70">Events</p>
                <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Industry presence</h2>
                <p className="mt-3 text-sm leading-7 text-brand-secondary">
                  We attend industry events to showcase the latest innovations and capture market needs.
                </p>
                <div className="mt-6 space-y-4">
                  {eventsAndPartners.events.map((event) => (
                    <article key={event.name} className="rounded-3xl border border-brand-accent/40 bg-brand-background p-5 shadow-inner">
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-secondary/70">{event.cadence}</p>
                      <h3 className="mt-2 text-lg font-semibold text-brand-primary">{event.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-brand-secondary">{event.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-brand-accent/40 bg-brand-background/80 p-6 shadow-inner">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/70">Business Partner</p>
                  {eventsAndPartners.partners.map((partner) => (
                    <div key={partner.name} className="mt-4">
                      <h3 className="text-lg font-semibold text-brand-primary">{partner.name}</h3>
                      <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/60">{partner.role}</p>
                      <p className="mt-2 text-sm leading-6 text-brand-secondary">{partner.description}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl border border-brand-accent/40 bg-white p-6 shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/60">Global Contact</p>
                  <h3 className="mt-2 text-xl font-semibold text-brand-primary">{companyInfo.tagline}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-secondary">{companyInfo.address}</p>
                  <ul className="mt-4 space-y-1 text-sm text-brand-secondary">
                    <li>Tel: {companyInfo.phone}</li>
                    <li>Alt: {companyInfo.phoneAlt}</li>
                    <li>Email: {companyInfo.email}</li>
                    <li>Web: {companyInfo.website}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <CtaBanner
        eyebrow="Ready to upgrade your packaging line?"
        title="Our team maps bottle, cup, pouch, bag, and robotics needs based on your capacity targets."
        description="Share product specs, hygiene standards, and throughput goals so we can translate them into machine configurations."
        primary={{ label: 'Discuss a Project', href: '/contact' }}
        secondary={{ label: 'View Our Projects', href: '/projects' }}
      />
    </main>
  )
}

export default Home
