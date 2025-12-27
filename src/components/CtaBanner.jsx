import { Link } from 'react-router-dom'

const CTAButton = ({ href, label, variant = 'primary' }) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const palettes = {
    primary: 'bg-brand-primary text-white hover:-translate-y-0.5 hover:bg-brand-secondary focus-visible:ring-brand-primary/60',
    secondary:
      'border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white focus-visible:ring-brand-primary/50',
  }

  const className = `${baseClasses} ${palettes[variant]}`
  const content = (
    <>
      {label}
      <span className="ml-2 inline-block text-base">&rarr;</span>
    </>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  )
}

const CtaBanner = ({ eyebrow, title, description, primary, secondary }) => (
  <section className="bg-brand-background py-14 text-brand-primary">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:text-left">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-secondary/80">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 text-3xl font-semibold text-brand-primary">{title}</h2>
        {description && (
          <p className="mt-4 text-base leading-7 text-brand-secondary">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {primary && <CTAButton {...primary} variant="primary" />}
        {secondary && <CTAButton {...secondary} variant="secondary" />}
      </div>
    </div>
  </section>
)

export default CtaBanner
