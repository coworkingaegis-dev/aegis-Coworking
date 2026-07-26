// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo-link">
//         {/* <div className="logo">
//           AEGIS <span className="logo-accent">COWORKING</span>
//         </div> */}
//         <Link to="/" className="logo-link">
//   <div className="logo">
//     AEGIS <span className="logo-accent">COWORKING</span>
//   </div>
// </Link>
//       </Link>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/pricing">Desk</Link></li>
//         <li><Link to="/private-office">Private Office</Link></li>
//         <li><Link to="/virtual-office">Virtual Office</Link></li>
        
//         <li><Link to="/contact">Contact Us</Link></li>
//         {/* <li className="dropdown">
//           More ▾
//           <ul className="dropdown-menu">
//             <li><Link to="/day-pass">Day Pass</Link></li>
//             <li><Link to="/meeting-room">Meeting Room</Link></li>
//           </ul>
//         </li> */}
//       </ul>
//       <Link to="/contact">
//         <button className="btn-primary">REQUEST QUOTE</button>
//       </Link>
//     </nav>
//   )
// }

// export default Navbar














// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
//         <div className="logo">
//           AEGIS <span className="logo-accent">COWORKING</span>
//         </div>
//       </Link>

//       <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
//         <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//         <li><Link to="/office-spaces" onClick={() => setMenuOpen(false)}>Desk</Link></li>
//         <li><Link to="/private-office" onClick={() => setMenuOpen(false)}>Private Office</Link></li>
//         <li><Link to="/virtual-office" onClick={() => setMenuOpen(false)}>Virtual Office</Link></li>
//         <li><Link to="/meeting-room" onClick={() => setMenuOpen(false)}>Meeting Room</Link></li>
//         <li><Link to="/day-pass" onClick={() => setMenuOpen(false)}>Day Pass</Link></li>
//         <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
//         <li className="nav-mobile-cta">
//           <Link to="/contact" onClick={() => setMenuOpen(false)}>
//             <button className="btn-primary">REQUEST QUOTE</button>
//           </Link>
//         </li>
//       </ul>

//       <Link to="/contact" className="nav-desktop-cta">
//         <button className="btn-primary">REQUEST QUOTE</button>
//       </Link>

//       <button
//         className={`nav-toggle ${menuOpen ? 'open' : ''}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle menu"
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//     </nav>
//   )
// }

// export default Navbar















import { useState } from 'react'
import { Link } from 'react-router-dom'
import aegisLogo from '../assets/aegis-logo-transparent.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
        <div className="logo">
          <img src={aegisLogo} alt="Aegis Coworking" className="logo-img" />
          AEGIS <span className="logo-accent">COWORKING</span>
        </div>
      </Link>
      <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/office-spaces" onClick={() => setMenuOpen(false)}>Desk</Link></li>
        <li><Link to="/private-office" onClick={() => setMenuOpen(false)}>Private Office</Link></li>
        <li><Link to="/virtual-office" onClick={() => setMenuOpen(false)}>Virtual Office</Link></li>
        <li className="dropdown">
          More ▾
          <ul className="dropdown-menu">
            <li><Link to="/meeting-room" onClick={() => setMenuOpen(false)}>Meeting Room</Link></li>
            <li><Link to="/presentation-room" onClick={() => setMenuOpen(false)}>Presentation Room</Link></li>
            <li><Link to="/day-pass" onClick={() => setMenuOpen(false)}>Day Pass</Link></li>
          </ul>
        </li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        <li className="nav-mobile-cta">
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="btn-primary">REQUEST QUOTE</button>
          </Link>
        </li>
      </ul>
      <Link to="/contact" className="nav-desktop-cta">
        <button className="btn-primary">REQUEST QUOTE</button>
      </Link>
      <button
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar
