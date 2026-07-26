import { Link } from 'react-router-dom'

function ImpressClients() {
  return (
    <section className="impress-clients">
      <div className="impress-text">
        <span className="contact-eyebrow">WHY BOOK WITH US</span>
        <h2>A Room That Speaks for You</h2>
        <p>
          First impressions matter. Our meeting rooms are built for client presentations, team
          strategy sessions, and the conversations that move your business forward — all
          available by the hour, with no long-term commitment required.
        </p>
        <p>
          Every room comes equipped with the technology, seating, and finish you'd expect from
          a professional space in Abu Dhabi's financial district — ready the moment you walk in.
        </p>
      </div>
      <Link to="/contact" className="impress-box-link">
        <div className="impress-box">
          <div className="impress-icon">📅</div>
          <h4>BOOK BY THE HOUR</h4>
          <p>No day-long minimums — reserve exactly the time you need.</p>
        </div>
      </Link>
    </section>
  )
}

export default ImpressClients
