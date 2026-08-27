// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import Hero from '../components/Hero'
// import Services from '../components/Services'
// import WhyChooseUs from '../components/WhyChooseUs'
// import ImageBanner from '../components/ImageBanner'
// import Testimonials from '../components/Testimonials'
// import Amenities from '../components/Amenities'
// import LocationHighlight from '../components/LocationHighlight'
// import FinalCTA from '../components/FinalCTA'
// import Footer from '../components/Footer'
// import Reveal from '../components/Reveal'
// import homeBannerImage from '../assets/meeting-room-view.webp'

// function Home() {
//   return (
//     <div className="App">
//       <Helmet>
//   <title>ADGM Office Space in Abu Dhabi | Aegis Coworking Center</title>
//   <meta
//     name="description"
//     content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes. Book a tour and see pricing today."
//   />
//   <link rel="canonical" href="https://www.aegiscoworking.ae/" />

//   <meta property="og:title" content="ADGM Office Space in Abu Dhabi | Aegis Coworking Center" />
//   <meta
//     property="og:description"
//     content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes."
//   />
//   <meta property="og:type" content="website" />
//   <meta property="og:url" content="https://www.aegiscoworking.ae/" />
//   <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content="ADGM Office Space in Abu Dhabi | Aegis Coworking Center" />
//   <meta
//     name="twitter:description"
//     content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes."
//   />
//   <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
// <script type="application/ld+json">
//   {JSON.stringify({
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: "https://www.aegiscoworking.ae/"
//       }
//     ]
//   })}
// </script>
// </Helmet>
//       <Navbar />
//       <Hero />
//       <Reveal><Services /></Reveal>
//       <Reveal delay={0.1}><WhyChooseUs /></Reveal>
//       <Reveal delay={0.1}>
//         <ImageBanner image={homeBannerImage} alt="Coworking space with skyline view" />
//       </Reveal>
//        <Reveal delay={0.1}><Amenities /></Reveal>
//       <Reveal delay={0.1}><Testimonials /></Reveal>
     
//       <Reveal delay={0.1}><LocationHighlight /></Reveal>
//       <FinalCTA />
//       <Footer />
//     </div>
//   )
// }

// export default Home
















import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import ImageBanner from '../components/ImageBanner'
import Testimonials from '../components/Testimonials'
import Amenities from '../components/Amenities'
import LocationHighlight from '../components/LocationHighlight'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import homeBannerImage from '../assets/meeting-room-view.webp'

const faqs = [
  {
    q: "Does my business need physical office space in ADGM?",
    a: "You need a registered office address in ADGM, but not necessarily a private office. A Dedicated Desk or Virtual Office at Aegis Coworking both provide a qualifying registered ADGM address, so you can start at a lower cost and upgrade to a private office as your team grows."
  },
  {
    q: "What are ADGM's flexi desk requirements?",
    a: "ADGM requires a qualifying registered address and workspace arrangement — commonly called a 'flexi desk' — to hold a commercial licence. Our Dedicated Desk plan meets this requirement, combining your own permanent desk with a registered ADGM business address suitable for your licence application."
  },
  {
    q: "What documents are needed for an ADGM license?",
    a: "Requirements vary by business activity, but typically include a completed application form, passport copies of shareholders and directors, a business plan, Articles of Association, and proof of a registered ADGM office address. Aegis Coworking provides the registered address for your application — ADGM's Registration Authority or a corporate service provider can confirm the exact checklist for your specific licence type."
  },
  {
    q: "Hot desk vs flexi desk vs dedicated desk in ADGM — what's the difference?",
    a: "A hot desk is shared, flexible workspace with no fixed seat or registered address — good for working, not for company registration. A dedicated desk gives you your own permanent desk plus a registered ADGM business address, meeting the flexi desk licensing requirement. 'Flexi desk' refers to that licensing category itself, not a separate physical desk type."
  },
  {
    q: "How much does ADGM office space cost?",
    a: "At Aegis Coworking, plans start from AED 1,000/month for a hot desk, AED 1,150/month for a dedicated desk, AED 3,500/year for a virtual office, and AED 4,500/month for a private office. See our Pricing page for full plan details."
  },
  {
    q: "What should I look for in a coworking space in Abu Dhabi?",
    a: "Look for a space located within ADGM if you plan to register a business there, transparent pricing with no hidden fees, a registered address that satisfies ADGM's licensing requirements, and the flexibility to upgrade as you grow. Aegis Coworking at Addax Tower, Al Reem Island offers all of these, with plans starting from AED 1,000/month."
  },
  {
    q: "What is the ADGM company registration office requirement?",
    a: "ADGM requires every registered company to have a physical registered office address within its jurisdiction. This can be satisfied through a Dedicated Desk or Virtual Office at Aegis Coworking, both of which include a registered ADGM business address suitable for your commercial licence application."
  },
]

function Home() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="App">
      <Helmet>
  <title>ADGM Office Space in Abu Dhabi | Aegis Coworking Center</title>
  <meta
    name="description"
    content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes. Book a tour and see pricing today."
  />
  <link rel="canonical" href="https://www.aegiscoworking.ae/" />

  <meta property="og:title" content="ADGM Office Space in Abu Dhabi | Aegis Coworking Center" />
  <meta
    property="og:description"
    content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.aegiscoworking.ae/" />
  <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ADGM Office Space in Abu Dhabi | Aegis Coworking Center" />
  <meta
    name="twitter:description"
    content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes."
  />
  <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
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
      }
    ]
  })}
</script>
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
      <Hero />
      <Reveal><Services /></Reveal>
      <Reveal delay={0.1}><WhyChooseUs /></Reveal>
      <Reveal delay={0.1}>
        <ImageBanner image={homeBannerImage} alt="Coworking space with skyline view" />
      </Reveal>
       <Reveal delay={0.1}><Amenities /></Reveal>
       <section className="vo-faq">
        <h2>ADGM WORKSPACE FAQS</h2>
        <div className="vo-faq-list">
          {faqs.map((f, i) => (
            <div
              className={`vo-faq-item ${openIndex === i ? 'open' : ''}`}
              key={i}
              onClick={() => toggleFAQ(i)}
            >
              <div className="vo-faq-question">
                <span>{f.q}</span>
                <span className="vo-faq-toggle">{openIndex === i ? '−' : '+'}</span>
              </div>
              <div className="vo-faq-answer-wrap">
                <p className="vo-faq-answer">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Reveal delay={0.1}><Testimonials /></Reveal>
     
      <Reveal delay={0.1}><LocationHighlight /></Reveal>
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default Home


















