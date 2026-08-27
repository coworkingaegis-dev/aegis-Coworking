const features = [
  { icon: "🏙️", title: "Prime Location" },
  { icon: "🔐", title: "24/7 Access" },
  { icon: "📶", title: "WiFi" },
  { icon: "⚡", title: "Flexible Membership" },
  { icon: "💰", title: "Affordable Desk" },
  { icon: "🤝", title: "Thriving Business Community" }
]

const whyUsStyles = {
  section: {
    padding: '80px 60px',
    textAlign: 'center',
    background: 'var(--color-bg-alt)',
  },
  heading: {
    fontSize: '34px',
    fontWeight: 800,
    margin: '12px 0 50px',
    color: 'var(--color-text)',
  },
  box: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    maxWidth: '900px',
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: 'var(--radius-md)',
    boxShadow: '0 4px 16px rgba(31, 92, 70, 0.06)',
    overflow: 'hidden',
  },
  item: {
    padding: '36px 20px',
  },
  icon: {
    fontSize: '32px',
    marginBottom: '12px',
  },
  title: {
    fontSize: '15px',
    fontWeight: 700,
    color: 'var(--color-text)',
    margin: 0,
  },
}

function WhyChooseUs() {
  return (
    <section style={whyUsStyles.section}>
      <span className="contact-eyebrow">WORKSPACE BENEFITS</span>
      <h2 style={whyUsStyles.heading}>Why Choose AEGIS Coworking Space in Abu Dhabi</h2>
      <div style={whyUsStyles.box}>
        {features.map((f, i) => (
          <div key={i} style={whyUsStyles.item}>
            <div style={whyUsStyles.icon}>{f.icon}</div>
           <h3 style={whyUsStyles.title}>{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
