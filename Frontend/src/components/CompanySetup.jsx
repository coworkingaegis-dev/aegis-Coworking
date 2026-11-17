const benefits = [
  { icon: '💰', title: 'Affordable Packages', text: 'Clear pricing that fits startups and growing businesses.' },
  { icon: '⚡', title: 'Fast Processing', text: 'Applications handled quickly and efficiently.' },
  { icon: '🤝', title: 'Trusted Team', text: 'Experienced ADGM specialists guide every step.' },
  { icon: '🏢', title: 'Office Space Included', text: 'Flexi desk, dedicated desk or private office.' },
]

const packageItems = [
  'Company incorporation and registration in ADGM',
  'Business licensing',
  'AccessRP filings and portal support',
  'Office or desk space at Addax Tower',
  'One experienced team from start to finish',
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          max-width: 1140px;
          margin: 0 auto;
        }

        /* ---------- Centered header ---------- */
        .cs-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 50px;
        }

        .cs-header h2 {
          font-size: 34px;
          font-weight: 800;
          line-height: 1.2;
          margin: 4px 0 16px;
          color: var(--color-text, #1a1a1a);
        }

        .cs-header p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--color-text-muted, #5c5c5c);
          margin: 0;
        }

        /* ---------- Two columns ---------- */
        .cs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: stretch;
        }

        .cs-benefits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .cs-benefit {
          background: #fff;
          border: 1px solid var(--color-border, #e5e2da);
          border-radius: 16px;
          padding: 24px 20px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cs-benefit:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
        }

        .cs-benefit-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #faf3e2;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
          margin-bottom: 14px;
        }

        .cs-benefit h3 {
          font-size: 15.5px;
          font-weight: 700;
          margin: 0 0 6px;
          color: var(--color-text, #1a1a1a);
        }

        .cs-benefit p {
          font-size: 14px;
          line-height: 1.55;
          margin: 0;
          color: var(--color-text-muted, #5c5c5c);
        }

        /* ---------- Package card (white, gold accent) ---------- */
        .cs-card {
          background: #fff;
          border: 1px solid var(--color-border, #e5e2da);
          border-top: 4px solid #e0b85a;
          border-radius: 16px;
          padding: 34px 32px;
          display: flex;
          flex-direction: column;
        }

        .cs-card-badge {
          align-self: flex-start;
          background: #faf3e2;
          color: #8a6a1f;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .cs-card h3 {
          font-size: 23px;
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 10px;
          color: var(--color-text, #1a1a1a);
        }

        .cs-card-sub {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--color-text-muted, #5c5c5c);
          margin: 0 0 22px;
        }

        .cs-card-sub a {
          color: var(--color-primary, #1f5c46);
          font-weight: 800;
          text-decoration: none;
        }

        .cs-card-sub a:hover {
          color: var(--color-primary-hover, #164632);
        }

        .cs-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 13px;
        }

        .cs-card li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 15px;
          line-height: 1.45;
          color: var(--color-text, #1a1a1a);
        }

        .cs-tick {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--color-primary-soft, #e3ede8);
          color: var(--color-primary, #1f5c46);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }

        /* ---------- Tablet ---------- */
        @media (max-width: 1024px) {
          .cs-section {
            padding: 70px 32px;
          }
          .cs-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        /* ---------- Mobile ---------- */
        @media (max-width: 600px) {
          .cs-section {
            padding: 56px 18px;
          }
          .cs-header {
            margin-bottom: 32px;
          }
          .cs-header h2 {
            font-size: 26px;
          }
          .cs-header p {
            font-size: 15px;
          }
          .cs-benefits {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .cs-benefit {
            display: flex;
            gap: 14px;
            align-items: flex-start;
            padding: 18px 16px;
          }
          .cs-benefit-icon {
            flex-shrink: 0;
            margin-bottom: 0;
            width: 40px;
            height: 40px;
            font-size: 19px;
          }
          .cs-card {
            padding: 26px 20px;
          }
          .cs-card h3 {
            font-size: 20px;
          }
          .cs-card li {
            font-size: 14.5px;
          }
        }
      `}</style>

      <div className="cs-wrap">
        <div className="cs-header">
          <span className="contact-eyebrow">COMPANY SETUP IN ADGM</span>
          <h2>Affordable Company Setup in ADGM</h2>
          <p>
            Starting a business in ADGM shouldn't mean high costs and slow paperwork. At Aegis Coworking, we make
            company setup affordable, easy and fast, with office space ready for you at Addax Tower.
          </p>
        </div>

        <div className="cs-grid">
          <div className="cs-benefits">
            {benefits.map((b) => (
              <div className="cs-benefit" key={b.title}>
                <div className="cs-benefit-icon" aria-hidden="true">{b.icon}</div>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </div>

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
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanySetup
