import { Link } from 'react-router-dom'

const tierBadgeColors = {
  BASIC: { bg: 'var(--color-primary-soft)', color: 'var(--color-primary)' },
  PREMIUM: { bg: '#fdeecb', color: '#b8860b' },
  ENTERPRISE: { bg: '#e8e0f7', color: '#5b3ea6' },
}

function VOTierCard({ image, alt, eyebrow, title, desc, buttons, imageLeft = true, tier, imageWidth, imageHeight }) {

  const badge = tierBadgeColors[tier] || tierBadgeColors.BASIC

  return (
    <section className={`vo-tier ${imageLeft ? '' : 'vo-tier-reverse'}`}>
      <div className="vo-tier-image">
<img src={image} alt={alt || title} loading="lazy" decoding="async" width={imageWidth} height={imageHeight} />
      </div>
      <div className="vo-tier-content">
        {tier && (
          <span
            className="vo-tier-badge"
            style={{ background: badge.bg, color: badge.color }}
          >
            {tier}
          </span>
        )}
        {eyebrow && <p className="vo-tier-eyebrow">{eyebrow}</p>}
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="vo-tier-buttons">
          {buttons.map((btn, i) => (
            <Link to="/contact" key={i}>
              <button className={btn.primary ? 'btn-vo-primary' : 'btn-vo-secondary'}>
                {btn.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VOTierCard
