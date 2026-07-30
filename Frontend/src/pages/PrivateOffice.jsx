// import { Helmet } from 'react-helmet-async'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// import smallOfficeImg from '../assets/po-small.jpg'
// import mediumOfficeImg from '../assets/po-medium.jpg'
// import largeOfficeImg from '../assets/po-large.jpeg'

// function PrivateOffice() {
//   return (
//     <div className="App">
//       <Helmet>
//         <title>Private Office ADGM | Suites from AED 4500/month | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="Private, lockable offices in ADGM, Addax Tower, from AED 4500/month. Fully furnished, 24/7 access, ADGM licence-ready suites for teams of 1 to 20+."
//         />
//         <link rel="canonical" href="https://[yourdomain.com]/private-office" />

//         <meta property="og:title" content="Private Office ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Lockable, fully furnished private offices in ADGM, Addax Tower, from AED 4500/month."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://[yourdomain.com]/private-office" />
//         <meta property="og:image" content="https://[yourdomain.com]/og-image.jpg" />
//       </Helmet>

//       <Navbar />

//       {/* Page Hero */}
//       <section className="page-hero">
//         <h1>PRIVATE OFFICES IN ADGM</h1>
//         <p>PRIVATE SUITE | 24/7 ACCESS | ADGM LICENSED</p>
//       </section>

     

//       {/* Own Private Office */}
//       <section className="business-presence">
//         <span className="contact-eyebrow">HOW IT WORKS</span>
//         <h2>Your Own Private Office Inside ADGM</h2>
//         <p className="bp-intro">
//           Our private offices are located at 2312 Addax Tower, Al Reem Island, right in the heart
//           of ADGM. Each space is lockable, fully furnished and ready for your ADGM licence, giving
//           your team the privacy of a traditional office with the amenities and flexibility of a
//           modern business centre.
//         </p>

