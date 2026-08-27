const amenities = [
  { title: "PREMIUM COFFEE", icon: "☕" },
  { title: "VIDEO CONFERENCE ROOMS", icon: "🎥" },
  { title: "PREMIUM CHAIRS", icon: "🪑" },
  { title: "PRINT & SCAN", icon: "🖨️" },
  { title: "FITNESS ACCESS", icon: "🏋️" },
  { title: "BEACH NEARBY", icon: "🏖️" },
  { title: "SEA VIEWS", icon: "🌊" },
  { title: "PRIVATE OFFICES", icon: "🚪" },
]

const amenitiesStyles = {
  section: {
    padding: '90px 60px',
    textAlign: 'center',
    background: 'var(--color-bg-alt)',
    position: 'relative',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '30px',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    margin: '12px 0 12px',
    color: 'var(--color-text)',
  },
  subtitle: {
    color: 'var(--color-text-muted)',
    marginBottom: '48px',
    fontSize: '15px',
  },
  marquee: {
    overflow: 'hidden',
    position: 'relative',
    maxWidth: '100%',
    maskImage: 'linear-gradient(90deg, transparent 0%, #000 3%, #000 97%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 3%, #000 97%, transparent 100%)',
  },
  track: {
    display: 'flex',
    gap: '48px',
    width: 'max-content',
    animation: 'scrollTestimonials 35s linear infinite',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  icon: {
    fontSize: '22px',
    lineHeight: 1,
  },
  title: {
    fontSize: '14.5px',
    fontWeight: 800,
    letterSpacing: '0.3px',
    color: 'var(--color-text)',
    margin: 0,
  },
}

function Amenities() {
  const loopedAmenities = [...amenities, ...amenities]

  return (
    <section style={amenitiesStyles.section}>
      <span className="contact-eyebrow">WHAT'S INCLUDED</span>
      <h2 style={amenitiesStyles.heading}>AMENITIES</h2>
      <p style={amenitiesStyles.subtitle}>
        Affordable Aegis Coworking amenities in Abu Dhabi's ADGM.
      </p>
      <div
        style={amenitiesStyles.marquee}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('.amenities-track').style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('.amenities-track').style.animationPlayState = 'running'
        }}
      >
        <div className="amenities-track" style={amenitiesStyles.track}>
          {loopedAmenities.map((item, i) => (
            <div style={amenitiesStyles.item} key={i}>
              <span style={amenitiesStyles.icon}>{item.icon}</span>
              <h3 style={amenitiesStyles.title}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities
