const testimonials = [
  {
    quote: "Really satisfied with service at Aegis Coworking. Staff was cooperative and service was fast. Best Coworking Space in ADGM.",
    name: "Hassan A.",
    role: "Startup Founder",
    initials: "HA"
  },


{
    quote: "I was looking for a virtual office in ADGM with a professional business address. Aegis Coworking made the process straightforward, and the team was very helpful from the start.",
    name: "George Ann.",
    role: " Tech Startup Founder",
    initials: "GA"
  },


{
    quote: " The coworking day pass is a convenient way to use a professional workspace. The daily coworking pass in just AED 100 per day is a great option for freelancers and remote workers.",
    name: "Simdhi Chakbotri.",
    role: " Software Engineer ",
    initials: "SC"
  },

{
    quote: "I was specifically looking for the cheapest coworking space in ADGM and wanted a privacy environment rather than just a desk. Aegis offered a good balance of price, location, and facilities.",
    name: "Jackob Smith. ",
    role: " Software analyst ",
    initials: "JS"
  },

{
    quote: "For businesses looking for a low cost office in ADGM, Aegis provides flexible office space and a professional seating. The team made the setup process very easy.",
    name: "Claire D.",
    role: " Business Analyst",
    initials: "CD"
  },

{
    quote: "I was comparing the best coworking space in ADGM and found Aegis to be a very practical choice. The workspace feels professional while keeping costs affordable",
    name: "Madona Paul",
    role: " Entrepreneur",
    initials: "MD"
  },

{
    quote: "Aegis Coworking is a convenient Workspace in Abu Dhabi for startups and growing companies. The flexible workspace options , meeting room and Hot Desk helped us avoid the commitment of a traditional office.",
    name: "Passimore H.",
    role: " Consultant ",
    initials: "PH"
  },
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


  return (
    <section className="testimonials">
      <span className="contact-eyebrow">WHAT MEMBERS SAY</span>
      <h2>Trusted by Startups and Businesses Across Abu Dhabi</h2>

<div className="testimonials-track">
  {testimonials.map((t, i) => (
    <TestimonialCard t={t} key={`original-${i}`} />
  ))}

  {testimonials.map((t, i) => (
    <div aria-hidden="true" key={`duplicate-${i}`}>
      <TestimonialCard t={t} />
    </div>
  ))}
</div>
    
    </section>
  )
}

export default Testimonials
