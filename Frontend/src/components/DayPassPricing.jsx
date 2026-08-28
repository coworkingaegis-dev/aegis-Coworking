import { Link } from 'react-router-dom'
import dayPassImage from '../assets/aegis-coworking-day-pass-adgm.jpg'

function DayPassPricing() {
  return (
    <section className="desk-pricing">
      <div className="desk-image">
        <img src={dayPassImage} alt="Coworking day pass workspace at Aegis Coworking in ADGM, Abu Dhabi" />
      </div>
      <div className="desk-details">
        <p className="desk-eyebrow">FLEXIBLE WORKSPACE SOLUTION</p>
        <h2>COWORKING DAY PASS</h2>
        <p className="desk-desc">
        A professional workspace in ADGM, available by the day, with no lease and no long-term commitment. It's built for freelancers, remote teams, and business travelers who need reliable access without signing a contract.
        </p>

        <div className="day-pass-box">
          <p className="desk-rent-label">Day Pass Pricing:</p>
          <div className="day-pass-options">
            <div>
              <span className="price">AED 100</span>
              <span className="period">Per day | 9 AM - 6 PM</span>
            </div>
            <div>
              <span className="price">AED 150</span>
              <span className="period">Per day | 24 Hours</span>
            </div>
          </div>
        </div>

        <div className="daypass-perks">
          <p className="whats-included">WHAT'S INCLUDED:</p>
          <div className="daypass-perks-grid">
            <span>✓ Hot Desk Access</span>
            <span>✓ High-Speed WiFi</span>
            <span>✓ Premium Coffee</span>
            <span>✓ Print & Scan</span>
            <span>✓ All Amenities</span>
            <span>✓ No Commitment</span>
          </div>
        </div>

        <Link to="/contact" className="reserve-link">Request Quote &gt;</Link>
      </div>
    </section>
  )
}

export default DayPassPricing
