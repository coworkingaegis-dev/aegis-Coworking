import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VOTierCard from '../components/VOTierCard'

import smallOfficeImg from '../assets/po-small.jpg'
import mediumOfficeImg from '../assets/po-medium.jpg'
import voBasic from '../assets/vo-basic.webp'
import voPremium from '../assets/vo-premium.jpg'
import voEnterprise from '../assets/vo-enterprise.jpg'

const privateFaqs = [
  {
    q: "What is a private office in ADGM?",
    a: "A private office is a lockable, fully furnished suite inside Aegis Coworking's Addax Tower location — your own enclosed space with a registered address suitable for ADGM company registration, as opposed to a shared desk in an open coworking area.",
  },
  {
    q: "How much does a private office cost in ADGM?",
    a: "Private offices at Aegis Coworking start from AED 4,500/month, with pricing depending on team size and suite configuration.",
  },
  {
    q: "Can a private office be used for ADGM company registration?",
    a: "Yes. Each private office suite comes with a registered address suitable for your ADGM commercial licence application.",
  },
  {
    q: "Is 24/7 access included with a private office?",
    a: "Yes, every private office suite includes 24/7 secure, lockable access.",
  },
  {
    q: "How many people can a private office accommodate?",
    a: "Our private offices are configurable for teams of 1 to 20+ professionals, with Small and Medium suite options.",
  },
  {
    q: "What's the difference between a private office and a dedicated desk in ADGM?",
    a: "A dedicated desk gives you a permanent personal desk within a shared coworking area at Addax Tower. A private office is a fully enclosed, lockable room — better suited to teams needing privacy, client meetings, or more than one workstation.",
  },
]

const virtualFaqs = [
  {
    q: "What is a virtual office in ADGM?",
    a: "A virtual office is a registered ADGM business address at Addax Tower — with mail handling and, depending on tier, phone support and meeting room access — without a physical desk or office space attached to it.",
  },
  {
    q: "Do I need a physical office or can I use a virtual office in Abu Dhabi?",
    a: "No. ADGM accepts a registered virtual office address for most licence categories, as long as it includes mail handling and a valid business address inside ADGM, such as our Category 1 address at Addax Tower.",
  },
  {
    q: "What's included in an ADGM virtual office package, and how much does it cost?",
    a: "Aegis Coworking offers three virtual office tiers — Basic, Premium, and Enterprise — each with a registered ADGM business address, mail handling, and increasing levels of phone support and meeting room credits. Pricing is customized based on the tier and your business needs — request a quote for current rates.",
  },
  {
    q: "Can I use a virtual office in Abu Dhabi for my ADGM licence renewal?",
    a: "Yes, a virtual office address at Aegis Coworking can be used both for initial ADGM company registration and for ongoing licence renewals.",
  },
  {
    q: "What's the difference between a virtual office and a physical desk membership?",
    a: "A virtual office gives you a registered business address and mail handling without daily desk access. A dedicated desk or day pass adds a physical place to work. You can start with a virtual office and add desk access later.",
  },
  {
    q: "Can I upgrade from a virtual office to a private office later?",
    a: "Yes, you can convert to a dedicated desk or private office at Addax Tower at any time at preferential rates.",
    aDisplay: (
      <>
        Yes, you can convert to a dedicated desk or{' '}
        <Link to="/private-office" className="inline-link">private office</Link> at
        Addax Tower at any time at preferential rates.
      </>
    ),
  },
]

const allFaqsForSchema = [...privateFaqs, ...virtualFaqs]

function OfficeSolutions() {
  const [openPrivateIndex, setOpenPrivateIndex] = useState(null)
  const [openVirtualIndex, setOpenVirtualIndex] = useState(null)

  const togglePrivateFAQ = (i) => setOpenPrivateIndex(openPrivateIndex === i ? null : i)
  const toggleVirtualFAQ = (i) => setOpenVirtualIndex(openVirtualIndex === i ? null : i)

  return (
    <div className="App">
      <Helmet>
        <title>Private Office & Virtual Office ADGM | Addax Tower | Aegis Coworking</title>
        <meta
          name="description"
          content="Rent a fully furnished private office or set up a registered virtual office in ADGM's Addax Tower with Aegis Coworking. 24/7 access, flexible terms. Get pricing today."
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/office-solutions" />

        <meta property="og:title" content="Private Office & Virtual Office ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="Lockable private offices from AED 4,500/month and registered ADGM virtual office addresses at Addax Tower."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/office-solutions" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Private Office & Virtual Office ADGM | Addax Tower" />
        <meta
          name="twitter:description"
          content="Rent a fully furnished private office or set up a registered virtual office in ADGM's Addax Tower."
        />
        <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqsForSchema.map((f) => ({
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
            "provider": { "@type": "LocalBusiness", "name": "Aegis Coworking" },
            "areaServed": "Abu Dhabi",
            "offers": {
              "@type": "Offer",
              "price": "4500",
              "priceCurrency": "AED",
              "availability": "https://schema.org/InStock",
              "url": "https://www.aegiscoworking.ae/office-solutions",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Virtual Office",
            "name": "Virtual Office in Abu Dhabi",
            "description": "Virtual office with a registered ADGM business address.",
            "provider": { "@type": "LocalBusiness", "name": "Aegis Coworking" },
            "areaServed": "Abu Dhabi",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "url": "https://www.aegiscoworking.ae/office-solutions",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aegiscoworking.ae/" },
              { "@type": "ListItem", position: 2, name: "Office Solutions", item: "https://www.aegiscoworking.ae/office-solutions" },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <h1>PRIVATE & VIRTUAL OFFICES IN ADGM</h1>
        <p>FURNISHED PRIVATE OFFICES | REGISTERED VIRTUAL ADDRESS | ADDAX TOWER</p>
      </section>

      {/* ===================== PRIVATE OFFICE ===================== */}

      <section className="business-presence">
        <span className="contact-eyebrow">WHAT IS A PRIVATE OFFICE?</span>
        <h2>Your Own Private Office Inside ADGM</h2>
        <p className="bp-intro">
          A private office is a lockable, fully furnished suite of your own —
          separate from the open coworking floor, but still inside the same
          Addax Tower building in the heart of ADGM. Unlike a shared dedicated
          desk, a private office gives your team an enclosed space suitable
          for client meetings, focused work, and day-to-day operations, while
          still including a registered address for your ADGM commercial
          licence. See full <Link to="/pricing">pricing details</Link> for
          every suite size.
        </p>

        <div className="bp-columns">
          <div className="bp-column">
            <div className="bp-column-icon">🔒</div>
            <h4>PRIVATE OFFICE FEATURES</h4>
            <ul>
              <li>Lockable private office suite with 24/7 secure access inside ADGM</li>
              <li>Fully furnished with ergonomic desks, chairs and storage</li>
              <li>Configurable for teams of 1 to 20+ professionals</li>
              <li>Registered office space address for your ADGM commercial licence</li>
              <li>Professional setting for client meetings and regulator visits</li>
            </ul>
          </div>
          <div className="bp-column">
            <div className="bp-column-icon">🛎️</div>
            <h4>SERVICES INCLUDED</h4>
            <ul>
              <li>High-speed fibre internet and secure WiFi</li>
              <li>Dedicated phone line with live call answering</li>
              <li>Access to ADGM meeting rooms and the business lounge</li>
              <li>Mail handling and package receiving at Addax Tower</li>
              <li>Kitchen, breakout lounge, printing and scanning</li>
              <li>Daily professional cleaning and building maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="vo-tier">
        <div className="vo-tier-image">
          <img src={smallOfficeImg} alt="Small ADGM Private Office" />
        </div>
        <div className="vo-tier-content">
          <span className="vo-tier-badge" style={{ background: '#e5e5e0', color: 'var(--color-primary)' }}>SMALL</span>
          <p className="vo-tier-eyebrow">Perfect for 1-4 people</p>
          <h3>SMALL ADGM PRIVATE OFFICE</h3>
          <p>
            An ideal first home inside Abu Dhabi Global Market for founders, small teams and
            advisory firms. Your private office space is licensed-ready for ADGM, fully furnished and accessible
            24/7, while you stay plugged into the wider community on our coworking floor. Includes
            dedicated desks, ergonomic chairs, lockable storage and high-speed internet, all
            configurable to match how your team works.
          </p>
          <div className="vo-tier-buttons">
            <Link to="/contact">
              <button className="btn-vo-primary">REQUEST QUOTE</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="vo-tier vo-tier-reverse">
        <div className="vo-tier-image">
          <img src={mediumOfficeImg} alt="Medium ADGM Private Office" />
        </div>
        <div className="vo-tier-content">
          <span className="vo-tier-badge" style={{ background: '#fdeecb', color: '#b8860b' }}>MEDIUM</span>
          <p className="vo-tier-eyebrow">Perfect for 5-10 people</p>
          <h3>MEDIUM ADGM PRIVATE OFFICE</h3>
          <p>
            Built for growing ADGM-licensed teams that need more room to operate. These office spaces
            give you room for client meetings, internal collaboration and focused work, all
            within Abu Dhabi Global Market. Includes dedicated breakout areas, secure storage and
            a layout you can adapt as headcount grows. Well suited to established startups,
            regulated firms and regional offices of international businesses.
          </p>
          <div className="vo-tier-buttons">
            <Link to="/contact">
              <button className="btn-vo-primary">REQUEST QUOTE</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="vo-faq">
        <span className="contact-eyebrow">PRIVATE OFFICE ADGM</span>
        <h2>PRIVATE OFFICE — FREQUENTLY ASKED QUESTIONS</h2>
        <div className="vo-faq-list">
          {privateFaqs.map((f, i) => (
            <div
              className={`vo-faq-item ${openPrivateIndex === i ? 'open' : ''}`}
              key={i}
              onClick={() => togglePrivateFAQ(i)}
            >
              <div className="vo-faq-question">
                {f.q}
                <span className="vo-faq-toggle">{openPrivateIndex === i ? '−' : '+'}</span>
              </div>
              <div className="vo-faq-answer-wrap">
                <p className="vo-faq-answer">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== VIRTUAL OFFICE ===================== */}

      <section className="business-presence">
        <span className="contact-eyebrow">WHAT IS A VIRTUAL OFFICE?</span>
        <h2>An ADGM Registered Business Address, Without the Desk</h2>
        <p className="bp-intro">
          A virtual office is a registered ADGM business address at Addax
          Tower — used for company registration, mail handling, and (on
          higher tiers) phone support and meeting room access — without a
          dedicated desk or physical office attached to it. It's the fastest,
          most affordable way to establish a compliant ADGM presence, and you
          can upgrade to a <Link to="#private-office">private office</Link> or
          dedicated desk at Addax Tower any time your business needs
          physical space.
        </p>
      </section>

      <VOTierCard
        image={voBasic}
        tier="BASIC"
        title="BASIC ADGM VIRTUAL OFFICE"
        desc="Built for founders, freelancers and international entrepreneurs who need a registered ADGM address at launch. You get a Category 1 business address inside Addax Tower for your ADGM licence application, mail receiving and forwarding, and your company name on our on-site directory. Start operating from one of the Middle East's leading financial free zones without committing to a full office lease."
        buttons={[{ label: "REQUEST QUOTE", primary: true }]}
        imageLeft={true}
      />

      <VOTierCard
        tier="PREMIUM"
        title="PREMIUM ADGM VIRTUAL OFFICE"
        desc="Everything in Basic, plus a dedicated UAE phone number with live call answering in your company name, 5 hours of meeting room credits inside ADGM each month, and priority mail handling. Designed for growing businesses that need a polished client-facing presence in Abu Dhabi Global Market. Host meetings in our on-site rooms, receive clients at the Addax Tower reception, and benefit from concierge-style administrative support."
        image={voPremium}
        buttons={[{ label: "REQUEST QUOTE", primary: true }]}
        imageLeft={false}
      />

      <VOTierCard
        tier="ENTERPRISE"
        title="ENTERPRISE ADGM VIRTUAL OFFICE"
        desc="Our most complete ADGM virtual office package. Includes everything in Premium, plus 10 hours of meeting room credits, a dedicated account manager, priority administrative and PRO support, and flexible access to our coworking floor. Ideal for international groups and regulated entities establishing an ADGM presence, or UAE-based companies that want maximum flexibility. Convert to a dedicated desk or private office at Addax Tower at any time at preferential rates."
        image={voEnterprise}
        buttons={[{ label: "REQUEST QUOTE", primary: true }]}
        imageLeft={true}
      />

      <section className="vo-faq">
        <span className="contact-eyebrow">VIRTUAL OFFICE ADGM</span>
        <h2>VIRTUAL OFFICE — FREQUENTLY ASKED QUESTIONS</h2>
        <div className="vo-faq-list">
          {virtualFaqs.map((f, i) => (
            <div
              className={`vo-faq-item ${openVirtualIndex === i ? 'open' : ''}`}
              key={i}
              onClick={() => toggleVirtualFAQ(i)}
            >
              <div className="vo-faq-question">
                {f.q}
                <span className="vo-faq-toggle">{openVirtualIndex === i ? '−' : '+'}</span>
              </div>
              <div className="vo-faq-answer-wrap">
                <p className="vo-faq-answer">{f.aDisplay ?? f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Combined Inquiry CTA */}
      <section className="inquiry-cta">
        <motion.div
          className="inquiry-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">GET STARTED</span>
          <h2>Find Your Private or Virtual Office Today</h2>
          <p>
            Whether you need a physical suite at Addax Tower or a registered
            ADGM address to get started, tell us about your headcount and
            licence requirements and we'll match you with the right option —
            no obligation.
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

export default OfficeSolutions
