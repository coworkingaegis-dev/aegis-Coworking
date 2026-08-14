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
  title: 'About Us | Aegis Coworking — Coworking & Office Space in ADGM, Addax Tower',
  description:
    'Aegis Coworking is a business centre inside Addax Tower, ADGM, Al Reem Island. Coworking space, private office, virtual office and meeting rooms built for ADGM tech startup licence holders.',
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

function About() {
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
      </Helmet>

      <Navbar />

      {/* ---------- HEADER ---------- */}
      <section className="page-hero">
        <h1>About Aegis Coworking</h1>
        <p>Your ADGM Address Inside Addax Tower</p>
      </section>

      {/* ---------- STORY / MISSION / VALUES ---------- */}
      <section className="about-simple">
        <div className="about-block">
          <h2>Our Story</h2>
          <p>
            Aegis Coworking was founded inside Addax Tower, Al Reem Island,
            to give ADGM's founders, tech startups, and independent
            operators a coworking space built for how they actually work —
            a serious address, without a serious lease.
          </p>
        </div>

        <div className="about-block">
          <h2>Our Mission</h2>
          <p>
            To make office space in ADGM accessible — whether that's a
            single low-cost desk, a private office, a virtual office for an
            ADGM tech startup licence, or a meeting room booked by the
            hour. No five-year commitments, no hidden fees.
          </p>
        </div>

        <div className="about-block">
          <h2>Our Values</h2>
          <p>
            Community, flexibility, and compliance. Every plan at Aegis
            Coworking is built to meet ADGM's registration requirements
            while staying genuinely low cost — so growing a company here
            doesn't mean choosing between the two.
          </p>
        </div>
      </section>

      {/* ---------- CTA (before location) ---------- */}
      <section className="final-cta">
        <div className="final-cta-card">
          <h2>Come see Aegis Coworking for yourself</h2>
          <p>
            Book a tour of Addax Tower and find out why 200+ companies call
            Aegis Coworking their ADGM address.
          </p>
          <div className="final-cta-buttons">
            <Link to="/contact">
              <button className="btn-join-now">Request a tour</button>
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
