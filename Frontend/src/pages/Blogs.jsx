import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { supabase } from '../supabaseClient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { usePreloadedData } from '../PreloadedDataContext.jsx'

function Blogs() {
  const preloaded = usePreloadedData()
  const hasPreloaded = preloaded?.type === 'blogsList'

  const [blogs, setBlogs] = useState(hasPreloaded ? preloaded.blogs : [])
  const [loading, setLoading] = useState(!hasPreloaded)
  const [error, setError] = useState(null)

useEffect(() => {
    if (hasPreloaded) {
      window.prerenderReady = true
      return
    }
    window.prerenderReady = false
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })

   if (error) {
      setError(error.message)
    } else {
      setBlogs(data)
    }
    setLoading(false)
    window.prerenderReady = true
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  const getExcerpt = (post) => {
    const text = post.summary
      ? post.summary
      : post.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    return text.length > 140 ? text.slice(0, 140) + '...' : text
  }

  return (
    <div className="App">
      <Helmet>
        <title>Coworking & ADGM Business Insights Blog | Abu Dhabi</title>
        <meta
          name="description"
          content="Guides on ADGM business setup, coworking trends and Abu Dhabi office space tips. Stay updated with expert insights from the Aegis Coworking blog today."
        />
        <link rel="canonical" href="https://www.aegiscoworking.ae/blogs" />

        <meta property="og:title" content="Aegis Coworking Blog | ADGM Insights" />
        <meta
          property="og:description"
          content="ADGM licensing guides, workspace trends, and business tips from Aegis Coworking."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aegiscoworking.ae/blogs" />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Aegis Coworking Blog | ADGM Insights" />
<meta name="twitter:description" content="ADGM licensing guides, workspace trends, and business tips from Aegis Coworking." />
<meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.aegiscoworking.ae/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://www.aegiscoworking.ae/blogs"
      }
    ]
  })}
</script>
</Helmet>

      <Navbar />

      <section className="page-hero">
        <h1>The Aegis Coworking Blogs</h1>
        <p>Deep dives into ADGM licensing, workspace trends, and everything growing businesses need to know.</p>
      </section>

      <section className="blogs-section">
        {loading && (
          <div className="blogs-grid">
            {[...Array(3)].map((_, i) => (
              <div className="blog-skeleton" key={i}>
                <div className="blog-skeleton-image" />
                <div className="blog-skeleton-body">
                  <div className="blog-skeleton-line short" />
                  <div className="blog-skeleton-line" />
                  <div className="blog-skeleton-line" />
                  <div className="blog-skeleton-line short" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && <p className="blogs-status error">Error: {error}</p>}

        {!loading && !error && blogs.length === 0 && (
          <p className="blogs-status">No blog posts yet. Be the first to write one!</p>
        )}

        {!loading && !error && blogs.length > 0 && (
          <div className="blogs-grid">
            {blogs.map((post, i) => (
              <motion.div
                className="blog-card"
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {post.image_url && (
                  <div className="blog-card-image">
                    <img src={post.image_url} alt={post.title} loading="lazy" decoding="async" />
                    <span className="blog-card-date">{formatDate(post.created_at)}</span>
                    {post.category && <span className="blog-tag">{post.category}</span>}
                  </div>
                )}
                <div className="blog-card-body">
                  <Link to={`/blog/${post.id}`} className="blog-title-link">
                   <h2>{post.title}</h2>
                  </Link>
                  <p className="blog-excerpt">{getExcerpt(post)}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-author">BY {post.author?.toUpperCase()}</span>
                    <Link to={`/blog/${post.id}`} className="blog-read-more">
                      Read More <span>→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <section className="blog-final-cta">
        <div className="blog-final-cta-card">
          <h2>Find your space. Grow your business. Join ADGM.</h2>
          <p>Join hundreds of licensed firms who found their perfect workspace with Aegis Coworking's flexible plans.</p>
          <Link to="/contact">
            <button className="blog-final-cta-btn">
              REQUEST QUOTE 
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blogs
