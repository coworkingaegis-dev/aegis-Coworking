import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import OfficeSpaces from './pages/OfficeSpaces'
import DayPass from './pages/DayPass'
import MeetingRoom from './pages/MeetingRoom'
import VirtualOffice from './pages/VirtualOffice'
import PrivateOffice from './pages/PrivateOffice'
import ScrollToTop from './components/ScrollToTop'
import Pricing from './pages/Pricing'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import PresentationRoom from './pages/PresentationRoom'
import About from './pages/About'
import Membership from './pages/Membership'
import NotFound from './pages/NotFound'
import './App.css'

// Lazy-load the heaviest, least-visited routes so their JS (TipTap
// editor, Supabase admin logic) only downloads when someone actually
// navigates there — not on every homepage visit.
const Admin = lazy(() => import('./pages/Admin'))
const CreateBlog = lazy(() => import('./pages/CreateBlog'))

function App() {
  return (
    <>
      <Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.aegiscoworking.ae/#business",
      "name": "Aegis Coworking Space ADGM",
      "url": "https://www.aegiscoworking.ae",
      "logo": "https://www.aegiscoworking.ae/logo.png",
      "image": "https://www.aegiscoworking.ae/og-image.jpg",
      "telephone": "+971503926316",
      "email": "contact@aegiscoworking.ae",
      "description": "Aegis Coworking provides coworking spaces, private offices, virtual offices, meeting rooms, office spaces and day passes in Addax Tower, ADGM, Abu Dhabi.",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Addax Tower, Al Reem Island, Tamouh",
        "addressLocality": "Abu Dhabi",
        "addressRegion": "Abu Dhabi",
        "addressCountry": "AE"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 24.4989303, "longitude": 54.4031693 },
      "hasMap": "https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z",
      "openingHours": "Mo-Su 00:00-23:59",
      "sameAs": ["https://www.linkedin.com/company/aegis-coworking/", "https://www.instagram.com/aegis.coworking/"]
    })}
  </script>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.aegiscoworking.ae/#organization",
      "name": "Aegis Coworking Space ADGM",
      "url": "https://www.aegiscoworking.ae",
      "logo": "https://www.aegiscoworking.ae/logo.png",
      "sameAs": ["https://www.linkedin.com/company/aegis-coworking/", "https://www.instagram.com/aegis.coworking/"]
    })}
  </script>
</Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/office-spaces" element={<OfficeSpaces />} />
        <Route path="/day-pass" element={<DayPass />} />
        <Route path="/meeting-room" element={<MeetingRoom />} />
        <Route path="/virtual-office" element={<VirtualOffice />} />
        <Route path="/private-office" element={<PrivateOffice />} />

        <Route
          path="/admin"
          element={
            <Suspense fallback={<div style={{ padding: '160px 20px', textAlign: 'center' }}>Loading…</div>}>
              <Admin />
            </Suspense>
          }
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/create-blog"
          element={
            <Suspense fallback={<div style={{ padding: '160px 20px', textAlign: 'center' }}>Loading…</div>}>
              <CreateBlog />
            </Suspense>
          }
        />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/presentation-room" element={<PresentationRoom />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
