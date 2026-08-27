// import { Link } from 'react-router-dom'

// import heroVideo from '../assets/hero_video_compressed.mp4'
// import heroPoster from '../assets/hero-poster.jpg'

// function Hero() {
//   return (
//     <section className="hero hero-video-wrap">
//       <video
//         className="hero-video"
//         poster={heroPoster}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="metadata"
//         aria-label="Aegis Coworking space at Addax Tower, ADGM, Abu Dhabi"
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>
//       <div className="hero-overlay"></div>
//      <div className="hero-content">
//         <span className="hero-eyebrow">
//           Coworking Space in ADGM • Business Centre, Addax Tower • Al Reem Island, Abu Dhabi
//         </span>
//         <h1>
//           <span className="hero-title-desktop">COWORKING&nbsp;SPACE&nbsp;IN&nbsp;ADGM&nbsp;ABUDHABI</span>
//           <span className="hero-title-mobile">COWORKING SPACE<br />IN ADGM ABUDHABI </span>
//         </h1>
//         <p>
//           Aegis Coworking offers affordable hot desk, dedicated desk, private office,
//           virtual office, meeting room and day pass — a business centre in ADGM,
//           Abu Dhabi Global Market, with plans starting from AED 1,000.
//         </p>
//         <Link to="/contact">
//           <button className="btn-secondary" aria-label="Book a coworking space tour in ADGM Addax Tower">
//             BOOK TOUR
//           </button>
//         </Link>
//      </div>
//     </section>
//   )
// }

// export default Hero












import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import heroVideo from '../assets/hero_video_compressed.mp4'
import heroPoster from '../assets/hero-poster.jpg'

function Hero() {
  const [loadVideo, setLoadVideo] = useState(false)

  useEffect(() => {
    const trigger = () => setLoadVideo(true)
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(trigger, { timeout: 2000 })
      return () => cancelIdleCallback(id)
    } else {
      const t = setTimeout(trigger, 1500)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <section className="hero hero-video-wrap">
      <img
        className="hero-video"
        src={heroPoster}
        alt="Aegis Coworking space at Addax Tower, ADGM, Abu Dhabi"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: loadVideo ? 'none' : 'block',
        }}
        fetchpriority="high"
      />

      {loadVideo && (
        <video
          className="hero-video"
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Aegis Coworking space at Addax Tower, ADGM, Abu Dhabi"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}

      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-eyebrow">
          Coworking Space in ADGM • Business Centre, Addax Tower • Al Reem Island, Abu Dhabi
        </span>
        <h1>
          <span className="hero-title-desktop">COWORKING&nbsp;SPACE&nbsp;IN&nbsp;ADGM&nbsp;ABUDHABI</span>
          <span className="hero-title-mobile">COWORKING SPACE<br />IN ADGM ABUDHABI </span>
        </h1>
        <p>
          Aegis Coworking offers affordable hot desk, dedicated desk, private office,
          virtual office, meeting room and day pass — a business centre in ADGM,
          Abu Dhabi Global Market, with plans starting from AED 1,000.
        </p>
        <Link to="/contact">
          <button className="btn-secondary" aria-label="Book a coworking space tour in ADGM Addax Tower">
            BOOK TOUR
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero
