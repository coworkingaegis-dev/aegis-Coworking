const testimonials = [
  { quote: "Best decision I made for my startup — the community here actually helps you grow, not just gives you a desk.", name: "Sarah K.", role: "Founder, Fintech Startup", initials: "SK" },
  { quote: "Having a registered ADGM address without the overhead of a full office changed how fast we could move.", name: "Omar R.", role: "Managing Partner", initials: "OR" },
  { quote: "The meeting rooms alone are worth it — clients are always impressed the moment they walk in.", name: "Aisha M.", role: "Consultant", initials: "AM" },
]

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote-mark">"</div>
      <div className="testimonial-stars">★★★★★</div>
      <p className="testimonial-quote">{t.quote}</p>
      <div className="testimonial-divider"></div>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{t.initials}</div>
        <div>
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  // Duplicate the list so the loop feels seamless
  const loopedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="testimonials">
      <span className="contact-eyebrow">WHAT MEMBERS SAY</span>
      <h2>Trusted by Growing Teams</h2>

      <div className="testimonials-marquee">
        <div className="testimonials-track">
          {loopedTestimonials.map((t, i) => (
            <TestimonialCard t={t} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials