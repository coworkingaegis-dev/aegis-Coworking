import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import smallOfficeImg from '../assets/po-small.jpg'
import mediumOfficeImg from '../assets/po-medium.jpg'


const faqs = [
  {
    q: "How much does a private office cost in ADGM?",
    a: "Private offices in ADGM at Aegis Coworking start from AED 4,500/month. Pricing depends on team size and private office space configuration."
  },
  {
    q: "Can a private office be used for ADGM company registration?",
    a: "Yes. Each private office in ADGM includes a registered business address suitable for your ADGM commercial licence application."
  },
  {
    q: "Is 24/7 access included with a private office?",
    a: "Yes. Every private office includes 24/7 secure access, giving your team a professional and flexible office space in ADGM."
  },
  {
    q: "How many people can a private office accommodate?",
    a: "Our private office spaces in ADGM can accommodate teams of 1 to 20+ professionals, with Small, Medium, and Large office options."
  },
  {
    q: "Where are the private offices located?",
    a: "Our private offices are located in Addax Tower, Al Reem Island, within Abu Dhabi Global Market (ADGM)."
  },
  {
    q: "What is included with a private office in ADGM?",
    a: "Private offices include a furnished workspace, ergonomic desks and chairs, lockable storage, high-speed internet, 24/7 access, and a registered ADGM business address."
  },
  {
    q: "Is Aegis Coworking a business centre in ADGM?",
    a: "Yes. Aegis Coworking is a professional business centre in ADGM offering private offices, dedicated desks, coworking spaces, meeting rooms, and virtual office solutions."
  }
]

function PrivateOffice() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="App">
      <Helmet>
        <title>Private Office for Rent in Abu Dhabi | ADGM Addax Tower</title>
        <meta
          name="description"
          content="Rent a fully furnished private office in Abu Dhabi's ADGM Addax Tower with 24/7 access. Flexible monthly terms. Get pricing details and book a tour today"
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/private-office" />

        <meta property="og:title" content="Private Office ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="Lockable, fully furnished private offices in ADGM, Addax Tower, from AED 4500/month."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/private-office" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />



       <meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Private Office for Rent in Abu Dhabi | ADGM Addax Tower" />
<meta name="twitter:description" content="Rent a fully furnished private office in Abu Dhabi's ADGM Addax Tower with 24/7 access. Flexible monthly terms." />
<meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

<script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a,
              },
            })),
          })}
        </script>

       <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Private Office Rental",
    "name": "Private Office in Abu Dhabi",
    "description": "Fully furnished private office in ADGM with 24/7 access.",
   "provider": {
  "@type": "LocalBusiness",
  "@id": "https://www.aegiscoworking.ae/#business"
},
    "areaServed": "Abu Dhabi",
    "offers": {
      "@type": "Offer",
      "price": "4500",
      "priceCurrency": "AED",
      "availability": "https://schema.org/InStock",
      "url": "https://www.aegiscoworking.ae/private-office"
    }
  })}
</script>


<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.aegiscoworking.ae/"
      },
      {
       "@type": "ListItem",
        position: 2,
        name: "Private Office",
        item: "https://www.aegiscoworking.ae/private-office"
      }
    ]
  })}
</script>
      </Helmet>

      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <h1>PRIVATE OFFICES IN ADGM</h1>
        <p>FURNISHED PRIVATE OFFICE | 24/7 ACCESS | ADGM LICENSED</p>
      </section>

      {/* Own Private Office */}
      <section className="business-presence">
        <span className="contact-eyebrow">HOW IT WORKS</span>
        <h2>Your Own Private Office Inside ADGM</h2>
        <p className="bp-intro">

  Our private offices are located at Addax Tower, Al Reem Island, in the heart
  of ADGM. Each private office in ADGM is lockable, fully furnished, and ready
  for your ADGM licence. Choose professional private office space in ADGM with
  the privacy of a traditional office and the flexibility of a modern business
  centre. See full <Link to="/pricing">pricing details</Link> for every office
  size.
