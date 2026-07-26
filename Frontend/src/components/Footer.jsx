import { Link } from 'react-router-dom'
import aegisLogo from '../assets/aegis-logo.jpeg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col footer-brand">
        <div className="footer-logo">
          <span className="footer-logo-dot"></span>
          AEGIS <span className="footer-logo-accent">COWORKING</span>
        </div>
        <p>Premium coworking space inside Addax Tower, Al Reem Island, Abu Dhabi.</p>
         <img src={aegisLogo} alt="Aegis Coworking" className="footer-logo-image" />
      </div>

      <div className="footer-col">
        <h4>QUICK LINKS</h4>
        <Link to="/">Home</Link>
        <Link to="/pricing">Deals</Link>
         <Link to="/blogs">Blog</Link>
        <Link to="/contact">Contact Us</Link>
       
      </div>

      <div className="footer-col">
        <h4>CONTACT US</h4>
        <p><strong>Phone:</strong> +971 50 138 1426</p>
        <p><strong>Email:</strong> contact@aegiscoworking.ae</p>
        <p><strong>Address:</strong> Addax Tower, Al Reem Island, Abu Dhabi</p>
      </div>

      <div className="footer-col">
        <h4>OPENING HOURS</h4>
        <p>24/7 Access for Members</p>
        <p>Tours: Mon–Fri, 9am–6pm</p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Aegis Coworking. All rights reserved.</p>
        <p>Terms & Conditions&nbsp;&nbsp;·&nbsp;&nbsp;Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer
