import officeImage from '../assets/aegis-coworking-private-office-ADGM.webp'

function PrivateOfficeGallery() {
  return (
    <section className="vo-gallery-single">
      <img
        src={officeImage}
        alt="Private office interior at Aegis Coworking in ADGM, Abu Dhabi"
        className="vo-gallery-single-img"
        width="1448"
        height="1086"
        loading="lazy"
        decoding="async"
      />
    </section>
  )
}

export default PrivateOfficeGallery
