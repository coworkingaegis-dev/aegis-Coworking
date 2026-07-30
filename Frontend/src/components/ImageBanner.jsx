// function ImageBanner({ image, alt = "Coworking space" }) {
//   return (
//     <section className="image-banner">
//       <img src={image} alt={alt} />
//     </section>
//   )
// }

// export default ImageBanner





function ImageBanner({ image, alt = "Coworking space in Abu Dhabi" }) {
  return (
    <section className="image-banner">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </section>
  )
}

export default ImageBanner
