const audiences = [
  { icon: "💻", title: "FREELANCERS", desc: "A professional setting to focus, free from the distractions of working at home." },
  { icon: "🌐", title: "REMOTE WORKERS", desc: "Reliable internet, a proper desk, and an environment built for getting things done." },
  { icon: "✈️", title: "BUSINESS TRAVELERS", desc: "A workspace in Abu Dhabi for a day, a client meeting, or anything in between." },
]

function PerfectFor() {
  return (
    <section className="perfect-for">
      <span className="contact-eyebrow">WHO IT'S FOR</span>
      <h2>PERFECT FOR</h2>
      <div className="perfect-for-grid">
        {audiences.map((item, i) => (
          <div className="perfect-for-card" key={i}>
            <div className="perfect-for-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PerfectFor