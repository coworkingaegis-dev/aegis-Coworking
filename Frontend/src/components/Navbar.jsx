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















// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import aegisLogo from '../assets/aegis-logo-transparent.png'

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [dropdownOpen, setDropdownOpen] = useState(false)

//   const closeAll = () => {
//     setMenuOpen(false)
//     setDropdownOpen(false)
//   }

//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo-link" onClick={closeAll}>
//         <div className="logo">
//           <img src={aegisLogo} alt="Aegis Coworking" className="logo-img" />
//           AEGIS <span className="logo-accent">COWORKING</span>
//         </div>
//       </Link>
//       <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
//         <li><Link to="/" onClick={closeAll}>Home</Link></li>
//         <li><Link to="/pricing" onClick={closeAll}>Hot Deals</Link></li>
//         <li><Link to="/office-spaces" onClick={closeAll}>Office Desk</Link></li>
//         <li><Link to="/private-office" onClick={closeAll}>Private Office</Link></li>
//         <li
//           className={`dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}
//           onClick={() => setDropdownOpen(!dropdownOpen)}
//         >
//           More ▾
//           <ul className="dropdown-menu">
//             <li><Link to="/virtual-office" onClick={closeAll}>Virtual Office</Link></li>
//             <li><Link to="/meeting-room" onClick={closeAll}>Meeting Room</Link></li>
//             {/* <li><Link to="/presentation-room" onClick={closeAll}>Presentation Room</Link></li> */}
//             <li><Link to="/day-pass" onClick={closeAll}>Day Pass</Link></li>
//           </ul>
//         </li>
//         <li><Link to="/contact" onClick={closeAll}>Contact Us</Link></li>
//         <li className="nav-mobile-cta">
//           <Link to="/contact" onClick={closeAll}>
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

const whoWeServeStyles = {
  panel: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr',
    gap: '24px',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '480px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
    padding: '28px',
    zIndex: 100,
  },
  heading: {
    fontSize: '1.3rem',
    fontWeight: 500,
    margin: '0 0 10px',
  },
  paragraph: {
    fontSize: '0.85rem',
    color: '#555',
    lineHeight: 1.5,
    margin: 0,
  },
  linksList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    fontSize: '0.95rem',
  },
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false)

  const closeAll = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
    setWhoWeServeOpen(false)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link" onClick={closeAll}>
        <div className="logo">
          <img src={aegisLogo} alt="Aegis Coworking" className="logo-img" />
          AEGIS <span className="logo-accent">COWORKING</span>
        </div>
      </Link>
      <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <li><Link to="/" onClick={closeAll}>Home</Link></li>

        <li
          className={`dropdown ${whoWeServeOpen ? 'dropdown-open' : ''}`}
          onClick={() => setWhoWeServeOpen(!whoWeServeOpen)}
          style={{ position: 'relative' }}
        >
          Who We Serve
          {whoWeServeOpen && (
            <div style={whoWeServeStyles.panel}>
              <div>
                <h3 style={whoWeServeStyles.heading}>Who we serve</h3>
                <p style={whoWeServeStyles.paragraph}>
                  Aegis Coworking is ADGM's flexible workspace at Addax
                  Tower, Al Reem Island — offering 24/7 access, high-speed
                  fibre internet, and a growing community of 200+ members
                  across freelancers, startups, and growing businesses.
                </p>
              </div>
              <ul style={whoWeServeStyles.linksList}>
                <li>Freelancers</li>
                <li>Startups</li>
                <li>Individuals</li>
                <li>Small Businesses</li>
              </ul>
            </div>
          )}
        </li>

        <li><Link to="/pricing" onClick={closeAll}>Hot Deals</Link></li>
        <li><Link to="/office-spaces" onClick={closeAll}>Office Desk</Link></li>
        <li><Link to="/private-office" onClick={closeAll}>Private Office</Link></li>
        <li
          className={`dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          More ▾
          <ul className="dropdown-menu">
            <li><Link to="/virtual-office" onClick={closeAll}>Virtual Office</Link></li>
            <li><Link to="/meeting-room" onClick={closeAll}>Meeting Room</Link></li>
            {/* <li><Link to="/presentation-room" onClick={closeAll}>Presentation Room</Link></li> */}
            <li><Link to="/day-pass" onClick={closeAll}>Day Pass</Link></li>
          </ul>
        </li>
        <li><Link to="/contact" onClick={closeAll}>Contact Us</Link></li>
        <li className="nav-mobile-cta">
          <Link to="/contact" onClick={closeAll}>
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
