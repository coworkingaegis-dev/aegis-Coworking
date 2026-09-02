import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { supabase } from '../supabaseClient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { usePreloadedData } from '../PreloadedDataContext.jsx'

function BlogDetail() {
  const { id } = useParams()
  const { slug } = useParams()
  const preloaded = usePreloadedData()
  const hasPreloaded =
    preloaded?.type === 'blogDetail' && String(preloaded.post?.id) === String(id)
  preloaded?.type === 'blogDetail' && String(preloaded.post?.slug) === String(slug)

  const [post, setPost] = useState(hasPreloaded ? preloaded.post : null)
  const [relatedPosts, setRelatedPosts] = useState(hasPreloaded ? preloaded.relatedPosts : [])
  const [loading, setLoading] = useState(!hasPreloaded)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

useEffect(() => {
    if (hasPreloaded) {
      window.prerenderReady = true
      return
    }
    window.prerenderReady = false
    fetchPost()
  }, [id])
  }, [slug])

  const fetchPost = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .eq('slug', slug)
      .single()

if (error) {
      setError(error.message)
      setLoading(false)
      window.prerenderReady = true
      return
    }

    setPost(data)
    setLoading(false)
    window.prerenderReady = true
    fetchRelatedPosts(data)
  }
  const fetchRelatedPosts = async (currentPost) => {
    const currentId = Number(currentPost.id)
    let relatedData = []

    if (currentPost.category) {
      const { data: sameCategory } = await supabase
        .from('blogs')
        .select('*')
        .neq('id', currentId)
        .eq('category', currentPost.category)
        .order('created_at', { ascending: false })
        .limit(3)

      if (sameCategory && sameCategory.length > 0) {
        relatedData = sameCategory
      }
    }

    if (relatedData.length === 0) {
      const { data } = await supabase
        .from('blogs')
        .select('*')
        .neq('id', currentId)
        .order('created_at', { ascending: false })
        .limit(3)

      relatedData = data || []
    }

    setRelatedPosts(relatedData.filter((p) => Number(p.id) !== currentId))
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

  const estimateReadTime = (html) => {
    const plain = html.replace(/<[^>]+>/g, ' ')
    const words = plain.trim().split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.round(words / 200))
  }

  const getExcerpt = (post) => {
    if (post.summary) return post.summary
    const plain = post.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    return plain.length > 100 ? plain.slice(0, 100) + '...' : plain
  }

  const getMetaDescription = (post) => {
    const text = post.summary
      ? post.summary
      : post.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    return text.length > 155 ? text.slice(0, 155) + '...' : text
  }

 const getSeoTitle = (post) => {
  return `${post.title} | Aegis Coworking Blog`
}

  const handleShare = async () => {
    const shareUrl = window.location.href
    const shareData = {
      title: post.title,
      text: post.summary || 'Check out this post',
      url: shareUrl,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // user cancelled the share sheet
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Copy failed:', err)
      }
    }
  }

  return (
    <div className="App">
      {post && (
        <Helmet>
          <title>{getSeoTitle(post)}</title>
          <meta name="description" content={getMetaDescription(post)} />
          <link rel="canonical" href={`https://www.aegiscoworking.ae/blog/${post.id}`} />
          <link rel="canonical" href={`https://www.aegiscoworking.ae/blog/${post.slug}`} />

          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={getMetaDescription(post)} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://www.aegiscoworking.ae/blog/${post.id}`} />
          <meta property="og:url" content={`https://www.aegiscoworking.ae/blog/${post.slug}`} />
          <meta
  property="og:image"
  content={post.image_url || 'https://www.aegiscoworking.ae/og-image.jpg'}
/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={post.title} />
<meta name="twitter:description" content={getMetaDescription(post)} />
<meta
  name="twitter:image"
  content={post.image_url || 'https://www.aegiscoworking.ae/og-image.jpg'}
/>

<meta property="article:author" content={post.author} />
          {post.category && <meta property="article:section" content={post.category} />}

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "description": getMetaDescription(post),
              "image": post.image_url || "https://www.aegiscoworking.ae/og-image.jpg",
              "author": {
                "@type": "Person",
                "name": post.author,
              },
              "publisher": {
                "@type": "Organization",
                "name": "Aegis Coworking",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.aegiscoworking.ae/og-image.jpg",
                },
              },
              "datePublished": post.created_at,
              "dateModified": post.updated_at || post.created_at,
"mainEntityOfPage": {
  "@type": "WebPage",
  "@id": `https://www.aegiscoworking.ae/blog/${post.id}`,
  "@id": `https://www.aegiscoworking.ae/blog/${post.slug}`,
},
})}
</script>
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
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.aegiscoworking.ae/blog/${post.id}`
        item: `https://www.aegiscoworking.ae/blog/${post.slug}`
      }
    ]
  })}
</script>
</Helmet>
)}

      <Navbar />

      {loading && (
        <section className="blog-detail-section">
          <p className="blogs-status">Loading post...</p>
        </section>
      )}

      {error && (
        <section className="blog-detail-section">
          <p className="blogs-status error">Post not found.</p>
          <Link to="/blogs" className="blog-back-link">← Back to Blog</Link>
        </section>
      )}

      {!loading && !error && post && (
        <motion.section
          className="blog-detail-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blogs" className="blog-back-link">← Back to Blog</Link>

          {post.category && <span className="blog-tag">{post.category}</span>}
          <h1 className="blog-detail-title">{post.title}</h1>

          <div className="blog-detail-meta">
            <span className="meta-author">{post.author}</span>
            <span className="dot"></span>
            <span>{formatDate(post.created_at)}</span>
            <span className="dot"></span>
            <span>{estimateReadTime(post.content)} min read</span>
          </div>

          {post.image_url && (
            <div className="blog-detail-image">
             <img src={post.image_url} alt={post.title} decoding="async" fetchpriority="high" />
            </div>
          )}

          {post.summary && (
            <p className="blog-detail-summary">{post.summary}</p>
          )}

          <div
            className="blog-detail-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="blog-detail-cta">
            <h2>Let's Build Your Workspace</h2>
            <p>Where productivity meets community, every single day</p>
            <Link to="/contact">
              <button className="btn-primary">REQUEST QUOTE</button>
            </Link>
          </div>

          <div className="blog-share">
            <span className="blog-share-label">Share this insight:</span>
            <button className="blog-share-btn" onClick={handleShare} aria-label="Share this post">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
            {copied && <span className="blog-share-copied">Link copied!</span>}
          </div>

          {relatedPosts.length > 0 && (
            <div className="related-posts">
              <h2>Related Posts</h2>
              <div className="related-posts-grid">
                {relatedPosts.map((rp) => (
                  <Link to={`/blog/${rp.id}`} key={rp.id} className="related-post-card">
                     <Link to={`/blog/${rp.slug}`} key={rp.id} className="related-post-card">
                    {rp.image_url && (
                      <div className="related-post-image">
                       <img src={rp.image_url} alt={rp.title} loading="lazy" decoding="async" />
                      </div>
                    )}
                    <div className="related-post-body">
                      <h3>{rp.title}</h3>
                      <p>{getExcerpt(rp)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      )}

      <Footer />
    </div>
  )
}

export default BlogDetail
