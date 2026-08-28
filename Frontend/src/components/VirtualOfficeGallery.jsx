import officeImage from '../assets/aegis-coworking-virtual-office-ADGM.jpg'

function VirtualOfficeGallery() {
  return (
    <section className="vo-gallery-single">
     <img
  src={officeImage}
  alt="Virtual office at Aegis Coworking in ADGM Abu Dhabi"
  className="vo-gallery-single-img"
  width="1600"
  height="1066"
  loading="lazy"
  decoding="async"
/>
    </section>
  )
}

export default VirtualOfficeGallery
