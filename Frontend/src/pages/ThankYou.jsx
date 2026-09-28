import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WHATSAPP_NUMBER = '971503926316'
const PHONE_DISPLAY = '+971 50 392 6316'
const EMAIL = 'contact@aegiscoworking.ae'

// Maps the contact form's "interestedIn" values to readable labels
const INTEREST_LABELS = {
  'dedicated-desk-adgm': 'Dedicated Desk in ADGM',
  'virtual-office': 'Virtual Office',
  'private-office': 'Private Office',
  'meeting-room': 'Meeting Room',
}

const NEXT_STEPS = [
  {
    title: 'We review your enquiry',
    text: 'Our team reads your message and checks availability for your requirement.',
  },
  {
    title: 'We get back to you',
    text: 'Expect a call or email from us within one business day with pricing and options.',
  },
  {
    title: 'Visit or move in',
    text: 'Book a tour of Addax Tower, ADGM, or get set up and start working right away.',
  },
]

const EXPLORE_LINKS = [
  { to: '/private-office', label: 'Private Offices' },
  { to: '/virtual-office', label: 'Virtual Office' },
  { to: '/meeting-room', label: 'Meeting Rooms' },
  { to: '/pricing', label: 'Pricing' },
]

function ThankYou() {
  const { state } = useLocation()
  const firstName = state?.name ? state.name.trim().split(' ')[0] : ''
  const interest = state?.interestedIn ? INTEREST_LABELS[state.interestedIn] : ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const waMessage = encodeURIComponent(
    `Hi Aegis Coworking, I just sent an enquiry${interest ? ` about a ${interest}` : ''} on your website.`
  )

  return (
    <div className="App">
      <Helmet>
        <title>Thank You | Aegis Coworking ADGM</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Thank you for contacting Aegis Coworking, Addax Tower, ADGM. Our team will get back to you within one business day."
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/thank-you" />
      </Helmet>

      <Navbar />

      <main className="ty-page">
        <section className="ty-card" aria-labelledby="ty-heading">
          <div className="ty-icon" aria-hidden="true">
            <svg viewBox="0 0 52 52">
              <circle className="ty-icon-circle" cx="26" cy="26" r="24" />
              <path className="ty-icon-check" d="M15 27 l7 7 l15 -16" />
            </svg>
          </div>

          <span className="ty-eyebrow">Enquiry received</span>
          <h1 id="ty-heading">
            Thank you{firstName ? `, ${firstName}` : ''}!
          </h1>
          <p className="ty-lead">
            Your message has been sent
            {interest ? (
              <>
                {' '}about a <strong>{interest}</strong>
              </>
            ) : null}
            . Our team will get back to you within <strong>one business day</strong>.
          </p>

          <div className="ty-actions">
            
              className="ty-btn ty-btn-primary"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="ty-btn-icon">
                <path
                  fill="currentColor"
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.910-9.91C21.960 6.45 17.5 2 12.04 2Zm5.8 14.03c-.25.69-1.44 1.32-1.99 1.36-.51.05-.99.24-3.33-.69-2.82-1.11-4.6-4-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.74-.35l.53.01c.17.01.4-.06.62.48.25.6.83 2.06.9 2.21.07.15.12.32.02.51-.09.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.29-.12.57.17.28.74 1.21 1.58 1.96 1.09.97 2 1.27 2.29 1.41.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.69-.18 1.38Z"
                />
              </svg>
              Chat on WhatsApp
            </a>
            <Link className="ty-btn ty-btn-outline" to="/">
              Back to Home
            </Link>
          </div>
        </section>

        <section className="ty-steps" aria-labelledby="ty-steps-heading">
          <h2 id="ty-steps-heading">What happens next</h2>
          <ol className="ty-steps-list">
            {NEXT_STEPS.map((step, i) => (
              <li key={step.title} className="ty-step">
                <span className="ty-step-num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="ty-bottom">
          <div className="ty-contact">
            <h2>Need an answer sooner?</h2>
            <ul>
              <li>
                <span className="ty-contact-label">Call</span>
                <a href={`tel:+${WHATSAPP_NUMBER}`}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <span className="ty-contact-label">Email</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <span className="ty-contact-label">Visit</span>
                <span>Office 3812, Addax Tower, Al Reem Island, ADGM, Abu Dhabi</span>
              </li>
            </ul>
          </div>

          <div className="ty-explore">
            <h2>While you wait, explore</h2>
            <div className="ty-explore-links">
              {EXPLORE_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="ty-chip">
                  {link.label}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ThankYou
