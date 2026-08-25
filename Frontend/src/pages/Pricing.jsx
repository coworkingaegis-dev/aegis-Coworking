// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const faqs = [
//   {
//   q: "How much does coworking cost in Abu Dhabi (ADGM)?",
//   a: "At Aegis Coworking, the cheapest coworking space in Abu Dhabi's ADGM district starts from AED 1,000/month for a hot desk, AED 1,150/month for a dedicated desk, and AED 4,500/month for a private office.",
// },
//   {
//     q: "Is there a cheaper option than a dedicated desk?",
//     a: "Yes, our Hot Desk plan starts from AED 1,000/month and gives you access to shared workspace, high-speed internet, and meeting room credits.",
//   },
//   {
//     q: "Does the dedicated desk plan include an ADGM-eligible address?",
//     a: "Yes, the Dedicated Desk plan includes an office address suitable for an ADGM licence application, along with 24/7 access and lockable storage.",
//   },
//   {
//     q: "Are there any hidden fees?",
//     a: "No. Our pricing is transparent with no hidden fees or long-term contracts — you only pay for the plan you choose.",
//   },
// ]

// function Pricing() {
//   const [openIndex, setOpenIndex] = useState(null)

//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i)
//   }

//   return (
//     <>
//       <Helmet>
//        <title>Cheapest Coworking Space in Abu Dhabi | Aegis Coworking</title>
//         <meta
//           name="description"
//            content="Compare Aegis Coworking's ADGM pricing in Abu Dhabi: hot desks from AED 1,000, dedicated desks from AED 1,150, private offices from AED 4,500/month."
//         />
//         <link rel="canonical" href="https://www.aegiscoworking.ae/pricing" />

//         <meta property="og:title" content="Cheapest Coworking Space in Abu Dhabi | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Compare Aegis Coworking's ADGM pricing in Abu Dhabi — hot desks from AED 1,000, dedicated desks from AED 1,150, private offices from AED 4,500/month."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.aegiscoworking.ae/pricing" />
//         <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             "mainEntity": faqs.map((f) => ({
//               "@type": "Question",
//               "name": f.q,
//               "acceptedAnswer": { "@type": "Answer", "text": f.a },
//             })),
//           })}
//         </script>

//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "ItemList",
//             "itemListElement": [
//               {
//                 "@type": "Offer",
//                 "name": "Hot Desk",
//                 "price": "1000",
//                 "priceCurrency": "AED",
//                 "priceValidUntil": "2026-12-31",
//                 "url": "https://www.aegiscoworking.ae/pricing",
//               },
//               {
//                 "@type": "Offer",
//                 "name": "Dedicated Desk",
//                 "price": "1150",
//                 "priceCurrency": "AED",
//                 "priceValidUntil": "2026-12-31",
//                 "url": "https://www.aegiscoworking.ae/pricing",
//               },
//               {
//                 "@type": "Offer",
//                 "name": "Private Office",
//                 "price": "4500",
//                 "priceCurrency": "AED",
//                 "priceValidUntil": "2026-12-31",
//                 "url": "https://www.aegiscoworking.ae/pricing",
//               },
//             ],
//           })}
//         </script>
//       </Helmet>

//       <Navbar />

//      <section className="pricing-hero">
//   <h1>DISCOUNTED PRICES</h1>
//   <p className="pricing-price-intro">
//     Cheapest coworking and dedicated desk pricing in ADGM — hot desk from AED 1,000/month. No hidden fees.
//   </p>
// </section>

//       <section className="pricing-section">
//         <div className="pricing-grid">

//           {/* HOT DESK */}
//           <div className="pricing-card">
//             <h3>HOT DESK</h3>
//             <p className="pricing-subtitle">Cheapest hot desk price in ADGM, perfect for freelancers</p>
//             <div className="pricing-price">
//               AED 1,000<span>/month</span>
//             </div>
//             <ul className="pricing-features">
//               <li>Access to shared workspace</li>
//               <li>High-speed internet</li>
//               <li>Meeting room credits</li>
//               <li>Community events access</li>
//               <li>Premium coffee & tea</li>
//             </ul>
//             <Link to="/contact">
//               <button className="btn-pricing-solid">Get Started</button>
//             </Link>
//           </div>

//           {/* DEDICATED DESK — POPULAR */}
//           <div className="pricing-card">
//             <span className="pricing-badge">MOST POPULAR</span>
//             <h3>DEDICATED DESK</h3>
//             <p className="pricing-subtitle">Cheapest dedicated desk in ADGM, your own workspace</p>
//             <span className="pricing-save">Save AED 250/month</span>
//             <div className="pricing-price">
//               <span className="pricing-strike">AED 1,450</span>{' '}
//               AED 1,150<span>/month</span>
//             </div>
//             <ul className="pricing-features">
//               <li>Your own dedicated desk</li>
//               <li>Office address suitable for an ADGM license</li>
//               <li>24/7 access</li>
//               <li>Lockable storage</li>
//               <li>More meeting room credits</li>
//               <li>All Hot Desk benefits</li>
//             </ul>
//             <Link to="/contact">
//               <button className="btn-pricing-solid">Get Started</button>
//             </Link>
//           </div>

