function ImageBanner({ image, alt = "Coworking space in Abu Dhabi", width, height }) {
  return (
    <section className="image-banner">
      <img src={image} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
    </section>
  )
}

export default ImageBanner
