// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import PageHero from '../components/PageHero'
// import VirtualOfficeGallery from '../components/VirtualOfficeGallery'
// import BusinessPresence from '../components/BusinessPresence'
// import VOTierCard from '../components/VOTierCard'
// import InquiryCTA from '../components/InquiryCTA'
// import Footer from '../components/Footer'

// import voBasic from '../assets/vo-basic.webp'
// import voPremium from '../assets/vo-premium.jpg'
// import voEnterprise from '../assets/vo-enterprise.jpg'

// function VirtualOffice() {
//   return (
//     <div className="App">
//       <Helmet>
//         <title>Virtual Office ADGM | Registered Address for Company Registration | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="ADGM virtual office with a registered Category 1 business address at Addax Tower. Mail handling, phone support, and meeting room credits — ideal for ADGM company registration."
//         />
//         <link rel="canonical" href="https://[yourdomain.com]/virtual-office" />

//         <meta property="og:title" content="Virtual Office ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Registered ADGM business address, mail handling, and phone support at Addax Tower — from Basic to Enterprise packages."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://[yourdomain.com]/virtual-office" />
//         <meta property="og:image" content="https://[yourdomain.com]/og-image.jpg" />
//       </Helmet>

//       <Navbar />
//       <PageHero
//         title="ADGM VIRTUAL OFFICE SOLUTIONS"
//         subtitle="REGISTERED ADDRESS | MAIL HANDLING | PHONE SUPPORT"
//       />
//       <VirtualOfficeGallery />
//       <BusinessPresence />

//       <VOTierCard
//         image={voBasic}
//         tier="BASIC"
//         title="BASIC ADGM VIRTUAL OFFICE"
//         desc="Built for founders, freelancers and international entrepreneurs who need a registered ADGM address at launch. You get a Category 1 business address inside 2312 Addax Tower for your ADGM licence application, mail receiving and forwarding, and your company name on our on-site directory. Start operating from one of the Middle East's leading financial free zones without committing to a full office lease."
//         buttons={[{ label: "REQUEST QUOTE", primary: true }]}
//         imageLeft={true}
//       />

//       <VOTierCard
//         tier="PREMIUM"
//         title="PREMIUM ADGM VIRTUAL OFFICE"
//         desc="Everything in Basic, plus a dedicated UAE phone number with live call answering in your company name, 5 hours of meeting room credits inside ADGM each month, and priority mail handling. Designed for growing businesses that need a polished client-facing presence in Abu Dhabi Global Market. Host meetings in our on-site rooms, receive clients at the Addax Tower reception, and benefit from concierge-style administrative support."
//         image={voPremium}
//         buttons={[{ label: "REQUEST QUOTE", primary: true }]}
//         imageLeft={false}
//       />

//       <VOTierCard
//         tier="ENTERPRISE"
//         title="ENTERPRISE ADGM VIRTUAL OFFICE"
//         desc="Our most complete ADGM virtual office package. Includes everything in Premium, plus 10 hours of meeting room credits, a dedicated account manager, priority administrative and PRO support, and flexible access to our coworking floor. Ideal for international groups and regulated entities establishing an ADGM presence, or UAE-based companies that want maximum flexibility. Convert to a dedicated desk or private office at Addax Tower at any time at preferential rates."
//         image={voEnterprise}
//         buttons={[{ label: "REQUEST QUOTE", primary: true }]}
//         imageLeft={true}
//       />
//       <InquiryCTA />
//       <Footer />
//     </div>
//   )
// }

// export default VirtualOffice









// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import PageHero from '../components/PageHero'
// import VirtualOfficeGallery from '../components/VirtualOfficeGallery'
// import BusinessPresence from '../components/BusinessPresence'
// import VOTierCard from '../components/VOTierCard'
// import InquiryCTA from '../components/InquiryCTA'
// import Footer from '../components/Footer'

// import voBasic from '../assets/vo-basic.webp'
// import voPremium from '../assets/vo-premium.jpg'
// import voEnterprise from '../assets/vo-enterprise.jpg'

// const faqs = [
//   {
//     q: "Do I need a physical office to register a company in ADGM?",
//     a: "No. ADGM accepts a registered virtual office address for most licence categories, as long as it includes mail handling and a valid business address inside ADGM, such as our Category 1 address at Addax Tower.",
//   },
//   {
//     q: "What's included in an ADGM virtual office package, and how much does it cost?",
//     a: "Aegis Coworking offers three virtual office tiers — Basic, Premium, and Enterprise — each with a registered ADGM business address, mail handling, and increasing levels of phone support and meeting room credits. Pricing is customized based on the tier and your business needs — request a quote for current rates.",
//   },
//   {
//     q: "Can I use a virtual office for my ADGM trade licence renewal?",
//     a: "Yes, a virtual office address at Aegis Coworking can be used both for initial ADGM company registration and for ongoing licence renewals.",
//   },
//   {
//     q: "Can I upgrade from a virtual office to a private office later?",
//     a: "Yes, you can convert to a dedicated desk or private office at Addax Tower at any time at preferential rates.",
//   },
// ]

