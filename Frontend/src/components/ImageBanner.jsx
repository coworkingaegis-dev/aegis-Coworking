function ImageBanner({ image, alt = "Coworking space" }) {
  return (
    <section className="image-banner">
      <img src={image} alt={alt} />
    </section>
  )
}

export default ImageBanner