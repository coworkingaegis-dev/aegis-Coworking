// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import heroVideo from '../assets/hero_video.mp4'

// function Hero() {
//   return (
//     <section className="hero hero-video-wrap">
//       <video
//         className="hero-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//         aria-label="Aegis Coworking space at Addax Tower, ADGM, Abu Dhabi"
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>
//       <div className="hero-overlay"></div>
//       <motion.div
//         className="hero-content"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <span className="hero-eyebrow">
//           Coworking Space in ADGM • Business Centre, Addax Tower • Al Reem Island, Abu Dhabi
//         </span>
//         <h1>
//           <span className="hero-title-desktop">YOUR&nbsp;ADGM&nbsp;WORKSPACE</span>
//           <span className="hero-title-mobile">YOUR ADGM<br />WORKSPACE</span>
//         </h1>
//         <p>
//           Aegis Coworking offers affordable hot desks, dedicated desks, private offices,
//           virtual offices, meeting rooms and day passes — a business centre in ADGM,
//           Abu Dhabi Global Market, with plans starting from AED 1,000.
//         </p>
//         <Link to="/contact">
//           <button className="btn-secondary" aria-label="Book a coworking space tour in ADGM Addax Tower">
//             BOOK TOUR
//           </button>
//         </Link>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero



















import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroVideo from '../assets/hero_video_compressed.mp4'
import heroPoster from '../assets/hero-poster.jpg'

function Hero() {
  return (
    <section className="hero hero-video-wrap">
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
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 1, y: 0 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0 }}
      >
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
      </motion.div>
    </section>
  )
}

export default Hero
