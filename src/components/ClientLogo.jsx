const stopWords = new Set(['PT', 'CV', 'TBK', 'PERSERO', 'PERSEROAN'])

const getInitials = (name = '') => {
  const words = name
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(' ')
    .filter(Boolean)
  const filtered = words.filter((word) => !stopWords.has(word.toUpperCase()))
  const source = filtered.length ? filtered : words

  return source
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}

const ClientLogo = ({ name, logo, logoFit = 'cover', className = '', imageClassName = '', textClassName = '' }) => {
  const initials = getInitials(name)
  const fitClass = logoFit === 'contain' ? 'object-contain' : 'object-cover'

  return (
    <div
      className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-brand-background ${className}`}
    >
      {logo ? (
        <img
          src={logo}
          alt={`Logo ${name}`}
          className={`h-full w-full ${fitClass} ${imageClassName}`}
        />
      ) : (
        <span className={`text-sm font-semibold tracking-wide text-brand-secondary ${textClassName}`}>
          {initials}
        </span>
      )}
    </div>
  )
}

export default ClientLogo
