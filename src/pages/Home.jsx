import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { companyInfo, heroContent } from '../data/siteContent'

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
    title: 'About Us',
    description: 'Kenali perjalanan PT. Santo Indonesia dari workshop 2009 hingga integrator robotik.',
    path: '/about',
  },
  {
    title: 'Solutions',
    description: 'Jelajahi lini bisnis dan mesin packaging yang siap dikonfigurasi.',
    path: '/products',
  },
  {
    title: 'Our Clients',
    description: 'Daftar brand nasional yang mempercayakan otomasi packaging.',
    path: '/clients',
  },
  {
    title: 'Project Stories',
    description: 'Ringkasan solusi bottle, cup, sachet, dan robotic system.',
    path: '/projects',
  },
  {
    title: 'Contact',
    description: 'Hubungi kami untuk konsultasi kebutuhan lini packaging Anda.',
    path: '/contact',
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
          <div className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-brand-primary/20 text-3xl font-semibold text-brand-primary">
              SI
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">{companyInfo.name}</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-primary sm:text-5xl">{heroContent.headline}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-brand-secondary">{heroContent.subheadline}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-brand-highlight px-6 py-3 text-sm font-semibold uppercase tracking-widest text-brand-primary shadow-lg transition hover:translate-y-0.5"
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
                  className="group flex flex-col justify-between rounded-3xl border border-brand-accent/40 bg-white px-5 py-6 text-left transition hover:-translate-y-1 hover:border-brand-highlight hover:shadow-lg"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary/70">{item.title}</p>
                    <p className="mt-3 text-base text-brand-secondary">{item.description}</p>
                  </div>
                  <span className="mt-6 text-sm font-semibold text-brand-highlight">
                    Masuk
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
        title="Tim Santo siap mengaudit kebutuhan bottle, cup, pouch, maupun robotic handling Anda."
        description="Kami siapkan scope kerja lengkap dengan opsi mesin yang sesuai spesifikasi produk dan roadmap implementasi."
        primary={{ label: 'Diskusikan Project', href: '/contact' }}
        secondary={{ label: 'Lihat Project Kami', href: '/projects' }}
      />
    </main>
  )
}

export default Home
