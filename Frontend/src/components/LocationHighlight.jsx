function LocationHighlight() {
  return (
    <section className="location-highlight">
      <div className="location-content">
        <div className="location-text">
          <span className="contact-eyebrow">THE ADDRESS</span>
          <h2>Addax Tower, Al Reem Island</h2>
          <p>
            Coworking space on Al Reem Island — Addax Tower puts you right in the heart of
            Abu Dhabi's international financial free zone, steps from restaurants, banks,
            and the waterfront.
          </p>

          <div className="address-card">
            <div className="address-icon">📍</div>
            <div>
              <strong>Addax Tower</strong>
              <span>Al Reem Island, Abu Dhabi, UAE</span>
            </div>
          </div>

          <div className="location-stats">
            <div className="location-stat">
              <div className="stat-icon">✈️</div>
              <strong>15 min</strong>
              <span>To Abu Dhabi Airport</span>
            </div>
            <div className="location-stat">
              <div className="stat-icon">🏖️</div>
              <strong>5 min</strong>
              <span>Walk to the Beach</span>
            </div>
            <div className="location-stat">
              <div className="stat-icon">🔑</div>
              <strong>24/7</strong>
              <span>Member Access</span>
            </div>
          </div>
        </div>

        <div className="location-map-frame">
          <iframe
            title="Addax Tower Location"
            src="https://www.google.com/maps?q=Addax+Tower+Al+Reem+Island+Abu+Dhabi&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default LocationHighlight
