import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ---- SEO CONFIG -----------------------------------------------------
// Targets the top Search Console queries for aegiscoworking.ae:
// aegis coworking, coworking space adgm, private office adgm,
// virtual office adgm, meeting room adgm, office space adgm,
// low cost office adgm, adgm tech startup license
const SEO = {
  title: 'About Us | Aegis Coworking — Coworking & Office Space in ADGM, Addax Tower',
  description:
    'Aegis Coworking is a business centre inside Addax Tower, ADGM, Al Reem Island. Explore low-cost coworking space, private office, virtual office and meeting room solutions built for ADGM tech startup licence holders.',
  canonical: 'https://www.aegiscoworking.ae/about',
}

// NOTE: App.jsx already injects a sitewide LocalBusiness JSON-LD block via
// its own <Helmet>, which react-helmet-async merges into every page's
// <head> — so this page only adds an AboutPage entry that points at that
// same business @id, rather than redeclaring the whole LocalBusiness object.
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

const offerings = [
  {
    icon: '🖥️',
    title: 'Coworking Space, ADGM',
    copy: 'Hot desks and shared lounges inside Addax Tower for founders and freelancers who want a real coworking space in ADGM, no long lease required.',
    link: '/office-spaces',
    label: 'View desk plans',
  },
  {
    icon: '🚪',
    title: 'Private Office, ADGM',
    copy: 'Fully furnished, lockable suites for teams that need a dedicated private office in ADGM — flexible terms, low cost office pricing.',
    link: '/private-office',
    label: 'Explore private offices',
  },
  {
    icon: '📇',
    title: 'Virtual Office, ADGM',
    copy: 'A compliant virtual office ADGM registration requires, with mail handling — built for lean teams applying for an ADGM tech startup licence.',
    link: '/virtual-office',
    label: 'See virtual office plans',
  },
  {
    icon: '🤝',
    title: 'Meeting Rooms, ADGM',
    copy: 'Book a fully equipped meeting room in ADGM by the hour for client pitches, board calls, or interviews.',
    link: '/meeting-room',
    label: 'Reserve a room',
  },
]

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

      {/* ---------- HERO ---------- */}
      <section className="about-hero">
        <span className="contact-eyebrow">About Aegis Coworking</span>
        <h1>A working address inside ADGM, built around Addax Tower</h1>
        <p className="about-hero-lede">
          Aegis Coworking sits on a high floor of Addax Tower, Al Reem
          Island — a coworking space in ADGM designed for regulated
          entities, tech startups, and independent operators who need a
          serious address without a serious overhead.
        </p>
      </section>

      {/* ---------- STORY / WHY ADGM ---------- */}
      <section className="business-presence">
        <p className="desk-eyebrow" style={{ textAlign: 'center' }}>Our story</p>
        <h2>Why we set up inside Addax Tower</h2>
        <p className="bp-intro">
          We built Aegis Coworking because ADGM needed a workspace that
          takes the jurisdiction as seriously as its members do. Members
          join us to register a compliant address, apply for an ADGM tech
          startup licence, or simply find office space in ADGM without a
          five-year commitment — and stay for fibre internet, Wilkhahn
          seating, a coffee bar that's actually good, and a community of
          200+ companies working a few desks away.
        </p>
        <div className="bp-columns">
          <div className="bp-column">
            <div className="bp-column-icon">🏙️</div>
            <h4>Built for ADGM companies</h4>
            <ul>
              <li>Two minutes from ADGM's registration offices</li>
              <li>Addresses that meet FSRA and licence requirements</li>
              <li>Dedicated desk plans for Commercial Licence renewal</li>
            </ul>
          </div>
          <div className="bp-column">
            <div className="bp-column-icon">☕</div>
            <h4>Built for the everyday</h4>
            <ul>
              <li>24/7 member access, every day of the year</li>
              <li>Fibre internet and Wilkhahn ergonomic seating</li>
              <li>Coffee bar, mangrove views, 200+ member community</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- OFFERINGS ---------- */}
      <section className="services-section">
        <div className="services-header">
          <p className="hero-eyebrow" style={{ color: 'var(--color-primary)', background: 'var(--color-primary-soft)' }}>
            What we offer
          </p>
          <h2>Every way to work in ADGM, under one roof</h2>
          <p>
            From a single low-cost desk to a private office ADGM
            registration requires, Aegis has a plan for where your company
            is today.
          </p>
        </div>
        <div className="services">
          {offerings.map((o) => (
            <div className="service-card" key={o.title}>
              <span style={{ fontSize: '32px' }}>{o.icon}</span>
              <h3>{o.title}</h3>
              <p>{o.copy}</p>
              <Link to={o.link}>{o.label} →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- LICENCE / COMPLIANCE ---------- */}
      <section className="business-presence">
        <p className="desk-eyebrow" style={{ textAlign: 'center' }}>ADGM compliance</p>
        <h2>Set up your ADGM tech startup licence from a real address</h2>
        <p className="bp-intro">
          ADGM requires a physical or virtual presence for company
          registration and licence renewal. Our virtual office and
          dedicated desk plans are built to meet that requirement, so
          opening a low cost office in ADGM doesn't mean choosing between
          compliance and budget.
        </p>
        <div style={{ textAlign: 'center' }}>
          <Link to="/contact">
            <button className="btn-primary">Talk to our team</button>
          </Link>
        </div>
      </section>

      {/* ---------- LOCATION ---------- */}
      <section className="location-highlight">
        <div className="location-content">
          <div className="location-text">
            <h2>Addax Tower, Al Reem Island, Abu Dhabi</h2>
            <p>
              Two minutes from ADGM's registration offices, with parking,
              retail, and the Al Reem promenade downstairs. Tours run
              Monday to Friday, 9am–6pm; members get 24/7 building access
              every day of the year.
            </p>
            <div className="address-card">
              <span className="address-icon">📍</span>
              <div>
                <strong>Addax Tower, Al Reem Island</strong>
                <span>Abu Dhabi, UAE</span>
              </div>
            </div>
            <div className="location-stats">
              <div className="location-stat">
                <span className="stat-icon">👥</span>
                <strong>200+</strong>
                <span>Members</span>
              </div>
              <div className="location-stat">
                <span className="stat-icon">🕐</span>
                <strong>24/7</strong>
                <span>Member access</span>
              </div>
              <div className="location-stat">
                <span className="stat-icon">📍</span>
                <strong>1</strong>
                <span>Address in ADGM</span>
              </div>
            </div>
            <Link to="/contact">
              <button className="btn-primary">Book a tour</button>
            </Link>
          </div>
          <div className="location-map-frame">
            <iframe
              title="Aegis Coworking location — Addax Tower, Al Reem Island"
              src="https://www.google.com/maps?q=Addax+Tower+Al+Reem+Island+Abu+Dhabi&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
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

      <Footer />
    </>
  )
}

export default About
