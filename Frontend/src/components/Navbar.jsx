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


















// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import aegisLogo from '../assets/aegis-logo-transparent.png'

// const ACCENT = '#1f4d3a' // swap for your exact brand green (matches REQUEST QUOTE button)

// const whoWeServeStyles = {
//   panel: {
//     display: 'grid',
//     gridTemplateColumns: '1.5fr 1fr',
//     gap: '36px',
//     position: 'absolute',
//     top: '100%',
//     left: 0,
//     width: '660px',
//     background: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 16px 40px rgba(0, 0, 0, 0.16)',
//     border: '1px solid rgba(0, 0, 0, 0.06)',
//     padding: '40px',
//     zIndex: 100,
//   },
//   accentLine: {
//     width: '36px',
//     height: '3px',
//     background: ACCENT,
//     borderRadius: '2px',
//     marginBottom: '16px',
//   },
//   heading: {
//     fontSize: '1.45rem',
//     fontWeight: 600,
//     letterSpacing: '-0.01em',
//     margin: '0 0 16px',
//     color: '#111',
//   },
//   paragraph: {
//     fontSize: '0.92rem',
//     color: '#5c5c5c',
//     lineHeight: 1.75,
//     margin: '0 0 24px',
//     maxWidth: '340px',
//   },
//   learnMore: (isHovered) => ({
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '6px',
//     fontSize: '0.85rem',
//     fontWeight: 600,
//     color: ACCENT,
//     textDecoration: 'none',
//     borderBottom: isHovered ? `1px solid ${ACCENT}` : '1px solid transparent',
//     paddingBottom: '2px',
//     transition: 'border-color 0.15s ease',
//   }),
//   divider: {
//     borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
//     paddingLeft: '32px',
//   },
//   linksLabel: {
//     fontSize: '0.72rem',
//     fontWeight: 600,
//     letterSpacing: '0.06em',
//     textTransform: 'uppercase',
//     color: '#999',
//     margin: '0 0 18px',
//   },
//   linksList: {
//     listStyle: 'none',
//     margin: 0,
//     padding: 0,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '6px',
//   },
//   linkItem: (isHovered) => ({
//     display: 'flex',
//     alignItems: 'flex-start',
//     gap: '10px',
//     padding: '10px 8px',
//     borderRadius: '6px',
//     background: isHovered ? 'rgba(31, 77, 58, 0.06)' : 'transparent',
//     cursor: 'pointer',
//     transition: 'background 0.15s ease',
//   }),
//   dot: (isHovered) => ({
//     width: '6px',
//     height: '6px',
//     borderRadius: '50%',
//     background: isHovered ? ACCENT : '#ccc',
//     flexShrink: 0,
//     marginTop: '6px',
//     transition: 'background 0.15s ease',
//   }),
//   linkText: (isHovered) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '2px',
//   }),
//   linkTitle: (isHovered) => ({
//     fontSize: '0.95rem',
//     fontWeight: 500,
//     color: isHovered ? ACCENT : '#222',
//     transition: 'color 0.15s ease',
//   }),
//   linkSubtitle: {
//     fontSize: '0.78rem',
//     color: '#999',
//     lineHeight: 1.4,
//   },
// }

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [dropdownOpen, setDropdownOpen] = useState(false)
//   const [whoWeServeOpen, setWhoWeServeOpen] = useState(false)
//   const [hoveredLink, setHoveredLink] = useState(null)

//   const closeAll = () => {
//     setMenuOpen(false)
//     setDropdownOpen(false)
//     setWhoWeServeOpen(false)
//   }

//   const audiences = [
//     { title: 'Freelancers', subtitle: 'Flexible desks for solo professionals' },
//     { title: 'Startups', subtitle: 'Room to grow, from one desk to a full team' },
//     { title: 'Individuals', subtitle: 'Flexible workspace access, no long-term commitment' },
//     { title: 'Small Businesses', subtitle: 'Dedicated space to run and scale your team' },
//   ]

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

//         <li
//           className={`dropdown ${whoWeServeOpen ? 'dropdown-open' : ''}`}
//           onClick={() => setWhoWeServeOpen(!whoWeServeOpen)}
//           style={{ position: 'relative' }}
//         >
//           Who We Serve
//           {whoWeServeOpen && (
//             <div style={whoWeServeStyles.panel}>
//               <div>
//                 <div style={whoWeServeStyles.accentLine} />
//                 <h3 style={whoWeServeStyles.heading}>Who we serve</h3>
//                 <p style={whoWeServeStyles.paragraph}>
//                   With a home in ADGM's Addax Tower on Al Reem Island and a
//                   full suite of workspace solutions, Aegis Coworking offers
//                   an affordable, flexible coworking space for businesses of
//                   every size.
//                 </p>
//                 <Link
//                   to="/pricing"
//                   onClick={closeAll}
//                   style={whoWeServeStyles.learnMore(hoveredLink === 'learn-more')}
//                   onMouseEnter={() => setHoveredLink('learn-more')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Learn more →
//                 </Link>
//               </div>

//               <div style={whoWeServeStyles.divider}>
//                 <p style={whoWeServeStyles.linksLabel}>Built For</p>
//                 <ul style={whoWeServeStyles.linksList}>
//                   {audiences.map(({ title, subtitle }) => (
//                     <li
//                       key={title}
//                       style={whoWeServeStyles.linkItem(hoveredLink === title)}
//                       onMouseEnter={() => setHoveredLink(title)}
//                       onMouseLeave={() => setHoveredLink(null)}
//                     >
//                       <span style={whoWeServeStyles.dot(hoveredLink === title)} />
//                       <span style={whoWeServeStyles.linkText(hoveredLink === title)}>
//                         <span style={whoWeServeStyles.linkTitle(hoveredLink === title)}>
//                           {title}
//                         </span>
//                         <span style={whoWeServeStyles.linkSubtitle}>{subtitle}</span>
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           )}
//         </li>

//               <li
//           className={`dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}
//           onClick={() => setDropdownOpen(!dropdownOpen)}
//         >
//           What We Offer ▾
//           <ul className="dropdown-menu">
//         <li><Link to="/office-spaces" onClick={closeAll}>Office Desk</Link></li>
//             <li><Link to="/virtual-office" onClick={closeAll}>Virtual Office</Link></li>
//                    <li><Link to="/private-office" onClick={closeAll}>Private Office</Link></li>
//             {/* <li><Link to="/offices" onClick={closeAll}>Office</Link></li> */}
//             <li><Link to="/meeting-room" onClick={closeAll}>Meeting Room</Link></li>
//             {/* <li><Link to="/presentation-room" onClick={closeAll}>Presentation Room</Link></li> */}
//             <li><Link to="/day-pass" onClick={closeAll}>Day Pass</Link></li>
//           </ul>
//         </li>
//         <li><Link to="/pricing" onClick={closeAll}>Hot Deals</Link></li>
        
//         <li><Link to="/membership" onClick={closeAll}>Membership</Link></li>
        
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

const ACCENT = '#1f4d3a' // swap for your exact brand green (matches REQUEST QUOTE button)

const whoWeServeStyles = {
  panel: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '36px',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '660px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.16)',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    padding: '40px',
    zIndex: 100,
  },
  accentLine: {
    width: '36px',
    height: '3px',
    background: ACCENT,
    borderRadius: '2px',
    marginBottom: '16px',
  },
  heading: {
    fontSize: '1.45rem',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    margin: '0 0 16px',
    color: '#111',
  },
  paragraph: {
    fontSize: '0.92rem',
    color: '#5c5c5c',
    lineHeight: 1.75,
    margin: '0 0 24px',
    maxWidth: '340px',
  },
  learnMore: (isHovered) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: ACCENT,
    textDecoration: 'none',
    borderBottom: isHovered ? `1px solid ${ACCENT}` : '1px solid transparent',
    paddingBottom: '2px',
    transition: 'border-color 0.15s ease',
  }),
  divider: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
    paddingLeft: '32px',
  },
  linksLabel: {
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: '#999',
    margin: '0 0 18px',
  },
  linksList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  linkItem: (isHovered) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '10px 8px',
    borderRadius: '6px',
    background: isHovered ? 'rgba(31, 77, 58, 0.06)' : 'transparent',
    cursor: 'pointer',
    transition: 'background 0.15s ease',
  }),
  dot: (isHovered) => ({
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: isHovered ? ACCENT : '#ccc',
    flexShrink: 0,
    marginTop: '6px',
    transition: 'background 0.15s ease',
  }),
  linkText: (isHovered) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  }),
  linkTitle: (isHovered) => ({
    fontSize: '0.95rem',
    fontWeight: 500,
    color: isHovered ? ACCENT : '#222',
    transition: 'color 0.15s ease',
  }),
  linkSubtitle: {
    fontSize: '0.78rem',
    color: '#999',
    lineHeight: 1.4,
  },
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  const closeAll = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
    setWhoWeServeOpen(false)
  }

  const toggleWhoWeServe = () => {
  setDropdownOpen(false)
  setWhoWeServeOpen(prev => !prev)
}

