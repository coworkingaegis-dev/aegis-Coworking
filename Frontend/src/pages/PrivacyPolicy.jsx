import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SEO = {
  title: 'Privacy Policy | Aegis Coworking ADGM',
  description:
    'How Aegis Coworking in Addax Tower, ADGM collects, uses and protects your personal data under the ADGM Data Protection Regulations 2021.',
  canonical: 'https://www.aegiscoworking.ae/privacy-policy',
}

const LAST_UPDATED = '23 September 2026'

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
        <h1>Privacy Policy</h1>
        <p>Last updated: {LAST_UPDATED}</p>
      </section>

      <section className="policy-page">
        <div className="policy-content">

          <p className="policy-lead">
            Aegis Coworking - ADGM (“Aegis Coworking”, “we”, “us” or “our”) is a company
            registered in Abu Dhabi Global Market (ADGM), operating from Office 3812, Addax Tower,
            Al Reem Island, Abu Dhabi. We respect your privacy. This policy explains what personal
            data we collect when you use aegiscoworking.ae, contact us, or become a member, why we
            collect it, and the choices you have. We handle personal data in line with the
            ADGM Data Protection Regulations 2021.
          </p>

          <nav className="policy-toc" aria-label="On this page">
            <p className="policy-toc-title">On this page</p>
            <ol>
              <li><a href="#who-we-are">Who is responsible for your data</a></li>
              <li><a href="#what-we-collect">What we collect</a></li>
              <li><a href="#how-we-use">How we use your data</a></li>
              <li><a href="#legal-basis">Our legal basis</a></li>
              <li><a href="#sharing">Who we share it with</a></li>
              <li><a href="#cookies">Cookies and analytics</a></li>
              <li><a href="#transfers">Where your data is stored</a></li>
              <li><a href="#retention">How long we keep it</a></li>
              <li><a href="#security">How we protect it</a></li>
              <li><a href="#rights">Your rights</a></li>
              <li><a href="#children">Children</a></li>
              <li><a href="#changes">Changes to this policy</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ol>
          </nav>

          <h2 id="who-we-are">1. Who is responsible for your data</h2>
          <p>
           Aegis Coworking - ADGM is the controller of the personal data described in
            this policy. That means we decide how and why your data is used, and we are responsible
            for protecting it.
          </p>

          <h2 id="what-we-collect">2. What we collect</h2>
          <h3>When you fill in our contact form</h3>
          <ul>
            <li>Your full name</li>
            <li>Email address</li>
            <li>Contact number</li>
            <li>Company name (optional)</li>
            <li>The service you are interested in, such as a dedicated desk, private office, virtual office, meeting room or day pass</li>
            <li>Your message</li>
            <li>A record that you agreed to this Privacy Policy, with the date and time</li>
          </ul>

          <h3>When you become a member or book a service</h3>
          <p>
            As an ADGM business centre, we must verify who our clients are before we provide a
            workspace or a registered business address. For this we may ask for:
          </p>
          <ul>
            <li>Passport, Emirates ID or other identity documents</li>
            <li>Company registration documents, licence details and shareholder or beneficial owner information</li>
            <li>Billing details and payment records</li>
            <li>Visitor, access and booking records at our premises</li>
          </ul>

          <h3>When you contact us in other ways</h3>
          <p>
            If you call, email or message us on WhatsApp, we keep the details you share and our
            replies so we can follow up on your enquiry.
          </p>

          <h3>When you browse our website</h3>
          <p>
            We collect limited technical information automatically, such as your browser type,
            device, approximate location (city or country), pages visited and how you arrived at
            our site. See <a href="#cookies">Cookies and analytics</a> below.
          </p>

          <h2 id="how-we-use">3. How we use your data</h2>
          <ul>
            <li><strong>To answer your enquiry:</strong> sending quotes, arranging tours and replying to your questions.</li>
            <li><strong>To provide our services:</strong> setting up your membership, desk, office, virtual office or meeting room booking.</li>
            <li><strong>To meet our legal duties:</strong> carrying out know-your-customer (KYC), due diligence and anti-money laundering checks required of us in ADGM.</li>
            <li><strong>To manage billing:</strong> issuing invoices and keeping financial records.</li>
            <li><strong>To keep our premises safe:</strong> managing access to Addax Tower and our office.</li>
            <li><strong>To improve our website:</strong> understanding which pages are useful and fixing problems.</li>
            <li><strong>To share offers, only with your permission:</strong> if you ask to hear about promotions, you can opt out at any time.</li>
          </ul>
          <p>We do not sell your personal data, and we do not use it for automated decisions that affect you.</p>

          <h2 id="legal-basis">4. Our legal basis</h2>
          <p>We only use your personal data when we have a lawful reason to do so:</p>
          <ul>
            <li><strong>Consent:</strong> when you tick the consent box on our contact form or agree to receive marketing.</li>
            <li><strong>Contract:</strong> when we need the data to provide a service you have asked for.</li>
            <li><strong>Legal obligation:</strong> when ADGM or UAE law requires it, for example due diligence and record keeping.</li>
            <li><strong>Legitimate interests:</strong> running and improving our business, provided this does not override your rights.</li>
          </ul>

          <h2 id="sharing">5. Who we share it with</h2>
          <p>We share personal data only where needed, and only with:</p>
          <ul>
            <li><strong>Service providers</strong> who help us run our business, such as website hosting, database, email and analytics providers. They may only use your data to provide their service to us.</li>
            <li><strong>Our compliance partners</strong> who support our due diligence and anti-money laundering obligations.</li>
            <li><strong>Building management at Addax Tower</strong>, where needed for access to the premises.</li>
            <li><strong>Regulators and authorities</strong>, including ADGM Registration Authority and other UAE authorities, when the law requires it.</li>
            <li><strong>Professional advisers</strong> such as auditors and lawyers, under a duty of confidentiality.</li>
          </ul>

          <h2 id="cookies">6. Cookies and analytics</h2>
          <p>
            Our website uses a small number of cookies and similar technologies. Some are needed
            for the site to work. Others come from analytics tools, such as Google Analytics and
            PostHog, which help us understand how visitors use our pages. This information is
            used in summary form and is not used to identify you personally.
          </p>
          <p>
            You can block or delete cookies in your browser settings. The website will still work
            if you do, although some features may not behave as expected.
          </p>

          <h2 id="transfers">7. Where your data is stored</h2>
          <p>
            Some of our service providers store data on servers outside ADGM and the UAE. When
            this happens, we take steps to make sure your data stays protected, such as working
            with reputable providers and relying on contractual safeguards, as permitted under the
            ADGM Data Protection Regulations 2021.
          </p>

          <h2 id="retention">8. How long we keep it</h2>
          <ul>
            <li><strong>Enquiries that do not lead to a membership:</strong> up to 24 months after our last contact with you, then deleted.</li>
            <li><strong>Member, KYC and billing records:</strong> for as long as you are a member, and afterwards for the period required by applicable ADGM and UAE anti-money laundering, tax and company laws.</li>
            <li><strong>Website analytics:</strong> in line with the retention settings of our analytics providers.</li>
          </ul>

          <h2 id="security">9. How we protect it</h2>
          <p>
            We use appropriate technical and organisational measures to keep your data safe. These
            include encrypted connections (HTTPS), restricted access to our database, access only
            for team members who need it, and secure storage of identity documents. No system is
            completely secure, but we work to protect your information and will act promptly if
            a problem arises.
          </p>

          <h2 id="rights">10. Your rights</h2>
          <p>Under the ADGM Data Protection Regulations 2021, you can ask us to:</p>
          <ul>
            <li>Tell you what personal data we hold about you and give you a copy</li>
            <li>Correct data that is wrong or incomplete</li>
            <li>Delete your data, where we no longer have a legal reason to keep it</li>
            <li>Restrict or object to how we use your data</li>
            <li>Send your data to you or another organisation in a portable format</li>
            <li>Withdraw your consent at any time, without affecting anything we did before</li>
            <li>Stop sending you marketing messages</li>
          </ul>
          <p>
            To make a request, email us at the address below. We will reply within one month. We
            may need to confirm your identity first. If you are not satisfied with our response,
            you can complain to the ADGM Office of Data Protection.
          </p>

          <h2 id="children">11. Children</h2>
          <p>
            Our services are for businesses and adults. We do not knowingly collect personal data
            from anyone under 18. If you believe a child has sent us their details, please contact
            us and we will delete them.
          </p>

          <h2 id="changes">12. Changes to this policy</h2>
          <p>
            We may update this policy when our services or the law change. The date at the top of
            this page shows when it was last updated. If we make important changes, we will let
            members know directly.
          </p>

          <h2 id="contact">13. Contact us</h2>
          <div className="policy-contact">
            <p><strong>Aegis Coworking Business Center Ltd</strong></p>
            <p>Office 3812, Addax Tower, Al Reem Island, RT3, Abu Dhabi, United Arab Emirates</p>
            <p>Email: <a href="mailto:contact@aegiscoworking.ae">contact@aegiscoworking.ae</a></p>
            <p>Phone: <a href="tel:+971503926316">+971 50 392 6316</a></p>
          </div>
          <p>
            Have a question about our workspaces instead? <Link to="/contact">Contact our team</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
