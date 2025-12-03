import { Link } from 'react-router-dom'
import { businessLines, companyInfo, companyValues } from '../data/siteContent'

const AboutSection = ({ compact = false }) => (
  <section className="bg-white py-16" id="about">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-highlight">About Us</p>
        <h2 className="mt-3 text-3xl font-semibold text-brand-primary">
          Engineering Packaging Sejak {companyInfo.history.workshopFounded}
        </h2>
        <p className="mt-4 text-base leading-7 text-brand-secondary">{companyInfo.history.narrative}</p>
        <p className="mt-4 text-base leading-7 text-brand-secondary">{companyInfo.capabilitiesOverview}</p>
        <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl bg-brand-background p-6 text-center text-brand-primary sm:max-w-xl">
          <div>
            <p className="text-3xl font-semibold">{companyInfo.history.workshopFounded}</p>
            <p className="text-xs uppercase tracking-wide text-brand-secondary/70">Workshop berdiri</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">{companyInfo.history.ptEstablished}</p>
            <p className="text-xs uppercase tracking-wide text-brand-secondary/70">PT dibentuk</p>
          </div>
          <Link to="/products" className="group transition hover:opacity-80">
            <p className="text-3xl font-semibold">{businessLines.length}</p>
            <p className="text-xs uppercase tracking-wide text-brand-secondary/70 flex items-center justify-center gap-1">
              Lini solusi
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </p>
          </Link>
        </div>
      </div>
      <div className="space-y-6">
        {companyValues.map((value) => (
          <div key={value.title} className="rounded-2xl border border-brand-accent/60 bg-brand-background/60 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary/80">Nilai</p>
            <h3 className="mt-1 text-xl font-semibold text-brand-primary">{value.title}</h3>
            <p className="mt-2 text-sm leading-6 text-brand-secondary">{value.description}</p>
          </div>
        ))}
        {!compact && (
          <div className="rounded-2xl border border-dashed border-brand-highlight px-6 py-4 text-sm text-brand-secondary">
            <p>{companyInfo.valueProposition}</p>
          </div>
        )}
      </div>
    </div>
  </section>
)

export default AboutSection