// function VirtualOffice() {
//   const [openIndex, setOpenIndex] = useState(null)

//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i)
//   }

//   return (
//     <div className="App">
//       <Helmet>
//         <title>Virtual Office ADGM | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="ADGM virtual office with a registered Category 1 business address at Addax Tower. Mail handling, phone support, and meeting room credits — ideal for ADGM company registration."
//         />
//         <link rel="canonical" href="https://aegis-coworking.vercel.app/virtual-office" />

//         <meta property="og:title" content="Virtual Office ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Registered ADGM business address, mail handling, and phone support at Addax Tower — from Basic to Enterprise packages."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://aegis-coworking.vercel.app/virtual-office" />
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
//       <PageHero
//         title="ADGM VIRTUAL OFFICE SOLUTIONS"
//         subtitle="REGISTERED ADDRESS | MAIL HANDLING | PHONE SUPPORT"
//       />
//       <VirtualOfficeGallery />
//       <BusinessPresence />

//       <VOTierCard
//         image={voBasic}
//         tier="BASIC"
//         title="BASIC ADGM VIRTUAL OFFICE"
//         desc="Built for founders, freelancers and international entrepreneurs who need a registered ADGM address at launch. You get a Category 1 business address inside 2312 Addax Tower for your ADGM licence application, mail receiving and forwarding, and your company name on our on-site directory. Start operating from one of the Middle East's leading financial free zones without committing to a full office lease."
//         buttons={[{ label: "REQUEST QUOTE", primary: true }]}
//         imageLeft={true}
//       />

//       <VOTierCard
//         tier="PREMIUM"
//         title="PREMIUM ADGM VIRTUAL OFFICE"
//         desc="Everything in Basic, plus a dedicated UAE phone number with live call answering in your company name, 5 hours of meeting room credits inside ADGM each month, and priority mail handling. Designed for growing businesses that need a polished client-facing presence in Abu Dhabi Global Market. Host meetings in our on-site rooms, receive clients at the Addax Tower reception, and benefit from concierge-style administrative support."
//         image={voPremium}
//         buttons={[{ label: "REQUEST QUOTE", primary: true }]}
//         imageLeft={false}
//       />

//       <VOTierCard
//         tier="ENTERPRISE"
//         title="ENTERPRISE ADGM VIRTUAL OFFICE"
//         desc="Our most complete ADGM virtual office package. Includes everything in Premium, plus 10 hours of meeting room credits, a dedicated account manager, priority administrative and PRO support, and flexible access to our coworking floor. Ideal for international groups and regulated entities establishing an ADGM presence, or UAE-based companies that want maximum flexibility. Convert to a dedicated desk or private office at Addax Tower at any time at preferential rates."
//         image={voEnterprise}
//         buttons={[{ label: "REQUEST QUOTE", primary: true }]}
//         imageLeft={true}
//       />

//     <section className="vo-faq">
// <span className="contact-eyebrow">VIRTUAL OFFICE ADGM</span>
// <h2>FREQUENTLY ASKED QUESTIONS</h2>
//   <div className="vo-faq-list">
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

//       <InquiryCTA />
//       <Footer />
//     </div>
//   )
// }

// export default VirtualOffice














// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import PageHero from '../components/PageHero'
// import VirtualOfficeGallery from '../components/VirtualOfficeGallery'
// import BusinessPresence from '../components/BusinessPresence'
// import VOTierCard from '../components/VOTierCard'
// import InquiryCTA from '../components/InquiryCTA'
// import Footer from '../components/Footer'

// import voBasic from '../assets/vo-basic.webp'
// import voPremium from '../assets/vo-premium.jpg'
// import voEnterprise from '../assets/vo-enterprise.jpg'

// const faqs = [
//   {
//     q: "Do I need a physical office to register a company in ADGM?",
//     a: "No. ADGM accepts a registered virtual office address for most licence categories, as long as it includes mail handling and a valid business address inside ADGM, such as our Category 1 address at Addax Tower.",
//   },
//   {
//     q: "What's included in an ADGM virtual office package, and how much does it cost?",
//     a: "Aegis Coworking offers three virtual office tiers — Basic, Premium, and Enterprise — each with a registered ADGM business address, mail handling, and increasing levels of phone support and meeting room credits. Pricing is customized based on the tier and your business needs — request a quote for current rates.",
//   },
//   {
//     q: "Can I use a virtual office for my ADGM trade licence renewal?",
//     a: "Yes, a virtual office address at Aegis Coworking can be used both for initial ADGM company registration and for ongoing licence renewals.",
//   },
//   {
//     q: "Can I upgrade from a virtual office to a private office later?",
//     a: "Yes, you can convert to a dedicated desk or private office at Addax Tower at any time at preferential rates.",
//   },
// ]

// function VirtualOffice() {
//   const [openIndex, setOpenIndex] = useState(null)

//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i)
//   }

//   return (
//     <div className="App">
//       <Helmet>
//         <title>Virtual Office ADGM | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="ADGM virtual office with a registered Category 1 business address at Addax Tower. Mail handling, phone support, and meeting room credits — ideal for ADGM company registration."
//         />
//         <link rel="canonical" href="https://www.aegiscoworking.ae/virtual-office" />