//         <div className="bp-columns">
//           <div className="bp-column">
//             <div className="bp-column-icon">🔒</div>
//             <h4>PRIVATE OFFICE FEATURES</h4>
//             <ul>
//               <li>Lockable private suite with 24/7 secure access inside ADGM</li>
//               <li>Fully furnished with ergonomic desks, chairs and storage</li>
//               <li>Configurable for teams of 1 to 20+ professionals</li>
//               <li>Registered address for your ADGM commercial licence</li>
//               <li>Professional setting for client meetings and regulator visits</li>
//             </ul>
//           </div>
//           <div className="bp-column">
//             <div className="bp-column-icon">🛎️</div>
//             <h4>SERVICES INCLUDED</h4>
//             <ul>
//               <li>High-speed fibre internet and secure WiFi</li>
//               <li>Dedicated phone line with live call answering</li>
//               <li>Access to ADGM meeting rooms and the business lounge</li>
//               <li>Mail handling and package receiving at Addax Tower</li>
//               <li>Kitchen, breakout lounge, printing and scanning</li>
//               <li>Daily professional cleaning and building maintenance</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Small Office */}
//       <section className="vo-tier">
//         <div className="vo-tier-image">
//           <img src={smallOfficeImg} alt="Small ADGM Private Office" />
//         </div>
//         <div className="vo-tier-content">
//           <span className="vo-tier-badge" style={{ background: '#e5e5e0', color: 'var(--color-primary)' }}>SMALL</span>
//           <p className="vo-tier-eyebrow">Perfect for 1-4 people</p>
//           <h3>SMALL ADGM PRIVATE OFFICE</h3>
//           <p>
//             An ideal first home inside Abu Dhabi Global Market for founders, small teams and
//             advisory firms. Your suite is licensed-ready for ADGM, fully furnished and accessible
//             24/7, while you stay plugged into the wider community on our coworking floor. Includes
//             dedicated desks, ergonomic chairs, lockable storage and high-speed internet, all
//             configurable to match how your team works.
//           </p>
//           <div className="vo-tier-buttons">
//             <Link to="/contact">
//               <button className="btn-vo-primary">REQUEST QUOTE</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Medium Office */}
//       <section className="vo-tier vo-tier-reverse">
//         <div className="vo-tier-image">
//           <img src={mediumOfficeImg} alt="Medium ADGM Private Office" />
//         </div>
//         <div className="vo-tier-content">
//           <span className="vo-tier-badge" style={{ background: '#fdeecb', color: '#b8860b' }}>MEDIUM</span>
//           <p className="vo-tier-eyebrow">Perfect for 5-10 people</p>
//           <h3>MEDIUM ADGM PRIVATE OFFICE</h3>
//           <p>
//             Built for growing ADGM-licensed teams that need more room to operate. These suites
//             give you space for client meetings, internal collaboration and focused work, all
//             within Abu Dhabi Global Market. Includes dedicated breakout areas, secure storage and
//             a layout you can adapt as headcount grows. Well suited to established startups,
//             regulated firms and regional offices of international businesses.
//           </p>
//           <div className="vo-tier-buttons">
//             <Link to="/contact">
//               <button className="btn-vo-primary">REQUEST QUOTE</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Large Office */}
//       <section className="vo-tier">
//         <div className="vo-tier-image">
//           <img src={largeOfficeImg} alt="Large ADGM Private Office" />
//         </div>
//         <div className="vo-tier-content">
//           <span className="vo-tier-badge" style={{ background: '#e8e0f7', color: '#5b3ea6' }}>LARGE</span>
//           <p className="vo-tier-eyebrow">Perfect for 10+ people</p>
//           <h3>LARGE ADGM PRIVATE OFFICE</h3>
//           <p>
//             Spacious suites at Addax Tower for established ADGM-licensed companies and larger
//             teams. These premium offices can be fully branded and configured to support multiple
//             work zones, private meeting areas and secure storage. The right choice for financial
//             services firms, regional headquarters and regulated entities that want a discreet,
//             high-performance base inside Abu Dhabi Global Market.
//           </p>
//           <div className="vo-tier-buttons">
//             <Link to="/contact">
//               <button className="btn-vo-primary">REQUEST QUOTE</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Inquiry CTA */}
//       <section className="inquiry-cta">
//         <motion.div
//           className="inquiry-cta-card"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="contact-eyebrow">GET STARTED</span>
//           <h2>Find Your Private Office Today</h2>
//           <p>
//             Looking to set up or move your team into a private office inside Abu Dhabi Global
//             Market? Tell us about your headcount and licence requirements and we'll match you
//             with the right suite at Addax Tower — no obligation.
//           </p>
//           <Link to="/contact">
//             <button className="btn-join-now">REQUEST QUOTE</button>
//           </Link>
//         </motion.div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default PrivateOffice







// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// import smallOfficeImg from '../assets/po-small.jpg'
// import mediumOfficeImg from '../assets/po-medium.jpg'
// import largeOfficeImg from '../assets/po-large.jpeg'

// const faqs = [
//   {
//     q: "How much does a private office cost in ADGM?",
//     a: "Private offices at Aegis Coworking start from AED 4,500/month, with pricing depending on team size and suite configuration.",
//   },
//   {
//     q: "Can a private office be used for ADGM company registration?",
//     a: "Yes. Each private office suite comes with a registered address suitable for your ADGM commercial licence application.",
//   },
//   {
//     q: "Is 24/7 access included with a private office?",
//     a: "Yes, every private office suite includes 24/7 secure, lockable access.",
//   },
//   {
//     q: "How many people can a private office accommodate?",
//     a: "Our private offices are configurable for teams of 1 to 20+ professionals, with Small, Medium, and Large suite options.",
//   },
// ]

// function PrivateOffice() {
//   const [openIndex, setOpenIndex] = useState(null)

//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i)
//   }

//   return (
//     <div className="App">
//       <Helmet>
//         <title>Private Office ADGM | Suites from AED 4500/month | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="Private, lockable offices in ADGM, Addax Tower, from AED 4500/month. Fully furnished, 24/7 access, ADGM licence-ready suites for teams of 1 to 20+."
//         />
//         <link rel="canonical" href="https://aegis-coworking.vercel.app/private-office" />

//         <meta property="og:title" content="Private Office ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Lockable, fully furnished private offices in ADGM, Addax Tower, from AED 4500/month."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://aegis-coworking.vercel.app/private-office" />
//         <meta property="og:image" content="https://aegis-coworking.vercel.app/og-image.jpg" />