</p>

        <div className="bp-columns bp-columns-3">
          <div className="bp-column">
  <div className="bp-column-icon">🔒</div>
  <h4>PRIVATE OFFICE</h4>
  <ul>
    <li>Lockable private office with 24/7 secure access in ADGM</li>
    <li>Fully furnished with ergonomic desks, chairs, and storage</li>
    <li>Suitable for teams of 1 to 20+ professionals</li>
  </ul>
</div>

<div className="bp-column">
  <div className="bp-column-icon">🏢</div>
  <h4>ADGM BUSINESS PRESENCE</h4>
  <ul>
    <li>Registered business address for your ADGM commercial licence</li>
    <li>Professional setting for client meetings and business visits</li>
    <li>Located in Addax Tower, Al Reem Island</li>
  </ul>
</div>

<div className="bp-column">
  <div className="bp-column-icon">🛎️</div>
  <h4>OFFICE SERVICES</h4>
  <ul>
    <li>High-speed fibre internet and secure WiFi</li>
    <li>Meeting room access, phone answering, and mail handling</li>
    <li>Printing, scanning, kitchen, cleaning, and maintenance</li>
  </ul>
</div>
        </div>
      </section>

      {/* Small Office */}
      <section className="vo-tier">
        <div className="vo-tier-image">
          <img src={smallOfficeImg} alt="Small ADGM Private Office" />
        </div>
        <div className="vo-tier-content">
          <span className="vo-tier-badge" style={{ background: '#e5e5e0', color: 'var(--color-primary)' }}>SMALL</span>
          <p className="vo-tier-eyebrow">Perfect for 1-4 people</p>
          <h3>SMALL ADGM PRIVATE OFFICE</h3>
         <p>
  An ideal private office in ADGM for founders, small teams, and advisory firms.
  Located in Addax Tower, Al Reem Island, each office is fully furnished,
  licence-ready, and accessible 24/7. Enjoy dedicated desks, ergonomic chairs,
  lockable storage, and high-speed internet in a professional office space in ADGM.
</p>
          <div className="vo-tier-buttons">
            <Link to="/contact">
              <button className="btn-vo-primary">REQUEST QUOTE</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Medium Office */}
      <section className="vo-tier vo-tier-reverse">
        <div className="vo-tier-image">
          <img src={mediumOfficeImg} alt="Medium ADGM Private Office" />
        </div>
        <div className="vo-tier-content">
          <span className="vo-tier-badge" style={{ background: '#fdeecb', color: '#b8860b' }}>MEDIUM</span>
          <p className="vo-tier-eyebrow">Perfect for 5-10 people</p>
          <h3>MEDIUM ADGM PRIVATE OFFICE</h3>
          <p>
  Built for growing ADGM-licensed teams that need more office space in ADGM.
  These private office spaces provide room for client meetings, collaboration,
  and focused work in Abu Dhabi Global Market. With secure storage, flexible
  layouts, and a professional business setting, they are ideal for startups,
  regulated firms, and international businesses.
</p>
          <div className="vo-tier-buttons">
            <Link to="/contact">
              <button className="btn-vo-primary">REQUEST QUOTE</button>
            </Link>
          </div>
        </div>
      </section>

     

      {/* FAQ */}
      <section className="vo-faq">
        <span className="contact-eyebrow">PRIVATE OFFICE ADGM</span>
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

      {/* Inquiry CTA */}
      <section className="inquiry-cta">
        <motion.div
          className="inquiry-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">GET STARTED</span>
          <h2>Find Your Private Office Today</h2>
          <p>
            Looking to set up or move your team into a private office inside Abu Dhabi Global
            Market? Tell us about your headcount and licence requirements and we'll match you
            with the right suite at Addax Tower — no obligation.
          </p>
          <Link to="/contact">
            <button className="btn-join-now">REQUEST QUOTE</button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivateOffice
