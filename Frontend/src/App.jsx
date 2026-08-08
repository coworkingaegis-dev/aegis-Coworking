import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import OfficeSpaces from './pages/OfficeSpaces'
import DayPass from './pages/DayPass'
import MeetingRoom from './pages/MeetingRoom'
import VirtualOffice from './pages/VirtualOffice'
import PrivateOffice from './pages/PrivateOffice'
import Admin from './pages/Admin'
import ScrollToTop from './components/ScrollToTop'
import Pricing from './pages/Pricing'
import Blogs from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'
import BlogDetail from './pages/BlogDetail'
import PresentationRoom from './pages/PresentationRoom'
import './App.css'

function App() {
  return (
    <HelmetProvider>

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.aegiscoworking.ae/#business",

            "name": "Aegis Coworking",
            "url": "https://www.aegiscoworking.ae",
            "logo": "https://www.aegiscoworking.ae/logo.png",
            "image": "https://www.aegiscoworking.ae/og-image.jpg",

            "telephone": "+971503926316",
            "email": "contact@aegiscoworking.ae",

            "description":
              "Aegis Coworking provides coworking spaces, private offices, virtual offices, meeting rooms, office spaces and day passes in Addax Tower, ADGM, Abu Dhabi.",

            "priceRange": "$$",

            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Addax Tower, Al Reem Island",
              "addressLocality": "Abu Dhabi",
              "addressRegion": "Abu Dhabi",
              "addressCountry": "AE"
            },

            "sameAs": [
              "https://www.linkedin.com/company/aegis-coworking/"
            ]
          })}
        </script>
      </Helmet>

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/office-spaces" element={<OfficeSpaces />} />
          <Route path="/day-pass" element={<DayPass />} />
          <Route path="/meeting-room" element={<MeetingRoom />} />
          <Route path="/virtual-office" element={<VirtualOffice />} />
          <Route path="/private-office" element={<PrivateOffice />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/presentation-room" element={<PresentationRoom />} />
        </Routes>
      </BrowserRouter>

    </HelmetProvider>
  )
}
export default App












// import { Helmet } from 'react-helmet-async'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import OfficeSpaces from './pages/OfficeSpaces'
// import DayPass from './pages/DayPass'
// import MeetingRoom from './pages/MeetingRoom'
// import VirtualOffice from './pages/VirtualOffice'
// import PrivateOffice from './pages/PrivateOffice'
// import Admin from './pages/Admin'
// import ScrollToTop from './components/ScrollToTop'
// import Pricing from './pages/Pricing'
// import Blogs from './pages/Blogs'
// import CreateBlog from './pages/CreateBlog'
// import BlogDetail from './pages/BlogDetail'
// import PresentationRoom from './pages/PresentationRoom'
// import './App.css'

// function App() {
//   return (
//     <>
//       <Helmet>
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             "@id": "https://www.aegiscoworking.ae/#business",
//             "name": "Aegis Coworking",
//             "url": "https://www.aegiscoworking.ae",
//             "logo": "https://www.aegiscoworking.ae/logo.png",
//             "image": "https://www.aegiscoworking.ae/og-image.jpg",
//             "telephone": "+971503926316",
//             "email": "contact@aegiscoworking.ae",
//             "description":
//               "Aegis Coworking provides coworking spaces, private offices, virtual offices, meeting rooms, office spaces and day passes in Addax Tower, ADGM, Abu Dhabi.",
//             "priceRange": "$$",
//             "address": {
//               "@type": "PostalAddress",
//               "streetAddress": "Addax Tower, Al Reem Island",
//               "addressLocality": "Abu Dhabi",
//               "addressRegion": "Abu Dhabi",
//               "addressCountry": "AE"
//             },
//             "sameAs": ["https://www.linkedin.com/company/aegis-coworking/"]
//           })}
//         </script>
//       </Helmet>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/office-spaces" element={<OfficeSpaces />} />
//         <Route path="/day-pass" element={<DayPass />} />
//         <Route path="/meeting-room" element={<MeetingRoom />} />
//         <Route path="/virtual-office" element={<VirtualOffice />} />
//         <Route path="/private-office" element={<PrivateOffice />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/create-blog" element={<CreateBlog />} />
//         <Route path="/blog/:id" element={<BlogDetail />} />
//         <Route path="/presentation-room" element={<PresentationRoom />} />
//       </Routes>
//     </>
//   )
// }
// export default App
