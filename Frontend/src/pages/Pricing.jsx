import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Keeps the FAQPage schema's priceValidUntil current without hardcoding a year
const priceValidUntil = `${new Date().getFullYear()}-12-31`

const faqs = [

  {
    q: "What is the cheapest coworking option in ADGM?",
    a: (
      <>
        The <Link to="/office-space">Flexi Desk</Link> is our most affordable coworking option, starting from AED 1,000 per month. It provides access to a professional coworking space in ADGM with high-speed internet and meeting room credits.
      </>
    ),
    plainText: "The Hot Desk is our most affordable coworking option, starting from AED 1,000/month. It provides access to a professional coworking space in ADGM with high-speed internet and meeting room credits.",
  },
  {
    q: "Does the dedicated desk include an ADGM business address?",
    a: (
      <>
        Yes. The <Link to="/office-space">Dedicated Desk</Link> includes an ADGM-eligible business address, 24/7 access, lockable storage, and a dedicated workspace.
      </>
    ),
    plainText: "Yes. The Dedicated Desk includes an ADGM-eligible business address, 24/7 access, lockable storage, and a dedicated workspace.",
  },
  {
    q: "How much does a virtual office cost in ADGM?",
    a: (
      <>
        Aegis Coworking offers <Link to="/virtual-office">virtual office</Link> options in ADGM starting from AED 292 /month for businesses that need a professional ADGM business address without renting a full-time office.
      </>
    ),
    plainText: "Aegis Coworking offers virtual office options in ADGM starting from AED 292 /month for businesses that need a professional ADGM business address without renting a full-time office.",
  },
  {
    q: "Are there any hidden fees for coworking?",
    a: "No. Aegis Coworking provides clear pricing for its coworking space, dedicated desk, private office, and virtual office options. You pay for the plan you choose."
  },
  {
    q: "Does my ADGM Business need physical office space?",
    a: (
      <>
        No — you need a registered office address in ADGM, but not necessarily a private office. At Aegis Coworking in Addax Tower, Dedicated desk can provide a registered ADGM business address, while a <Link to="/private-office">Private Office</Link> gives you a dedicated workspace for your team. This makes Aegis a flexible option if you need an ADGM business address without committing to a traditional office lease.
      </>
    ),
    plainText: "No — you need a registered office address in ADGM, but not necessarily a private office. At Aegis Coworking in Addax Tower, Dedicated Desk can provide a registered ADGM business address, while a Private Office gives you a dedicated workspace for your team. This makes Aegis a flexible option if you need an ADGM business address without committing to a traditional office lease.",
  },

  {
    q: "What are ADGM's flexi desk requirements?",
    a: (
      <>
        ADGM businesses need a qualifying registered office arrangement within ADGM. At Aegis Coworking, our <Link to="/office-space">Dedicated Desk</Link> plan provides a permanent workspace together with a registered ADGM business address. This makes Aegis a suitable, lower-cost option for businesses that need an ADGM registered office. Aegis is located in Addax Tower on Al Reem Island, within the ADGM jurisdiction.
      </>
    ),
    plainText: "ADGM businesses need a qualifying registered office arrangement within ADGM. At Aegis Coworking, our Dedicated Desk plan provides a permanent workspace together with a registered ADGM business address. Aegis is located in Addax Tower on Al Reem Island, within the ADGM jurisdiction.",
  },
  {
    q: "How much does coworking cost in ADGM Abu Dhabi?",
    a: (
      <>
        <Link to="/pricing">Aegis Coworking</Link> in ADGM offers flexi desk from AED 1,000 per month, day pass from AED 100 per day and dedicated desk from AED 1,150 per month. Private office start from AED 4,500 per month, while virtual office plans start from AED 292 per month.
      </>
    ),
    plainText: "Aegis Coworking in ADGM offers flexi desk from AED 1,000 per month, day pass from AED 100 per day and dedicated desk from AED 1,150 per month. Private office start from AED 4,500 per month, while virtual office plans start from AED 292 per month.",
  },

  {
    q: "Hot desk vs flexi desk vs dedicated desk in ADGM — what's the difference?",
    a: (
      <>
        A hot desk at Aegis Coworking is a <Link to="/office-space">flexible</Link> shared workspace and is ideal for individuals or businesses that do not require ADGM's registered business address. A Dedicated Desk provides your own permanent workspace together with a registered ADGM business address and is designed for businesses that need an ADGM flexi desk arrangement. In simple terms, a hot desk is primarily for flexible working, while a dedicated desk is a stronger option when you need both workspace and an ADGM registered office address.
      </>
    ),
    plainText: "A hot desk at Aegis Coworking is a flexible shared workspace ideal for individuals or businesses that do not require ADGM's registered business address. A Dedicated Desk provides your own permanent workspace together with a registered ADGM business address, designed for businesses that need an ADGM flexi desk arrangement. In simple terms, a hot desk is primarily for flexible working, while a dedicated desk is a stronger option when you need both workspace and an ADGM registered office address.",
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
    q: "What should I look for in a coworking space in Abu Dhabi Global Market?",
    a: (
      <>
        When choosing a <Link to="/">coworking space</Link> in Abu Dhabi, consider its location, ADGM eligibility, registered address options, pricing, workspace flexibility and business amenities. Aegis Coworking is located in Addax Tower on Al Reem Island and offers hot desks, dedicated desks, private offices, virtual offices and meeting rooms. For businesses operating in ADGM, Aegis also provides options for an ADGM business address and registered office arrangement.
      </>
    ),
    plainText: "When choosing a coworking space in Abu Dhabi, consider its location, ADGM eligibility, registered address options, pricing, workspace flexibility and business amenities. Aegis Coworking is located in Addax Tower on Al Reem Island and offers hot desks, dedicated desks, private offices, virtual offices and meeting rooms. For businesses operating in ADGM, Aegis also provides options for an ADGM business address and registered office arrangement.",
  },

  {
    q: "What is the ADGM company registration office requirement?",
    a: (
      <>
        An ADGM company needs a registered office <a href="https://maps.google.com/?cid=6229821588759315998&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&source=embed" target="_blank" rel="noopener noreferrer"> address </a>within the ADGM jurisdiction. Aegis Coworking provides registered ADGM business address options through eligible Dedicated Desk and Virtual Office plans, giving businesses an alternative to leasing a traditional private office. If you are looking for an ADGM registered office provider, Aegis is located at Addax Tower on Al Reem Island and offers cheap workspace solutions for startups, SMEs and established businesses.
      </>
    ),
    plainText: "An ADGM company needs a registered office address within the ADGM jurisdiction. Aegis Coworking provides registered ADGM business address options through eligible Dedicated Desk and Virtual Office plans, giving businesses an alternative to leasing a traditional private office. Aegis is located at Addax Tower on Al Reem Island and offers cheap workspace solutions for startups, SMEs and established businesses.",
  },
  
]

function Pricing() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <>
      <Helmet>
       <title>Cheapest Coworking in ADGM – Low-Cost Office from AED 1,000</title>
     <meta name="description" content="Cheap coworking in ADGM & low-cost office from AED 1,000/month. Day pass AED 100/day, virtual office AED 292/month. No hidden fees. Book a free tour." />
        <link rel="canonical" href="https://www.aegiscoworking.ae/pricing" />

       <meta property="og:title" content="Cheapest Coworking in ADGM – Low-Cost Office from AED 1,000" />
      <meta property="og:description" content="Cheap coworking in ADGM & low-cost office from AED 1,000/month. Day pass AED 100/day, virtual office AED 292/month. No hidden fees. Book a free tour." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/pricing" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cheapest Coworking in ADGM – Low-Cost Office from AED 1,000" />
     <meta name="twitter:description" content="Cheap coworking in ADGM & low-cost office from AED 1,000/month. Day pass AED 100/day, virtual office AED 292/month. No hidden fees. Book a free tour." />
        <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.plainText || f.a },
            })),
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "name": "Hot Desk",
                "provider": { "@type": "LocalBusiness", "@id": "https://www.aegiscoworking.ae/#business" },
                "areaServed": "Abu Dhabi",
                "offers": { "@type": "Offer", "price": "1000", "priceCurrency": "AED", "priceValidUntil": priceValidUntil, "url": "https://www.aegiscoworking.ae/pricing" }
              },
              {
                "@type": "Service",
                "name": "Dedicated Desk",
                "provider": { "@type": "LocalBusiness", "@id": "https://www.aegiscoworking.ae/#business" },
                "areaServed": "Abu Dhabi",
                "offers": { "@type": "Offer", "price": "1150", "priceCurrency": "AED", "priceValidUntil": priceValidUntil, "url": "https://www.aegiscoworking.ae/pricing" }
              },
              {
                "@type": "Service",
                "name": "Virtual Office",
                "provider": { "@type": "LocalBusiness", "@id": "https://www.aegiscoworking.ae/#business" },
                "areaServed": "Abu Dhabi",
                "offers": { "@type": "Offer", "price": "292", "priceCurrency": "AED", "priceValidUntil": priceValidUntil, "url": "https://www.aegiscoworking.ae/pricing" }
              },
              {
                "@type": "Service",
                "name": "Private Office",
                "provider": { "@type": "LocalBusiness", "@id": "https://www.aegiscoworking.ae/#business" },
                "areaServed": "Abu Dhabi",
                "offers": { "@type": "Offer", "price": "4500", "priceCurrency": "AED", "priceValidUntil": priceValidUntil, "url": "https://www.aegiscoworking.ae/pricing" }
              }
            ]
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
       <h1>Cheapest Coworking in ADGM – Pricing & Plans</h1>
        <p className="pricing-price-intro">
  Low-cost coworking space and business centre in ADGM, Addax Tower. Plans from only AED 1,000/month. No hidden fees.
</p>
      </section>

      <section className="pricing-section">
        
        <div className="pricing-grid">

          {/* HOT DESK */}
          <div className="pricing-card">
            <h2>FLEXI DESK (HOT DESK)</h2>
            <p className="pricing-subtitle">Shared office space in ADGM, no licence requirement, perfect for freelancers</p>
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
            <h2>DEDICATED DESK</h2>
            <p className="pricing-subtitle"> Office Space in ADGM , your own permanent desk space</p>
            <span className="pricing-save">Save AED 300/month</span>
            <div className="pricing-price">
              <span className="pricing-strike">1,450</span>{' '}
              AED 1,150<span>/month</span>
            </div>
            <ul className="pricing-features">
              <li>Office address suitable for an ADGM license</li>
              <li>24/7 access</li>
              <li>Dedicated lockers for storage</li>
              <li>Extra meeting room credits every month</li>
              <li>Everything included in the Hot Desk plan</li>
            </ul>
            <Link to="/contact">
              <button className="btn-pricing-solid">Get Started</button>
            </Link>
          </div>

          {/* PRIVATE OFFICE */}
          <div className="pricing-card">
            <h2>PRIVATE OFFICE</h2>
            <p className="pricing-subtitle">Your private office space in ADGM, for teams & companies</p>
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
            <h2>VIRTUAL OFFICE</h2>
            <p className="pricing-subtitle">The most affordable way to get a registered ADGM office address</p>
            <div className="pricing-price">
              <span className="pricing-strike">350</span>{' '}
              AED 292<span>/month</span>
            </div>
            <ul className="pricing-features">
              <li>Registered ADGM business address</li>
              <li>Mail handling & forwarding</li>
            <li>Company name on the on-site directory</li>
              <li>Meeting room credits</li>
              <li>Upgrade to a desk or office anytime</li>
            </ul>
            <Link to="/contact">
              <button className="btn-pricing-solid">Get Started</button>
            </Link>
          </div>

          {/* DAY PASS */}
          <div className="pricing-card">
            <h2>DAY PASS</h2>
            <p className="pricing-subtitle">Cheap, flexible office space in ADGM by the day</p>
            <div className="pricing-price">
              AED 100<span>/day</span>
            </div>
            <ul className="pricing-features">
              <li>Full access to the shared coworking floor</li>
              <li>High-speed WiFi</li>
              <li>Premium coffee & tea</li>
              <li>Print & scan access</li>
              <li>No lease, no commitment</li>
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
            <h3>PREMIUM COFFEE</h3>
            <p>Unlimited specialty coffee & tea</p>
          </div>
          <div className="includes-item">
            <div className="includes-icon">📶</div>
            <h3>HIGH-SPEED WIFI</h3>
            <p>Fiber optic internet</p>
          </div>
          <div className="includes-item">
            <div className="includes-icon">🤝</div>
            <h3>NETWORKING EVENTS</h3>
            <p>Monthly community gatherings</p>
          </div>
          <div className="includes-item">
            <div className="includes-icon">📍</div>
            <h3>PRIME LOCATION</h3>
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
                <p className="vo-faq-answer">
                  {f.a}
                  {f.link && (
                    <>
                      {' '}
                      <a href={f.link.url} target="_blank" rel="noopener noreferrer">{f.link.text}</a>
                    </>
                  )}
                </p>
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
