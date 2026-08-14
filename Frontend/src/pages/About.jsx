import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'

// ---- SEO CONFIG -----------------------------------------------------
// Targets the top Search Console queries for aegiscoworking.ae:
// aegis coworking, coworking space adgm, private office adgm,
// virtual office adgm, meeting room adgm, office space adgm,
// low cost office adgm, adgm tech startup license
const SEO = {
  title: 'About Us | Aegis Coworking — Coworking & Office Space in ADGM, Addax Tower',
  description:
    'Aegis Coworking is a business centre inside Addax Tower, ADGM, Al Reem Island. Discover our story and explore low-cost coworking space, private office, virtual office and meeting room solutions built for ADGM tech startup licence holders.',
  canonical: 'https://www.aegiscoworking.ae/about',
}

// Same LocalBusiness entity as App.jsx (shared @id so Google treats every
// page as describing one business), with an AboutPage wrapper on top.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${SEO.canonical}#webpage`,
      url: SEO.canonical,
      name: SEO.title,
      description: SEO.description,
      about: { '@id': 'https://www.aegiscoworking.ae/#business' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.aegiscoworking.ae/#business',
      name: 'Aegis Coworking Space ADGM',
      url: 'https://www.aegiscoworking.ae',
      logo: 'https://www.aegiscoworking.ae/logo.png',
      image: 'https://www.aegiscoworking.ae/og-image.jpg',
      telephone: '+971503926316',
      email: 'contact@aegiscoworking.ae',
      description:
        'Aegis Coworking provides coworking spaces, private offices, virtual offices, meeting rooms, office spaces and day passes in Addax Tower, ADGM, Abu Dhabi.',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Addax Tower, Al Reem Island, Tamouh',
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi',
        addressCountry: 'AE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.4989303,
        longitude: 54.4031693,
      },
      hasMap:
        'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
      openingHours: 'Mo-Su 00:00-23:59',
      sameAs: ['https://www.linkedin.com/company/aegis-coworking/'],
    },
  ],
}

const offerings = [
  {
    tag: '01',
    title: 'Coworking Space, ADGM',
    copy:
      'Hot desks and shared lounges inside Addax Tower, built for founders and freelancers who want a serious coworking space in ADGM without the overhead of a full office lease.',
    link: '/office-spaces',
    label: 'View desk plans',
  },
  {
    tag: '02',
    title: 'Private Office, ADGM',
    copy:
      'Fully furnished, lockable private office suites for teams that need a dedicated address inside ADGM — flexible terms, without sacrificing the low cost office ADGM founders look for.',
    link: '/private-office',
    label: 'Explore private offices',
  },
  {
    tag: '03',
    title: 'Virtual Office, ADGM',
    copy:
      'A registered ADGM virtual office package for companies that need compliant business presence and mail handling, ideal for lean teams applying for an ADGM tech startup licence.',
    link: '/virtual-office',
    label: 'See virtual office plans',
  },
  {
    tag: '04',
    title: 'Meeting Rooms, ADGM',
    copy:
      'Book a fully equipped meeting room in ADGM by the hour — for client pitches, board calls, or interviews, steps from Addax Tower\u2019s lobby.',
    link: '/meeting-room',
    label: 'Reserve a meeting room',
  },
]

