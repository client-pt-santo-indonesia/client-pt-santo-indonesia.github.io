import { Link } from 'react-router-dom'
import { companyInfo, heroContent } from '../data/siteContent'

const Hero = () => (
  <section className="bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary text-white">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:px-8">
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-accent/70">{companyInfo.tagline}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{heroContent.headline}</h1>
        <p className="mt-5 text-lg leading-7 text-brand-accent">{heroContent.subheadline}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Link to="/projects" className="rounded-full bg-brand-highlight px-6 py-3 text-base font-semibold text-white">
            {heroContent.primaryCta}
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white"
          >
            {heroContent.secondaryCta}
          </Link>
        </div>
      </div>
      <div className="w-full max-w-lg rounded-3xl bg-white/5 p-8 shadow-xl backdrop-blur-md">
        <div className="space-y-4 text-sm leading-6 text-brand-accent">
          {heroContent.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-brand-accent/70">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-xs text-brand-accent/70">{stat.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Hero
