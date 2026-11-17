import { Link } from 'react-router-dom'

const benefits = [
  { title: 'Affordable Packages', text: 'Transparent pricing with no hidden costs.' },
  { title: 'Fast Processing', text: 'Applications handled quickly and efficiently.' },
  { title: 'Trusted Team', text: 'Experienced ADGM specialists guide every step.' },
  { title: 'Office Space Included', text: 'Flexi desk, dedicated desk or private office.' },
]

const packageItems = [
  'Company incorporation and registration in ADGM',
  'Business licensing',
  'AccessRP filings and portal support',
  'Office or desk space at Addax Tower',
  'One experienced team from start to finish',
]

const steps = [
  { num: '01', title: 'Free Consultation', text: 'Tell us about your business and activity.' },
  { num: '02', title: 'Documents and Filing', text: 'We prepare and submit everything on AccessRP.' },
  { num: '03', title: 'Licence Issued', text: 'Your ADGM company is registered and licensed.' },
  { num: '04', title: 'Move In', text: 'Start working from your space at Addax Tower.' },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CompanySetup() {
  return (
    <section className="cs-section" id="company-setup">
      <style>{`
        .cs-section {
          background: var(--color-bg, #f7f5f0);
          padding: 90px 60px;
        }

        .cs-wrap {
          max-width: 1180px;
          margin: 0 auto;
        }

        .cs-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }

        /* ---------- Left column ---------- */
        .cs-left h2 {
          font-size: 36px;
          font-weight: 800;
          line-height: 1.15;
          margin: 4px 0 18px;
          color: var(--color-text, #1a1a1a);
          letter-spacing: -0.5px;
        }

        .cs-left h2 span {
          color: var(--color-primary, #1f5c46);
        }

        .cs-lead {
          font-size: 16px;
          line-height: 1.7;
          color: var(--color-text-muted, #5c5c5c);
          margin: 0 0 28px;
          max-width: 560px;
        }

        .cs-benefits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 32px;
        }

        .cs-benefit {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: #fff;
          border: 1px solid var(--color-primary-soft, #e3ede8);
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 4px 16px rgba(31, 92, 70, 0.06);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .cs-benefit:hover {
          transform: translateY(-4px);
          border-color: var(--color-primary, #1f5c46);
          box-shadow: 0 12px 30px rgba(31, 92, 70, 0.14);
        }

        .cs-benefit-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--color-primary, #1f5c46);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cs-benefit h3 {
          font-size: 14.5px;
          font-weight: 700;
          margin: 0 0 4px;
          color: var(--color-text, #1a1a1a);
        }

        .cs-benefit p {
          font-size: 13.5px;
          line-height: 1.5;
          margin: 0;
          color: var(--color-text-muted, #5c5c5c);
        }

        .cs-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .cs-btn-outline {
          display: inline-block;
          padding: 13px 26px;
          border-radius: 999px;
          border: 2px solid var(--color-primary, #1f5c46);
          color: var(--color-primary, #1f5c46);
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .cs-btn-outline:hover {
          background: var(--color-primary, #1f5c46);
          color: #fff;
          transform: translateY(-2px);
        }

        /* ---------- Right column: package card ---------- */
        .cs-card {
          position: relative;
          background: linear-gradient(160deg, #1f5c46 0%, #14231d 100%);
          color: #fff;
          border-radius: 22px;
          padding: 40px 36px;
          box-shadow: 0 24px 60px rgba(20, 35, 29, 0.28);
          overflow: hidden;
        }

        .cs-card::before {
          content: "";
          position: absolute;
          top: -80px;
          right: -80px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224, 184, 90, 0.28) 0%, rgba(224, 184, 90, 0) 70%);
        }

        .cs-card-badge {
          position: relative;
          display: inline-block;
          background: #e0b85a;
          color: #1f3a2e;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 18px;
        }

        .cs-card h3 {
          position: relative;
          font-size: 26px;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 10px;
          color: #fff;
        }

        .cs-card-sub {
          position: relative;
          font-size: 14.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 24px;
        }

        .cs-card-sub a {
          color: #e0b85a;
          font-weight: 800;
          text-decoration: none;
        }

        .cs-card-sub a:hover {
          color: #f0cd78;
        }

        .cs-card ul {
          position: relative;
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: grid;
          gap: 14px;
        }

        .cs-card li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 15px;
          line-height: 1.45;
          color: #fff;
        }

        .cs-card li .cs-tick {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(224, 184, 90, 0.18);
          color: #e0b85a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }

        .cs-card-cta {
          position: relative;
          display: block;
          text-align: center;
          background: #e0b85a;
          color: #1f3a2e;
          font-weight: 800;
          font-size: 15px;
          padding: 15px 20px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .cs-card-cta:hover {
          background: #f0cd78;
          transform: translateY(-2px);
        }

        /* ---------- Steps ---------- */
        .cs-steps {
          margin-top: 64px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          counter-reset: step;
        }

        .cs-step {
          background: #fff;
          border: 1px solid var(--color-primary-soft, #e3ede8);
          border-radius: 16px;
          padding: 26px 22px;
          box-shadow: 0 4px 16px rgba(31, 92, 70, 0.06);
          position: relative;
        }

        .cs-step-num {
          display: inline-block;
          font-size: 13px;
          font-weight: 800;
          color: var(--color-primary, #1f5c46);
          background: var(--color-primary-soft, #e3ede8);
          padding: 5px 12px;
          border-radius: 999px;
          margin-bottom: 14px;
          letter-spacing: 0.5px;
        }

        .cs-step h4 {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 6px;
          color: var(--color-text, #1a1a1a);
        }

        .cs-step p {
          font-size: 14px;
          line-height: 1.55;
          margin: 0;
          color: var(--color-text-muted, #5c5c5c);
        }

        .cs-steps-title {
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-text-muted, #5c5c5c);
          margin: 64px 0 0;
        }

        .cs-steps-title + .cs-steps {
          margin-top: 22px;
        }

        /* ---------- Tablet ---------- */
        @media (max-width: 1024px) {
          .cs-section {
            padding: 70px 32px;
          }
          .cs-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cs-left {
            text-align: center;
          }
          .cs-lead {
            margin-left: auto;
            margin-right: auto;
          }
          .cs-benefit {
            text-align: left;
          }
          .cs-actions {
            justify-content: center;
          }
          .cs-steps {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ---------- Mobile ---------- */
        @media (max-width: 600px) {
          .cs-section {
            padding: 56px 18px;
          }
          .cs-left h2 {
            font-size: 27px;
          }
          .cs-lead {
            font-size: 15px;
          }
          .cs-benefits {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .cs-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .cs-actions .btn-primary,
          .cs-btn-outline {
            width: 100%;
            text-align: center;
          }
          .cs-card {
            padding: 30px 22px;
            border-radius: 18px;
          }
          .cs-card h3 {
            font-size: 22px;
          }
          .cs-card li {
            font-size: 14.5px;
          }
          .cs-steps-title {
            margin-top: 48px;
          }
          .cs-steps {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .cs-step {
            padding: 20px 18px;
          }
        }
      `}</style>

      <div className="cs-wrap">
        <div className="cs-grid">
          {/* Left: message + benefits */}
          <div className="cs-left">
            <span className="contact-eyebrow">COMPANY SETUP IN ADGM</span>
            <h2>
              Affordable Company Setup <span>in ADGM</span>
            </h2>
            <p className="cs-lead">
              Starting a business in ADGM shouldn't mean high costs and slow paperwork. Many founders struggle with
              expensive setup fees and complex processes. At Aegis Coworking, we make ADGM company setup affordable,
              easy and fast, with office space ready for you at Addax Tower.
            </p>

            <div className="cs-benefits">
              {benefits.map((b) => (
                <div className="cs-benefit" key={b.title}>
                  <span className="cs-benefit-icon"><CheckIcon /></span>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cs-actions">
              <Link to="/contact">
                <button className="btn-primary" aria-label="Get a company setup quote in ADGM">
                  GET A SETUP QUOTE
                </button>
              </Link>
              <a
                href="https://www.bayana.ae/"
                target="_blank"
                rel="noopener"
                className="cs-btn-outline"
              >
                Visit Bayana Global
              </a>
            </div>
          </div>

          {/* Right: full package card */}
          <div className="cs-card">
            <span className="cs-card-badge">Full Setup Package</span>
            <h3>Everything You Need to Launch in ADGM</h3>
            <p className="cs-card-sub">
              In partnership with{' '}
              <a href="https://www.bayana.ae/" target="_blank" rel="noopener">Bayana Global Limited</a>, our experienced
              team handles your company setup, licensing and AccessRP smoothly, in one affordable package.
            </p>
            <ul>
              {packageItems.map((item) => (
                <li key={item}>
                  <span className="cs-tick"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="cs-card-cta">
              Claim Your Setup Package →
            </Link>
          </div>
        </div>

        {/* How it works */}
        <p className="cs-steps-title">How it works</p>
        <div className="cs-steps">
          {steps.map((s) => (
            <div className="cs-step" key={s.num}>
              <span className="cs-step-num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanySetup
