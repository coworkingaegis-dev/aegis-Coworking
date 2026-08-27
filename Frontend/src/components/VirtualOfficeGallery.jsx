import officeImage from '../assets/aegis-coworking-virtual-office-ADGM.jpg'

function VirtualOfficeGallery() {
  return (
    <section className="vo-gallery-single">
      <img
        src={officeImage}
        alt="Virtual office at Aegis Coworking in ADGM Abu Dhabi"
        className="vo-gallery-single-img"
      />
    </section>
  )
}

export default VirtualOfficeGallery
