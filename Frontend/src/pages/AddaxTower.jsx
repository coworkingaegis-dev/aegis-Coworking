import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import LocationHighlight from '../components/LocationHighlight'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

const PAGE_URL = 'https://www.aegiscoworking.ae/addax-tower-al-reem-island'
const PAGE_TITLE = 'Addax Tower Business Centre, Al Reem Island | AccessRP Lease'
const PAGE_DESCRIPTION =
  'Business centre on the 38th floor of Addax Tower, Al Reem Island (ADGM). Get an ADGM tenancy contract with instant AccessRP registration for licence & bank.'

/* ---------- Content data ---------- */

const towerFacts = [
  { value: '282 m', label: 'Height — one of Abu Dhabi’s tallest towers' },
  { value: '60', label: 'Storeys of office space' },
  { value: '38th', label: 'Floor — Aegis Coworking, Unit 3812' },
  { value: '1,111', label: 'Car park spaces in the tower' },
]

const workspaces = [
  {
    name: 'Hot Desk (Flexi Desk)',
    price: 'From AED 1,000',
    unit: '/month',
    text: 'Flexible seat in our shared coworking area on the 38th floor. No long-term commitment.',
    to: '/office-space',
    cta: 'View office space',
  },
  {
    name: 'Dedicated Desk',
    price: 'From AED 1,150',
    unit: '/month',
    text: 'Your own permanent desk with a registered ADGM business address for licensing.',
    to: '/office-space',
    cta: 'View dedicated desks',
  },
  {
    name: 'Private Office',
    price: 'From AED 4,500',
    unit: '/month',
    text: 'Lockable, fully furnished office for teams, with Gulf views and 24/7 access.',
    to: '/private-office',
    cta: 'View private offices',
  },
  {
    name: 'Virtual Office',
    price: 'From AED 292',
    unit: '/month',
    text: 'A prestigious Addax Tower address for company registration without a physical desk.',
    to: '/virtual-office',
    cta: 'View virtual office',
  },
  {
    name: 'Meeting Room',
    price: 'Hourly',
    unit: 'booking',
    text: 'Professional meeting room for client meetings, interviews and presentations.',
    to: '/meeting-room',
    cta: 'View meeting room',
  },
  {
    name: 'Day Pass',
    price: 'AED 100',
    unit: '/day',
    text: 'Work from Addax Tower for a day (9 AM–6 PM), or AED 150 for 24-hour access.',
    to: '/day-pass',
    cta: 'View day pass',
  },
]

const accessRpSteps = [
  {
    title: 'Choose your workspace',
    text: 'Pick a dedicated desk, private office or virtual office in Addax Tower that matches your ADGM licence type.',
  },
  {
    title: 'Sign your lease',
    text: 'We prepare a standard ADGM tenancy contract with transparent pricing — no deposit, no setup fees and free registration.',
  },
  {
    title: 'Instant AccessRP registration',
    text: 'Our team submits your lease on AccessRP, ADGM’s official real property portal, as soon as it is signed. You simply accept it using UAE Pass.',
  },
  {
    title: 'Use it for licensing & banking',
    text: 'Your registered lease supports your ADGM company registration, licence renewal, visa quota and corporate bank account application.',
  },
]

const relatedGuides = [
  {
    title: 'Addax Tower ADGM for Businesses: Workspace, Location & Practical Considerations',
    to: '/blog/addax-tower-adgm-business-workspace',
  },
  {
    title: 'Is Al Reem Island Part of ADGM? What Businesses Need to Know',
    to: '/blog/is-al-reem-island-part-of-adgm',
  },
  {
    title: 'Coworking Space on Al Reem Island: Prices & Options',
    to: '/blog/affordable-coworking-al-reem-island-adgm',
  },
  {
    title: 'What Is the Minimum Office You Need for an ADGM Licence?',
    to: '/blog/low-cost-office-adgm-budget-friendly-workspace-solutions-in-abu-dhabi',
  },
  {
    title: 'Can You Register an ADGM Company Remotely?',
    to: '/blog/adgm-company-registration-remote-uae',
  },
  {
    title: 'ADGM Coworking Visa Quota: Visas Per Desk Explained',
    to: '/blog/adgm-coworking-visa-quota-employees-per-desk',
  },
]

