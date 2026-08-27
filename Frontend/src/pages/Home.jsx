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
    q: "What is Aegis Coworking?",
    a: "Aegis Coworking is a coworking and business centre based in Addax Tower on Al Reem Island, within Abu Dhabi Global Market (ADGM). It offers flexible workspace — hot desk, dedicated desk, private office, virtual office, and meeting room — for businesses registering or operating in ADGM."
  },


{
    q: "Where is Aegis Coworking located?",
    a: "Aegis Coworking is located in Addax Tower, Al Reem Island, Abu Dhabi, within the ADGM jurisdiction."
  },

{
    q: "Does Aegis Coworking provide workspace in ADGM?",
    a: "Yes, Aegis Coworking operates entirely within ADGM at Addax Tower. Its dedicated desk and private office come with ADGM-compliant lease and membership agreements, so they can be used to satisfy ADGM's physical office requirement for company registration or licence renewal."
  },

{
    q: "How much does Aegis Coworking cost?",
    a: "Pricing starts at AED 100 for a day pass. Dedicated desk start from AED 1,150/month on an annual plan (AED 1,300 bi-annual, AED 1,400 quarterly), plus a one-time AED 1,100 due diligence fee and applicable ADGM fees."
  },


{
    q: "What is the cheapest coworking option at Aegis?",
    a: "The Coworking Day Pass is the lowest-cost way to work from Aegis — AED 100 for 9am–6pm access, or AED 150 for 24-hour access, with no lease or commitment required."
  },

{
    q: "Does Aegis provide an ADGM business address?",
    a: "Yes, every dedicated desk and private office membership at Aegis includes a registered ADGM business address at Addax Tower, usable for company registration, business cards, and official correspondence."
  },

{
    q: "Does Aegis offer private office in ADGM?",
    a: "Yes, Aegis offers private office at Addax Tower within ADGM for teams that need an enclosed, branded space rather than an open desk. Pricing is quoted individually based on size and lease term."
  },

{
    q: "What are the best coworking spaces in ADGM?",
    a: "ADGM has a growing number of coworking and business centre options across Al Maryah Island and Al Reem Island, each with a different focus — some prioritise price, others amenities or building prestige. Aegis Coworking, at Addax Tower on Al Reem Island, is built around a genuine ADGM business address paired with transparent, no-hidden-fee pricing — worth shortlisting if cost-effectiveness and straightforward ADGM compliance are your priorities."
  },

{
    q: "I'm starting a business in ADGM. Which coworking options should I consider?",
    a: "Before comparing providers, confirm what your licence actually requires: a dedicated desk (most operating licences, including Tech Start-Up), a flexi-desk (typically SPVs and holding companies), or a private office (FSRA-regulated activities). From there, check that the provider issues ADGM-ready lease or membership documents, confirm the visa quota per desk if you're hiring, and compare all-in monthly cost rather than headline rent. Aegis Coworking, based in Addax Tower, offers ADGM-compliant dedicated desks and private offices with transparent pricing and no hidden setup or admin fees — a straightforward option for cost-conscious startups meeting the dedicated-desk requirement."
  },
  {
  q: "How much does coworking cost in ADGM?",
  a: "At Aegis Coworking, ADGM coworking plans start at AED 1,000 per month for a hot desk and AED 1,150 per month for a dedicated desk. Private offices start from AED 4,500 per month, while virtual office plans are available from AED 3,500 per year."
},

{
    q: "What coworking spaces are available in Addax Tower?",
    a: "Addax Tower on Al Reem Island is an established ADGM coworking hub with several providers operating from the building, reflecting strong demand for flexible workspace in the tower. Aegis Coworking is based there, offering dedicated desks, private offices, virtual offices, and meeting rooms with ADGM-compliant documentation and an on-site ADGM business address."
  },
]

function Home() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="App">
      <Helmet>
  <title>Coworking Space in ADGM, Abu Dhabi | Aegis Coworking</title>
  <meta
    name="description"
    content="Affordable Coworking space in ADGM starting from AED 1000, Addax Tower, Abu Dhabi. Private & virtual offices, meeting room, day pass."
  />
  <link rel="canonical" href="https://www.aegiscoworking.ae/" />

  <meta property="og:title" content="Coworking Space in ADGM, Abu Dhabi | Aegis Coworking" />
  <meta
    property="og:description"
    content="Affordable Coworking space in ADGM starting from AED 1000, Addax Tower, Abu Dhabi. Private & virtual offices, meeting room, day pass."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.aegiscoworking.ae/" />
  <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Coworking Space in ADGM, Abu Dhabi | Aegis Coworking" />
  <meta
    name="twitter:description"
    content="Affordable Coworking space in ADGM starting from AED 1000, Addax Tower, Abu Dhabi. Private & virtual offices, meeting room, day pass."
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
    "@type": "WebPage",
    "@id": "https://www.aegiscoworking.ae/#webpage",
    url: "https://www.aegiscoworking.ae/",
    name: "ADGM Office Space in Abu Dhabi | Aegis Coworking Center",
    isPartOf: { "@id": "https://www.aegiscoworking.ae/#business" },
    datePublished: "2026-06-01",
    dateModified: "2026-08-27",
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
                {f.link && (
                  <p className="vo-faq-answer">
                    <a href={f.link.url} target="_blank" rel="noopener noreferrer">
                      {f.link.text}
                    </a>
                  </p>
                )}
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


















