// const amenities = [
//   { title: "PREMIUM COFFEE", desc: "Complimentary coffee and refreshments" },
//   { title: "VIDEO CONFERENCE ROOMS", desc: "Professional Video Conference meeting spaces" },
//   { title: "PREMIUM CHAIRS", desc: "3D Active Ergonomic Chairs" },
//   { title: "PRINT & SCAN", desc: "Printing and scanning facilities" },
//   { title: "FITNESS ACCESS", desc: "Nearby gyms and sports facilities" },
//   { title: "BEACH NEARBY", desc: "Walking distance to beach areas" },
//   { title: "SEA VIEWS", desc: "Stunning waterfront location" },
//   { title: "PRIVATE OFFICES", desc: "Dedicated private office spaces" },
// ]

// function Amenities() {
//   return (
//     <section className="amenities">
//        <span className="contact-eyebrow">WHAT'S INCLUDED</span>
//       <h2>AMENITIES</h2>
//       <p className="subtitle">Our coworking space in Addax Tower offers premium amenities designed for productivity and comfort</p>
//       <div className="amenities-grid">
//         {amenities.map((item, i) => (
//           <div className="amenity-item" key={i}>
//             <h4>{item.title}</h4>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Amenities













// const amenities = [
//   { title: "PREMIUM COFFEE", desc: "Complimentary premium coffee, tea, and refreshments throughout the day." },
//   { title: "VIDEO CONFERENCE ROOMS", desc: "Fully equipped meeting rooms with video conferencing for client meetings and remote collaboration." },
//   { title: "PREMIUM CHAIRS", desc: "Ergonomic office chairs designed for all-day comfort and productivity." },
//   { title: "PRINT & SCAN", desc: "High-quality printing, scanning, and document support for your business needs." },
//   { title: "FITNESS ACCESS", desc: "Convenient access to nearby fitness centers and wellness facilities." },
//   { title: "BEACH NEARBY", desc: "Located close to Abu Dhabi's waterfront with relaxing outdoor spaces nearby." },
//   { title: "SEA VIEWS", desc: "Enjoy panoramic waterfront views from our coworking space in Addax Tower." },
//   { title: "PRIVATE OFFICES", desc: "Move-in-ready private offices with flexible membership plans for businesses of all sizes." },
// ]

// function Amenities() {
//   return (
//     <section className="amenities">
//        <span className="contact-eyebrow">WHAT'S INCLUDED</span>
//      <h2>AMENITIES</h2>
// <p className="subtitle">
//   Premium coworking amenities in Abu Dhabi's ADGM.
// </p>
//       <div className="amenities-grid">
//         {amenities.map((item, i) => (
//           <div className="amenity-item" key={i}>
//             <h4>{item.title}</h4>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Amenities








const amenities = [
  { title: "PREMIUM COFFEE", icon: "☕" },
  { title: "VIDEO CONFERENCE ROOMS", icon: "🎥" },
  { title: "PREMIUM CHAIRS", icon: "🪑" },
  { title: "PRINT & SCAN", icon: "🖨️" },
  { title: "FITNESS ACCESS", icon: "🏋️" },
  { title: "BEACH NEARBY", icon: "🏖️" },
  { title: "SEA VIEWS", icon: "🌊" },
  { title: "PRIVATE OFFICES", icon: "🚪" },
]

function Amenities() {
  return (
    <section className="amenities">
      <h2>ADGM AMENITIES</h2>
      <div className="amenities-grid">
        {amenities.map((item, i) => (
          <div className="amenity-item" key={i}>
            <span className="amenity-icon">{item.icon}</span>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Amenities
