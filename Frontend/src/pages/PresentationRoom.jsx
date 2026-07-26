import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  {
    q: "How much does the presentation room cost in ADGM?",
    a: "Presentation room rates depend on duration and setup required. Contact us for current hourly and half-day rates.",
  },
  {
    q: "What's included with the presentation room?",
    a: "A large 4K projection screen, professional audio, adjustable lighting, recording capability, live streaming support, and presentation tools such as clickers and pointers.",
  },
  {
    q: "How many people can the presentation room hold?",
    a: "Our presentation room accommodates up to 50 people in theater-style seating with excellent sightlines.",
  },
  {
    q: "Can I record or live stream my event from the presentation room?",
    a: "Yes, the room is equipped with recording capability and live streaming support for remote audiences.",
  },
]

function PresentationRoom() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="App">
      <Helmet>
        <title>Presentation Room ADGM | Addax Tower | Aegis Coworking</title>
        <meta
          name="description"
          content="Book a state-of-the-art presentation room at Aegis Coworking, ADGM, Addax Tower. 4K display, professional audio, seating for up to 50 — ideal for workshops, launches, and training."
        />
        <link rel="canonical" href="https://aegis-coworking.vercel.app/presentation-room" />

        <meta property="og:title" content="Presentation Room ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="State-of-the-art presentation room in ADGM, Addax Tower. Seating for up to 50, 4K display, professional AV."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aegis-coworking.vercel.app/presentation-room" />
        <meta property="og:image" content="https://aegis-coworking.vercel.app/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <h1>PRESENTATION ROOM</h1>
        <p>State-of-the-art space for impactful presentations</p>
      </section>

      {/* Make An Impact */}
      <section className="impress-clients">
        <div className="impress-text">
          <span className="contact-eyebrow">WHY BOOK WITH US</span>
          <h2>Make An Impact</h2>
          <p>
            Our presentation room is designed for workshops, training sessions, product launches,
            and large-scale presentations. Equipped with professional AV equipment and
            theater-style seating.
          </p>
          <p>
            Perfect for hosting events, conducting training, or delivering impressive client
            presentations.
          </p>
        </div>
        <div className="impress-box">
          <div className="impress-icon">🎬</div>
          <h4>PROFESSIONAL SETUP</h4>
          <p>Everything you need for a successful event</p>
        </div>
      </section>

      {/* Premium Features */}
      <section className="room-features">
        <h2>PREMIUM FEATURES</h2>
        <div className="room-features-grid">
          <div className="room-feature-card">
            <div className="room-feature-icon">🖥️</div>
            <h4>LARGE PROJECTION SCREEN</h4>
            <p>Crystal clear 4K display</p>
          </div>
          <div className="room-feature-card">
            <div className="room-feature-icon">🎙️</div>
            <h4>PROFESSIONAL AUDIO</h4>
            <p>Microphones and sound system</p>
          </div>
          <div className="room-feature-card">
            <div className="room-feature-icon">💡</div>
            <h4>ADJUSTABLE LIGHTING</h4>
            <p>Set the perfect ambiance</p>
          </div>
          <div className="room-feature-card">
            <div className="room-feature-icon">🎥</div>
            <h4>RECORDING CAPABILITY</h4>
            <p>Capture your presentations</p>
          </div>
          <div className="room-feature-card">
            <div className="room-feature-icon">📡</div>
            <h4>LIVE STREAMING</h4>
            <p>Broadcast to remote audiences</p>
          </div>
          <div className="room-feature-card">
            <div className="room-feature-icon">🖱️</div>
            <h4>PRESENTATION TOOLS</h4>
            <p>Clickers, pointers, and more</p>
          </div>
        </div>
      </section>

      {/* Perfect For + Capacity */}
      <section className="room-capacities">
        <h2>PERFECT FOR</h2>
        <div className="room-capacities-grid">
          <div className="room-capacity-card">
            <h4>BUSINESS PRESENTATIONS</h4>
            <p className="capacity-desc">Pitch to clients and investors</p>
          </div>
          <div className="room-capacity-card">
            <h4>TRAINING SESSIONS</h4>
            <p className="capacity-desc">Educate and upskill teams</p>
          </div>
          <div className="room-capacity-card">
            <h4>PRODUCT LAUNCHES</h4>
            <p className="capacity-desc">Unveil your innovations</p>
          </div>
        </div>

        <div className="book-room-cta">
          <h3>CAPACITY</h3>
          <p style={{ fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Up to 50 People</p>
          <p>Theater-style seating with excellent sightlines</p>
          <h3 style={{ marginTop: '20px' }}>READY TO HOST YOUR EVENT?</h3>
          <div className="cta-buttons">
            <Link to="/contact">
              <button className="btn-book-now">Reserve Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vo-faq">
        <span className="contact-eyebrow">PRESENTATION ROOM ADGM</span>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="vo-faq-list">
          {faqs.map((f, i) => (
            <div
              className={`vo-faq-item ${openIndex === i ? 'open' : ''}`}
              key={i}
              onClick={() => toggleFAQ(i)}
            >
              <div className="vo-faq-question">
                {f.q}
                <span className="vo-faq-toggle">{openIndex === i ? '−' : '+'}</span>
              </div>
              <div className="vo-faq-answer-wrap">
                <p className="vo-faq-answer">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PresentationRoom
