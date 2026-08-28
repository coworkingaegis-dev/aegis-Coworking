import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
 
  {
    q: "What is the cheapest coworking option in ADGM?",
    a: "The Hot Desk is our most affordable coworking option, starting from AED 1,000/month. It provides access to a professional coworking space in ADGM with high-speed internet and meeting room credits."
  },
  {
    q: "Does the dedicated desk include an ADGM business address?",
    a: "Yes. The Dedicated Desk includes an ADGM-eligible business address, 24/7 access, lockable storage, and a dedicated workspace."
  },
  { q: "How much does a virtual office cost in ADGM?",
   a: "Aegis Coworking offers virtual office options in ADGM starting from AED 3,500/year for businesses that need a professional ADGM business address without renting a full-time office." },
  {
    q: "Are there any hidden fees for coworking?",
    a: "No. Aegis Coworking provides clear pricing for its coworking space, dedicated desk, private office, and virtual office options. You pay for the plan you choose."
  },
  {
    q: "Does my ADGM Business need physical office space?",
   a: "No — you need a registered office address in ADGM, but not necessarily a private office. At Aegis Coworking in Addax Tower, a Dedicated Desk can provide a registered ADGM business address, while a Private Office gives you a dedicated workspace for your team. This makes Aegis a flexible option if you need an ADGM business address without committing to a traditional office lease."
  },

  {
    q: "What are ADGM's flexi desk requirements?",
    a: "ADGM businesses need a qualifying registered office arrangement within ADGM. At Aegis Coworking, our Dedicated Desk plan provides a permanent workspace together with a registered ADGM business address. This makes Aegis suitable for the businesses looking for the cheaper option of these provider. Aegis is located in Addax Tower on Al Reem Island, within the ADGM jurisdiction."
  },

  {
    q: "How much does coworking cost in ADGM?",
    a: "Aegis Coworking in ADGM offers hot desks from AED 1,000 per month and dedicated desks from AED 1,150 per month. Private offices start from AED 4,500 per month, while virtual office plans start from AED 3,500 per year."
  },

 {
  q: "Hot desk vs flexi desk vs dedicated desk in ADGM — what's the difference?",
  a: "A hot desk at Aegis Coworking is a flexible shared workspace and is ideal for individuals or businesses that do not require ADGM's registered business address. A Dedicated Desk provides your own permanent workspace together with a registered ADGM business address and is designed for businesses that need an ADGM flexi desk arrangement. In simple terms, a hot desk is primarily for flexible working, while a dedicated desk is a stronger option when you need both workspace and an ADGM registered office address."
},

 {
  q: "What documents are needed for an ADGM license?",
  a: "ADGM licence requirements depend on your business activity and company structure, but applicants may typically need identification documents, incorporation documents, a business plan and proof of a registered ADGM office address. Aegis Coworking can provide the registered ADGM business address through eligible workspace plans, while ADGM's Registration Authority or your corporate service provider should confirm the exact documents required for your licence.",
  link: {
    url: "https://www.adgm.com/registration-authority/registration-and-incorporation",
    text: "See ADGM's official Registration Authority guidance ↗"
  }
},
  {
    q: "What should I look for in a coworking space in Abu Dhabi?",
    a: "When choosing a coworking space in Abu Dhabi, consider its location, ADGM eligibility, registered address options, pricing, workspace flexibility and business amenities. Aegis Coworking is located in Addax Tower on Al Reem Island and offers hot desks, dedicated desks, private offices, virtual offices and meeting rooms. For businesses operating in ADGM, Aegis also provides options for an ADGM business address and registered office arrangement."
  },

  {
    q: "What is the ADGM company registration office requirement?",
    a: "An ADGM company needs a registered office address within the ADGM jurisdiction. Aegis Coworking provides registered ADGM business address options through eligible Dedicated Desk and Virtual Office plans, giving businesses an alternative to leasing a traditional private office. If you are looking for an ADGM registered office provider, Aegis is located at Addax Tower on Al Reem Island and offers cheap workspace solutions for startups, SMEs and established businesses."
  },
  {
    q: "Where is the coworking space located?",
    a: "Aegis Coworking is located in Addax Tower, Al Reem Island, within Abu Dhabi Global Market (ADGM), offering a professional coworking space in Abu Dhabi."
  }
]

function Pricing() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <>
      <Helmet>
       <title>Cheapest Coworking Space in Abu Dhabi | Aegis Coworking</title>
<meta
  name="description"
   content="Compare Aegis Coworking's ADGM pricing: hot desks from AED 1,000/month, dedicated desks from AED 1,150/month, private offices from AED 4,500/month."
/>
        <link rel="canonical" href="https://www.aegiscoworking.ae/pricing" />

        <meta property="og:title" content="Cheapest Coworking Space in Abu Dhabi | Aegis Coworking" />
       <meta
  property="og:description"
  content="Compare Aegis Coworking's ADGM pricing in Abu Dhabi — hot desks from AED 1,000/month, dedicated desks from AED 1,150/month, private offices from AED 4,500/month, virtual offices from AED 3,500/year."
