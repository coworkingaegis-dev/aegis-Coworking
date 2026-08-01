// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import ContactForm from '../components/ContactForm'
// import Footer from '../components/Footer'

// function Contact() {
//   return (
//     <div className="App">
//       <Helmet>
//         <title>Contact Us | Aegis Coworking, ADGM Addax Tower</title>
//         <meta
//           name="description"
//           content="Get in touch with Aegis Coworking in Addax Tower, ADGM, Abu Dhabi. Book a tour or request a quote for hot desks, private offices, and virtual offices."
//         />
//         <link rel="canonical" href="https://aegis-coworking.vercel.app/contact" />
//         <meta property="og:title" content="Contact Aegis Coworking | ADGM Addax Tower" />
//         <meta
//           property="og:description"
//           content="Book a tour or request a quote from Aegis Coworking, Addax Tower, ADGM."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://aegis-coworking.vercel.app/contact" />
//         <meta property="og:image" content="https://aegis-coworking.vercel.app/og-image.jpg" />
//       </Helmet>
//       <Navbar />
//       <ContactForm />
//       <Footer />
//     </div>
//   )
// }

// export default Contact












import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
function Contact() {
  return (
    <div className="App">
      <Helmet>
        <title>Contact Aegis Coworking | ADGM Addax Tower, Abu Dhabi</title>
        <meta
          name="description"
          content="Visit or contact Aegis Coworking at ADGM Addax Tower, Abu Dhabi. Schedule a tour, ask about pricing, or book your workspace. We're here to help today"
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/contact" />
        <meta property="og:title" content="Contact Aegis Coworking | ADGM Addax Tower" />
        <meta
          property="og:description"
          content="Book a tour or request a quote from Aegis Coworking, Addax Tower, ADGM."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/contact" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
      </Helmet>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  )
}
export default Contact