//           {/* PRIVATE OFFICE */}
//           <div className="pricing-card">
//             <h3>PRIVATE OFFICE</h3>
//             <p className="pricing-subtitle">Cheapest private office in ADGM, for teams & companies</p>
//             <div className="pricing-price">
//               From AED 4,500<span>/month</span>
//             </div>
//             <ul className="pricing-features">
//               <li>Fully furnished private office</li>
//               <li>Customizable space</li>
//               <li>Unlimited meeting rooms</li>
//               <li>Priority support</li>
//               <li>All Dedicated Desk benefits</li>
//             </ul>
//             <Link to="/contact">
//               <button className="btn-pricing-solid">Get Started</button>
//             </Link>
//           </div>

//         </div>
//       </section>

//       <section className="pricing-includes">
//         <span className="contact-eyebrow">STANDARD ACROSS EVERY PLAN</span>
//         <h2>Every Plan Comes Stocked</h2>
//         <div className="includes-grid">
//           <div className="includes-item">
//             <div className="includes-icon">☕</div>
//             <h4>PREMIUM COFFEE</h4>
//             <p>Unlimited specialty coffee & tea</p>
//           </div>
//           <div className="includes-item">
//             <div className="includes-icon">📶</div>
//             <h4>HIGH-SPEED WIFI</h4>
//             <p>Fiber optic internet</p>
//           </div>
//           <div className="includes-item">
//             <div className="includes-icon">🤝</div>
//             <h4>NETWORKING EVENTS</h4>
//             <p>Monthly community gatherings</p>
//           </div>
//           <div className="includes-item">
//             <div className="includes-icon">📍</div>
//             <h4>PRIME LOCATION</h4>
//             <p>Heart of ADGM, Al Reem Island</p>
//           </div>
//         </div>
//       </section>

//       <section className="vo-faq">
//         <span className="contact-eyebrow">COWORKING PRICING</span>
//         <h2>FREQUENTLY ASKED QUESTIONS</h2>
//         <div className="vo-faq-list">
//           {faqs.map((f, i) => (
//             <div
//               className={`vo-faq-item ${openIndex === i ? 'open' : ''}`}
//               key={i}
//               onClick={() => toggleFAQ(i)}
//             >
//               <div className="vo-faq-question">
//                 {f.q}
//                 <span className="vo-faq-toggle">{openIndex === i ? '−' : '+'}</span>
//               </div>
//               <div className="vo-faq-answer-wrap">
//                 <p className="vo-faq-answer">{f.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="pricing-cta">
//         <motion.div
//           className="pricing-cta-card"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="contact-eyebrow">STILL DECIDING?</span>
//           <h2>Let's Find Your Fit</h2>
//           <p>Book a free tour and we'll help you pick the plan that actually makes sense for how you work.</p>
//           <Link to="/contact">
//             <button className="btn-secondary">REQUEST QUOTE</button>
//           </Link>
//         </motion.div>
//       </section>

//       <Footer />
//     </>
//   )
// }

// export default Pricing














import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  {
  q: "How much does coworking cost in Abu Dhabi (ADGM)?",
  a: "At Aegis Coworking, the cheapest coworking space in Abu Dhabi's ADGM district starts from AED 1,000/month for a hot desk, AED 1,150/month for a dedicated desk, AED 3,500/month for a virtual office, and AED 4,500/month for a private office.",
},
  {
    q: "Is there a cheaper option than a dedicated desk?",
    a: "Yes, our Hot Desk plan starts from AED 1,000/month and gives you access to shared workspace, high-speed internet, and meeting room credits.",
  },
  {
    q: "Does the dedicated desk plan include an ADGM-eligible address?",
    a: "Yes, the Dedicated Desk plan includes an office address suitable for an ADGM licence application, along with 24/7 access and lockable storage.",
  },
  {
    q: "How much does a virtual office cost in ADGM?",
    a: "Aegis Coworking's virtual office starts from AED 3,500/month and includes a registered ADGM business address suitable for company registration, without requiring a physical desk.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Our pricing is transparent with no hidden fees or long-term contracts — you only pay for the plan you choose.",
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
       <title>Cheapest Coworking Space in Abu Dhabi | Aegis Coworking</title>
        <meta
          name="description"
           content="Compare Aegis Coworking's ADGM pricing in Abu Dhabi: hot desks from AED 1,000, dedicated desks from AED 1,150, virtual offices from AED 3,500, private offices from AED 4,500/month."
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/pricing" />

        <meta property="og:title" content="Cheapest Coworking Space in Abu Dhabi | Aegis Coworking" />
        <meta
          property="og:description"
          content="Compare Aegis Coworking's ADGM pricing in Abu Dhabi — hot desks from AED 1,000, dedicated desks from AED 1,150, virtual offices from AED 3,500, private offices from AED 4,500/month."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/pricing" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

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
              <span className="pricing-strike">AED 1,450</span>{' '}
              AED 1,150<span>/month</span>
            </div>
           <ul className="pricing-features">
  <li>Office address suitable for an ADGM license</li>
  <li>Complimentary corporate VAT and Tax registration support</li>
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
              AED 4,500<span>/month</span>
            </div>
            <ul className="pricing-features">
              <li>Office address suitable for an ADGM license</li>
  <li>Complimentary corporate VAT and Tax registration support</li>
              <ul className="pricing-features">
  <li>Fully furnished, ready-to-use private office</li>
  <li>Configurable layout to suit your team</li>
  <li>Priority support from our team</li>
  <li>All Dedicated Desk benefits</li>
</ul>
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


