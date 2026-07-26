import { useState } from 'react'
import { supabase } from '../supabaseClient'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    companyName: '',
    interestedIn: '',
    message: '',
    agreed: false,
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required'
    if (!formData.interestedIn) newErrors.interestedIn = 'Please select an option'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!formData.agreed) newErrors.agreed = 'You must agree to the Privacy Policy'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    setStatus('loading')

    const { error } = await supabase.from('inquiries').insert([
      {
        name: formData.name,
        email: formData.email,
        contact_number: formData.contactNumber,
        company_name: formData.companyName || null,
        interested_in: formData.interestedIn,
        message: formData.message,
        agreed_to_terms: formData.agreed,
      },
    ])

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        companyName: '',
        interestedIn: '',
        message: '',
        agreed: false,
      })
    }
  }

  return (
    <section className="contact-section">
      <span className="contact-eyebrow">GET IN TOUCH</span>
      <h1>CONTACT US</h1>
      <p className="contact-subtitle">
        Tell us what you're looking for and our team will get back to you within one business day.
      </p>

      <form className="contact-form-v2" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="field-wrap">
            <label>Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'has-error' : ''}
            />
            {errors.name && <p className="field-error">{errors.name}</p>}
          </div>
          <div className="field-wrap">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'has-error' : ''}
            />
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="field-wrap">
            <label>Contact Number*</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="+971 5X XXX XXXX"
              value={formData.contactNumber}
              onChange={handleChange}
              className={errors.contactNumber ? 'has-error' : ''}
            />
            {errors.contactNumber && <p className="field-error">{errors.contactNumber}</p>}
          </div>
          <div className="field-wrap">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Optional"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field-wrap">
          <label>I am interested in*</label>
          <select
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            className={errors.interestedIn ? 'has-error' : ''}
          >
            <option value="" disabled>Select an option</option>
            <option value="dedicated-desk-adgm">Dedicated Desk ADGM</option>
            <option value="virtual-office">Virtual Office</option>
            <option value="private-office">Private Office</option>
            <option value="meeting-room">Meeting Room</option>
          </select>
          {errors.interestedIn && <p className="field-error">{errors.interestedIn}</p>}
        </div>

        <div className="field-wrap">
          <label>Your Message*</label>
          <textarea
            name="message"
            placeholder="Tell us a bit about what you're looking for..."
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'has-error' : ''}
          ></textarea>
          {errors.message && <p className="field-error">{errors.message}</p>}
        </div>

        <div className="field-wrap">
  <label
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '10px',
      textAlign: 'left',
      fontSize: '14px',
      color: 'var(--color-text-muted)',
      lineHeight: '1.6',
      cursor: 'pointer',
      width: '100%',
    }}
  >
    <input
      type="checkbox"
      name="agreed"
      checked={formData.agreed}
      onChange={handleChange}
      style={{
        width: '18px',
        height: '18px',
        flexShrink: 0,
        marginTop: '2px',
        accentColor: 'var(--color-primary)',
        cursor: 'pointer',
      }}
    />
    <span style={{ flex: 1 }}>
      I agree to the <a href="#">Privacy Policy</a> and consent to be contacted regarding my inquiry.*
    </span>
  </label>
  {errors.agreed && <p className="field-error">{errors.agreed}</p>}
</div>

        <button type="submit" className="btn-send-v2" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="form-status success">Thank you! Your message has been sent.</p>
        )}
        {status === 'error' && (
          <p className="form-status error">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  )
}

export default ContactForm