//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             "mainEntity": faqs.map((f) => ({
//               "@type": "Question",
//               "name": f.q,
//               "acceptedAnswer": {
//                 "@type": "Answer",
//                 "text": f.a,
//               },
//             })),
//           })}
//         </script>
//       </Helmet>

//       <Navbar />

//       {/* Page Hero */}
//       <section className="page-hero">
//         <h1>PRIVATE OFFICES IN ADGM</h1>
//         <p>PRIVATE SUITE | 24/7 ACCESS | ADGM LICENSED</p>
//       </section>

//       {/* Own Private Office */}
//       <section className="business-presence">
//         <span className="contact-eyebrow">HOW IT WORKS</span>
//         <h2>Your Own Private Office Inside ADGM</h2>
//         <p className="bp-intro">
//           Our private offices are located at 2312 Addax Tower, Al Reem Island, right in the heart
//           of ADGM. Each space is lockable, fully furnished and ready for your ADGM licence, giving
//           your team the privacy of a traditional office with the amenities and flexibility of a
//           modern business centre.
//         </p>

//         <div className="bp-columns">
//           <div className="bp-column">
//             <div className="bp-column-icon">🔒</div>
//             <h4>PRIVATE OFFICE FEATURES</h4>
//             <ul>
//               <li>Lockable private suite with 24/7 secure access inside ADGM</li>
//               <li>Fully furnished with ergonomic desks, chairs and storage</li>
//               <li>Configurable for teams of 1 to 20+ professionals</li>
//               <li>Registered address for your ADGM commercial licence</li>
//               <li>Professional setting for client meetings and regulator visits</li>
//             </ul>
//           </div>
//           <div className="bp-column">
//             <div className="bp-column-icon">🛎️</div>
//             <h4>SERVICES INCLUDED</h4>
//             <ul>
//               <li>High-speed fibre internet and secure WiFi</li>
//               <li>Dedicated phone line with live call answering</li>
//               <li>Access to ADGM meeting rooms and the business lounge</li>
//               <li>Mail handling and package receiving at Addax Tower</li>
//               <li>Kitchen, breakout lounge, printing and scanning</li>
//               <li>Daily professional cleaning and building maintenance</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Small Office */}
//       <section className="vo-tier">
//         <div className="vo-tier-image">
//           <img src={smallOfficeImg} alt="Small ADGM Private Office" />
//         </div>
//         <div className="vo-tier-content">
//           <span className="vo-tier-badge" style={{ background: '#e5e5e0', color: 'var(--color-primary)' }}>SMALL</span>
//           <p className="vo-tier-eyebrow">Perfect for 1-4 people</p>
//           <h3>SMALL ADGM PRIVATE OFFICE</h3>
//           <p>
//             An ideal first home inside Abu Dhabi Global Market for founders, small teams and
//             advisory firms. Your suite is licensed-ready for ADGM, fully furnished and accessible
//             24/7, while you stay plugged into the wider community on our coworking floor. Includes
//             dedicated desks, ergonomic chairs, lockable storage and high-speed internet, all
//             configurable to match how your team works.
//           </p>
//           <div className="vo-tier-buttons">
//             <Link to="/contact">
//               <button className="btn-vo-primary">REQUEST QUOTE</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Medium Office */}
//       <section className="vo-tier vo-tier-reverse">
//         <div className="vo-tier-image">
//           <img src={mediumOfficeImg} alt="Medium ADGM Private Office" />
//         </div>
//         <div className="vo-tier-content">
//           <span className="vo-tier-badge" style={{ background: '#fdeecb', color: '#b8860b' }}>MEDIUM</span>
//           <p className="vo-tier-eyebrow">Perfect for 5-10 people</p>
//           <h3>MEDIUM ADGM PRIVATE OFFICE</h3>
//           <p>
//             Built for growing ADGM-licensed teams that need more room to operate. These suites
//             give you space for client meetings, internal collaboration and focused work, all
//             within Abu Dhabi Global Market. Includes dedicated breakout areas, secure storage and
//             a layout you can adapt as headcount grows. Well suited to established startups,
//             regulated firms and regional offices of international businesses.
//           </p>
//           <div className="vo-tier-buttons">
//             <Link to="/contact">
//               <button className="btn-vo-primary">REQUEST QUOTE</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Large Office */}
//       <section className="vo-tier">
//         <div className="vo-tier-image">
//           <img src={largeOfficeImg} alt="Large ADGM Private Office" />
//         </div>
//         <div className="vo-tier-content">
//           <span className="vo-tier-badge" style={{ background: '#e8e0f7', color: '#5b3ea6' }}>LARGE</span>
//           <p className="vo-tier-eyebrow">Perfect for 10+ people</p>

