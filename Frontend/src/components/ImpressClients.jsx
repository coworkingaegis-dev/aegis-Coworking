import { Link } from 'react-router-dom'

function ImpressClients() {
  return (
    <section className="impress-clients">
      <div className="impress-text">
        <span className="contact-eyebrow">WHY BOOK WITH US</span>
       <h2>Professional Meeting Room in ADGM</h2>
<p>
  Host client meetings, team discussions, presentations, and important business
  conversations in a professional meeting room in ADGM. Book by the hour with
  flexible options and no long-term commitment.
</p>
<p>
  Located in Addax Tower, our meeting rooms in Abu Dhabi Global Market offer
  comfortable seating, modern technology, and a professional setting ready for
  your next meeting.
</p>
      </div>
      <Link to="/contact" className="impress-box-link">
        <div className="impress-box">
          <div className="impress-icon">📅</div>
          <h3>BOOK BY THE HOUR</h3>
          <p>No day-long minimums — reserve exactly the time you need.</p>
        </div>
      </Link>
    </section>
  )
}

export default ImpressClients
