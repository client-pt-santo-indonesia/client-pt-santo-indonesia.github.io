import { Link } from 'react-router-dom'

const CTAButton = ({ href, label, variant = 'primary', tone = 'light' }) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const palettes = {
    light: {
      primary: 'bg-brand-primary text-white hover:-translate-y-0.5 hover:bg-brand-secondary focus-visible:ring-brand-primary/60',
      secondary:
        'border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white focus-visible:ring-brand-primary/50',
    },
    dark: {
      primary: 'bg-white text-brand-primary hover:-translate-y-0.5 focus-visible:ring-white/70',
      secondary:
        'border border-white/40 text-white hover:bg-white/15 focus-visible:ring-white/50 focus-visible:ring-offset-brand-primary',
    },
  }

  const className = `${baseClasses} ${palettes[tone][variant]}`
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

const CtaBanner = ({ eyebrow, title, description, primary, secondary, tone = 'light' }) => (
  <section className={`${tone === 'dark' ? 'bg-brand-primary text-white' : 'bg-brand-background text-brand-primary'} py-14`}>
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:text-left">
      <div>
        {eyebrow && (
          <p
            className={`text-xs font-semibold uppercase tracking-[0.4em] ${
              tone === 'dark' ? 'text-white/70' : 'text-brand-secondary/80'
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2 className={`mt-2 text-3xl font-semibold ${tone === 'dark' ? 'text-white' : 'text-brand-primary'}`}>{title}</h2>
        {description && (
          <p className={`mt-4 text-base leading-7 ${tone === 'dark' ? 'text-white/80' : 'text-brand-secondary'}`}>{description}</p>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {primary && <CTAButton {...primary} tone={tone} variant="primary" />}
        {secondary && <CTAButton {...secondary} tone={tone} variant="secondary" />}
      </div>
    </div>
  </section>
)

export default CtaBanner
