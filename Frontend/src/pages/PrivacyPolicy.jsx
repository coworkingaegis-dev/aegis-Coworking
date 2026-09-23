import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SEO = {
  title: 'Privacy Policy | Aegis Coworking ADGM',
  description:
    'Plain-English privacy policy for Aegis Coworking, Addax Tower, ADGM: what we collect from enquiries, members and website visitors, why, for how long, and your rights.',
  canonical: 'https://www.aegiscoworking.ae/privacy-policy',
}

const LAST_UPDATED = '23 September 2026'
const COMPANY = 'Aegis Coworking - ADGM'
const EMAIL = 'contact@aegiscoworking.ae'

// Short promises shown as cards at the top of the page
const promises = [
  { icon: '🚫', title: 'We never sell your data', text: 'Not to advertisers, list brokers or anyone else.' },
  { icon: '🎯', title: 'We ask only for what we need', text: 'Enough to answer you and, if you join, to meet ADGM rules.' },
  { icon: '📭', title: 'No spam', text: 'Your enquiry gets a reply, not a mailing list.' },
  { icon: '🗑️', title: 'You stay in control', text: 'Ask us to see, fix or delete your data at any time.' },
]

// "Your data at a glance" table
const dataTable = [
  {
    when: 'You send an enquiry',
    what: 'Name, email, phone, company (optional), service of interest, your message, consent tick',
    why: 'To reply, send a quote or book a tour',
    keep: 'Up to 24 months after our last conversation',
  },
  {
    when: 'You become a member',
    what: 'ID documents, company and licence details, shareholder / beneficial owner information, billing records',
    why: 'To provide your workspace or registered address and to complete KYC and AML checks required in ADGM',
    keep: 'For your membership, then as long as ADGM and UAE law requires',
  },
  {
    when: 'You visit Addax Tower',
    what: 'Visitor name, time of visit, bookings',
    why: 'Building access and the safety of everyone in the space',
    keep: 'Only as long as needed for access and security',
  },
  {
    when: 'You browse our website',
    what: 'Pages viewed, device and browser type, approximate city or country, referring site',
    why: 'To see which pages help people and to fix problems',
    keep: 'According to our analytics tools’ settings',
  },
  {
    when: 'You message us on WhatsApp, email or phone',
    what: 'Your number or email and the conversation',
    why: 'To follow up on what you asked',
    keep: 'Same as enquiries, or as a member record if you join',
  },
]

function PrivacyPolicy() {
  return (
    <div className="App">
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <link rel="canonical" href={SEO.canonical} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.canonical} />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aegiscoworking.ae/' },
              { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: SEO.canonical },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      <section className="page-hero">
        <h1>Your Privacy at Aegis</h1>
        <p>Written in plain English · Last updated {LAST_UPDATED}</p>
      </section>

      <section className="policy-page">
        <div className="policy-content">

          <p className="policy-lead">
            When you reach out about a desk, an office or a registered address in ADGM, you trust
            us with your details. This page explains, in plain language, exactly what happens to
            them. It applies to everyone who contacts {COMPANY}, visits our space in Addax Tower
            or uses aegiscoworking.ae, and it follows the ADGM Data Protection Regulations 2021.
          </p>

          {/* ---- Our promises ---- */}
          <h2 id="promises">Our four promises</h2>
          <div className="policy-promises">
            {promises.map((p) => (
              <div className="policy-promise" key={p.title}>
                <span className="policy-promise-icon" aria-hidden="true">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          {/* ---- At a glance ---- */}
          <h2 id="at-a-glance">Your data at a glance</h2>
          <p>
            Here is everything we collect, grouped by the moment you share it with us.
          </p>
          <div className="policy-table-wrap">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>When</th>
                  <th>What we collect</th>
                  <th>Why</th>
                  <th>How long we keep it</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((row) => (
                  <tr key={row.when}>
                    <td data-label="When"><strong>{row.when}</strong></td>
                    <td data-label="What we collect">{row.what}</td>
                    <td data-label="Why">{row.why}</td>
                    <td data-label="How long">{row.keep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ---- Q&A sections ---- */}
          <h2 id="enquiry">What happens after I press “Send”?</h2>
          <p>
            Your enquiry is saved securely in our database and sent to our team. Someone from
            Aegis reads it and replies by email, phone or WhatsApp, whichever suits your request.
            The consent box you tick is also recorded, so we can show you agreed to be contacted.
          </p>
          <p>
            If you decide not to go ahead, that is fine. We will not keep chasing you, and we
            delete old enquiries after 24 months. You can also ask us to delete yours sooner.
          </p>

          <h2 id="kyc">Why do you ask for ID Documents when I want to become a member?</h2>
          <p>
            Aegis operates inside Abu Dhabi Global Market, where business centres must know who
            their clients are. Before we give you a workspace or a registered business address, we
            check your identity and, for companies, who owns and controls the business. These
            know-your-customer (KYC) and anti-money laundering checks are a legal requirement,
            not a choice, so we cannot offer a membership without them.
          </p>
          <p>
            Your documents are stored securely, seen only by the people who need to review them,
            and kept for the period the law requires after your membership ends.
          </p>

          <h2 id="legal-reasons">What gives you the right to use my data?</h2>
          <ul>
            <li><strong>You agreed</strong> — by ticking the consent box on our form.</li>
            <li><strong>You asked for a service</strong> — we need your details to provide it.</li>
            <li><strong>The law requires it</strong> — for KYC, anti-money laundering, tax and company records.</li>
            <li><strong>It is a fair business need</strong> — for example keeping our space secure or improving our website, as long as it does not outweigh your rights.</li>
          </ul>

          <h2 id="who-sees">Who else sees my information?</h2>
          <p>Only people and companies that help us serve you, and only what they need:</p>
          <ul>
            <li>Technology providers that host our website, store our database and send our emails</li>
            <li>Our anti-money laundering and compliance adviser</li>
            <li>Addax Tower building management, for visitor access</li>
            <li>ADGM Registration Authority and other UAE authorities, when the law requires it</li>
            <li>Our accountants, auditors or lawyers, who are bound to keep it confidential</li>
          </ul>
          <p>
            Some of these providers keep data on servers outside the UAE. When they do, we choose
            established providers and rely on the safeguards allowed under ADGM data protection
            rules, so your information stays protected wherever it is held.
          </p>

          <h2 id="cookies">Do you track me on the website?</h2>
          <p>
            Lightly. We use Google Analytics to count visits and see which pages people
            find useful. They set cookies in your browser and tell us things like which page you
            came from and what device you used. We look at this as overall trends, not to build a
            profile of you. You can clear or block cookies in your browser settings at any time,
            and the site will still work.
          </p>
          <p>
            The WhatsApp button opens WhatsApp, which is run by Meta. Anything you send there is
            also covered by WhatsApp’s own privacy policy.
          </p>

          <h2 id="safety">How do you keep my data safe?</h2>
          <ul>
            <li>Every page on aegiscoworking.ae uses an encrypted (HTTPS) connection</li>
            <li>Access to our enquiry database is restricted and protected by login</li>
            <li>Only team members who need your details can access them</li>
            <li>Identity documents are handled with extra care and shared only with those who must review them</li>
          </ul>
          <p>
            If something ever goes wrong and your data is put at risk, we will take action straight
            away and tell you and the regulator where the law requires.
          </p>

          <h2 id="rights">What can I ask you to do?</h2>
          <div className="policy-rights">
            <div><strong>See it</strong><span>Get a copy of the data we hold about you</span></div>
            <div><strong>Fix it</strong><span>Correct anything wrong or out of date</span></div>
            <div><strong>Delete it</strong><span>Unless the law says we must keep it</span></div>
            <div><strong>Pause it</strong><span>Limit or object to how we use it</span></div>
            <div><strong>Move it</strong><span>Receive it in a format you can take elsewhere</span></div>
            <div><strong>Change your mind</strong><span>Withdraw your consent at any time</span></div>
          </div>
          <p>
            Just email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with the subject line
            “Privacy request”. We may ask you to confirm who you are, and we will respond within
            one month. It is free of charge.
          </p>
          <p>
            If you are unhappy with how we handled your request, you can complain to the ADGM
            Office of Data Protection. We would appreciate the chance to put things right first.
          </p>

          <h2 id="under-18">Is Aegis for under-18s?</h2>
          <p>
            No. Our workspaces and services are for businesses and adults, and we do not knowingly
            collect details from anyone under 18.
          </p>

          <h2 id="updates">Will this policy change?</h2>
          <p>
            Sometimes, when we add new services or the rules change. We will update the date at
            the top of this page, and if a change affects our members in a meaningful way we will
            tell them directly.
          </p>

          {/* ---- Contact ---- */}
          <h2 id="contact">Talk to us about privacy</h2>
          <div className="policy-contact">
            <p><strong>{COMPANY}</strong></p>
           <p>Addax Tower, 3812, Al Reem Island, RT3, Abu Dhabi, United Arab Emirates</p>
            <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p>Phone: <a href="tel:+971503926316">+971 50 392 6316</a></p>
          </div>
          <p>
            Looking for a workspace instead? <Link to="/contact">Send us an enquiry</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
