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
    q: "Does my ADGM Business need physical office space?",
   a: "No — you need a registered office address in ADGM, but not necessarily a private office. At Aegis Coworking in Addax Tower, a Dedicated Desk can provide a registered ADGM business address, while a Private Office gives you a dedicated workspace for your team. This makes Aegis a flexible option if you need an ADGM business address without committing to a traditional office lease."
  },

  {
    q: "What are ADGM's flexi desk requirements?",
    a: "ADGM businesses need a qualifying registered office arrangement within ADGM. At Aegis Coworking, our Dedicated Desk plan provides a permanent workspace together with a registered ADGM business address. This makes Aegis suitable for the businesses looking for the cheaper option of these provider. Aegis is located in Addax Tower on Al Reem Island, within the ADGM jurisdiction."
  },

  {
    q: "What documents are needed for an ADGM license?",
    a: "ADGM licence requirements depend on your business activity and company structure, but applicants may typically need identification documents, incorporation documents, a business plan and proof of a registered ADGM office address. Aegis Coworking can provide the registered ADGM business address at affordable price. However, ADGM's Registration Authority or your corporate service provider can confirm the exact documents required for your licence."
  },

 {
  q: "Hot desk vs flexi desk vs dedicated desk in ADGM — what's the difference?",
  a: "A hot desk at Aegis Coworking is a flexible shared workspace and is ideal for individuals or businesses that do not require ADGM's registered business address.<br /><br />A Dedicated Desk provides your own permanent workspace together with a registered ADGM business address and is designed for businesses that need an ADGM flexi desk arrangement.<br /><br />In simple terms, a hot desk is primarily for flexible working, while a dedicated desk is a stronger option when you need both workspace and an ADGM registered office address."
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

      <section className="vo-faq" style={{ paddingTop: 0 }}>
        <h2>ADGM Workspace Plans at a Glance</h2>
        <table style={{ width: '100%', maxWidth: 780, margin: '0 auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '2px solid #ddd' }}>Plan</th>
              <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '2px solid #ddd' }}>Starting Price</th>
              <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '2px solid #ddd' }}>Registered ADGM Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>Hot Desk</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>AED 1,000/month</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>No</td>
            </tr>
            <tr>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>Dedicated Desk</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>AED 1,150/month</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>Yes</td>
            </tr>
            <tr>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>Virtual Office</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>AED 3,500/year</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>Yes</td>
            </tr>
            <tr>
              <td style={{ padding: '10px 12px' }}>Private Office</td>
              <td style={{ padding: '10px 12px' }}>AED 4,500/month</td>
              <td style={{ padding: '10px 12px' }}>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Reveal delay={0.1}><Testimonials /></Reveal>
     
      <Reveal delay={0.1}><LocationHighlight /></Reveal>
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default Home


















