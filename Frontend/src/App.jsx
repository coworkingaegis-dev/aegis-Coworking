import { HelmetProvider } from 'react-helmet-async'
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