//           <h3>EXECUTIVE OFFICE SPACE, ADDAX TOWER</h3>
//           <p>
//             Spacious, luxury office space in Abu Dhabi's financial district at Addax Tower, built
//             for established ADGM-licensed companies and larger teams. These premium offices can be
//             fully branded and configured to support multiple work zones, private meeting areas and
//             secure storage. The right choice for financial services firms, regional headquarters
//             and regulated entities that want a discreet, high-performance base inside Abu Dhabi
//             Global Market.
//           </p>
//           <div className="vo-tier-buttons">
//             <Link to="/contact">
//               <button className="btn-vo-primary">REQUEST QUOTE</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="vo-faq">
//         <span className="contact-eyebrow">PRIVATE OFFICE ADGM</span>
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

//       {/* Inquiry CTA */}
//       <section className="inquiry-cta">
//         <motion.div
//           className="inquiry-cta-card"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="contact-eyebrow">GET STARTED</span>
//           <h2>Find Your Private Office Today</h2>
//           <p>
//             Looking to set up or move your team into a private office inside Abu Dhabi Global
//             Market? Tell us about your headcount and licence requirements and we'll match you
//             with the right suite at Addax Tower — no obligation.
//           </p>
//           <Link to="/contact">
//             <button className="btn-join-now">REQUEST QUOTE</button>
//           </Link>
//         </motion.div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default PrivateOffice















// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// import smallOfficeImg from '../assets/po-small.jpg'
// import mediumOfficeImg from '../assets/po-medium.jpg'
// import largeOfficeImg from '../assets/po-large.jpeg'

// const faqs = [
//   {
//     q: "How much does a private office cost in ADGM?",
//     a: "Private offices at Aegis Coworking start from AED 4,500/month, with pricing depending on team size and suite configuration.",
//   },
//   {
//     q: "Can a private office be used for ADGM company registration?",
//     a: "Yes. Each private office suite comes with a registered address suitable for your ADGM commercial licence application.",
//   },
//   {
//     q: "Is 24/7 access included with a private office?",
//     a: "Yes, every private office suite includes 24/7 secure, lockable access.",
//   },
//   {
//     q: "How many people can a private office accommodate?",
//     a: "Our private offices are configurable for teams of 1 to 20+ professionals, with Small, Medium, and Large suite options.",
//   },
// ]

// function PrivateOffice() {
//   const [openIndex, setOpenIndex] = useState(null)

//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i)
//   }

//   return (
//     <div className="App">
//       <Helmet>
//         <title>Private Office ADGM | Suites from AED 4500/month | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="Private, lockable offices in ADGM, Addax Tower, from AED 4500/month. Fully furnished, 24/7 access, ADGM licence-ready suites for teams of 1 to 20+."
//         />
//         <link rel="canonical" href="https://www.aegiscoworking.ae/private-office" />

//         <meta property="og:title" content="Private Office ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Lockable, fully furnished private offices in ADGM, Addax Tower, from AED 4500/month."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.aegiscoworking.ae/private-office" />
//         <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             "mainEntity": faqs.map((f) => ({
//               "@type": "Question",
//               "name": f.q,
//               "acceptedAnswer": {
//                 "@type": "Answer",
//                 "text": f.a,
//               },
//             })),
//           })}
//         </script>
//       </Helmet>

//       <Navbar />

//       {/* Page Hero */}
//       <section className="page-hero">
//         <h1>PRIVATE OFFICES IN ADGM</h1>
//         <p>PRIVATE SUITE | 24/7 ACCESS | ADGM LICENSED</p>
//       </section>

