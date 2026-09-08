import myDeskImage from '../assets/Dedicated-desk-ADGM-Abu-Dhabi.webp'
function DeskPricing() {
  return (
    <section className="desk-pricing">
      <div className="desk-image">
        <img src={myDeskImage} alt="Dedicated desk workspace at Aegis Coworking, Addax Tower, ADGM" width="1000" height="850" loading="lazy" decoding="async" />
      </div>
      <div className="desk-details">
       
        <h2>DEDICATED DESK SPACE ADGM</h2>
         <p className="desk-eyebrow">Your own parmanent workspace</p>
      <p className="desk-desc">
  A dedicated desk in ADGM — one of Abu Dhabi's most established business districts. 
 If you work in ADGM regularly and want a workspace that is always yours, a Dedicated Desk gives you the convenience and consistency of a private workspace at a much lower cost. <strong>Only AED 150 more than a Flexi Desk — making it an excellent option for regular users.</strong> </p>
 <p className="desk-desc">No hidden charges apply and only due diligence fee applies for one time only. Book your ADGM Coworking Space with Aegis Coworking that sits in office 3812, Addax Tower, Al Reem Island.
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
        <a href="/contact" className="reserve-link">Request Quote &gt;</a>
      </div>
    </section>
  )
}
export default DeskPricing
