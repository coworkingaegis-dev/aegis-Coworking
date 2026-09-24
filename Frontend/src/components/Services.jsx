import { Link } from 'react-router-dom'

const services = [
  {
    icon: "🏢",
    title: "OFFICE SPACE IN ABU DHABI",
    link: "/office-space",
  },
  {
    icon: "🎟️",
    title: "COWORKING DAY PASS",
    link: "/day-pass",
  },
  {
    icon: "🤝",
    title: "MEETING ROOMS IN ADGM, ABU DHABI",
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
        <h2>Coworking Space in Abu Dhabi, ADGM</h2>
        <p>Affordable coworking and office solutions in the heart of ADGM, Abu Dhabi.</p>
      </div>
      <div className="services">
        {services.map((item) => (
  <Link to={item.link} className="service-card service-card-link" key={item.link}>
    <div className="service-icon">{item.icon}</div>
    <h3>{item.title}</h3>
    <span className="service-learn-more">Learn More &gt;</span>
  </Link>
))}
      </div>
    </section>
  )
}

export default Services
