import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import DayPassPricing from '../components/DayPassPricing'
import Amenities from '../components/Amenities'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: "How much does a coworking day pass in Abu Dhabi cost?",
    a: "A coworking day pass at Aegis Coworking costs AED 100 for 9 AM–6 PM access or AED 150 for 24-hour access. No membership or long-term commitment is required.",
  },
  {
    q: "Can I book a coworking day pass without a membership?",
    a: "Yes. Anyone can book a coworking day pass in Abu Dhabi without a membership or long-term commitment.",
  },
  {
    q: "What's included with a coworking day pass?",
    a: "The coworking day pass includes hot desk access, high-speed WiFi, premium coffee, printing and scanning, and access to the coworking space and amenities.",
  },
  {
    q: "Can I buy a coworking day pass more than once?",
    a: "Yes. You can purchase a coworking day pass whenever you need a professional workspace in Abu Dhabi. It is a flexible option for occasional visits, freelancers, and remote workers.",
    aDisplay: (
      <>
        Yes. You can purchase a coworking day pass whenever you need a
        professional workspace in Abu Dhabi. It is a flexible option for
        occasional visits, freelancers, and remote workers. See our{' '}
        <Link to="/pricing" className="inline-link">
          pricing
        </Link>{' '}
        for more details.
      </>
    ),
  },
  {
    q: "Where can I use the coworking day pass?",
    a: "The coworking day pass gives you access to Aegis Coworking in Addax Tower, Al Reem Island, within Abu Dhabi Global Market (ADGM).",
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
        <title>Day Pass & Hot Desk Coworking Space in Abu Dhabi, ADGM</title>
        <meta
          name="description"
          content="Find the best day pass and hot desk coworking space in Abu Dhabi.Flexible hourly and daily rates at ADGM Addax Tower.Book online or walk in at Aegis today"
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/day-pass" />

        <meta property="og:title" content="Day Pass Coworking ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="No-commitment day pass access to coworking space at Addax Tower, ADGM, from AED 100/day."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/day-pass" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Day Pass & Hot Desk Coworking Space in Abu Dhabi, ADGM" />
<meta name="twitter:description" content="Find the best day pass and hot desk coworking space in Abu Dhabi. Flexible hourly and daily rates at ADGM Addax Tower." />
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
  "@type": "Service",
  "serviceType": "Coworking Day Pass",
  "name": "Coworking Day Pass",
  "description": "Flexible coworking day pass in Abu Dhabi.",
"provider": {
  "@type": "LocalBusiness",
  "@id": "https://www.aegiscoworking.ae/#business"
},
  "areaServed": "Abu Dhabi",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "100",
    "highPrice": "150",
    "priceCurrency": "AED",
    "offerCount": 2,
    "url": "https://www.aegiscoworking.ae/day-pass"
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
        name: "Day Pass",
        item: "https://www.aegiscoworking.ae/day-pass"
      }
    ]
  })}
</script>
        
      </Helmet>

      <Navbar />
      <PageHero
        title="DAY PASS IN ADGM"
        subtitle="HOT DESK | FLEXIBLE ACCESS | PREMIUM AMENITIES"
      />
      <DayPassPricing />
    

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
  <p className="vo-faq-answer">{f.aDisplay ?? f.a}</p>
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
