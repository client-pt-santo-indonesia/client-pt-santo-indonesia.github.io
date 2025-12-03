import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { companyInfo, heroContent } from '../data/siteContent'
import santoLogo from '@assets/LOGO SANTO INDONESIA (kecil).jpg'

const carouselSlides = [
  {
    id: 'robotic-cup',
    title: 'Pick & Place Cup Packaging',
    description: 'Delta robot menata cup sebelum filling & sealing untuk menjaga higienitas dessert dan dairy.',
    location: 'Sidoarjo',
    image:
      'https://images.unsplash.com/photo-1581091215367-59ab6fe8399e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'bottle-line',
    title: 'Bottle Rinsing, Filling & Capping',
    description: 'Lini 3-in-1 untuk brand minuman nasional dengan persyaratan sanitasi ketat.',
    location: 'Bekasi',
    image:
      'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'pouch-system',
    title: 'Pouch & Bag Automation',
    description: 'Auger filling serta sealing otomatis untuk powder dan liquid bernilai tinggi.',
    location: 'Solo',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1400&q=80',
  },
]

const navigationCards = [
  {
    title: 'Profil',
    subtitle: 'Perjalanan Kami',
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
    title: 'Solusi',
    subtitle: 'Mesin & Robot',
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
    title: 'Klien',
    subtitle: 'Brand Nasional',
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
    title: 'Proyek',
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
    title: 'Kontak',
    subtitle: 'Hubungi Kami',
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

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)

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
<<<<<<< HEAD
          <div className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-brand-primary/15 bg-white p-2 shadow-md">
              <img
                src={santoLogo}
                alt={`${companyInfo.name} monogram`}
                className="h-full w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
=======
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-brand-primary/15 bg-white p-2 shadow-md">
                <img
                  src={santoLogo}
                  alt={`${companyInfo.name} monogram`}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
>>>>>>> feature/logo-cta-contact-updates
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">{companyInfo.name}</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-primary sm:text-5xl">{heroContent.headline}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-brand-secondary">{heroContent.subheadline}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-brand-highlight px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:translate-y-0.5"
              >
                Jadwalkan Diskusi
              </Link>
              <Link
                to="/products"
                className="rounded-full border border-brand-primary/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                Lihat Solusi
              </Link>
            </div>
          </div>
          <div className="mt-14">
            <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-brand-accent/20 bg-brand-background shadow-lg sm:min-h-[500px]">
              {carouselSlides.map((slide, index) => (
                <figure
                  key={slide.id}
                  className={`absolute inset-0 flex flex-col justify-end bg-cover bg-center p-10 text-white transition-opacity duration-700 ${
                    index === activeSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                  style={{ backgroundImage: `linear-gradient(135deg, rgba(12,23,64,0.75), rgba(12,23,64,0.3)), url(${slide.image})` }}
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
                      aria-label={`Lihat slide ${index + 1}`}
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
            <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-brand-secondary">Navigasi</p>
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
                    Buka
                    <span className="ml-2 inline-block transition group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBanner
        eyebrow="Perlu masukan untuk lini packaging?"
        title="Tim ahli kami siap membantu menganalisis dan merancang solusi untuk kebutuhan bottle, cup, pouch, maupun robotic handling Anda."
        description="Kami siapkan scope kerja lengkap dengan opsi mesin yang sesuai spesifikasi produk dan roadmap implementasi."
        primary={{ label: 'Diskusikan Project', href: '/contact' }}
        secondary={{ label: 'Lihat Project Kami', href: '/projects' }}
      />
    </main>
  )
}

export default Home
