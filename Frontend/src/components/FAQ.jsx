import { useState } from 'react'

const faqs = [
  {
    question: "Is the desk truly mine, or shared with other members?",
    answer: "Your desk is fully dedicated to you — no one else uses it. You keep the same spot every time you come in, and your belongings can stay set up between visits."
  },
  {
    question: "Can I upgrade my office space in Abu Dhabi to a private office?",
    answer: "Yes. Many of our members start with a dedicated desk and move into a private office as their team grows. There's no penalty for upgrading — just let us know and we'll handle the transition."
  },
  {
    question: "What's included in the one-time Due Diligence Fee?",
    answer: "The AED 1,100 Due Diligence Fee covers the compliance and background checks required by ADGM before your licence and registered address can be activated. It's a one-time cost, separate from your monthly rent."
  },
  
{
  question: "Does this dedicated desk satisfy the ADGM flexi desk requirement?",
  answer: "Yes. Our dedicated desk qualifies as an ADGM flexi desk, meeting the physical presence and registered address requirement for your ADGM business license application."
},
  {
    question: "Can I use this office space in ADGM to register my business?",
    answer: "Yes. A dedicated desk includes a registered address that qualifies for your ADGM commercial licence application, so you can operate fully compliant from day one."
  },
  {
    question: "What are the lease term options?",
    answer: "Leases run from 12 to 36 months, with pricing that improves the longer you commit — annual, bi-annual, and quarterly rates are all available depending on what suits your business."
  },
  {
    question: "Does your office space in ADGM include 24/7 access?",
    answer: "Yes — dedicated desk members get secure building access around the clock, every day of the week, not just during standard business hours."
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