const toggleWhatWeOffer = () => {
  setWhoWeServeOpen(false)
  setDropdownOpen(prev => !prev)
}

  const audiences = [
    { title: 'Freelancers', subtitle: 'Flexible desks for solo professionals' },
    { title: 'Startups', subtitle: 'Room to grow, from one desk to a full team' },
    { title: 'Individuals', subtitle: 'Flexible workspace access, no long-term commitment' },
    { title: 'Small Businesses', subtitle: 'Dedicated space to run and scale your team' },
  ]

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
          onClick={toggleWhoWeServe}
          style={{ position: 'relative' }}
        >
          Who We Serve
          {whoWeServeOpen && (
            <div style={whoWeServeStyles.panel}>
              <div>
                <div style={whoWeServeStyles.accentLine} />
                <h3 style={whoWeServeStyles.heading}>Who we serve</h3>
                <p style={whoWeServeStyles.paragraph}>
                  With a home in ADGM's Addax Tower on Al Reem Island and a
                  full suite of workspace solutions, Aegis Coworking offers
                  an affordable, flexible coworking space for businesses of
                  every size.
                </p>
                <Link
                  to="/pricing"
                  onClick={closeAll}
                  style={whoWeServeStyles.learnMore(hoveredLink === 'learn-more')}
                  onMouseEnter={() => setHoveredLink('learn-more')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Learn more →
                </Link>
              </div>

              <div style={whoWeServeStyles.divider}>
                <p style={whoWeServeStyles.linksLabel}>Built For</p>
                <ul style={whoWeServeStyles.linksList}>
                  {audiences.map(({ title, subtitle }) => (
                    <li
                      key={title}
                      style={whoWeServeStyles.linkItem(hoveredLink === title)}
                      onMouseEnter={() => setHoveredLink(title)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span style={whoWeServeStyles.dot(hoveredLink === title)} />
                      <span style={whoWeServeStyles.linkText(hoveredLink === title)}>
                        <span style={whoWeServeStyles.linkTitle(hoveredLink === title)}>
                          {title}
                        </span>
                        <span style={whoWeServeStyles.linkSubtitle}>{subtitle}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>

              <li
          className={`dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}
          onClick={toggleWhatWeOffer}
        >
          What We Offer ▾
          <ul className="dropdown-menu">
        <li><Link to="/office-spaces" onClick={closeAll}>Office Desk</Link></li>
            <li><Link to="/virtual-office" onClick={closeAll}>Virtual Office</Link></li>
                   <li><Link to="/private-office" onClick={closeAll}>Private Office</Link></li>
            {/* <li><Link to="/offices" onClick={closeAll}>Office</Link></li> */}
            <li><Link to="/meeting-room" onClick={closeAll}>Meeting Room</Link></li>
            {/* <li><Link to="/presentation-room" onClick={closeAll}>Presentation Room</Link></li> */}
            <li><Link to="/day-pass" onClick={closeAll}>Day Pass</Link></li>
          </ul>
        </li>
        <li><Link to="/pricing" onClick={closeAll}>Hot Deals</Link></li>
        
        <li><Link to="/membership" onClick={closeAll}>Membership</Link></li>
        
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
