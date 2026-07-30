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





// import { Link } from 'react-router-dom'

// const services = [
//   { title: "OFFICE SPACES IN ADGM", desc: "A dedicated workspace in Abu Dhabi's financial free zone — fully furnished, licence-ready, and available on your terms.", link: "/office-spaces" },
//   { title: "DAY PASS", desc: "Flexible access to premium coworking space whenever you need it, with no long-term commitment required.", link: "/day-pass" },
//   { title: "MEETING ROOM", desc: "Professional meeting spaces equipped for client presentations, team discussions, and video conferencing.", link: "/meeting-room" },
//   { title: "VIRTUAL OFFICE", desc: "Establish a registered ADGM business address with mail handling — without the cost of a physical office.", link: "/virtual-office" },
// ]

// function Services() {
//   return (
//     <section className="services-section">
//       <div className="services-header">
//         <span className="contact-eyebrow">WHAT WE OFFER</span>
//         <h2>Spaces Built for How You Work</h2>
//         <p>From a single desk to a full private office, find the setup that fits your team.</p>
//       </div>

//       <div className="services">
//         {services.map((item, i) => (
//           <div className="service-card" key={i}>
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//             <Link to={item.link}>Learn More &gt;</Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Services











import { Link } from 'react-router-dom'

const services = [
  { title: "OFFICE SPACES IN ADGM ABU DHABI", desc: "Discover fully furnished office spaces in Abu Dhabi's ADGM. Ideal for startups, SMEs, and growing businesses seeking flexible office solutions.", link: "/office-spaces" },
  { title: "COWORKING DAY PASS", desc: "Enjoy flexible access to our coworking space in Abu Dhabi with a convenient day pass. Perfect for remote workers, freelancers, and business travelers.", link: "/day-pass" },
  { title: "MEETING ROOM", desc: "Book fully equipped meeting rooms in Abu Dhabi for client meetings, team collaborations, interviews, and presentations.", link: "/meeting-room" },
  { title: "VIRTUAL OFFICE", desc: "Get a virtual office in Abu Dhabi with an ADGM business address, professional mail handling, and support for your growing business.", link: "/virtual-office" },
]

function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="contact-eyebrow">WHAT WE OFFER</span>
        <h2>Flexible Coworking Spaces in Abu Dhabi</h2>
        <p>Choose from coworking spaces, private offices, meeting rooms, virtual offices, and day passes in ADGM, Abu Dhabi. Flexible solutions for startups, freelancers, and growing businesses.</p>
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
