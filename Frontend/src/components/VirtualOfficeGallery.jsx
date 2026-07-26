import officeImage from '../assets/office-workspace.jfif'

function VirtualOfficeGallery() {
  return (
    <section className="vo-gallery-single">
      <img
        src={officeImage}
        alt="Modern office workspace with laptop and dashboard"
        className="vo-gallery-single-img"
      />
    </section>
  )
}

export default VirtualOfficeGallery