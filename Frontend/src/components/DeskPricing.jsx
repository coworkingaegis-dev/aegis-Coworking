// import myDeskImage from '../assets/Dedicated-desk-ADGM-Abu-Dhabi.webp'
// import { Link } from 'react-router-dom'
// function DeskPricing() {
//   return (
//     <section className="desk-pricing">
//       <div className="desk-image">
//         <img src={myDeskImage} alt="Dedicated desk workspace at Aegis Coworking, Addax Tower, ADGM" width="1000" height="850" loading="lazy" decoding="async" />
//       </div>
//       <div className="desk-details">
       
//         <h2>DEDICATED DESK SPACE ADGM</h2>
//          <p className="desk-eyebrow">Your own parmanent workspace</p>
//       <p className="desk-desc">
//   A dedicated desk in ADGM — one of Abu Dhabi's most established business districts. 
//  If you work in ADGM regularly and want a workspace that is always yours, a Dedicated Desk gives you the convenience and consistency of a private workspace at a much lower cost. <strong>Only AED 150 more than a Flexi Desk — making it an excellent option for regular users.</strong> </p>
//  <p className="desk-desc">No hidden charges apply and only due diligence fee applies for one time only. Book your ADGM Coworking Space with Aegis Coworking that sits in office 3812, Addax Tower, Al Reem Island.
// </p>
//         <p className="desk-rent-label">DISCOUNTED PRICE:</p>
//         <div className="desk-rent-options">
//           <div>
//             <span className="price">AED 1,150</span>
//              <span className="period">Monthly</span>
          
//           </div>
        
//         </div>
       
//        <div className="desk-perks">

//   <div>✓ No Deposit</div>
//   <div>✓ No Admin Fees</div>
 
//   <div>✓ No Setup Fees</div>
//   <div>✓ Free Registration</div>
// </div>
//        <Link to="/contact" className="reserve-link">Request Quote &gt;</Link>
//       </div>
//     </section>
//   )
// }
// export default DeskPricing

















import myDeskImage from '../assets/Dedicated-desk-ADGM-Abu-Dhabi.webp'
import { Link } from 'react-router-dom'

function DeskPricing() {
  return (
    <section className="desk-pricing">
      <div className="desk-image">
        <img src={myDeskImage} alt="Dedicated desk workspace at Aegis Coworking, Addax Tower, ADGM" width="1000" height="850" loading="lazy" decoding="async" />
      </div>
      <div className="desk-details">

        <h2>DEDICATED DESK SPACE ADGM</h2>
        <p className="desk-eyebrow">Your own permanent workspace</p>
        <p className="desk-desc">
          A dedicated desk in ADGM — one of Abu Dhabi's most established business districts.
          If you work in ADGM regularly and want a workspace that is always yours, a Dedicated Desk gives you the convenience and consistency of a private workspace at a much lower cost. <strong>Only AED 150 more than a Flexi Desk — making it an excellent option for regular users.</strong>
        </p>
        <p className="desk-desc">
          No hidden charges apply and only due diligence fee applies for one time only. Book your ADGM Coworking Space with Aegis Coworking that sits in office 3812, Addax Tower, Al Reem Island.
        </p>

        {/* Due diligence fee line */}
        <p
          style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: '#b45309',
            background: 'rgba(180, 83, 9, 0.08)',
            border: '1px solid rgba(180, 83, 9, 0.25)',
            borderRadius: '6px',
            padding: '4px 10px',
            margin: '4px 0 12px',
            letterSpacing: '0.2px',
          }}
        >
          + AED 1,200 Due Diligence Fee <span style={{ opacity: 0.8 }}>(one-time)</span>
        </p>

        <p className="desk-rent-label">DISCOUNTED PRICE:</p>
        <div className="desk-rent-options">
          <div>
            <span className="price">AED 1,150</span>
            <span className="period">Monthly</span>
          </div>
        </div>

        <div className="desk-perks">
          <div>✓ No Deposit</div>
          <div>✓ No Admin Fees</div>
          <div>✓ No Setup Fees</div>
          <div>✓ Free Registration</div>
        </div>

        <Link to="/contact" className="reserve-link">Request Quote &gt;</Link>
      </div>
    </section>
  )
}

export default DeskPricing
