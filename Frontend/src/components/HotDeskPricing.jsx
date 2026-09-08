import hotDeskImage from '../assets/aegis-coworking-hot-desk-ADGM.webp'

function HotDeskPricing() {
  return (
    <section className="desk-pricing">
      <div className="desk-image">
        <img src={hotDeskImage} alt="Hot desk workspace at Aegis Coworking, Addax Tower, ADGM" width="1448" height="1086" loading="lazy" decoding="async" />
      </div>
      <div className="desk-details">
        <h2>FLEXI DESK SPACE ADGM</h2>
        <p className="desk-eyebrow">COWORKING SPACE IN Al REEM ISLAND</p>
        
      <p className="desk-desc">
  A Flexi Desk is a practical choice if you don't need the same workstation every day but still want a professional place to work in ADGM.


  Fully furnished and accessible 24/7, full access to our meeting rooms, business lounge,
  and the wider coworking community. Book your ADGM Coworking Space with Aegis Coworking that sits in office 3812, Addax Tower, Al Reem Island.
        <strong> Need your own permanent desk? Upgrade to a Dedicated Desk for AED 150 more per month. </strong>
</p>
        <p className="desk-rent-label">DISCOUNTED PRICE:</p>
       <div className="desk-rent-options">
  <div>
    <span className="price">AED 1,000</span>
    <span className="period">Monthly</span>
  </div>
</div>
        {/* <p className="desk-fee-note">No Due Diligence Fee | Walk-in or Book Online</p> */}
        <div className="desk-perks">
 
  <div>✓ No Deposit</div>
  <div>✓ No Admin Fees</div>
  
  <div>✓ No Setup Fees</div>
  <div>✓ Free Registration</div>
</div>
        <a href="/contact" className="reserve-link">Request Quote &gt;</a>
      </div>
    </section>
  )
}
export default HotDeskPricing
