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
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Contact Aegis Coworking | ADGM Addax Tower" />
<meta name="twitter:description" content="Book a tour or request a quote from Aegis Coworking, Addax Tower, ADGM." />
<meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
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
        name: "Contact",
        item: "https://www.aegiscoworking.ae/contact"
      }
    ]
  })}
</script>
</Helmet>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  )
}
export default Contact
