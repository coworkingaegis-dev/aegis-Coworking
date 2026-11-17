import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const offers = [
  { plan: "HOT DESK", was: "1,200", now: "1,000", period: "/month" },
  { plan: "DEDICATED DESK", was: "1,450", now: "1,150", period: "/month" },
  { plan: "PRIVATE OFFICE", was: "6,500", now: "4,500", period: "/month" },
  { plan: "VIRTUAL OFFICE", was: "4,500", now: "3,500", period: "/year" },
  { plan: "🚀 PROMOTION", text: "Launch your business in ADGM: company setup, licensing and office space in one package with Aegis Coworking and Bayana Global. Claim your offer now!" },
]

function PromoBar() {
  const loopedOffers = [...offers, ...offers]
  // Sit directly under the fixed header, whatever its height on this screen size
  const [top, setTop] = useState(102)

  useEffect(() => {
    const nav = document.querySelector('.navbar')
    if (!nav) return
    const update = () => setTop(nav.offsetHeight)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(nav)
    return () => ro.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .promo-bar {
          position: fixed;
          left: 0;
          width: 100%;
          z-index: 1001;
          background: linear-gradient(90deg, #1f5c46 0%, #164632 100%);
          color: #fff;
          overflow: hidden;
        }

        .promo-bar-inner {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 10px 20px;
        }

        .promo-bar-label {
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.22);
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          white-space: nowrap;
          animation: promoZoom 1.8s ease-in-out infinite;
        }

        .promo-bar-track-wrap {
          overflow: hidden;
          flex: 1;
          mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
        }

        .promo-bar-track {
          display: flex;
          gap: 40px;
          width: max-content;
          animation: promoScroll 28s linear infinite;
        }

        .promo-bar-track-wrap:hover .promo-bar-track {
          animation-play-state: paused;
        }

        .promo-bar-item {
          display: flex;
          align-items: baseline;
          gap: 8px;
          white-space: nowrap;
          font-size: 13.5px;
        }

        .promo-bar-item strong {
          font-weight: 800;
          letter-spacing: 0.2px;
        }

        .promo-bar-was {
          text-decoration: line-through;
          opacity: 0.65;
          font-size: 12px;
        }

        .promo-bar-now {
          font-weight: 800;
          font-size: 15px;
        }

        .promo-bar-cta {
          flex-shrink: 0;
          color: #fff;
          text-decoration: underline;
          text-underline-offset: 2px;
          font-weight: 800;
          font-size: 13px;
          white-space: nowrap;
        }

        @keyframes promoZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        @keyframes promoScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @media (max-width: 600px) {
          .promo-bar-label {
            display: none;
          }
          .promo-bar-item {
            font-size: 12px;
          }
          .promo-bar-now {
            font-size: 13.5px;
          }
        }
      `}</style>

      <div className="promo-bar" style={{ top }}>
        <div className="promo-bar-inner">
          <span className="promo-bar-label">Limited Offer</span>
          <div className="promo-bar-track-wrap">
            <div className="promo-bar-track">
              {loopedOffers.map((offer, i) => (
                <span className="promo-bar-item" key={i}>
                  <strong>{offer.plan}:</strong>
                  {offer.text ? (
                    <span className="promo-bar-now">{offer.text}</span>
                  ) : (
                    <>
                      <span className="promo-bar-was">AED {offer.was}</span>
                      <span className="promo-bar-now">AED {offer.now}{offer.period}</span>
                    </>
                  )}
                </span>
              ))}
            </div>
          </div>
          <Link to="/pricing" className="promo-bar-cta">See all offers →</Link>
        </div>
      </div>
    </>
  )
}

export default PromoBar
