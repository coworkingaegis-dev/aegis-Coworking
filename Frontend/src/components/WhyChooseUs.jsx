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
}

function WhyChooseUs() {
  return (
    <section style={whyUsStyles.section}>
      <span className="contact-eyebrow">WORKSPACE BENEFITS</span>
      <h2 style={whyUsStyles.heading}>Why Choose AEGIS Coworking Space in Abu Dhabi</h2>
      <div className="wcu-box">
        {features.map((f, i) => (
          <div key={i} className="wcu-item">
            <div className="wcu-icon">{f.icon}</div>
           <h3 className="wcu-title">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
