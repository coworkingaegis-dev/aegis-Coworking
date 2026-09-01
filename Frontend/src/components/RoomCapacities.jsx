import { Link } from 'react-router-dom'

const rooms = [
  { icon: "👥", title: "SMALL ROOM", capacity: "4-6 People", desc: "Intimate meetings and discussions" },
  { icon: "👨‍👩‍👧‍👦", title: "MEDIUM ROOM", capacity: "8-12 People", desc: "Team meetings and workshops" },
  { icon: "🏢", title: "LARGE ROOM", capacity: "15-20 People", desc: "Board meetings and presentations" },
]

function RoomCapacities() {
  return (
    <section className="room-capacities">
      <span className="contact-eyebrow">FIND YOUR FIT</span>
      <h2>ROOM CAPACITIES</h2>
      <div className="room-capacities-grid">
        {rooms.map((room, i) => (
          <div className="room-capacity-card" key={i}>
            <div className="capacity-icon">{room.icon}</div>
            <h3>{room.title}</h3>
            <p className="capacity-count">{room.capacity}</p>
            <p className="capacity-desc">{room.desc}</p>
          </div>
        ))}
      </div>

      <div className="book-room-cta">
        <h3>BOOK YOUR MEETING ROOM</h3>
        <p>Contact us to check availability and reserve your space</p>
        <div className="cta-buttons">
          <Link to="/contact">
            <button className="btn-book-now">REQUEST QUOTE</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RoomCapacities
