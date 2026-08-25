// const testimonials = [
//   { quote: "Best decision I made for my startup — the community here actually helps you grow, not just gives you a desk.", name: "Sarah K.", role: "Founder, Fintech Startup", initials: "SK" },
//   { quote: "Having a registered ADGM address without the overhead of a full office changed how fast we could move.", name: "Omar R.", role: "Managing Partner", initials: "OR" },
//   { quote: "The meeting rooms alone are worth it — clients are always impressed the moment they walk in.", name: "Aisha M.", role: "Consultant", initials: "AM" },
// ]

// function TestimonialCard({ t }) {
//   return (
//     <div className="testimonial-card">
//       <div className="testimonial-quote-mark">"</div>
//       <div className="testimonial-stars">★★★★★</div>
//       <p className="testimonial-quote">{t.quote}</p>
//       <div className="testimonial-divider"></div>
//       <div className="testimonial-author">
//         <div className="testimonial-avatar">{t.initials}</div>
//         <div>
//           <strong>{t.name}</strong>
//           <span>{t.role}</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Testimonials() {
//   // Duplicate the list so the loop feels seamless
//   const loopedTestimonials = [...testimonials, ...testimonials]

//   return (
//     <section className="testimonials">
//       <span className="contact-eyebrow">WHAT MEMBERS SAY</span>
//       <h2>Trusted by Growing Teams</h2>

//       <div className="testimonials-marquee">
//         <div className="testimonials-track">
//           {loopedTestimonials.map((t, i) => (
//             <TestimonialCard t={t} key={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }














