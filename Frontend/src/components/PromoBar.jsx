// import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'


// const PROMO_TEXT =
//   'Launch your business in ADGM: company setup, licensing and office space in one package with Aegis Coworking and Bayana Global Limited. Claim Your Exclusive ADGM Offer Today!'

// // How many copies of the line in each half of the loop (keeps the bar full on wide screens)
// const COPIES = 3

// function PromoBar() {
//   const location = useLocation()
//   const [top, setTop] = useState(102)

//   // Sit directly under the fixed header. Re-check on every page change,
//   // because each page renders its own header.
//   useEffect(() => {
//     let ro
//     const attach = () => {
//       const nav = document.querySelector('.navbar')
//       if (!nav) return
//       const update = () => {
//         if (nav.offsetHeight > 0) setTop(nav.offsetHeight)
//       }
//       update()
//       ro = new ResizeObserver(update)
//       ro.observe(nav)
//     }
//     const id = requestAnimationFrame(attach)
//     return () => {
//       cancelAnimationFrame(id)
//       if (ro) ro.disconnect()
//     }
//   }, [location.pathname])

//   const items = Array.from({ length: COPIES * 2 })

//   return (
//     <>
//       <style>{`
//         .promo-bar {
//           position: fixed;
//           left: 0;
//           width: 100%;
//           z-index: 999;
//           background: #1f5c46;
//           color: #fff;
//           overflow: hidden;
//         }

//         .promo-bar-inner {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           padding: 5px 20px;
//         }

//         .promo-bar-label {
//           flex-shrink: 0;
//           background: #e0b85a;
//           color: #1f3a2e;
//           padding: 2px 10px;
//           border-radius: 999px;
//           font-size: 10.5px;
//           font-weight: 800;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//           white-space: nowrap;
//         }

//         .promo-bar-track-wrap {
//           overflow: hidden;
//           flex: 1;
//           mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
//           -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
//         }

//         .promo-bar-track {
//           display: flex;
//           gap: 60px;
//           width: max-content;
//           animation: promoScroll 55s linear infinite;
//         }

//         .promo-bar-track-wrap:hover .promo-bar-track {
//           animation-play-state: paused;
//         }

//         .promo-bar-item {
//           display: flex;
//           align-items: baseline;
//           gap: 8px;
//           white-space: nowrap;
//           font-size: 12.5px;
//           font-weight: 600;
//         }

//         .promo-bar-item strong {
//           color: #e0b85a;
//           font-weight: 800;
//           letter-spacing: 0.2px;
//         }

//         /* Left to right */
//                @keyframes promoScroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         /* Mobile: keep the badge, make everything compact */
//         @media (max-width: 600px) {
//           .promo-bar-inner {
//             gap: 8px;
//             padding: 6px 10px;
//           }
//           .promo-bar-label {
//             font-size: 9.5px;
//             padding: 3px 8px;
//             letter-spacing: 0.3px;
//           }
//           .promo-bar-track {
//             gap: 40px;
//             animation-duration: 45s;
//           }
//           .promo-bar-item {
//             font-size: 11.5px;
//             font-weight: 500;
//           }
//           .promo-bar-track-wrap {
//             mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
//             -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
//           }
//         }
//       `}</style>

//       <div className="promo-bar" style={{ top }}>
//         <div className="promo-bar-inner">
//                    <span className="promo-bar-label">🚀 Limited-Time Offer</span>
//           <div className="promo-bar-track-wrap">
//             <div className="promo-bar-track">
//               {items.map((_, i) => (
//                 <span className="promo-bar-item" key={i}>
                 
//                   <span>{PROMO_TEXT}</span>
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default PromoBar












import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const PROMO_TEXT =
  'Launch your business in ADGM: company setup, licensing and office space in one package with Aegis Coworking and Bayana Global Limited. Claim Your Exclusive ADGM Offer Today!'

// How many copies of the line in each half of the loop (keeps the bar full on wide screens)
const COPIES = 3

function PromoBar() {
  const location = useLocation()
  const [top, setTop] = useState(102)

  // Sit directly under the fixed header. Re-check on every page change,
  // because each page renders its own header.
  useEffect(() => {
    let ro
    const attach = () => {
      const nav = document.querySelector('.navbar')
      if (!nav) return
      const update = () => {
        if (nav.offsetHeight > 0) setTop(nav.offsetHeight)
      }
      update()
      ro = new ResizeObserver(update)
      ro.observe(nav)
    }
    const id = requestAnimationFrame(attach)
    return () => {
      cancelAnimationFrame(id)
      if (ro) ro.disconnect()
    }
  }, [location.pathname])

  // Don't show the offer bar on admin pages
  if (location.pathname.startsWith('/admin') || location.pathname.startsWith('/create-blog')) {
    return null
  }

  const items = Array.from({ length: COPIES * 2 })

  return (
    <>
      <style>{`
        .promo-bar {
          position: fixed;
          left: 0;
          width: 100%;
          z-index: 999;
          background: #1f5c46;
          color: #fff;
          overflow: hidden;
        }

        .promo-bar-inner {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 5px 20px;
        }

        .promo-bar-label {
          flex-shrink: 0;
          background: #e0b85a;
          color: #1f3a2e;
          padding: 2px 10px;
          border-radius: 999px;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .promo-bar-track-wrap {
          overflow: hidden;
          flex: 1;
          mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
        }

        .promo-bar-track {
          display: flex;
          gap: 60px;
          width: max-content;
          animation: promoScroll 45s linear infinite;
        }

        .promo-bar-track-wrap:hover .promo-bar-track {
          animation-play-state: paused;
        }

        .promo-bar-item {
          display: flex;
          align-items: baseline;
          gap: 8px;
          white-space: nowrap;
          font-size: 12.5px;
          font-weight: 600;
        }

        .promo-bar-item strong {
          color: #e0b85a;
          font-weight: 800;
          letter-spacing: 0.2px;
        }

        @keyframes promoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Mobile: keep the badge, make everything compact */
        @media (max-width: 600px) {
          .promo-bar-inner {
            gap: 8px;
            padding: 6px 10px;
          }
          .promo-bar-label {
            font-size: 9.5px;
            padding: 3px 8px;
            letter-spacing: 0.3px;
          }
          .promo-bar-track {
            gap: 40px;
            animation-duration: 35s;
          }
          .promo-bar-item {
            font-size: 11.5px;
            font-weight: 500;
          }
          .promo-bar-track-wrap {
            mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
            -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
          }
        }
      `}</style>

      <div className="promo-bar" style={{ top }}>
        <div className="promo-bar-inner">
          <span className="promo-bar-label">🚀 Limited-Time Offer</span>
          <div className="promo-bar-track-wrap">
            <div className="promo-bar-track">
              {items.map((_, i) => (
                <span className="promo-bar-item" key={i}>
                  <span>{PROMO_TEXT}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PromoBar
