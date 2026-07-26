import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import DeskPricing from '../components/DeskPricing'
import NearbyFacilities from '../components/NearbyFacilities'
import Amenities from '../components/Amenities'
import Footer from '../components/Footer'

function OfficeSpaces() {
  return (
    <div className="App">
      <Navbar />
      
      <PageHero
        title="OFFICE SPACES IN ADGM"
        subtitle="PRIVATE DESK | 24/7 ACCESS | FLEXIBLE MEMBERSHIP"
      />
      <DeskPricing />
      <NearbyFacilities />
      <Amenities title="ADGM AMENITIES" />
      <Footer />
    </div>
  )
}

export default OfficeSpaces