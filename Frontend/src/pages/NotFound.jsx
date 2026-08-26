import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Aegis Coworking</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Explore Aegis Coworking's office spaces, virtual offices, and meeting rooms in ADGM, Addax Tower, Abu Dhabi."
        />
      </Helmet>
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1.5rem',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>404</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '480px' }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
          been moved or no longer exists.
        </p>
        <Link
          to="/"
          className="btn-primary"
          style={{ display: 'inline-block', padding: '0.75rem 1.75rem' }}
        >
          Back to Home
        </Link>
      </section>
    </>
  )
}

export default NotFound
