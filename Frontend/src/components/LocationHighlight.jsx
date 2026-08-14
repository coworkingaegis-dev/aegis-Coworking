function LocationHighlight() {
  return (
    <section className="location-highlight">
      <div className="location-content">
        <div className="location-text">
          <span className="contact-eyebrow">BUSINESS ADDRESS</span>
          <h2>Located in Addax Tower, Al Reem Island</h2>
          <p>
            Aegis Coworking is located in Addax Tower, Al Reem Island,
            within ADGM, Abu Dhabi's leading financial free zone. Enjoy
            easy access to banks, restaurants, business hubs, and the
            waterfront from our premium coworking space.
          </p>
          <div className="address-card">
            <div className="address-icon">📍</div>
            <div>
              <strong>Addax Tower</strong>
              <span>Al Reem Island, Abu Dhabi, United Arab Emirates</span>
            </div>
          </div>
          <div className="location-stats">
            <div className="location-stat">
              <div className="stat-icon">✈️</div>
              <strong>15 minutes</strong>
              <span>To Abu Dhabi Airport</span>
            </div>
            <div className="location-stat">
              <div className="stat-icon">🏖️</div>
              <strong>5 minutes</strong>
              <span>To the Waterfront</span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.6108984947837!2d54.400594374417075!3d24.498935159630403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67ada3bb067b%3A0x5674c5ba5c0f061e!2sAegis%20Coworking%20Space%20ADGM!5e0!3m2!1sen!2s!4v1786701334186!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
export default LocationHighlight
