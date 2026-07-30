// const features = [
//   { icon: "🏙️", title: "Prime Location", desc: "Addax Tower, Al Reem Island — inside Abu Dhabi's leading financial free zone" },
//   { icon: "🔐", title: "24/7 Access", desc: "Come and go on your schedule with secure round-the-clock building access" },
//   { icon: "🤝", title: "Real Community", desc: "Work alongside founders, freelancers, and teams — not in isolation" },
//   { icon: "⚡", title: "Flexible Office Space", desc: "Flexible, serviced office space in Abu Dhabi — no lease negotiations, no furniture shopping, just walk in and work" },
// ]

// function WhyChooseUs() {
//   return (
//     <section className="why-us">
//       <span className="contact-eyebrow">WHY AEGIS</span>
//       <h2>Built Differently, On Purpose</h2>
//       <div className="why-us-grid">
//         {features.map((f, i) => (
//           <div className="why-us-card" key={i}>
//             <div className="why-us-icon">{f.icon}</div>
//             <h4>{f.title}</h4>
//             <p>{f.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default WhyChooseUs






const features = [
  { icon: "🏙️", title: "Located in Addax Tower on Al Reem Island, our coworking space in Abu Dhabi offers a prestigious ADGM business address with easy access to the city's financial district." },
  { icon: "🔐", title: "24/7 Access", desc: "Enjoy secure 24/7 access to your coworking space, private office, or dedicated desk whenever your business needs it." },
  { icon: "🤝", title: "Thriving Business Community", "Connect with entrepreneurs, startups, freelancers, and growing businesses in one collaborative coworking community." },
  { icon: "⚡", title: "Flexible Office Space", desc: "Choose from private offices, dedicated desks, coworking spaces, and meeting rooms with flexible membership options and no long-term lease commitments." },
]

function WhyChooseUs() {
  return (
    <section className="why-us">
      <span className="contact-eyebrow"> WORKSPACE BENEFITS</span>
      <h2>Why Choose AEGIS Coworking Space in Abu Dhabi</h2>
      <div className="why-us-grid">
        {features.map((f, i) => (
          <div className="why-us-card" key={i}>
            <div className="why-us-icon">{f.icon}</div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
