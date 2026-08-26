import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import ImageBanner from '../components/ImageBanner'
import Testimonials from '../components/Testimonials'
import Amenities from '../components/Amenities'
import LocationHighlight from '../components/LocationHighlight'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import homeBannerImage from '../assets/meeting-room-view.webp'

function Home() {
  return (
    <div className="App">
      <Helmet>
  <title>ADGM Office Space in Abu Dhabi | Aegis Coworking Center</title>
  <meta
    name="description"
    content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes. Book a tour and see pricing today."
  />
  <link rel="canonical" href="https://www.aegiscoworking.ae/" />

  <meta property="og:title" content="ADGM Office Space in Abu Dhabi | Aegis Coworking Center" />
  <meta
    property="og:description"
    content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.aegiscoworking.ae/" />
  <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ADGM Office Space in Abu Dhabi | Aegis Coworking Center" />
  <meta
    name="twitter:description"
    content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes."
  />
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
      }
    ]
  })}
</script>
</Helmet>
      <Navbar />
      <Hero />
      <Reveal><Services /></Reveal>
      <Reveal delay={0.1}><WhyChooseUs /></Reveal>
      <Reveal delay={0.1}>
        <ImageBanner image={homeBannerImage} alt="Coworking space with skyline view" />
      </Reveal>
       <Reveal delay={0.1}><Amenities /></Reveal>
      <Reveal delay={0.1}><Testimonials /></Reveal>
     
      <Reveal delay={0.1}><LocationHighlight /></Reveal>
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default Home













// import { Helmet } from 'react-helmet-async'
// import Navbar from '../components/Navbar'
// import PromoBar from '../components/PromoBar'
// import Hero from '../components/Hero'
// import Services from '../components/Services'
// import WhyChooseUs from '../components/WhyChooseUs'
// import ImageBanner from '../components/ImageBanner'
// import Testimonials from '../components/Testimonials'
// import Amenities from '../components/Amenities'
// import LocationHighlight from '../components/LocationHighlight'
// import FinalCTA from '../components/FinalCTA'
// import Footer from '../components/Footer'
// import Reveal from '../components/Reveal'
// import homeBannerImage from '../assets/meeting-room-view.webp'

// function Home() {
//   return (
//     <div className="App">
//       <Helmet>
//         <title>ADGM Office Space in Abu Dhabi | Aegis Coworking Center</title>
//         <meta
//           name="description"
//           content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes. Book a tour and see pricing today."
//         />
//         <link rel="canonical" href="https://www.aegiscoworking.ae/" />
//         <meta property="og:title" content="ADGM Office Space in Abu Dhabi | Aegis Coworking Center" />
//         <meta
//           property="og:description"
//           content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.aegiscoworking.ae/" />
//         <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="ADGM Office Space in Abu Dhabi | Aegis Coworking Center" />
//         <meta
//           name="twitter:description"
//           content="Premium office space in ADGM, Addax Tower, Abu Dhabi. Private offices, virtual offices, meeting rooms & day passes."
//         />
//         <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
//       </Helmet>
      
//       <Navbar />
//          <PromoBar />
//       <Hero />
//       <Reveal><Services /></Reveal>
//       <Reveal delay={0.1}><WhyChooseUs /></Reveal>
//       <Reveal delay={0.1}>
//         <ImageBanner image={homeBannerImage} alt="Coworking space with skyline view" />
//       </Reveal>
//        <Reveal delay={0.1}><Amenities /></Reveal>
//       <Reveal delay={0.1}><Testimonials /></Reveal>
     
//       <Reveal delay={0.1}><LocationHighlight /></Reveal>
//       <FinalCTA />
//       <Footer />
//     </div>
//   )
// }

// export default Home
