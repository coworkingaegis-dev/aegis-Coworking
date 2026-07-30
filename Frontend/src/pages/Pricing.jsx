// import { Helmet } from 'react-helmet-async'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// function Pricing() {
//   return (
//     <>
//       <Helmet>
//         <title>Coworking Pricing ADGM | Hot Desk AED 1000, Private Office from AED 4500 | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="Transparent coworking pricing at Aegis Coworking, ADGM. Hot desk from AED 1000/month, dedicated desk from AED 1150/month, private office from AED 4500/month. No hidden fees."
//         />
//         <link rel="canonical" href="https://[yourdomain.com]/pricing" />

//         <meta property="og:title" content="Coworking Pricing ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Simple, transparent pricing — hot desks from AED 1000/month, dedicated desks from AED 1150/month, private offices from AED 4500/month."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://[yourdomain.com]/pricing" />
//         <meta property="og:image" content="https://[yourdomain.com]/og-image.jpg" />
//       </Helmet>

//       <Navbar />

//       <section className="pricing-hero">
//         <h1>Simple Plans, Built to Grow With You</h1>
//         <p>No hidden fees. No long-term traps. Just the space you need, priced fairly.</p>
//       </section>


//       <section className="pricing-section">
//         <div className="pricing-grid">

//           {/* HOT DESK */}
//           <div className="pricing-card">
//             <h3>HOT DESK</h3>
//             <p className="pricing-subtitle">Perfect for freelancers</p>
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
//               <button className="btn-pricing-ghost">Get Started</button>
//             </Link>
//           </div>

//           {/* DEDICATED DESK — POPULAR */}
//           <div className="pricing-card pricing-card-popular">
//             <span className="pricing-badge">MOST POPULAR</span>
//             <h3>DEDICATED DESK</h3>
//             <p className="pricing-subtitle">Your own workspace</p>
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
//             <p className="pricing-subtitle">For teams & companies</p>
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
//               <button className="btn-pricing-ghost">Get Started</button>
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





// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const faqs = [
//   {
//     q: "How much does coworking cost in ADGM?",
//     a: "At Aegis Coworking, hot desks start from AED 1,000/month, dedicated desks from AED 1,150/month, and private offices from AED 4,500/month.",
//   },
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
//         <title>Coworking Pricing ADGM | Hot Desk AED 1000, Private Office from AED 4500 | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="Cheapest coworking space and dedicated desk pricing in ADGM, Al Reem Island. Hot desk from AED 1000/month, dedicated desk from AED 1150/month, private office from AED 4500/month. No hidden fees."
//         />
//         <link rel="canonical" href="https://aegis-coworking.vercel.app/pricing" />

//         <meta property="og:title" content="Coworking Pricing ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Simple, transparent pricing — hot desks from AED 1000/month, dedicated desks from AED 1150/month, private offices from AED 4500/month."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://aegis-coworking.vercel.app/pricing" />
//         <meta property="og:image" content="https://aegis-coworking.vercel.app/og-image.jpg" />

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
//                 "url": "https://aegis-coworking.vercel.app/pricing",
//               },
//               {
//                 "@type": "Offer",
//                 "name": "Dedicated Desk",
//                 "price": "1150",
//                 "priceCurrency": "AED",
//                 "priceValidUntil": "2026-12-31",
//                 "url": "https://aegis-coworking.vercel.app/pricing",
//               },
//               {
//                 "@type": "Offer",
//                 "name": "Private Office",
//                 "price": "4500",
//                 "priceCurrency": "AED",
//                 "priceValidUntil": "2026-12-31",
//                 "url": "https://aegis-coworking.vercel.app/pricing",
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
//           <div className="pricing-card pricing-card-popular">
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











// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const faqs = [
//   {
//     q: "How much does coworking cost in ADGM?",
//     a: "At Aegis Coworking, hot desks start from AED 1,000/month, dedicated desks from AED 1,150/month, and private offices from AED 4,500/month.",
//   },
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
//         <title>Coworking Pricing ADGM | Hot Desk AED 1000, Private Office from AED 4500 | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="Cheapest coworking space and dedicated desk pricing in ADGM, Al Reem Island. Hot desk from AED 1000/month, dedicated desk from AED 1150/month, private office from AED 4500/month. No hidden fees."
//         />
//         <link rel="canonical" href="https://www.aegiscoworking.ae/pricing" />

//         <meta property="og:title" content="Coworking Pricing ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Simple, transparent pricing — hot desks from AED 1000/month, dedicated desks from AED 1150/month, private offices from AED 4500/month."
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
//           <div className="pricing-card pricing-card-popular">
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
    q: "How much does coworking cost in ADGM?",
    a: "At Aegis Coworking, hot desks start from AED 1,000/month, dedicated desks from AED 1,150/month, and private offices from AED 4,500/month.",
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
        <title>Coworking Space Pricing Abu Dhabi | Hot Desks, Private Offices | Aegis Coworking | ADGM Office Plans </title>
        <meta
          name="description"
          content="Compare coworking space pricing in Abu Dhabi. Explore hot desks from AED 1,000/month, dedicated desks from AED 1,150/month, and private offices from AED 4,500/month at Aegis Coworking in ADGM."
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/pricing" />

        <meta property="og:title" content="Coworking Pricing ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="Simple, transparent pricing — hot desks from AED 1000/month, dedicated desks from AED 1150/month, private offices from AED 4500/month."
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
    Compare flexible coworking space pricing in Abu Dhabi. Choose from hot desks, dedicated desks, and private offices in ADGM with transparent monthly plans.
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
              <li>Access to shared workspace</li>
              <li>High-speed internet</li>
              <li>Meeting room credits</li>
              <li>Community events access</li>
              <li>Premium coffee & tea</li>
            </ul>
            <Link to="/contact">
              <button className="btn-pricing-solid">Get Started</button>
            </Link>
          </div>

          {/* DEDICATED DESK — POPULAR */}
          <div className="pricing-card pricing-card-popular">
            <span className="pricing-badge">MOST POPULAR</span>
            <h3>DEDICATED DESK</h3>
            <p className="pricing-subtitle">Dedicated desk membership with your own workspace and ADGM business address.</p>
            <span className="pricing-save">Save AED 250/month</span>
            <div className="pricing-price">
              <span className="pricing-strike">AED 1,450</span>{' '}
              AED 1,150<span>/month</span>
            </div>
            <ul className="pricing-features">
              <li>Your own dedicated desk</li>
              <li>Office address suitable for an ADGM license</li>
              <li>24/7 access</li>
              <li>Lockable storage</li>
              <li>More meeting room credits</li>
              <li>All Hot Desk benefits</li>
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
              From AED 4,500<span>/month</span>
            </div>
            <ul className="pricing-features">
              <li>Fully furnished private office</li>
              <li>Customizable space</li>
              <li>Unlimited meeting rooms</li>
              <li>Priority support</li>
              <li>All Dedicated Desk benefits</li>
            </ul>
            <Link to="/contact">
              <button className="btn-pricing-solid">Get Started</button>
            </Link>
          </div>

        </div>
      </section>

      <section className="pricing-includes">
        <span className="contact-eyebrow">STANDARD ACROSS EVERY PLAN</span>
        <h2>Everything Included with Every Membership</h2>
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
\