//       {/* Own Private Office */}
//       <section className="business-presence">
//         <span className="contact-eyebrow">HOW IT WORKS</span>
//         <h2>Your Own Private Office Inside ADGM</h2>
//         <p className="bp-intro">
//           Our private offices are located at Addax Tower, Al Reem Island, right in the heart
//           of ADGM. Each space is lockable, fully furnished and ready for your ADGM licence, giving
//           your team the privacy of a traditional office with the amenities and flexibility of a
//           modern business centre.
//         </p>

//         <div className="bp-columns">
//           <div className="bp-column">
//             <div className="bp-column-icon">🔒</div>
//             <h4>PRIVATE OFFICE FEATURES</h4>
//             <ul>
//               <li>Lockable private suite with 24/7 secure access inside ADGM</li>
//               <li>Fully furnished with ergonomic desks, chairs and storage</li>
//               <li>Configurable for teams of 1 to 20+ professionals</li>
//               <li>Registered address for your ADGM commercial licence</li>
//               <li>Professional setting for client meetings and regulator visits</li>
//             </ul>
//           </div>
//           <div className="bp-column">
//             <div className="bp-column-icon">🛎️</div>
//             <h4>SERVICES INCLUDED</h4>
//             <ul>
//               <li>High-speed fibre internet and secure WiFi</li>
//               <li>Dedicated phone line with live call answering</li>
//               <li>Access to ADGM meeting rooms and the business lounge</li>
//               <li>Mail handling and package receiving at Addax Tower</li>
//               <li>Kitchen, breakout lounge, printing and scanning</li>
//               <li>Daily professional cleaning and building maintenance</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Small Office */}
//       <section className="vo-tier">
//         <div className="vo-tier-image">
//           <img src={smallOfficeImg} alt="Small ADGM Private Office" />
//         </div>
//         <div className="vo-tier-content">
//           <span className="vo-tier-badge" style={{ background: '#e5e5e0', color: 'var(--color-primary)' }}>SMALL</span>
//           <p className="vo-tier-eyebrow">Perfect for 1-4 people</p>
//           <h3>SMALL ADGM PRIVATE OFFICE</h3>
//           <p>
//             An ideal first home inside Abu Dhabi Global Market for founders, small teams and
//             advisory firms. Your suite is licensed-ready for ADGM, fully furnished and accessible
//             24/7, while you stay plugged into the wider community on our coworking floor. Includes
//             dedicated desks, ergonomic chairs, lockable storage and high-speed internet, all
//             configurable to match how your team works.
//           </p>
//           <div className="vo-tier-buttons">
//             <Link to="/contact">
//               <button className="btn-vo-primary">REQUEST QUOTE</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Medium Office */}
//       <section className="vo-tier vo-tier-reverse">
//         <div className="vo-tier-image">
//           <img src={mediumOfficeImg} alt="Medium ADGM Private Office" />
//         </div>
//         <div className="vo-tier-content">
//           <span className="vo-tier-badge" style={{ background: '#fdeecb', color: '#b8860b' }}>MEDIUM</span>
//           <p className="vo-tier-eyebrow">Perfect for 5-10 people</p>
//           <h3>MEDIUM ADGM PRIVATE OFFICE</h3>
//           <p>
//             Built for growing ADGM-licensed teams that need more room to operate. These suites
//             give you space for client meetings, internal collaboration and focused work, all
//             within Abu Dhabi Global Market. Includes dedicated breakout areas, secure storage and
//             a layout you can adapt as headcount grows. Well suited to established startups,
//             regulated firms and regional offices of international businesses.
//           </p>
//           <div className="vo-tier-buttons">
//             <Link to="/contact">
//               <button className="btn-vo-primary">REQUEST QUOTE</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Large Office */}
//       <section className="vo-tier">
//         <div className="vo-tier-image">
//           <img src={largeOfficeImg} alt="Large ADGM Private Office" />
//         </div>
//         <div className="vo-tier-content">
//           <span className="vo-tier-badge" style={{ background: '#e8e0f7', color: '#5b3ea6' }}>LARGE</span>
//           <p className="vo-tier-eyebrow">Perfect for 10+ people</p>

