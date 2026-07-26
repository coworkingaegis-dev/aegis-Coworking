import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import ImpressClients from '../components/ImpressClients'
import RoomFeatures from '../components/RoomFeatures'
import RoomCapacities from '../components/RoomCapacities'
import Footer from '../components/Footer'

function MeetingRoom() {
  return (
    <div className="App">
      <Navbar />
      <PageHero
  title="MEETING ROOMS"
  subtitle="FULLY EQUIPPED · FLEXIBLE BOOKING · PRIME LOCATION"
/>
      <ImpressClients />
      <RoomFeatures />
      <RoomCapacities />
      <Footer />
    </div>
  )
}

export default MeetingRoom