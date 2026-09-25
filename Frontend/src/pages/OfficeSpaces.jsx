import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import DeskPricing from '../components/DeskPricing'
import HotDeskPricing from '../components/HotDeskPricing'
import NearbyFacilities from '../components/NearbyFacilities'
import Amenities from '../components/Amenities'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

// Keeps the Offer schema's priceValidUntil current without hardcoding a year
const priceValidUntil = `${new Date().getFullYear()}-12-31`

const faqSchema = [
  {
    q: "What is Dedicated and Flexi desk in ADGM?",
    a: "A Dedicated desk provides you a registered ADGM Business Address for the licence, but a Flexi Desk is suitable for individuals or companies without an ADGM licensing requirement. A Dedicated desk only costs AED 1,150 while a Flexi Desk costs only AED 1,000. You keep the same spot every time you come in, and your belongings can stay set up between visits.",
  },

  {
    q: "What's included in the one-time Due Diligence Fee?",
    a: "The AED 1,200 Due Diligence Fee covers the compliance and background checks required by ADGM before your licence and registered address can be activated. It's a one-time cost, separate from your monthly rent.",
  },
  {
    q: "Does this dedicated desk satisfy the ADGM flexi desk requirement?",
    a: "Yes. Our dedicated desk qualifies as an ADGM flexi desk, meeting the physical presence and registered address requirement for your ADGM business license application.",
  },
  {
    q: "Can I use this office space in ADGM to register my business?",
    a: "Yes. A dedicated desk includes a registered address that qualifies for your ADGM commercial licence application, so you can operate fully compliant from day one.",
  },
  {
    q: "What are the lease term options?",
    a: "Leases run from 12 to 36 months, with pricing that improves the longer you commit — annual, bi-annual, and quarterly rates are all available depending on what suits your business.",
  },
  {
    q: "Does your office space in ADGM include 24/7 access?",
    a: "Yes — dedicated desk members get secure building access around the clock, every day of the week, not just during standard business hours.",
  },
  {
    q: "Is this different from renting a traditional office space in ADGM?",
    a: "Yes — instead of a separate office for rent that you'd need to fit out yourself, you get fully furnished, flexible workspace in ADGM with utilities, cleaning and reception already included.",
  },
]
function OfficeSpaces() {
  return (
    <div className="App">
      <Helmet>
        <title>Office Space for Rent in ADGM, Addax Tower from AED 1,000</title>
      <meta name="description" content="Office space in ADGM from AED 1,000: Flexi Desk (hot desk) AED 1,000, Dedicated Desk AED 1,150. Offices for rent in Addax Tower, Al Reem Island." />
        <link rel="canonical" href="https://www.aegiscoworking.ae/office-space" />
       <meta property="og:title" content="Office Space for Rent in ADGM, Addax Tower from AED 1,000" />
       <meta property="og:description" content="Office space in ADGM from AED 1,000: Flexi Desk (hot desk) AED 1,000, Dedicated Desk AED 1,150. Offices for rent in Addax Tower, Al Reem Island." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/office-space" />
<meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Office Space for Rent in ADGM, Addax Tower from AED 1,000" />
<meta name="twitter:description" content="Office space in ADGM from AED 1,000: Flexi Desk (hot desk) AED 1,000, Dedicated Desk AED 1,150. Offices for rent in Addax Tower, Al Reem Island." />
<meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
<script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchema.map((f) => ({
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
    "serviceType": "Dedicated Desk Coworking Space",
    "name": "Dedicated Office Space in ADGM",
    "description":
      "Flexible furnished office space in Abu Dhabi with a dedicated desk and 24/7 access.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.aegiscoworking.ae/#business"
    },
    "areaServed": "Abu Dhabi",
    "offers": [
      {
        "@type": "Offer",
        "name": "Hot Desk",
        "price": "1000",
        "priceCurrency": "AED",
        "priceValidUntil": priceValidUntil,
        "availability": "https://schema.org/InStock",
        "url": "https://www.aegiscoworking.ae/office-space"
      },
      {
        "@type": "Offer",
        "name": "Dedicated Desk",
        "price": "1150",
        "priceCurrency": "AED",
        "priceValidUntil": priceValidUntil,
        "availability": "https://schema.org/InStock",
        "url": "https://www.aegiscoworking.ae/office-space"
      }
    ]
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
        name: "Office Space",
        item: "https://www.aegiscoworking.ae/office-space"


      }
    ]
  })}
</script>
      </Helmet>
      <Navbar />
     <PageHero
  title="OFFICE SPACE IN ADGM"
  subtitle="Dedicated & Flexi Desks in ADGM from AED 1,000 /month"
  description="ADGM-ready workspace & business center at Addax Tower, Al Reem Island — with 24/7 access, meeting-room access and a professional business address."
/>
      <div className="pricing-compare">
      <DeskPricing />
       <HotDeskPricing />
        </div>
      <NearbyFacilities />
      <Amenities title="ADGM AMENITIES" />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
export default OfficeSpaces
