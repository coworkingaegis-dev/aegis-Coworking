import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
  question: "What is Dedicated and Flexi desk in ADGM Abu Dhabi?",
  answer: (
    <>
      A Dedicated desk provides you a registered ADGM Business Address for the licence, but a Flexi Desk is suitable for individuals or companies without an ADGM licensing requirement. A Dedicated desk only costs AED 1,150 while a Flexi Desk costs only AED 1,000. You keep the same spot every time you come in, and your belongings can stay set up between visits. Working alone? Read{' '}
      <Link to="/blog/adgm-flexi-desk-enough-solo-business" className="inline-link">is a dedicated desk enough for a solo business</Link>, or{' '}
      <Link to="/contact" className="inline-link">booking</Link>
    </>
  ),
},
  
  {
    question: "What's included in the one-time Due Diligence Fee?",
    answer: "The AED 1,200 Due Diligence Fee covers the compliance and background checks required by ADGM before your licence and registered address can be activated. It's a one-time cost, separate from your monthly rent."
  },
  {
    question: "Does this dedicated desk satisfy the ADGM flexi desk requirement?",
       answer: (
      <>
        Yes. Our dedicated desk qualifies as an ADGM flexi desk, meeting the physical presence and registered address requirement for your ADGM business licence application. See{' '}
        <Link to="/blog/adgm-tech-startup-licence-dedicated-desk" className="inline-link">which desk your ADGM licence needs</Link>.
      </>
    )
  },
  {
  question: "Can I use this office space in ADGM to register my business?",
  answer: (
    <>
      Yes. A dedicated desk includes a{' '}
      <Link to="https://www.aegiscoworking.ae/">registered address</Link>{' '}
      that qualifies for your ADGM commercial licence application, so you can operate fully compliant from day one.
    </>
  )
},
 {
  question: "What are the lease term options?",
  answer: (
    <>
      Leases run from 12 to 36 months, with{' '}
      <Link to="https://www.aegiscoworking.ae/pricing">pricing</Link>{' '}
      that improves the longer you commit — annual, bi-annual, and quarterly rates are all available depending on what suits your business.
    </>
  )
},
  {
    question: "Does your office space in ADGM include 24/7 access?",
    answer: "Yes — dedicated desk members get secure building access around the clock, every day of the week, not just during standard business hours."
  },

  {
    question: "Is this different from renting a traditional office space in ADGM?",
    answer: "Yes — instead of a separate office for rent that you'd need to fit out yourself, you get fully furnished, flexible workspace in ADGM with utilities, cleaning and reception already included."
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <span className="contact-eyebrow">TRANSPARENCY</span>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <p className="faq-subtitle">Everything you need to know before booking your desk.</p>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div
            className={`faq-item ${openIndex === i ? 'open' : ''}`}
            key={i}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-toggle">{openIndex === i ? '−' : '+'}</span>
            </div>
            <div className="faq-answer-wrap">
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
