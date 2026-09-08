// function NearbyFacilities() {
//   return (
//     <section className="nearby-facilities">
//       <span className="contact-eyebrow">THE NEIGHBORHOOD</span>
//       <h2>NEARBY FACILITIES AROUND ADGM, ADDAX TOWER &amp; AL REEM ISLAND</h2>
     
//       <div className="facilities-grid">
//         <div className="facility-block">
//           <div className="facility-icon">🛍️</div>
//           <h3>SHOPPING</h3>
//           <ul>
//             <li>Steps from Aegis Coworking's ADGM business centre</li>
//             <li>Boutik Mall — fashion, electronics &amp; daily essentials</li>
//             <li>The Galleria, Al Reem Island — home furnishing &amp; more</li>
//           </ul>
//         </div>
//         <div className="facility-block">
//           <div className="facility-icon">🍽️</div>
//           <h3>RESTAURANTS</h3>
//           <ul>
//             <li>Near Addax Tower, Abu Dhabi</li>
//             <li>Cafes &amp; international cuisine at The Galleria</li>
//             <li>Reem Central Mall dining options nearby</li>
//           </ul>
//         </div>
//         <div className="facility-block">
//           <div className="facility-icon">🏦</div>
//           <h3>SERVICES</h3>
//           <ul>
//             <li>Abu Dhabi Commercial Bank (ADCB)</li>
//             <li>Al Ansari Exchange</li>
//             <li>Pharmacies</li>
//             <li>Supermarkets</li>
//             <li>Valet Parking</li>
//           </ul>
//         </div>
//         <div className="facility-block">
//           <div className="facility-icon">🎬</div>
//           <h3>ENTERTAINMENT</h3>
//           <ul>
//             <li>Vox Cinema</li>
//             <li>Family Parks</li>
//             <li>Sports Facilities</li>
//             <li>Beach Access</li>
//             <li>Walking &amp; Cycling Tracks</li>
//           </ul>
//         </div>
//         <div className="facility-block">
//           <div className="facility-icon">🚗</div>
//           <h3>TRANSPORT OPTIONS</h3>
//           <ul>
//             <li>Abu Dhabi public bus system with stops nearby</li>
//             <li>Easy taxi booking via apps</li>
//             <li>Direct access to main highways</li>
//             <li>15 minutes to Abu Dhabi Airport</li>
//           </ul>
//         </div>
//         <div className="facility-block">
//           <div className="facility-icon">🏨</div>
//           <h3>HOTELS</h3>
//           <p>Luxury hotels located within Al Reem Island:</p>
//           <ul>
//             <li>Four Seasons Hotel - Five-star business hotel</li>
//             <li>Rosewood Abu Dhabi - Luxury accommodations</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default NearbyFacilities
















const included = [
  { icon: '🔑', label: '24/7 Access' },
  { icon: '📶', label: 'WiFi' },
  { icon: '🤝', label: 'Meeting Rooms' },
  { icon: '☕', label: 'Coffee' },
  { icon: '🖨️', label: 'Printing' },
  { icon: '🪑', label: 'Furniture' },
  { icon: '🏢', label: 'Business Environment' },
]

const whyAegis = [
  { icon: '📍', label: 'ADGM Location' },
  { icon: '💰', label: 'Transparent Pricing' },
  { icon: '⚡', label: 'No Unnecessary Setup' },
  { icon: '💼', label: 'Professional Workspace' },
  { icon: '🔄', label: 'Flexible Options' },
]

const steps = [
  { number: '1', title: 'Choose Your Desk' },
  { number: '2', title: 'Book a Tour' },
  { number: '3', title: 'Complete Onboarding' },
  { number: '4', title: 'Start Working' },
]

function NearbyFacilities() {
  return (
    <section className="office-info">
      <span className="contact-eyebrow">EVERYTHING YOU NEED TO KNOW</span>
      <h2>WORKING WITH AEGIS COWORKING</h2>

      <div className="office-info-box">
        <div className="office-info-col">
          <h3>What's Included</h3>
          <ul className="office-info-list">
            {included.map((item) => (
              <li key={item.label}>
                <span className="office-info-icon">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="office-info-col">
          <h3>Why Aegis</h3>
          <ul className="office-info-list">
            {whyAegis.map((item) => (
              <li key={item.label}>
                <span className="office-info-icon">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="office-info-col">
          <h3>How It Works</h3>
          <ul className="office-info-list office-info-steps">
            {steps.map((step) => (
              <li key={step.number}>
                <span className="office-info-number">{step.number}</span>
                {step.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default NearbyFacilities
