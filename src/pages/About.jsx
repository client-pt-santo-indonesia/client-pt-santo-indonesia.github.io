import { useEffect, useState } from 'react'

import AboutSection from '../components/AboutSection'
import CtaBanner from '../components/CtaBanner'
import { aboutCarousel, companyInfo, packagingSpecialist, eventsAndPartners } from '../data/siteContent'

const AUTO_SLIDE_INTERVAL = 6000

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const slideCount = aboutCarousel.length

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount)
    }, AUTO_SLIDE_INTERVAL)

    return () => clearInterval(intervalId)
  }, [slideCount])

  const goToPrevious = () => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount)
  const goToNext = () => setActiveSlide((prev) => (prev + 1) % slideCount)

  return (
    <main>
      <section className="bg-brand-background py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-secondary">{companyInfo.name}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-brand-secondary/70">{companyInfo.tagline}</p>
          <h1 className="mt-4 text-4xl font-semibold text-brand-primary">Integrator Packaging & Robotic Systems</h1>
          <p className="mt-4 text-base leading-7 text-brand-secondary">
            Berawal dari workshop pada {companyInfo.history.workshopFounded} dan resmi menjadi perseroan pada{' '}
            {companyInfo.history.ptEstablished}, kami terus menghadirkan mesin dan lini packaging untuk industri food &
            beverage, kosmetik, farmasi, dan sektor manufaktur lainnya.
          </p>
          <p className="mt-4 text-base leading-7 text-brand-secondary">{companyInfo.focus}</p>
        </div>
      </section>
      <section className="bg-brand-background/70 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-brand-accent/40 bg-brand-background shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {aboutCarousel.map((item, index) => (
                <figure
                  key={item.id}
                  className="relative h-[320px] w-full flex-shrink-0 overflow-hidden sm:h-[420px]"
                  aria-live={index === activeSlide ? 'polite' : undefined}
                >
                  <img src={item.image} alt={item.alt} className="carousel-pan h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-brand-secondary/20 to-transparent" />
                  <figcaption className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">Event Highlight</p>
                    <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">{item.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/20" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                type="button"
                onClick={goToPrevious}
                className="rounded-full bg-white/90 p-2 text-brand-primary shadow-lg transition hover:bg-white"
                aria-label="Slide sebelumnya"
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="rounded-full bg-white/90 p-2 text-brand-primary shadow-lg transition hover:bg-white"
                aria-label="Slide berikutnya"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {aboutCarousel.map((item, index) => {
              const isActive = index === activeSlide
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? 'border-brand-primary bg-brand-primary text-white'
                      : 'border-brand-accent/60 text-brand-secondary hover:border-brand-primary/70'
                  }`}
                  aria-label={`Tampilkan slide ${index + 1}`}
                  aria-pressed={isActive}
                >
                  <span className="font-semibold">{String(index + 1).padStart(2, '0')}</span>
                  <span className="hidden sm:inline">{item.title}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-brand-accent/40 bg-brand-background/60 p-6 shadow-inner">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/80">Visi & Nilai</p>
            <h2 className="mt-3 text-2xl font-semibold text-brand-primary">Menyediakan solusi packaging terbaik</h2>
            <p className="mt-3 text-base leading-7 text-brand-secondary">{companyInfo.about.vision}</p>
            <p className="mt-3 text-base leading-7 text-brand-secondary">{companyInfo.about.strengths}</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-brand-accent/30 bg-brand-background p-6 shadow-inner">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/80">Industry Presence</p>
              {eventsAndPartners.events.map((event) => (
                <div key={event.name} className="mt-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/60">{event.cadence}</p>
                  <h3 className="mt-1 text-xl font-semibold text-brand-primary">{event.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-secondary">{event.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-dashed border-brand-highlight px-6 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/60">Business Partner</p>
              {eventsAndPartners.partners.map((partner) => (
                <div key={partner.name} className="mt-3">
                  <h3 className="text-lg font-semibold text-brand-primary">{partner.name}</h3>
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary/50">{partner.role}</p>
                  <p className="mt-2 text-sm leading-6 text-brand-secondary">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <section className="bg-brand-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 border-b-2 border-brand-primary pb-4">
            <h2 className="text-2xl font-bold uppercase text-brand-primary">{packagingSpecialist.title}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="mb-4 border-b border-brand-accent/40 pb-4">
                <h3 className="text-xl font-semibold text-brand-primary">{packagingSpecialist.innovation.title}</h3>
              </div>
              <p className="text-base leading-7 text-brand-secondary">
                {packagingSpecialist.innovation.description}
              </p>
            </div>
            <div className="space-y-4">
              <div className="mb-4 border-b border-brand-accent/40 pb-4">
                <h3 className="text-xl font-semibold text-brand-primary">{packagingSpecialist.solution.title}</h3>
              </div>
              <p className="text-base leading-7 text-brand-secondary">
                {packagingSpecialist.solution.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner
        eyebrow="Butuh panduan memilih lini mesin?"
        title="Jadwalkan sesi discovery untuk memetakan kebutuhan bottle, cup, pouch, maupun panel."
        description="Kami bantu menyusun scope kerja, estimasi biaya, dan opsi mesin sesuai standar produksi Anda."
        primary={{ label: 'Booking Konsultasi', href: '/contact' }}
        secondary={{ label: 'Lihat Solusi', href: '/products' }}
      />
    </main>
  )
}

export default About
