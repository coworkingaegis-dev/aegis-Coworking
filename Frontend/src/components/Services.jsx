// import { Link } from 'react-router-dom'

// const services = [
//   { title: "OFFICE SPACES IN ADGM", desc: "Premium coworking and private offices in Abu Dhabi's financial district", link: "/office-spaces" },
//   { title: "DAY PASS", desc: "Flexible daily access to our coworking space and amenities", link: "/day-pass" },
//   { title: "MEETING ROOM", desc: "Professional meeting spaces for your client presentations", link: "/meeting-room" },
//   { title: "VIRTUAL OFFICE", desc: "Prestigious ADGM business address without physical office costs", link: "/virtual-office" },
// ]

// function Services() {
//   return (
//     <section className="services">
//       {services.map((item, i) => (
//         <div className="service-card" key={i}>
//           <h3>{item.title}</h3>
//           <p>{item.desc}</p>
//           <Link to={item.link}>Learn More &gt;</Link>
//         </div>
//       ))}
//     </section>
//   )
// }

// export default Services





import { Link } from 'react-router-dom'

const services = [
  { title: "OFFICE SPACES IN ADGM", desc: "A dedicated workspace in Abu Dhabi's financial free zone — fully furnished, licence-ready, and available on your terms.", link: "/office-spaces" },
  { title: "DAY PASS", desc: "Flexible access to premium coworking space whenever you need it, with no long-term commitment required.", link: "/day-pass" },
  { title: "MEETING ROOM", desc: "Professional meeting spaces equipped for client presentations, team discussions, and video conferencing.", link: "/meeting-room" },
  { title: "VIRTUAL OFFICE", desc: "Establish a registered ADGM business address with mail handling — without the cost of a physical office.", link: "/virtual-office" },
]

function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="contact-eyebrow">WHAT WE OFFER</span>
        <h2>Spaces Built for How You Work</h2>
        <p>From a single desk to a full private office, find the setup that fits your team.</p>
      </div>

      <div className="services">
        {services.map((item, i) => (
          <div className="service-card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Link to={item.link}>Learn More &gt;</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services