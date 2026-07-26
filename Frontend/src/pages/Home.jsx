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
        <title>Coworking Space in ADGM Addax Tower | Aegis Coworking</title>
        <meta
          name="description"
          content="Aegis Coworking offers hot desks, dedicated desks, and private offices in Addax Tower, Al Reem Island, ADGM, Abu Dhabi. Hot desks from AED 1000/month, dedicated desks from AED 1150/month, private offices from AED 4500/month."
        />
        <link rel="canonical" href="https://[yourdomain.com]/" />

        <meta property="og:title" content="Coworking Space in ADGM Addax Tower | Aegis Coworking" />
        <meta
          property="og:description"
          content="Hot desks, dedicated desks, and private offices in Addax Tower, Al Reem Island, ADGM. Hot desks from AED 1000/month."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://[yourdomain.com]/" />
        <meta property="og:image" content="https://[yourdomain.com]/og-image.jpg" />
      </Helmet>

      <Navbar />
      <Hero />
      <Reveal><Services /></Reveal>
      <Reveal delay={0.1}><WhyChooseUs /></Reveal>
      <Reveal delay={0.1}>
        <ImageBanner image={homeBannerImage} alt="Coworking space with skyline view" />
      </Reveal>
      <Reveal delay={0.1}><Testimonials /></Reveal>
      <Reveal delay={0.1}><Amenities /></Reveal>
      <Reveal delay={0.1}><LocationHighlight /></Reveal>
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default Home