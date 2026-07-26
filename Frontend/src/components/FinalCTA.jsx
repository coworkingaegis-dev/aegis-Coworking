import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function FinalCTA() {
  return (
    <section className="final-cta">
      <motion.div
        className="final-cta-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="final-cta-badge-row">
          <div className="final-cta-avatars">
            <span className="mini-avatar">SK</span>
            <span className="mini-avatar">OR</span>
            <span className="mini-avatar">AM</span>
          </div>
          <span className="final-cta-rating">★★★★★ <strong>Loved by 50+ members</strong></span>
        </div>

        <span className="contact-eyebrow">GET STARTED</span>
        <h2>Ready to see it for yourself?</h2>
        <p>Book a free tour and experience the space before you commit to anything. No pressure, no obligation.</p>

        <div className="final-cta-buttons">
          <Link to="/contact">
            <button className="btn-secondary">REQUEST QUOTE</button>
          </Link>
         
        </div>
      </motion.div>
    </section>
  )
}

export default FinalCTA