import myDeskImage from '../assets/aegis-coworking-dedicated-desk-ADGM.webp'

function DeskPricing() {
  return (
    <section className="desk-pricing">
      <div className="desk-image">
        <img src={myDeskImage} alt="Dedicated desk workspace at Aegis Coworking, Addax Tower, ADGM" width="1000" height="850" loading="lazy" decoding="async" />
      </div>
      <div className="desk-details">
       
        <h2>DEDICATED DESK SPACE ADGM</h2>
         <p className="desk-eyebrow">Ideal for founders and solo professionals who want the same seat every day and a lockable spot for equipment</p>
      <p className="desk-desc">
  A dedicated desk in ADGM — one of Abu Dhabi's most established business districts.
  Fully furnished and accessible 24/7, full access to our meeting rooms, business lounge,
  and the wider coworking community. Book your ADGM Coworking Space with Aegis Coworking that sits in office 3812, Addax Tower, Al Reem Island.
</p>

        <p className="desk-rent-label">STARTING FROM:</p>
        <div className="desk-rent-options">
          <div>
            <span className="price">AED 1,150</span>
          
          </div>
        
        </div>
       

        <div className="desk-perks">
          <div>✓ No Hidden Fees<br />✓ No Admin Fees</div>
          <div>✓ No Deposit<br />✓ No Outgoings</div>
          <div>✓ No Setup Fees<br />✓ Free Registration</div>
       
        </div>

        <a href="/contact" className="reserve-link">Request Quote &gt;</a>
      </div>
    </section>
  )
}

export default DeskPricing