/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/pricing" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Cheapest Coworking Space in Abu Dhabi | Aegis Coworking" />
<meta name="twitter:description" content="Compare Aegis Coworking's ADGM pricing: hot desks from AED 1,000/month, dedicated desks from AED 1,150/month, private offices from AED 4,500/month." />
<meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Hot Desk",
                "price": "1000",
                "priceCurrency": "AED",
                "priceValidUntil": "2026-12-31",
                "url": "https://www.aegiscoworking.ae/pricing",
              },
              {
                "@type": "Offer",
                "name": "Dedicated Desk",
                "price": "1150",
                "priceCurrency": "AED",
                "priceValidUntil": "2026-12-31",
                "url": "https://www.aegiscoworking.ae/pricing",
              },
              {
                "@type": "Offer",
                "name": "Virtual Office",
                "price": "3500",
                "priceCurrency": "AED",
                "priceValidUntil": "2026-12-31",
                "url": "https://www.aegiscoworking.ae/pricing",
              },
              {
                "@type": "Offer",
                "name": "Private Office",
                "price": "4500",
                "priceCurrency": "AED",
                "priceValidUntil": "2026-12-31",
                "url": "https://www.aegiscoworking.ae/pricing",
              },
            ],
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
        name: "Pricing",
        item: "https://www.aegiscoworking.ae/pricing"
      }
    ]
  })}
</script>
</Helmet>

      <Navbar />

     <section className="pricing-hero">
  <h1>DISCOUNTED PRICES</h1>
  <p className="pricing-price-intro">
    Cheapest coworking and dedicated desk pricing in ADGM — hot desk from AED 1,000/month. No hidden fees.
  </p>
</section>

      <section className="pricing-section">
        <div className="pricing-grid">

          {/* HOT DESK */}
          <div className="pricing-card">
            <h3>HOT DESK</h3>
            <p className="pricing-subtitle">Cheapest hot desk price in ADGM, perfect for freelancers</p>
            <div className="pricing-price">
             <span className="pricing-strike">1,200</span>{' '}
              AED 1,000<span>/month</span>
            </div>
            <ul className="pricing-features">
              <li>Full access to the shared coworking floor</li>
  <li>Fast, reliable fibre-optic internet</li>
  <li>Meeting room credits</li>
  <li>Invitations to community events</li>
  <li>Complimentary coffee and tea</li>
            </ul>
            <Link to="/contact">
              <button className="btn-pricing-solid">Get Started</button>
            </Link>
          </div>

          {/* DEDICATED DESK — POPULAR */}
          <div className="pricing-card">
            <span className="pricing-badge">MOST POPULAR</span>
            <h3>DEDICATED DESK</h3>
            <p className="pricing-subtitle">Cheapest dedicated desk in ADGM, your own workspace</p>
            <span className="pricing-save">Save AED 250/month</span>
            <div className="pricing-price">
              <span className="pricing-strike">1,450</span>{' '}
              AED 1,150<span>/month</span>
            </div>
           <ul className="pricing-features">
  <li>Office address suitable for an ADGM license</li>

  <li>24/7 access</li>
  <li>Dedicated lockers for storge</li>
  <li>Extra meeting room credits every month</li>
  <li>Everything included in the Hot Desk plan</li>
</ul>
            <Link to="/contact">
              <button className="btn-pricing-solid">Get Started</button>
            </Link>
          </div>

          {/* PRIVATE OFFICE */}
          <div className="pricing-card">
            <h3>PRIVATE OFFICE</h3>
            <p className="pricing-subtitle">Cheapest private office in ADGM, for teams & companies</p>
            <div className="pricing-price">
             <span className="pricing-strike">6,500</span>{' '}
              AED 4,500<span>/month</span>
            </div>
           <ul className="pricing-features">
  <li>Office address suitable for an ADGM license</li>
  <li>Fully furnished, ready-to-use private office</li>
  <li>Configurable layout to suit your team</li>
  <li>Priority support from our team</li>
  <li>All Dedicated Desk benefits</li>

            </ul>
            <Link to="/contact">
              <button className="btn-pricing-solid">Get Started</button>
            </Link>
          </div>

          {/* VIRTUAL OFFICE */}
          <div className="pricing-card">
            <h3>VIRTUAL OFFICE</h3>
            <p className="pricing-subtitle">Cheapest virtual office in ADGM, registered business address</p>
            <div className="pricing-price">
              <span className="pricing-strike">4,500</span>{' '}
              AED 3,500<span>/year</span>
            </div>
            <ul className="pricing-features">
              <li>Registered ADGM business address</li>
              <li>Mail handling & forwarding</li>
              <li>Company name on on-site directory</li>
              <li>Meeting room credits</li>
              <li>Upgrade to a desk or office anytime</li>
            </ul>
            <Link to="/contact">
              <button className="btn-pricing-solid">Get Started</button>
            </Link>
          </div>

        </div>
      </section>

      <section className="pricing-includes">
        <span className="contact-eyebrow">STANDARD ACROSS EVERY PLAN</span>
        <h2>Every Plan Comes Stocked</h2>
        <div className="includes-grid">
          <div className="includes-item">
            <div className="includes-icon">☕</div>
            <h4>PREMIUM COFFEE</h4>
            <p>Unlimited specialty coffee & tea</p>
          </div>
          <div className="includes-item">
            <div className="includes-icon">📶</div>
            <h4>HIGH-SPEED WIFI</h4>
            <p>Fiber optic internet</p>
          </div>
          <div className="includes-item">
            <div className="includes-icon">🤝</div>
            <h4>NETWORKING EVENTS</h4>
            <p>Monthly community gatherings</p>
          </div>
          <div className="includes-item">
            <div className="includes-icon">📍</div>
            <h4>PRIME LOCATION</h4>
            <p>Heart of ADGM, Al Reem Island</p>
          </div>
        </div>
      </section>

      <section className="vo-faq">
        <span className="contact-eyebrow">COWORKING PRICING</span>
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

      <section className="pricing-cta">
        <motion.div
          className="pricing-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">STILL DECIDING?</span>
          <h2>Let's Find Your Fit</h2>
          <p>Book a free tour and we'll help you pick the plan that actually makes sense for how you work.</p>
          <Link to="/contact">
            <button className="btn-secondary">REQUEST QUOTE</button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

export default Pricing