const faqs = [
  {
    q: 'Is Addax Tower in ADGM?',
    a: 'Yes. Addax Tower is in the City of Lights development on Al Reem Island, which became part of Abu Dhabi Global Market (ADGM) on 24 April 2023. Businesses in Addax Tower operate under the ADGM framework and English common law.',
    aDisplay: (
      <>
        Yes. Addax Tower is in the City of Lights development on Al Reem Island, which became part of
        Abu Dhabi Global Market (ADGM) on 24 April 2023. Businesses in Addax Tower operate under the ADGM
        framework and English common law. Read more:{' '}
        <Link to="/blog/is-al-reem-island-part-of-adgm" className="inline-link">
          is Al Reem Island part of ADGM
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How much does office space in Addax Tower cost?',
    a: 'At Aegis Coworking in Addax Tower, a hot desk starts from AED 1,000 per month, a dedicated desk from AED 1,150 per month, a private office from AED 4,500 per month and a virtual office from AED 292 per month. There is no deposit and no setup fee.',
    aDisplay: (
      <>
        At Aegis Coworking in Addax Tower, a hot desk starts from AED 1,000 per month, a dedicated desk
        from AED 1,150 per month, a private office from AED 4,500 per month and a virtual office from
        AED 292 per month. There is no deposit and no setup fee. See full{' '}
        <Link to="/pricing" className="inline-link">pricing</Link>.
      </>
    ),
  },
  {
    q: 'What is the ADGM equivalent of Ejari for a tenancy contract?',
    a: 'Ejari is Dubai’s tenancy system and does not apply in ADGM. Leases for offices on Al Reem Island and Al Maryah Island are registered with the ADGM Registration Authority through AccessRP. Aegis Coworking registers your lease on AccessRP for you, and you accept it with UAE Pass.',
  },
  {
    q: 'What is instant registration on AccessRP?',
    a: 'AccessRP is ADGM’s digital real property platform for lease registration, renewal and modification. When you sign with Aegis Coworking, we submit your lease on AccessRP straight away, so you do not need to visit any office or chase paperwork — you only approve it through UAE Pass.',
  },
  {
    q: 'Can I use an Addax Tower office to open a corporate bank account?',
    a: 'Yes. UAE banks usually ask for your company licence and a registered lease or office address when opening a corporate account. A dedicated desk, private office or virtual office at Aegis Coworking includes a registered ADGM address and AccessRP-registered lease that you can submit with your application.',
  },
  {
    q: 'Can I register an ADGM company with an Addax Tower address?',
    a: 'Yes. Dedicated desk, private office and virtual office plans at Aegis Coworking include a registered Addax Tower address suitable for ADGM company registration and licence renewal.',
    aDisplay: (
      <>
        Yes. Dedicated desk, private office and virtual office plans at Aegis Coworking include a
        registered Addax Tower address suitable for ADGM company registration and licence renewal. See{' '}
        <Link to="/blog/adgm-license-workspace-questions-before-applying" className="inline-link">
          questions to ask before your ADGM licence application
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Is there parking at Addax Tower?',
    a: 'Yes. Addax Tower has a multi-level car park with more than 1,100 spaces, plus easy taxi access and nearby bus stops on Al Reem Island.',
  },
  {
    q: 'Can I get short-term office space in Addax Tower?',
    a: 'Yes. You can use a day pass from AED 100 or a hot desk with no long-term commitment. For ADGM licensing, dedicated desks and private offices are available on flexible lease terms.',
    aDisplay: (
      <>
        Yes. You can use a{' '}
        <Link to="/day-pass" className="inline-link">day pass</Link> from AED 100 or a hot desk with no
        long-term commitment. For ADGM licensing, dedicated desks and private offices are available on
        flexible lease terms.
      </>
    ),
  },
]

/* ---------- Page ---------- */

function AddaxTower() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="App at-page">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Place',
            name: 'Addax Tower',
            alternateName: 'Addax Office Tower',
            description:
              '60-storey, 282-metre office tower in the City of Lights development on Al Reem Island, within Abu Dhabi Global Market (ADGM).',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Addax Tower, City of Lights, Al Reem Island, RT3',
              addressLocality: 'Abu Dhabi',
              addressCountry: 'AE',
            },
            geo: { '@type': 'GeoCoordinates', latitude: 24.4989303, longitude: 54.4031693 },
            containedInPlace: { '@type': 'Place', name: 'Al Reem Island, Abu Dhabi Global Market (ADGM)' },
            containsPlace: { '@id': 'https://www.aegiscoworking.ae/#business' },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Business Centre',
            name: 'Addax Tower Business Centre, Al Reem Island',
            description:
              'Hot desks, dedicated desks, private offices, virtual offices, meeting rooms and day passes in Addax Tower, ADGM, with lease registration on AccessRP.',
            provider: { '@type': 'LocalBusiness', '@id': 'https://www.aegiscoworking.ae/#business' },
            areaServed: ['Al Reem Island', 'Abu Dhabi Global Market', 'Abu Dhabi'],
            offers: {
              '@type': 'AggregateOffer',
              lowPrice: '100',
              highPrice: '4500',
              priceCurrency: 'AED',
              url: PAGE_URL,
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aegiscoworking.ae/' },
              { '@type': 'ListItem', position: 2, name: 'Addax Tower, Al Reem Island', item: PAGE_URL },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      <PageHero
        title="ADDAX TOWER BUSINESS CENTRE ON AL REEM ISLAND"
        subtitle="ADGM BUSINESS CENTRE | 38TH FLOOR | INSTANT ACCESSRP LEASE REGISTRATION"
        description="Aegis Coworking is an ADGM business centre on the 38th floor of Addax Tower, Al Reem Island — offering desks, private offices and virtual offices with a registered ADGM address."
      />

      <div className="at-hero-actions">
        <Link to="/contact">
          <button className="btn-primary">BOOK A FREE TOUR</button>
        </Link>
        <Link to="/pricing" className="at-hero-link">
          See pricing →
        </Link>
      </div>

      {/* ===== Quick answer / intro ===== */}
      <section className="at-intro">
        <Reveal y={20}>
          <div className="at-intro-grid">
            <div className="at-intro-text">
              <span className="contact-eyebrow">ADDAX TOWER ADGM</span>
              <h2>Your business address in Abu Dhabi’s landmark tower</h2>
              <p className="at-lead">
                <strong>Addax Tower</strong> is a 60-storey, 282-metre office tower in the City of Lights
                development on <strong>Al Reem Island</strong>, inside the Abu Dhabi Global Market (ADGM)
                financial free zone. Aegis Coworking operates from <strong>Unit 3812 on the 38th floor</strong>,
                giving startups, freelancers, consultants and SMEs a fully furnished office with sweeping
                views across the Arabian Gulf.
              </p>
              <p>
                Whether you need a flexible desk for a day, a dedicated desk for your ADGM licence or a
                private office for your team, you get a professional Addax Tower address, 24/7 member
                access, high-speed WiFi, meeting rooms and a lease registered on AccessRP — with no deposit,
                no setup fees and free registration.
              </p>
            </div>

            <div className="at-facts">
              {towerFacts.map((f) => (
                <div className="at-fact" key={f.label}>
                  <strong>{f.value}</strong>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== Al Reem Island & ADGM ===== */}
      <section className="at-reem">
        <div className="at-container">
          <span className="contact-eyebrow">AL REEM ISLAND</span>
          <h2>Why set up on Al Reem Island, ADGM?</h2>
          <p className="at-section-lead">
            On 24 April 2023, ADGM’s jurisdiction expanded from Al Maryah Island to include Al Reem Island.
            Together the two islands now form one of the world’s largest financial districts, covering
            14.38 million square metres.
          </p>

          <div className="at-reem-grid">
            <div className="at-reem-card">
              <div className="at-reem-icon">⚖️</div>
              <h3>English common law</h3>
              <p>
                Companies in Addax Tower are regulated by ADGM’s independent framework based on English
                common law — trusted by international founders, investors and banks.
              </p>
            </div>
            <div className="at-reem-card">
              <div className="at-reem-icon">💰</div>
              <h3>Lower ADGM licence fees</h3>
              <p>
                From 1 January 2025, ADGM cut commercial licence fees for non-financial and retail
                businesses by 50% or more, making Al Reem Island a cost-effective place to start.
              </p>
            </div>
            <div className="at-reem-card">
              <div className="at-reem-icon">🌆</div>
              <h3>Live, work &amp; meet</h3>
              <p>
                Al Reem Island combines offices, residences, malls, hotels and waterfront promenades, with
                quick bridge access to Al Maryah Island and downtown Abu Dhabi.
              </p>
            </div>
            <div className="at-reem-card">
              <div className="at-reem-icon">✈️</div>
              <h3>Easy to reach</h3>
              <p>
                Addax Tower sits on Al Reem Island’s main business strip, with direct highway access,
                on-site parking and taxis at the door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Workspace options ===== */}
      <section className="at-spaces">
        <div className="at-container">
          <span className="contact-eyebrow">WORKSPACE OPTIONS</span>
          <h2>Workspace options inside Addax Tower</h2>
          <p className="at-section-lead">
            Affordable, fully furnished workspace in ADGM — from a single-day hot desk to a lockable
            private office for your whole team.
          </p>

          <div className="at-spaces-grid">
            {workspaces.map((w) => (
              <div className="at-space-card" key={w.name}>
                <h3>{w.name}</h3>
                <div className="at-space-price">
                  {w.price} <span>{w.unit}</span>
                </div>
                <p>{w.text}</p>
                <Link to={w.to} className="at-space-link">
                  {w.cta} →
                </Link>
              </div>
            ))}
          </div>
          <p className="at-note">
            ADGM government fees and a one-time due diligence fee apply to licensing plans. No deposit, no
            hidden setup or admin fees.
          </p>
        </div>
      </section>

      {/* ===== AccessRP ===== */}
      <section className="at-accessrp">
        <div className="at-container">
          <span className="contact-eyebrow">INSTANT REGISTRATION</span>
          <h2>Instant lease registration on AccessRP</h2>
          <p className="at-section-lead">
            In ADGM there is no Ejari. Office tenancy contracts on Al Reem Island are registered with the
            ADGM Registration Authority through <strong>AccessRP</strong>, ADGM’s digital real property
            platform for lease registration, renewal and modification. Aegis Coworking handles it for you.
          </p>

          <ol className="at-steps">
            {accessRpSteps.map((s, i) => (
              <li className="at-step" key={s.title}>
                <span className="at-step-num">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="at-callout-grid">
            <div className="at-callout">
              <h3>ADGM tenancy contract — the “Ejari” of ADGM</h3>
              <p>
                Your AccessRP-registered lease is the official proof of your office in ADGM. It is what the
                Registration Authority checks for company registration, licence renewal and visa quota —
                the role Ejari plays in Dubai.
              </p>
            </div>
            <div className="at-callout">
              <h3>An ADGM office for your corporate bank account</h3>
              <p>
                Banks in the UAE typically request your licence, a registered lease and a verifiable office
                address. With a desk or office in Addax Tower, you can provide all three from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Location map (shared component) ===== */}
      <LocationHighlight />

      {/* ===== Related blogs ===== */}
      <section className="at-guides">
        <div className="at-container">
          <span className="contact-eyebrow">GUIDES</span>
          <h2>Addax Tower &amp; Al Reem Island guides</h2>
          <div className="at-guides-grid">
            {relatedGuides.map((g) => (
              <Link to={g.to} className="at-guide-card" key={g.to}>
                <span className="at-guide-tag">Blog</span>
                <h3>{g.title}</h3>
                <span className="at-guide-read">Read article →</span>
              </Link>
            ))}
          </div>
          <div className="at-guides-more">
            <Link to="/blogs" className="inline-link">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="vo-faq">
        <span className="contact-eyebrow">ADDAX TOWER FAQ</span>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="vo-faq-list">
          {faqs.map((f, i) => (
            <div
              className={`vo-faq-item ${openIndex === i ? 'open' : ''}`}
              key={f.q}
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

      <FinalCTA />
      <Footer />
    </div>
  )
}

export default AddaxTower
