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
              Aegis Coworking was established at Addax Tower to provide
              businesses in ADGM with a professional workspace that
              combines a prestigious business address, flexible workspace
              solutions, and a cheap working environment.
            </p>
          </div>

          <div className="about-block">
            <div className="about-block-icon">🎯</div>
            <h3>OUR MISSION</h3>
            <p>
              Our mission is to provide businesses with flexible and
              professional workspace solutions that support every stage of
              growth from independent professionals and emerging
              startups to established teams operating within ADGM.
            </p>
          </div>

          <div className="about-block">
            <div className="about-block-icon">🤝</div>
            <h3>OUR VALUES</h3>
            <p>
              We are guided by professionalism, flexibility, integrity, and
              community. We create an environment where businesses can
              establish their presence, build meaningful connections, and
              operate with confidence in ADGM.
            </p>
          </div>
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
