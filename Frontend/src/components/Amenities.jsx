const amenities = [
  { title: "PREMIUM COFFEE", desc: "Complimentary coffee and refreshments" },
  { title: "VIDEO CONFERENCE ROOMS", desc: "Professional Video Conference meeting spaces" },
  { title: "PREMIUM CHAIRS", desc: "3D Active Ergonomic Chairs" },
  { title: "PRINT & SCAN", desc: "Printing and scanning facilities" },
  { title: "FITNESS ACCESS", desc: "Nearby gyms and sports facilities" },
  { title: "BEACH NEARBY", desc: "Walking distance to beach areas" },
  { title: "SEA VIEWS", desc: "Stunning waterfront location" },
  { title: "PRIVATE OFFICES", desc: "Dedicated private office spaces" },
]

function Amenities() {
  return (
    <section className="amenities">
       <span className="contact-eyebrow">WHAT'S INCLUDED</span>
      <h2>AMENITIES</h2>
      <p className="subtitle">Our coworking space in Addax Tower offers premium amenities designed for productivity and comfort</p>
      <div className="amenities-grid">
        {amenities.map((item, i) => (
          <div className="amenity-item" key={i}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Amenities
