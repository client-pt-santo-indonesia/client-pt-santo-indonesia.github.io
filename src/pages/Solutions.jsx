import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { contactInfo, productDetails, productionSupport, solutionsContent } from '../data/siteContent'

const Solutions = () => {
  const [activeImage, setActiveImage] = useState(null)
  const [activeName, setActiveName] = useState('')

  useEffect(() => {
    if (!activeImage) {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null)
        setActiveName('')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeImage])

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">{solutionsContent.heroEyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-primary sm:text-5xl">{solutionsContent.heroTitle}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-brand-secondary">
          {solutionsContent.heroDescription}
        </p>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary">{solutionsContent.productEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold text-brand-primary">{solutionsContent.productTitle}</h2>
            <p className="mt-4 text-base text-brand-secondary">{solutionsContent.productDescription}</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {productDetails.slice(0, 3).map((product) => (
              <article
                key={product.slug}
                className="flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-brand-accent/40 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 cursor-pointer bg-brand-background sm:h-64">
                  {product.gallery?.[0] ? (
                    <img
                      src={product.gallery[0]}
                      alt={`${product.name} machine`}
                      className="h-full w-full cursor-zoom-in object-contain"
                      loading="lazy"
                      decoding="async"
                      onClick={() => {
                        setActiveImage(product.gallery[0])
                        setActiveName(product.name)
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-brand-secondary">No Image</div>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <h3 className="text-2xl font-semibold text-brand-primary">{product.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.4em] text-brand-secondary/70">{product.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-brand-secondary">{product.summary}</p>
                  <Link
                    to="/contact"
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-highlight transition hover:gap-3"
                  >
                    {solutionsContent.requestQuoteLabel}
                    <span className="inline-block">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-brand-accent/30 bg-white px-6 py-5 text-center">
            <p className="text-sm text-brand-secondary">{solutionsContent.machinesCtaDescription}</p>
            <a
              href={contactInfo.whatsapp}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition hover:gap-3"
              target="_blank"
              rel="noreferrer"
            >
              {solutionsContent.machinesCtaLabel}
              <span className="inline-block">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-brand-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-secondary/70">{solutionsContent.supportEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-brand-primary">{solutionsContent.supportTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-brand-secondary">{solutionsContent.supportDescription}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {productionSupport.map((support) => (
              <article key={support.category} className="rounded-3xl border border-brand-accent/30 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-primary">{support.category}</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-secondary">
                  {support.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        eyebrow={solutionsContent.ctaEyebrow}
        title={solutionsContent.ctaTitle}
        description={solutionsContent.ctaDescription}
        primary={{ label: solutionsContent.ctaPrimaryLabel, href: '/contact' }}
        secondary={{ label: solutionsContent.ctaSecondaryLabel, href: '/projects' }}
      />
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-zoom-out"
            aria-label="Close image preview"
            onClick={() => {
              setActiveImage(null)
              setActiveName('')
            }}
          />
          <div
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl bg-white p-4 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeName} image preview`}
          >
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full bg-brand-background px-3 py-1 text-xs font-semibold text-brand-secondary"
              onClick={() => {
                setActiveImage(null)
                setActiveName('')
              }}
            >
              Close
            </button>
            <img
              src={activeImage}
              alt={`${activeName} full view`}
              className="max-h-[80vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default Solutions
