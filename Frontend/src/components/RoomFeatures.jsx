const features = [
  { icon: "🖥️", title: "LARGE DISPLAY", desc: "HD screens for presentations" },
  { icon: "📹", title: "VIDEO CONFERENCING", desc: "Professional camera and audio setup" },
  { icon: "📝", title: "WHITEBOARD", desc: "Brainstorm and collaborate effectively" },
  { icon: "☕", title: "REFRESHMENTS", desc: "Coffee, tea, and water provided" },
  { icon: "🔌", title: "POWER OUTLETS", desc: "Charge all your devices" },
  { icon: "🪑", title: "COMFORTABLE SEATING", desc: "Ergonomic chairs for all attendees" },
]

function RoomFeatures() {
  return (
    <section className="room-features">
      <span className="contact-eyebrow">INSIDE EVERY ROOM</span>
      <h2>ROOM FEATURES</h2>
           <div className="room-features-box">
        {features.map((item, i) => (
          <div className="room-feature-cell" key={i}>
            <div className="room-feature-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RoomFeatures