//           <h3>EXECUTIVE OFFICE SPACE, ADDAX TOWER</h3>
//           <p>
//             Spacious, luxury office space in Abu Dhabi's financial district at Addax Tower, built
//             for established ADGM-licensed companies and larger teams. These premium offices can be
//             fully branded and configured to support multiple work zones, private meeting areas and
//             secure storage. The right choice for financial services firms, regional headquarters
//             and regulated entities that want a discreet, high-performance base inside Abu Dhabi
//             Global Market.
//           </p>
//           <div className="vo-tier-buttons">
//             <Link to="/contact">
//               <button className="btn-vo-primary">REQUEST QUOTE</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="vo-faq">
//         <span className="contact-eyebrow">PRIVATE OFFICE ADGM</span>
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

//       {/* Inquiry CTA */}
//       <section className="inquiry-cta">
//         <motion.div
//           className="inquiry-cta-card"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="contact-eyebrow">GET STARTED</span>
//           <h2>Find Your Private Office Today</h2>
//           <p>
//             Looking to set up or move your team into a private office inside Abu Dhabi Global
//             Market? Tell us about your headcount and licence requirements and we'll match you
//             with the right suite at Addax Tower — no obligation.
//           </p>
//           <Link to="/contact">
//             <button className="btn-join-now">REQUEST QUOTE</button>
//           </Link>
//         </motion.div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default PrivateOffice













import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import smallOfficeImg from '../assets/po-small.jpg'
import mediumOfficeImg from '../assets/po-medium.jpg'
import largeOfficeImg from '../assets/po-large.jpeg'

const faqs = [
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
    a: "Our private offices are configurable for teams of 1 to 20+ professionals, with Small, Medium, and Large suite options.",
  },
]

function PrivateOffice() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="App">
      <Helmet>
        <title>Private Office Abu Dhabi | Executive Office Space in ADGM |  Suites from AED 4500/month</title>
        <meta
          name="description"
          content="Looking for a private office in Abu Dhabi? Discover fully furnished private offices in ADGM with 24/7 access, flexible terms, and business-ready workspaces for startups and growing teams."
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
    "@type": "Product",
    "name": "Private Office in Abu Dhabi",
    "description": "Fully furnished private office in ADGM with 24/7 access.",
    "brand": {
      "@type": "Brand",
      "name": "Aegis Coworking"
    },
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
          Our private offices are located at Addax Tower, Al Reem Island, right in the heart
          of ADGM. Each space is lockable, fully furnished and ready for your ADGM licence, giving
          your team the privacy of a traditional office with the amenities and flexibility of a
          modern business centre.
        </p>

        <div className="bp-columns">
          <div className="bp-column">
            <div className="bp-column-icon">🔒</div>
            <h4>PRIVATE OFFICE FEATURES</h4>
            <ul>
              <li>Lockable private suite with 24/7 secure access inside ADGM</li>
              <li>Fully furnished with ergonomic desks, chairs and storage</li>
              <li>Configurable for teams of 1 to 20+ professionals</li>
              <li>Registered address for your ADGM commercial licence</li>
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
            An ideal first home inside Abu Dhabi Global Market for founders, small teams and
            advisory firms. Your suite is licensed-ready for ADGM, fully furnished and accessible
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
            Built for growing ADGM-licensed teams that need more room to operate. These suites
            give you space for client meetings, internal collaboration and focused work, all
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

      {/* Large Office */}
      <section className="vo-tier">
        <div className="vo-tier-image">
          <img src={largeOfficeImg} alt="Large ADGM Private Office" />
        </div>
        <div className="vo-tier-content">
          <span className="vo-tier-badge" style={{ background: '#e8e0f7', color: '#5b3ea6' }}>LARGE</span>
          <p className="vo-tier-eyebrow">Perfect for 10+ people</p>

          <h3>EXECUTIVE OFFICE SPACE, ADDAX TOWER</h3>
          <p>
            Spacious, luxury office space in Abu Dhabi's financial district at Addax Tower, built
            for established ADGM-licensed companies and larger teams. These premium offices can be
            fully branded and configured to support multiple work zones, private meeting areas and
            secure storage. The right choice for financial services firms, regional headquarters
            and regulated entities that want a discreet, high-performance base inside Abu Dhabi
            Global Market.
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
