// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import heroVideo from '../assets/hero_video.mp4'

// function Hero() {
//   return (
//     <section className="hero hero-video-wrap">
//       <video className="hero-video" autoPlay loop muted playsInline>
//         <source src={heroVideo} type="video/mp4" />
//       </video>
//       <div className="hero-overlay"></div>

//       <motion.div
//         className="hero-content"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <span className="hero-eyebrow"> Coworking Space in ADGM, Addax Tower · AL REEM ISLAND</span>
// <h1>WHERE&nbsp;&nbsp;&nbsp;STARTUPS&nbsp;&nbsp;&nbsp;TAKE&nbsp;&nbsp;&nbsp;OFF</h1>
// {/* <p className="hero-subhead">Coworking Space in ADGM, Addax Tower</p> */}
// <p>Premium coworking inside ADGM, Abu Dhabi's financial free zone — a registered address, a real community, and a view worth showing up for.</p>
//         <Link to="/contact">
//           <button className="btn-secondary">BOOK TOUR</button>
//         </Link>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero
















// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import heroVideo from '../assets/hero_video.mp4'

// function Hero() {
//   return (
//     <section className="hero hero-video-wrap">
//       <video className="hero-video" autoPlay loop muted playsInline>
//         <source src={heroVideo} type="video/mp4" />
//       </video>
//       <div className="hero-overlay"></div>

//       <motion.div
//         className="hero-content"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <span className="hero-eyebrow">Coworking Space in ADGM, Addax Tower · AL REEM ISLAND</span>
//         <h1>
//           <span className="hero-title-desktop">WHERE&nbsp;&nbsp;&nbsp;STARTUPS&nbsp;&nbsp;&nbsp;TAKE&nbsp;&nbsp;&nbsp;OFF</span>
//           <span className="hero-title-mobile">WHERE STARTUPS<br />TAKE OFF</span>
//         </h1>
//         <p>Premium office space and coworking inside ADGM, Abu Dhabi's financial free zone — a registered address, a real community, and a view worth showing up for.</p>
//         <Link to="/contact">
//           <button className="btn-secondary">BOOK TOUR</button>
//         </Link>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero













import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroVideo from '../assets/hero_video.mp4'
import posthog from '../posthog'

function Hero() {
  return (
    <section className="hero hero-video-wrap">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="hero-eyebrow">Coworking Space in Abu Dhabi • ADGM • Addax Tower • Al Reem Island</span>
        <h1>
          <span className="hero-title-desktop">WHERE&nbsp;&nbsp;&nbsp;STARTUPS&nbsp;&nbsp;&nbsp;TAKE&nbsp;&nbsp;&nbsp;OFF</span>
          <span className="hero-title-mobile">WHERE STARTUPS<br />TAKE OFF</span>
        </h1>
        <p>Aegis Coworking offers hot desks, dedicated desks, private offices,
  meeting rooms, and flexible workspaces in ADGM, Abu Dhabi.</p>
        <Link to="/contact" onClick={() => posthog.capture('quote_request_started', { source: 'home_hero_tour' })}>
          <button className="btn-secondary">BOOK TOUR</button>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
