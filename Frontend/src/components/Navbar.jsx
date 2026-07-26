import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        {/* <div className="logo">
          AEGIS <span className="logo-accent">COWORKING</span>
        </div> */}
        <Link to="/" className="logo-link">
  <div className="logo">
    AEGIS <span className="logo-accent">COWORKING</span>
  </div>
</Link>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pricing">Desk</Link></li>
        <li><Link to="/private-office">Private Office</Link></li>
        <li><Link to="/virtual-office">Virtual Office</Link></li>
        
        <li><Link to="/contact">Contact Us</Link></li>
        {/* <li className="dropdown">
          More ▾
          <ul className="dropdown-menu">
            <li><Link to="/day-pass">Day Pass</Link></li>
            <li><Link to="/meeting-room">Meeting Room</Link></li>
          </ul>
        </li> */}
      </ul>
      <Link to="/contact">
        <button className="btn-primary">REQUEST QUOTE</button>
      </Link>
    </nav>
  )
}

export default Navbar
