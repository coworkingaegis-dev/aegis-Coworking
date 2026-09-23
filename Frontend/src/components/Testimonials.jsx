import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "Really satisfied with Cheapest Coworking desk in ADGM Addax tower with fast lease service.",
    name: "Asmaa Saqib.",
    role: "Software Engineer",
    initials: "AS"
  },
{
    quote: "Very happy with the service from Aegis Coworking. We needed a professional business address in Abu Dhabi without committing to a large traditional office, and Aegis provided a practical solution. The team is responsive and professional. Recommended for companies looking for a flexible office or virtual office solution in ADGM.",
    name: "Uzair Tahir.",
    role: " Tech Startup Founder",
    initials: "UT"
  },
{
    quote: " I was specifically looking for the cheapest coworking space in ADGM and wanted a privacy environment rather than just a desk. Aegis offered a good balance of price, location, and facilities.",
    name: "Naveeda Haseeb.",
    role: " Startup Founder ",
    initials: "NH"
  },
{
    quote: "We were comparing affordable coworking space in ADGM and found Aegis to be a very practical choice. The workspace feels professional while keeping costs affordable.",
    name: "John Paints. ",
    role: " Software analyst ",
    initials: "JP"
  },
{
    quote: "We wanted a professional flexi office in Business Center in ADGM jurisdiction without the high cost and commitment of a traditional office. Aegis Coworking is excellent option and the workspace provides a professional setting for our business. Good option for companies looking for flexible office space in Addax Tower Abu Dhabi.",
    name: "Claire D.",
    role: " Business Analyst",
    initials: "CD"
  },
{
    quote: "For businesses looking for a low cost office in ADGM, Aegis provides flexible office space and a professional seating. The team made the setup process very easy.",
    name: "Haseeb Awan.",
    role: " Entrepreneur",
    initials: "HA"
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
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track || track.dataset.duplicated) return
    Array.from(track.children).forEach((el) => {
      const clone = el.cloneNode(true)
      clone.setAttribute('aria-hidden', 'true')
      clone.setAttribute('inert', '')
      track.appendChild(clone)
    })
    track.dataset.duplicated = 'true'
  }, [])

  return (
    <section className="testimonials">
      <span className="contact-eyebrow">WHAT MEMBERS SAY</span>
      <h2>Trusted by Startups and Businesses Across Abu Dhabi</h2>
      <div className="testimonials-track" ref={trackRef}>
        {testimonials.map((t, i) => (
          <TestimonialCard t={t} key={`original-${i}`} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
