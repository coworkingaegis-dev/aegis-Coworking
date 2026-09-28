import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import LocationHighlight from '../components/LocationHighlight'

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


const faqs = [
  {
    q: 'Do existing Al Reem Island businesses need to switch to an ADGM licence?',
    a: 'Yes. Since Al Reem Island joined ADGM, companies based on the island are licensed by the ADGM Registration Authority. More than 500 existing Al Reem Island companies have already moved to ADGM licences.',
    aDisplay: (
      <>
        Yes. Since Al Reem Island joined ADGM, companies based on the island are licensed by the ADGM
        Registration Authority. More than 500 existing Al Reem Island companies have already moved to ADGM
        licences. Read more:{' '}
        <Link to="/blog/is-al-reem-island-part-of-adgm" className="inline-link">
          is Al Reem Island part of ADGM
        </Link>
        .
      </>
    ),
  },
  {
    q: 'I live outside the UAE. Can I still approve my lease on AccessRP?',
    a: 'Yes. UAE residents sign in to UAE Pass with their Emirates ID, and non-residents can register for UAE Pass online. This lets overseas founders approve their lease and set up their ADGM company remotely.',
    aDisplay: (
      <>
        Yes. UAE residents sign in to UAE Pass with their Emirates ID, and non-residents can register for
        UAE Pass online. This lets overseas founders approve their lease and set up their ADGM company
        remotely. See{' '}
        <Link to="/blog/adgm-company-registration-remote-uae" className="inline-link">
          can you register an ADGM company remotely
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Can my lease be updated if I upgrade my workspace later?',
    a: 'Yes. AccessRP also handles lease renewals and modifications. If you move from a desk to a private office, our team updates your registration on AccessRP for you.',
    aDisplay: (
      <>
        Yes. AccessRP also handles lease renewals and modifications. If you move from a{' '}
        <Link to="/office-space" className="inline-link">desk</Link> to a{' '}
        <Link to="/private-office" className="inline-link">private office</Link>, our team updates your
        registration on AccessRP for you.
      </>
    ),
  },
  {
    q: 'Can I register an ADGM company without a physical desk?',
    a: 'Yes. A virtual office gives you a registered Addax Tower address for ADGM company registration without renting a desk. You can add a desk or private office later as your business grows.',
    aDisplay: (
      <>
        Yes. A{' '}
        <Link to="/virtual-office" className="inline-link">virtual office</Link> gives you a registered
        Addax Tower address for ADGM company registration without renting a desk. You can add a desk or
        private office later as your business grows.
      </>
    ),
  },
  {
    q: 'Does my workspace affect how many visas I can get?',
    a: 'Yes. In ADGM, your visa allocation is linked to your registered workspace, so the number of desks or the office size you lease matters.',
    aDisplay: (
      <>
        Yes. In ADGM, your visa allocation is linked to your registered workspace, so the number of desks
        or the office size you lease matters. See{' '}
        <Link to="/blog/adgm-coworking-visa-quota-employees-per-desk" className="inline-link">
          ADGM visa quota per desk
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Can I hold client meetings in Addax Tower?',
    a: 'Yes. Aegis Coworking has a professional meeting room on the 38th floor for client meetings, interviews and presentations, bookable by the hour.',
    aDisplay: (
      <>
        Yes. Aegis Coworking has a professional{' '}
        <Link to="/meeting-room" className="inline-link">meeting room</Link> on the 38th floor for client
        meetings, interviews and presentations, bookable by the hour.
      </>
    ),
  },
  {
    q: 'Can I visit the business centre before signing?',
    a: 'Yes. You can book a free tour of Aegis Coworking in Addax Tower, Monday to Friday, 9:00 AM to 6:00 PM.',
    aDisplay: (
      <>
        Yes. You can{' '}
        <Link to="/contact" className="inline-link">book a free tour</Link> of Aegis Coworking in Addax
        Tower, Monday to Friday, 9:00 AM to 6:00 PM.
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
        title="ADDAX TOWER BUSINESS CENTRE IN AL REEM ISLAND"
        subtitle="BUSINESS CENTRE IN ABU DHABI | 38TH FLOOR | INSTANT ACCESSRP LEASE REGISTRATION"
        description="Desks, private offices and virtual offices with a registered ADGM address in Addax Tower."
      />

     

      {/* ===== Quick answer / intro ===== */}
      <section className="at-intro">
        <Reveal y={20}>
          <div className="at-intro-grid">
            <div className="at-intro-text">
              <span className="contact-eyebrow">ADDAX TOWER ADGM</span>
              <h2>YOUR BUSINESS ADDRESS IN ADDAX TOWER</h2>
               <p className="at-lead">
                <strong>Addax Tower</strong> is a landmark office tower in the City of Lights development on{' '}
                <strong>Al Reem Island</strong>, inside the Abu Dhabi Global Market (ADGM) financial free
                zone. From our floor, startups, freelancers, consultants and SMEs work in a fully furnished
                space with sweeping views across the Arabian Gulf.
              </p>
              <p>
                Looking for the best office space in Abu Dhabi Global Market? Every member gets 24/7 access,
                high-speed WiFi, meeting rooms and a professional business community — with no deposit, no
                setup fees and free registration.
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
          <h2>WHY SET UP ON AL REEM ISLAND, ADGM?</h2>
          <p className="at-section-lead">
            On 24 April 2023, ADGM’s jurisdiction expanded from Al Maryah Island to include Al Reem Island.
            Together the two islands now form one of the world’s largest financial districts, covering
            14.38 million square metres.
          </p>

          <div className="at-reem-grid">
            <div className="at-reem-card">
              <div className="at-reem-icon">⚖️</div>
              <h3>ENGLISH COMMON LAW</h3>
              <p>
                ADGM runs an independent legal framework based on English common law — trusted by
                international founders, investors and banks.
              </p>
            </div>
            <div className="at-reem-card">
              <div className="at-reem-icon">💰</div>
              	<h3>LOWER ADGM LICENCE FEES</h3>
              <p>
               From 1 January 2025, ADGM cut commercial licence fees for non-financial and retail
                businesses by 50% or more.
              </p>
            </div>
            <div className="at-reem-card">
              <div className="at-reem-icon">🌆</div>
              <h3>LIVE, WORK &amp; MEET</h3>
              <p>
                Al Reem Island combines offices, residences, malls, hotels and waterfront promenades, with
                quick bridge access to Al Maryah Island and downtown Abu Dhabi.
              </p>
            </div>
            <div className="at-reem-card">
              <div className="at-reem-icon">✈️</div>
              <h3>EASY TO REACH</h3>
              <p>
                Addax Tower sits on Al Reem Island’s main business strip, with direct highway access and
                taxis at the door.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* ===== AccessRP ===== */}
      <section className="at-accessrp">
        <div className="at-container">
          <span className="contact-eyebrow">INSTANT REGISTRATION</span>
          <h2>INSTANT LEASE REGISTRATION ON ACCESSRP</h2>
          <p className="at-section-lead">
            <strong>AccessRP</strong> is ADGM’s official digital real property platform. Every office lease
            on Al Reem Island must be registered on it with the ADGM Registration Authority — and Aegis
            Coworking handles it for you.
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
                Ejari is Dubai’s tenancy system and does not apply in ADGM. Here, your AccessRP-registered
                lease is the official proof of office that the Registration Authority checks.
              </p>
            </div>
            <div className="at-callout">
              <h3>An ADGM office for your corporate bank account</h3>
              <p>
                UAE banks typically ask for your licence, a registered lease and a verifiable office
                address. With a workspace in Addax Tower, you can provide all three from day one.
              </p>
            </div>
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

      {/* ===== Location map (shared component) ===== */}
      <LocationHighlight />
      <Footer />
    </div>
  )
}

export default AddaxTower
