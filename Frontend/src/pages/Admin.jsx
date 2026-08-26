// import { Helmet } from 'react-helmet-async'
// import { useEffect, useState } from 'react'
// import { supabase } from '../supabaseClient'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// function Admin() {
//   const [inquiries, setInquiries] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetchInquiries()
//   }, [])

//   const fetchInquiries = async () => {
//     setLoading(true)
//     const { data, error } = await supabase
//       .from('inquiries')
//       .select('*')
//       .order('created_at', { ascending: false })

//     if (error) {
//       console.error(error)
//       setError(error.message)
//     } else {
//       setInquiries(data)
//     }
//     setLoading(false)
//   }

//   const formatDate = (dateStr) => {
//     const date = new Date(dateStr)
//     return date.toLocaleString('en-GB', {
//       day: '2-digit',
//       month: 'short',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//     })
//   }

//   const labelMap = {
//     'dedicated-desk-adgm': 'Dedicated Desk ADGM',
//     'virtual-office': 'Virtual Office',
//     'private-office': 'Private Office',
//     'meeting-room': 'Meeting Room',
//   }

//   return (
//     <div className="App">
//       <Helmet>
//         <meta name="robots" content="noindex, nofollow" />
//         <title>Admin | Aegis Coworking</title>
//       </Helmet>

//       <Navbar />

//       <section className="admin-section">
//         <div className="admin-header">
//           <div>
//             <span className="contact-eyebrow">ADMIN</span>
//             <h1>Inquiries</h1>
//             <p className="contact-subtitle" style={{ margin: 0 }}>
//               {inquiries.length} total submission{inquiries.length !== 1 ? 's' : ''}
//             </p>
//           </div>
//           <button className="btn-send-v2" onClick={fetchInquiries}>
//             Refresh
//           </button>
//         </div>

//         {loading && <p className="admin-status">Loading inquiries...</p>}
//         {error && <p className="admin-status error">Error: {error}</p>}

//         {!loading && !error && inquiries.length === 0 && (
//           <p className="admin-status">No inquiries yet.</p>
//         )}

//         {!loading && !error && inquiries.length > 0 && (
//           <div className="admin-table-wrap">
//             <table className="admin-table">
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Contact Number</th>
//                   <th>Company</th>
//                   <th>Interested In</th>
//                   <th>Message</th>
//                   <th>Agreed</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {inquiries.map((row) => (
//                   <tr key={row.id}>
//                     <td>{formatDate(row.created_at)}</td>
//                     <td>{row.name}</td>
//                     <td>{row.email}</td>
//                     <td>{row.contact_number}</td>
//                     <td>{row.company_name || '—'}</td>
//                     <td>
//                       <span className="admin-tag">
//                         {labelMap[row.interested_in] || row.interested_in}
//                       </span>
//                     </td>
//                     <td className="admin-message-cell">{row.message}</td>
//                     <td>{row.agreed_to_terms ? '✓' : '—'}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Admin









import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Admin() {
  const [session, setSession] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(null)
  const [loggingIn, setLoggingIn] = useState(false)

  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setAuthLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    )

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (session) fetchInquiries()
  }, [session])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError(null)
    setLoggingIn(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setLoginError(error.message)
    setLoggingIn(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  const fetchInquiries = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      console.error(error)
      setError(error.message)
    } else {
      setInquiries(data)
    }
    setLoading(false)
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const labelMap = {
    'dedicated-desk-adgm': 'Dedicated Desk ADGM',
    'virtual-office': 'Virtual Office',
    'private-office': 'Private Office',
    'meeting-room': 'Meeting Room',
  }

  // still checking for an existing session
  if (authLoading) {
    return (
      <div className="App">
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
          <title>Admin | Aegis Coworking</title>
        </Helmet>
        <Navbar />
        <section className="admin-section">
          <p className="admin-status">Checking session...</p>
        </section>
        <Footer />
      </div>
    )
  }

  // not logged in -> show login form instead of the table
  if (!session) {
    return (
      <div className="App">
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
          <title>Admin Login | Aegis Coworking</title>
        </Helmet>
        <Navbar />
        <section className="admin-section">
          <div className="admin-header">
            <div>
              <span className="contact-eyebrow">ADMIN</span>
              <h1>Login</h1>
            </div>
          </div>
          <form onSubmit={handleLogin} style={{ maxWidth: 360 }}>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="admin-email">Email</label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: 8 }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="admin-password">Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: 8 }}
              />
            </div>
            {loginError && <p className="admin-status error">{loginError}</p>}
            <button type="submit" className="btn-send-v2" disabled={loggingIn}>
              {loggingIn ? 'Logging in...' : 'Log in'}
            </button>
          </form>
        </section>
        <Footer />
      </div>
    )
  }

  // logged in -> your original admin table, unchanged
  return (
    <div className="App">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Admin | Aegis Coworking</title>
      </Helmet>
      <Navbar />
      <section className="admin-section">
        <div className="admin-header">
          <div>
            <span className="contact-eyebrow">ADMIN</span>
            <h1>Inquiries</h1>
            <p className="contact-subtitle" style={{ margin: 0 }}>
              {inquiries.length} total submission{inquiries.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn-send-v2" onClick={fetchInquiries}>
              Refresh
            </button>
            <button className="btn-send-v2" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
        {loading && <p className="admin-status">Loading inquiries...</p>}
        {error && <p className="admin-status error">Error: {error}</p>}
        {!loading && !error && inquiries.length === 0 && (
          <p className="admin-status">No inquiries yet.</p>
        )}
        {!loading && !error && inquiries.length > 0 && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Company</th>
                  <th>Interested In</th>
                  <th>Message</th>
                  <th>Agreed</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((row) => (
                  <tr key={row.id}>
                    <td>{formatDate(row.created_at)}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.contact_number}</td>
                    <td>{row.company_name || '—'}</td>
                    <td>
                      <span className="admin-tag">
                        {labelMap[row.interested_in] || row.interested_in}
                      </span>
                    </td>
                    <td className="admin-message-cell">{row.message}</td>
                    <td>{row.agreed_to_terms ? '✓' : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <Footer />
    </div>
  )
}

export default Admin