const testimonials = [
{
  quote: "Really satisfied with Aegis Coworking. If you're looking for a cheap coworking space in Abu Dhabi Global Market, the desk options at Addax Tower offer great value with a fast and simple lease process.",
  name: "Hassan A.",
  role: "Startup Founder",
  initials: "HA"
},
{
  quote: "Aegis Coworking is a great Abu Dhabi coworking space for startups. The flexible workspace, professional environment, and affordable options make it easy to get started.",
  name: "Daniel R.",
  role: "Tech Entrepreneur",
  initials: "DR"
},
{
  quote: "For anyone searching for a business centre in Abu Dhabi, Aegis Coworking in ADGM is a very convenient option. The location and professional setup have been excellent for our business.",
  name: "Fatima S.",
  role: "Business Owner",
  initials: "FS"
},
{
  quote: "I was looking for a business address in ADGM with a professional workspace. Aegis Coworking made the process straightforward, and the team was very helpful from the start.",
  name: "Ahmed K.",
  role: "Managing Director",
  initials: "AK"
},
{
  quote: "Aegis Coworking provides a professional ADGM business centre with flexible workspace options. It has everything we need without the cost of a traditional office.",
  name: "Maria L.",
  role: "Operations Manager",
  initials: "ML"
},
{
  quote: "The private office at Aegis is a great low cost office in ADGM compared with traditional office setups. It gives our team a professional environment and room to grow.",
  name: "Bilal H.",
  role: "Company Director",
  initials: "BH"
},
{
  quote: "The meeting rooms at this ADGM coworking space are modern and professional. The location makes client meetings convenient, and the overall experience has been excellent.",
  name: "Nadia T.",
  role: "Management Consultant",
  initials: "NT"
},
{
  quote: "We wanted an affordable coworking space in ADGM without taking on the overhead of a traditional office. Aegis Coworking gave us the flexibility and professional environment we needed.",
  name: "James P.",
  role: "Startup Advisor",
  initials: "JP"
},
{
  quote: "The dedicated desk is a great option if you're looking for a cheap dedicated desk in ADGM. The workspace is comfortable, professional, and available whenever I need it.",
  name: "Yusuf M.",
  role: "Freelance Consultant",
  initials: "YM"
},
{
  quote: "Aegis Coworking is a budget coworking space in ADGM that still feels professional. The facilities are modern, the location is convenient, and the flexible plans are useful for growing businesses.",
  name: "Sara N.",
  role: "Marketing Director",
  initials: "SN"
},
{
  quote: "Aegis made establishing our business presence much easier. Having access to a professional business centre in ADGM and a business address made a real difference for our company.",
  name: "Imran F.",
  role: "Business Development Manager",
  initials: "IF"
},
{
  quote: "If you're comparing an ADGM cheap coworking space with traditional office options, Aegis Coworking offers a practical and affordable alternative. The environment has been great for our team.",
  name: "Lina W.",
  role: "Founder & CEO",
  initials: "LW"
},
{
  quote: "The coworking day pass at Aegis is a convenient way to use a professional workspace in Abu Dhabi without a long-term commitment. Great option for freelancers and remote workers.",
  name: "Omar S.",
  role: "Independent Consultant",
  initials: "OS"
},
{
  quote: "I needed a cheap coworking space in Abu Dhabi with a professional location. Aegis Coworking in Addax Tower gave me exactly that, with a comfortable workspace and useful facilities.",
  name: "Rania M.",
  role: "Digital Consultant",
  initials: "RM"
},
{
  quote: "Aegis is a strong option for anyone searching for a coworking space in ADGM from AED 1000. The professional environment and flexible setup make it good value for startups.",
  name: "Khalid R.",
  role: "Startup Director",
  initials: "KR"
},
{
  quote: "I was comparing affordable coworking space in ADGM and found Aegis to be a very practical choice. The workspace feels professional while keeping costs under control.",
  name: "Maya P.",
  role: "Creative Entrepreneur",
  initials: "MP"
},
{
  quote: "Aegis Coworking offers a professional ADGM coworking space without the high cost of a conventional office. The location at Addax Tower is especially convenient.",
  name: "Usman H.",
  role: "Business Consultant",
  initials: "UH"
},
{
  quote: "For businesses looking for a low cost office in ADGM, Aegis provides flexible workspace options in a professional setting. The team made the setup process very easy.",
  name: "Claire D.",
  role: "Company Manager",
  initials: "CD"
},
{
  quote: "The coworking space at Aegis is ideal for businesses that want an affordable and professional setup in Abu Dhabi. The facilities and location have worked very well for us.",
  name: "Farhan A.",
  role: "Business Owner",
  initials: "FA"
},
{
  quote: "I was specifically looking for the cheapest coworking space in ADGM and wanted a professional environment rather than just a desk. Aegis offered a good balance of price, location, and facilities.",
  name: "Zain K.",
  role: "Startup Co-Founder",
  initials: "ZK"
},
{
  quote: "Aegis Coworking has been a practical choice for our team. The flexible workspace and professional business address in ADGM helped us establish a stronger business presence.",
  name: "Sophie R.",
  role: "Operations Director",
  initials: "SR"
},
{
  quote: "If you're looking for an affordable coworking space in ADGM, Aegis is worth considering. The workspace is professional, the location is excellent, and the setup is straightforward.",
  name: "Ali N.",
  role: "Financial Consultant",
  initials: "AN"
},
{
  quote: "The ADGM coworking space at Aegis is a great fit for small businesses. We wanted to keep our office costs low while maintaining a professional environment for clients and our team.",
  name: "Hiba F.",
  role: "Business Strategist",
  initials: "HF"
},
{
  quote: "Aegis Coworking provides a good balance between affordability and professionalism. The dedicated desk options are especially useful for anyone looking for a cost-effective workspace in ADGM.",
  name: "Ryan T.",
  role: "Product Consultant",
  initials: "RT"
},
{
  quote: "The coworking day pass was exactly what I needed for a productive day in Abu Dhabi. The workspace is professional, comfortable, and much better than working from a café.",
  name: "Nour A.",
  role: "Remote Professional",
  initials: "NA"
},
{
  quote: "Aegis is a convenient business centre in Abu Dhabi for startups and growing companies. The flexible workspace options helped us avoid the commitment of a traditional office.",
  name: "Marcus J.",
  role: "Venture Partner",
  initials: "MJ"
},
{
  quote: "The cheap dedicated desk at Aegis gave me a professional place to work in ADGM without spending heavily on a private office. The facilities and location are excellent.",
  name: "Tariq M.",
  role: "Legal Consultant",
  initials: "TM"
},
{
  quote: "For anyone searching for an ADGM business centre, Aegis Coworking offers a professional workspace with flexible options. The team has been responsive and easy to work with.",
  name: "Elena V.",
  role: "Strategy Consultant",
  initials: "EV"
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
  const loopedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="testimonials">
      <span className="contact-eyebrow">WHAT MEMBERS SAY</span>
      <h2>Trusted by Startups and Businesses Across Abu Dhabi</h2>

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
// export default Testimonials
