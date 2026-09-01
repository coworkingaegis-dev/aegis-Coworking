import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const membershipFaqs = [
  {
    q: "What is a coworking membership?",
    a: "A coworking membership is a plan that gives you regular access to a workspace — anything from a single seat to a private office — without signing a traditional long-term office lease. At Aegis Coworking, membership plans range from a single day pass to a fully furnished private office in Addax Tower, ADGM.",
  },
  {
    q: "What membership types does Aegis Coworking offer?",
    a: "Four options: a Hot Desk (shared workspace, pay monthly), a Dedicated Desk (your own permanent desk), a Virtual Office (a registered ADGM business address without a physical desk), and a Private Office (a lockable furnished suite for teams). You can start with one and move to another as your needs change.",
  },
  {
  q: "How much does a coworking membership cost in ADGM?",
  a: "At Aegis Coworking, Hot Desk membership starts from AED 1,000/month, Dedicated Desk from AED 1,150/month, Private Office from AED 4,500/month, and Virtual Office from AED 3,500/year. Full details are on our pricing page.",
},
  {
    q: "Is there a minimum commitment for membership?",
    a: "Hot Desk and Day Pass access have no long-term commitment. Dedicated Desk, Virtual Office, and Private Office plans are offered on flexible monthly terms rather than a fixed multi-year lease.",
  },
  {
    q: "Can I switch between membership plans later?",
    a: "Yes. You can upgrade from a Hot Desk or Virtual Office to a Dedicated Desk or Private Office at any time at preferential rates as your business grows.",
  },
  {
    q: "Does membership include an ADGM business address?",
    a: "Dedicated Desk, Virtual Office, and Private Office memberships all include a registered address suitable for ADGM company registration. A Hot Desk or Day Pass alone does not.",
  },
]

const membershipGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  maxWidth: '1300px',
  margin: '0 auto',
}

function Membership() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <Helmet>
        <title>Coworking Membership ADGM | Flexible Plans | Aegis Coworking</title>
        <meta
          name="description"
          content="Explore flexible coworking membership plans in ADGM, Addax Tower — Hot Desk, Dedicated Desk, Virtual Office and Private Office. Cheapest membership in Abu Dhabi's ADGM, from AED 1,000/month."
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/membership" />

        <meta property="og:title" content="Coworking Membership ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="Flexible coworking membership plans in ADGM, Addax Tower — from AED 1,000/month, no long-term lease required."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/membership" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coworking Membership ADGM | Aegis Coworking" />
        <meta
          name="twitter:description"
          content="Flexible coworking membership plans in ADGM, Addax Tower — from AED 1,000/month."
        />
        <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": membershipFaqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Coworking Membership",
            "name": "Coworking Membership in ADGM",
            "description": "Flexible coworking membership plans in ADGM, Addax Tower, from Hot Desk to Private Office.",
            "provider": { "@type": "LocalBusiness", "@id": "https://www.aegiscoworking.ae/#business" },
            "areaServed": "Abu Dhabi",
            "offers": {
              "@type": "Offer",
              "price": "1000",
              "priceCurrency": "AED",
              "availability": "https://schema.org/InStock",
              "url": "https://www.aegiscoworking.ae/membership",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aegiscoworking.ae/" },
              { "@type": "ListItem", position: 2, name: "Membership", item: "https://www.aegiscoworking.ae/membership" },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <h1>COWORKING MEMBERSHIP IN ADGM</h1>
        <p>FLEXIBLE PLANS | ADDAX TOWER, AL REEM ISLAND | FROM AED 1,000/MONTH</p>
      </section>

      {/* What is a membership — simple explainer */}
      <section className="business-presence">
        <span className="contact-eyebrow">MEMBERSHIP EXPLAINED</span>
        <h2>What Is a Coworking Membership?</h2>
        <p className="bp-intro">
         A coworking membership gives you flexible access to a professional coworking space in Abu Dhabi without the commitment of a traditional office lease. You choose a plan based on the space, facilities, and access your business needs.

At Aegis Coworking, options include a coworking day pass, hot desk, dedicated desk, private office, or virtual office in ADGM. You can also get a registered ADGM business address without renting a dedicated workspace.

All Aegis Coworking memberships are located in Addax Tower, Al Reem Island, in the heart of ADGM, Abu Dhabi, giving businesses a professional and flexible workspace in a prime business location.

        </p>

        <div className="bp-columns">
          <div className="bp-column">
           <div className="bp-column-icon">🔑</div>
<h3>HOW MEMBERSHIP WORKS</h3>
<ul>
  <li>Choose a coworking membership that fits your workspace needs and budget</li>
  <li>Pay monthly without committing to a traditional long-term office lease</li>
  <li>Upgrade your coworking plan as your business grows</li>
  <li>Select plans include a registered ADGM business address</li>
</ul>
</div>
<div className="bp-column">
  <div className="bp-column-icon">👥</div>
  <h3>WHO MEMBERSHIP IS FOR</h3>
  <ul>
    <li>Freelancers and remote workers looking for a flexible coworking space</li>
    <li>Startups that need an ADGM registered business address</li>
    <li>Growing businesses looking for professional office space in Abu Dhabi</li>
    <li>Established teams needing a private office in ADGM</li>
  </ul>
</div>

        </div>
      </section>

      {/* Membership tiers */}
      <section className="perfect-for">
        <span className="contact-eyebrow">CHOOSE YOUR PLAN</span>
        <h2>Aegis Coworking Membership Plans</h2>
        <div className="perfect-for-grid" style={membershipGridStyle}>
          <div className="perfect-for-card">
            <div className="perfect-for-icon">💺</div>
            <h3>HOT DESK</h3>
            <p>
              Shared workspace access, high-speed internet and meeting room
              credits. The cheapest coworking membership in ADGM, ideal for
              freelancers.
            </p>
            <Link to="/pricing" className="reserve-link">See pricing →</Link>
          </div>
          <div className="perfect-for-card">
            <div className="perfect-for-icon">🖥️</div>
            <h3>DEDICATED DESK</h3>
            <p>
              Your own permanent desk with 24/7 access and an ADGM-eligible
              office address, in Addax Tower.
            </p>
            <Link to="/pricing" className="reserve-link">See pricing →</Link>
          </div>
          <div className="perfect-for-card">
            <div className="perfect-for-icon">📍</div>
            <h3>VIRTUAL OFFICE</h3>
            <p>
              A registered ADGM business address with mail handling — no
              physical desk required.
            </p>
            <Link to="/pricing" className="reserve-link">See pricing →</Link>
          </div>
          <div className="perfect-for-card">
            <div className="perfect-for-icon">🚪</div>
            <h3>PRIVATE OFFICE</h3>
            <p>
              A lockable, fully furnished suite for teams who need privacy
              and space to grow.
            </p>
             <Link to="/pricing" className="reserve-link">See pricing →</Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="pricing-includes">
        <span className="contact-eyebrow">STANDARD ACROSS EVERY MEMBERSHIP</span>
        <h2>Every Membership Comes Stocked</h2>
        <div className="includes-grid">
          <div className="includes-item">
            <div className="includes-icon">☕</div>
            <h4>PREMIUM COFFEE</h4>
            <p>Complimentary coffee & tea</p>
          </div>
          <div className="includes-item">
            <div className="includes-icon">📶</div>
            <h4>HIGH-SPEED WIFI</h4>
            <p>Fibre optic internet</p>
          </div>
          <div className="includes-item">
            <div className="includes-icon">🤝</div>
            <h4>NETWORKING EVENTS</h4>
            <p>Community gatherings</p>
          </div>
          <div className="includes-item">
            <div className="includes-icon">📍</div>
            <h4>PRIME LOCATION</h4>
            <p>Heart of ADGM, Al Reem Island</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vo-faq">
        <span className="contact-eyebrow">MEMBERSHIP ADGM</span>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="vo-faq-list">
          {membershipFaqs.map((f, i) => (
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

      {/* CTA */}
      <section className="inquiry-cta">
        <motion.div
          className="inquiry-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">GET STARTED</span>
          <h2>Find Your Membership Plan</h2>
          <p>
            Not sure which plan fits your business? Tell us how you work and
            we'll recommend the right membership at Addax Tower — no
            obligation.
          </p>
          <Link to="/contact">
            <button className="btn-join-now">REQUEST QUOTE</button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

export default Membership
