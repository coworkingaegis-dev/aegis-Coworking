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






// const features = [
//   { icon: "🏙️", title: "Prime Location", desc: "Located in Addax Tower on Al Reem Island, our coworking space in Abu Dhabi offers a prestigious ADGM business address with easy access to the city's financial district." },
//   { icon: "🔐", title: "24/7 Access", desc: "Enjoy secure 24/7 access to your coworking space, private office, or dedicated desk whenever your business needs it." },
//   { icon: "🤝", title: "Thriving Business Community", desc: "Connect with entrepreneurs, startups, freelancers, and growing businesses in one collaborative coworking community." },
//   { icon: "⚡", title: "Flexible Office Space", desc: "Choose from private offices, dedicated desks, coworking spaces, and meeting rooms with flexible membership options and no long-term lease commitments." }
// ]

// function WhyChooseUs() {
//   return (
//     <section className="why-us">
//       <span className="contact-eyebrow"> WORKSPACE BENEFITS</span>
//       <h2>Why Choose AEGIS Coworking Space in Abu Dhabi</h2>
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
  { icon: "🏙️", title: "Prime Location", desc: "Located in Addax Tower on Al Reem Island, our coworking space in Abu Dhabi offers a prestigious ADGM business address with easy access to the city's financial district." },
  { icon: "🔐", title: "24/7 Access", desc: "Enjoy secure 24/7 access to your coworking space, private office, or dedicated desk whenever your business needs it." },
  { icon: "🤝", title: "Thriving Business Community", desc: "Connect with entrepreneurs, startups, freelancers, and growing businesses in one collaborative coworking community." },
  { icon: "⚡", title: "Flexible Office Space", desc: "Choose from private offices, dedicated desks, coworking spaces, and meeting rooms with flexible membership options and no long-term lease commitments." }
]

const whyUsStyles = {
  section: {
    padding: '80px 60px',
    textAlign: 'center',
    background: 'var(--color-bg-alt)',
    position: 'relative',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '34px',
    fontWeight: 800,
    margin: '12px 0 50px',
    color: 'var(--color-text)',
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
    gap: '24px',
    width: 'max-content',
    animation: 'scrollTestimonials 40s linear infinite',
  },
  card: {
    padding: '32px 22px',
    borderRadius: 'var(--radius-md)',
    background: 'linear-gradient(180deg, #ffffff 0%, #fbfdfc 100%)',
    border: '1px solid var(--color-primary-soft)',
    boxShadow: '0 4px 16px rgba(31, 92, 70, 0.06)',
    textAlign: 'left',
    width: '300px',
    flexShrink: 0,
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  icon: {
    fontSize: '32px',
    marginBottom: '16px',
  },
  title: {
    fontSize: '16px',
    fontWeight: 700,
    marginBottom: '10px',
    color: 'var(--color-text)',
  },
  desc: {
    fontSize: '13.5px',
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
  },
}

function WhyChooseUs() {
  const loopedFeatures = [...features, ...features]

  return (
    <section style={whyUsStyles.section}>
      <span className="contact-eyebrow">WORKSPACE BENEFITS</span>
      <h2 style={whyUsStyles.heading}>Why Choose AEGIS Coworking Space in Abu Dhabi</h2>
      <div
        style={whyUsStyles.marquee}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('.why-us-track').style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('.why-us-track').style.animationPlayState = 'running'
        }}
      >
        <div className="why-us-track" style={whyUsStyles.track}>
          {loopedFeatures.map((f, i) => (
            <div
              style={whyUsStyles.card}
              key={i}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(31, 92, 70, 0.16)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(31, 92, 70, 0.06)'
              }}
            >
              <div style={whyUsStyles.icon}>{f.icon}</div>
              <h4 style={whyUsStyles.title}>{f.title}</h4>
              <p style={whyUsStyles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
