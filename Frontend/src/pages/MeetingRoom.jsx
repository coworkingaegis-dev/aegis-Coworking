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








// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import PageHero from '../components/PageHero'
// import ImageBanner from '../components/ImageBanner'
// import ImpressClients from '../components/ImpressClients'
// import RoomFeatures from '../components/RoomFeatures'
// import RoomCapacities from '../components/RoomCapacities'
// import Footer from '../components/Footer'
// import meetingRoomBanner from '../assets/meeting-room-banner.jpg'

// const faqs = [
//   {
//     q: "How much does it cost to rent a meeting room in ADGM?",
//     a: "Meeting room hourly rates at Aegis Coworking vary by room size and time of day. Every membership plan includes meeting room credits at no extra cost, and non-members can book hourly at custom rates — request a quote for current pricing.",
//   },
//   {
//     q: "Can non-members book a meeting room at Aegis Coworking?",
//     a: "Yes, meeting rooms can be booked by non-members on an hourly basis, subject to availability at Addax Tower.",
//   },
//   {
//     q: "What's included with the meeting rooms?",
//     a: "Our meeting rooms are fully equipped with high-speed WiFi, screens for presentations, and a professional setting suited for client meetings and team sessions.",
//   },
//   {
//     q: "How far in advance do I need to book?",
//     a: "We recommend booking in advance to guarantee availability, though same-day bookings can often be accommodated depending on the room and time slot.",
//   },
// ]

// function MeetingRoom() {
//   const [openIndex, setOpenIndex] = useState(null)
//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i)
//   }

//   return (
//     <div className="App">
//       <Helmet>
//         <title>Meeting Room Rental ADGM | Addax Tower | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="Book fully equipped meeting rooms at Aegis Coworking, ADGM, Addax Tower. Flexible hourly booking, professional setting for client meetings and team sessions."
//         />
//         <link rel="canonical" href="https://aegis-coworking.vercel.app/meeting-room" />
//         <meta property="og:title" content="Meeting Room Rental ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Fully equipped, flexible meeting rooms at Addax Tower, ADGM."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://aegis-coworking.vercel.app/meeting-room" />
//         <meta property="og:image" content="https://aegis-coworking.vercel.app/og-image.jpg" />
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             "mainEntity": faqs.map((f) => ({
//               "@type": "Question",
//               "name": f.q,
//               "acceptedAnswer": { "@type": "Answer", "text": f.a },
//             })),
//           })}
//         </script>
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
//       <section className="vo-faq">
//         <span className="contact-eyebrow">MEETING ROOMS ADGM</span>
//         <h2>FREQUENTLY ASKED QUESTIONS</h2>
//         <div className="vo-faq-list">
//           {faqs.map((f, i) => (
//             <div
//               className={`vo-faq-item ${openIndex === i ? 'open' : ''}`}
//               key={i}
//               onClick={() => toggleFAQ(i)}
//             >
//               <div className="vo-faq-question">
//                 {f.q}
//                 <span className="vo-faq-toggle">{openIndex === i ? '−' : '+'}</span>
//               </div>
//               <div className="vo-faq-answer-wrap">
//                 <p className="vo-faq-answer">{f.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default MeetingRoom
















// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import PageHero from '../components/PageHero'
// import ImageBanner from '../components/ImageBanner'
// import ImpressClients from '../components/ImpressClients'
// import RoomFeatures from '../components/RoomFeatures'
// import RoomCapacities from '../components/RoomCapacities'
// import Footer from '../components/Footer'
// import meetingRoomBanner from '../assets/meeting-room-banner.jpg'
// const faqs = [
//   {
//     q: "How much does it cost to rent a meeting room in ADGM?",
//     a: "Meeting room hourly rates at Aegis Coworking vary by room size and time of day. Every membership plan includes meeting room credits at no extra cost, and non-members can book hourly at custom rates — request a quote for current pricing.",
//   },
//   {
//     q: "Can non-members book a meeting room at Aegis Coworking?",
//     a: "Yes, meeting rooms can be booked by non-members on an hourly basis, subject to availability at Addax Tower.",
//   },
//   {
//     q: "What's included with the meeting rooms?",
//     a: "Our meeting rooms are fully equipped with high-speed WiFi, screens for presentations, and a professional setting suited for client meetings and team sessions.",
//   },
//   {
//     q: "How far in advance do I need to book?",
//     a: "We recommend booking in advance to guarantee availability, though same-day bookings can often be accommodated depending on the room and time slot.",
//   },
// ]
// function MeetingRoom() {
//   const [openIndex, setOpenIndex] = useState(null)
//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i)
//   }
//   return (
//     <div className="App">
//       <Helmet>
//         <title>Meeting Room Rental ADGM | Addax Tower | Aegis Coworking</title>
//         <meta
//           name="description"
//           content="Book fully equipped meeting rooms at Aegis Coworking, ADGM, Addax Tower. Flexible hourly booking, professional setting for client meetings and team sessions."
//         />
//         <link rel="canonical" href="https://www.aegiscoworking.ae/meeting-room" />
//         <meta property="og:title" content="Meeting Room Rental ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Fully equipped, flexible meeting rooms at Addax Tower, ADGM."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.aegiscoworking.ae/meeting-room" />
//         <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             "mainEntity": faqs.map((f) => ({
//               "@type": "Question",
//               "name": f.q,
//               "acceptedAnswer": { "@type": "Answer", "text": f.a },
//             })),
//           })}
//         </script>
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
//       <section className="vo-faq">
//         <span className="contact-eyebrow">MEETING ROOMS ADGM</span>
//         <h2>FREQUENTLY ASKED QUESTIONS</h2>
//         <div className="vo-faq-list">
//           {faqs.map((f, i) => (
//             <div
//               className={`vo-faq-item ${openIndex === i ? 'open' : ''}`}
//               key={i}
//               onClick={() => toggleFAQ(i)}
//             >
//               <div className="vo-faq-question">
//                 {f.q}
//                 <span className="vo-faq-toggle">{openIndex === i ? '−' : '+'}</span>
//               </div>
//               <div className="vo-faq-answer-wrap">
//                 <p className="vo-faq-answer">{f.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   )
// }
// export default MeetingRoom












// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import PageHero from '../components/PageHero'
// import ImageBanner from '../components/ImageBanner'
// import ImpressClients from '../components/ImpressClients'
// import RoomFeatures from '../components/RoomFeatures'
// import RoomCapacities from '../components/RoomCapacities'
// import Footer from '../components/Footer'
// import meetingRoomBanner from '../assets/meeting-room-banner.jpg'
// const faqs = [
//   {
//     q: "How much does a meeting room in Abu Dhabi cost?",
//     a: "Meeting room hourly rates at Aegis Coworking vary by room size and time of day. Every membership plan includes meeting room credits at no extra cost, and non-members can book hourly at custom rates — request a quote for current pricing.",
//   },
//   {
//     q: "Can anyone book a meeting room in Abu Dhabi at Aegis Coworking?",
//     a: "Yes, meeting rooms can be booked by non-members on an hourly basis, subject to availability at Addax Tower.",
//   },
//   {
//     q: "What's included with your meeting rooms in ADGM?",
//     a: "Our meeting rooms are fully equipped with high-speed WiFi, screens for presentations, and a professional setting suited for client meetings and team sessions.",
//   },
//   {
//     q: "How far in advance do I need to book?",
//     a: "We recommend booking in advance to guarantee availability, though same-day bookings can often be accommodated depending on the room and time slot.",
//   },
// ]
// function MeetingRoom() {
//   const [openIndex, setOpenIndex] = useState(null)
//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i)
//   }
//   return (
//     <div className="App">
//       <Helmet>
//         <title>Meeting Rooms for Rent in ADGM Addax Tower, Abu Dhabi</title>
//         <meta
//           name="description"
//           content="Book fully equipped meeting rooms at ADGM Addax Tower, Abu Dhabi. Hourly and daily rates, AV equipment included. Reserve your meeting room online today."
//         />
//         <link rel="canonical" href="https://www.aegiscoworking.ae/meeting-room" />
//         <meta property="og:title" content="Meeting Room Rental ADGM | Aegis Coworking" />
//         <meta
//           property="og:description"
//           content="Fully equipped, flexible meeting rooms at Addax Tower, ADGM."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.aegiscoworking.ae/meeting-room" />
//         <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             "mainEntity": faqs.map((f) => ({
//               "@type": "Question",
//               "name": f.q,
//               "acceptedAnswer": { "@type": "Answer", "text": f.a },
//             })),
//           })}
//         </script>

//         <script type="application/ld+json">
//   {JSON.stringify({
//     "@context": "https://schema.org",
//     "@type": "Product",
//     "name": "Meeting Room in Abu Dhabi",
//     "description": "Fully equipped meeting room in ADGM with hourly bookings.",
//     "brand": {
//       "@type": "Brand",
//       "name": "Aegis Coworking"
//     },
//     "offers": {
//       "@type": "Offer",
//       "availability": "https://schema.org/InStock",
//       "url": "https://www.aegiscoworking.ae/meeting-room"
//     }
//   })}
// </script>

//       <script type="application/ld+json">
//   {JSON.stringify({
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: "https://www.aegiscoworking.ae/"
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "Meeting Room",
//         item: "https://www.aegiscoworking.ae/meeting-room"
//       }
//     ]
//   })}
// </script>
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
//       <section className="vo-faq">
//         <span className="contact-eyebrow">MEETING ROOMS ADGM</span>
//         <h2>FREQUENTLY ASKED QUESTIONS</h2>
//         <div className="vo-faq-list">
//           {faqs.map((f, i) => (
//             <div
//               className={`vo-faq-item ${openIndex === i ? 'open' : ''}`}
//               key={i}
//               onClick={() => toggleFAQ(i)}
//             >
//               <div className="vo-faq-question">
//                 {f.q}
//                 <span className="vo-faq-toggle">{openIndex === i ? '−' : '+'}</span>
//               </div>
//               <div className="vo-faq-answer-wrap">
//                 <p className="vo-faq-answer">{f.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
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
import { Link } from 'react-router-dom'
import meetingRoomBanner from '../assets/meeting-room-banner.jpg'
const faqs = [
  {
    q: "Can anyone book a meeting room in ADGM?",
    a: "Yes. Members and non-members can book a meeting room in ADGM on an hourly basis, subject to availability at Aegis Coworking in Addax Tower."
  },
  {
    q: "What's included with your meeting rooms in ADGM?",
    a: "Our meeting rooms in ADGM include high-speed WiFi, presentation screens, comfortable seating, and a professional setting for client meetings, team sessions, and presentations."
  },
  {
    q: "How much does a meeting room in Abu Dhabi cost?",
    a: "Meeting room rates at Aegis Coworking vary by room size and booking time. Members receive meeting room credits, while non-members can book meeting rooms in Abu Dhabi by the hour. See our pricing for current rates.",
    aDisplay: (
      <>
        Meeting room rates at Aegis Coworking vary by room size and booking
        time. Members receive meeting room credits, while non-members can
        book meeting rooms in Abu Dhabi by the hour. See{' '}
        <Link to="/pricing" className="inline-link">
          full pricing
        </Link>{' '}
        for current rates.
      </>
    ),
  },
  {
    q: "Where are the meeting rooms located?",
    a: "Our meeting rooms are located in Addax Tower, Al Reem Island, within Abu Dhabi Global Market (ADGM), providing a convenient and professional business setting."
  },
  {
    q: "Can I book a meeting room in Abu Dhabi Global Market for a client meeting?",
    a: "Yes. Our meeting rooms in Abu Dhabi Global Market are suitable for client meetings, presentations, interviews, team discussions, and business meetings."
  },
  {
    q: "How far in advance do I need to book a meeting room?",
    a: "We recommend booking in advance to secure your preferred meeting room and time. Same-day bookings may also be available depending on the room and time slot."
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
        <title>Meeting Rooms for Rent in ADGM Addax Tower, Abu Dhabi</title>
        <meta
          name="description"
          content="Book fully equipped meeting rooms at ADGM Addax Tower, Abu Dhabi. Hourly and daily rates, AV equipment included. Reserve your meeting room online today."
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/meeting-room" />
        <meta property="og:title" content="Meeting Room Rental ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="Fully equipped, flexible meeting rooms at Addax Tower, ADGM."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/meeting-room" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Meeting Rooms for Rent in ADGM Addax Tower, Abu Dhabi" />
<meta name="twitter:description" content="Book fully equipped meeting rooms at ADGM Addax Tower, Abu Dhabi. Hourly and daily rates, AV equipment included." />
<meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

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

        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Meeting Room Rental",
    "name": "Meeting Room in Abu Dhabi",
    "description": "Fully equipped meeting room in ADGM with hourly bookings.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aegis Coworking"
    },
    "areaServed": "Abu Dhabi",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://www.aegiscoworking.ae/meeting-room"
    }
  })}
</script>

      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.aegiscoworking.ae/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Meeting Room",
        item: "https://www.aegiscoworking.ae/meeting-room"
      }
    ]
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
  <p className="vo-faq-answer">{f.aDisplay ?? f.a}</p>
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
