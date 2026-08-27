
















import { Link } from 'react-router-dom'

const services = [
  {
    icon: "🏢",
    title: "OFFICE SPACES IN ADGM",
    link: "/office-spaces",
  },
  {
    icon: "🎟️",
    title: "COWORKING DAY PASS",
    link: "/day-pass",
  },
  {
    icon: "🤝",
    title: "MEETING ROOMS IN ADGM ABU DHABI",
    link: "/meeting-room",
  },
  {
    icon: "📍",
    title: "VIRTUAL OFFICE IN ADGM",
    link: "/virtual-office",
  },
]

function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="contact-eyebrow">WHAT WE OFFER</span>
        <h2>Coworking Spaces in ADGM</h2>
        <p>Affordable coworking and office solutions in the heart of ADGM, Abu Dhabi.</p>
      </div>
      <div className="services">
        {services.map((item, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <Link to={item.link}>Learn More &gt;</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
