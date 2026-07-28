// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import PageHero from '../components/PageHero'
// import ImageBanner from '../components/ImageBanner'
// import ImpressClients from '../components/ImpressClients'
// import RoomFeatures from '../components/RoomFeatures'
// import RoomCapacities from '../components/RoomCapacities'
// import Footer from '../components/Footer'
// import meetingRoomBanner from '../assets/meeting-room-banner.jpg'

// function MeetingRoom() {
//   return (
//     <div className="App">
//       <Helmet>
//         <title>Meeting Room Rental ADGM | Addax Tower | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="Book fully equipped meeting rooms at Aegis Coworking, ADGM, Addax Tower. Flexible hourly booking, professional setting for client meetings and team sessions."
//         />
//         <link rel="canonical" href="https://[yourdomain.com]/meeting-room" />

//         <meta property="og:title" content="Meeting Room Rental ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Fully equipped, flexible meeting rooms at Addax Tower, ADGM."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://[yourdomain.com]/meeting-room" />
//         <meta property="og:image" content="https://[yourdomain.com]/og-image.jpg" />
//       </Helmet>

//       <Navbar />
//       <PageHero
//         title="MEETING ROOMS IN ADGM"
//         subtitle="FULLY EQUIPPED · FLEXIBLE BOOKING · PRIME LOCATION"
//       />
//       <ImageBanner image={meetingRoomBanner} alt="Meeting room in session" />
//       <ImpressClients />
//       <RoomFeatures />
//       <RoomCapacities />
//       <Footer />
//     </div>
//   )
// }

// export default MeetingRoom








import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import ImageBanner from '../components/ImageBanner'
import ImpressClients from '../components/ImpressClients'
import RoomFeatures from '../components/RoomFeatures'
import RoomCapacities from '../components/RoomCapacities'
import Footer from '../components/Footer'
import meetingRoomBanner from '../assets/meeting-room-banner.jpg'

const faqs = [
  {
    q: "How much does it cost to rent a meeting room in ADGM?",
    a: "Meeting room hourly rates at Aegis Coworking vary by room size and time of day. Every membership plan includes meeting room credits at no extra cost, and non-members can book hourly at custom rates — request a quote for current pricing.",
  },
  {
    q: "Can non-members book a meeting room at Aegis Coworking?",
    a: "Yes, meeting rooms can be booked by non-members on an hourly basis, subject to availability at Addax Tower.",
  },
  {
    q: "What's included with the meeting rooms?",
    a: "Our meeting rooms are fully equipped with high-speed WiFi, screens for presentations, and a professional setting suited for client meetings and team sessions.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "We recommend booking in advance to guarantee availability, though same-day bookings can often be accommodated depending on the room and time slot.",
  },
]

function MeetingRoom() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="App">
      <Helmet>
        <title>Meeting Room Rental ADGM | Addax Tower | Aegis Coworking</title>
        <meta
          name="description"
          content="Book fully equipped meeting rooms at Aegis Coworking, ADGM, Addax Tower. Flexible hourly booking, professional setting for client meetings and team sessions."
        />
        <link rel="canonical" href="https://aegis-coworking.vercel.app/meeting-room" />
        <meta property="og:title" content="Meeting Room Rental ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="Fully equipped, flexible meeting rooms at Addax Tower, ADGM."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aegis-coworking.vercel.app/meeting-room" />
        <meta property="og:image" content="https://aegis-coworking.vercel.app/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          })}
        </script>
      </Helmet>
      <Navbar />
      <PageHero
        title="MEETING ROOMS IN ADGM"
        subtitle="FULLY EQUIPPED · FLEXIBLE BOOKING · PRIME LOCATION"
      />
      <ImageBanner image={meetingRoomBanner} alt="Meeting room in session" />
      <ImpressClients />
      <RoomFeatures />
      <RoomCapacities />
      <section className="vo-faq">
        <span className="contact-eyebrow">MEETING ROOMS ADGM</span>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="vo-faq-list">
          {faqs.map((f, i) => (
            <div
              className={`vo-faq-item ${openIndex === i ? 'open' : ''}`}
              key={i}
              onClick={() => toggleFAQ(i)}
            >
              <div className="vo-faq-question">
                {f.q}
                <span className="vo-faq-toggle">{openIndex === i ? '−' : '+'}</span>
              </div>
              <div className="vo-faq-answer-wrap">
                <p className="vo-faq-answer">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MeetingRoom
