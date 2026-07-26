import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function InquiryCTA() {
  return (
    <section className="inquiry-cta">
      <motion.div
        className="inquiry-cta-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="contact-eyebrow">GET STARTED</span>
        <h2>Set Up Your ADGM Address Today</h2>
        <p>
          Whether you're registering a new company or moving an existing licence to a compliant
          address, we'll walk you through it — no obligation, no pressure. Reach out and our
          team will get back to you shortly.
        </p>
        <Link to="/contact">
          <button className="btn-join-now">REQUEST QUOTE</button>
        </Link>
      </motion.div>
    </section>
  )
}

export default InquiryCTA