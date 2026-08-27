// import { Link } from 'react-router-dom'

// function DeskPricing() {
//   return (
//     <section className="desk-pricing">
//       <div className="desk-image">
//         <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" alt="My Desk" />
//       </div>
//       <div className="desk-details">
//         <p className="desk-eyebrow">OFFICE SPACES IN ADGM</p>
//         <h2>MY DESK</h2>
//         <p className="desk-desc">
//           Your own dedicated workspace in Abu Dhabi's premier business district. MY Desk gives
//           you a permanent desk that's yours alone, accessible 24/7 in our bright, inspiring
//           coworking environment with premium amenities and networking opportunities.
//         </p>

//         <p className="desk-rent-label">Monthly Rent:</p>
//         <div className="desk-rent-options">
//           <div>
//             <span className="price">AED 1,200</span>
//             <span className="period">Annual</span>
//           </div>
//           <div>
//             <span className="price">AED 1,350</span>
//             <span className="period">Bi-annual</span>
//           </div>
//           <div>
//             <span className="price">AED 1,450</span>
//             <span className="period">Quarterly</span>
//           </div>
//         </div>
//         <p className="desk-fee-note">+ AED 1,200 one-time Due Diligence Fee | ADGM Fees apply</p>

//         <div className="desk-perks">
//           <div>✓ No Hidden Fees<br />✓ No Admin Fees</div>
//           <div>✓ No Deposit<br />✓ No Outgoings</div>
//           <div>✓ No Setup Fees<br />✓ Free Registration</div>
//           <p className="lease-note">Lease: 12-36 months</p>
//         </div>

//         <Link to="/contact" className="reserve-link">Request Quote &gt;</Link>
//       </div>
//     </section>
//   )
// }

// export default DeskPricing





import myDeskImage from '../assets/aegis-coworking-dedicated-desk-ADGM.jpg'

function DeskPricing() {
  return (
    <section className="desk-pricing">
      <div className="desk-image">
        <img src={myDeskImage} alt="Dedicated desk workspace at Aegis Coworking, Addax Tower, ADGM" />
      </div>
      <div className="desk-details">
        <p className="desk-eyebrow">OFFICE SPACES IN ADGM</p>
        <h2>MY DESK</h2>
      <p className="desk-desc">
  A dedicated desk in ADGM — one of Abu Dhabi's most established business districts.
  Fully furnished and accessible 24/7, full access to our meeting rooms, business lounge,
  and the wider coworking community.
</p>

        <p className="desk-rent-label">Monthly Rent:</p>
        <div className="desk-rent-options">
          <div>
            <span className="price">AED 1,150</span>
            <span className="period">Annual</span>
          </div>
          <div>
            <span className="price">AED 1,300</span>
            <span className="period">Bi-annual</span>
          </div>
          <div>
            <span className="price">AED 1,400</span>
            <span className="period">Quarterly</span>
          </div>
        </div>
        <p className="desk-fee-note">+ AED 1,100 one-time Due Diligence Fee | ADGM Fees apply</p>

        <div className="desk-perks">
          <div>✓ No Hidden Fees<br />✓ No Admin Fees</div>
          <div>✓ No Deposit<br />✓ No Outgoings</div>
          <div>✓ No Setup Fees<br />✓ Free Registration</div>
          <p className="lease-note">Lease: 12-36 months</p>
        </div>

        <a href="/contact" className="reserve-link">Request Quote &gt;</a>
      </div>
    </section>
  )
}

export default DeskPricing
