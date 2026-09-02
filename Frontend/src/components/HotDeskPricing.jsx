import hotDeskImage from '../assets/aegis-coworking-hot-desk-ADGM.webp'

function HotDeskPricing() {
  return (
    <section className="desk-pricing">
      <div className="desk-image">
        <img src={hotDeskImage} alt="Hot desk workspace at Aegis Coworking, Addax Tower, ADGM" width="1448" height="1086" loading="lazy" decoding="async" />
      </div>
      <div className="desk-details">
        <p className="desk-eyebrow">COWORKING SPACE Al REEM ISLAND</p>
        <h2>HOT DESK SPACE ADGM</h2>
      <p className="desk-desc">
  A flexible hot desk in ADGM — pick any open seat on our shared coworking floor.
  Fully furnished and accessible 24/7, full access to our meeting rooms, business lounge,
  and the wider coworking community.
</p>
        <p className="desk-rent-label">Monthly Rent:</p>
       <div className="desk-rent-options">
  <div>
    <span className="price">AED 1,000</span>
    <span className="period">Monthly</span>
  </div>
</div>
        {/* <p className="desk-fee-note">No Due Diligence Fee | Walk-in or Book Online</p> */}
        <div className="desk-perks">
          <div>✓ No Hidden Fees<br />✓ No Admin Fees</div>
          <div>✓ No Deposit<br />✓ No Outgoings</div>
          <div>✓ No Setup Fees<br />✓ Free Registration</div>
          {/* <p className="lease-note">Flexible monthly access</p> */}
        </div>
        <a href="/contact" className="reserve-link">Request Quote &gt;</a>
      </div>
    </section>
  )
}
export default HotDeskPricing