const stats = [
  { value: '200+', label: 'Members in our community' },
  { value: '24/7', label: 'Access for every member' },
  { value: '1', label: 'Address inside ADGM' },
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
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navbar />

      <main className="about-page">
        {/* ---------- HERO ---------- */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <span className="eyebrow">About Aegis Coworking</span>
            <h1>
              A working address inside <span className="accent">ADGM</span>,
              built around the tower, the water, and the work.
            </h1>
            <p className="hero-lede">
              Aegis Coworking sits on a high floor of Addax Tower, Al Reem
              Island — a coworking space in ADGM designed for the people who
              actually build companies here: regulated entities, tech
              startups, and independent operators who need a serious address
              without a serious overhead.
            </p>
            <div className="hero-cta-row">
              <Link to="/contact" className="btn-primary">Request a tour</Link>
              <Link to="/pricing" className="btn-ghost">See hot deals</Link>
            </div>
          </div>
          <div className="hero-skyline" aria-hidden="true">
            <svg viewBox="0 0 1200 220" preserveAspectRatio="none">
              <path
                d="M0 220 L0 140 L60 140 L60 100 L100 100 L100 160 L150 160 L150 60 L210 60 L210 150 L260 150 L260 90 L300 90 L300 170 L360 170 L360 40 L420 40 L420 30 L470 30 L470 170 L520 170 L520 110 L580 110 L580 150 L640 150 L640 20 L690 20 L690 10 L720 10 L720 160 L780 160 L780 80 L830 80 L830 140 L880 140 L880 50 L930 50 L930 150 L990 150 L990 100 L1040 100 L1040 170 L1090 170 L1090 60 L1140 60 L1140 140 L1200 140 L1200 220 Z"
              />
            </svg>
          </div>
        </section>

        {/* ---------- STORY ---------- */}
        <section className="about-story">
          <div className="story-grid">
            <div className="story-copy">
              <span className="eyebrow eyebrow-dark">Our story</span>
              <h2>Why we set up inside Addax Tower</h2>
              <p>
                We started Aegis Coworking because ADGM needed a workspace
                that took the jurisdiction as seriously as its members do.
                Every desk, private office, and meeting room we built sits
                inside Addax Tower on Al Reem Island — close to the
                regulator, the courts, and the mangroves that give this
                stretch of the city its view.
              </p>
              <p>
                Members join us to register a compliant address, apply for
                an ADGM tech startup licence, or simply find office space in
                ADGM that doesn't require a five-year commitment. What they
                stay for is the day-to-day: fibre internet, Wilkhahn
                seating, a coffee bar that's actually good, and a community
                of over 200 companies working a few desks away.
              </p>
            </div>
            <div className="story-stats">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- OFFERINGS ---------- */}
        <section className="about-offerings">
          <span className="eyebrow eyebrow-dark">What we offer</span>
          <h2>Every way to work in ADGM, under one roof</h2>
          <p className="section-lede">
            Whether you need a single low-cost desk or a private office ADGM
            registration requires, Aegis Coworking has a plan built for
            where your company is today.
          </p>

          <div className="offerings-grid">
            {offerings.map((o) => (
              <article className="offer-card" key={o.tag}>
                <span className="offer-tag">{o.tag}</span>
                <h3>{o.title}</h3>
                <p>{o.copy}</p>
                <Link to={o.link} className="offer-link">
                  {o.label} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- LICENCE / COMPLIANCE STRIP ---------- */}
        <section className="about-licence">
          <div className="licence-inner">
            <h2>Set up your ADGM tech startup licence from a real address</h2>
            <p>
              ADGM requires a physical or virtual presence for company
              registration and licence renewal. Our virtual office and
              dedicated desk plans are built to meet that requirement, so
              opening a low cost office in ADGM doesn't mean choosing
              between compliance and budget.
            </p>
            <Link to="/contact" className="btn-primary">
              Talk to our team
            </Link>
          </div>
        </section>

        {/* ---------- LOCATION ---------- */}
        <section className="about-location">
          <div className="location-grid">
            <div>
              <span className="eyebrow eyebrow-dark">Find us</span>
              <h2>Addax Tower, Al Reem Island, Abu Dhabi</h2>
              <p>
                Aegis Coworking is a two-minute walk from ADGM's registration
                offices, with parking, retail, and the Al Reem promenade
                downstairs. Tours run Monday to Friday, 9am–6pm; members get
                24/7 building access every day of the year.
              </p>
              <ul className="location-list">
                <li><strong>Phone:</strong> +971 50 392 6316</li>
                <li><strong>Email:</strong> contact@aegiscoworking.ae</li>
                <li><strong>Address:</strong> Addax Tower, Al Reem Island, Abu Dhabi</li>
              </ul>
              <Link to="/contact" className="btn-primary">Book a tour</Link>
            </div>
            <div className="location-map" role="img" aria-label="Addax Tower, Al Reem Island, Abu Dhabi">
              <iframe
                title="Aegis Coworking location — Addax Tower, Al Reem Island"
                src="https://www.google.com/maps?q=Addax+Tower+Al+Reem+Island+Abu+Dhabi&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default About