//         <meta property="og:title" content="Virtual Office ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Registered ADGM business address, mail handling, and phone support at Addax Tower — from Basic to Enterprise packages."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.aegiscoworking.ae/virtual-office" />
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
//       <PageHero
//         title="ADGM VIRTUAL OFFICE SOLUTIONS"
//         subtitle="REGISTERED ADDRESS | MAIL HANDLING | PHONE SUPPORT"
//       />
//       <VirtualOfficeGallery />
//       <BusinessPresence />

//       <VOTierCard
//         image={voBasic}
//         tier="BASIC"
//         title="BASIC ADGM VIRTUAL OFFICE"
//         desc="Built for founders, freelancers and international entrepreneurs who need a registered ADGM address at launch. You get a Category 1 business address inside Addax Tower for your ADGM licence application, mail receiving and forwarding, and your company name on our on-site directory. Start operating from one of the Middle East's leading financial free zones without committing to a full office lease."
//         buttons={[{ label: "REQUEST QUOTE", primary: true }]}
//         imageLeft={true}
//       />

//       <VOTierCard
//         tier="PREMIUM"
//         title="PREMIUM ADGM VIRTUAL OFFICE"
//         desc="Everything in Basic, plus a dedicated UAE phone number with live call answering in your company name, 5 hours of meeting room credits inside ADGM each month, and priority mail handling. Designed for growing businesses that need a polished client-facing presence in Abu Dhabi Global Market. Host meetings in our on-site rooms, receive clients at the Addax Tower reception, and benefit from concierge-style administrative support."
//         image={voPremium}
//         buttons={[{ label: "REQUEST QUOTE", primary: true }]}
//         imageLeft={false}
//       />

//       <VOTierCard
//         tier="ENTERPRISE"
//         title="ENTERPRISE ADGM VIRTUAL OFFICE"
//         desc="Our most complete ADGM virtual office package. Includes everything in Premium, plus 10 hours of meeting room credits, a dedicated account manager, priority administrative and PRO support, and flexible access to our coworking floor. Ideal for international groups and regulated entities establishing an ADGM presence, or UAE-based companies that want maximum flexibility. Convert to a dedicated desk or private office at Addax Tower at any time at preferential rates."
//         image={voEnterprise}
//         buttons={[{ label: "REQUEST QUOTE", primary: true }]}
//         imageLeft={true}
//       />

//     <section className="vo-faq">
// <span className="contact-eyebrow">VIRTUAL OFFICE ADGM</span>
// <h2>FREQUENTLY ASKED QUESTIONS</h2>
//   <div className="vo-faq-list">
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

//       <InquiryCTA />
//       <Footer />
//     </div>
//   )
// }

// export default VirtualOffice










import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import VirtualOfficeGallery from '../components/VirtualOfficeGallery'
import BusinessPresence from '../components/BusinessPresence'
import VOTierCard from '../components/VOTierCard'
import InquiryCTA from '../components/InquiryCTA'
import Footer from '../components/Footer'

import voBasic from '../assets/vo-basic.webp'
import voPremium from '../assets/vo-premium.jpg'
import voEnterprise from '../assets/vo-enterprise.jpg'

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
    "name": "Virtual Office in Abu Dhabi",
    "description": "Virtual office with a registered ADGM business address.",
    "brand": {
      "@type": "Brand",
      "name": "Aegis Coworking"
    },
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
        tier="BASIC"
        title="BASIC ADGM VIRTUAL OFFICE"
        desc="Built for founders, freelancers and international entrepreneurs who need a registered ADGM address at launch. You get a Category 1 business address inside Addax Tower for your ADGM licence application, mail receiving and forwarding, and your company name on our on-site directory. Start operating from one of the Middle East's leading financial free zones without committing to a full office lease."
        buttons={[{ label: "REQUEST QUOTE", primary: true }]}
        imageLeft={true}
      />

      <VOTierCard
        tier="PREMIUM"
        title="PREMIUM ADGM VIRTUAL OFFICE"
        desc="Everything in Basic, plus a dedicated UAE phone number with live call answering in your company name, 5 hours of meeting room credits inside ADGM each month, and priority mail handling. Designed for growing businesses that need a polished client-facing presence in Abu Dhabi Global Market. Host meetings in our on-site rooms, receive clients at the Addax Tower reception, and benefit from concierge-style administrative support."
        image={voPremium}
        buttons={[{ label: "REQUEST QUOTE", primary: true }]}
        imageLeft={false}
      />

      <VOTierCard
        tier="ENTERPRISE"
        title="ENTERPRISE ADGM VIRTUAL OFFICE"
        desc="Our most complete ADGM virtual office package. Includes everything in Premium, plus 10 hours of meeting room credits, a dedicated account manager, priority administrative and PRO support, and flexible access to our coworking floor. Ideal for international groups and regulated entities establishing an ADGM presence, or UAE-based companies that want maximum flexibility. Convert to a dedicated desk or private office at Addax Tower at any time at preferential rates."
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
                <p className="vo-faq-answer">{f.a}</p>
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
