import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import VirtualOfficeGallery from '../components/VirtualOfficeGallery'
import BusinessPresence from '../components/BusinessPresence'
import VOTierCard from '../components/VOTierCard'
import InquiryCTA from '../components/InquiryCTA'
import Footer from '../components/Footer'

import voBasic from '../assets/virtual-office-basic-ADGM_AbuDhabi.webp'
import voPremium from '../assets/virtual-office-premium-ADGM.jpg'
import voEnterprise from '../assets/virtual-office-enterprise-ADGM-abu-dhabi.jpg'

import { Link } from 'react-router-dom'

const faqs = [
  {
    q: "Do I need a physical office or can I use a virtual office in Abu Dhabi?",
    a: "No. ADGM accepts a registered virtual office address for most licence categories, as long as it includes mail handling and a valid business address inside ADGM, such as our Category 1 address at Addax Tower.",
  },
  {
    q: "What's included in an ADGM virtual office package, and how much does it cost?",
    a: "Aegis Coworking offers three virtual office tiers — Basic, Premium, and Enterprise — each with a registered ADGM business address, mail handling, and increasing levels of phone support and meeting room credits. Pricing is customized based on the tier and your business needs — request a quote for current rates.",
  },
  {
    q: "Can I use a virtual office in Abu Dhabi for my ADGM licence renewal?",
    a: "Yes, a virtual office address at Aegis Coworking can be used both for initial ADGM company registration and for ongoing licence renewals.",
  },
  {
    q: "Can I upgrade from a virtual office to a private office later?",
    a: "Yes, you can convert to a dedicated desk or private office at Addax Tower at any time at preferential rates.",
    aDisplay: (
      <>
        Yes, you can convert to a dedicated desk or{' '}
        <Link to="/private-office" className="inline-link">private office</Link> at
        Addax Tower at any time at preferential rates.
      </>
    ),
  },
]

function VirtualOffice() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="App">
      <Helmet>
        <title>Virtual Office Abu Dhabi | ADGM Registered Address</title>
        <meta
          name="description"
          content="Get a prestigious ADGM virtual office address in Abu Dhabi. Includes business registration support, mail handling and meeting room access. Enquire today."
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/virtual-office" />

        <meta property="og:title" content="Virtual Office ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="Registered ADGM business address, mail handling, and phone support at Addax Tower — from Basic to Enterprise packages."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/virtual-office" />
       <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Virtual Office Abu Dhabi | ADGM Registered Address" />
<meta name="twitter:description" content="Get a prestigious ADGM virtual office address in Abu Dhabi. Includes business registration support, mail handling and meeting room access." />
<meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

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
    "@type": "Service",
    "serviceType": "Virtual Office",
    "name": "Virtual Office in Abu Dhabi",
    "description": "Virtual office with a registered ADGM business address.",
   "provider": {
  "@type": "LocalBusiness",
  "@id": "https://www.aegiscoworking.ae/#business"
},
    "areaServed": "Abu Dhabi",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://www.aegiscoworking.ae/virtual-office"
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
        name: "Virtual Office",
        item: "https://www.aegiscoworking.ae/virtual-office"
      }
    ]
  })}
</script>
      </Helmet>

      <Navbar />
      <PageHero
        title="VIRTUAL OFFICE IN ABU DHABI"
        subtitle="VIRTUAL BUSINESS ADDRESS | ADGM MAIL HANDLING  | PHONE SUPPORT"
      />
      <VirtualOfficeGallery />
      <BusinessPresence />

     <VOTierCard
  image={voBasic}
  alt="Basic virtual office package at Aegis Coworking in ADGM, Abu Dhabi"
  tier="BASIC"
  title="BASIC ADGM VIRTUAL OFFICE"
  desc="A simple virtual office in ADGM for founders, freelancers, and international businesses. Get an ADGM business address at Addax Tower, Al Reem Island, with support for your ADGM licence application, mail receiving and forwarding, and company directory listing. A practical option for businesses looking for an ADGM registered office provider and a professional business presence."
  buttons={[{ label: "REQUEST QUOTE", primary: true }]}
  imageLeft={true}
/>

<VOTierCard
  tier="PREMIUM"
  title="PREMIUM ADGM VIRTUAL OFFICE"
  alt="Premium virtual office package at Aegis Coworking in ADGM, Abu Dhabi"
  desc="Designed for growing businesses that need more than a business address. Get a UAE business phone number with live call answering, meeting room access, priority mail handling, and a professional business presence in ADGM. This virtual office in ADGM is ideal for companies that want a professional business address in Abu Dhabi without renting a full-time office."
  image={voPremium}
  buttons={[{ label: "REQUEST QUOTE", primary: true }]}
  imageLeft={false}
/>

<VOTierCard
  tier="ENTERPRISE"
  title="ENTERPRISE ADGM VIRTUAL OFFICE"
   alt="Enterprise virtual office package at Aegis Coworking in ADGM, Abu Dhabi"
  desc="Built for established businesses and international companies that need a complete business presence in ADGM. Includes meeting room access, a dedicated account manager, priority administrative support, and flexible coworking access at Addax Tower. A complete ADGM business address solution with the flexibility to move into a dedicated desk or private office as your business grows."
  image={voEnterprise}
  buttons={[{ label: "REQUEST QUOTE", primary: true }]}
  imageLeft={true}
/>
      


    <section className="vo-faq">
<span className="contact-eyebrow">VIRTUAL OFFICE ADGM</span>
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

      <InquiryCTA />
      <Footer />
    </div>
  )
}

export default VirtualOffice
