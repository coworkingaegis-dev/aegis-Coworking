// import { Link } from 'react-router-dom'
// import aegisLogo from '../assets/aegis-logo.jpeg'

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-col footer-brand">
//         <div className="footer-logo">
//           <span className="footer-logo-dot"></span>
//           AEGIS <span className="footer-logo-accent">COWORKING</span>
//         </div>
//         <p>Premium coworking space inside Addax Tower, Al Reem Island, Abu Dhabi.</p>
//          <img src={aegisLogo} alt="Aegis Coworking" className="footer-logo-image" />
//       </div>

//       <div className="footer-col">
//         <h4>QUICK LINKS</h4>
//         <Link to="/">Home</Link>
//         <Link to="/pricing">Hot Deals</Link>
//          <Link to="/blogs">Blog</Link>
//         <Link to="/contact">Contact Us</Link>
       
//       </div>

//       <div className="footer-col">
//         <h4>CONTACT US</h4>
//         <p><strong>Phone:</strong>‎ +971 50 392 6316 </p>
//         <p><strong>Email:</strong> contact@aegiscoworking.ae</p>
//         <p><strong>Address:</strong> Addax Tower, Al Reem Island, Abu Dhabi</p>
//       </div>

//       <div className="footer-col">
//         <h4>OPENING HOURS</h4>
//         <p>24/7 Access for Members</p>
//         <p>Tours: Mon–Fri, 9am–6pm</p>
//       </div>

//       <div className="footer-bottom">
//         <p>© 2026 Aegis Coworking. All rights reserved.</p>
//         <p>Terms & Conditions&nbsp;&nbsp;·&nbsp;&nbsp;Privacy Policy</p>
//       </div>
//     </footer>
//   )
// }

// export default Footer














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
        <div className="footer-socials">
          <a href="https://www.instagram.com/aegis.coworking/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/aegis-coworking/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2"/>
              <rect x="6.5" y="10" width="2.5" height="8" fill="currentColor"/>
              <circle cx="7.75" cy="6.75" r="1.5" fill="currentColor"/>
              <path d="M11.5 18V10H14V11.2C14.5 10.4 15.5 9.7 17 9.7C19 9.7 20 11 20 13.3V18H17.5V13.7C17.5 12.5 17 11.8 16 11.8C15 11.8 14.3 12.5 14.3 13.7V18H11.5Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-col">
        <h4>QUICK LINKS</h4>
        <Link to="/">Home</Link>
        <Link to="/pricing">Hot Deals</Link>
         <Link to="/blogs">Blog</Link>
        <Link to="/contact">Contact Us</Link>
       
      </div>
      <div className="footer-col">
        <h4>CONTACT US</h4>
        <p><strong>Phone:</strong>‎ +971 50 392 6316 </p>
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
