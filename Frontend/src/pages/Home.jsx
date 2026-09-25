import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
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
import homeBannerImage from '../assets/Coworking_space_ADGM_AbuDhabi.webp'

const faqs = [
  {
    q: "What is Aegis Coworking?",
    a: "Aegis Coworking is a coworking and business centre based in Addax Tower on Al Reem Island, within Abu Dhabi Global Market (ADGM). It offers flexible workspace — hot desk, dedicated desk, private office, virtual office, and meeting room — for businesses registering or operating in ADGM."
  },


{
    q: "Where is Aegis Coworking located?",
       a: "Aegis Coworking is located at Addax Tower, 3812, Al Reem Island, RT3, Abu Dhabi, United Arab Emirates, within the ADGM jurisdiction. Learn more about coworking on Al Reem Island.",
    aDisplay: (
      <>
        Aegis Coworking is located at Addax Tower, 3812, Al Reem Island, RT3, Abu Dhabi, United Arab Emirates, within the ADGM jurisdiction. Learn more about{' '}
        <Link to="/blog/affordable-coworking-al-reem-island-adgm" className="inline-link">coworking on Al Reem Island</Link>.
      </>
    ),
   },
{
    q: "Does Aegis Coworking provide workspace in ADGM?",
    a: "Yes, Aegis Coworking operates entirely within ADGM at Addax Tower. Its dedicated desk and private office come with ADGM-compliant lease and membership agreements, so they can be used to satisfy ADGM's physical office requirement for company registration or licence renewal."
  },

{
    q: "What is the cheapest coworking option at Aegis?",
    a: "The Coworking Day Pass is the lowest-cost way to work from Aegis — AED 100 for 9am–6pm access, or AED 150 for 24-hour access, with no lease or commitment required."
  },


{
  q: "What are the best coworking spaces in ADGM?",
  a: "The best coworking space in ADGM depends on your requirements, including location, price, registered business address, workspace type, amenities, and licence requirements. Aegis Coworking is one option at Addax Tower on Al Reem Island, offering flexi desk, dedicated desk, private office, virtual office, and meeting room. Businesses should compare providers based on the workspace and ADGM requirements applicable to their licence."
},

{
    q: "I'm starting a business in ADGM. Which coworking options should I consider?",
       a: "Before comparing providers, confirm what your licence actually requires: a dedicated desk (most operating licences, including Tech Start-Up), a flexi-desk (typically SPVs and holding companies), or a private office (FSRA-regulated activities). From there, check that the provider issues ADGM-ready lease or membership documents, confirm the visa quota per desk if you're hiring, and compare all-in monthly cost rather than headline rent. Aegis Coworking, based in Addax Tower, offers ADGM-compliant dedicated desks and private offices with transparent pricing and no hidden setup or admin fees. Our guide explains which ADGM workspace fits you.",
    aDisplay: (
      <>
        Before comparing providers, confirm what your licence actually requires: a dedicated desk (most operating licences, including Tech Start-Up), a flexi-desk (typically SPVs and holding companies), or a private office (FSRA-regulated activities). From there, check that the provider issues ADGM-ready lease or membership documents, confirm the visa quota per desk if you're hiring, and compare all-in monthly cost rather than headline rent. Aegis Coworking, based in Addax Tower, offers ADGM-compliant dedicated desks and private offices with transparent pricing and no hidden setup or admin fees. Our guide explains{' '}
        <Link to="/blog/which-adgm-workspace-fits-you" className="inline-link">which ADGM workspace fits you</Link>.
      </>
     ),
  },
  {
  q: "How much do coworking plans cost at Aegis Coworking?",
  a: "Aegis Coworking pricing depends on the workspace type. Day pass start at AED 100 per day, a flexi desk starts at AED 1,000 per month, a dedicated desk starts at AED 1,150 per month, a private office starts at AED 4,500 per month, and virtual office plans start at AED 292 per month."
},

{
    q: "Is Aegis Coworking a serviced office or business centre?",
    a: "Aegis Coworking is a fully serviced business centre in ADGM, Abu Dhabi — reception, cleaning, high-speed internet and utilities are included, so you're not managing a traditional office yourself.",
  },

{
    q: "What coworking spaces are available in Addax Tower?",
       a: "Addax Tower on Al Reem Island is an established ADGM coworking hub with several providers, including Aegis Coworking. Aegis offers dedicated desks, private offices, virtual offices and meeting rooms with ADGM-compliant documentation and an on-site ADGM business address. Read more about Addax Tower for businesses.",
    aDisplay: (
      <>
        Addax Tower on Al Reem Island is an established ADGM coworking hub with several providers, including Aegis Coworking. Aegis offers dedicated desks, private offices, virtual offices and meeting rooms with ADGM-compliant documentation and an on-site ADGM business address. Read more about{' '}
        <Link to="/blog/addax-tower-adgm-business-workspace" className="inline-link">Addax Tower for businesses</Link>.
      </>
    ),
  },
]
function Home() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="App">
      <Helmet>
 <title>Coworking Space in ADGM & Abu Dhabi from AED 1,000 | Aegis</title>
 <meta name="description" content="Coworking space and business centre in ADGM, Addax Tower, Al Reem Island. Shared office space in Abu Dhabi from AED 1,000 /month. Book a free tour." />
  <link rel="canonical" href="https://www.aegiscoworking.ae/" />

 <meta property="og:title" content="Coworking Space in ADGM & Abu Dhabi from AED 1,000 | Aegis" />
  <meta property="og:description" content="Coworking space and business centre in ADGM, Addax Tower, Al Reem Island. Shared office space in Abu Dhabi from AED 1,000 /month. Book a free tour." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.aegiscoworking.ae/" />
  <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Coworking Space in ADGM & Abu Dhabi from AED 1,000 | Aegis" />
 <meta name="twitter:description" content="Coworking space and business centre in ADGM, Addax Tower, Al Reem Island. Shared office space in Abu Dhabi from AED 1,000 /month. Book a free tour." />
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
    name: "Coworking Space in Abu Dhabi – ADGM, Addax Tower | Aegis",
    isPartOf: { "@id": "https://www.aegiscoworking.ae/#business" },
    datePublished: "2026-06-01",
    dateModified: "2026-09-24",
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
        <ImageBanner image={homeBannerImage} alt="Aegis Coworking workspace with Abu Dhabi skyline view in ADGM" width={1024} height={683} />
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
                  <p className="vo-faq-answer">{f.aDisplay ?? f.a}</p>
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


















