import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LocationHighlight from '../components/LocationHighlight'

// ---- SEO CONFIG -----------------------------------------------------
// Targets the top Search Console queries for aegiscoworking.ae:
// aegis coworking, coworking space adgm, private office adgm,
// virtual office adgm, meeting room adgm, office space adgm,
// low cost office adgm, adgm tech startup license
const SEO = {
  title: 'About Us | Aegis Coworking in ADGM, Addax Tower',
  description:
    'Aegis Coworking in Addax Tower, ADGM offers coworking spaces, private offices, virtual offices and meeting rooms for startups.',
  canonical: 'https://www.aegiscoworking.ae/about',
}

// App.jsx already injects a sitewide LocalBusiness JSON-LD block via its own
// <Helmet>, which react-helmet-async merges into every page — so this page
// only adds an AboutPage entry pointing at that same business @id.
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SEO.canonical}#webpage`,
  url: SEO.canonical,
  name: SEO.title,
  description: SEO.description,
  about: { '@id': 'https://www.aegiscoworking.ae/#business' },
  isPartOf: { '@id': 'https://www.aegiscoworking.ae/#business' },
}

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
    q: "What coworking spaces are available in Addax Tower?",
    a: "Addax Tower on Al Reem Island is an established ADGM coworking hub with several providers operating from the building, reflecting strong demand for flexible workspace in the tower. Aegis Coworking is based there, offering dedicated desks, private offices, virtual offices, and meeting rooms with ADGM-compliant documentation and an on-site ADGM business address."
  },
  {
    q: "Is ADGM in the UAE?",
    a: "Yes. Abu Dhabi Global Market (ADGM) is an international financial centre located in Abu Dhabi, United Arab Emirates, spanning Al Maryah Island and Al Reem Island — including Addax Tower, where Aegis Coworking is based."
  },
  {
    q: "Is ADGM mainland or a free zone?",
    a: "ADGM is a financial free zone, not mainland. It operates under its own independent legal framework based on English common law, with its own courts and regulator, separate from UAE mainland civil and commercial law."
  },
  {
    q: "Is ADGM under MOHRE?",
    a: "No. As a financial free zone, ADGM is exempt from the UAE's federal labour law and falls outside the jurisdiction of the Ministry of Human Resources and Emiratisation (MOHRE). Employment in ADGM is governed by its own ADGM Employment Regulations and ADGM Courts."
  },
  {
    q: "How is ADGM different from DIFC?",
    a: "ADGM (Abu Dhabi) and DIFC (Dubai) are both UAE financial free zones operating under English common law with their own courts and regulators. The right choice generally comes down to which emirate best fits your business and clients — Aegis Coworking is based in ADGM, Abu Dhabi's international financial centre, at Addax Tower on Al Reem Island."
  },
]

function About() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <link rel="canonical" href={SEO.canonical} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
<script type="application/ld+json">
  {JSON.stringify(aboutPageSchema)}
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
        name: "About Us",
        item: "https://www.aegiscoworking.ae/about"
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

      {/* ---------- HEADER ---------- */}
      <section className="page-hero">
        <h1>ABOUT AEGIS COWORKING</h1>
        <p>Empowering Abu Dhabi's Businesses to Grow and Thrive</p>
      </section>

      {/* ---------- STORY / MISSION / VALUES ---------- */}
      <section className="about-simple">
        {/* <div className="services-header">
          <p className="hero-eyebrow" style={{ color: 'var(--color-primary)', background: 'var(--color-primary-soft)' }}>
            Who we are
          </p>
          <h2>What Aegis Coworking stands for</h2>
        </div> */}

        <div className="about-grid">
          <div className="about-block">
            <div className="about-block-icon">📖</div>
            <h3>THE AEGIS STORY</h3>
            <p>
              Aegis Coworking began as a small coworking space at Addax Tower, right on Al Reem Island, built around one idea: businesses registering in ADGM shouldn't have to choose between a prestigious address and an affordable one. We grew that into a full coworking space in ADGM — flexible desks, a genuine ADGM business address, and rates that don't quietly climb once you're settled in.
            </p>
          </div>

          <div className="about-block">
            <div className="about-block-icon">🎯</div>
            <h3>OUR MISSION</h3>
            <p>
              Our mission is to make ADGM easier to operate in, whatever stage your business is at. That's a dedicated desk or private office in ADGM for teams that need a fixed base, a serviced office for those who'd rather have everything handled, and a virtual office in ADGM for companies that need a real business address without renting a desk. Need to meet a client properly? Our meeting room on Al Reem Island covers that too.
            </p>
          </div>

          <div className="about-block">
            <div className="about-block-icon">🤝</div>
            <h3>OUR VALUES</h3>
            <p>
              We're guided by four things: professionalism, flexibility, integrity, and community. In practice, that means running a business centre in ADGM you can actually rely on — a registered office provider that gets your ADGM paperwork right, and a serviced office in Abu Dhabi where showing up next to other founders and finance professionals is part of the point. We also happen to be one of the more affordable coworking spaces in ADGM, because values shouldn't come with a premium price tag.
            </p>
          </div>
        </div>
      </section>

       <section className="vo-faq" style={{ paddingTop: 0 }}>
        <h2>ADGM Workspace Plans at a Glance</h2>
        <div className="vo-plans-table-wrap">
          <table className="vo-plans-table">
            <thead>
              <tr>
                <th>Workspace</th>
                <th className="vo-plans-price-col">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="vo-plans-name" data-label="Workspace">Hot Desk</td>
                <td className="vo-plans-price" data-label="Starting Price">AED 1,000/month</td>
              </tr>
              <tr>
                <td className="vo-plans-name" data-label="Workspace">Dedicated Desk</td>
                <td className="vo-plans-price" data-label="Starting Price">AED 1,150/month</td>
              </tr>
              <tr>
                <td className="vo-plans-name" data-label="Workspace">Virtual Office</td>
                <td className="vo-plans-price" data-label="Starting Price">AED 3,500/year</td>
              </tr>
              <tr>
                <td className="vo-plans-name" data-label="Workspace">Private Office</td>
                <td className="vo-plans-price" data-label="Starting Price">AED 4,500/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---------- FAQ ---------- */}
      <section className="vo-faq">
        <h2>ADGM FAQs</h2>
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

      {/* ---------- CTA (before location) ---------- */}
      <section className="final-cta">
        <div className="final-cta-card">
          <h2>Experience Business at the Heart of ADGM</h2>
          <p>
            Book a tour of Addax Tower and discover your ideal ADGM workspace at Aegis.
          </p>
          <div className="final-cta-buttons">
            <Link to="/contact">
              <button className="btn-join-now">REQUEST QUOTE</button>
            </Link>
            <Link to="/pricing" className="final-cta-secondary-link">
              See hot deals
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- LOCATION ---------- */}
      <LocationHighlight />

      <Footer />
    </>
  )
}

export default About
