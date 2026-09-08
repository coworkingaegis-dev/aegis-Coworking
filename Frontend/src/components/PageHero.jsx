// function PageHero({ title, subtitle }) {
//   return (
//     <section className="page-hero">
//       <h1>{title}</h1>
//       {subtitle && <p>{subtitle}</p>}
//     </section>
//   )
// }

// export default PageHero


function PageHero({ title, subtitle, description }) {
  return (
    <section className="page-hero">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {description && <p className="page-hero-description">{description}</p>}
    </section>
  )
}
export default PageHero
