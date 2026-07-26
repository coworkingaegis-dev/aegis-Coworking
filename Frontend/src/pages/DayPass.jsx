// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import PageHero from '../components/PageHero'
// import DayPassPricing from '../components/DayPassPricing'
// import PerfectFor from '../components/PerfectFor'
// import Amenities from '../components/Amenities'
// import FinalCTA from '../components/FinalCTA'
// import Footer from '../components/Footer'

// function DayPass() {
//   return (
//     <div className="App">
//       <Helmet>
//         <title>Day Pass Coworking ADGM | Aegis Coworking, Addax Tower</title>
//         <meta
//           name="description"
//           content="Get instant access to Aegis Coworking with a day pass. No commitment, premium amenities, Addax Tower, ADGM, Abu Dhabi."
//         />
//         <link rel="canonical" href="https://[yourdomain.com]/day-pass" />

//         <meta property="og:title" content="Day Pass Coworking ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="No-commitment day pass access to coworking space at Addax Tower, ADGM."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://[yourdomain.com]/day-pass" />
//         <meta property="og:image" content="https://[yourdomain.com]/og-image.jpg" />
//       </Helmet>

//       <Navbar />
//       <PageHero
//         title="DAY PASS IN ADGM"
//         subtitle="NO COMMITMENT | INSTANT ACCESS | PREMIUM AMENITIES"
//       />
//       <DayPassPricing />
//       <PerfectFor />
//       <Amenities title="AMENITIES" />
//       <FinalCTA />
//       <Footer />
//     </div>
//   )
// }

// export default DayPass










import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import DayPassPricing from '../components/DayPassPricing'
import PerfectFor from '../components/PerfectFor'
import Amenities from '../components/Amenities'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

const faqs = [
  {
    q: "How much is a day pass at Aegis Coworking?",
    a: "A day pass at Aegis Coworking is AED 100 for 9 AM–6 PM access, or AED 150 for full 24-hour access, with no long-term commitment required.",
  },
  {
    q: "Can I book a day pass without a membership?",
    a: "Yes, day passes are available to anyone — no membership or long-term commitment required.",
  },
  {
    q: "What's included with a day pass?",
    a: "A day pass includes hot desk access, high-speed WiFi, premium coffee, print & scan, and all amenities, with no long-term commitment.",
  },
  {
    q: "Can I use a day pass at Aegis Coworking multiple times?",
    a: "Yes, you can purchase a day pass as often as you like — it's ideal for occasional visits or trying out the space before committing to a membership.",
  },
]

function DayPass() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="App">
      <Helmet>
        <title>Day Pass Coworking ADGM | Aegis Coworking, Addax Tower</title>
        <meta
          name="description"
          content="Coworking day pass in ADGM from AED 100/day. No commitment, premium amenities, Addax Tower, Al Reem Island, Abu Dhabi."
        />
        <link rel="canonical" href="https://aegis-coworking.vercel.app/day-pass" />

        <meta property="og:title" content="Day Pass Coworking ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="No-commitment day pass access to coworking space at Addax Tower, ADGM, from AED 100/day."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aegis-coworking.vercel.app/day-pass" />
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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Day Pass (9 AM–6 PM)",
                "price": "100",
                "priceCurrency": "AED",
                "priceValidUntil": "2026-12-31",
                "url": "https://aegis-coworking.vercel.app/day-pass",
              },
              {
                "@type": "Offer",
                "name": "Day Pass (24 Hours)",
                "price": "150",
                "priceCurrency": "AED",
                "priceValidUntil": "2026-12-31",
                "url": "https://aegis-coworking.vercel.app/day-pass",
              },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />
      <PageHero
        title="DAY PASS IN ADGM"
        subtitle="NO COMMITMENT | INSTANT ACCESS | PREMIUM AMENITIES"
      />
      <DayPassPricing />
      <PerfectFor />

      <section className="vo-faq">
        <span className="contact-eyebrow">DAY PASS ADGM</span>
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

      <Amenities title="AMENITIES" />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default DayPass
